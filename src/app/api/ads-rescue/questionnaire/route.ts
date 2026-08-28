import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { leadId, orderId, questionnaire } = body;

    if (redis && (leadId || orderId)) {
      try {
        const id = leadId || (await redis.get<string>(`ads_rescue:order:${orderId}`));
        if (id) {
          const existing = await redis.get<string>(`ads_rescue:${id}`);
          let record: any = {};
          if (existing) {
            record = typeof existing === 'string' ? JSON.parse(existing) : existing;
          }
          record.questionnaireCompleted = true;
          record.questionnaireData = questionnaire;
          record.questionnaireSubmittedAt = new Date().toISOString();

          await redis.set(`ads_rescue:${id}`, JSON.stringify(record));
        }
      } catch (redisErr) {
        console.error("Redis questionnaire error:", redisErr);
      }
    }

    return NextResponse.json({ success: true, message: "Questionnaire submitted successfully." });
  } catch (error: any) {
    console.error("Questionnaire submission error:", error);
    return NextResponse.json({ error: "Failed to submit questionnaire." }, { status: 500 });
  }
}
