"use client";

import { motion } from "framer-motion";

const principles = [
    {
        num: "01",
        title: "We test before we assume.",
        body: "Every brief goes through experimentation before it goes to spend. We kill bad ideas cheap and scale winning ones hard.",
        color: "bg-accent-yellow",
        textColor: "text-black",
    },
    {
        num: "02",
        title: "We study humans before algorithms.",
        body: "Psychology first. Platform second. We reverse-engineer what makes people stop, feel, and act — then we engineer for it.",
        color: "bg-accent-red",
        textColor: "text-white",
    },
    {
        num: "03",
        title: "We create movements, not posts.",
        body: "A post fades. A movement compounds. We build brand narratives that make people feel something, then talk about it.",
        color: "bg-accent-blue",
        textColor: "text-white",
    },
    {
        num: "04",
        title: "We obsess over outcomes.",
        body: "Vanity metrics are comfort food. We're here for revenue, retention, and reputation. Nothing else gets celebrated.",
        color: "bg-foreground",
        textColor: "text-background",
    },
];

export function OperatingSystem() {
    return (
        <section className="py-24 bg-background border-b-2 border-foreground relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.1 }}
                        className="mb-20"
                    >
                        <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 bg-accent-yellow text-black brutalist-shadow">
                            Our Operating System
                        </span>
                        <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground leading-[0.95] drop-shadow-[4px_4px_0_rgba(255,42,0,1)]">
                            The Maniac<br />Method™
                        </h2>
                        <p className="text-xl text-foreground font-bold mt-6 max-w-xl leading-tight">
                            Not a process. Not a framework. A way of thinking that infects every brief, every idea, every pixel we touch.
                        </p>
                    </motion.div>

                    {/* Principles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-foreground bg-foreground">
                        {principles.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.1, delay: i * 0.05 }}
                                className={`${p.color} ${p.textColor} p-10 border-r-2 border-b-2 border-foreground last:border-r-0 group hover:scale-[1.02] transition-transform duration-100`}
                            >
                                <div className={`font-heading text-7xl font-black opacity-20 mb-4 leading-none ${p.textColor}`}>
                                    {p.num}
                                </div>
                                <h3 className={`font-heading text-2xl md:text-3xl font-black uppercase mb-4 ${p.textColor} leading-tight`}>
                                    {p.title}
                                </h3>
                                <p className={`text-base font-bold leading-snug ${p.textColor} opacity-80`}>
                                    {p.body}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
