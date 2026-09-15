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

          // Forward to Webhook for Google Sheets / CRM
          if (process.env.LEAD_WEBHOOK_URL) {
            try {
              const webhookPayload = {
                Source: "Ads Rescue Questionnaire",
                Timestamp: record.questionnaireSubmittedAt,
                Lead_ID: id,
                Order_ID: record.orderId,
                Name: record.contact?.name || "",
                Email: record.contact?.email || "",
                Company: record.contact?.company || "",
                AOV: questionnaire.aov || "",
                Target_CPA: questionnaire.targetCpa || "",
                Current_CPA: questionnaire.currentCpa || "",
                Best_Creatives: questionnaire.bestCreatives || "",
                Biggest_Challenge: questionnaire.biggestChallenge || "",
                Competitors: questionnaire.competitors || "",
              };

              await fetch(process.env.LEAD_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(webhookPayload)
              });
            } catch (webhookErr) {
              console.error("Webhook forwarding failed:", webhookErr);
            }
          }
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
