"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/config";

const stats = [
    { value: "₹50 Cr+", label: "Revenue Generated" },
    { value: "40+", label: "Brands Transformed" },
    { value: "500+", label: "Experiments Run" },
    { value: "4.8x", label: "Avg. ROAS" },
];

const industries = ["D2C", "Wellness", "SaaS", "Fashion", "EdTech", "Food & Bev", "Real Estate"];

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background brutalist-border border-t-0 border-x-0">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">

                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1 }}
                        className="mb-8"
                    >
                        <span className="inline-block border-2 border-foreground bg-accent-yellow text-black font-black text-sm uppercase tracking-widest px-4 py-2 brutalist-shadow">
                            The Maniac Method™
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, delay: 0.05 }}
                    >
                        <h1 className="font-heading text-5xl md:text-[88px] font-black uppercase tracking-tighter text-foreground mb-8 leading-[0.95]">
                            Build Brands<br />
                            <span className="bg-accent-red text-white px-4 inline-block mt-2 brutalist-border">
                                People Can't Ignore
                            </span>
                        </h1>
                    </motion.div>

                    {/* Sub */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, delay: 0.1 }}
                        className="max-w-2xl mb-12"
                    >
                        <p className="text-xl md:text-2xl text-foreground font-bold leading-tight">
                            We don't run campaigns. We engineer brand movements — built on psychology, experiments, and obsessive creative thinking.
                        </p>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, delay: 0.15 }}
                        className="flex flex-col sm:flex-row items-start gap-4 mb-20"
                    >
                        <Button size="lg" className="w-full sm:w-auto min-w-[260px]" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                            Book a Strategy Call
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-[260px]" scrollTo="case-studies">
                            See Transformations
                        </Button>
                    </motion.div>

                    {/* Industry Ticker */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1, delay: 0.2 }}
                        className="flex flex-wrap gap-2 mb-16"
                    >
                        <span className="text-sm font-black uppercase tracking-widest text-foreground opacity-60 mr-2 self-center">Trusted across:</span>
                        {industries.map((ind, i) => (
                            <span key={i} className="border-2 border-foreground px-3 py-1 text-xs font-black uppercase tracking-widest bg-background hover:bg-foreground hover:text-background transition-none cursor-default">
                                {ind}
                            </span>
                        ))}
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, delay: 0.25 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-foreground bg-foreground"
                    >
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center justify-center p-8 bg-background border-r-2 border-b-2 md:border-b-0 border-foreground last:border-r-0 group hover:bg-accent-yellow transition-none">
                                <div className="font-heading text-4xl md:text-5xl font-black text-accent-red mb-2 group-hover:text-black transition-none">
                                    {stat.value}
                                </div>
                                <div className="text-xs font-black text-foreground uppercase tracking-widest group-hover:text-black transition-none text-center">
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
