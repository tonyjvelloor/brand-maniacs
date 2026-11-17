import { Metadata } from "next";
import { TheBrokenModel } from "@/components/sections/TheBrokenModel";
import { Solutions } from "@/components/sections/Solutions";
import { ResultsShowcase } from "@/components/sections/ResultsShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { OurSystem } from "@/components/sections/OurSystem";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CityMarketData {
  name: string;
  hub: string;
  corridors: string;
  summary: string;
  focusIndustries: string;
}

const CITY_MARKETS: Record<string, CityMarketData> = {
  "mumbai": {
    name: "Mumbai",
    hub: "India's Financial, D2C & Enterprise Capital",
    corridors: "BKC, Lower Parel, Andheri East, Powai, Nariman Point",
    summary: "In Mumbai's hyper-competitive consumer and corporate market, high ad costs punish weak conversion funnels. We engineer sub-second Next.js landing architectures, creative testing velocity, and Server-to-Server (S2S) attribution to scale ROAS.",
    focusIndustries: "D2C lifestyle & beauty brands, fintech platforms, luxury hospitality, and enterprise B2B services."
  },
  "bangalore": {
    name: "Bangalore",
    hub: "Global SaaS, AI & Venture Tech Ecosystem",
    corridors: "HSR Layout, Koramangala, Indiranagar, Whitefield, Electronic City",
    summary: "Bangalore startups don't need traditional agencies selling vanity social media retainers. We partner with founders and growth teams to build product-led acquisition systems, technical SEO/AEO moats, and high-converting demo funnels.",
    focusIndustries: "B2B SaaS startups, AI developer tools, consumer apps, and venture-backed D2C brands."
  },
  "delhi": {
    name: "Delhi",
    hub: "North India's Commercial, Retail & Healthcare Powerhouse",
    corridors: "Connaught Place, Nehru Place, Saket, Okhla Industrial Area",
    summary: "We help established Delhi businesses and fast-scaling consumer brands transition from offline reliance to predictable digital acquisition—combining Google Search capture, high-speed web engineering, and automated WhatsApp pipelines.",
    focusIndustries: "Multi-specialty healthcare clinics, D2C retail brands, wholesale exporters, and luxury hospitality."
  },
  "hyderabad": {
    name: "Hyderabad",
    hub: "Enterprise IT, Pharma & Biotech Growth Corridor",
    corridors: "HITEC City, Gachibowli, Financial District, Banjara Hills, Madhapur",
    summary: "Serving ambitious companies across Cyberabad. We engineer conversion-first websites, technical search authority, and closed-loop lead generation systems that turn global search demand into qualified enterprise pipeline.",
    focusIndustries: "Pharmaceutical & healthcare providers, enterprise SaaS, real estate developers, and EdTech academies."
  },
  "chennai": {
    name: "Chennai",
    hub: "Global B2B SaaS & Industrial Manufacturing Hub",
    corridors: "OMR IT Expressway, Guindy, Ambattur Industrial Estate, Teynampet",
    summary: "From OMR's global SaaS leaders to Ambattur's precision manufacturers, we build digital acquisition infrastructure that captures high-intent international buyers across the US, Europe, and APAC.",
    focusIndustries: "Global B2B SaaS products, automotive & industrial OEMs, healthcare networks, and specialized B2B services."
  },
  "ahmedabad": {
    name: "Ahmedabad",
    hub: "Industrial Manufacturing, Pharma & D2C E-Commerce Hub",
    corridors: "SG Highway, GIFT City, Prahlad Nagar, Sanand GIDC, Naroda",
    summary: "Ahmedabad's entrepreneurial businesses value unit economics and net profitability over agency jargon. We build direct-response acquisition engines and RFQ funnels that deliver measurable ROI.",
    focusIndustries: "Industrial & chemical exporters, D2C consumer goods, financial services in GIFT City, and healthcare clinics."
  },
  "gurgaon": {
    name: "Gurgaon",
    hub: "Corporate Enterprises, High-Velocity D2C & FinTech",
    corridors: "Cyber City, Golf Course Road, Udyog Vihar, Sohna Road",
    summary: "Built for Gurgaon's fast-scaling consumer and enterprise brands. We combine behavioral ad creative testing, edge-rendered conversion pages, and CRM attribution to cut Customer Acquisition Cost (CAC).",
    focusIndustries: "High-growth D2C brands, enterprise B2B consultancies, real estate developers, and fintech scale-ups."
  },
  "noida": {
    name: "Noida",
    hub: "IT Services, Electronics Manufacturing & EdTech Corridor",
    corridors: "Sector 62, Sector 18, Noida-Greater Noida Expressway, Phase 2 Industrial",
    summary: "We engineer full-stack digital growth systems for Noida's technology, education, and manufacturing leaders—turning organic and paid search intent into predictable sales pipeline.",
    focusIndustries: "IT & software agencies, EdTech platforms, electronics manufacturers, and commercial real estate."
  }
};

