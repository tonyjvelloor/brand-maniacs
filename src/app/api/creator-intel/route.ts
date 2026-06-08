import { generateText } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';
import { NextResponse } from 'next/server';

export const maxDuration = 60;

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { handle, platform, followers, avgViews, niche } = body;

        if (!handle || !platform || !followers || !avgViews || !niche) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const systemPrompt = `You are the core logic engine of The Brand Maniacs' "Creator Intelligence Layer". 
You analyze creator metrics to determine their absolute ROI viability for D2C scaling campaigns.
You are brutal, analytical, and focused entirely on revenue generation, not vanity metrics.

Input Target:
- Handle: ${handle}
- Platform: ${platform}
- Followers: ${followers}
- Avg Views/Reel: ${avgViews}
- Content Niche: ${niche}

Generate a concise, brutalist predictive analysis. Structurally use markdown.

# CREATOR ROI PREDICTION: [Verdict: e.g., HIGH CONFIDENCE / RISKY / LOW VIABILITY]

## 1. VANITY VS REALITY
[Briefly assess their view-to-follower ratio. Is this an engaged audience or a dead following? Be harsh if they have high followers but low views.]

## 2. REVENUE ATTRIBUTION FIT
[How does their specific niche translate to D2C sales? Will they drive clicks or just likes? What type of product fits them best?]

## 3. INTEGRATION BLUEPRINT
[Give 2-3 specific bullet points on how The Brand Maniacs should script/direct this creator for a "Creator Scale Sprint" campaign to force ROI.]

Tone: Aggressive, analytical, no fluff.`;

        const { text } = await generateText({
            model: anthropic('claude-3-5-sonnet-20241022'),
            prompt: systemPrompt,
        });

        return NextResponse.json({ report: text });
    } catch (error) {
        console.error('Creator Intel Error:', error);
        return NextResponse.json(
            { error: 'Failed to generate analysis. Please try again later.' },
            { status: 500 }
        );
    }
}
