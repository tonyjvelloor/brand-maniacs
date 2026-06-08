"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";

const cases = [
    {
        brand: "LuxeWear India",
        industry: "D2C Fashion",
        background: "Scaling ad spend on Meta and Google, but hitting a CAC ceiling. Profits were stagnant despite higher revenue.",
        insight: "Found that 60% of their ad spend was being wasted on audiences with low LTV. The generic landing pages were converting at 1.2%.",
        infrastructure: "Deployed our AI Intelligence Layer to map high-LTV cohorts. Rebuilt their funnel with dynamic, high-performance landing pages and implemented automated retargeting loops.",
        outcome: {
            roas: "+160%",
            cac: "-42%",
            revenue: "₹5 Cr → ₹14 Cr in 6 months",
        },
    },
    {
        brand: "Glow & Co.",
        industry: "Skincare",
        background: "Spending heavily on influencer marketing but seeing near-zero trackable revenue. High traffic, low sales.",
        insight: "Influencer content was generic and disconnected from a direct response offer. No UGC testing or revenue attribution.",
        infrastructure: "Launched the Creator Revenue Engine. Scored creators based on past performance data, implemented a UGC testing matrix, and built an offer-driven funnel that tracked CPA per creator.",
        outcome: {
            roas: "+210%",
            cac: "-55%",
            revenue: "₹2 Cr → ₹8 Cr in 4 months",
        },
    }
];

export default function CaseStudiesPage() {
    return (
        <div className="pt-32 pb-24 bg-background min-h-screen relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, ease: "linear" }}
                        className="font-heading text-5xl md:text-8xl font-black uppercase text-foreground mb-8 tracking-tighter drop-shadow-[4px_4px_0_rgba(255,42,0,1)]"
                    >
                        Predictable Growth <br /><span className="bg-accent-yellow text-black px-4 inline-block mt-2 brutalist-border">Engineered.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, delay: 0.1, ease: "linear" }}
                        className="text-xl md:text-2xl text-foreground font-bold border-2 border-foreground p-4 bg-accent-blue inline-block max-w-2xl"
                    >
                        We don't just run ads. We build systems. See how Indian mid-market brands use our infrastructure to break their growth ceilings.
                    </motion.p>
                </div>

                <div className="space-y-20 max-w-5xl mx-auto">
                    {cases.map((study, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.1, ease: "linear" }}
                            className="bg-background border-2 border-foreground overflow-hidden brutalist-shadow"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {/* Content Side */}
                                <div className="p-8 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-foreground flex flex-col justify-between relative bg-background">
                                    <div className="relative z-10">
                                        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8 pb-8 border-b-2 border-foreground">
                                            <h2 className="font-heading text-3xl md:text-5xl font-black uppercase text-foreground">{study.brand}</h2>
                                            <span className="bg-accent-yellow text-black px-3 py-1.5 uppercase font-black border-2 border-black">
                                                {study.industry}
                                            </span>
                                        </div>

                                        <div className="space-y-8">
                                            <div>
                                                <h4 className="text-sm font-black text-foreground uppercase tracking-widest mb-3 bg-accent-red text-white inline-block px-1">The Bottleneck</h4>
                                                <p className="text-foreground text-base leading-relaxed font-bold border-l-4 border-foreground pl-4">{study.background}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-black text-foreground uppercase tracking-widest mb-3 bg-accent-yellow text-black inline-block px-1">
                                                    AI Insight Uncovered
                                                </h4>
                                                <p className="text-foreground text-base leading-relaxed font-bold border-l-4 border-foreground pl-4">{study.insight}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-black text-foreground uppercase tracking-widest mb-3 bg-accent-blue text-white inline-block px-1">
                                                    Infrastructure Deployed
                                                </h4>
                                                <p className="text-foreground text-base leading-relaxed font-bold border-l-4 border-foreground pl-4">{study.infrastructure}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Metrics Side */}
                                <div className="p-8 md:p-12 bg-foreground flex flex-col justify-center relative">
                                    <h3 className="font-heading text-2xl font-black uppercase text-background mb-10 border-b-2 border-background pb-5">The Revenue Outcome</h3>

                                    <div className="space-y-8 relative z-10">
                                        <div className="flex items-center gap-5">
                                            <div className="w-16 h-16 border-2 border-background bg-accent-blue flex items-center justify-center text-white shrink-0 brutalist-shadow-yellow transition-none">
                                                <ArrowUpRight className="w-8 h-8 font-black" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-background font-bold uppercase tracking-widest mb-1">ROAS Improvement</div>
                                                <div className="font-heading text-4xl md:text-5xl font-black text-background">{study.outcome.roas}</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-5">
                                            <div className="w-16 h-16 border-2 border-background bg-accent-red flex items-center justify-center text-white shrink-0 brutalist-shadow-yellow transition-none">
                                                <ArrowDownRight className="w-8 h-8 font-black" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-background font-bold uppercase tracking-widest mb-1">CAC Reduction</div>
                                                <div className="font-heading text-4xl md:text-5xl font-black text-background">{study.outcome.cac}</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-5">
                                            <div className="w-16 h-16 border-2 border-background bg-accent-yellow flex items-center justify-center text-black shrink-0 brutalist-shadow hover:bg-black hover:text-accent-yellow transition-none">
                                                <TrendingUp className="w-8 h-8 font-black" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-background font-bold uppercase tracking-widest mb-1">Revenue Jump</div>
                                                <div className="font-heading text-3xl md:text-4xl font-black text-accent-yellow bg-black px-2 py-1 mt-1 border-2 border-black">{study.outcome.revenue}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-12 pt-8 border-t-2 border-background">
                                        <Button className="w-full bg-accent-red text-white hover:bg-black hover:text-accent-yellow border-black shadow-[4px_4px_0_0_#000000]">Get the Same System</Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
