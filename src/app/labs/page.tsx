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
                                <p className="font-bold text-sm mb-4">Join the AIProdGen Early Access List.</p>
                                
                                <form className="mt-4 flex flex-col gap-3 max-w-sm">
                                    <input type="text" placeholder="Name" className="bg-transparent border-2 border-background/30 p-3 font-bold text-sm outline-none focus:border-accent-yellow placeholder:text-background/50 text-background" />
                                    <input type="email" placeholder="Email" className="bg-transparent border-2 border-background/30 p-3 font-bold text-sm outline-none focus:border-accent-yellow placeholder:text-background/50 text-background" />
                                    <input type="text" placeholder="What product do you sell?" className="bg-transparent border-2 border-background/30 p-3 font-bold text-sm outline-none focus:border-accent-yellow placeholder:text-background/50 text-background" />
                                    <button type="submit" className="bg-accent-yellow text-black font-black text-sm uppercase tracking-widest p-4 border-2 border-transparent hover:border-black transition-colors mt-2">
                                        Join Waitlist
                                    </button>
                                </form>

                                <div className="mt-6">
                                    <span className="inline-flex items-center gap-2 bg-background/10 text-background text-[10px] font-black uppercase tracking-widest px-3 py-1.5 border border-background/20">
                                        <div className="flex -space-x-2 mr-1">
                                            <div className="w-5 h-5 rounded-full bg-accent-blue border border-background"></div>
                                            <div className="w-5 h-5 rounded-full bg-accent-red border border-background"></div>
                                            <div className="w-5 h-5 rounded-full bg-accent-yellow border border-background"></div>
                                        </div>
                                        Join 142 brands on early access
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Visualizer: Horizontal Gallery */}
                        <div className="p-10 md:p-16 flex flex-col justify-center bg-black/20 relative z-10 w-full overflow-hidden">
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-xs font-black uppercase tracking-widest text-background opacity-50">1 Raw Photo → 5 AI Variants</span>
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-accent-red animate-pulse"></div>
                                    <div className="w-2 h-2 rounded-full bg-accent-yellow animate-pulse delay-75"></div>
                                    <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse delay-150"></div>
                                </div>
                            </div>
                            
                            {/* Horizontal scroll container */}
                            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
                                {/* Raw Input */}
                                <div className="shrink-0 w-64 h-80 border-2 border-dashed border-background/40 flex flex-col items-center justify-center snap-start relative group">
                                    <div className="absolute top-2 left-2 bg-background/20 backdrop-blur-sm px-2 py-1 text-[10px] font-black uppercase tracking-widest text-background">Input</div>
                                    <ImageIcon className="w-10 h-10 mb-3 opacity-40 text-background" />
                                    <span className="text-xs font-bold text-background opacity-60">Raw Product Photo</span>
                                </div>
                                
                                {/* Separator */}
                                <div className="shrink-0 flex items-center justify-center w-12">
                                    <ArrowRight className="w-6 h-6 text-accent-yellow" />
                                </div>

                                {/* Output 1 */}
                                <div className="shrink-0 w-64 h-80 border-2 border-background bg-gradient-to-br from-blue-900 to-black flex flex-col items-center justify-center snap-start relative">
                                    <div className="absolute top-2 left-2 bg-accent-yellow px-2 py-1 text-[10px] font-black uppercase tracking-widest text-black">Variant 01</div>
                                    <Sparkles className="w-8 h-8 text-white opacity-80 mb-2" />
                                    <span className="text-xs font-bold text-white uppercase tracking-widest">Ice Block Studio</span>
                                </div>

                                {/* Output 2 */}
                                <div className="shrink-0 w-64 h-80 border-2 border-background bg-gradient-to-br from-pink-900 to-purple-900 flex flex-col items-center justify-center snap-start relative">
                                    <div className="absolute top-2 left-2 bg-accent-yellow px-2 py-1 text-[10px] font-black uppercase tracking-widest text-black">Variant 02</div>
                                    <Sparkles className="w-8 h-8 text-white opacity-80 mb-2" />
                                    <span className="text-xs font-bold text-white uppercase tracking-widest">Neon Streets</span>
                                </div>

                                {/* Output 3 */}
                                <div className="shrink-0 w-64 h-80 border-2 border-background bg-gradient-to-br from-cyan-900 to-blue-800 flex flex-col items-center justify-center snap-start relative">
                                    <div className="absolute top-2 left-2 bg-accent-yellow px-2 py-1 text-[10px] font-black uppercase tracking-widest text-black">Variant 03</div>
                                    <Sparkles className="w-8 h-8 text-white opacity-80 mb-2" />
                                    <span className="text-xs font-bold text-white uppercase tracking-widest">Floating Water</span>
                                </div>

                                {/* Output 4 */}
                                <div className="shrink-0 w-64 h-80 border-2 border-background bg-gradient-to-br from-orange-900 to-red-900 flex flex-col items-center justify-center snap-start relative">
                                    <div className="absolute top-2 left-2 bg-accent-yellow px-2 py-1 text-[10px] font-black uppercase tracking-widest text-black">Variant 04</div>
                                    <Sparkles className="w-8 h-8 text-white opacity-80 mb-2" />
                                    <span className="text-xs font-bold text-white uppercase tracking-widest">Desert Sand</span>
                                </div>

                                {/* Output 5 */}
                                <div className="shrink-0 w-64 h-80 border-2 border-background bg-gradient-to-br from-gray-800 to-black flex flex-col items-center justify-center snap-start relative">
                                    <div className="absolute top-2 left-2 bg-accent-yellow px-2 py-1 text-[10px] font-black uppercase tracking-widest text-black">Variant 05</div>
                                    <Sparkles className="w-8 h-8 text-white opacity-80 mb-2" />
                                    <span className="text-xs font-bold text-white uppercase tracking-widest">Minimalist Dark</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Demo Video Placeholder */}
                    <div className="border-t-2 border-background bg-black/60 aspect-video md:aspect-[21/9] relative group cursor-pointer overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-accent-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Play Button */}
                        <div className="w-24 h-24 bg-accent-yellow rounded-full flex items-center justify-center pl-2 shadow-[0_0_60px_rgba(217,119,6,0.2)] group-hover:scale-110 transition-transform duration-300 relative z-10">
                            <div className="w-0 h-0 border-t-[12px] border-b-[12px] border-l-[20px] border-t-transparent border-b-transparent border-l-black"></div>
                        </div>

                        {/* Video Meta */}
                        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 flex items-center gap-4 z-10">
                            <span className="bg-background text-foreground text-[10px] font-black uppercase tracking-widest px-3 py-1 border border-background">Product Demo</span>
                            <span className="text-sm font-bold text-background opacity-80">Watch AIProdGen Workflow (02:45)</span>
                        </div>

                        {/* Faux progress bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-background/20">
                            <div className="h-full w-1/3 bg-accent-yellow"></div>
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
