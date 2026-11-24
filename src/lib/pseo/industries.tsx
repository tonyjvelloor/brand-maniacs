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
  },
  "b2b-services": {
    name: "B2B Services & Consulting",
    tagline: "High-Ticket Lead Generation That Closes",
    description: "Selling B2B services requires deep trust and long sales cycles. We build Account-Based Marketing (ABM) engines, LinkedIn automation, and thought-leadership funnels to capture decision-makers."
  },
  "manufacturing": {
    name: "Manufacturing & Industrial",
    tagline: "Modernize Your Acquisition and Go Global",
    description: "Industrial buyers are searching online before they ever request a quote. We optimize your search visibility, build high-converting spec-sheet funnels, and generate qualified RFQs globally."
  },
  "healthcare": {
    name: "Healthcare & Clinics",
    tagline: "Turn Search Demand Into Booked Patients",
    description: "Patients search for specialists when they are in pain. We build local SEO moats, direct-response Google Ads campaigns, and seamless booking funnels that fill your waiting room."
  },
  "home-services": {
    name: "Home Services & Contractors",
    tagline: "Dominate Your Local Market Territory",
    description: "Stop fighting over shared leads on third-party platforms. We build proprietary local lead generation systems using Local SEO, Google Local Services Ads, and automated follow-up sequences."
  }
};

type IndustrySlug = keyof typeof INDUSTRIES;

export function generateStaticParams() {
  return Object.keys(INDUSTRIES).map((industry) => ({
    industry,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ industry: string }> }): Promise<Metadata> {
  const { industry } = await params;
  const industryData = INDUSTRIES[industry as IndustrySlug];
  
  if (!industryData) {
    return { title: "Specialized Marketing Agency | The Brand Maniacs" };
  }

  return {
    title: `Growth Marketing Agency for ${industryData.name}`,
    description: `Looking for a specialized marketing agency for ${industryData.name}? ${industryData.description}`,
    alternates: {
      canonical: `/marketing-agency-for-${industry}`,
    },
  };
}

export default async function IndustryDynamicPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry } = await params;
  const industryData = INDUSTRIES[industry as IndustrySlug];

  // Fallback if somehow accessed directly with invalid slug
  if (!industryData) {
    return null;
  }

  const faqs = [
    {
      q: `Why choose a specialized growth studio for ${industryData.name} over a generalist agency?`,
      a: `Generalist agencies run the same templated social media playbooks across every client. In ${industryData.name}, buyer psychology, sales cycle length, and unit economics require tailored conversion infrastructure, high-intent search capture, and closed-loop attribution.`
    },
    {
      q: `What channels drive the highest ROI for ${industryData.name}?`,
      a: `We combine high-intent Google Search and AEO/SEO capture with conversion-engineered Next.js landing pages, behavioral paid social retargeting, and automated CRM nurture workflows to lower Customer Acquisition Cost (CAC).`
    },
    {
      q: `How do you measure marketing success for ${industryData.name} clients?`,
      a: `We do not report on vanity impressions or likes. We track qualified pipeline velocity, Cost Per Acquisition (CPA), and net revenue attribution directly inside your CRM.`
    }
  ];

  const industrySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://www.thebrandmaniacs.online/marketing-agency-for-${industry}#service`,
        "name": `Growth Marketing System for ${industryData.name}`,
        "provider": {
          "@id": "https://www.thebrandmaniacs.online/#organization"
        },
        "serviceType": `${industryData.name} Marketing Agency`,
        "description": industryData.description,
        "areaServed": ["India", "United States", "United Kingdom", "United Arab Emirates", "Global"]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.thebrandmaniacs.online/marketing-agency-for-${industry}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.thebrandmaniacs.online"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": `Marketing Agency for ${industryData.name}`,
            "item": `https://www.thebrandmaniacs.online/marketing-agency-for-${industry}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `https://www.thebrandmaniacs.online/marketing-agency-for-${industry}#faq`,
        "mainEntity": faqs.map((item) => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-accent-yellow selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industrySchema) }}
      />
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

        {/* Industry FAQ Accordion */}
        <section className="py-24 border-b-2 border-foreground bg-[#F5F5F5] text-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-tighter mb-12 text-center">
              Frequently Asked <span className="text-accent-red">Questions</span>
            </h3>
            <div className="space-y-4">
              {faqs.map((item, idx) => (
                <details key={idx} className="group border-4 border-black p-6 bg-white shadow-[6px_6px_0_0_#000] cursor-pointer">
                  <summary className="flex justify-between items-center font-heading font-black text-lg md:text-xl uppercase tracking-tight list-none">
                    <span>{item.q}</span>
                    <span className="text-2xl transition-transform group-open:rotate-45 font-mono">+</span>
                  </summary>
                  <p className="mt-4 font-bold opacity-80 text-base leading-relaxed border-t-2 border-black/10 pt-4">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
    </div>
  );
}
