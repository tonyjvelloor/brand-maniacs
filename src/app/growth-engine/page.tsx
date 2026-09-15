import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ResultsShowcase } from "@/components/sections/ResultsShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Performance Marketing & Growth Engine | The Brand Maniacs",
    description: "We deploy capital aggressively but mathematically. Scalable Google Ads, Meta Ads, and SEO systems that acquire customers profitably.",
    alternates: {
        canonical: "/growth-engine",
    },
};

export default function GrowthEnginePage() {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-accent-yellow selection:text-black">
            <Header />
            
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b-2 border-foreground">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-5xl">
                            <Link href="/conversion-engine" className="inline-flex items-center gap-2 border-2 border-foreground font-black text-xs md:text-sm uppercase tracking-widest px-3 py-1 mb-6 bg-accent-yellow text-black hover:opacity-80 transition-opacity">
                                ← CAPABILITY 03 / 04
                            </Link>
                            
                            <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.9] text-foreground mb-8">
                                Growth <br />
                                <span className="text-accent-yellow">Engine.</span>
                            </h1>
                            
                            <div className="max-w-2xl">
                                <p className="text-lg md:text-xl font-bold text-foreground opacity-80 leading-relaxed mb-8">
                                    Once the foundation and conversion systems are locked in, we pour fuel on the fire. We deploy capital aggressively but mathematically through performance media and search infrastructure.
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
                            <div className="border-t-4 border-accent-yellow pt-6">
                                <h3 className="font-heading font-black text-2xl uppercase tracking-tighter mb-4">Google & Meta Ads</h3>
                                <p className="font-bold opacity-80 leading-relaxed">Full-funnel media buying. We don't just optimize for clicks; we track deep down-funnel metrics (LTV, ROAS) and train ad algorithms to find your most profitable customers.</p>
                            </div>
                            <div className="border-t-4 border-accent-yellow pt-6">
                                <h3 className="font-heading font-black text-2xl uppercase tracking-tighter mb-4">Technical & Content SEO</h3>
                                <p className="font-bold opacity-80 leading-relaxed">Capturing high-intent search demand. We fix technical crawlability issues, map out topical authority clusters, and build content that ranks and converts over the long term.</p>
                            </div>
                            <div className="border-t-4 border-accent-yellow pt-6">
                                <h3 className="font-heading font-black text-2xl uppercase tracking-tighter mb-4">Retention & Email Automations</h3>
                                <p className="font-bold opacity-80 leading-relaxed">Acquisition is expensive. We build Klaviyo/HubSpot automated lifecycle sequences (Welcome, Abandoned Cart, Win-back) to maximize the lifetime value of every acquired user.</p>
                            </div>
                            <div className="border-t-4 border-accent-yellow pt-6">
                                <h3 className="font-heading font-black text-2xl uppercase tracking-tighter mb-4">Analytics & Tracking</h3>
                                <p className="font-bold opacity-80 leading-relaxed">You can't scale what you can't measure. We implement server-side tracking (GTM, GA4, Meta CAPI) to ensure data accuracy in a privacy-first, cookie-less world.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <ResultsShowcase />
                
                {/* Next Capability Link */}
                <section className="py-12 border-b-2 border-foreground bg-foreground text-background">
                    <div className="container mx-auto px-4 text-center">
                        <Link href="/ai-intelligence" className="inline-flex items-center gap-4 font-heading font-black text-2xl md:text-4xl uppercase tracking-tighter hover:opacity-70 transition-opacity">
                            Next: AI Intelligence <MoveRight className="w-8 h-8 md:w-10 md:h-10 text-accent-yellow" />
                        </Link>
                    </div>
                </section>

                <FinalCTA />
            </main>

            <Footer />
        </div>
    );
}
