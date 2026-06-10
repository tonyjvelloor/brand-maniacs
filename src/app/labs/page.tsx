import type { Metadata } from "next";
import { CALENDLY_URL } from "@/lib/config";
import { ArrowRight, Sparkles, Image as ImageIcon, Zap, Layers } from "lucide-react";

export const metadata: Metadata = {
    title: "Maniac Labs & AIProdGen — AI Product Photography Tool | The Brand Maniacs",
    description: "AIProdGen generates ecommerce product visuals without expensive photo shoots. One image in. 50 ad-ready variants out. Built by The Brand Maniacs.",
};

export default function LabsPage() {
    return (
        <div className="min-h-screen bg-foreground pt-28 pb-24 text-background">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">

                {/* Header */}
                <div className="mb-24 text-center max-w-4xl mx-auto">
                    <span className="inline-block border-2 border-background font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 text-background">
                        Our Technology
                    </span>
                    <h1 className="font-heading text-6xl md:text-8xl font-black uppercase tracking-tighter text-background leading-[0.9] mb-8">
                        Maniac<br />
                        <span className="text-accent-yellow">Labs.</span>
                    </h1>
                    <p className="text-lg md:text-xl font-bold text-background opacity-80 leading-snug border-l-4 border-accent-yellow pl-5 max-w-2xl mx-auto text-left">
                        Where we build technology that solves problems we discover while growing brands. We don&apos;t just use tools. We build them.
                    </p>
                </div>

                {/* AIProdGen Section */}
                <div className="border-2 border-background mb-24 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-yellow opacity-10 rounded-full blur-[100px] pointer-events-none group-hover:opacity-20 transition-opacity duration-700"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left Info */}
                        <div className="p-10 md:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-background relative z-10 flex flex-col justify-center">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-accent-yellow text-black font-black text-xs uppercase tracking-widest px-3 py-1 flex items-center gap-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                    <Sparkles className="w-3 h-3" /> Live Product
                                </span>
                            </div>
                            <h2 className="font-heading text-5xl md:text-6xl font-black uppercase text-background leading-[0.9] mb-6">
                                AIProd<span className="text-accent-yellow">Gen</span>
                            </h2>
                            
                            <p className="font-bold text-xl mb-8 leading-snug">
                                One product photo.<br />
                                Infinite campaign possibilities.
                            </p>

                            <div className="space-y-6 mb-10">
                                {[
                                    { icon: <ImageIcon className="w-5 h-5 text-accent-yellow" />, text: "Generate ecommerce visuals without expensive photoshoots." },
                                    { icon: <Zap className="w-5 h-5 text-accent-red" />, text: "Scale from 1 asset to 50 ad variants in minutes." },
                                    { icon: <Layers className="w-5 h-5 text-accent-blue" />, text: "Keep brand consistency while testing radical environments." }
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="mt-1 border-2 border-background p-1.5 shrink-0 bg-background/5">
                                            {feature.icon}
                                        </div>
                                        <p className="font-bold text-sm text-background opacity-80 leading-snug">
                                            {feature.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8 border-t-2 border-background/20">
                                <p className="text-xs font-black uppercase tracking-widest opacity-50 mb-3">Early Access</p>
                                <p className="font-bold text-sm mb-4">Join the AIProdGen Early Access List → Get first access when we open to the public.</p>
                                <a href="mailto:tony@thebrandmaniacs.online?subject=AIProdGen%20Waitlist" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-accent-yellow hover:text-white transition-colors">
                                    Join Waitlist <ArrowRight className="w-3 h-3" />
                                </a>
                            </div>
                        </div>

                        {/* Right Visualizer */}
                        <div className="p-10 md:p-16 flex flex-col items-center justify-center bg-black/20 relative z-10">
                            
                            <div className="w-full max-w-sm">
                                {/* Simulated App UI */}
                                <div className="border-2 border-background bg-foreground rounded-lg overflow-hidden shadow-2xl">
                                    <div className="bg-background/10 px-4 py-2 flex items-center gap-2 border-b-2 border-background">
                                        <div className="w-2 h-2 rounded-full bg-accent-red"></div>
                                        <div className="w-2 h-2 rounded-full bg-accent-yellow"></div>
                                        <div className="w-2 h-2 rounded-full bg-accent-blue"></div>
                                        <span className="ml-2 text-[10px] font-black uppercase tracking-widest text-background opacity-50">aiprodgen.brandmaniacs.com</span>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-end mb-4">
                                            <div className="w-24 h-24 border-2 border-dashed border-background/50 flex flex-col items-center justify-center opacity-50">
                                                <ImageIcon className="w-6 h-6 mb-1" />
                                                <span className="text-[10px] uppercase font-bold text-center px-2">Input Image</span>
                                            </div>
                                            <div className="flex flex-col items-center justify-center px-4">
                                                <Sparkles className="w-5 h-5 text-accent-yellow mb-1" />
                                                <div className="h-0.5 w-12 bg-accent-yellow"></div>
                                            </div>
                                            <div className="w-32 h-32 border-2 border-accent-yellow bg-accent-yellow/10 flex items-center justify-center relative overflow-hidden group-hover:bg-accent-yellow/20 transition-colors duration-500">
                                                <div className="text-[10px] font-black uppercase text-accent-yellow absolute top-2 left-2">Output</div>
                                                <div className="w-20 h-20 bg-background/20 flex items-center justify-center animate-pulse">
                                                    <span className="text-xs font-bold text-background opacity-50 text-center">Studio<br/>Quality</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="h-2 w-full bg-background/20 rounded-full overflow-hidden mt-6">
                                            <div className="h-full bg-accent-yellow w-3/4 animate-[pulse_2s_ease-in-out_infinite]"></div>
                                        </div>
                                        <p className="text-[10px] font-bold text-center mt-2 opacity-50 uppercase tracking-widest">Generating 50 environments...</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Coming Soon */}
                <div className="text-center py-20 border-y-2 border-background/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                        <span className="font-heading text-[15vw] font-black uppercase whitespace-nowrap">EXPERIMENTS</span>
                    </div>
                    <div className="relative z-10">
                        <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                            Next: AI AdCopy<br />Engine
                        </h2>
                        <p className="font-bold opacity-60 mb-6">Brief your product, get 50 ad copy variants in 3 minutes. Coming Q3 2026.</p>
                        <a href="mailto:tony@thebrandmaniacs.online?subject=AI%20AdCopy%20Waitlist" className="inline-flex justify-center items-center gap-2 border-2 border-background text-background font-black text-xs uppercase tracking-widest px-6 py-3 hover:bg-background hover:text-foreground transition-none">
                            Join Waitlist
                        </a>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-24 bg-accent-yellow text-black border-2 border-black p-10 md:p-16 text-center max-w-4xl mx-auto">
                    <h3 className="font-heading text-3xl md:text-4xl font-black uppercase leading-tight mb-6">
                        Want access to our technology?
                    </h3>
                    <p className="font-bold opacity-90 text-base mb-10 max-w-xl mx-auto">
                        We deploy AIProdGen and our proprietary systems exclusively for our studio clients to give them an unfair advantage.
                    </p>
                    <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center items-center gap-2 bg-black text-white border-2 border-black font-black text-sm uppercase tracking-widest px-8 py-4 hover:bg-transparent hover:text-black transition-none"
                    >
                        Apply to Work With Us <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

            </div>
        </div>
    );
}
