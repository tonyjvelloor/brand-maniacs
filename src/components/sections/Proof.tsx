"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";

export function Proof() {
    return (
        <section className="py-24 bg-background border-b-2 border-foreground relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mb-16">
                    <h2 className="inline-block font-heading text-4xl md:text-6xl font-black uppercase text-background bg-accent-red p-4 mb-6 tracking-tighter brutalist-border drop-shadow-[4px_4px_0_rgba(240,240,240,1)]">
                        Proof Before Promises
                    </h2>
                    <p className="text-xl text-foreground font-bold border-2 border-foreground p-4 bg-background inline-block">
                        Indian mid-market brands need predictable performance, not vanity metrics. Here is what happens when you deploy our growth infrastructure.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-foreground bg-foreground">
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-0 border-r-2 border-foreground bg-foreground">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.1 }}
                            className="bg-background p-8 border-b-2 border-r-2 border-foreground hover:bg-accent-yellow hover:text-black group transition-none flex flex-col justify-center"
                        >
                            <div className="text-accent-blue group-hover:text-black flex items-center gap-2 mb-4 font-black">
                                <ArrowUpRight className="w-6 h-6 border-2 border-current p-0.5" />
                                <span className="font-bold text-sm tracking-widest uppercase">ROAS</span>
                            </div>
                            <div className="font-heading text-5xl font-black text-foreground group-hover:text-black mb-2">+140%</div>
                            <div className="text-sm text-foreground group-hover:text-black font-bold uppercase">Average Improvement</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.1, delay: 0.1 }}
                            className="bg-background p-8 border-b-2 border-foreground hover:bg-accent-blue hover:text-white group transition-none flex flex-col justify-center"
                        >
                            <div className="text-accent-red group-hover:text-white flex items-center gap-2 mb-4 font-black">
                                <ArrowDownRight className="w-6 h-6 border-2 border-current p-0.5" />
                                <span className="font-bold text-sm tracking-widest uppercase">CAC</span>
                            </div>
                            <div className="font-heading text-5xl font-black text-foreground group-hover:text-white mb-2">-45%</div>
                            <div className="text-sm text-foreground group-hover:text-white font-bold uppercase">Average Reduction</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.1, delay: 0.2 }}
                            className="bg-accent-red p-8 col-span-2 text-white border-foreground flex flex-col justify-center hover:bg-foreground hover:text-background group transition-none"
                        >
                            <div className="text-white group-hover:text-background flex items-center gap-2 mb-4 font-black">
                                <TrendingUp className="w-6 h-6 border-2 border-current p-0.5" />
                                <span className="font-bold text-sm tracking-widest uppercase">Revenue Jump</span>
                            </div>
                            <div className="font-heading text-5xl md:text-7xl font-black text-white group-hover:text-background mb-4 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] group-hover:drop-shadow-none">₹12 Cr <span className="text-accent-yellow mx-2">→</span> ₹34 Cr</div>
                            <div className="text-sm font-bold uppercase bg-background text-foreground inline-block px-2 border-2 border-transparent group-hover:border-background">D2C Fashion Brand (8 Months)</div>
                        </motion.div>
                    </div>

                    {/* Visual Graph Representation */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.1, delay: 0.3 }}
                        className="bg-background border-none p-12 flex flex-col justify-center"
                    >
                        <div className="flex justify-between items-end h-64 gap-8 px-4 border-b-4 border-l-4 border-foreground pb-4 relative ml-4">
                            {/* Before Bar */}
                            <div className="w-1/2 bg-foreground relative h-[35%] brutalist-border hover:bg-accent-red transition-none">
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-sm text-foreground font-bold uppercase tracking-widest bg-background border-2 border-foreground px-2 py-1">Before</span>
                            </div>
                            {/* After Bar */}
                            <div className="w-1/2 bg-accent-yellow relative h-[95%] brutalist-border hover:bg-accent-blue transition-none">
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-sm text-black font-bold uppercase tracking-widest bg-accent-yellow border-2 border-black px-2 py-1">After</span>
                            </div>
                        </div>
                        <div className="mt-12 text-center text-foreground text-sm md:text-base font-bold uppercase tracking-widest border-2 border-foreground p-4 brutalist-shadow">
                            "We stopped guessing and started predicting our growth."
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
