import { Metadata } from "next";
import { TheBrokenModel } from "@/components/sections/TheBrokenModel";
import { Solutions } from "@/components/sections/Solutions";
import { ResultsShowcase } from "@/components/sections/ResultsShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const LEAD_GEN_INDUSTRIES = {
  "b2b-services": {
    name: "B2B Services & Consulting",
    tagline: "High-Ticket Lead Generation That Closes",
    description: "Selling B2B services requires deep trust and long sales cycles. We build Account-Based Marketing (ABM) engines, LinkedIn automation, and thought-leadership funnels to capture decision-makers.",
    metric: "Target C-Level Executives",
    pain: "Tired of generating low-intent ebook downloads that never convert to sales calls?"
  },
  "manufacturing": {
    name: "Manufacturing & Industrial",
    tagline: "Modernize Your Acquisition and Go Global",
    description: "Industrial buyers are searching online before they ever request a quote. We optimize your search visibility, build high-converting spec-sheet funnels, and generate qualified RFQs globally.",
    metric: "Generate Qualified RFQs",
    pain: "Relying purely on trade shows and legacy word-of-mouth for new contracts?"
  },
  "healthcare": {
    name: "Healthcare & Clinics",
    tagline: "Turn Search Demand Into Booked Patients",
    description: "Patients search for specialists when they are in pain. We build local SEO moats, direct-response Google Ads campaigns, and seamless booking funnels that fill your waiting room.",
    metric: "Increase Patient Bookings",
    pain: "Wasting ad budget on clicks that never call or book an appointment?"
  },
  "home-services": {
    name: "Home Services & Contractors",
    tagline: "Dominate Your Local Market Territory",
    description: "Stop fighting over shared leads on third-party platforms. We build proprietary local lead generation systems using Local SEO, Google Local Services Ads, and automated follow-up sequences.",
    metric: "Exclusive Inbound Calls",
    pain: "Paying for shared leads on platforms like JustDial where 5 competitors call the same customer?"
  },
  "real-estate": {
    name: "Real Estate & Developers",
    tagline: "Generate Qualified Site Visits, Not Just Leads",
    description: "We engineer high-converting real estate funnels that pre-qualify buyers, capture intent, and drive actual site visits for your premium properties.",
    metric: "Qualified Site Visits",
    pain: "Your sales team is exhausted from calling thousands of unqualified Facebook leads who don't pick up?"
  },
  "financial-services": {
    name: "Financial Services & Wealth Management",
    tagline: "Acquire High Net Worth Clients Predictably",
    description: "Trust is your currency. We build compliance-friendly lead generation funnels that establish authority and book consultations with high-net-worth individuals.",
    metric: "Booked Consultations",
    pain: "Struggling to build digital trust and attract clients outside your immediate referral network?"
  }
};

type LeadGenSlug = keyof typeof LEAD_GEN_INDUSTRIES;

export function generateStaticParams() {
  return Object.keys(LEAD_GEN_INDUSTRIES).map((industry) => ({
    industry,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }): Promise<Metadata> {
  const { industry } = await params;
  const industryData = LEAD_GEN_INDUSTRIES[industry as LeadGenSlug];
  
  if (!industryData) {
    return { title: "Specialized Lead Generation Agency | The Brand Maniacs" };
  }

  return {
    title: `B2B Lead Generation Agency for ${industryData.name} | The Brand Maniacs`,
    description: `Looking for a specialized lead generation agency for ${industryData.name}? ${industryData.description}`,
    alternates: {
      canonical: `/lead-generation-agency-for-${industry}`,
    },
  };
}

export default async function LeadGenerationDynamicPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  const industryData = LEAD_GEN_INDUSTRIES[industry as LeadGenSlug];

  if (!industryData) {
    return null;
  }

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-accent-yellow selection:text-black">
      <main>
        {/* Dynamic Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b-2 border-foreground">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent-blue/10 via-background to-background pointer-events-none"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl">
              <span className="inline-block border-2 border-foreground font-black text-xs md:text-sm uppercase tracking-widest px-3 py-1 mb-6 bg-accent-yellow text-black shadow-[2px_2px_0_0_#000]">
                // HIGH-INTENT LEAD ACQUISITION
              </span>
              
              <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-[0.9] text-foreground mb-6">
                Lead Generation <br />
                Agency For <br />
                <span className="text-accent-blue">{industryData.name}.</span>
              </h1>
              
              <h2 className="font-heading font-black text-xl md:text-3xl text-foreground mb-8 border-l-4 border-accent-red pl-4">
                {industryData.tagline}
              </h2>

              <div className="max-w-3xl mb-10 space-y-6">
                <p className="text-lg md:text-xl font-bold text-foreground opacity-80 leading-relaxed">
                  {industryData.description}
                </p>
                <div className="bg-foreground/5 border-2 border-foreground/10 p-6 rounded-none">
                  <p className="font-black text-accent-red mb-2 uppercase tracking-wide text-sm">The Problem:</p>
                  <p className="font-bold opacity-80">{industryData.pain}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Link 
                  href="/book" 
                  className="inline-flex justify-center items-center gap-2 bg-foreground text-background border-2 border-foreground font-black text-sm uppercase tracking-widest px-8 py-4 hover:opacity-80 transition-opacity"
                >
                  Build My Lead Gen System <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AEO Friendly Approach Table */}
        <section className="py-24 border-b-2 border-foreground bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-heading font-black text-3xl md:text-5xl uppercase mb-12 text-center">
                Our <span className="text-accent-yellow">Lead Gen</span> Methodology
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-2 border-background/20 p-8 hover:border-accent-yellow transition-colors">
                  <h4 className="font-black text-xl mb-4 text-accent-yellow">1. Search Intent Capture</h4>
                  <p className="opacity-80 font-medium">We do not rely on disruptive interruption marketing. We capture prospects at the exact moment they are searching for {industryData.name} solutions on Google and YouTube.</p>
                </div>
                <div className="border-2 border-background/20 p-8 hover:border-accent-blue transition-colors">
                  <h4 className="font-black text-xl mb-4 text-accent-blue">2. Conversion Architecture</h4>
                  <p className="opacity-80 font-medium">Sending traffic to a generic homepage is burning money. We build dedicated, lightning-fast landing pages optimized for one action: {industryData.metric}.</p>
                </div>
                <div className="border-2 border-background/20 p-8 hover:border-accent-red transition-colors">
                  <h4 className="font-black text-xl mb-4 text-accent-red">3. CRM Closed-Loop Tracking</h4>
                  <p className="opacity-80 font-medium">We integrate directly with your CRM. We optimize our campaigns not for cost-per-click, but for cost-per-qualified-opportunity and actual closed revenue.</p>
                </div>
                <div className="border-2 border-background/20 p-8 hover:border-green-400 transition-colors">
                  <h4 className="font-black text-xl mb-4 text-green-400">4. Lead Nurture Systems</h4>
                  <p className="opacity-80 font-medium">Not every lead is ready to buy on day one. We implement automated WhatsApp and Email nurture sequences to keep your brand top-of-mind until they are ready.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ResultsShowcase />
        <FinalCTA />
      </main>
    </div>
  );
}
