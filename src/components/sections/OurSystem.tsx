"use client";

import { useState } from "react";
import { FadeUp } from "@/components/ui/FadeUp";

const steps = [
    { num: "01", title: "Discover", desc: "We study customers, competitors, and culture. We don't guess what your audience wants. We find the friction points and growth levers." },
    { num: "02", title: "Design", desc: "We engineer positioning, identity, and narrative systems. A brand without a story is just a commodity. We design experiences that sell." },
    { num: "03", title: "Build", desc: "We build the digital infrastructure—websites, funnels, and performance creative—engineered specifically to increase trust and conversions." },
    { num: "04", title: "Grow", desc: "Learn → Improve → Scale. We never assume a system is 'done'. We run continuous experiments to beat our own conversion benchmarks." },
];

export function OurSystem() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    return (
        <section className="py-24 bg-background text-foreground border-b-2 border-foreground" id="system">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Header */}
                    <div className="mb-20 text-center">
                        <FadeUp>
                            <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 bg-accent-yellow text-black">
                                Methodology
                            </span>
                            <h2 className="font-heading text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground leading-[0.95] mb-6">
                                Our <span className="bg-foreground text-background px-2">System</span>
                            </h2>
                            <p className="text-lg font-bold text-foreground opacity-80 leading-snug max-w-2xl mx-auto">
                                The four-step framework we use to engineer brands that drive measurable growth. This is what separates us from commodity agencies.
                            </p>
                        </FadeUp>
                    </div>

                    {/* Methodology Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-foreground bg-foreground">
                        {steps.map((item, i) => {
                            const isHovered = hoveredIndex === i;
                            const isAnotherHovered = hoveredIndex !== null && hoveredIndex !== i;
                            return (
                            <FadeUp
                                key={i}
                                delay={i * 0.05}
                                className={`p-6 sm:p-10 border-r-2 border-b-2 md:border-b-0 border-foreground transition-all duration-300 relative overflow-hidden cursor-pointer ${
                                    isHovered 
                                        ? 'bg-foreground text-background scale-[1.02] shadow-2xl z-10 border-t-[8px] border-t-accent-red' 
                                        : 'bg-background text-foreground border-t-[8px] border-t-transparent'
                                } ${isAnotherHovered ? 'opacity-40 grayscale' : 'opacity-100'}`}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className={`absolute -right-2 -top-4 font-heading text-[120px] font-black leading-none pointer-events-none select-none transition-all duration-500 ${isHovered ? 'opacity-10 text-accent-yellow scale-110 translate-y-4 -translate-x-4' : 'opacity-5'}`}>
                                    {item.num}
                                </div>
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className={`w-12 h-12 font-heading font-black text-xl flex items-center justify-center mb-10 transition-colors duration-300 ${isHovered ? 'bg-accent-yellow text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]' : 'bg-background text-foreground border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'}`}>
                                        {item.num}
                                    </div>
                                    <h3 className="font-heading text-2xl font-black uppercase mb-4 leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className={`text-sm font-bold leading-relaxed transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-80'}`}>
                                        {item.desc}
                                    </p>
                                </div>
                            </FadeUp>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
