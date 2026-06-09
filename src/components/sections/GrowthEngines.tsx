"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/config";

const engines = [
    {
        name: "Identity Engine™",
        tagline: "Who you are, made undeniable.",
        description: "Brand strategy + positioning + design. We define what you stand for, who you're for, and why anyone should care — then we make it impossible to forget.",
        bullets: ["Brand Strategy & Positioning", "Visual Identity & Design System", "Messaging Architecture", "Competitive Differentiation"],
        accent: "bg-accent-yellow",
        textAccent: "text-black",
        num: "01",
    },
    {
        name: "Attention Engine™",
        tagline: "Be everywhere your audience lives.",
        description: "Content + social growth. We build systems that turn attention into audiences and audiences into brand believers — at scale, consistently.",
        bullets: ["Content Strategy & Calendar", "Short-form Video & Reels", "Founder Personal Brand", "Creator Partnerships & UGC"],
        accent: "bg-accent-blue",
        textAccent: "text-white",
        num: "02",
    },
    {
        name: "Revenue Engine™",
        tagline: "Turn traffic into predictable money.",
        description: "Performance ads + landing pages + funnels. We don't guess — we test 40 creatives, kill losers fast, scale winners hard. Every rupee tracked to revenue.",
        bullets: ["Meta & Google Ad Management", "Landing Page Engineering", "Funnel Optimisation", "ROAS-obsessed Scaling"],
        accent: "bg-accent-red",
        textAccent: "text-white",
        num: "03",
        featured: true,
    },
    {
        name: "Authority Engine™",
        tagline: "Make the founder the brand.",
        description: "LinkedIn growth + founder branding. B2B buyers buy from people. We make you the most trusted voice in your category — then sell through that trust.",
        bullets: ["LinkedIn Content & Growth", "Thought Leadership Strategy", "Speaking & PR Positioning", "Inbound Lead System"],
        accent: "bg-foreground",
        textAccent: "text-background",
        num: "04",
    },
];

export function GrowthEngines() {
    return (
        <section className="py-24 bg-background border-b-2 border-foreground relative" id="services">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.1 }}
                        className="mb-6"
                    >
                        <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 bg-accent-blue text-white brutalist-shadow">
                            How We Work
                        </span>
                        <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground leading-[0.95] drop-shadow-[4px_4px_0_rgba(255,42,0,1)]">
                            Four Engines.<br />
                            One Brand That<br />
                            <span className="bg-accent-yellow text-black px-2">Can't Be Ignored.</span>
                        </h2>
                        <p className="text-xl text-foreground font-bold mt-6 max-w-2xl leading-tight">
                            We don't sell services. We deploy engines — each one engineered to attack a different lever of your brand's growth.
                        </p>
                    </motion.div>

                    {/* Engines */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-foreground bg-foreground">
                        {engines.map((engine, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.1, delay: i * 0.05 }}
                                className={`relative p-10 border-r-2 border-b-2 border-foreground group ${engine.featured ? 'md:col-span-1' : ''} bg-background hover:${engine.accent} transition-none`}
                            >
                                {engine.featured && (
                                    <div className="absolute -top-4 left-10 bg-accent-red text-white font-black text-xs px-4 py-1.5 border-2 border-foreground uppercase tracking-widest brutalist-shadow">
                                        Most Popular
                                    </div>
                                )}

                                {/* Number + Name */}
                                <div className="flex items-start justify-between mb-6">
                                    <span className="font-heading text-8xl font-black leading-none opacity-10 text-foreground group-hover:opacity-20 transition-none">
                                        {engine.num}
                                    </span>
                                    <span className={`${engine.accent} ${engine.textAccent} border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 brutalist-shadow self-start`}>
                                        Engine
                                    </span>
                                </div>

                                <h3 className="font-heading text-3xl md:text-4xl font-black uppercase text-foreground mb-2 leading-tight group-hover:text-foreground transition-none">
                                    {engine.name}
                                </h3>

                                <p className={`font-black text-sm uppercase tracking-widest mb-4 ${engine.accent === 'bg-accent-yellow' ? 'text-accent-red' : engine.accent === 'bg-foreground' ? 'text-accent-blue' : 'text-accent-yellow'} group-hover:text-foreground transition-none`}>
                                    {engine.tagline}
                                </p>

                                <p className="font-bold text-base text-foreground mb-6 leading-snug opacity-80">
                                    {engine.description}
                                </p>

                                <ul className="space-y-2">
                                    {engine.bullets.map((b, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm font-bold text-foreground">
                                            <span className={`w-5 h-5 shrink-0 border-2 border-foreground ${engine.accent} ${engine.textAccent} flex items-center justify-center text-xs font-black`}>
                                                +
                                            </span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.1 }}
                        className="mt-12 flex flex-col sm:flex-row gap-4 items-start"
                    >
                        <Button size="lg" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                            Get Your Custom Engine Plan
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <a href="/ai-growth-audit" className="border-2 border-foreground px-6 py-4 bg-background hover:bg-foreground hover:text-background transition-none group flex items-center">
                            <p className="font-black text-sm text-foreground uppercase tracking-widest group-hover:text-background transition-none">
                                Not sure which engine? Book a free audit ↗
                            </p>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
