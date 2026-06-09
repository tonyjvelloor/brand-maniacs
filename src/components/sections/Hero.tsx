"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/config";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 overflow-hidden bg-background">

            {/* Huge background word */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <span className="font-heading text-[20vw] font-black uppercase text-foreground opacity-[0.03] whitespace-nowrap leading-none">
                    TECHNOLOGY
                </span>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">

                    {/* Studio label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15 }}
                        className="mb-10"
                    >
                        <span className="inline-flex items-center gap-3 border-2 border-foreground bg-background px-4 py-2">
                            <span className="w-2 h-2 bg-accent-red rounded-full animate-pulse" />
                            <span className="font-black text-xs uppercase tracking-widest text-foreground">
                                Creative Technology Studio · Est. India
                            </span>
                        </span>
                    </motion.div>

                    {/* Main headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15, delay: 0.05 }}
                        className="mb-10"
                    >
                        <h1 className="font-heading font-black uppercase tracking-tighter text-foreground leading-[0.9] text-5xl md:text-[6.5vw] lg:text-[6vw]">
                            Brands don&apos;t<br />
                            grow by creating<br />
                            more.<br />
                            <span className="text-foreground opacity-30">They grow by</span><br />
                            <span className="bg-accent-yellow text-black px-4 inline-block mt-1">becoming</span><br />
                            <span className="relative inline-block mt-1">
                                <span className="relative z-10 bg-accent-red text-white px-4 py-1">impossible to ignore.</span>
                            </span>
                        </h1>
                    </motion.div>

                    {/* Sub */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15, delay: 0.1 }}
                        className="max-w-2xl mb-12"
                    >
                        <p className="text-lg md:text-xl font-bold text-foreground leading-snug border-l-4 border-accent-red pl-5">
                            The Brand Maniacs is a Creative Technology Studio building brands through strategy, storytelling, AI-powered production, and growth experiments.
                        </p>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15, delay: 0.15 }}
                        className="flex flex-col sm:flex-row items-start gap-4 mb-20"
                    >
                        <Button size="lg" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                            Build My Growth System
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button variant="secondary" size="lg" href="/labs">
                            Explore Our Technology
                        </Button>
                    </motion.div>

                    {/* Bottom bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.15, delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-foreground bg-foreground max-w-3xl"
                    >
                        {[
                            { v: "Human", s: "Strategy First" },
                            { v: "AI", s: "Production Scale" },
                            { v: "Testing", s: "Before Assuming" },
                            { v: "Systems", s: "Not Random Posts" },
                        ].map((item, i) => (
                            <div key={i} className="bg-background p-5 border-r-2 border-b-2 md:border-b-0 border-foreground last:border-r-0 group hover:bg-accent-yellow transition-none">
                                <div className="font-heading text-base font-black uppercase text-foreground group-hover:text-black transition-none">{item.v}</div>
                                <div className="text-xs font-bold text-foreground opacity-50 group-hover:text-black group-hover:opacity-70 transition-none uppercase tracking-widest">{item.s}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
