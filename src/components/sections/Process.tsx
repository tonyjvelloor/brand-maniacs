"use client";

import { motion } from "framer-motion";

const processSteps = [
    {
        num: "01",
        title: "Audit & Diagnose",
        body: "We go deep. Ad accounts, brand positioning, content performance, funnel data. We find exactly what's broken and why.",
        duration: "Week 1",
    },
    {
        num: "02",
        title: "Insight & Strategy",
        body: "We map your buyer psychology, study the competitive landscape, identify the 3 big moves that will change everything.",
        duration: "Week 2",
    },
    {
        num: "03",
        title: "Build & Test",
        body: "We launch experiments. MVPs before campaigns. We kill losers cheap, find winners fast. No ego, only data.",
        duration: "Weeks 3–6",
    },
    {
        num: "04",
        title: "Scale & Systematise",
        body: "Once we know what works, we pour fuel on it. Automate the repeatable. Compound the momentum.",
        duration: "Month 2+",
    },
];

export function Process() {
    return (
        <section className="py-24 bg-foreground text-background border-b-2 border-background relative" id="process">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.1 }}
                        className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end"
                    >
                        <div>
                            <span className="inline-block border-2 border-background font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 text-background">
                                How It Works
                            </span>
                            <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter text-background leading-[0.95]">
                                No Guessing.<br />
                                <span className="bg-accent-yellow text-black px-2">No Wasted Months.</span><br />
                                Just Moves.
                            </h2>
                        </div>
                        <p className="text-background text-xl font-bold leading-tight opacity-80">
                            Most agencies coast for 3 months then deliver a report. We deploy, test, and generate results in the first 30 days — or we tell you why not.
                        </p>
                    </motion.div>

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-background bg-background">
                        {processSteps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.1, delay: i * 0.05 }}
                                className="bg-foreground p-8 border-r-2 border-b-2 lg:border-b-0 border-background last:border-r-0 group hover:bg-accent-yellow hover:text-black transition-none"
                            >
                                <div className="font-heading text-6xl font-black opacity-20 mb-6 text-background group-hover:text-black group-hover:opacity-30 transition-none leading-none">
                                    {step.num}
                                </div>
                                <div className="border-2 border-background text-background font-black text-xs uppercase tracking-widest px-2 py-1 inline-block mb-4 group-hover:border-black group-hover:text-black transition-none">
                                    {step.duration}
                                </div>
                                <h3 className="font-heading text-2xl font-black uppercase text-background mb-4 group-hover:text-black transition-none leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-sm font-bold text-background opacity-70 leading-snug group-hover:text-black group-hover:opacity-80 transition-none">
                                    {step.body}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
