"use client";

import { motion } from "framer-motion";

const acronym = [
    { letter: "M", title: "Market Intelligence", desc: "Study customers, competitors, culture. We don't guess what your audience wants. We find out." },
    { letter: "A", title: "Attention Architecture", desc: "Build concepts people notice. In a noisy feed, we engineer the visual and psychological hooks that stop the scroll." },
    { letter: "N", title: "Narrative System", desc: "Create positioning and storytelling. A brand without a story is just a commodity. We give you a narrative that sells." },
    { letter: "I", title: "Intelligent Production", desc: "AI-powered creative generation. We bypass slow, expensive traditional shoots with AIProdGen, scaling visual creation exponentially." },
    { letter: "A", title: "Amplification", desc: "Performance marketing. The best creative means nothing if nobody sees it. We build distribution engines that drive revenue." },
    { letter: "C", title: "Continuous Experiments", desc: "Learn → Improve → Scale. We never assume a campaign is 'done'. We run constant iterations to beat our own benchmarks." }
];

export function TheManiacMethod() {
    return (
        <section className="py-24 bg-background text-foreground border-b-2 border-foreground" id="maniac-method">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Header */}
                    <div className="mb-20 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.15 }}
                        >
                            <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 bg-accent-yellow text-black">
                                Our Intellectual Property
                            </span>
                            <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground leading-[0.95] mb-6">
                                The <span className="bg-foreground text-background px-2">Maniac</span> Method™
                            </h2>
                            <p className="text-lg font-bold text-foreground opacity-80 leading-snug max-w-2xl mx-auto">
                                The exact six-step framework we use to engineer brands that grow at the speed of culture. This is what separates us from commodity agencies.
                            </p>
                        </motion.div>
                    </div>

                    {/* Acronym Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-foreground bg-foreground">
                        {acronym.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.15, delay: i * 0.05 }}
                                className="bg-background p-6 sm:p-10 border-r-2 border-b-2 lg:border-b-0 border-foreground group hover:bg-foreground hover:text-background transition-none relative overflow-hidden"
                            >
                                <div className="absolute -right-4 -top-8 font-heading text-[120px] font-black leading-none opacity-5 group-hover:opacity-10 group-hover:text-accent-yellow transition-none pointer-events-none select-none">
                                    {item.letter}
                                </div>
                                
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-accent-yellow text-black border-2 border-black font-heading font-black text-2xl flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                        {item.letter}
                                    </div>
                                    <h3 className="font-heading text-2xl font-black uppercase mb-4 leading-tight pr-4">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm font-bold opacity-80 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
