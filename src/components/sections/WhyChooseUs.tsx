"use client";

import { FadeUp } from "@/components/ui/FadeUp";

const principles = [
    {
        title: "Senior Team on Every Project",
        desc: "No bait and switch. You don't get pitched by executives and handed off to juniors. Every project is engineered by senior strategists and technologists."
    },
    {
        title: "Strategy Before Execution",
        desc: "We refuse to build on assumptions. Every digital product, brand identity, and campaign is rooted in deep market intelligence and positioning."
    },
    {
        title: "AI Where It Adds Value",
        desc: "We don't use AI for the hype. We use it to bypass slow, expensive traditional workflows—scaling high-end production at speeds previously impossible."
    },
    {
        title: "Performance-First Engineering",
        desc: "Beautiful design is useless if it takes 5 seconds to load. We build digital infrastructure that balances extreme aesthetics with extreme speed."
    },
    {
        title: "Long-Term Growth Partnerships",
        desc: "We stay intentionally small. We don't churn through hundreds of clients. We partner deeply with ambitious founders who want to win their market."
    }
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-foreground text-background border-b-2 border-foreground relative overflow-hidden" id="why-choose-us">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Header */}
                    <div className="mb-20">
                        <FadeUp>
                            <span className="inline-block border-2 border-background font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 bg-background text-foreground">
                                The Standard
                            </span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter text-background leading-[0.95]">
                                    Why Companies<br />
                                    <span className="text-accent-blue">Choose Us.</span>
                                </h2>
                                <div>
                                    <p className="text-lg font-bold text-background opacity-80 leading-snug mb-4">
                                        The traditional agency model is broken. It's bloated, slow, and disconnected from revenue. We built The Brand Maniacs to be the exact opposite.
                                    </p>
                                </div>
                            </div>
                        </FadeUp>
                    </div>

                    {/* Principles List */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
                        {principles.map((p, i) => (
                            <FadeUp key={i} delay={i * 0.1} className="relative">
                                {/* Large background number */}
                                <div className="absolute -left-4 -top-6 font-heading text-6xl md:text-8xl font-black text-background opacity-10 leading-none pointer-events-none select-none z-0">
                                    0{i + 1}
                                </div>
                                
                                <div className="relative z-10 pl-6 border-l-4 border-accent-yellow">
                                    <h3 className="font-heading text-2xl font-black uppercase tracking-tighter mb-3">
                                        {p.title}
                                    </h3>
                                    <p className="font-bold text-sm leading-relaxed opacity-80">
                                        {p.desc}
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
