"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const caseStudies = [
    {
        tag: "Ayurveda / Wellness",
        before: "Local Ayurveda clinic competing on discounts. Zero digital presence. Losing patients to cheaper alternatives.",
        challenge: "They were invisible online, with no consistent brand identity and zero content strategy.",
        insight: "Wellness buyers don't want cheap — they want trusted. The clinic needed to position its founder as the authority, not the price.",
        maniacs_move: "Built a founder-first content engine. 60 days of educational hooks. Ran micro-targeted ads to high-intent patient personas. Redesigned patient journey end-to-end.",
        result: "₹4L → ₹22L monthly revenue. 3.2x patient volume. 0 discounts offered.",
        highlight: "₹22L/mo",
        highlightLabel: "From ₹4L",
        color: "bg-accent-yellow",
    },
    {
        tag: "D2C Fashion",
        before: "Fashion brand burning ₹8L/month on ads. High traffic. 0.8% conversion. Constant panic.",
        challenge: "Every campaign felt like gambling. No predictability, no attribution, no story.",
        insight: "Their product was premium but their brand was generic. Customers couldn't tell them apart from 100 others.",
        maniacs_move: "Repositioned as 'slow fashion for people who own their style.' Rebuilt landing pages. Ran 40+ creative variants in 30 days. Cut ad spend by 30%, doubled down on winners.",
        result: "₹12 Cr to ₹34 Cr in 8 months. ROAS went from 1.4x to 4.8x. CAC down 45%.",
        highlight: "₹34 Cr",
        highlightLabel: "From ₹12 Cr",
        color: "bg-accent-red",
    },
    {
        tag: "B2B SaaS",
        before: "SaaS product with strong tech, weak voice. LinkedIn ghosted them. Sales cycle: 4 months.",
        challenge: "Nobody knew they existed. Their content was feature-heavy, human-light.",
        insight: "B2B buyers buy from people they trust. The founders needed to become the brand.",
        maniacs_move: "Launched a 90-day founder LinkedIn blitz. Trend-hacked viral moments in their niche. Built a content machine that published 5x/week with zero guessing.",
        result: "12,000 → 61,000 LinkedIn followers. Inbound demos up 3x. Sales cycle cut to 6 weeks.",
        highlight: "3x Demos",
        highlightLabel: "In 90 days",
        color: "bg-accent-blue",
    },
];

export function CaseStudies() {
    return (
        <section className="py-24 bg-background border-b-2 border-foreground relative" id="case-studies">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.1 }}
                        className="mb-20"
                    >
                        <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 bg-accent-red text-white brutalist-shadow">
                            Proof of Work
                        </span>
                        <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground leading-[0.95] drop-shadow-[4px_4px_0_rgba(255,42,0,1)]">
                            Transformations,<br />Not Campaigns.
                        </h2>
                        <p className="text-xl text-foreground font-bold mt-6 max-w-xl leading-tight">
                            This is what happens when psychology meets obsession meets a team that doesn't quit.
                        </p>
                    </motion.div>

                    {/* Case Study Cards */}
                    <div className="space-y-0 border-2 border-foreground bg-foreground">
                        {caseStudies.map((cs, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.1, delay: i * 0.05 }}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b-2 border-foreground last:border-b-0 bg-background group hover:bg-background transition-none"
                            >
                                {/* Result Highlight */}
                                <div className={`lg:col-span-2 ${cs.color} p-8 flex flex-col items-center justify-center border-r-2 border-foreground`}>
                                    <div className="font-heading text-4xl md:text-5xl font-black text-center leading-none mb-2 text-foreground">
                                        {cs.highlight}
                                    </div>
                                    <div className="text-xs font-black uppercase tracking-widest text-center text-foreground opacity-70">
                                        {cs.highlightLabel}
                                    </div>
                                    <div className="mt-4 border-2 border-foreground px-2 py-1 bg-background text-foreground text-xs font-black uppercase tracking-wider text-center">
                                        {cs.tag}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="lg:col-span-10 p-8 md:p-12">

                                    {/* Before */}
                                    <div className="mb-6 pb-6 border-b-2 border-foreground">
                                        <span className="inline-block font-black text-xs uppercase tracking-widest border-2 border-foreground px-2 py-0.5 bg-foreground text-background mb-3">
                                            Before
                                        </span>
                                        <p className="font-bold text-lg text-foreground leading-tight">
                                            {cs.before}
                                        </p>
                                    </div>

                                    {/* Framework: Challenge → Insight → Maniac Move */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                        <div>
                                            <span className="font-black text-xs uppercase tracking-widest text-accent-red mb-2 block">Challenge</span>
                                            <p className="font-bold text-sm text-foreground leading-snug">{cs.challenge}</p>
                                        </div>
                                        <div>
                                            <span className="font-black text-xs uppercase tracking-widest text-accent-blue mb-2 block">The Insight</span>
                                            <p className="font-bold text-sm text-foreground leading-snug">{cs.insight}</p>
                                        </div>
                                        <div>
                                            <span className="font-black text-xs uppercase tracking-widest mb-2 block" style={{color: '#00b300'}}>Maniac Move</span>
                                            <p className="font-bold text-sm text-foreground leading-snug">{cs.maniacs_move}</p>
                                        </div>
                                    </div>

                                    {/* Result */}
                                    <div className="bg-foreground text-background p-4 inline-block">
                                        <span className="font-black text-xs uppercase tracking-widest opacity-60 block mb-1">After</span>
                                        <span className="font-heading text-lg font-black uppercase">{cs.result}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.1 }}
                        className="mt-12 text-center"
                    >
                        <Button size="lg">
                            See All Case Studies
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
