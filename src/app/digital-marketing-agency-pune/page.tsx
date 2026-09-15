import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProblemAgnostic } from "@/components/sections/ProblemAgnostic";
import { Solutions } from "@/components/sections/Solutions";
import { ResultsShowcase } from "@/components/sections/ResultsShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BuildingBlocks } from "@/components/sections/BuildingBlocks";

export const metadata: Metadata = {
    title: "Digital Marketing Agency in Pune | The Brand Maniacs",
    description: "Looking for a digital marketing agency in Pune? We build AI-powered growth systems, not just run ads. Discover why top brands in Pune partner with us.",
    alternates: {
        canonical: "/digital-marketing-agency-pune",
    },
};

export default function PuneLocationPage() {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-accent-yellow selection:text-black">
            <Header />
            
            <main>
                {/* Localized Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b-2 border-foreground">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-5xl">
                            <span className="inline-block border-2 border-foreground font-black text-xs md:text-sm uppercase tracking-widest px-3 py-1 mb-6 bg-accent-yellow text-black">
                                // PUNE HQ · GLOBAL REACH
                            </span>
                            
                            <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.9] text-foreground mb-8">
                                Pune's <br />
                                <span className="text-accent-red">Growth</span> <br />
                                Studio.
                            </h1>
                            
                            <div className="max-w-2xl">
                                <p className="text-lg md:text-xl font-bold text-foreground opacity-80 leading-relaxed">
                                    You don't need another traditional digital marketing agency in Pune that promises "more traffic." You need a growth system that actually prints revenue. We engineer brand, conversion, and acquisition infrastructure for ambitious companies.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reuse core components for the rest of the funnel */}
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
