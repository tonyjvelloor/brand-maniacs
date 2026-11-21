import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Zap, Globe, Clock, DollarSign, ShieldCheck, Code, BarChart3 } from "lucide-react";
import { ResultsShowcase } from "@/components/sections/ResultsShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "US Growth Marketing & Next.js Web Engineering Studio",
  description: "We build sub-second Next.js websites, Server-to-Server (CAPI) attribution, and high-velocity customer acquisition systems for US D2C, B2B SaaS, and Healthcare brands—without $20k/mo agency bloat.",
  alternates: {
    canonical: "/usa-growth-studio",
  },
  openGraph: {
    title: "US Growth Marketing & Next.js Web Studio | The Brand Maniacs",
    description: "Silicon Valley engineering rigor meets ruthless growth execution. Scale your US D2C or SaaS brand without bloated $20k/mo retainers.",
    url: "https://www.thebrandmaniacs.online/usa-growth-studio",
    type: "website",
  },
};

const usaFaqs = [
  {
    q: "Why do US founders choose The Brand Maniacs over a traditional US marketing agency?",
    a: "Traditional US agencies in New York, San Francisco, or Los Angeles charge $15,000 to $25,000/month retainers primarily to cover expensive office overhead and layers of account managers, while passing actual execution to junior staff. We are an engineering-first growth studio: you work directly with senior growth architects, full-stack Next.js engineers, and performance strategists at 3x the shipping velocity and a fraction of the cost."
  },
  {
    q: "How do you handle US timezones (EST, CST, PST)?",
    a: "We operate with dedicated US Eastern (EST) and Pacific (PST) overlap windows for live strategy sprints, Slack collaboration, and weekly pipeline reviews. Combined with our 24-hour engineering cycle, prompts and feedback submitted at the end of your US workday are built, tested, and ready for review by the time you wake up."
  },
  {
    q: "What does a typical engagement cost in USD?",
    a: "Our 2-week Growth Architecture & Forensic Audit Sprint is $1,500. Full-stack Custom Next.js Conversion Websites and Growth System Builds range from $3,500 to $8,500 depending on scope and CRM integrations. Ongoing dedicated growth engineering and performance acquisition retainers range from $2,500 to $5,000/month."
  },
  {
    q: "Do you build custom Next.js storefronts for US Shopify and SaaS companies?",
    a: "Yes. We specialize in sub-second (<1.2s LCP) Next.js web applications, headless Shopify landing page funnels, Server-to-Server (Meta CAPI, Google Enhanced Conversions, ChatGPT Ads S2S) tracking, and programmatic SEO architectures that rank across US search engines and AI answer engines."
  }
];

const usaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.thebrandmaniacs.online/usa-growth-studio#service",
      "name": "US Growth Marketing & Next.js Web Engineering Studio",
      "provider": {
        "@id": "https://www.thebrandmaniacs.online/#organization"
      },
      "serviceType": "Growth Marketing & Next.js Web Development",
      "description": "Full-stack customer acquisition, custom Next.js conversion websites, Server-to-Server attribution, and programmatic SEO/AEO for United States D2C, B2B SaaS, and enterprise brands.",
      "areaServed": [
        {
          "@type": "Country",
          "name": "United States"
        },
        "New York",
        "Austin",
        "San Francisco",
        "Los Angeles",
        "Miami",
        "Chicago",
        "Seattle",
        "Boston"
      ],
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "1500",
        "highPrice": "8500",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.thebrandmaniacs.online/usa-growth-studio#breadcrumb",
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
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.thebrandmaniacs.online/usa-growth-studio#faq",
      "mainEntity": usaFaqs.map((item) => ({
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

const usCities = [
  { name: "Austin, TX", slug: "austin", focus: "B2B SaaS & Venture Tech" },
  { name: "New York, NY", slug: "new-york", focus: "D2C Fashion, FinTech & Enterprise" },
  { name: "San Francisco, CA", slug: "san-francisco", focus: "AI, DevTools & High-Growth SaaS" },
  { name: "Los Angeles, CA", slug: "los-angeles", focus: "D2C Consumer, Beauty & Wellness" },
  { name: "Miami, FL", slug: "miami", focus: "E-Commerce, Hospitality & Real Estate" },
  { name: "Chicago, IL", slug: "chicago", focus: "Industrial B2B & Manufacturing" },
  { name: "Seattle, WA", slug: "seattle", focus: "Cloud SaaS & Enterprise Tech" },
  { name: "Boston, MA", slug: "boston", focus: "HealthTech, BioTech & B2B" }
];

export default function USAGrowthStudioPage() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-accent-yellow selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(usaSchema) }}
      />

      <main>
        {/* 1. HERO */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b-2 border-foreground">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-blue rounded-full blur-[140px] opacity-10 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl">
              <span className="inline-flex items-center gap-2 border-2 border-foreground font-black text-xs md:text-sm uppercase tracking-widest px-4 py-1.5 mb-6 bg-accent-yellow text-black shadow-[3px_3px_0_0_#000]">
                <Globe className="w-4 h-4" />
                <span>UNITED STATES GROWTH INFRASTRUCTURE · EST / PST OVERLAP</span>
              </span>

              <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-[0.9] text-foreground mb-8">
                Stop Paying <span className="text-accent-red">$20K/Mo</span> <br />
                For Slow US Agency <br />
                Retainers.
              </h1>

              <div className="max-w-3xl mb-10 space-y-6">
                <p className="text-xl md:text-2xl font-bold text-foreground opacity-90 leading-relaxed">
                  Built in India. Engineered for US scale. We build sub-second Next.js conversion websites, Server-to-Server attribution pipelines, and high-velocity customer acquisition systems for ambitious American D2C, SaaS, and B2B brands.
                </p>

                <div className="bg-foreground text-background p-6 border-2 border-foreground shadow-[6px_6px_0_0_#FFE600]">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent-yellow mb-1 font-black">
                    // AEO SUMMARY · THE GLOBAL GROWTH STUDIO MODEL
                  </p>
                  <p className="text-sm md:text-base font-bold opacity-90 leading-snug">
                    US founders often face a broken choice: pay $15,000–$25,000/month to a bloated domestic agency where junior account managers move slowly, or hire disconnected freelancers with zero commercial strategy. The Brand Maniacs bridges the gap—combining Silicon Valley engineering standards (Next.js, React, CAPI/S2S, programmatic SEO/AEO) with ruthless daily execution at $2,500–$5,000/month.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="inline-flex justify-center items-center gap-2 bg-foreground text-background border-2 border-foreground font-black text-sm uppercase tracking-widest px-8 py-5 hover:bg-accent-red hover:text-white transition-colors shadow-[4px_4px_0_0_#000]"
                >
                  Book US Discovery Call (EST/PST) <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/start"
                  className="inline-flex justify-center items-center gap-2 bg-accent-yellow text-black border-2 border-black font-black text-sm uppercase tracking-widest px-8 py-5 hover:bg-white transition-colors shadow-[4px_4px_0_0_#000]"
                >
                  Scope My Project in USD ($)
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. THE US AGENCY COMPARISON MATRIX */}
        <section className="py-24 border-b-2 border-foreground bg-[#F5F5F5] text-black">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <span className="inline-block border-2 border-black font-black text-xs uppercase tracking-widest px-3 py-1 mb-4 bg-accent-yellow text-black">
                UNIT ECONOMICS & VELOCITY
              </span>
              <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter">
                Traditional US Agency vs <span className="text-accent-red">The Brand Maniacs</span>
              </h2>
              <p className="font-bold opacity-75 mt-3 max-w-2xl mx-auto">
                Why US founders in Austin, NYC, SF, and Miami are switching from legacy retainers to our growth engineering model.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border-4 border-black bg-white text-black shadow-[8px_8px_0_0_#000]">
                <thead>
                  <tr className="bg-black text-white font-heading uppercase tracking-widest text-xs sm:text-sm">
                    <th className="p-4 border-2 border-black">Metric / Capability</th>
                    <th className="p-4 border-2 border-black text-center opacity-70">Typical US Agency (NYC / SF / LA)</th>
                    <th className="p-4 border-2 border-black text-center bg-accent-red text-white">The Brand Maniacs Studio</th>
                  </tr>
                </thead>
                <tbody className="font-bold text-sm">
                  <tr>
                    <td className="p-4 border-2 border-black">Monthly Retainer / Investment</td>
                    <td className="p-4 border-2 border-black text-center opacity-70">$12,000 – $25,000/mo + % of ad spend</td>
                    <td className="p-4 border-2 border-black text-center text-green-700 font-black">$2,500 – $5,000/mo (Flat & Transparent)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-black">Custom Next.js Web Build</td>
                    <td className="p-4 border-2 border-black text-center opacity-70">$25,000 – $60,000 (12–16 weeks)</td>
                    <td className="p-4 border-2 border-black text-center text-accent-blue font-black">$3,500 – $7,500 (3–5 weeks to live)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-black">Who Works On Your Account?</td>
                    <td className="p-4 border-2 border-black text-center opacity-70">Pitched by partners, handed to junior AEs</td>
                    <td className="p-4 border-2 border-black text-center text-accent-red font-black">Direct access to Chief Architect & Senior Engineers</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-black">Ad Attribution & Tracking</td>
                    <td className="p-4 border-2 border-black text-center opacity-70">Basic browser pixel (misses 30% of iOS data)</td>
                    <td className="p-4 border-2 border-black text-center font-black">Server-to-Server (Meta CAPI, GA4, ChatGPT S2S)</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-black">AI Search (AEO / GEO)</td>
                    <td className="p-4 border-2 border-black text-center opacity-70">Legacy blog posts with no schema</td>
                    <td className="p-4 border-2 border-black text-center bg-accent-yellow font-black">JSON-LD Graphs, llms.txt & Programmatic Clusters</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 3. TRANSPARENT USD PACKAGES */}
        <section className="py-24 border-b-2 border-foreground bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-4 bg-accent-blue text-white">
                USD PRICING ARCHITECTURE
              </span>
              <h2 className="font-heading font-black text-4xl md:text-6xl uppercase tracking-tighter">
                How We Partner With <span className="text-accent-yellow">US Brands</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-4 border-foreground p-8 bg-foreground/5 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-black uppercase tracking-widest text-accent-yellow block mb-2">
                    01 · ENTRY DIAGNOSTIC (2 WEEKS)
                  </span>
                  <h3 className="font-heading font-black text-2xl uppercase mb-2">Growth Architecture Sprint</h3>
                  <div className="text-4xl font-heading font-black text-accent-yellow mb-6">$1,500 <span className="text-xs font-mono opacity-60">one-time</span></div>
                  <p className="font-bold text-sm opacity-80 mb-6">
                    Forensic audit of your current acquisition funnel, paid ad waste, tracking leaks, and conversion bottlenecks—delivering a 90-day engineering roadmap.
                  </p>
                  <ul className="space-y-3 text-sm font-bold opacity-90 mb-8">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-yellow" /> Meta & Google Ads Forensic Audit</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-yellow" /> Next.js / Shopify Conversion Teardown</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-yellow" /> Technical SEO, AEO & Schema Audit</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-yellow" /> 100% Credited Toward System Build</li>
                  </ul>
                </div>
                <Link href="/book" className="w-full text-center bg-foreground text-background font-black uppercase text-xs tracking-widest py-4 border-2 border-foreground hover:bg-accent-yellow hover:text-black transition-colors">
                  Book Architecture Sprint →
                </Link>
              </div>

              <div className="border-4 border-accent-yellow p-8 bg-[#111] text-white flex flex-col justify-between shadow-[8px_8px_0_0_#FFE600]">
                <div>
                  <span className="font-mono text-xs font-black uppercase tracking-widest bg-accent-yellow text-black px-2 py-0.5 inline-block mb-2">
                    02 · CORE SYSTEM BUILD (4–6 WEEKS)
                  </span>
                  <h3 className="font-heading font-black text-2xl uppercase mb-2">Custom Next.js Web & Conversion System</h3>
                  <div className="text-4xl font-heading font-black text-accent-yellow mb-6">$3,500 – $7,500</div>
                  <p className="font-bold text-sm text-gray-300 mb-6">
                    We replace your slow WordPress or bloated Shopify landing pages with a sub-second Next.js growth asset engineered to convert paid and organic traffic.
                  </p>
                  <ul className="space-y-3 text-sm font-bold text-gray-200 mb-8">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-yellow" /> Custom Figma UX + Next.js Edge Build</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-yellow" /> &lt;1.2s LCP & 100/100 Core Web Vitals</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-yellow" /> Programmatic SEO & JSON-LD Graph</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-yellow" /> Server-to-Server (CAPI) & CRM Webhooks</li>
                  </ul>
                </div>
                <Link href="/start" className="w-full text-center bg-accent-yellow text-black font-black uppercase text-xs tracking-widest py-4 border-2 border-black hover:bg-white transition-colors">
                  Scope My Web System →
                </Link>
              </div>

              <div className="border-4 border-foreground p-8 bg-foreground/5 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-black uppercase tracking-widest text-accent-red block mb-2">
                    03 · ONGOING SCALE PARTNER
                  </span>
                  <h3 className="font-heading font-black text-2xl uppercase mb-2">Dedicated Growth Partner</h3>
                  <div className="text-4xl font-heading font-black text-accent-red mb-6">$2,500 – $5,000<span className="text-xs font-mono opacity-60">/mo</span></div>
                  <p className="font-bold text-sm opacity-80 mb-6">
                    Your full-stack growth team: continuous ad creative testing, landing page CRO, programmatic SEO/AEO expansion, and revenue attribution.
                  </p>
                  <ul className="space-y-3 text-sm font-bold opacity-90 mb-8">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-red" /> 15–20 Modular Ad Creative Hooks/Wk</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-red" /> Full Meta, Google & LinkedIn Media Buying</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-red" /> Continuous Next.js Landing Page Experiments</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-accent-red" /> Live US Timezone Slack & Weekly Sprints</li>
                  </ul>
                </div>
                <Link href="/book" className="w-full text-center bg-foreground text-background font-black uppercase text-xs tracking-widest py-4 border-2 border-foreground hover:bg-accent-red hover:text-white transition-colors">
                  Apply For Growth Partnership →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. US REGIONAL HUBS (PROGRAMMATIC INTERNAL LINKING) */}
        <section className="py-20 border-b-2 border-foreground bg-[#111] text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="mb-12">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-accent-yellow block mb-2">
                // US TECH & CONSUMER CORRIDORS
              </span>
              <h2 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-tighter">
                Engineered For Major <span className="text-accent-yellow">US Markets</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {usCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/growth-marketing-agency-in-${city.slug}`}
                  className="border-2 border-white/20 p-5 hover:border-accent-yellow hover:bg-white/5 transition-all group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-heading font-black text-lg uppercase text-white group-hover:text-accent-yellow">
                      {city.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-accent-yellow group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="font-mono text-xs text-gray-400">{city.focus}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. US FAQS */}
        <section className="py-24 border-b-2 border-foreground bg-[#F5F5F5] text-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-tighter mb-12 text-center">
              US Client <span className="text-accent-red">FAQs</span>
            </h2>
            <div className="space-y-4">
              {usaFaqs.map((item, idx) => (
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
