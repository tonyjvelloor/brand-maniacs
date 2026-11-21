import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Globe } from "lucide-react";
import { ResultsShowcase } from "@/components/sections/ResultsShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";

interface USCityMarket {
  name: string;
  state: string;
  timezone: string;
  hub: string;
  districts: string;
  localAgencyPain: string;
  summary: string;
  verticals: string;
}

export const US_CITY_MARKETS: Record<string, USCityMarket> = {
  "austin": {
    name: "Austin",
    state: "TX",
    timezone: "CST (Central Time)",
    hub: "Silicon Hills — B2B SaaS, D2C Consumer & Venture Tech",
    districts: "Downtown Austin, The Domain, East Austin, South Congress",
    localAgencyPain: "Austin startups regularly get quoted $15,000–$20,000/month by traditional Texas agencies for basic media buying and slow Webflow/WordPress builds.",
    summary: "We partner with Austin SaaS founders and D2C brands to engineer sub-second Next.js web infrastructure, Server-to-Server (CAPI) attribution, and high-velocity creative testing—at 3x the shipping speed and flat $2,500–$5,000/mo retainers.",
    verticals: "Venture-backed B2B SaaS, Austin CPG & wellness D2C brands, health optimization clinics, and commercial real estate."
  },
  "new-york": {
    name: "New York",
    state: "NY",
    timezone: "EST (Eastern Time)",
    hub: "Global D2C Fashion, FinTech & Enterprise B2B Capital",
    districts: "SoHo, Flatiron / Silicon Alley, Midtown Manhattan, Brooklyn / DUMBO",
    localAgencyPain: "Manhattan agencies charge $20,000 to $35,000/month largely to subsidize Madison Avenue rent and multi-layered account executives who don't ship code or test creative fast enough.",
    summary: "Built for New York's hyper-competitive D2C and B2B brands. We replace bloated agency retainers with senior growth engineers: delivering sub-second Next.js landing funnels, 15+ weekly video ad hooks, and closed-loop revenue attribution during EST business hours.",
    verticals: "D2C fashion, beauty & luxury retail, FinTech platforms, enterprise B2B consultancies, and hospitality groups."
  },
  "san-francisco": {
    name: "San Francisco",
    state: "CA",
    timezone: "PST (Pacific Time)",
    hub: "AI, Developer Tools & High-Growth B2B SaaS Epicenter",
    districts: "SoMa, Mission Bay, Financial District, Palo Alto & Silicon Valley",
    localAgencyPain: "Bay Area startups need engineering-grade growth systems—not traditional marketing agencies that don't understand Next.js, programmatic SEO, or AI answer engine optimization (AEO/llms.txt).",
    summary: "We work alongside San Francisco technical founders and growth leads to build programmatic SEO moats, AI-citable documentation & knowledge graphs, and high-converting Next.js product marketing surfaces.",
    verticals: "AI startups, developer tools, Series A/B B2B SaaS, and PLG (Product-Led Growth) platforms."
  },
  "los-angeles": {
    name: "Los Angeles",
    state: "CA",
    timezone: "PST (Pacific Time)",
    hub: "D2C Consumer Lifestyle, Beauty, Apparel & Wellness Capital",
    districts: "Santa Monica / Silicon Beach, Venice, Culver City, Downtown LA, Beverly Hills",
    localAgencyPain: "LA creative boutiques produce expensive brand shoots that look great on awards pages but fail to lower Customer Acquisition Cost (CAC) on Meta and TikTok.",
    summary: "For Los Angeles D2C and wellness brands, we combine behavioral creative testing (15–20 modular hooks/week), sub-second headless Shopify/Next.js landing pages, and Server-to-Server CAPI attribution to scale Blended ROAS profitably.",
    verticals: "D2C apparel & streetwear, beauty & skincare brands, integrative wellness clinics, and creator-led consumer products."
  },
  "miami": {
    name: "Miami",
    state: "FL",
    timezone: "EST (Eastern Time)",
    hub: "High-Growth E-Commerce, Luxury Hospitality, FinTech & Real Estate",
    districts: "Brickell, Wynwood, Miami Design District, Coral Gables",
    localAgencyPain: "Fast-growing Miami brands often outgrow local social media agencies that lack full-stack Next.js engineering and closed-loop CRM attribution.",
    summary: "We engineer full-funnel acquisition engines for Miami's booming D2C, hospitality, wellness, and real estate brands—combining high-intent search domination, sub-second conversion sites, and automated WhatsApp/SMS revenue flows.",
    verticals: "Luxury real estate & coworking, high-growth D2C e-commerce, medical aesthetics & wellness clinics, and hospitality."
  },
  "chicago": {
    name: "Chicago",
    state: "IL",
    timezone: "CST (Central Time)",
    hub: "Midwest Industrial B2B, Manufacturing, Logistics & Enterprise SaaS",
    districts: "The Loop, Fulton Market, River North, O'Hare Industrial Corridor",
    localAgencyPain: "Midwest manufacturing and B2B companies are stuck with legacy industrial web agencies that build slow, outdated brochure websites that generate zero qualified RFQs.",
    summary: "We modernize digital acquisition for Chicago's B2B, manufacturing, and SaaS leaders—replacing static websites with interactive Next.js RFQ engines, technical search capture, and closed-loop CRM pipeline tracking.",
    verticals: "Industrial manufacturing & OEMs, supply chain & logistics B2B, enterprise SaaS, and financial services."
  },
  "seattle": {
    name: "Seattle",
    state: "WA",
    timezone: "PST (Pacific Time)",
    hub: "Cloud Infrastructure, Enterprise SaaS & E-Commerce Hub",
    districts: "South Lake Union, Downtown Seattle, Bellevue, Redmond",
    localAgencyPain: "Seattle tech and consumer companies require deep technical SEO, AEO schema precision, and edge performance that generalist agencies cannot execute.",
    summary: "We partner with Seattle SaaS and e-commerce teams to engineer 100/100 Core Web Vitals Next.js web platforms, programmatic search clusters, and high-efficiency paid acquisition funnels.",
    verticals: "Cloud & enterprise SaaS, outdoor & consumer D2C brands, and B2B technology consultancies."
  },
  "boston": {
    name: "Boston",
    state: "MA",
    timezone: "EST (Eastern Time)",
    hub: "HealthTech, BioTech, EdTech & Enterprise B2B Innovation",
    districts: "Kendall Square / Cambridge, Seaport District, Back Bay",
    localAgencyPain: "Boston HealthTech, EdTech, and B2B companies deal with complex, high-trust buyer journeys where generic consumer ad agencies burn budget on unqualified clicks.",
    summary: "We build authority-driven conversion architectures, compliant healthcare/education search funnels, and AEO-structured content hubs that turn complex technical buyers into booked demos and enrollments.",
    verticals: "HealthTech & specialized clinics, EdTech & professional academies, B2B SaaS, and deep-tech enterprises."
  }
};

