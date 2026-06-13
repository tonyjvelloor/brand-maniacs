"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function TheBrokenModel() {
    return (
        <section className="py-24 bg-foreground text-background border-b-2 border-background overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                
                {/* Header */}
                <div className="mb-16 md:mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.15 }}
                    >
                        <span className="inline-block border-2 border-background font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 text-background">
                            The Paradigm Shift
                        </span>
                        <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter text-background leading-[0.95] mb-6">
                            The Old Agency<br />
                            Model Is <span className="bg-accent-red text-white px-2">Broken.</span>
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-background opacity-80 leading-snug max-w-2xl mx-auto">
                            Culture moves in hours. Traditional agencies move in weeks. If you&apos;re relying on the old playbook, you&apos;re already behind.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 border-2 border-background relative">
                    
                    {/* Desktop VS badge */}
                    <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-accent-yellow border-2 border-black items-center justify-center font-heading font-black text-black z-10 uppercase text-xl">
                        VS
                    </div>

                    {/* Left: Traditional Marketing */}
                    <div className="bg-foreground text-background p-6 sm:p-8 md:p-12 border-b-2 md:border-b-0 md:border-r-2 border-background relative grayscale opacity-40">
                        <h3 className="font-heading text-2xl font-black uppercase mb-8 opacity-60 flex items-center gap-3">
                            <span className="w-3 h-3 bg-background rounded-full"></span>
                            Traditional Marketing
                        </h3>
                        
                        <div className="flex flex-col items-center">
                            {[
                                "Idea",
                                "Meeting",
                                "Photoshoot",
                                "Design",
                                "Approval",
                                "Launch after weeks"
                            ].map((step, i, arr) => (
                                <div key={i} className="flex flex-col items-center w-full">
                                    <div className="w-full max-w-xs border border-background p-4 text-center font-bold text-sm uppercase tracking-wide line-through decoration-background/50">
                                        {step}
                                    </div>
                                    {i < arr.length - 1 && (
                                        <ArrowDown className="w-5 h-5 my-2 opacity-30" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: The Maniac Method */}
                    <div className="bg-background text-foreground p-6 sm:p-8 md:p-12 border-2 border-accent-yellow brutalist-shadow z-10 relative">
                        <h3 className="font-heading text-2xl md:text-3xl font-black uppercase mb-8 text-accent-red flex items-center gap-3">
                            <span className="w-4 h-4 bg-accent-red animate-pulse rounded-full shadow-[0_0_10px_rgba(255,0,0,0.8)]"></span>
                            The Maniac Method
                        </h3>
                        
                        <div className="flex flex-col items-center">
                            {[
                                { text: "Research & Strategy", desc: "Human Intelligence" },
                                { text: "Create 50 Directions", desc: "AI-Powered Generation" },
                                { text: "Test Fast", desc: "Data-Driven Feedback" },
                                { text: "Scale Winners", desc: "Infinite ROI" }
                            ].map((step, i, arr) => (
                                <div key={i} className="flex flex-col items-center w-full">
                                    <div className="w-full max-w-xs border-2 border-foreground p-4 text-center bg-accent-yellow brutalist-shadow-sm hover:scale-105 transition-transform cursor-default">
                                        <div className="font-black text-sm md:text-base uppercase tracking-wide text-black">
                                            {step.text}
                                        </div>
                                        <div className="text-xs font-bold text-black/80 mt-1 uppercase">
                                            {step.desc}
                                        </div>
                                    </div>
                                    {i < arr.length - 1 && (
                                        <ArrowDown className="w-6 h-6 my-3 text-foreground font-black" />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 text-center p-6 border-4 border-foreground bg-foreground">
                            <p className="font-heading font-black text-xl md:text-2xl uppercase tracking-wide text-background">
                                Powered by <span className="text-accent-yellow">AIProdGen</span> + Human Strategy.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
