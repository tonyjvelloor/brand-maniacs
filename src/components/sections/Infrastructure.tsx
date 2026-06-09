"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Filter, Video, RefreshCw } from "lucide-react";

const steps = [
    {
        num: "1",
        icon: BrainCircuit,
        title: "AI Intelligence Layer",
        points: ["Data modeling", "Audience segmentation", "Budget optimization logic"],
    },
    {
        num: "2",
        icon: Filter,
        title: "Conversion Infrastructure",
        points: ["High-performance landing systems", "Funnel engineering", "Offer optimization"],
    },
    {
        num: "3",
        icon: Video,
        title: "Creator Revenue Engine",
        points: ["AI-backed creator selection", "UGC testing", "Revenue attribution tracking"],
    },
    {
        num: "4",
        icon: RefreshCw,
        title: "Scaling & Retention Systems",
        points: ["Automated retargeting", "Email + WhatsApp automation", "Repeat purchase loops"],
    },
];

export function Infrastructure() {
    return (
        <section className="py-24 relative bg-background border-b-2 border-foreground">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-20 max-w-4xl mx-auto">
                    <h2 className="font-heading text-4xl md:text-6xl font-black uppercase text-foreground mb-6 tracking-tighter drop-shadow-[4px_4px_0_rgba(255,42,0,1)]">
                        The Brand Maniacs<br />Growth Infrastructure
                    </h2>
                    <p className="text-xl text-foreground font-bold border-2 border-foreground p-4 bg-accent-blue inline-block">
                        We don&apos;t run isolated campaigns. We build interconnected systems engineered for predictable, profitable scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-foreground bg-foreground">
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.1, delay: i * 0.1 }}
                                className="relative z-10 flex flex-col items-start p-8 bg-background border-r-2 border-b-2 lg:border-b-0 border-foreground last:border-r-0 group hover:bg-accent-yellow transition-none"
                            >
                                <div className="w-full flex items-center justify-between mb-8">
                                    <div className="w-16 h-16 border-2 border-foreground bg-foreground text-background flex items-center justify-center brutalist-shadow transition-none group-hover:bg-background group-hover:text-foreground">
                                        <Icon className="w-8 h-8 font-black" />
                                    </div>

                                    {/* Step Number Badge */}
                                    <div className="w-12 h-12 border-2 border-foreground bg-accent-red text-white font-black text-xl flex items-center justify-center brutalist-shadow transition-none group-hover:bg-foreground">
                                        {step.num}
                                    </div>
                                </div>

                                <h3 className="font-heading text-2xl font-black uppercase text-foreground mb-4 group-hover:text-black transition-none">
                                    {step.title}
                                </h3>

                                <ul className="space-y-3 w-full text-left">
                                    {step.points.map((point, j) => (
                                        <li key={j} className="flex items-start text-sm md:text-base text-foreground font-bold group-hover:text-black transition-none">
                                            <span className="mr-3 text-accent-red mt-0 font-black">+</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
