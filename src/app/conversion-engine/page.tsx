import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ResultsShowcase } from "@/components/sections/ResultsShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Conversion Engine & CRO Strategy | The Brand Maniacs",
    description: "Traffic is worthless if it doesn't convert. We engineer high-performance landing pages, UI/UX, and conversion funnels that maximize ROI.",
    alternates: {
        canonical: "/conversion-engine",
    },
};

export default function ConversionEnginePage() {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-accent-yellow selection:text-black">
            <Header />
            
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b-2 border-foreground">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-5xl">
                            <Link href="/brand-foundation" className="inline-flex items-center gap-2 border-2 border-foreground font-black text-xs md:text-sm uppercase tracking-widest px-3 py-1 mb-6 bg-accent-red text-white hover:opacity-80 transition-opacity">
                                ← CAPABILITY 02 / 04
                            </Link>
                            
                            <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.9] text-foreground mb-8">
                                Conversion <br />
                                <span className="text-accent-red">Engine.</span>
                            </h1>
                            
                            <div className="max-w-2xl">
                                <p className="text-lg md:text-xl font-bold text-foreground opacity-80 leading-relaxed mb-8">
                                    Traffic is a commodity. Conversion is a competitive advantage. We engineer digital experiences, landing pages, and UX flows that systematically turn attention into revenue.
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
                            <div className="border-t-4 border-accent-red pt-6">
                                <h3 className="font-heading font-black text-2xl uppercase tracking-tighter mb-4">High-Velocity Landing Pages</h3>
                                <p className="font-bold opacity-80 leading-relaxed">Next.js/React driven landing pages engineered for sub-second load times (LCP &lt; 1.5s). We match specific ad intents to hyper-relevant page experiences.</p>
                            </div>
                            <div className="border-t-4 border-accent-red pt-6">
                                <h3 className="font-heading font-black text-2xl uppercase tracking-tighter mb-4">UI/UX Design</h3>
                                <p className="font-bold opacity-80 leading-relaxed">Frictionless digital product experiences. We remove cognitive load, streamline checkout flows, and design interfaces that guide users naturally toward conversion actions.</p>
                            </div>
                            <div className="border-t-4 border-accent-red pt-6">
                                <h3 className="font-heading font-black text-2xl uppercase tracking-tighter mb-4">A/B Testing & CRO</h3>
                                <p className="font-bold opacity-80 leading-relaxed">Data-driven iteration. We deploy split tests on headlines, offers, and layouts to constantly inch your conversion rate upward, lowering your overall customer acquisition cost.</p>
                            </div>
                            <div className="border-t-4 border-accent-red pt-6">
                                <h3 className="font-heading font-black text-2xl uppercase tracking-tighter mb-4">Behavioral Copywriting</h3>
                                <p className="font-bold opacity-80 leading-relaxed">Words that sell. Our copy is structured around proven behavioral science frameworks like loss aversion, social proof, and cognitive fluency to drive immediate action.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <ResultsShowcase />
                
                {/* Next Capability Link */}
                <section className="py-12 border-b-2 border-foreground bg-accent-yellow text-black">
                    <div className="container mx-auto px-4 text-center">
                        <Link href="/growth-engine" className="inline-flex items-center gap-4 font-heading font-black text-2xl md:text-4xl uppercase tracking-tighter hover:opacity-70 transition-opacity">
                            Next: Growth Engine <MoveRight className="w-8 h-8 md:w-10 md:h-10" />
                        </Link>
                    </div>
                </section>

                <FinalCTA />
            </main>

            <Footer />
        </div>
    );
}
