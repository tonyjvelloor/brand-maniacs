import { Metadata } from "next";
import { TheBrokenModel } from "@/components/sections/TheBrokenModel";
import { Solutions } from "@/components/sections/Solutions";
import { ResultsShowcase } from "@/components/sections/ResultsShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { OurSystem } from "@/components/sections/OurSystem";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TARGET_CITIES = [
  "mumbai",
  "bangalore",
  "delhi",
  "hyderabad",
  "chennai",
  "ahmedabad",
  "gurgaon",
  "noida"
];

function formatCityName(slug: string): string {
  if (!slug) return "";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function generateStaticParams() {
  return TARGET_CITIES.map((city) => ({
    city,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const formattedCity = formatCityName(city);
  
  return {
    title: `Digital Marketing Agency in ${formattedCity} | The Brand Maniacs`,
    description: `Looking for a top digital marketing agency in ${formattedCity}? We build AI-powered growth systems, scale revenue, and acquire high-intent customers for ambitious brands.`,
    alternates: {
      canonical: `/digital-marketing-agency-in-${city}`,
    },
  };
}

export default async function CityDynamicPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const formattedCity = formatCityName(city);

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-accent-yellow selection:text-black">
      <main>
        {/* Dynamic Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b-2 border-foreground">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-blue rounded-full blur-[120px] opacity-10 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl">
              <span className="inline-block border-2 border-foreground font-black text-xs md:text-sm uppercase tracking-widest px-3 py-1 mb-6 bg-accent-yellow text-black shadow-[2px_2px_0_0_#000]">
                // SCALING BRANDS IN {formattedCity.toUpperCase()}
              </span>
              
              <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.9] text-foreground mb-8">
                {formattedCity}'s <br />
                <span className="text-accent-red">Growth</span> <br />
                Studio.
              </h1>
              
              <div className="max-w-3xl mb-10">
                <p className="text-lg md:text-xl font-bold text-foreground opacity-80 leading-relaxed">
                  You don't need another traditional digital marketing agency in {formattedCity} that promises "more traffic." You need a growth system that actually prints revenue. We engineer brand, conversion, and acquisition infrastructure for ambitious companies.
                </p>
              </div>

              <div className="flex gap-4">
                <Link 
                  href="/book" 
                  className="inline-flex justify-center items-center gap-2 bg-foreground text-background border-2 border-foreground font-black text-sm uppercase tracking-widest px-8 py-4 hover:opacity-80 transition-opacity"
                >
                  Book A Strategy Call <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Global Components */}
        <TheBrokenModel />
        <Solutions />
        <ResultsShowcase />
        <OurSystem />
        <FinalCTA />
      </main>
    </div>
  );
}
