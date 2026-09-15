import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProblemAgnostic } from "@/components/sections/ProblemAgnostic";
import { Solutions } from "@/components/sections/Solutions";
import { ResultsShowcase } from "@/components/sections/ResultsShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BuildingBlocks } from "@/components/sections/BuildingBlocks";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "D2C E-Commerce Growth Marketing Agency | The Brand Maniacs",
    description: "Scale your D2C brand with our engineered growth systems. We lower CAC, increase ROAS, and build high-converting landing pages for fashion, beauty, and CPG brands.",
    alternates: {
        canonical: "/industries/d2c-ecommerce",
    },
};

export default function D2CIndustryPage() {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-accent-yellow selection:text-black">
            <Header />
            
            <main>
                {/* Industry Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b-2 border-foreground">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-5xl">
                            <span className="inline-block border-2 border-foreground font-black text-xs md:text-sm uppercase tracking-widest px-3 py-1 mb-6 bg-accent-red text-white">
                                // D2C & E-COMMERCE GROWTH
                            </span>
                            
                            <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.9] text-foreground mb-8">
                                Scale <br />
                                <span className="text-accent-red">D2C.</span> <br />
                                Profitably.
                            </h1>
                            
                            <div className="max-w-2xl mb-10">
                                <p className="text-lg md:text-xl font-bold text-foreground opacity-80 leading-relaxed">
                                    CAC is rising. IOS updates killed easy targeting. Competing on discounts destroys margins. We build growth systems for D2C brands that rely on behavioral science, AI creative velocity, and conversion engineering—not just throwing more money at Meta.
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <Link 
                                    href="/work/d2c-fashion-brand" 
                                    className="inline-flex justify-center items-center gap-2 bg-foreground text-background border-2 border-foreground font-black text-sm uppercase tracking-widest px-8 py-4 hover:opacity-80 transition-opacity"
                                >
                                    Read D2C Case Study <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <ProblemAgnostic />
                <Solutions />
                <ResultsShowcase />
                <BuildingBlocks />
                <FinalCTA />
            </main>

            <Footer />
        </div>
    );
}
