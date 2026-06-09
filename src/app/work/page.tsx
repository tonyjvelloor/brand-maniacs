import type { Metadata } from "next";
import { CALENDLY_URL } from "@/lib/config";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Work — The Brand Maniacs",
    description: "Premium agencies sell thinking, not just execution. See how we approach real problems for real brands through our Growth Systems.",
};

const caseStudies = [
    {
        client: "Karmanya Ayurveda",
        category: "Wellness · Ayurveda",
        accentColor: "bg-accent-yellow",
        accentText: "text-black",
        challenge: "A traditional Ayurveda clinic with deep clinical expertise but zero digital presence. They were competing on discounts in a market where trust is the only currency that matters.",
        thinking: "Wellness patients don't want the cheapest option — they want the most credible one. The clinic had years of clinical authority sitting unspoken. Our job was to make their expertise visible and trustworthy before we ever talked about treatments.",
        execution: [
            "Built an educational content system combining doctor authority and patient psychology",
            "Created landing pages that spoke the language of the patient, not the clinic",
            "Ran targeted campaigns to high-intent wellness audiences",
            "Developed video content that showed treatment outcomes, not just testimonials",
        ],
        result: "Shifted positioning from discount-clinic to premium wellness destination. Patient volume grew consistently month-over-month without a single discount offered.",
        learning: "Educational content that respects the patient's intelligence converts better than any promotional offer. Trust scales. Discounts don't.",
    },
    {
        client: "D2C Fashion Brand",
        category: "Fashion · E-Commerce",
        accentColor: "bg-accent-red",
        accentText: "text-white",
        challenge: "High traffic, terrible conversions. ₹8L/month in ad spend producing a 0.8% conversion rate. Every month felt like gambling with the founders' money.",
        thinking: "The product was genuinely premium but the brand was visually and verbally indistinguishable from 200 other Instagram fashion brands. Customers couldn't feel the difference — so they chose price.",
        execution: [
            "Repositioned as 'slow fashion for people who own their style'",
            "Rebuilt landing pages around brand story, not just product features",
            "Ran 40+ creative variants over 30 days to find what actually stopped the scroll",
            "Cut underperforming ad spend, doubled down on 3 winning creative concepts",
        ],
        result: "ROAS moved from 1.4x to 4.8x over 8 months. Revenue scaled significantly. CAC dropped by 45%.",
        learning: "When customers can feel the difference, price becomes secondary. Differentiation is always a conversion problem in disguise.",
    },
    {
        client: "B2B SaaS Founder",
        category: "SaaS · LinkedIn Authority",
        accentColor: "bg-accent-blue",
        accentText: "text-white",
        challenge: "Excellent product. Completely invisible. No LinkedIn presence, a 4-month average sales cycle, and 100% dependence on outbound cold outreach that was getting harder every quarter.",
        thinking: "B2B buyers don't buy from companies first — they buy from people they trust. The founder had strong opinions and deep industry expertise. We needed to make that expertise public and consistent.",
        execution: [
            "Built a 90-day founder LinkedIn content strategy around real insight, not self-promotion",
            "Identified 3 trends in their niche and created content that shaped the conversation",
            "Built a weekly publishing system that ran with minimal founder time",
            "Created a content-to-demo pipeline that nurtured cold audiences to warm leads",
        ],
        result: "LinkedIn following grew from 12,000 to 61,000. Inbound demo requests tripled. Sales cycle compressed to 6 weeks.",
        learning: "Authority compounds. Every piece of content a founder publishes is a sales conversation happening without them in the room.",
    },
];

