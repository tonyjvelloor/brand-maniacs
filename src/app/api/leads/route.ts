import { NextResponse } from 'next/server';
import { generateObject } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';
import { Redis } from '@upstash/redis';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import * as cheerio from 'cheerio';

// Initialize Redis if env vars are present
const redis = (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) 
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

const AI_BRIEF_SCHEMA = z.object({
    executiveSummary: z.string().describe("Executive summary of the company and their likely situation"),
    likelyBusinessStage: z.string().describe("Inferred business stage based on inputs and website"),
    websiteHealth: z.object({
        aiObservations: z.array(z.string()).describe("Messaging, positioning, and value prop clarity"),
        technicalObservations: z.array(z.string()).describe("Structural issues, missing metadata, UX issues, CTA presence")
    }),
    messagingAudit: z.object({
        valueProposition: z.string(),
        primaryAudience: z.string(),
        messagingClarity: z.string(),
        trustSignals: z.string(),
        differentiation: z.string(),
        callToActionQuality: z.string()
    }).describe("Evaluation of their current messaging"),
    growthConstraints: z.array(z.string()).describe("Likely bottlenecks based on their situation"),
    immediateOpportunities: z.array(z.string()).describe("Quick wins or high-leverage areas to fix"),
    relevantCaseStudies: z.array(z.string()).describe("Which of our case studies (e.g. FlexPilot for SaaS) are most relevant"),
    suggestedQuestions: z.array(z.string()).describe("Questions to ask on the strategy call"),
    potentialObjections: z.array(z.object({
        concern: z.string(),
        suggestedResponse: z.string()
    })).describe("Likely objections they will raise and how to handle them"),
    suggestedEngagementPath: z.array(z.string()).describe("Sequential phases of engagement (e.g., Growth Sprint -> Website -> Performance) with rationale"),
    growthReadiness: z.object({
        brandPositioning: z.number().describe("Score 0-20"),
        website: z.number().describe("Score 0-20"),
        leadGeneration: z.number().describe("Score 0-20"),
        marketingSystems: z.number().describe("Score 0-20"),
        automation: z.number().describe("Score 0-20"),
        totalScore: z.number().describe("Sum of the above scores (0-100)"),
        explanation: z.string().describe("AI explanation of why they received this score")
    }).describe("Calculated readiness score based on transparent criteria"),
    actionPlan: z.array(z.object({
        phase: z.string(),
        title: z.string(),
        description: z.string()
    })).describe("Suggested 90-day implementation phases"),
    confidenceScores: z.object({
        websiteMessaging: z.number().describe("Confidence in messaging analysis (0-100)"),
        brandPositioning: z.number().describe("Confidence in brand positioning (0-100)"),
        automation: z.number().describe("Confidence in automation maturity (0-100)")
    })
});

async function fetchWebsiteData(url: string) {
    if (!url) return null;
    try {
        // Ensure valid URL
        const targetUrl = url.startsWith('http') ? url : `https://${url}`;
        
        // Fetch with timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 sec timeout
        
        const res = await fetch(targetUrl, { signal: controller.signal });
        clearTimeout(timeoutId);
        
        const html = await res.text();
        const $ = cheerio.load(html);
        
        const title = $('title').text() || '';
        const metaDesc = $('meta[name="description"]').attr('content') || '';
        const h1 = $('h1').text() || '';
        
        // Get meaningful body text (strip scripts, styles)
        $('script, style, noscript, iframe, img, svg').remove();
        const rawBody = $('body').text().replace(/\s+/g, ' ').trim();
        const bodyPreview = rawBody.substring(0, 2000); // First 2000 chars

        return { title, metaDesc, h1, bodyPreview };
    } catch (e) {
        console.error("Failed to fetch website:", e);
        return null;
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { answers, leadInfo } = body;

        // Basic server-side validation
        if (!leadInfo?.name || !leadInfo?.email || !leadInfo?.company) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const leadId = uuidv4();
        const timestamp = new Date().toISOString();

        // 1. Scrape Website Data (if provided)
        let websiteData = null;
        if (leadInfo.website) {
            websiteData = await fetchWebsiteData(leadInfo.website);
        }

        let aiBrief = null;

        // 2. Generate AI Brief
        if (process.env.ANTHROPIC_API_KEY) {
            try {
                const { object } = await generateObject({
                    model: anthropic('claude-3-5-sonnet-20240620'),
                    schema: AI_BRIEF_SCHEMA,
                    prompt: `
                    Analyze the following lead submission for a growth/digital product agency.
                    
                    LEAD INFO:
                    Name: ${leadInfo.name}
                    Company: ${leadInfo.company}
                    Website URL provided: ${leadInfo.website || 'None'}
                    Industry: ${answers.industry || 'Not specified'}
                    Team Size: ${answers.teamSize || 'Not specified'}
                    
                    ESTIMATOR ANSWERS:
                    Goal/Bottleneck: ${answers.goal}
                    Stage: ${answers.stage}
                    Budget: ${answers.budget}

                    ${websiteData ? `
                    WEBSITE OBSERVATIONS (Raw Scrape):
                    Title: ${websiteData.title}
                    Meta Description: ${websiteData.metaDesc}
                    H1: ${websiteData.h1}
                    Body Preview: ${websiteData.bodyPreview}
                    ` : 'No website data was successfully retrieved.'}

                    Generate a highly structured Client Intelligence Brief. 
                    
                    Instructions:
                    - Evaluate Growth Readiness (5 categories, 0-20 points each).
                    - Separate Website Health into AI (messaging) and Technical (structure/SEO).
                    - Identify likely objections (e.g. Budget) and suggest responses (e.g. Start with a smaller Growth Sprint).
                    - Provide confidence scores (0-100) for your assessments based on the amount of data available.
                    `
                });
                aiBrief = object;
            } catch (aiError) {
                console.error("AI Generation failed:", aiError);
            }
        }

        const leadData = {
            id: leadId,
            status: "New",
            assignedTo: "Unassigned",
            timestamp,
            contact: leadInfo,
            rawAnswers: answers,
            websiteData,
            aiBrief
        };

        // 3. Store in Redis
        if (redis) {
            await redis.set(`lead:${leadId}`, JSON.stringify(leadData));
            await redis.lpush("leads_list", leadId);
        } else {
            console.warn("Redis credentials not found. Lead stored only in memory for this session.", leadData);
        }

        return NextResponse.json({ success: true, id: leadId, aiBrief });
    } catch (error) {
        console.error("Lead capture error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
