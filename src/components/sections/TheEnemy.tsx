"use client";

import { motion } from "framer-motion";

export function TheEnemy() {
    return (
        <section className="py-24 bg-foreground text-background border-b-2 border-foreground relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-background bg-background">

                        {/* Left — The Problem Statement */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.1 }}
                            className="bg-foreground p-12 md:p-16 border-r-2 border-background flex flex-col justify-center"
                        >
                            <span className="inline-block border-2 border-background text-background font-black text-xs uppercase tracking-widest px-3 py-1 mb-8 w-fit">
                                The Problem
                            </span>
                            <h2 className="font-heading text-4xl md:text-6xl font-black uppercase text-background mb-8 tracking-tighter leading-[0.95]">
                                Marketing Has<br />
                                <span className="bg-accent-red text-white px-2">Become</span><br />
                                Noise.
                            </h2>
                            <p className="text-background text-lg font-bold leading-tight opacity-80">
                                Everyone is posting. No one is building. The agencies are busy making decks while your competitors steal your customers.
                            </p>
                        </motion.div>

                        {/* Right — The list of symptoms */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.1 }}
                            className="bg-background p-12 md:p-16 flex flex-col justify-center"
                        >
                            <span className="inline-block border-2 border-foreground text-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-8 w-fit">
                                Sound familiar?
                            </span>
                            <ul className="space-y-6">
                                {[
                                    { symptom: "You're spending on ads but ROI feels like a guess.", icon: "💸" },
                                    { symptom: "Your agency sends reports. Never takes blame.", icon: "📊" },
                                    { symptom: "Content goes out. Silence comes back.", icon: "📭" },
                                    { symptom: "You know you're better. Your brand doesn't show it.", icon: "🔒" },
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.1, delay: i * 0.05 }}
                                        className="flex items-start gap-4 group"
                                    >
                                        <span className="text-2xl shrink-0 border-2 border-foreground w-12 h-12 flex items-center justify-center bg-accent-yellow">
                                            {item.icon}
                                        </span>
                                        <span className="font-bold text-lg text-foreground leading-tight pt-2">
                                            {item.symptom}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
