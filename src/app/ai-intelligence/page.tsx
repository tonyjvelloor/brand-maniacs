import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ResultsShowcase } from "@/components/sections/ResultsShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "AI Marketing Intelligence & Automation | The Brand Maniacs",
    description: "We use AI to collapse production timelines and scale output. Programmatic SEO, AI creative generation, and growth workflow automation.",
    alternates: {
        canonical: "/ai-intelligence",
    },
};

export default function AiIntelligencePage() {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-accent-yellow selection:text-black">
            <Navbar />
            
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b-2 border-foreground">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-5xl">
                            <Link href="/growth-engine" className="inline-flex items-center gap-2 border-2 border-foreground font-black text-xs md:text-sm uppercase tracking-widest px-3 py-1 mb-6 bg-foreground text-background hover:opacity-80 transition-opacity">
                                ← CAPABILITY 04 / 04
                            </Link>
                            
                            <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.9] text-foreground mb-8">
                                AI <br />
                                <span className="text-foreground bg-accent-yellow px-4 relative inline-block border-4 border-foreground transform -rotate-2">
                                    Intelligence.
                                </span>
                            </h1>
                            
                            <div className="max-w-2xl">
                                <p className="text-lg md:text-xl font-bold text-foreground opacity-80 leading-relaxed mb-8">
                                    The competitive advantage of the next decade goes to those who can execute fastest. We deploy proprietary AI workflows to collapse production costs by 90% while scaling creative and content output 10x.
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
                            <div className="border-t-4 border-foreground pt-6">
                                <h3 className="font-heading font-black text-2xl uppercase tracking-tighter mb-4">AI Creative Production</h3>
                                <p className="font-bold opacity-80 leading-relaxed">Stop paying ₹50,000+ for standard product shoots. We ingest flat product assets and generate infinite, hyper-realistic ad variations in radically different environments at a fraction of the cost.</p>
                            </div>
                            <div className="border-t-4 border-foreground pt-6">
                                <h3 className="font-heading font-black text-2xl uppercase tracking-tighter mb-4">Programmatic SEO (pSEO)</h3>
                                <p className="font-bold opacity-80 leading-relaxed">Scale search dominance instantly. We build data-driven, template-based architectures that automatically generate thousands of highly specific, localized landing pages designed to capture long-tail search intent.</p>
                            </div>
                            <div className="border-t-4 border-foreground pt-6">
                                <h3 className="font-heading font-black text-2xl uppercase tracking-tighter mb-4">Growth Workflow Automation</h3>
                                <p className="font-bold opacity-80 leading-relaxed">Connecting tools through Zapier, Make, and custom APIs. We eliminate manual data entry, bridging your CRM, ad platforms, and analytics into a single, seamless, self-updating system.</p>
                            </div>
                            <div className="border-t-4 border-foreground pt-6">
                                <h3 className="font-heading font-black text-2xl uppercase tracking-tighter mb-4">LLM Optimization (GEO)</h3>
                                <p className="font-bold opacity-80 leading-relaxed">Traditional search is shifting to Generative Engine Optimization (GEO). We structure your site's data and content architecture so tools like ChatGPT, Gemini, and Perplexity actually recommend your brand.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <ResultsShowcase />
                
                {/* Back to Start Link */}
                <section className="py-12 border-b-2 border-foreground bg-accent-blue text-white">
                    <div className="container mx-auto px-4 text-center">
                        <Link href="/growth-systems" className="inline-flex items-center gap-4 font-heading font-black text-2xl md:text-4xl uppercase tracking-tighter hover:opacity-70 transition-opacity">
                            <ArrowLeft className="w-8 h-8 md:w-10 md:h-10" /> Back to Full Growth System
                        </Link>
                    </div>
                </section>

                <FinalCTA />
            </main>

            <Footer />
        </div>
    );
}
