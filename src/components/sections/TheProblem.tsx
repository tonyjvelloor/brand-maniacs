"use client";

import { motion } from "framer-motion";
import { TrendingDown, UserMinus, MousePointerClick } from "lucide-react";

const problems = [
    {
        icon: TrendingDown,
        title: "Scaling ad spend but profits aren't increasing?",
        description: "Your CAC scales linearly with your spend, eating into your margins and making growth unsustainable.",
    },
    {
        icon: UserMinus,
        title: "Creator campaigns without measurable ROI?",
        description: "You&apos;re paying for 'brand awareness' because agencies can&apos;t tie creator content to actual revenue.",
    },
    {
        icon: MousePointerClick,
        title: "High traffic, low conversions?",
        description: "Your ads get clicks, but your landing page leaks traffic before they ever reach checkout.",
    },
];

export function TheProblem() {
    return (
        <section className="py-24 bg-background brutalist-border border-x-0 border-t-0 relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="inline-block font-heading text-4xl md:text-6xl font-black uppercase text-background bg-accent-yellow p-4 mb-6 tracking-tighter brutalist-border">
                        The Real Growth Problem
                    </h2>
                    <p className="text-xl text-foreground font-bold border-2 border-foreground p-4 bg-accent-blue inline-block">
                        Most Indian mid-market brands hit a ceiling. Tactics that got you here won't get you to the next level.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-foreground bg-foreground">
                    {problems.map((problem, i) => {
                        const Icon = problem.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.1, delay: i * 0.1 }}
                                className="bg-background p-8 border-r-2 border-b-2 md:border-b-0 border-foreground last:border-r-0 group hover:bg-accent-red hover:text-white transition-none"
                            >
                                <div className="w-16 h-16 border-2 border-foreground bg-accent-yellow text-black flex items-center justify-center mb-6 brutalist-shadow-red group-hover:bg-background group-hover:text-foreground group-hover:border-foreground transition-none">
                                    <Icon className="w-8 h-8 font-black" />
                                </div>
                                <h3 className="font-heading text-2xl font-black uppercase text-foreground mb-4 group-hover:text-background transition-none">
                                    {problem.title}
                                </h3>
                                <p className="text-foreground font-bold leading-tight group-hover:text-background transition-none">
                                    {problem.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
