"use client";

import { FadeUp } from "@/components/ui/FadeUp";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const solutions = [
    {
        num: "01",
        name: "Brand\nFoundation",
        tagline: "Before anyone buys, they need to believe.",
        description: "Positioning, identity, messaging and brand architecture designed to create competitive moats and capture attention.",
        includes: ["Brand Positioning", "Identity & Visual Language", "Messaging Architecture", "Competitive Differentiation"],
        accent: "bg-accent-yellow",
        textAccent: "text-black",
        borderAccent: "border-black",
    },
    {
        num: "02",
        name: "Conversion\nEngine",
        tagline: "Websites engineered to increase trust and conversions.",
        description: "We build the digital infrastructure that turns interest into action — websites, landing pages, and funnels built on testing, not guessing.",
        includes: ["Websites & Landing Pages", "Funnel Engineering", "E-commerce Optimization", "UI/UX Design"],
        accent: "bg-foreground",
        textAccent: "text-background",
        borderAccent: "border-background",
        featured: true,
    },
    {
        num: "03",
        name: "Growth\nEngine",
        tagline: "Attention means nothing if it doesn't convert.",
        description: "We build paid acquisition and distribution engines that drive revenue. Data-driven media buying paired with high-velocity creative testing.",
        includes: ["Paid Social & Search", "A/B & Creative Testing", "Conversion Rate Optimization", "Growth Modeling"],
        accent: "bg-accent-red",
        textAccent: "text-white",
        borderAccent: "border-white",
    },
    {
        num: "04",
        name: "AI &\nIntelligence",
        tagline: "Scale output without scaling headcount.",
        description: "We bypass slow, expensive traditional workflows by integrating AI into creative production, customer journeys, and internal decision systems.",
        includes: ["AI-Powered Asset Production", "Automated Workflows", "Internal Tools", "Data Infrastructure"],
        accent: "bg-accent-blue",
        textAccent: "text-white",
        borderAccent: "border-white",
    },
];

interface SolutionCardProps {
    s: typeof solutions[0];
    index: number;
}

function SolutionCard({ s, index }: SolutionCardProps) {
    return (
        <div
            className={`bento-card squircle scroll-reveal bg-background p-10 border-r-2 border-b-2 border-foreground/30 hover:border-foreground hover:-translate-y-[3px] transition-all duration-300 relative group ${
                s.featured ? "md:col-span-2 lg:col-span-2" : "md:col-span-1 lg:col-span-1"
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            {s.featured && (
                <div className="absolute -top-4 left-10 bg-accent-yellow text-black font-black text-xs px-4 py-1.5 border-2 border-foreground uppercase tracking-widest z-10">
                    Most Popular
                </div>
            )}

            <div className="flex items-start justify-between mb-6">
                <span className="font-heading text-7xl font-black leading-none text-foreground opacity-10 group-hover:opacity-20 transition-opacity">
                    {s.num}
                </span>
                <span className={`${s.accent} ${s.textAccent} border-2 ${s.borderAccent} font-black text-xs uppercase tracking-widest px-3 py-1`}>
                    Solution
                </span>
            </div>

            <h3 className="font-heading text-3xl md:text-4xl font-black uppercase text-foreground leading-tight mb-3 whitespace-pre-line">
                {s.name}
            </h3>
            <p className={`font-black text-xs uppercase tracking-widest mb-5 ${s.accent === 'bg-accent-yellow' ? 'text-accent-red' : s.accent === 'bg-foreground' ? 'text-accent-yellow' : 'text-accent-yellow'}`}>
                {s.tagline}
            </p>
            <p className="font-bold text-sm text-foreground opacity-70 mb-6 leading-snug group-hover:opacity-100 transition-opacity max-w-xl">
                {s.description}
            </p>
            
            <div className="mt-auto">
                <ul className={s.featured ? "grid grid-cols-1 sm:grid-cols-2 gap-2" : "space-y-2"}>
                    {s.includes.map((item, j) => (
                        <li key={j} className="flex items-center gap-3 text-sm font-bold text-foreground">
                            <span className={`w-5 h-5 shrink-0 border-2 border-foreground/50 ${s.accent} ${s.textAccent} flex items-center justify-center text-xs font-black group-hover:border-foreground transition-colors`}>+</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export function Solutions() {
    return (
        <section className="py-24 bg-background border-b-2 border-foreground" id="solutions">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <FadeUp className="mb-12">
                        <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 bg-foreground text-background">
                            Capabilities
                        </span>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
                            <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground leading-[0.95]">
                                Growth <br />
                                <span className="bg-accent-red text-white px-2">Infrastructure</span>
                            </h2>
                            <div>
                                <p className="text-lg font-bold text-foreground leading-snug mb-4 opacity-80">
                                    We don't sell generic agency services. We deploy interconnected solutions engineered to drive measurable business growth.
                                </p>
                            </div>
                        </div>
                    </FadeUp>

                    {/* Systems Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-foreground bg-foreground grid-flow-row-dense bento-grid has-[.bento-card:hover]:[.bento-card:not(:hover)]:opacity-50 has-[.bento-card:hover]:[.bento-card:not(:hover)]:blur-sm transition-all duration-300">
                        {solutions.map((s, i) => (
                            <SolutionCard key={i} s={s} index={i} />
                        ))}
                    </div>

                    <FadeUp className="mt-12 flex flex-col sm:flex-row gap-4 items-start">
                        <Button size="lg" href="/start">
                            Start Your Growth Project
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <a href="/book" target="_blank" rel="noopener noreferrer" className="border-2 border-foreground px-6 py-4 bg-background hover:bg-foreground hover:text-background transition-none group flex items-center">
                            <p className="font-black text-sm text-foreground uppercase tracking-widest group-hover:text-background transition-none">
                                Book Strategy Session →
                            </p>
                        </a>
                    </FadeUp>
                </div>
            </div>
        </section>
    );
}