export default function WorkPage() {
    return (
        <div className="min-h-screen bg-background pt-28 pb-24">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">

                {/* Header */}
                <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
                    <div>
                        <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 bg-accent-yellow text-black">
                            Experiments & Proof
                        </span>
                        <h1 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tighter text-foreground leading-[0.9]">
                            How We<br />
                            <span className="bg-foreground text-background px-2">Actually</span><br />
                            Think.
                        </h1>
                    </div>
                    <div>
                        <p className="text-lg font-bold text-foreground opacity-80 leading-snug mb-4">
                            Premium agencies sell thinking, not just execution. Here's how we approach real problems for real brands. We don't hide behind fake percentage claims. We show you the logic.
                        </p>
                        <p className="text-xs font-black text-foreground opacity-40 uppercase tracking-widest">
                            Challenge → Thinking → Execution → Learning
                        </p>
                    </div>
                </div>

                {/* Case Study Cards */}
                <div className="space-y-0 border-2 border-foreground bg-foreground mb-20">
                    {caseStudies.map((cs, i) => (
                        <div
                            key={i}
                            className="bg-background border-b-2 border-foreground last:border-b-0 grid grid-cols-1 lg:grid-cols-12"
                        >
                            {/* Left accent */}
                            <div className={`lg:col-span-3 ${cs.accentColor} p-8 flex flex-col justify-between border-r-2 border-foreground`}>
                                <div>
                                    <span className={`font-heading text-6xl font-black leading-none ${cs.accentText} opacity-30`}>
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <div className="mt-8 lg:mt-0">
                                    <h2 className={`font-heading font-black uppercase text-2xl leading-tight ${cs.accentText} mb-2`}>
                                        {cs.client}
                                    </h2>
                                    <div className={`text-xs font-black uppercase tracking-widest ${cs.accentText} opacity-80`}>
                                        {cs.category}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="lg:col-span-9 p-8 md:p-12">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">

                                    {/* Challenge */}
                                    <div>
                                        <span className="text-xs font-black uppercase tracking-widest text-accent-red block mb-3 border-l-2 border-accent-red pl-3">The Challenge</span>
                                        <p className="font-bold text-sm md:text-base text-foreground leading-snug">{cs.challenge}</p>
                                    </div>

                                    {/* Thinking */}
                                    <div>
                                        <span className="text-xs font-black uppercase tracking-widest text-accent-blue block mb-3 border-l-2 border-accent-blue pl-3">The Thinking</span>
                                        <p className="font-bold text-sm md:text-base text-foreground leading-snug">{cs.thinking}</p>
                                    </div>
                                </div>

                                {/* Execution */}
                                <div className="mb-10 pb-10 border-b-2 border-foreground">
                                    <span className="text-xs font-black uppercase tracking-widest text-foreground opacity-50 block mb-4">The Execution</span>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {cs.execution.map((item, j) => (
                                            <li key={j} className="flex items-start gap-3 text-sm font-bold text-foreground">
                                                <span className="text-accent-yellow font-black shrink-0 mt-0.5">→</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Result + Learning */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-foreground text-background p-6 border-2 border-foreground">
                                        <span className="text-xs font-black uppercase tracking-widest opacity-50 block mb-3">The Result</span>
                                        <p className="font-bold text-sm md:text-base leading-snug">{cs.result}</p>
                                    </div>
                                    <div className="border-2 border-foreground bg-accent-yellow text-black p-6">
                                        <span className="text-xs font-black uppercase tracking-widest opacity-60 block mb-3">The Learning</span>
                                        <p className="font-bold text-sm md:text-base leading-snug italic">"{cs.learning}"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="bg-background border-2 border-foreground p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-center md:text-left relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-red rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
                    
                    <div className="relative z-10">
                        <h3 className="font-heading text-3xl md:text-4xl font-black uppercase text-foreground leading-tight mb-3">
                            Ready to be our next case study?
                        </h3>
                        <p className="font-bold text-foreground opacity-70 text-base max-w-lg">
                            If you're tired of running the same playbook as everyone else and getting mediocre results, we should talk.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 shrink-0 relative z-10 w-full md:w-auto">
                        <Link 
                            href="/ai-growth-audit" 
                            className="inline-flex justify-center items-center gap-2 border-2 border-foreground text-foreground font-black text-sm uppercase tracking-widest px-8 py-4 hover:bg-foreground hover:text-background transition-none w-full sm:w-auto"
                        >
                            Free Growth Audit
                        </Link>
                        <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center gap-2 bg-accent-yellow text-black border-2 border-black font-black text-sm uppercase tracking-widest px-8 py-4 hover:bg-accent-red hover:text-white hover:border-accent-red transition-none whitespace-nowrap w-full sm:w-auto"
                        >
                            Apply to Work With Us <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
