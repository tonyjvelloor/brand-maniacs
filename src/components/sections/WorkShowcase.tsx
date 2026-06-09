"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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

export function WorkShowcase() {
    return (
        <section className="py-24 bg-background border-b-2 border-foreground" id="work">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.15 }}
                        className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end"
                    >
                        <div>
                            <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 bg-accent-yellow text-black">
                                Experiments & Proof
                            </span>
                            <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground leading-[0.95]">
                                How We<br />
                                <span className="bg-foreground text-background px-2">Actually</span><br />
                                Think.
                            </h2>
                        </div>
                        <div>
                            <p className="text-lg font-bold text-foreground opacity-80 leading-snug mb-4">
                                Premium agencies sell thinking, not just execution. Here's how we approach real problems for real brands.
                            </p>
                            <p className="text-xs font-black text-foreground opacity-40 uppercase tracking-widest">
                                Challenge → Thinking → Execution → Learning
                            </p>
                        </div>
                    </motion.div>

                    {/* Case Study Cards */}
                    <div className="space-y-0 border-2 border-foreground bg-foreground">
                        {caseStudies.map((cs, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.15, delay: i * 0.05 }}
                                className="bg-background border-b-2 border-foreground last:border-b-0 grid grid-cols-1 lg:grid-cols-12"
                            >
                                {/* Left accent */}
                                <div className={`lg:col-span-2 ${cs.accentColor} p-8 flex flex-col justify-between border-r-2 border-foreground`}>
                                    <div>
                                        <span className={`font-heading text-5xl font-black leading-none ${cs.accentText} opacity-30`}>
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <div>
                                        <div className={`font-heading font-black uppercase text-lg leading-tight ${cs.accentText}`}>
                                            {cs.client}
                                        </div>
                                        <div className={`text-xs font-black uppercase tracking-widest ${cs.accentText} opacity-60 mt-1`}>
                                            {cs.category}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="lg:col-span-10 p-8 md:p-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

                                        {/* Challenge */}
                                        <div>
                                            <span className="text-xs font-black uppercase tracking-widest text-accent-red block mb-3">The Challenge</span>
                                            <p className="font-bold text-sm text-foreground leading-snug">{cs.challenge}</p>
                                        </div>

                                        {/* Thinking */}
                                        <div>
                                            <span className="text-xs font-black uppercase tracking-widest text-accent-blue block mb-3">The Thinking</span>
                                            <p className="font-bold text-sm text-foreground leading-snug">{cs.thinking}</p>
                                        </div>
                                    </div>

                                    {/* Execution */}
                                    <div className="mb-6 pb-6 border-b-2 border-foreground">
                                        <span className="text-xs font-black uppercase tracking-widest text-foreground opacity-50 block mb-3">The Execution</span>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {cs.execution.map((item, j) => (
                                                <li key={j} className="flex items-start gap-2 text-sm font-bold text-foreground">
                                                    <span className="text-accent-yellow font-black shrink-0 mt-0.5">→</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Result + Learning */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-foreground text-background p-4">
                                            <span className="text-xs font-black uppercase tracking-widest opacity-50 block mb-2">The Result</span>
                                            <p className="font-bold text-sm leading-snug">{cs.result}</p>
                                        </div>
                                        <div className="border-2 border-foreground p-4">
                                            <span className="text-xs font-black uppercase tracking-widest text-foreground opacity-50 block mb-2">The Learning</span>
                                            <p className="font-bold text-sm text-foreground leading-snug italic">{cs.learning}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.15 }}
                        className="mt-10"
                    >
                        <Link href="/work" className="inline-flex items-center gap-3 border-2 border-foreground px-8 py-4 font-black text-sm uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-none">
                            See All Case Studies
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