function formatCityName(slug?: string): string {
  if (!slug) return "India";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function generateStaticParams() {
  return Object.keys(CITY_MARKETS).map((city) => ({
    city,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const resolved = await params;
  const city = resolved?.city || "mumbai";
  const cityData = CITY_MARKETS[city];
  const formattedCity = cityData ? cityData.name : formatCityName(city);
  
  return {
    title: `Digital Marketing Agency in ${formattedCity} — Growth Systems Studio`,
    description: `Looking for a top digital marketing agency in ${formattedCity}? ${cityData ? cityData.summary : "We build AI-powered growth systems, custom Next.js websites, and customer acquisition funnels."}`,
    alternates: {
      canonical: `/digital-marketing-agency-in-${city}`,
    },
  };
}

export default async function CityDynamicPage({ params }: { params: Promise<{ city: string }> }) {
  const resolved = await params;
  const city = resolved?.city || "mumbai";
  const cityData = CITY_MARKETS[city];
  const formattedCity = cityData ? cityData.name : formatCityName(city);

  const cityFaqs = [
    {
      q: `Why partner with The Brand Maniacs over a traditional digital marketing agency in ${formattedCity}?`,
      a: `Traditional agencies in ${formattedCity} sell disconnected deliverables—social media posts, slow WordPress sites, or uncalibrated ad campaigns. We engineer complete Growth Systems: custom sub-second Next.js landing pages, high-velocity creative testing, Server-to-Server (S2S) attribution, and automated WhatsApp/CRM conversion workflows.`
    },
    {
      q: `Which commercial sectors in ${formattedCity} do you work with?`,
      a: `${cityData ? `In ${formattedCity} (${cityData.corridors}), we primarily partner with ${cityData.focusIndustries.toLowerCase()}` : `We partner with high-growth D2C brands, B2B SaaS companies, healthcare clinics, and industrial enterprises in ${formattedCity}.`}`
    },
    {
      q: `How fast can we launch an acquisition system for our ${formattedCity} business?`,
      a: `Our Growth Architecture diagnostic takes 2 weeks, and a full Growth System build (custom Next.js web infrastructure, tracking stack, and acquisition campaigns) launches in 3 to 5 weeks.`
    }
  ];

  const citySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://www.thebrandmaniacs.online/digital-marketing-agency-in-${city}#service`,
        "name": `Growth Marketing & Web Systems in ${formattedCity}`,
        "provider": {
          "@id": "https://www.thebrandmaniacs.online/#organization"
        },
        "serviceType": `Digital Marketing Agency ${formattedCity}`,
        "description": cityData ? cityData.summary : `Full-funnel growth marketing and Next.js web engineering for businesses in ${formattedCity}.`,
        "areaServed": [formattedCity, "India", "Global"]
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.thebrandmaniacs.online/digital-marketing-agency-in-${city}#breadcrumb`,
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
            "name": `Digital Marketing Agency in ${formattedCity}`,
            "item": `https://www.thebrandmaniacs.online/digital-marketing-agency-in-${city}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `https://www.thebrandmaniacs.online/digital-marketing-agency-in-${city}#faq`,
        "mainEntity": cityFaqs.map((item) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />
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
                {formattedCity}&apos;s <br />
                <span className="text-accent-red">Growth</span> <br />
                Studio.
              </h1>
              
              <div className="max-w-3xl mb-10">
                <p className="text-lg md:text-xl font-bold text-foreground opacity-80 leading-relaxed">
                  {cityData ? cityData.summary : `You don't need another traditional digital marketing agency in ${formattedCity} that promises "more traffic." You need a growth system that actually prints revenue.`}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/book" 
                  className="inline-flex justify-center items-center gap-2 bg-foreground text-background border-2 border-foreground font-black text-sm uppercase tracking-widest px-8 py-4 hover:opacity-80 transition-opacity"
                >
                  Book A Strategy Call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/website-development" 
                  className="inline-flex justify-center items-center gap-2 bg-accent-yellow text-black border-2 border-black font-black text-sm uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors shadow-[4px_4px_0_0_#000]"
                >
                  Explore Web Systems
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Localized Market Context */}
        {cityData && (
          <section className="py-16 border-b-2 border-foreground bg-accent-yellow text-black">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="border-4 border-black p-8 bg-white shadow-[8px_8px_0_0_#000]">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b-2 border-black pb-4">
                  <div>
                    <span className="font-mono text-xs font-black uppercase tracking-widest bg-black text-white px-3 py-1">
                      MARKET ECOSYSTEM · {cityData.name.toUpperCase()}
                    </span>
                    <h2 className="font-heading font-black text-2xl md:text-4xl uppercase mt-2">
                      {cityData.hub}
                    </h2>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="text-xs font-black uppercase tracking-widest text-black/60 block">Commercial Corridors</span>
                    <span className="font-bold text-sm text-black">{cityData.corridors}</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-heading font-black text-lg uppercase mb-2 text-accent-red">Why Standard Agencies Fail in {cityData.name}:</h3>
                    <p className="font-bold opacity-80 text-sm leading-relaxed">
                      {cityData.summary}
                    </p>
                  </div>
                  <div className="bg-[#F5F5F5] border-2 border-black p-5">
                    <h3 className="font-heading font-black text-lg uppercase mb-2 text-accent-blue">Key Verticals We Scale in {cityData.name}:</h3>
                    <p className="font-bold opacity-90 text-sm leading-relaxed">
                      {cityData.focusIndustries}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Global Components */}
        <TheBrokenModel />
        <Solutions />
        <ResultsShowcase />
        <OurSystem />

        {/* City FAQ Accordion */}
        <section className="py-24 border-b-2 border-foreground bg-[#F5F5F5] text-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-tighter mb-12 text-center">
              {formattedCity} Growth Studio <span className="text-accent-red">FAQs</span>
            </h3>
            <div className="space-y-4">
              {cityFaqs.map((item, idx) => (
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
