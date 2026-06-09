import { generateText } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import type { AuditSubmission } from '@/app/api/audit/route';

export const maxDuration = 60;

const DB_PATH = path.join(process.cwd(), 'data', 'audit-submissions.json');

async function readSubmissions(): Promise<AuditSubmission[]> {
    try {
        const raw = await fs.readFile(DB_PATH, 'utf-8');
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

async function writeSubmissions(data: AuditSubmission[]): Promise<void> {
    await fs.mkdir(path.dirname(DB_PATH), { recursive: true });
    await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
}

// PATCH — update status (qualify / reject)
export async function PATCH(req: Request) {
    try {
        const { id, status } = await req.json();
        const submissions = await readSubmissions();
        const idx = submissions.findIndex((s) => s.id === id);
        if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 });
        submissions[idx].status = status;
        await writeSubmissions(submissions);
        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
    }
}

// POST — generate AI report for a qualified submission
export async function POST(req: Request) {
    try {
        const { id } = await req.json();
        const submissions = await readSubmissions();
        const sub = submissions.find((s) => s.id === id);

        if (!sub) return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
        if (sub.status !== 'qualified') return NextResponse.json({ error: 'Submission not qualified yet' }, { status: 403 });

        const prompt = `You are the Chief Growth Officer at The Brand Maniacs — a premium brand growth agency for Indian mid-market brands. You're brutally honest, psychology-driven, and obsessed with outcomes. You just completed a thorough qualification call with a new prospect.

Here is all the information collected about the company:

**Company:** ${sub.companyName}
**Contact:** ${sub.contactName} (${sub.role})
**Website:** ${sub.website}
**Industry:** ${sub.industry}
**Business Age:** ${sub.businessAge}
**Team Size:** ${sub.teamSize}
**Monthly Revenue:** ${sub.monthlyRevenue}
**Monthly Ad Spend:** ${sub.monthlyAdSpend}
**Current CAC:** ${sub.cac}
**Active Channels:** ${(sub.currentChannels || []).join(', ')}
**Currently with Agency:** ${sub.currentAgency}
**Primary Challenge:** ${sub.primaryChallenge}
**Goals:** ${sub.goals}
**Timeline:** ${sub.timeline}

Generate a PERSONALIZED, DETAILED Audit Report for this company.

STRUCTURE:

# The Brand Maniacs — Audit Report: ${sub.companyName}

## 1. THE SITUATION (Honest Diagnosis)
[3–4 sentences. Be specific to their revenue, spend, and industry. What's the brutal truth about where they stand?]

## 2. THE REVENUE LEAK (Where Money Is Slipping)
[2–3 specific revenue leaks based on their channels, CAC, and challenge. Use hard language — call out exactly what's broken.]

## 3. THE MANIAC METHOD™ RECOMMENDATION
[Which of our 4 engines should they prioritize first and why? Identity Engine™ / Attention Engine™ / Revenue Engine™ / Authority Engine™. Be specific.]

## 4. 90-DAY GROWTH BLUEPRINT
[5 specific, actionable steps tailored to their situation. Each step should include a "why this, why now" rationale.]

## 5. WHAT TO EXPECT (Realistic Outcomes)
[Based on their current numbers, what realistic improvement in ROAS/CAC/revenue can they expect in 90 days with The Brand Maniacs? Give ranges.]

## 6. NEXT STEP
[A single, clear call to action. Should feel personalized to their situation.]

RULES:
- Never use generic advice. Reference their actual numbers and industry.
- Keep each section punchy — under 150 words each.
- Use Markdown formatting.
- No fluff. No "great question!" energy. Just strategic clarity.`;

        const { text } = await generateText({
            model: anthropic('claude-3-5-sonnet-20241022'),
            prompt,
        });

        // Save the report back
        const idx = submissions.findIndex((s) => s.id === id);
        submissions[idx].report = text;
        submissions[idx].status = 'report_sent';
        await writeSubmissions(submissions);

        return NextResponse.json({ report: text });
    } catch (error) {
        console.error('Report generation error:', error);
        return NextResponse.json({ error: 'Failed to generate report' }, { status: 500 });
    }
}
