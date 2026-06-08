"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const stats = [
    { value: "₹50 Cr+", label: "Revenue Generated" },
    { value: "40+", label: "Brands Scaled" },
    { value: "500+", label: "Campaigns Optimized" },
];

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background brutalist-border border-t-0 border-x-0">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, ease: "linear" }}
                    >
                        <h1 className="font-heading text-5xl md:text-[80px] font-black uppercase tracking-tighter text-foreground mb-8 leading-[1.0] drop-shadow-[4px_4px_0_rgba(255,42,0,1)]">
                            AI-Powered Revenue Systems for <br />
                            <span className="bg-accent-yellow text-black px-4 inline-block mt-2 brutalist-border">Scaling Brands</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, delay: 0.1, ease: "linear" }}
                    >
                        <p className="text-xl md:text-2xl text-foreground mb-12 max-w-2xl mx-auto leading-tight font-bold border-2 border-foreground p-4 bg-accent-blue">
                            We build predictable growth engines using AI, performance marketing, and creator amplification. Built exclusively for Indian mid-market leaders.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, delay: 0.2, ease: "linear" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
                    >
                        <Button size="lg" className="w-full sm:w-auto min-w-[280px]">
                            Book Growth Strategy Call
                        </Button>
                        <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-[280px]">
                            View Case Studies
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, delay: 0.3, ease: "linear" }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-0 border-2 border-foreground bg-foreground"
                    >
                        {stats.map((stat, i) => (
                            <div key={i} className={`flex flex-col items-center justify-center p-8 bg-background border-r-2 border-b-2 md:border-b-0 border-foreground last:border-r-0 ${i === 2 ? 'col-span-2 md:col-span-1 border-r-0 border-b-0' : ''}`}>
                                <div className="font-heading text-4xl md:text-6xl font-black text-accent-red mb-2 drop-shadow-[2px_2px_0_rgba(240,240,240,1)]">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-bold text-foreground uppercase tracking-widest bg-accent-blue px-2 py-1 border-2 border-foreground">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
