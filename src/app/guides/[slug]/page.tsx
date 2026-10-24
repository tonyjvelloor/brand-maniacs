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
