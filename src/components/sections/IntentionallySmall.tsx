"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/config";

export function IntentionallySmall() {
    return (
        <section className="py-24 bg-foreground text-background border-b-2 border-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-background">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.15 }}
                        className="p-10 md:p-14 border-r-2 border-background"
                    >
                        <span className="inline-block border-2 border-background font-black text-xs uppercase tracking-widest px-3 py-1 mb-8 text-background">
                            Global Position
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl font-black uppercase text-background leading-[0.95] tracking-tighter mb-8">
                            Built in India.<br />
                            Designed for the<br />
                            <span className="bg-accent-yellow text-black px-2">World.</span>
                        </h2>
                        <p className="text-background text-lg font-black uppercase tracking-wide leading-snug text-accent-yellow mb-6">
                            Global ambition. Indian engineering discipline.
                        </p>
                        <p className="text-background text-base font-bold leading-snug opacity-80 mb-10">
                            We combine strategy, creative thinking, technology and performance to build growth infrastructure for ambitious businesses that want to move faster.
                        </p>
                        <Button
                            href="/start"
                            className="bg-accent-yellow text-black border-black"
                            size="lg"
                        >
                            Build Your Growth System
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </motion.div>

                    {/* Right — Proof numbers */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.15 }}
                        className="grid grid-cols-2 divide-x-2 divide-y-2 divide-background"
                    >
                        {[
                            { val: "40+", label: "Brands", sub: "8 Industries. 3 Countries." },
                            { val: "₹3.2Cr+", label: "Ad Spend Managed", sub: "Across client accounts" },
                            { val: "3", label: "Max Active Clients", sub: "At any given time" },
                            { val: "100%", label: "Senior-Led Work", sub: "No juniors running strategy" },
                        ].map((item, i) => (
                            <div key={i} className="p-10 flex flex-col justify-center group hover:bg-accent-yellow hover:text-black transition-none">
                                <div className="font-heading text-4xl md:text-5xl font-black text-background group-hover:text-black transition-none mb-2">
                                    {item.val}
                                </div>
                                <div className="font-black text-sm uppercase tracking-widest text-background group-hover:text-black transition-none mb-1">
                                    {item.label}
                                </div>
                                <div className="text-xs font-bold text-background opacity-50 group-hover:text-black group-hover:opacity-60 transition-none">
                                    {item.sub}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
