import { generateText } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';
import { NextResponse } from 'next/server';

// Allow responses up to 60 seconds
export const maxDuration = 60;

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { url, revenue, spend, cac, bottleneck } = body;

        // Basic validation
        if (!url || !revenue || !spend || !cac || !bottleneck) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const systemPrompt = `You are a world-class Fractional Chief Growth Officer for Indian mid-market digital/D2C brands. Your style is direct, punchy, performance-driven, and slightly "brutalist"—focusing on hard ROI, revenue attribution, and systemic scale. You do not use fluff or jargon.

The user has submitted the following data for an AI Growth Audit:
- Website URL: ${url}
- Monthly Revenue Range: ${revenue}
- Monthly Ad Spend: ${spend}
- Current CAC: ${cac}
- Self-Identified Primary Bottleneck: ${bottleneck}

Generate a concise, 3-part "Growth Infrastructure Blueprint" for this brand. 

STRUCTURE YOUR RESPONSE LIKE THIS:

# 1. THE BRUTAL TRUTH (Diagnosis)
[Provide a blunt, insightful 2-3 sentence analysis of their current situation, connecting their spend, CAC, and bottleneck. Call out the flaw in their current scaling motion.]

# 2. THE REVENUE LEAK (Immediate Fix)
[Identify one specific, tactical thing they must fix immediately based on their inputs. Focus on performance marketing, tracking, or creator ROI.]

# 3. THE INFRASTRUCTURE BLUEPRINT (Next 90 Days)
[Provide 3 bullet points of high-level strategic changes they need to implement to scale sustainably.]

FORMATTING RULES:
- Keep it under 250 words total.
- Use Markdown formatting for headings and lists.
- Be authoritative and confident.
- Do not add standard AI conversational openings/closings like "Here is your plan" or "Good luck!". Just start with the headers.`;

        const { text } = await generateText({
            model: anthropic('claude-3-5-sonnet-20241022'), // Or latest model
            prompt: systemPrompt,
        });

        return NextResponse.json({ report: text });
    } catch (error) {
        console.error('Audit Generation Error:', error);
        return NextResponse.json(
            { error: 'Failed to generate audit. Please try again later.' },
            { status: 500 }
        );
    }
}
