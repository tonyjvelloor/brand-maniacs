import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';

const redis = (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { orderId, paymentId, signature, leadInfo, isSandbox } = body;

    const leadId = uuidv4();
    const timestamp = new Date().toISOString();

    // Verify signature if secret and real Razorpay are active
    const razorpaySecret = process.env.RAZORPAY_KEY_SECRET;
    let verified = false;

    if (razorpaySecret && orderId && paymentId && signature && !isSandbox) {
      const generatedSignature = crypto
        .createHmac('sha256', razorpaySecret)
        .update(`${orderId}|${paymentId}`)
        .digest('hex');

      if (generatedSignature === signature) {
        verified = true;
      }
    } else {
      // Sandbox or client-side verify
      verified = true;
    }

    if (!verified) {
      return NextResponse.json({ error: "Invalid payment signature." }, { status: 400 });
    }

    const rescueBooking = {
      id: leadId,
      orderId,
      paymentId,
      amount: 2499,
      status: "PAID",
      timestamp,
      contact: leadInfo,
      questionnaireCompleted: false,
      questionnaireData: null,
      meetingScheduled: false,
    };

    // Store in Upstash Redis
    if (redis) {
      try {
        await redis.set(`ads_rescue:${leadId}`, JSON.stringify(rescueBooking));
        await redis.set(`ads_rescue:order:${orderId}`, leadId);
        await redis.lpush('ads_rescue_list', leadId);
      } catch (redisErr) {
        console.error("Failed saving to Redis:", redisErr);
      }
    }

    return NextResponse.json({
      success: true,
      leadId,
      orderId,
      message: "Payment successfully verified."
    });
  } catch (error: any) {
    console.error("Verification error:", error);
    return NextResponse.json({ error: "Verification failed." }, { status: 500 });
  }
}
