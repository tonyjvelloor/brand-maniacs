import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { leadInfo, amount = 2499 } = body;

    if (!leadInfo?.name || !leadInfo?.email || !leadInfo?.phone) {
      return NextResponse.json({ error: "Missing required contact details." }, { status: 400 });
    }

    const orderId = "order_" + uuidv4().replace(/-/g, '').substring(0, 16);
    const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
    const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;

    // Check if live Razorpay keys are available
    if (razorpayKeyId && razorpayKeySecret) {
      try {
        const auth = Buffer.from(`${razorpayKeyId}:${razorpayKeySecret}`).toString('base64');
        const rzpRes = await fetch('https://api.razorpay.com/v1/orders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${auth}`,
          },
          body: JSON.stringify({
            amount: amount * 100, // in paise
            currency: 'INR',
            receipt: `rcpt_${orderId}`,
            notes: {
              lead_name: leadInfo.name,
              lead_company: leadInfo.company,
              lead_email: leadInfo.email,
              lead_phone: leadInfo.phone,
              ad_spend: leadInfo.adSpend,
              platforms: leadInfo.platforms,
            }
          })
        });

        if (rzpRes.ok) {
          const rzpData = await rzpRes.json();
          return NextResponse.json({
            success: true,
            orderId: rzpData.id,
            amount: rzpData.amount,
            currency: rzpData.currency,
            keyId: razorpayKeyId,
            isLiveMode: true,
          });
        }
      } catch (rzpErr) {
        console.warn("Razorpay API call failed, falling back to sandbox mode:", rzpErr);
      }
    }

    // Fallback Sandbox / Dev Order
    return NextResponse.json({
      success: true,
      orderId: orderId,
      amount: amount * 100,
      currency: 'INR',
      keyId: razorpayKeyId || 'rzp_test_mock_key',
      isLiveMode: false,
    });
  } catch (error: any) {
    console.error("Order creation error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
