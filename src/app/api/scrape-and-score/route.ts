import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import { generateObject } from 'ai';
import { anthropic } from '@ai-sdk/anthropic';
import { z } from 'zod';

export const maxDuration = 60; // Allow more time for AI processing

const schema = z.object({
  aiObservations: z.object({
    valueProposition: z.string().describe("The core value proposition stated or implied by the website"),
    primaryAudience: z.string().describe("Who the website seems to be targeting"),
    messagingClarity: z.string().describe("How clear and concise the messaging is (1-2 sentences)"),
    trustSignals: z.string().describe("Social proof, logos, testimonials, or other trust elements present"),
    differentiation: z.string().describe("What makes this brand stand out from competitors based on the text"),
    callToActionQuality: z.string().describe("How compelling and clear the CTAs are"),
    growthOpportunities: z.array(z.string()).describe("3-5 strategic growth opportunities for the brand")
  }),
  technicalObservations: z.object({
    issues: z.array(z.string()).describe("List of technical issues (e.g., 'missing meta description', 'oversized hero', 'no H1')")
  })
});

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Ensure URL has a protocol
    const targetUrl = url.startsWith('http') ? url : `https://${url}`;

    console.log(`Scraping: ${targetUrl}`);
    
    // 1. Fetch the HTML
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch website: ${response.statusText}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // 2. Extract Data
    const title = $('title').text().trim();
    const metaDescription = $('meta[name="description"]').attr('content')?.trim() || '';
    
    const h1s: string[] = [];
    $('h1').each((_, el) => {
      h1s.push($(el).text().trim());
    });

    // Remove noisy elements before extracting text
    $('script, style, noscript, nav, footer, iframe, svg, img').remove();

    // Extract visible text, normalize whitespace, and limit to ~2000 words
    const rawText = $('body').text().replace(/\s+/g, ' ').trim();
    const words = rawText.split(' ').slice(0, 2000);
    const visibleText = words.join(' ');

    console.log('Extraction complete. Calling Claude...');

    // 3. AI Analysis
    const prompt = `
      Analyze the following website content and provide a structured briefing.
      
      URL: ${targetUrl}
      Title: ${title}
      Meta Description: ${metaDescription || "NONE"}
      H1 Tags: ${h1s.length > 0 ? h1s.join(' | ') : "NONE"}
      
      Visible Content (First ~2000 words):
      ${visibleText}
      
      Please analyze this data and return the structured observations.
    `;

    const { object } = await generateObject({
      model: anthropic('claude-3-5-sonnet-20240620'),
      schema: schema,
      prompt: prompt,
    });

    return NextResponse.json({ success: true, data: object });

  } catch (error: any) {
    console.error('Scrape and Score Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to process website' },
      { status: 500 }
    );
  }
}
