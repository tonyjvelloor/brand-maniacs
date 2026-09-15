import { Metadata } from "next";
import { ResultsShowcase } from "@/components/sections/ResultsShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { OurSystem } from "@/components/sections/OurSystem";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Brand Foundation & Positioning Strategy | The Brand Maniacs",
    description: "We engineer brand positioning rooted in behavioral science. We build trust systems that compress sales cycles and make price irrelevant.",
    alternates: {
        canonical: "/brand-foundation",
    },
};

export default function BrandFoundationPage() {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-accent-yellow selection:text-black">
<main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b-2 border-foreground">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-5xl">
                            <Link href="/growth-systems" className="inline-flex items-center gap-2 border-2 border-foreground font-black text-xs md:text-sm uppercase tracking-widest px-3 py-1 mb-6 bg-accent-blue text-white hover:opacity-80 transition-opacity">
                                ← CAPABILITY 01 / 04
                            </Link>
                            
                            <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.9] text-foreground mb-8">
                                Brand <br />
                                <span className="text-accent-blue">Foundation.</span>
                            </h1>
                            
                            <div className="max-w-2xl">
                                <p className="text-lg md:text-xl font-bold text-foreground opacity-80 leading-relaxed mb-8">
                                    Differentiation is a conversion problem in disguise. We don't just design pretty logos; we engineer trust systems rooted in behavioral psychology that compress sales cycles and make price irrelevant.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Pillars */}
                <section className="py-24 border-b-2 border-foreground">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-16">
                            What we engineer:
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="border-t-4 border-accent-blue pt-6">
                                <h3 className="font-heading font-black text-2xl uppercase tracking-tighter mb-4">Positioning Strategy</h3>
                                <p className="font-bold opacity-80 leading-relaxed">Finding the exact wedge in the market where you hold pricing power. We analyze competitor weaknesses and customer psychology to position you as a category of one.</p>
                            </div>
                            <div className="border-t-4 border-accent-blue pt-6">
                                <h3 className="font-heading font-black text-2xl uppercase tracking-tighter mb-4">Identity & Visual Language</h3>
                                <p className="font-bold opacity-80 leading-relaxed">A premium visual system designed for scale. From typography and color psychology to art direction guidelines that ensure absolute consistency across every touchpoint.</p>
                            </div>
                            <div className="border-t-4 border-accent-blue pt-6">
                                <h3 className="font-heading font-black text-2xl uppercase tracking-tighter mb-4">Messaging Architecture</h3>
                                <p className="font-bold opacity-80 leading-relaxed">Mapping exactly what to say to different segments at different stages of awareness. We build message hierarchies that turn passive readers into high-intent buyers.</p>
                            </div>
                            <div className="border-t-4 border-accent-blue pt-6">
                                <h3 className="font-heading font-black text-2xl uppercase tracking-tighter mb-4">Brand Guidelines</h3>
                                <p className="font-bold opacity-80 leading-relaxed">Dynamic, executable playbooks for your team and external partners. Never launch another campaign that feels disjointed from your core narrative.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <ResultsShowcase />
                
                {/* Next Capability Link */}
                <section className="py-12 border-b-2 border-foreground bg-accent-red text-white">
                    <div className="container mx-auto px-4 text-center">
                        <Link href="/conversion-engine" className="inline-flex items-center gap-4 font-heading font-black text-2xl md:text-4xl uppercase tracking-tighter hover:opacity-70 transition-opacity">
                            Next: Conversion Engine <MoveRight className="w-8 h-8 md:w-10 md:h-10" />
                        </Link>
                    </div>
                </section>

                <FinalCTA />
            </main>
</div>
    );
}
