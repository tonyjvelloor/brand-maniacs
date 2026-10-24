import { Metadata } from "next";
import { TheBrokenModel } from "@/components/sections/TheBrokenModel";
import { Solutions } from "@/components/sections/Solutions";
import { ResultsShowcase } from "@/components/sections/ResultsShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { OurSystem } from "@/components/sections/OurSystem";
import Link from "next/link";
import { ArrowRight, Check, Zap, Target, TrendingUp, BarChart3, Repeat, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "D2C Marketing Agency — Scale Meta & Google Ads Profitably",
  description: "Leading D2C marketing agency. We engineer high-velocity Meta ads, UGC creative systems, and full-funnel conversion architecture to scale ROAS and lower CAC.",
  alternates: {
    canonical: "/industries/d2c-ecommerce",
  },
  openGraph: {
    title: "D2C Marketing Agency | The Brand Maniacs",
    description: "Scale your D2C brand with engineered growth systems. We lower CAC, increase ROAS, and engineer high-converting PDPs and retention funnels.",
    url: "https://www.thebrandmaniacs.online/industries/d2c-ecommerce",
    type: "website",
  },
};

const d2cSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.thebrandmaniacs.online/industries/d2c-ecommerce#service",
      "name": "D2C E-Commerce Growth Marketing & Acquisition System",
      "provider": {
        "@id": "https://www.thebrandmaniacs.online/#organization"
      },
      "serviceType": "D2C Marketing Agency",
      "description": "Full-funnel D2C growth agency: high-velocity Meta & Google Ads, creative testing engines, PDP conversion rate optimization, and retention email/WhatsApp workflows.",
      "areaServed": ["India", "United States", "United Kingdom", "United Arab Emirates", "Global"],
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.thebrandmaniacs.online/industries/d2c-ecommerce#breadcrumb",
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
          "name": "Industries",
          "item": "https://www.thebrandmaniacs.online/growth-systems"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "D2C Marketing Agency",
          "item": "https://www.thebrandmaniacs.online/industries/d2c-ecommerce"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.thebrandmaniacs.online/industries/d2c-ecommerce#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a D2C marketing agency do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A D2C (Direct-to-Consumer) marketing agency helps consumer brands acquire, convert, and retain customers through owned digital channels. Rather than just running ad spend, a full-service D2C growth studio engineers high-velocity UGC creative testing, optimizes product page conversion rates (CVR), fixes server-side tracking (CAPI/S2S), and builds retention workflows (email and WhatsApp) to maximize Customer Lifetime Value (LTV)."
          }
        },
        {
          "@type": "Question",
          "name": "How do you lower Customer Acquisition Cost (CAC) for D2C brands?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We lower CAC by solving the conversion leak before increasing ad spend. This includes: 1) Testing 15–20 modular ad creative hooks weekly to find breakout performers, 2) Building dedicated, lightning-fast landing pages instead of dumping ad traffic onto slow homepages, 3) Implementing first-party Server-to-Server tracking to feed clean signal back to Meta's algorithm, and 4) Designing post-purchase upsell funnels to increase initial Average Order Value (AOV)."
          }
        },
        {
          "@type": "Question",
          "name": "What is a realistic ROAS benchmark for scaling D2C e-commerce in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In 2026, sustainable D2C scaling requires looking at Blended ROAS (MER - Marketing Efficiency Ratio) rather than in-platform vanity metrics. A healthy first-order ROAS typically ranges between 2.2x to 3.5x for consumer goods, with backend 60-day LTV expanding total portfolio ROAS to 4x+. We engineer systems built to maintain profitability as monthly spend scales beyond ₹10L–₹50L+ ($15k–$75k+)."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with D2C brands in the US, UK, and UAE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our studio operates globally, partnering with high-growth consumer brands across the United States, United Kingdom, UAE, and India. We provide 24/7 creative velocity, behavioral ad targeting, and edge-hosted conversion infrastructure designed for international scale."
          }
        }
      ]
    }
  ]
};

