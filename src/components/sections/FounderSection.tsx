"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function FounderSection() {
    return (
        <section className="py-24 bg-foreground text-background border-b-2 border-background relative overflow-hidden">

            {/* Subtle texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none select-none flex items-center justify-end pr-12">
                <span className="font-heading text-[18vw] font-black uppercase text-background leading-none">TJ</span>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-background">

                    {/* Left — The story */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.15 }}
                        className="p-10 md:p-14 border-r-2 border-background flex flex-col justify-center"
                    >
                        <span className="inline-block border-2 border-background font-black text-xs uppercase tracking-widest px-3 py-1 mb-8 text-background w-fit">
                            Why This Exists
                        </span>

                        <h2 className="font-heading text-3xl md:text-5xl font-black uppercase text-background leading-[0.95] mb-8 tracking-tighter">
                            Built by Marketers<br />
                            <span className="bg-accent-yellow text-black px-2">Obsessed With</span><br />
                            Human Behaviour.
                        </h2>

                        <div className="space-y-5 text-background text-base font-bold leading-snug opacity-90">
                            <p>
                                Founded by <span className="text-accent-yellow">Tony Joseph</span>, The Brand Maniacs was created with one belief:
                            </p>
                            <blockquote className="border-l-4 border-accent-yellow pl-5 text-xl font-black uppercase leading-tight text-background">
                                &quot;Great marketing is not about posting more. It&apos;s about understanding why people stop, trust, remember, and buy.&quot;
                            </blockquote>
                            <p className="opacity-70">
                                After years studying what makes brands command attention — not just likes — we built a studio that starts with psychology and ends with measurable outcomes.
                            </p>
                            <p className="opacity-70">
                                We stay intentionally small. Every brand we work with gets real strategic thinking, not templated campaigns handed to a junior team.
                            </p>
                        </div>

                        <div className="mt-10">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 border-2 border-background text-background font-black text-xs uppercase tracking-widest px-5 py-3 hover:bg-accent-yellow hover:text-black hover:border-accent-yellow transition-none"
                            >
                                Meet Tony →
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right — Belief cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.15 }}
                        className="grid grid-cols-1 divide-y-2 divide-background"
                    >
                        {[
                            {
                                num: "01",
                                title: "Attention Comes Before Sales",
                                body: "You can&apos;t convert a customer you haven't stopped. Every strategy starts with earning the scroll-stop.",
                                accent: "bg-accent-red text-white",
                            },
                            {
                                num: "02",
                                title: "Strategy Before Aesthetic",
                                body: "Beautiful work that says nothing is expensive noise. We think before we design.",
                                accent: "bg-accent-yellow text-black",
                            },
                            {
                                num: "03",
                                title: "Test Before Assuming",
                                body: "We run experiments. We kill bad ideas cheap. We scale what actually works.",
                                accent: "bg-accent-blue text-white",
                            },
                            {
                                num: "04",
                                title: "Build Systems, Not Random Posts",
                                body: "A post fades in hours. A content system compounds for years. We build systems.",
                                accent: "bg-background text-foreground",
                            },
                        ].map((item, i) => (
                            <div key={i} className="p-8 group hover:bg-black transition-none flex gap-5 items-start">
                                <span className={`${item.accent} w-10 h-10 flex items-center justify-center font-heading font-black text-sm border-2 border-background shrink-0`}>
                                    {item.num}
                                </span>
                                <div>
                                    <h3 className="font-heading font-black uppercase text-background text-base mb-2 group-hover:text-accent-yellow transition-none">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm font-bold text-background opacity-60 leading-snug group-hover:opacity-80 transition-none">
                                        {item.body}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
