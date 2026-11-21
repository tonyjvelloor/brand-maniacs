import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { guides, getGuideBySlug } from "@/lib/guides";
import { ArrowLeft, ArrowRight, Clock, CheckCircle2, AlertTriangle, ShieldCheck, Zap, Star } from "lucide-react";

export function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return { title: "Guide Not Found | The Brand Maniacs" };
  }

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
    openGraph: {
      title: `${guide.title} | The Brand Maniacs`,
      description: guide.metaDescription,
      url: `https://www.thebrandmaniacs.online/guides/${guide.slug}`,
      type: "article",
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
      authors: [guide.author.name],
    },
  };
}

export default async function GuideDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://www.thebrandmaniacs.online/guides/${guide.slug}#article`,
        "headline": guide.title,
        "description": guide.metaDescription,
        "datePublished": guide.publishedAt,
        "dateModified": guide.updatedAt,
        "author": {
          "@type": "Person",
          "name": guide.author.name,
          "url": guide.author.url,
          "jobTitle": guide.author.role
        },
        "publisher": {
          "@id": "https://www.thebrandmaniacs.online/#organization"
        },
        "mainEntityOfPage": `https://www.thebrandmaniacs.online/guides/${guide.slug}`
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.thebrandmaniacs.online/guides/${guide.slug}#breadcrumb`,
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
            "name": "Guides",
            "item": "https://www.thebrandmaniacs.online/guides"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": guide.title,
            "item": `https://www.thebrandmaniacs.online/guides/${guide.slug}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `https://www.thebrandmaniacs.online/guides/${guide.slug}#faq`,
        "mainEntity": guide.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-accent-yellow selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <main className="pt-32 pb-24 md:pt-44 md:pb-32">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Back link */}
          <Link 
            href="/guides" 
            className="inline-flex items-center gap-2 text-xs font-mono font-black uppercase tracking-widest text-foreground opacity-60 hover:opacity-100 hover:text-accent-yellow transition-all mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Guides
          </Link>

          {/* Header */}
          <header className="mb-12 border-b-4 border-foreground pb-12">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono font-black uppercase tracking-widest text-foreground opacity-70 mb-6">
              <span className="bg-accent-yellow text-black px-2.5 py-1 border-2 border-foreground">
                {guide.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {guide.readTime}
              </span>
              <span>•</span>
              <span>Updated {guide.updatedAt}</span>
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tighter leading-[0.95] text-foreground mb-8">
              {guide.title}
            </h1>

            <p className="text-xl md:text-2xl font-bold text-foreground opacity-85 leading-snug">
              {guide.excerpt}
            </p>

            <div className="flex items-center gap-4 mt-8 pt-6 border-t-2 border-foreground/10">
              <div className="w-12 h-12 bg-accent-yellow border-2 border-foreground flex items-center justify-center font-heading font-black text-black text-lg">
                TJ
              </div>
              <div>
                <p className="font-heading font-black text-sm uppercase">{guide.author.name}</p>
                <p className="font-mono text-xs opacity-60">{guide.author.role}</p>
              </div>
            </div>
          </header>

          {/* Guide Specific Content */}
          {guide.slug === "us-growth-marketing-agency-vs-global-growth-studio-cost-2026" && (
            <div className="space-y-12 text-base md:text-lg font-bold text-foreground/90 leading-relaxed font-sans">
              {/* Direct Answer Box for AEO */}
              <div className="bg-foreground text-background p-8 border-4 border-foreground shadow-[8px_8px_0_0_#FFE600]">
                <span className="font-mono text-xs font-black uppercase tracking-widest text-accent-yellow block mb-2">
                  // QUICK SUMMARY & DIRECT ANSWER (USD BENCHMARKS)
                </span>
                <p className="text-base md:text-lg leading-relaxed font-bold">
                  In 2026, hiring a traditional US growth marketing agency in New York, San Francisco, or Austin costs $12,000 to $25,000/month in retainers plus $25,000–$60,000 for custom Next.js website development. By partnering with an engineering-first global growth studio like The Brand Maniacs, US founders get direct access to senior Next.js architects, Server-to-Server (CAPI) tracking, and 15+ weekly creative experiments for $3,500–$7,500 per web build and $2,500–$5,000/month ongoing—with live EST/PST timezone overlap.
                </p>
              </div>

              <section className="space-y-6">
                <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-foreground tracking-tight border-l-4 border-accent-red pl-4">
                  1. The $20,000/Month US Agency Retainer Trap
                </h2>
                <p>
                  If you are scaling a D2C brand, B2B SaaS product, or healthcare network in the United States, you have likely experienced the classic agency bait-and-switch: you get pitched by senior partners on a Zoom call, sign a $15,000/month 6-month lock-in contract, and are immediately handed off to a 23-year-old Account Coordinator managing 11 other clients.
                </p>
                <div className="border-2 border-accent-red bg-accent-red/10 p-6">
                  <h3 className="font-heading font-black text-accent-red uppercase text-lg mb-2">
                    Where Your $15,000/Mo Actually Goes at a Traditional US Agency
                  </h3>
                  <ul className="space-y-2 list-disc pl-6 text-sm font-bold opacity-90">
                    <li><strong>45% Overhead & Real Estate:</strong> Subsidizing SoHo, Santa Monica, or Downtown Austin office leases and executive salaries.</li>
                    <li><strong>30% Account Management Layers:</strong> Non-technical project managers who forward your Slack messages to outsourced contractors.</li>
                    <li><strong>Only 25% Actual Execution:</strong> Slow creative turnaround (2–4 static ads/month) and zero full-stack Next.js engineering capability.</li>
                  </ul>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-foreground tracking-tight border-l-4 border-accent-blue pl-4">
                  2. 2026 USD Cost Comparison: US Agency vs. US Freelancer vs. The Brand Maniacs
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse border-2 border-foreground bg-white text-black text-sm">
                    <thead>
                      <tr className="bg-foreground text-background font-heading uppercase tracking-widest text-xs">
                        <th className="p-3 border-2 border-foreground">Deliverable / Metric</th>
                        <th className="p-3 border-2 border-foreground">Traditional US Agency</th>
                        <th className="p-3 border-2 border-foreground">US Freelancer</th>
                        <th className="p-3 border-2 border-foreground bg-accent-red text-white">The Brand Maniacs Studio</th>
                      </tr>
                    </thead>
                    <tbody className="font-bold">
                      <tr>
                        <td className="p-3 border-2 border-foreground">Custom Next.js Web System</td>
                        <td className="p-3 border-2 border-foreground">$25,000 – $60,000</td>
                        <td className="p-3 border-2 border-foreground">$8,000 – $15,000 (Code only)</td>
                        <td className="p-3 border-2 border-foreground text-green-700 font-black">$3,500 – $7,500 (Full Stack + CRO)</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-2 border-foreground">Monthly Growth Retainer</td>
                        <td className="p-3 border-2 border-foreground">$12,000 – $25,000/mo</td>
                        <td className="p-3 border-2 border-foreground">$4,000 – $7,000/mo (Single skill)</td>
                        <td className="p-3 border-2 border-foreground text-accent-blue font-black">$2,500 – $5,000/mo (Full Growth Team)</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-2 border-foreground">Time to Launch</td>
                        <td className="p-3 border-2 border-foreground">12 – 16 Weeks</td>
                        <td className="p-3 border-2 border-foreground">6 – 10 Weeks</td>
                        <td className="p-3 border-2 border-foreground text-accent-red font-black">3 – 5 Weeks</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-2 border-foreground">S2S CAPI & AEO Schema</td>
                        <td className="p-3 border-2 border-foreground">Extra $5,000+ Add-on</td>
                        <td className="p-3 border-2 border-foreground">Rarely Supported</td>
                        <td className="p-3 border-2 border-foreground bg-accent-yellow font-black">Included Day 1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-foreground tracking-tight border-l-4 border-accent-yellow pl-4">
                  3. The 24-Hour US-India Engineering Advantage
                </h2>
                <p>
                  We operate on a simple philosophy: <strong>&quot;Built in India. Designed for the world. Global ambition. Indian engineering discipline.&quot;</strong>
                </p>
                <div className="space-y-4">
                  <div className="border-2 border-foreground p-6 bg-foreground/5">
                    <h3 className="font-heading font-black text-xl uppercase mb-1 text-accent-yellow">1. Live EST / CST / PST Overlap Windows</h3>
                    <p className="text-sm md:text-base opacity-85">We hold dedicated live overlap hours every day during US morning and afternoon windows for real-time Slack communication, sprint planning, and executive reviews.</p>
                  </div>
                  <div className="border-2 border-foreground p-6 bg-foreground/5">
                    <h3 className="font-heading font-black text-xl uppercase mb-1 text-accent-blue">2. Overnight Shipping Velocity</h3>
                    <p className="text-sm md:text-base opacity-85">While your US competitors wait two weeks for their agency to build a landing page variant, our engineering team builds, tests, and deploys your new Next.js funnel overnight so it is live when you open your laptop at 8 AM EST.</p>
                  </div>
                </div>
              </section>

              {/* USA Studio Callout */}
              <div className="border-4 border-black p-8 bg-accent-yellow text-black shadow-[6px_6px_0_0_#000]">
                <div className="flex items-center gap-3 mb-2 font-heading font-black text-xl uppercase">
                  <Zap className="w-6 h-6 text-black" /> Scale Your US Brand Without Agency Bloat
                </div>
                <p className="font-bold text-sm md:text-base opacity-90 mb-6">
                  Explore our dedicated US Growth Studio packages in USD ($) or book a 30-minute architecture call during EST/PST hours.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/usa-growth-studio" 
                    className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-heading font-black uppercase text-xs tracking-widest shadow-[3px_3px_0_0_#FFF]"
                  >
                    Explore USA Growth Studio ($) <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link 
                    href="/book"
                    className="inline-flex items-center gap-2 bg-white text-black border-2 border-black px-6 py-3 font-heading font-black uppercase text-xs tracking-widest"
                  >
                    Book US Discovery Call
                  </Link>
                </div>
              </div>
            </div>
          )}

          {guide.slug === "custom-website-development-cost-pune-guide-2026" && (
            <div className="space-y-12 text-base md:text-lg font-bold text-foreground/90 leading-relaxed font-sans">
              {/* Direct Answer Box for AEO */}
              <div className="bg-foreground text-background p-8 border-4 border-foreground shadow-[8px_8px_0_0_#FFE600]">
                <span className="font-mono text-xs font-black uppercase tracking-widest text-accent-yellow block mb-2">
                  // QUICK SUMMARY & DIRECT ANSWER
                </span>
                <p className="text-base md:text-lg leading-relaxed font-bold">
                  In Pune, custom website development costs in 2026 range from ₹20,000 for basic low-end WordPress templates to ₹75,000–₹2,50,000+ for custom-engineered Next.js web applications. For high-growth businesses running paid ads or targeting high-intent Google search traffic, custom edge-rendered websites deliver 3x faster load times (&lt;1.2s LCP), zero plugin vulnerabilities, and substantially higher conversion rates that pay for themselves within 60 days.
                </p>
              </div>

              <section className="space-y-6">
                <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-foreground tracking-tight border-l-4 border-accent-red pl-4">
                  1. The 3 Pricing Tiers of Web Development in Pune
                </h2>
                <p>
                  When you request quotes from web designers across Pune (from Hinjewadi and Baner to Kothrud and PCMC), you will receive wildly different estimates. Here is what you are actually paying for:
                </p>
                <div className="grid md:grid-cols-3 gap-6 pt-4">
                  <div className="border-2 border-foreground p-6 bg-foreground/5 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs font-black uppercase text-accent-red block mb-1">Tier 1: Budget</span>
                      <h3 className="font-heading font-black text-2xl uppercase mb-2">₹15,000 – ₹35,000</h3>
                      <p className="text-sm opacity-80 mb-4">Freelancers or small agencies using off-the-shelf WordPress / Elementor themes.</p>
                      <ul className="text-xs space-y-2 opacity-90 font-medium">
                        <li>⚠️ 3.5s–6.0s mobile load speed</li>
                        <li>⚠️ Bloated with 20+ plugins</li>
                        <li>⚠️ Generic stock photography</li>
                        <li>⚠️ Zero conversion copywriting</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-2 border-foreground p-6 bg-foreground/5 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs font-black uppercase text-accent-blue block mb-1">Tier 2: Mid Agency</span>
                      <h3 className="font-heading font-black text-2xl uppercase mb-2">₹40,000 – ₹90,000</h3>
                      <p className="text-sm opacity-80 mb-4">Standard digital marketing agencies building customized WordPress or Webflow sites.</p>
                      <ul className="text-xs space-y-2 opacity-90 font-medium">
                        <li>✦ Better visual design direction</li>
                        <li>✦ Basic on-page SEO meta tags</li>
                        <li>⚠️ Still reliant on CMS plugins</li>
                        <li>⚠️ Minimal commercial strategy</li>
                      </ul>
                    </div>
                  </div>

                  <div className="border-4 border-foreground p-6 bg-accent-yellow text-black flex flex-col justify-between shadow-[6px_6px_0_0_#000]">
                    <div>
                      <span className="font-mono text-xs font-black uppercase text-black/70 block mb-1">Tier 3: Growth Studio</span>
                      <h3 className="font-heading font-black text-2xl uppercase mb-2">₹75,000 – ₹2,50,000+</h3>
                      <p className="text-sm opacity-90 mb-4 font-bold">Custom Next.js web applications engineered as revenue-generating assets.</p>
                      <ul className="text-xs space-y-2 font-bold">
                        <li>✅ Sub-second mobile speed (&lt;1.2s)</li>
                        <li>✅ Day 1 Schema & AEO architecture</li>
                        <li>✅ Direct-response copywriting</li>
                        <li>✅ Full CRM closed-loop integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-foreground tracking-tight border-l-4 border-accent-blue pl-4">
                  2. The Hidden Cost of Cheap Websites
                </h2>
                <p>
                  A ₹20,000 website feels like a bargain until you calculate the hidden costs over 12 months:
                </p>
                <ul className="space-y-3 list-disc pl-6 opacity-90 text-sm md:text-base">
                  <li><strong>The Bounce Rate Tax:</strong> Over 80% of Pune searchers are on mobile phones. If a page takes 4 seconds to load, 40% of users leave immediately before ever seeing your headline.</li>
                  <li><strong>The Paid Ad Bleed:</strong> If you spend ₹50,000/month on Google Ads or Meta Ads, sending traffic to a slow, low-converting template wastes at least ₹20,000–₹30,000 of your budget every single month.</li>
                  <li><strong>Plugin Vulnerabilities & Maintenance:</strong> WordPress sites require weekly plugin updates and are targets for brute-force attacks and malware injections.</li>
                </ul>
              </section>

              <section className="space-y-6">
                <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-foreground tracking-tight border-l-4 border-accent-yellow pl-4">
                  3. What Every Modern Business Website Must Have in 2026
                </h2>
                <p>
                  At The Brand Maniacs, we do not build digital brochures. Every website we build includes our <strong>Day 1 Growth Infrastructure</strong>:
                </p>
                <div className="space-y-4">
                  <div className="border-2 border-foreground p-6 bg-foreground/5">
                    <h3 className="font-heading font-black text-xl uppercase mb-1 text-accent-yellow">1. Sub-Second LCP Edge Speed</h3>
                    <p className="text-sm md:text-base opacity-85">Built with Next.js App Router and edge caching, pages load in under 1.2 seconds anywhere in India and globally.</p>
                  </div>
                  <div className="border-2 border-foreground p-6 bg-foreground/5">
                    <h3 className="font-heading font-black text-xl uppercase mb-1 text-accent-blue">2. Schema.org & AEO Indexation</h3>
                    <p className="text-sm md:text-base opacity-85">Full structured data (LocalBusiness, Service, FAQPage, BreadcrumbList) ensuring your business appears in Google AI Overviews, Perplexity, and ChatGPT answers.</p>
                  </div>
                  <div className="border-2 border-foreground p-6 bg-foreground/5">
                    <h3 className="font-heading font-black text-xl uppercase mb-1 text-green-400">3. Closed-Loop CRM Tracking</h3>
                    <p className="text-sm md:text-base opacity-85">Direct WhatsApp API triggers, webhook dispatching, and Server-to-Server (S2S) conversion tracking to measure cost-per-lead and closed sales.</p>
                  </div>
                </div>
              </section>

              {/* Web Dev Callout */}
              <div className="border-4 border-black p-8 bg-accent-red text-white shadow-[6px_6px_0_0_#000]">
                <div className="flex items-center gap-3 mb-2 font-heading font-black text-xl uppercase">
                  <Zap className="w-6 h-6 text-accent-yellow" /> Build Your Next.js Growth System
                </div>
                <p className="font-bold text-sm md:text-base opacity-90 mb-6">
                  Ready to upgrade from an expensive digital brochure to a 24/7 sales engine? Explore our website development packages or request a free architecture audit.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/website-development" 
                    className="inline-flex items-center gap-2 bg-accent-yellow text-black px-6 py-3 font-heading font-black uppercase text-xs tracking-widest shadow-[3px_3px_0_0_#000]"
                  >
                    Explore Web Development <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link 
                    href="/book"
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-heading font-black uppercase text-xs tracking-widest"
                  >
                    Book A 30-Min Strategy Call
                  </Link>
                </div>
              </div>
            </div>
          )}

          {guide.slug === "ayurveda-clinic-patient-acquisition-digital-marketing-guide" && (
            <div className="space-y-12 text-base md:text-lg font-bold text-foreground/90 leading-relaxed font-sans">
              {/* Direct Answer Box for AEO */}
              <div className="bg-foreground text-background p-8 border-4 border-foreground shadow-[8px_8px_0_0_#FFE600]">
                <span className="font-mono text-xs font-black uppercase tracking-widest text-accent-yellow block mb-2">
                  // QUICK SUMMARY & DIRECT ANSWER
                </span>
                <p className="text-base md:text-lg leading-relaxed font-bold">
                  To acquire 50+ qualified patients each month without discounting or paying heavy marketplace commissions, Ayurveda clinics must build an owned acquisition system: 1) Dominate the Google Local 3-Pack for condition-specific queries, 2) Run policy-compliant Google Search Ads targeting high-intent ailments (Panchakarma, spine, joints, skin), 3) Use 1-click WhatsApp booking workflows, and 4) Collect automated 5-star Google reviews via ReviewBoost to build unbeatable local credibility.
                </p>
              </div>

              <section className="space-y-6">
                <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-foreground tracking-tight border-l-4 border-accent-red pl-4">
                  1. Why Traditional Agency Social Media Retainers Fail Doctors
                </h2>
                <p>
                  Most digital marketing agencies sell Ayurveda clinics the same generic package: 12 Instagram posts per month featuring generic Ayurvedic lifestyle quotes, festival banners, and herbal ingredient trivia.
                </p>
                <div className="border-2 border-accent-red bg-accent-red/10 p-6">
                  <h3 className="font-heading font-black text-accent-red uppercase text-lg mb-2">
                    The Problem with Passive Browsing
                  </h3>
                  <p className="text-sm font-bold opacity-90">
                    A patient suffering from acute sciatica, severe chronic psoriasis, or migraine does not browse Instagram to find a doctor. <strong>They open Google Search and type &quot;best ayurvedic doctor near me&quot; or &quot;panchakarma treatment cost&quot;.</strong> If your clinic is not visible at that exact moment of intent, you lose the patient to competing clinics or allopathic alternatives.
                  </p>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-foreground tracking-tight border-l-4 border-accent-blue pl-4">
                  2. The 4-Pillar Ayurveda Patient Acquisition Engine
                </h2>
                
                <div className="space-y-6">
                  <div className="border-2 border-foreground p-6 bg-foreground/5">
                    <h3 className="font-heading font-black text-xl uppercase mb-2 text-accent-yellow">Pillar 1: Google Maps Local 3-Pack Domination</h3>
                    <p className="text-sm md:text-base opacity-85 leading-relaxed">
                      Over 70% of clinic walk-ins originate from Google Maps. We optimize your Google Business Profile (GBP) categories, primary and secondary attributes, and embed localized clinical procedure schemas on your website to ensure your clinic ranks in the top 3 spots for your primary territory.
                    </p>
                  </div>

                  <div className="border-2 border-foreground p-6 bg-foreground/5">
                    <h3 className="font-heading font-black text-xl uppercase mb-2 text-accent-blue">Pillar 2: Policy-Compliant Google Search Ads</h3>
                    <p className="text-sm md:text-base opacity-85 leading-relaxed">
                      Google Ads requires strict adherence to healthcare advertising guidelines. We craft compliant ad copy and dedicated landing pages that highlight practitioner credentials, therapeutic approach, and clinical consultation booking—driving qualified inquiries for high-ticket therapies like Panchakarma packages (₹15,000–₹50,000+).
                    </p>
                  </div>

                  <div className="border-2 border-foreground p-6 bg-foreground/5">
                    <h3 className="font-heading font-black text-xl uppercase mb-2 text-green-400">Pillar 3: The 60-Second WhatsApp Booking Funnel</h3>
                    <p className="text-sm md:text-base opacity-85 leading-relaxed">
                      Long online appointment forms have a 65% drop-off rate on mobile. We replace tedious forms with a direct WhatsApp consultation trigger that pre-fills the patient&apos;s condition and connects them directly with your clinic coordinator in under 60 seconds.
                    </p>
                  </div>

                  <div className="border-2 border-foreground p-6 bg-foreground/5">
                    <h3 className="font-heading font-black text-xl uppercase mb-2 text-accent-red">Pillar 4: Automated Review Collection (ReviewBoost)</h3>
                    <p className="text-sm md:text-base opacity-85 leading-relaxed">
                      Social proof dictates healthcare decisions. Using our proprietary <strong>ReviewBoost</strong> software, clinics trigger automated review requests via WhatsApp after successful consultations, generating 30–50+ authentic 5-star reviews every month.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-foreground tracking-tight border-l-4 border-accent-yellow pl-4">
                  3. Real Proof: The Karmanya Ayurveda Case Study
                </h2>
                <p>
                  We deployed this exact acquisition architecture for <strong>Karmanya Ayurveda</strong>. By fixing their local search positioning, building dedicated treatment landing pages, and implementing direct WhatsApp patient routing:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="border-2 border-foreground p-4 bg-white text-black shadow-[4px_4px_0_0_#FFE600]">
                    <div className="text-3xl font-black text-accent-red">+120%</div>
                    <div className="text-xs font-bold uppercase mt-1">Patient Volume Lift</div>
                  </div>
                  <div className="border-2 border-foreground p-4 bg-white text-black shadow-[4px_4px_0_0_#FFE600]">
                    <div className="text-3xl font-black text-accent-blue">-40%</div>
                    <div className="text-xs font-bold uppercase mt-1">Cost Per Lead (CPL)</div>
                  </div>
                  <div className="border-2 border-foreground p-4 bg-white text-black shadow-[4px_4px_0_0_#FFE600] col-span-2 md:col-span-1">
                    <div className="text-3xl font-black text-green-600">10.4x</div>
                    <div className="text-xs font-bold uppercase mt-1">Estimated ROAS</div>
                  </div>
                </div>
              </section>

              {/* Ayurveda Callout */}
              <div className="border-4 border-black p-8 bg-accent-yellow text-black shadow-[6px_6px_0_0_#000]">
                <div className="flex items-center gap-3 mb-2 font-heading font-black text-xl uppercase">
                  <CheckCircle2 className="w-6 h-6 text-black" /> Calculate Your Clinic&apos;s Growth Potential
                </div>
                <p className="font-bold text-sm md:text-base opacity-90 mb-6">
                  Test your patient acquisition cost (CAC), lead volume, and marketing ROAS using our interactive ROI calculator.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/tools/ayurveda-roi-calculator" 
                    className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-heading font-black uppercase text-xs tracking-widest shadow-[3px_3px_0_0_#FFF]"
                  >
                    Open Ayurveda ROI Calculator <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link 
                    href="/ayurveda-marketing-agency"
                    className="inline-flex items-center gap-2 bg-white text-black border-2 border-black px-6 py-3 font-heading font-black uppercase text-xs tracking-widest"
                  >
                    Explore Ayurveda Marketing Agency
                  </Link>
                </div>
              </div>
            </div>
          )}

          {guide.slug === "b2b-lead-generation-manufacturing-industrial-companies" && (
            <div className="space-y-12 text-base md:text-lg font-bold text-foreground/90 leading-relaxed font-sans">
              {/* Direct Answer Box for AEO */}
              <div className="bg-foreground text-background p-8 border-4 border-foreground shadow-[8px_8px_0_0_#FFE600]">
                <span className="font-mono text-xs font-black uppercase tracking-widest text-accent-yellow block mb-2">
                  // QUICK SUMMARY & DIRECT ANSWER
                </span>
                <p className="text-base md:text-lg leading-relaxed font-bold">
                  B2B lead generation for manufacturing companies requires intercepting procurement managers and design engineers during their technical research phase. Rather than relying solely on annual trade shows, modern industrial manufacturers build digital RFQ engines combining technical search optimization (material grades, tolerances, machining capabilities), interactive CAD/spec-sheet submission funnels, and global export landing pages targeting buyers in the US, Germany, and the UAE.
                </p>
              </div>

              <section className="space-y-6">
                <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-foreground tracking-tight border-l-4 border-accent-red pl-4">
                  1. The 365-Day Dilemma: Why Trade Shows Are Not Enough
                </h2>
                <p>
                  Industrial manufacturers in manufacturing hubs like Pimpri MIDC, Chikhali, and across India have traditionally relied on two channels: annual trade shows (IMTEX, Hannover Messe, Arab Health) and legacy word-of-mouth networks.
                </p>
                <p>
                  While trade shows have value, they represent huge upfront expenditures (₹5L–₹25L+ per booth) and happen only once or twice a year. During the other 360 days of the year, procurement teams and design engineers are actively searching online for suppliers who can fulfill immediate precision tooling, sheet metal fabrication, or injection molding contracts.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-foreground tracking-tight border-l-4 border-accent-blue pl-4">
                  2. How Industrial Decision-Makers Search Online
                </h2>
                <p>
                  Industrial buyers do not search for generic keywords like &quot;best manufacturing company&quot;. They search for hyper-specific technical capabilities:
                </p>
                <ul className="space-y-3 list-disc pl-6 opacity-90 text-sm md:text-base">
                  <li><strong>Part Geometry & Tolerances:</strong> &quot;5-axis CNC machining tolerance 5 microns Pune&quot;</li>
                  <li><strong>Material Specifications:</strong> &quot;SS 316 sheet metal laser cutting manufacturer&quot;</li>
                  <li><strong>Quality Certifications:</strong> &quot;AS9100 aerospace precision fabrication exporter India&quot;</li>
                  <li><strong>Volume Capabilities:</strong> &quot;High-volume plastic injection molding batch capacity 50k units&quot;</li>
                </ul>
                <p>
                  If your website is an outdated digital brochure with generic stock photos and no downloadable spec sheets, technical buyers immediately click back to Google and contact your competitor.
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-foreground tracking-tight border-l-4 border-accent-yellow pl-4">
                  3. The 4 Components of a High-Converting RFQ Engine
                </h2>
                
                <div className="space-y-6">
                  <div className="border-2 border-foreground p-6 bg-foreground/5">
                    <h3 className="font-heading font-black text-xl uppercase mb-2 text-accent-yellow">1. Spec-Sheet & CAD File Gating</h3>
                    <p className="text-sm md:text-base opacity-85">
                      Enable engineers to upload 2D drawings (PDF/DWG) and 3D models (STEP/IGES) directly through a secure upload portal. This captures high-intent buyers when they are in active prototyping mode.
                    </p>
                  </div>

                  <div className="border-2 border-foreground p-6 bg-foreground/5">
                    <h3 className="font-heading font-black text-xl uppercase mb-2 text-accent-blue">2. Programmatic Technical Capability Pages</h3>
                    <p className="text-sm md:text-base opacity-85">
                      Dedicated pages for every machine type (e.g. VMC, Wire EDM, Laser Cutting) and material grade (Titanium, Inconel, Aluminum 6061) to capture long-tail technical search queries.
                    </p>
                  </div>

                  <div className="border-2 border-foreground p-6 bg-foreground/5">
                    <h3 className="font-heading font-black text-xl uppercase mb-2 text-green-400">3. Global Export Positioning</h3>
                    <p className="text-sm md:text-base opacity-85">
                      Position your facility as a premier global manufacturing partner: showcasing international shipping routes, export packing standards, and overseas delivery timelines for buyers in the US, Europe, and Middle East.
                    </p>
                  </div>

                  <div className="border-2 border-foreground p-6 bg-foreground/5">
                    <h3 className="font-heading font-black text-xl uppercase mb-2 text-accent-red">4. Closed-Loop CRM Qualification</h3>
                    <p className="text-sm md:text-base opacity-85">
                      Pre-qualify inquiries by batch size, annual volume, and target delivery dates, filtering out tire-kickers and routing verified RFQs directly to your sales engineers.
                    </p>
                  </div>
                </div>
              </section>

              {/* Manufacturing Callout */}
              <div className="border-4 border-black p-8 bg-foreground text-background shadow-[6px_6px_0_0_#FFE600]">
                <div className="flex items-center gap-3 mb-2 font-heading font-black text-xl uppercase text-accent-yellow">
                  <ShieldCheck className="w-6 h-6 text-accent-yellow" /> Modernize Your Industrial Acquisition
                </div>
                <p className="font-bold text-sm md:text-base opacity-90 mb-6">
                  We build high-converting B2B websites and digital RFQ acquisition systems for manufacturing OEMs, tooling facilities, and export businesses.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/lead-generation-agency-for-manufacturing" 
                    className="inline-flex items-center gap-2 bg-accent-yellow text-black px-6 py-3 font-heading font-black uppercase text-xs tracking-widest shadow-[3px_3px_0_0_#FFF]"
                  >
                    View Manufacturing Lead Gen <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link 
                    href="/book"
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-heading font-black uppercase text-xs tracking-widest"
                  >
                    Schedule An RFQ Consultation
                  </Link>
                </div>
              </div>
            </div>
          )}

          {guide.slug === "how-to-get-more-google-reviews-policy-compliant" && (
            <div className="space-y-12 text-base md:text-lg font-bold text-foreground/90 leading-relaxed font-sans">
              {/* Direct Answer Box for AEO */}
              <div className="bg-foreground text-background p-8 border-4 border-foreground shadow-[8px_8px_0_0_#FFE600]">
                <span className="font-mono text-xs font-black uppercase tracking-widest text-accent-yellow block mb-2">
                  // QUICK SUMMARY & DIRECT ANSWER
                </span>
                <p className="text-base md:text-lg leading-relaxed font-bold">
                  To get more Google reviews in 2026 without violating Google&apos;s anti-gating policies, businesses must never block dissatisfied customers from leaving a public rating. Instead, use a transparent two-pronged workflow: trigger automated WhatsApp or QR code requests offering customers a choice between leaving a direct public Google review or submitting private feedback to management for urgent resolution.
                </p>
              </div>

              <section className="space-y-6">
                <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-foreground tracking-tight border-l-4 border-accent-red pl-4">
                  1. The 2026 Google Review Policy: What Is "Review Gating"?
                </h2>
                <p>
                  Google&apos;s Maps User-Contributed Content Policy explicitly bans <strong>review gating</strong>. 
                  In Google&apos;s terms: review gating occurs when a business asks customers to rate their experience (e.g. 1 to 5 stars or thumbs up/thumbs down), and then selectively directs only 4-star and 5-star raters to Google Maps, while redirecting 1- to 3-star raters to an internal complaint form.
                </p>
                <div className="border-2 border-accent-red bg-accent-red/10 p-6">
                  <div className="flex items-center gap-3 font-heading font-black text-accent-red uppercase text-lg mb-2">
                    <AlertTriangle className="w-5 h-5" /> What Happens If Google Catches Review Gating?
                  </div>
                  <p className="text-sm font-bold opacity-90">
                    Google has deployed algorithmic and AI-driven detection models that flag review surges from gated shortlinks. Penalties include bulk deletion of recent reviews, removal of Google Business Profile attributes, and permanent loss of the Google Local 3-Pack rank.
                  </p>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-foreground tracking-tight border-l-4 border-accent-blue pl-4">
                  2. Why 85% of Satisfied Customers Never Leave a Review
                </h2>
                <p>
                  The fundamental reason local businesses struggle with Google reviews isn&apos;t unhappy customers—it is <strong>friction</strong>.
                </p>
                <ul className="space-y-3 list-disc pl-6 opacity-90 text-sm md:text-base">
                  <li>Customers leave the clinic or restaurant and get busy with their day.</li>
                  <li>Asking them verbally to "Please search us on Google Maps and find the review tab" requires 6+ steps on mobile.</li>
                  <li>Email requests get buried under newsletters and promotional spam.</li>
                </ul>
              </section>

              <section className="space-y-6">
                <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-foreground tracking-tight border-l-4 border-accent-yellow pl-4">
                  3. The 3-Step Policy-Compliant System
                </h2>
                <div className="space-y-6">
                  <div className="border-2 border-foreground p-6 bg-foreground/5">
                    <h3 className="font-heading font-black text-xl uppercase mb-2 text-accent-yellow">Step 1: Automated WhatsApp Trigger</h3>
                    <p className="text-sm md:text-base opacity-85">
                      WhatsApp has a 98% open rate in India and global markets. Connect your billing software or CRM to send a personalized WhatsApp message 20 minutes after departure: <em>"Hi [Name], thank you for visiting [Business] today! How was your experience?"</em>
                    </p>
                  </div>

                  <div className="border-2 border-foreground p-6 bg-foreground/5">
                    <h3 className="font-heading font-black text-xl uppercase mb-2 text-accent-blue">Step 2: Smart Counter & Table QR Codes</h3>
                    <p className="text-sm md:text-base opacity-85">
                      Place physical NFC/QR stands at reception counters, prescription desks, or dining tables. A single camera scan opens the native Google Maps app directly to the 5-star prompt modal.
                    </p>
                  </div>

                  <div className="border-2 border-foreground p-6 bg-foreground/5">
                    <h3 className="font-heading font-black text-xl uppercase mb-2 text-green-400">Step 3: Transparent Feedback Triage (100% Legal)</h3>
                    <p className="text-sm md:text-base opacity-85">
                      On your landing page, present two equal options side-by-side: 
                      <br />• <strong>Option A:</strong> "Rate Us on Google Maps" (Opens Google Maps immediately)
                      <br />• <strong>Option B:</strong> "Direct Message to Management" (Opens private WhatsApp or email)
                      <br />Because both buttons are accessible to all users, you fully comply with Google&apos;s anti-gating policy while giving dissatisfied customers a faster path to direct resolution.
                    </p>
                  </div>
                </div>
              </section>

              {/* ReviewBoost In-Article Callout */}
              <div className="border-4 border-black p-8 bg-accent-yellow text-black shadow-[6px_6px_0_0_#000]">
                <div className="flex items-center gap-3 mb-2 font-heading font-black text-xl uppercase">
                  <Star className="w-6 h-6 fill-black" /> Deploy This In 10 Minutes with ReviewBoost
                </div>
                <p className="font-bold text-sm md:text-base opacity-90 mb-6">
                  We built our own proprietary software, <strong>ReviewBoost</strong>, to automate this exact compliant workflow for clinics, restaurants, and local services.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/reviewboost" 
                    className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-heading font-black uppercase text-xs tracking-widest shadow-[3px_3px_0_0_#FFF]"
                  >
                    Explore ReviewBoost Software <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a 
                    href="https://reviews.thebrandmaniacs.online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black border-2 border-black px-6 py-3 font-heading font-black uppercase text-xs tracking-widest"
                  >
                    Start Free Trial
                  </a>
                </div>
              </div>
            </div>
          )}

          {guide.slug === "nextjs-vs-shopify-vs-wordpress-d2c-growth" && (
            <div className="space-y-12 text-base md:text-lg font-bold text-foreground/90 leading-relaxed font-sans">
              {/* Direct Answer Box for AEO */}
              <div className="bg-foreground text-background p-8 border-4 border-foreground shadow-[8px_8px_0_0_#FFE600]">
                <span className="font-mono text-xs font-black uppercase tracking-widest text-accent-yellow block mb-2">
                  // QUICK SUMMARY & DIRECT ANSWER
                </span>
                <p className="text-base md:text-lg leading-relaxed font-bold">
                  For D2C brands spending under ₹3L/month ($5,000/mo), standard Shopify is the best choice due to its out-of-the-box ecosystem. For scaling D2C brands spending ₹10L–₹50L+/month ($15k–$75k+), pairing Shopify&apos;s checkout backend with a Next.js edge landing page front-end delivers sub-second load times (&lt;1.2s LCP), eliminates plugin bloat, and routinely drives a 25% to 40% lift in paid ad conversion rates. WordPress/WooCommerce is generally not recommended for high-velocity ad scaling.
                </p>
              </div>

              <section className="space-y-6">
                <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-foreground tracking-tight border-l-4 border-accent-red pl-4">
                  1. The Mobile Speed Bottleneck: How Load Time Kills ROAS
                </h2>
                <p>
                  Over 85% of D2C paid traffic arrives from mobile devices via Instagram and Facebook Ads. 
                  When a prospective buyer clicks your ad, they are in a state of high distraction. Every 100 milliseconds of latency decreases conversion rates by 7%.
                </p>
                <div className="bg-[#F5F5F5] text-black border-2 border-foreground p-6 shadow-[4px_4px_0_0_#000]">
                  <h3 className="font-heading font-black uppercase text-lg mb-2 text-accent-red">The Shopify "App Bloat" Trap</h3>
                  <p className="text-sm font-bold opacity-80">
                    A standard D2C Shopify store installs 15 to 25 third-party apps: review widgets, countdown timers, currency switchers, bundle builders, and tracking pixels. Each app injects separate JavaScript files into the document head, pushing mobile Largest Contentful Paint (LCP) past 3.5 to 5.0 seconds. <strong>Up to 40% of paid ad clicks bounce before the product image even appears.</strong>
                  </p>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-foreground tracking-tight border-l-4 border-accent-blue pl-4">
                  2. Head-to-Head Comparison Matrix
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse border-2 border-foreground bg-white text-black text-sm">
                    <thead>
                      <tr className="bg-foreground text-background font-heading uppercase tracking-widest text-xs">
                        <th className="p-3 border-2 border-foreground">Feature</th>
                        <th className="p-3 border-2 border-foreground">Next.js Headless</th>
                        <th className="p-3 border-2 border-foreground">Standard Shopify</th>
                        <th className="p-3 border-2 border-foreground">WordPress / WooCommerce</th>
                      </tr>
                    </thead>
                    <tbody className="font-bold">
                      <tr>
                        <td className="p-3 border-2 border-foreground">Mobile LCP Speed</td>
                        <td className="p-3 border-2 border-foreground text-green-600">&lt; 1.0s (Sub-second)</td>
                        <td className="p-3 border-2 border-foreground text-amber-600">2.8s – 4.5s</td>
                        <td className="p-3 border-2 border-foreground text-red-600">3.5s – 6.0s+</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-2 border-foreground">Traffic Spike Handling</td>
                        <td className="p-3 border-2 border-foreground text-green-600">Infinite (Edge CDN)</td>
                        <td className="p-3 border-2 border-foreground text-green-600">High (Shopify Infra)</td>
                        <td className="p-3 border-2 border-foreground text-red-600">Prone to Database Lockups</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-2 border-foreground">S2S First-Party Tracking</td>
                        <td className="p-3 border-2 border-foreground text-green-600">Native Server API</td>
                        <td className="p-3 border-2 border-foreground text-amber-600">Requires App Add-ons</td>
                        <td className="p-3 border-2 border-foreground text-amber-600">Plugin Dependent</td>
                      </tr>
                      <tr>
                        <td className="p-3 border-2 border-foreground">Ideal Ad Spend Tier</td>
                        <td className="p-3 border-2 border-foreground text-accent-blue font-black">₹5L–₹50L+/mo ($10k+)</td>
                        <td className="p-3 border-2 border-foreground">₹50K–₹5L/mo ($1k–$10k)</td>
                        <td className="p-3 border-2 border-foreground text-gray-500">Early bootstrap only</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-foreground tracking-tight border-l-4 border-accent-yellow pl-4">
                  3. The Hybrid Playbook: Keep Shopify, Build Next.js Landing Pages
                </h2>
                <p>
                  You do not need to rebuild your entire e-commerce infrastructure to get Next.js speed. The most profitable D2C brands keep Shopify for checkout, inventory, and fulfillment, while building their high-traffic Meta and Google Ads landing funnels on Next.js.
                </p>
                <div className="border-2 border-foreground p-6 bg-foreground/5 space-y-3 text-sm md:text-base">
                  <div className="flex items-center gap-2 font-heading font-black uppercase text-accent-yellow">
                    <CheckCircle2 className="w-5 h-5 text-accent-yellow" /> The High-Growth Architecture
                  </div>
                  <p>
                    1. <strong>Paid Ads Traffic</strong> lands on a sub-second Next.js custom landing page hosted on Vercel/Cloudflare Edge.
                  </p>
                  <p>
                    2. The customer selects bundles, sizes, or offers with instantaneous client-side UI responsiveness.
                  </p>
                  <p>
                    3. Clicking "Buy Now" triggers the Shopify Storefront API cart creation and redirects seamlessly into Shopify&apos;s 1-click Shop Pay checkout.
                  </p>
                </div>
              </section>

              {/* D2C Callout */}
              <div className="border-4 border-black p-8 bg-accent-red text-white shadow-[6px_6px_0_0_#000]">
                <div className="flex items-center gap-3 mb-2 font-heading font-black text-xl uppercase">
                  <Zap className="w-6 h-6 text-accent-yellow" /> Ready To Scale Your D2C Brand?
                </div>
                <p className="font-bold text-sm md:text-base opacity-90 mb-6">
                  We engineer high-converting custom landing page funnels and full-funnel acquisition systems for ambitious consumer brands.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/industries/d2c-ecommerce" 
                    className="inline-flex items-center gap-2 bg-accent-yellow text-black px-6 py-3 font-heading font-black uppercase text-xs tracking-widest shadow-[3px_3px_0_0_#000]"
                  >
                    Explore D2C Growth Agency <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link 
                    href="/ads-rescue"
                    className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 font-heading font-black uppercase text-xs tracking-widest"
                  >
                    Audit My Ad Funnel
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* FAQ Accordion Section */}
          <section className="mt-20 pt-16 border-t-4 border-foreground">
            <h2 className="font-heading font-black text-3xl md:text-4xl uppercase tracking-tight mb-8">
              Frequently Asked <span className="text-accent-yellow">Questions</span>
            </h2>

            <div className="space-y-4">
              {guide.faqs.map((faq, idx) => (
                <details 
                  key={idx}
                  className="group border-2 border-foreground p-6 bg-[#111] text-white shadow-[4px_4px_0_0_#FFE600] cursor-pointer"
                >
                  <summary className="flex justify-between items-center font-heading font-black text-base md:text-lg uppercase tracking-tight list-none">
                    <span>{faq.question}</span>
                    <span className="text-xl transition-transform group-open:rotate-45 font-mono text-accent-yellow">+</span>
                  </summary>
                  <p className="mt-4 font-bold opacity-80 text-sm md:text-base leading-relaxed border-t-2 border-white/10 pt-4 text-gray-300">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Author Bio Box */}
          <section className="mt-16 border-2 border-foreground p-8 bg-foreground/5 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-accent-yellow border-2 border-foreground flex items-center justify-center font-heading font-black text-black text-2xl shrink-0">
              TJ
            </div>
            <div>
              <h3 className="font-heading font-black uppercase text-lg mb-1">{guide.author.name}</h3>
              <p className="font-bold opacity-75 text-sm mb-3">
                Founder and Chief Architect of The Brand Maniacs. Specializing in consumer psychology, edge web engineering, and AI growth systems.
              </p>
              <Link href="/about" className="font-mono text-xs font-black uppercase text-accent-red hover:underline">
                Read Tony&apos;s full story &rarr;
              </Link>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