export default function D2CIndustryPage() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-accent-yellow selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(d2cSchema) }}
      />
      
      <main>
        {/* 1. Industry Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b-2 border-foreground">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-red rounded-full blur-[140px] opacity-10 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl">
              <span className="inline-block border-2 border-foreground font-black text-xs md:text-sm uppercase tracking-widest px-3 py-1 mb-6 bg-accent-red text-white shadow-[2px_2px_0_0_#000]">
                // D2C GROWTH STUDIO · GLOBAL SCALE
              </span>
              
              <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.9] text-foreground mb-8">
                The D2C <br />
                <span className="text-accent-red">Marketing</span> <br />
                Agency.
              </h1>
              
              <div className="max-w-3xl mb-10 space-y-6">
                <p className="text-xl md:text-2xl font-bold text-foreground opacity-90 leading-relaxed">
                  Ad fatigue is real. iOS updates made attribution difficult. Competing on discounts erodes margins. We build full-funnel acquisition systems that scale D2C revenue profitably.
                </p>
                <div className="bg-foreground text-background p-6 border-2 border-foreground shadow-[6px_6px_0_0_#FFE600]">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent-yellow mb-1 font-black">
                    AEO Definition · Direct-To-Consumer Growth
                  </p>
                  <p className="text-sm md:text-base font-bold opacity-90 leading-snug">
                    A modern D2C marketing agency does not merely buy ad impressions; it engineers the entire consumer journey: rapid-iteration creative testing, edge-speed landing pages, server-side data attribution, and automated retention funnels to maximize customer lifetime value (LTV).
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/book" 
                  className="inline-flex justify-center items-center gap-2 bg-foreground text-background border-2 border-foreground font-black text-sm uppercase tracking-widest px-8 py-5 hover:bg-accent-red hover:text-white transition-colors shadow-[4px_4px_0_0_#000]"
                >
                  Scale My D2C Brand <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/ads-rescue" 
                  className="inline-flex justify-center items-center gap-2 bg-accent-yellow text-black border-2 border-black font-black text-sm uppercase tracking-widest px-8 py-5 hover:bg-white transition-colors shadow-[4px_4px_0_0_#000]"
                >
                  Audit My Ad Spend Leaks
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. THE 4-PILLAR D2C GROWTH ENGINE */}
        <section className="py-24 border-b-2 border-foreground bg-[#F5F5F5] text-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <span className="inline-block border-2 border-black font-black text-xs uppercase tracking-widest px-3 py-1 mb-4 bg-accent-yellow text-black">
                ENGINEERED PROFITABILITY
              </span>
              <h2 className="font-heading font-black text-4xl md:text-6xl uppercase tracking-tighter">
                The 4-Pillar <span className="text-accent-red">D2C Growth Engine</span>
              </h2>
              <p className="font-bold opacity-75 max-w-2xl mx-auto mt-4 text-base md:text-lg">
                Why traditional media-buying agencies plateau at ₹15L–₹20L/mo: they only pull one lever. We engineer all four.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0_0_#000]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent-red text-white border-2 border-black">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-black text-2xl uppercase">1. Creative Velocity</h3>
                </div>
                <p className="font-bold opacity-80 text-sm md:text-base leading-relaxed mb-4">
                  Algorithms don&apos;t reward ad budget anymore; they reward creative volume. We script, produce, and test 15–20 modular UGC hooks and behavioral angles weekly to find your 10x breakout winners.
                </p>
                <div className="border-t-2 border-black/10 pt-4 flex gap-4 text-xs font-black uppercase text-accent-red">
                  <span>✦ 15+ Hooks Tested Weekly</span>
                  <span>✦ Zero Creative Fatigue</span>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0_0_#000]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent-blue text-white border-2 border-black">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-black text-2xl uppercase">2. Conversion Architecture</h3>
                </div>
                <p className="font-bold opacity-80 text-sm md:text-base leading-relaxed mb-4">
                  Sending paid traffic to a bloated Shopify theme kills ROAS. We design sub-second custom landing pages and optimized PDPs with behavioral trust triggers, sticky CTAs, and frictionless checkout flows.
                </p>
                <div className="border-t-2 border-black/10 pt-4 flex gap-4 text-xs font-black uppercase text-accent-blue">
                  <span>✦ Sub-Second Load Speeds</span>
                  <span>✦ +35% Lift in CVR</span>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0_0_#000]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent-yellow text-black border-2 border-black">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-black text-2xl uppercase">3. S2S Data & Attribution</h3>
                </div>
                <p className="font-bold opacity-80 text-sm md:text-base leading-relaxed mb-4">
                  Browser cookies lose up to 30% of conversion data. We build Server-to-Server (CAPI) conversion pipelines directly to Meta, Google, and ChatGPT Ads, feeding clean signal back to optimize the algorithm.
                </p>
                <div className="border-t-2 border-black/10 pt-4 flex gap-4 text-xs font-black uppercase text-black">
                  <span>✦ 100% Attribution Accuracy</span>
                  <span>✦ Lower In-Platform CAC</span>
                </div>
              </div>

              <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0_0_#000]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-500 text-white border-2 border-black">
                    <Repeat className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-black text-2xl uppercase">4. Retention & LTV Funnels</h3>
                </div>
                <p className="font-bold opacity-80 text-sm md:text-base leading-relaxed mb-4">
                  First-purchase profit is only the beginning. We implement automated WhatsApp VIP broadcasts, Klaviyo replenishment sequences, and review capture engines to double 60-day repeat purchase rate.
                </p>
                <div className="border-t-2 border-black/10 pt-4 flex gap-4 text-xs font-black uppercase text-green-700">
                  <span>✦ 2.8x Repeat Purchase Rate</span>
                  <span>✦ Zero-Ad-Cost Revenue</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. COMPARISON TABLE: TRADITIONAL AGENCY VS BRAND MANIACS */}
        <section className="py-24 border-b-2 border-foreground bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter">
                Typical D2C Agency vs <span className="text-accent-red">The Brand Maniacs</span>
              </h2>
              <p className="font-bold opacity-75 mt-2">Why high-growth consumer brands choose our engineering-first model.</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border-2 border-foreground bg-white text-black">
                <thead>
                  <tr className="bg-foreground text-background font-heading uppercase tracking-widest text-xs sm:text-sm">
                    <th className="p-4 border-2 border-foreground">Growth Capability</th>
                    <th className="p-4 border-2 border-foreground text-center opacity-60">Traditional Agency</th>
                    <th className="p-4 border-2 border-foreground text-center bg-accent-red text-white">The Brand Maniacs</th>
                  </tr>
                </thead>
                <tbody className="font-bold text-sm">
                  <tr>
                    <td className="p-4 border-2 border-foreground">Creative Testing Velocity</td>
                    <td className="p-4 border-2 border-foreground text-center opacity-60">2–4 static ads per month</td>
                    <td className="p-4 border-2 border-foreground text-center text-accent-red font-black">15–20 modular video hooks/week</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-foreground">Landing Page Optimization</td>
                    <td className="p-4 border-2 border-foreground text-center opacity-60">Sends traffic to homepage / Shopify PDP</td>
                    <td className="p-4 border-2 border-foreground text-center text-accent-blue font-black">Custom sub-second edge landing funnels</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-foreground">Conversion Attribution</td>
                    <td className="p-4 border-2 border-foreground text-center opacity-60">Basic browser pixel (loses 30% data)</td>
                    <td className="p-4 border-2 border-foreground text-center text-green-600 font-black">Server-to-Server (S2S) closed-loop data</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-foreground">Retention Engine</td>
                    <td className="p-4 border-2 border-foreground text-center opacity-60">Blames product quality for low repeat</td>
                    <td className="p-4 border-2 border-foreground text-center text-accent-red font-black">Automated WhatsApp & Klaviyo LTV funnels</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-2 border-foreground">Accountability Metric</td>
                    <td className="p-4 border-2 border-foreground text-center opacity-60">Vanity ROAS / In-platform clicks</td>
                    <td className="p-4 border-2 border-foreground text-center font-black bg-accent-yellow">Blended MER & Net Contribution Margin</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 4. D2C FAQS (AEO & GOOGLE SNIPPETS) */}
        <section className="py-24 border-b-2 border-foreground bg-[#F5F5F5] text-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <span className="inline-block border-2 border-black font-black text-xs uppercase tracking-widest px-3 py-1 mb-4 bg-accent-yellow text-black">
                TRANSPARENCY FIRST
              </span>
              <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter leading-tight">
                Frequently Asked <br className="hidden md:block" />
                <span className="text-accent-red">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              <details className="group border-4 border-black p-6 bg-white shadow-[6px_6px_0_0_#000] cursor-pointer">
                <summary className="flex justify-between items-center font-heading font-black text-lg md:text-xl uppercase tracking-tight list-none">
                  <span>What does a D2C marketing agency do?</span>
                  <span className="text-2xl transition-transform group-open:rotate-45 font-mono">+</span>
                </summary>
                <p className="mt-4 font-bold opacity-80 text-base leading-relaxed border-t-2 border-black/10 pt-4">
                  A D2C (Direct-to-Consumer) marketing agency helps consumer brands acquire, convert, and retain customers through owned digital channels. Rather than just running ad spend, a full-service D2C growth studio engineers high-velocity UGC creative testing, optimizes product page conversion rates (CVR), fixes server-side tracking (CAPI/S2S), and builds retention workflows (email and WhatsApp) to maximize Customer Lifetime Value (LTV).
                </p>
              </details>

              <details className="group border-4 border-black p-6 bg-white shadow-[6px_6px_0_0_#000] cursor-pointer">
                <summary className="flex justify-between items-center font-heading font-black text-lg md:text-xl uppercase tracking-tight list-none">
                  <span>How do you lower Customer Acquisition Cost (CAC) for D2C brands?</span>
                  <span className="text-2xl transition-transform group-open:rotate-45 font-mono">+</span>
                </summary>
                <p className="mt-4 font-bold opacity-80 text-base leading-relaxed border-t-2 border-black/10 pt-4">
                  We lower CAC by solving the conversion leak before increasing ad spend. This includes: 1) Testing 15–20 modular ad creative hooks weekly to find breakout performers, 2) Building dedicated, lightning-fast landing pages instead of dumping ad traffic onto slow homepages, 3) Implementing first-party Server-to-Server tracking to feed clean signal back to Meta's algorithm, and 4) Designing post-purchase upsell funnels to increase initial Average Order Value (AOV).
                </p>
              </details>

              <details className="group border-4 border-black p-6 bg-white shadow-[6px_6px_0_0_#000] cursor-pointer">
                <summary className="flex justify-between items-center font-heading font-black text-lg md:text-xl uppercase tracking-tight list-none">
                  <span>What is a realistic ROAS benchmark for scaling D2C e-commerce in 2026?</span>
                  <span className="text-2xl transition-transform group-open:rotate-45 font-mono">+</span>
                </summary>
                <p className="mt-4 font-bold opacity-80 text-base leading-relaxed border-t-2 border-black/10 pt-4">
                  In 2026, sustainable D2C scaling requires looking at Blended ROAS (MER - Marketing Efficiency Ratio) rather than in-platform vanity metrics. A healthy first-order ROAS typically ranges between 2.2x to 3.5x for consumer goods, with backend 60-day LTV expanding total portfolio ROAS to 4x+. We engineer systems built to maintain profitability as monthly spend scales beyond ₹10L–₹50L+ ($15k–$75k+).
                </p>
              </details>

              <details className="group border-4 border-black p-6 bg-white shadow-[6px_6px_0_0_#000] cursor-pointer">
                <summary className="flex justify-between items-center font-heading font-black text-lg md:text-xl uppercase tracking-tight list-none">
                  <span>Do you work with D2C brands in the US, UK, and UAE?</span>
                  <span className="text-2xl transition-transform group-open:rotate-45 font-mono">+</span>
                </summary>
                <p className="mt-4 font-bold opacity-80 text-base leading-relaxed border-t-2 border-black/10 pt-4">
                  Yes. Our studio operates globally, partnering with high-growth consumer brands across the United States, United Kingdom, UAE, and India. We provide 24/7 creative velocity, behavioral ad targeting, and edge-hosted conversion infrastructure designed for international scale.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Global Components */}
        <ResultsShowcase />
        <FinalCTA />
      </main>
    </div>
  );
}