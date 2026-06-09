"use client";

import { motion } from "framer-motion";
import { ArrowRight, Image as ImageIcon, Sparkles } from "lucide-react";
import Link from "next/link";

const caseStudies = [
    {
        client: "Karmanya Ayurveda",
        category: "Wellness · Ayurveda",
        accentColor: "bg-accent-yellow",
        accentText: "text-black",
        problem: "A traditional Ayurveda clinic with deep clinical expertise but zero digital presence. They were competing on discounts in a market where trust is the only currency that matters.",
        systemBuilt: [
            "Built an educational content system combining doctor authority and patient psychology",
            "Created landing pages that spoke the language of the patient, not the clinic",
            "Ran targeted campaigns to high-intent wellness audiences",
            "Developed video content that showed treatment outcomes, not just testimonials",
        ],
        outcome: "Shifted positioning from discount-clinic to premium wellness destination. Patient volume grew consistently month-over-month without a single discount offered. Trust scales. Discounts don&apos;t.",
    },
    {
        client: "AIProdGen Experiment",
        category: "Technology · Internal IP",
        accentColor: "bg-background",
        accentText: "text-foreground",
        problem: "Product shoots are slow and expensive (₹50,000+). D2C brands hesitate to test radical creative angles because the cost of failure is too high.",
        systemBuilt: [
            "Ingested a single flat product photo of a sneaker into AIProdGen",
            "Engineered prompts to place the product in 20 radically different environments (ice blocks, neon streets, floating in water)",
            "Generated high-fidelity, ad-ready assets maintaining exact brand lighting",
            "Built a workflow that completed the entire process in under 45 minutes",
        ],
        outcome: "Replaced a ₹50,000 physical shoot with infinite creative variations. Allowed the brand to run a 20-variant creative testing sprint at a fraction of the cost, finding winning angles that would have never been tested physically.",
        isTech: true
    },
    {
        client: "B2B SaaS Founder",
        category: "SaaS · LinkedIn Authority",
        accentColor: "bg-accent-blue",
        accentText: "text-white",
        problem: "Excellent product. Completely invisible. No LinkedIn presence, a 4-month average sales cycle, and 100% dependence on outbound cold outreach that was getting harder every quarter.",
        systemBuilt: [
            "Built a 90-day founder LinkedIn content strategy around real insight, not self-promotion",
            "Identified 3 trends in their niche and created content that shaped the conversation",
            "Built a weekly publishing system that ran with minimal founder time",
            "Created a content-to-demo pipeline that nurtured cold audiences to warm leads",
        ],
        outcome: "LinkedIn following grew from 12,000 to 61,000. Inbound demo requests tripled. Sales cycle compressed to 6 weeks. Authority compounds.",
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
                                Premium studios sell thinking, not just execution. Here's how we combine human strategy with technology to solve real problems.
                            </p>
                            <p className="text-xs font-black text-foreground opacity-40 uppercase tracking-widest">
                                Problem → System Built → Outcome/Learning
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
                                <div className={`lg:col-span-3 ${cs.accentColor} p-8 flex flex-col justify-between border-r-2 lg:border-b-0 border-b-2 border-foreground relative`}>
                                    {cs.isTech && (
                                        <div className="absolute top-4 right-4 bg-accent-yellow text-black px-2 py-1 text-[10px] font-black uppercase tracking-widest border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                            Technology Lab
                                        </div>
                                    )}
                                    <div>
                                        <span className={`font-heading text-6xl font-black leading-none ${cs.accentText} opacity-30`}>
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <div className="mt-8 lg:mt-0">
                                        <div className={`font-heading font-black uppercase text-xl md:text-2xl leading-tight ${cs.accentText}`}>
                                            {cs.client}
                                        </div>
                                        <div className={`text-xs font-black uppercase tracking-widest ${cs.accentText} opacity-60 mt-2`}>
                                            {cs.category}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="lg:col-span-9 p-8 md:p-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

                                        {/* Problem */}
                                        <div className="md:col-span-2 lg:col-span-1">
                                            <span className="text-xs font-black uppercase tracking-widest text-accent-red block mb-3 border-l-2 border-accent-red pl-3">The Problem</span>
                                            <p className="font-bold text-sm text-foreground leading-snug">{cs.problem}</p>
                                        </div>

                                        {/* Tech visualizer for AIProdGen case study */}
                                        {cs.isTech && (
                                            <div className="border-2 border-foreground bg-foreground text-background p-4 flex flex-col justify-center">
                                                <div className="flex items-center justify-between text-xs font-black uppercase tracking-widest mb-4">
                                                    <span className="opacity-50">Input Image</span>
                                                    <ArrowRight className="w-4 h-4 text-accent-yellow" />
                                                    <span className="text-accent-yellow">AI Variations</span>
                                                </div>
                                                <div className="flex justify-between items-end gap-2">
                                                    <div className="w-16 h-16 border-2 border-dashed border-background/30 flex items-center justify-center opacity-50">
                                                        <ImageIcon className="w-5 h-5" />
                                                    </div>
                                                    <div className="flex-1 h-1 bg-background/20 relative">
                                                        <div className="absolute top-0 left-0 h-full w-full bg-accent-yellow animate-pulse"></div>
                                                    </div>
                                                    <div className="w-20 h-20 bg-accent-yellow border-2 border-black flex items-center justify-center relative overflow-hidden group">
                                                        <Sparkles className="w-6 h-6 text-black relative z-10" />
                                                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* System Built */}
                                    <div className="mb-6 pb-6 border-b-2 border-foreground">
                                        <span className="text-xs font-black uppercase tracking-widest text-accent-blue block mb-4 border-l-2 border-accent-blue pl-3">The System Built</span>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {cs.systemBuilt.map((item, j) => (
                                                <li key={j} className="flex items-start gap-3 text-sm font-bold text-foreground">
                                                    <span className="text-accent-yellow font-black shrink-0 mt-0.5 border-2 border-foreground w-4 h-4 flex items-center justify-center text-[10px] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] bg-background">✓</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Outcome */}
                                    <div className="bg-accent-yellow text-black p-6 border-2 border-black">
                                        <span className="text-xs font-black uppercase tracking-widest opacity-60 block mb-2 border-l-2 border-black pl-3">Outcome & Learning</span>
                                        <p className="font-bold text-sm leading-snug">{cs.outcome}</p>
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
                            See All Experiments & Proof
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
