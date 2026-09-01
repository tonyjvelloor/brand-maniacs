"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";

export function MeetTheManiacs() {
    return (
        <section className="py-24 bg-foreground text-background border-b-2 border-background relative overflow-hidden" id="meet-the-maniacs">

            {/* Subtle texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none select-none flex items-center justify-end pr-12">
                <span className="font-heading text-[15vw] font-black uppercase text-background leading-none">TBM</span>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Header */}
                    <FadeUp className="mb-16">
                        <span className="inline-block border-2 border-background font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 bg-background text-foreground">
                            Behind The Studio
                        </span>
                        <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter text-background leading-[0.95] mb-6">
                            Meet the <span className="text-accent-yellow">Maniacs.</span>
                        </h2>
                    </FadeUp>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-background bg-background">
                        
                        {/* Left - The Problem & Why We Exist */}
                        <div className="lg:col-span-7 bg-foreground text-background p-10 md:p-14 border-r-2 lg:border-b-0 border-b-2 border-background">
                            <div className="mb-12">
                                <span className="text-xs font-black uppercase tracking-widest text-accent-red block mb-3 border-l-2 border-accent-red pl-3">The Problem</span>
                                <p className="font-bold text-lg md:text-xl leading-snug opacity-90">
                                    Agencies sell deliverables. They sell hours, ad campaigns, and website redesigns. But founders don't want deliverables. They want revenue, market share, and lower customer acquisition costs.
                                </p>
                            </div>

                            <div className="mb-12">
                                <span className="text-xs font-black uppercase tracking-widest text-accent-yellow block mb-3 border-l-2 border-accent-yellow pl-3">Why We Exist</span>
                                <p className="font-bold text-lg md:text-xl leading-snug opacity-90">
                                    We left the traditional agency model because it fundamentally misaligns incentives. We built The Brand Maniacs to sit on the same side of the table as our clients. We don't act as a vendor; we act as your outsourced growth infrastructure.
                                </p>
                            </div>

                            <div>
                                <span className="text-xs font-black uppercase tracking-widest text-accent-blue block mb-3 border-l-2 border-accent-blue pl-3">Our Philosophy</span>
                                <blockquote className="border-l-4 border-background pl-4 text-xl sm:text-2xl font-black uppercase leading-tight text-background">
                                    "Growth is engineered. It is the result of deep psychology, rigorous systems, and continuous experimentation."
                                </blockquote>
                            </div>
                        </div>

                        {/* Right - Meet Tony & The Team */}
                        <div className="lg:col-span-5 bg-background text-foreground flex flex-col">
                            
                            {/* Meet Tony */}
                            <div className="p-10 md:p-14 border-b-2 border-foreground flex-grow">
                                <span className="text-xs font-black uppercase tracking-widest text-foreground block mb-6 border-l-2 border-foreground pl-3">The Founder</span>
                                
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                                    <div className="w-24 h-24 rounded-full border-2 border-foreground overflow-hidden shrink-0 group">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img 
                                            src="/images/tony-joseph.jpg" 
                                            alt="Tony Joseph" 
                                            width={200}
                                            height={200}
                                            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-3xl font-black uppercase leading-none mb-1">Tony Joseph</h3>
                                        <p className="text-sm font-black uppercase tracking-widest opacity-50">Chief Architect</p>
                                    </div>
                                </div>
                                
                                <p className="font-bold text-sm leading-snug opacity-80 mb-8">
                                    Obsessed with human behavior and systems engineering. Tony leads the strategic direction for all partner brands, ensuring every design and campaign is mathematically tied to growth.
                                </p>
                            </div>

                            {/* The Team */}
                            <div className="p-10 md:p-14 bg-accent-yellow text-black border-t-2 border-black">
                                <span className="text-xs font-black uppercase tracking-widest text-black block mb-6 border-l-2 border-black pl-3">The Core Team</span>
                                
                                <h3 className="font-heading text-2xl font-black uppercase leading-none mb-4">A Collective of Specialists</h3>
                                <p className="font-bold text-sm leading-snug opacity-80 mb-6">
                                    We don't hire generalists. Our studio is comprised of senior performance marketers, spatial designers, AI engineers, and behavioral copywriters who only work on projects they believe in.
                                </p>
                                
                                <p className="font-bold text-sm leading-snug opacity-80 mb-8 border-l-2 border-black pl-3 italic">
                                    The same team behind FlexPilot applies product thinking, design systems and engineering discipline to every client engagement.
                                </p>

                                <Link
                                    href="/about"
                                    className="inline-flex items-center gap-2 border-2 border-black text-black font-black text-xs uppercase tracking-widest px-5 py-3 hover:bg-black hover:text-accent-yellow transition-none"
                                >
                                    Read The Full Story →
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
