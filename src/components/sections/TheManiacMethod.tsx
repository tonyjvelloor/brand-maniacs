"use client";

import { useState } from "react";
import { FadeUp } from "@/components/ui/FadeUp";

const acronym = [
    { letter: "M", title: "Market Intelligence", desc: "Study customers, competitors, culture. We don't guess what your audience wants. We find out." },
    { letter: "A", title: "Attention Architecture", desc: "Build concepts people notice. In a noisy feed, we engineer the visual and psychological hooks that stop the scroll." },
    { letter: "N", title: "Narrative System", desc: "Create positioning and storytelling. A brand without a story is just a commodity. We give you a narrative that sells." },
    { letter: "I", title: "Intelligent Production", desc: "AI-powered creative generation. We bypass slow, expensive traditional shoots with AIProdGen, scaling visual creation exponentially." },
    { letter: "A", title: "Amplification", desc: "Performance marketing. The best creative means nothing if nobody sees it. We build distribution engines that drive revenue." },
    { letter: "C", title: "Continuous Experiments", desc: "Learn → Improve → Scale. We never assume a campaign is 'done'. We run constant iterations to beat our own benchmarks." }
];

export function TheManiacMethod() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    return (
        <section className="py-24 bg-background text-foreground border-b-2 border-foreground" id="maniac-method">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Header */}
                    <div className="mb-20 text-center">
                        <FadeUp>
                            <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 bg-accent-yellow text-black">
                                Our Intellectual Property
                            </span>
                            <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground leading-[0.95] mb-6">
                                The <span className="bg-foreground text-background px-2">Maniac</span> Method™
                            </h2>
                            <p className="text-lg font-bold text-foreground opacity-80 leading-snug max-w-2xl mx-auto">
                                The exact six-step framework we use to engineer brands that grow at the speed of culture. This is what separates us from commodity agencies.
                            </p>
                        </FadeUp>
                    </div>

                    {/* Acronym Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-foreground bg-foreground">
                        {acronym.map((item, i) => (
                            <FadeUp
                                key={i}
                                delay={i * 0.05}
                                className={`p-6 sm:p-10 border-r-2 border-b-2 border-foreground transition-all duration-300 relative overflow-hidden cursor-pointer ${hoveredIndex === i ? 'bg-foreground text-background scale-[1.02] shadow-2xl z-10' : 'bg-background text-foreground'}`}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className={`absolute -right-4 -top-8 font-heading text-[120px] font-black leading-none pointer-events-none select-none transition-all duration-500 ${hoveredIndex === i ? 'opacity-20 text-accent-yellow scale-110 translate-y-4 -translate-x-4' : 'opacity-5'}`}>
                                    {item.letter}
                                </div>
                                
                                <div className="relative z-10">
                                    <div className={`w-12 h-12 font-heading font-black text-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${hoveredIndex === i ? 'bg-accent-yellow text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]' : 'bg-background text-foreground border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'}`}>
                                        {item.letter}
                                    </div>
                                    <h3 className="font-heading text-2xl font-black uppercase mb-4 leading-tight pr-4">
                                        {item.title}
                                    </h3>
                                    <p className={`text-sm font-bold leading-relaxed transition-opacity duration-300 ${hoveredIndex === i ? 'opacity-100' : 'opacity-80'}`}>
                                        {item.desc}
                                    </p>
                                </div>
                            </FadeUp>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