function formatUSCity(slug?: string): string {
  if (!slug) return "United States";
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function generateStaticParams() {
  return Object.keys(US_CITY_MARKETS).map((city) => ({
    "us-city": city,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ "us-city": string }> }): Promise<Metadata> {
  const resolved = await params;
  const slug = resolved?.["us-city"] || "austin";
  const city = US_CITY_MARKETS[slug];
  const cityName = city ? `${city.name}, ${city.state}` : formatUSCity(slug);

  return {
    title: `Growth Marketing & Next.js Web Agency for ${cityName} Brands`,
    description: `Scaling a brand in ${cityName}? ${city ? city.summary : "We build sub-second Next.js websites, Server-to-Server attribution, and full-funnel customer acquisition systems."}`,
    alternates: {
      canonical: `/growth-marketing-agency-in-${slug}`,
    },
    openGraph: {
      title: `Growth Marketing & Next.js Studio for ${cityName} | The Brand Maniacs`,
      description: `Silicon Valley engineering rigor without $20k/mo agency bloat. Serving ambitious founders in ${cityName}.`,
      url: `https://www.thebrandmaniacs.online/growth-marketing-agency-in-${slug}`,
    },
  };
}

export default async function USCityGrowthPage({ params }: { params: Promise<{ "us-city": string }> }) {
  const resolved = await params;
  const slug = resolved?.["us-city"] || "austin";
  const city = US_CITY_MARKETS[slug];
  const cityName = city ? city.name : formatUSCity(slug);
  const fullCityLabel = city ? `${city.name}, ${city.state}` : cityName;

  const faqs = [
    {
      q: `Why do ${cityName} founders choose The Brand Maniacs over a local ${cityName} marketing agency?`,
      a: `${city ? city.localAgencyPain : `Traditional agencies in ${cityName} charge $15,000–$25,000/month retainers to cover high local overhead.`} With The Brand Maniacs, you work directly with senior growth architects and full-stack Next.js engineers—getting 3x faster shipping velocity, custom sub-second conversion infrastructure, and transparent $2,500–$5,000/month pricing.`
    },
    {
      q: `How do we collaborate across ${city ? city.timezone : "US timezones"}?`,
      a: `We maintain dedicated live overlap hours with ${city ? city.timezone : "EST, CST, and PST"} for strategy calls, Slack communication, and sprint reviews. In addition, our 24-hour engineering cycle means requests from your afternoon are built, deployed, and ready for review by the next morning.`
    },
    {
      q: `What results can ${cityName} D2C and B2B brands expect in the first 60 days?`,
      a: `In the first 30–45 days, we launch your upgraded Next.js conversion architecture (<1.2s LCP), configure Server-to-Server (Meta CAPI / GA4 / ChatGPT Ads) attribution, and deploy high-intent search and creative testing sprints designed to reduce CAC by 25–40%.`
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://www.thebrandmaniacs.online/growth-marketing-agency-in-${slug}#service`,
        "name": `Growth Marketing & Next.js Web Engineering for ${fullCityLabel}`,
        "provider": {
          "@id": "https://www.thebrandmaniacs.online/#organization"
        },
        "serviceType": "Growth Marketing & Next.js Web Development",
        "description": city ? city.summary : `Full-stack customer acquisition and Next.js web engineering for ${fullCityLabel} brands.`,
        "areaServed": [
          {
            "@type": "City",
            "name": cityName
          },
          {
            "@type": "Country",
            "name": "United States"
          }
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "1500",
          "highPrice": "7500"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.thebrandmaniacs.online/growth-marketing-agency-in-${slug}#breadcrumb`,
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
            "name": "USA Growth Studio",
            "item": "https://www.thebrandmaniacs.online/usa-growth-studio"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": fullCityLabel,
            "item": `https://www.thebrandmaniacs.online/growth-marketing-agency-in-${slug}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `https://www.thebrandmaniacs.online/growth-marketing-agency-in-${slug}#faq`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main>
        {/* 1. HERO */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b-2 border-foreground">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-red rounded-full blur-[140px] opacity-10 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl">
              <span className="inline-flex items-center gap-2 border-2 border-foreground font-black text-xs md:text-sm uppercase tracking-widest px-4 py-1.5 mb-6 bg-accent-yellow text-black shadow-[3px_3px_0_0_#000]">
                <Globe className="w-4 h-4" />
                <span>// {fullCityLabel.toUpperCase()} · {city ? city.timezone.toUpperCase() : "US TIMEZONE OVERLAP"}</span>
              </span>

              <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-[0.9] text-foreground mb-8">
                Growth Engineering <br />
                For <span className="text-accent-red">{cityName}</span> <br />
                Brands.
              </h1>

              <div className="max-w-3xl mb-10 space-y-6">
                <p className="text-xl md:text-2xl font-bold text-foreground opacity-90 leading-relaxed">
                  {city ? city.summary : `We build sub-second Next.js conversion websites and full-funnel acquisition systems for ambitious companies in ${fullCityLabel}.`}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="inline-flex justify-center items-center gap-2 bg-foreground text-background border-2 border-foreground font-black text-sm uppercase tracking-widest px-8 py-5 hover:bg-accent-red hover:text-white transition-colors shadow-[4px_4px_0_0_#000]"
                >
                  Book {cityName} Strategy Call <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/usa-growth-studio"
                  className="inline-flex justify-center items-center gap-2 bg-accent-yellow text-black border-2 border-black font-black text-sm uppercase tracking-widest px-8 py-5 hover:bg-white transition-colors shadow-[4px_4px_0_0_#000]"
                >
                  View USD Pricing & Packages ($)
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. LOCAL MARKET CONTEXT */}
        {city && (
          <section className="py-16 border-b-2 border-foreground bg-accent-yellow text-black">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="border-4 border-black p-8 md:p-10 bg-white shadow-[8px_8px_0_0_#000]">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b-2 border-black pb-4">
                  <div>
                    <span className="font-mono text-xs font-black uppercase tracking-widest bg-black text-white px-3 py-1">
                      US MARKET FOCUS · {fullCityLabel.toUpperCase()}
                    </span>
                    <h2 className="font-heading font-black text-2xl md:text-4xl uppercase mt-2">
                      {city.hub}
                    </h2>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="text-xs font-black uppercase tracking-widest text-black/60 block">Key Corridors</span>
                    <span className="font-bold text-sm text-black">{city.districts}</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-heading font-black text-lg uppercase mb-2 text-accent-red">
                      The {cityName} Agency Problem:
                    </h3>
                    <p className="font-bold opacity-80 text-base leading-relaxed">
                      {city.localAgencyPain}
                    </p>
                  </div>
                  <div className="bg-[#F5F5F5] border-2 border-black p-6">
                    <h3 className="font-heading font-black text-lg uppercase mb-2 text-accent-blue">
                      Who We Partner With in {cityName}:
                    </h3>
                    <p className="font-bold opacity-90 text-sm leading-relaxed">
                      {city.verticals}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 3. FAQS */}
        <section className="py-24 border-b-2 border-foreground bg-[#F5F5F5] text-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-tighter mb-12 text-center">
              {cityName} Growth Studio <span className="text-accent-red">FAQs</span>
            </h2>
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

        <ResultsShowcase />
        <FinalCTA />
      </main>
    </div>
  );
}
