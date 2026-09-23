import { Metadata } from "next";
import { TheBrokenModel } from "@/components/sections/TheBrokenModel";
import { Solutions } from "@/components/sections/Solutions";
import { ResultsShowcase } from "@/components/sections/ResultsShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { OurSystem } from "@/components/sections/OurSystem";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// The industry mapping with their specific pain points to make the pSEO high-quality
const INDUSTRIES = {
  "b2b-saas": {
    name: "B2B SaaS",
    tagline: "Stop Churning Ad Budget on Low-Intent Clicks",
    description: "In B2B SaaS, lead quality is everything. We don't just run ads; we build full-funnel growth engines that capture high-intent buyers, optimize your free trial conversion rates, and lower your CAC."
  },
  "d2c-ecommerce": {
    name: "D2C E-commerce",
    tagline: "Scale Your ROAS, Not Just Your Spend",
    description: "D2C brands live and die by their Customer Acquisition Cost. We implement data-driven Meta and Google Ads systems, fix your conversion tracking, and optimize your store for maximum AOV and repeat purchases."
  },
  "real-estate": {
    name: "Real Estate",
    tagline: "Generate Qualified Site Visits, Not Just Leads",
    description: "Tired of calling unqualified leads who don't pick up? We engineer high-converting real estate funnels that pre-qualify buyers, capture intent, and drive actual site visits for your premium properties."
  },
  "fintech": {
    name: "Fintech",
    tagline: "Build Trust and Lower Your Cost Per Acquisition",
    description: "Marketing financial products requires overcoming immense consumer skepticism. We build digital authority systems and compliant performance marketing engines that acquire active, funded users at scale."
  },
  "edtech": {
    name: "EdTech",
    tagline: "Fill Your Batches with Predictable Precision",
    description: "Stop relying on chaotic, last-minute webinar pushes. We build automated student acquisition funnels that educate, nurture, and convert high-quality enrollments year-round."
  }
};

type IndustrySlug = keyof typeof INDUSTRIES;

export function generateStaticParams() {
  return Object.keys(INDUSTRIES).map((industry) => ({
    industry,
  }));
}

export async function generateMetadata({ params }: { params: { industry: string } }): Promise<Metadata> {
  const industryData = INDUSTRIES[params.industry as IndustrySlug];
  
  if (!industryData) {
    return { title: "Specialized Marketing Agency | The Brand Maniacs" };
  }

  return {
    title: `Best Marketing Agency for ${industryData.name} | The Brand Maniacs`,
    description: `Looking for a specialized marketing agency for ${industryData.name}? ${industryData.description}`,
    alternates: {
      canonical: `/marketing-agency-for-${params.industry}`,
    },
  };
}

export default function IndustryDynamicPage({ params }: { params: { industry: string } }) {
  const industryData = INDUSTRIES[params.industry as IndustrySlug];

  // Fallback if somehow accessed directly with invalid slug
  if (!industryData) {
    return null;
  }

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-accent-yellow selection:text-black">
      <main>
        {/* Dynamic Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b-2 border-foreground">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-blue rounded-full blur-[120px] opacity-10 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl">
              <span className="inline-block border-2 border-foreground font-black text-xs md:text-sm uppercase tracking-widest px-3 py-1 mb-6 bg-accent-yellow text-black shadow-[2px_2px_0_0_#000]">
                // {industryData.name.toUpperCase()} GROWTH PARTNER
              </span>
              
              <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.9] text-foreground mb-6">
                Marketing <br />
                Agency for <br />
                <span className="text-accent-yellow">{industryData.name}.</span>
              </h1>
              
              <h2 className="font-heading font-black text-xl md:text-3xl text-foreground mb-8">
                {industryData.tagline}
              </h2>

              <div className="max-w-3xl mb-10">
                <p className="text-lg md:text-xl font-bold text-foreground opacity-80 leading-relaxed">
                  {industryData.description}
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
