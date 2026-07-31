"use client";

import { FadeUp } from "@/components/ui/FadeUp";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function ProjectEstimatorTeaser() {
    return (
        <section className="py-24 bg-foreground text-background border-b-2 border-foreground relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-black skew-x-12 translate-x-32 hidden md:block opacity-20 pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    
                    <FadeUp>
                        <span className="inline-block border-2 border-background font-black text-xs uppercase tracking-widest px-3 py-1 mb-8 bg-background text-foreground">
                            Start Your Project
                        </span>
                        
                        <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
                            What would your <br />
                            <span className="text-accent-red">growth project</span> look like?
                        </h2>
                        
                        <p className="text-lg font-bold opacity-80 leading-snug mb-10 max-w-2xl mx-auto">
                            Every brand is different. Use our interactive estimator to map out the exact infrastructure you need and get a custom roadmap for your growth.
                        </p>
                        
                        <Button size="lg" href="/start" className="bg-accent-yellow text-black border-background hover:bg-background hover:text-foreground">
                            Build My Roadmap
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </FadeUp>
                    
                </div>
            </div>
        </section>
    );
}
