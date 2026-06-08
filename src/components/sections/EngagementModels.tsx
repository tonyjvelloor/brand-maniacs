"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const models = [
    {
        name: "AI Growth Audit™",
        description: "Entry engagement. We analyze your current state and map out the exact infrastructure needed to scale.",
        price: "Free",
        priceSubtext: "For qualified brands only",
        features: [
            "Deep dive into ad accounts",
            "Funnel & landing page teardown",
            "Creator ROI analysis",
            "Custom growth blueprint",
        ],
        buttonText: "Apply for Audit",
        variant: "outline" as const,
        highlight: false,
    },
    {
        name: "Full Growth Infrastructure",
        description: "Our comprehensive 3–6 month scaling engagement. Total revenue system overhaul and management.",
        price: "Custom",
        priceSubtext: "Retainer-based",
        features: [
            "AI intelligence layer setup",
            "Full funnel engineering",
            "Performance marketing management",
            "Retention & automated follow-ups",
        ],
        buttonText: "Book Strategy Call",
        variant: "primary" as const,
        highlight: true,
    },
    {
        name: "Creator Scale Sprint",
        description: "30-day creator revenue activation. Turn vanity metrics into measurable, ROI-driven sales.",
        price: "Sprint",
        priceSubtext: "One-time setup + performance",
        features: [
            "AI-backed creator selection",
            "Script & UGC direction",
            "Revenue attribution setup",
            "Campaign optimization",
        ],
        buttonText: "Learn More",
        variant: "outline" as const,
        highlight: false,
    },
];

export function EngagementModels() {
    return (
        <section className="py-24 bg-background relative border-y-2 border-foreground">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <h2 className="inline-block font-heading text-4xl md:text-6xl font-black uppercase text-background bg-accent-blue p-4 mb-6 tracking-tighter brutalist-border drop-shadow-[4px_4px_0_rgba(240,240,240,1)]">
                        Engagement Models
                    </h2>
                    <p className="text-xl text-foreground font-bold border-2 border-foreground p-4 bg-background inline-block">
                        We don't do cookie-cutter retainers. Choose the model that fits your current growth bottleneck.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-foreground bg-foreground">
                    {models.map((model, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.1, delay: i * 0.1 }}
                            className={`relative p-8 h-full flex flex-col transition-none border-b-2 md:border-b-0 border-r-2 border-foreground last:border-r-0 group ${model.highlight
                                ? "bg-accent-yellow border-foreground text-black md:-translate-y-4 brutalist-shadow"
                                : "bg-background text-foreground hover:bg-foreground hover:text-background"
                                }`}
                        >
                            {model.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-red text-white font-black px-6 py-2 border-2 border-black text-sm uppercase tracking-widest brutalist-shadow">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8 mt-4">
                                <h3 className={`font-heading text-3xl font-black uppercase mb-4 ${model.highlight ? 'text-black' : 'text-foreground group-hover:text-background transition-none'}`}>{model.name}</h3>
                                <p className={`text-sm md:text-base font-bold leading-tight h-16 ${model.highlight ? 'text-black' : 'text-foreground group-hover:text-background transition-none'}`}>{model.description}</p>
                            </div>

                            <div className={`mb-8 pb-8 border-b-2 ${model.highlight ? 'border-black' : 'border-foreground group-hover:border-background transition-none'}`}>
                                <div className="flex items-baseline gap-2">
                                    <span className="font-heading text-5xl font-black">{model.price}</span>
                                </div>
                                <div className={`text-sm md:text-base font-bold uppercase tracking-wider mt-2 bg-foreground text-background inline-block px-2 ${model.highlight ? 'bg-black text-accent-yellow' : ''}`}>{model.priceSubtext}</div>
                            </div>

                            <ul className="space-y-4 mb-10 flex-1">
                                {model.features.map((feature, j) => (
                                    <li key={j} className="flex items-start">
                                        <Check className={`w-6 h-6 mr-3 border-2 p-0.5 shrink-0 ${model.highlight ? 'border-black text-black' : 'border-foreground text-foreground group-hover:border-background group-hover:text-background transition-none'}`} />
                                        <span className={`text-sm md:text-base font-bold ${model.highlight ? 'text-black' : 'text-foreground group-hover:text-background transition-none'}`}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={model.highlight ? "primary" : "outline"}
                                className={`w-full ${model.highlight ? 'bg-black text-accent-yellow border-black hover:bg-accent-red hover:text-white hover:border-black brutalist-shadow-red' : 'border-2 border-foreground hover:bg-background hover:text-foreground hover:border-background'}`}
                            >
                                {model.buttonText}
                                {model.highlight && <ArrowRight className="w-5 h-5 ml-2 font-black" />}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
