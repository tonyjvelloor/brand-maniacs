"use client";

import { FadeUp } from "@/components/ui/FadeUp";
import { ArrowRight, Star } from "lucide-react";

export function ReviewBoostTeaser() {
    return (
        <section className="py-24 bg-[#0A0A0A] text-white border-b-2 border-white/10 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-yellow/5 skew-x-12 translate-x-32 hidden md:block pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    
                    <FadeUp>
                        <span className="inline-flex items-center gap-2 border-2 border-accent-yellow font-black text-xs uppercase tracking-widest px-3 py-1 mb-8 bg-accent-yellow text-black shadow-[3px_3px_0_0_#FFF]">
                            <Star className="w-3.5 h-3.5" fill="currentColor" />
                            <span>TBM REVIEWS SOFTWARE</span>
                        </span>
                        
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
                            TURN HAPPY CUSTOMERS INTO <br />
                            <span className="text-accent-yellow underline decoration-accent-red decoration-4 underline-offset-4">5-STAR REVIEWS.</span>
                        </h2>
                        
                        <div className="space-y-4 mb-10 max-w-2xl mx-auto">
                            <p className="text-lg font-bold opacity-80 leading-snug">
                                Automatically collect, manage, and display Google reviews for your business. Capture negative feedback privately before it hits the internet.
                            </p>
                            <p className="text-base font-mono opacity-60">
                                Perfect for clinics, agencies, and local service businesses. 
                            </p>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a 
                                href="https://reviews.thebrandmaniacs.online/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-white text-black border-2 border-black font-heading font-black uppercase text-base sm:text-lg py-4 px-8 tracking-wider shadow-[4px_4px_0_0_#FFE600] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#FFE600] active:translate-y-0 transition-all flex items-center justify-center gap-2"
                            >
                                Start Your Free Trial
                                <ArrowRight className="w-5 h-5 ml-1" />
                            </a>
                        </div>
                    </FadeUp>
                    
                </div>
            </div>
        </section>
    );
}
