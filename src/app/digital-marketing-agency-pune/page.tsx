import { Metadata } from "next";
import { TheBrokenModel } from "@/components/sections/TheBrokenModel";
import { Solutions } from "@/components/sections/Solutions";
import { ResultsShowcase } from "@/components/sections/ResultsShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { OurSystem } from "@/components/sections/OurSystem";
import Link from "next/link";

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
                <TheBrokenModel />
                <Solutions />
                <ResultsShowcase />
                <OurSystem />

                {/* Locations (PROGRAMMATIC SEO INTERNAL LINKING) */}
                <section className="py-12 bg-foreground text-background">
                  <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                      <h3 className="font-black text-sm uppercase tracking-widest text-background/50 mb-6 border-b-2 border-background/20 pb-4">
                        Global Reach: Find a Growth Agency Near You
                      </h3>
                      <div className="flex flex-wrap gap-x-6 gap-y-3">
                        {[
                          { name: "Mumbai", slug: "mumbai" },
                          { name: "Bangalore", slug: "bangalore" },
                          { name: "Delhi", slug: "delhi" },
                          { name: "Hyderabad", slug: "hyderabad" },
                          { name: "Chennai", slug: "chennai" },
                          { name: "Ahmedabad", slug: "ahmedabad" },
                          { name: "Gurgaon", slug: "gurgaon" },
                          { name: "Noida", slug: "noida" }
                        ].map((city) => (
                          <Link 
                            key={city.slug} 
                            href={`/digital-marketing-agency-in-${city.slug}`}
                            className="text-sm font-bold text-background/70 hover:text-accent-red transition-colors"
                          >
                            Digital Marketing Agency in {city.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <FinalCTA />
            </main>
</div>
    );
}
