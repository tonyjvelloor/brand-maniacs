import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, QrCode, Smartphone, BarChart3, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "ReviewBoost — Automated Google Review Collection Software",
  description: "Turn happy customers into 5-star Google reviews on autopilot. ReviewBoost helps clinics, restaurants, and local businesses collect Google reviews via WhatsApp & QR codes.",
  alternates: {
    canonical: "/reviewboost",
  },
  openGraph: {
    title: "ReviewBoost | Automated Google Review Collection Engine",
    description: "Systematically scale your 5-star Google reviews, boost Local SEO 3-Pack rankings, and protect your reputation.",
    url: "https://www.thebrandmaniacs.online/reviewboost",
    type: "website",
  },
};

const reviewBoostSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.thebrandmaniacs.online/reviewboost#software",
      "name": "ReviewBoost by The Brand Maniacs",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, iOS, Android",
      "provider": {
        "@id": "https://www.thebrandmaniacs.online/#organization"
      },
      "description": "Automated Google review collection software for local businesses, clinics, and restaurants. Scales 5-star ratings via WhatsApp automation and QR codes.",
      "offers": {
        "@type": "Offer",
        "price": "29",
        "priceCurrency": "USD"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.thebrandmaniacs.online/reviewboost#breadcrumb",
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
          "name": "ReviewBoost",
          "item": "https://www.thebrandmaniacs.online/reviewboost"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.thebrandmaniacs.online/reviewboost#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does ReviewBoost collect Google reviews automatically?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ReviewBoost connects to your point of sale, CRM, or billing system to trigger automated review requests via WhatsApp or SMS. It also provides smart counter QR codes for in-person customer scanning. The system directs happy customers directly to your Google Business Profile review modal in one click."
          }
        },
        {
          "@type": "Question",
          "name": "How does ReviewBoost handle negative feedback?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ReviewBoost includes an internal feedback routing option that allows dissatisfied customers to submit private grievances directly to management before venting publicly on Google. This gives you the opportunity to resolve issues privately and preserve your 5-star public rating."
          }
        },
        {
          "@type": "Question",
          "name": "Do more Google reviews improve local Google Maps rankings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Google's local search algorithm weighs review count, review velocity, average star rating, and customer review keywords as critical ranking factors for the Google Local 3-Pack. Businesses that consistently generate authentic reviews outrank competitors in local search."
          }
        },
        {
          "@type": "Question",
          "name": "Can I embed Google reviews on my website using ReviewBoost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. ReviewBoost includes responsive, edge-cached review widgets and social proof badges that can be embedded on any Next.js, WordPress, or Shopify website to increase landing page conversion rates."
          }
        }
      ]
    }
  ]
};

export default function ReviewBoostPage() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-accent-yellow selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewBoostSchema) }}
      />
      
      <main>
        {/* 1. Hero */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b-2 border-foreground">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-yellow rounded-full blur-[140px] opacity-10 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 border-2 border-foreground font-black text-xs md:text-sm uppercase tracking-widest px-4 py-1.5 mb-8 bg-accent-yellow text-black shadow-[3px_3px_0_0_#000]">
                <Star className="w-4 h-4 fill-black" />
                <span>GOOGLE REPUTATION ENGINE · TBM SOFTWARE</span>
              </span>
              
              <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9] text-foreground mb-8">
                Turn Happy Customers Into <br />
                <span className="text-accent-yellow underline decoration-accent-red decoration-8 underline-offset-8">5-Star Google Reviews.</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-bold text-foreground opacity-85 leading-relaxed mb-10 max-w-2xl mx-auto">
                90% of happy customers never leave a review because the process is inconvenient. ReviewBoost automates requests via WhatsApp &amp; smart QR codes, scaling your 5-star volume and Local 3-Pack rankings.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="https://reviews.thebrandmaniacs.online/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 bg-accent-yellow text-black border-2 border-black font-black text-sm uppercase tracking-widest px-8 py-5 hover:bg-black hover:text-white transition-colors shadow-[4px_4px_0_0_#000] w-full sm:w-auto"
                >
                  Launch ReviewBoost Platform <ArrowRight className="w-4 h-4" />
                </a>
                <Link 
                  href="/book" 
                  className="inline-flex justify-center items-center gap-2 bg-foreground text-background border-2 border-foreground font-black text-sm uppercase tracking-widest px-8 py-5 hover:opacity-80 transition-opacity w-full sm:w-auto shadow-[4px_4px_0_0_#FFE600]"
                >
                  Schedule A Walkthrough
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. HOW REVIEWBOOST WORKS (AEO / EXTRACTABLE Passages) */}
        <section className="py-24 border-b-2 border-foreground bg-[#F5F5F5] text-black">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <span className="inline-block border-2 border-black font-black text-xs uppercase tracking-widest px-3 py-1 mb-4 bg-accent-yellow text-black">
                THE REPUTATION SYSTEM
              </span>
              <h2 className="font-heading font-black text-4xl md:text-6xl uppercase tracking-tighter">
                How <span className="text-accent-red">ReviewBoost</span> Scales Reputation
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0_0_#000]">
                <div className="p-3 bg-accent-yellow text-black border-2 border-black w-fit mb-6">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-black text-2xl uppercase mb-3">1. Frictionless Ask</h3>
                <p className="font-bold opacity-80 text-sm leading-relaxed">
                  Automatically ping clients after service completion via WhatsApp, SMS, or high-intent table/counter QR codes. No complicated login required.
                </p>
              </div>

              <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0_0_#000]">
                <div className="p-3 bg-accent-blue text-white border-2 border-black w-fit mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-black text-2xl uppercase mb-3">2. 1-Click Google Link</h3>
                <p className="font-bold opacity-80 text-sm leading-relaxed">
                  Customers are taken directly to your pre-filled 5-star Google review window on their phone. Friction is completely removed.
                </p>
              </div>

              <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0_0_#000]">
                <div className="p-3 bg-accent-red text-white border-2 border-black w-fit mb-6">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-black text-2xl uppercase mb-3">3. Local 3-Pack Lift</h3>
                <p className="font-bold opacity-80 text-sm leading-relaxed">
                  High review velocity and keyword-rich customer feedback signal Google to rank your clinic, restaurant, or store in the top 3 map positions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FAQS */}
        <section className="py-24 border-b-2 border-foreground bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter">
                Frequently Asked <span className="text-accent-yellow">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              <details className="group border-2 border-foreground p-6 bg-[#111] text-white shadow-[6px_6px_0_0_#FFE600] cursor-pointer">
                <summary className="flex justify-between items-center font-heading font-black text-lg md:text-xl uppercase tracking-tight list-none">
                  <span>How does ReviewBoost collect Google reviews automatically?</span>
                  <span className="text-2xl transition-transform group-open:rotate-45 font-mono text-accent-yellow">+</span>
                </summary>
                <p className="mt-4 font-bold opacity-80 text-base leading-relaxed border-t-2 border-white/10 pt-4 text-gray-300">
                  ReviewBoost connects to your point of sale, CRM, or billing system to trigger automated review requests via WhatsApp or SMS. It also provides smart counter QR codes for in-person customer scanning. The system directs happy customers directly to your Google Business Profile review modal in one click.
                </p>
              </details>

              <details className="group border-2 border-foreground p-6 bg-[#111] text-white shadow-[6px_6px_0_0_#FFE600] cursor-pointer">
                <summary className="flex justify-between items-center font-heading font-black text-lg md:text-xl uppercase tracking-tight list-none">
                  <span>How does ReviewBoost handle negative feedback?</span>
                  <span className="text-2xl transition-transform group-open:rotate-45 font-mono text-accent-yellow">+</span>
                </summary>
                <p className="mt-4 font-bold opacity-80 text-base leading-relaxed border-t-2 border-white/10 pt-4 text-gray-300">
                  ReviewBoost includes an internal feedback routing option that allows dissatisfied customers to submit private grievances directly to management before venting publicly on Google. This gives you the opportunity to resolve issues privately and preserve your 5-star public rating.
                </p>
              </details>

              <details className="group border-2 border-foreground p-6 bg-[#111] text-white shadow-[6px_6px_0_0_#FFE600] cursor-pointer">
                <summary className="flex justify-between items-center font-heading font-black text-lg md:text-xl uppercase tracking-tight list-none">
                  <span>Do more Google reviews improve local Google Maps rankings?</span>
                  <span className="text-2xl transition-transform group-open:rotate-45 font-mono text-accent-yellow">+</span>
                </summary>
                <p className="mt-4 font-bold opacity-80 text-base leading-relaxed border-t-2 border-white/10 pt-4 text-gray-300">
                  Yes. Google's local search algorithm weighs review count, review velocity, average star rating, and customer review keywords as critical ranking factors for the Google Local 3-Pack. Businesses that consistently generate authentic reviews outrank competitors in local search.
                </p>
              </details>

              <details className="group border-2 border-foreground p-6 bg-[#111] text-white shadow-[6px_6px_0_0_#FFE600] cursor-pointer">
                <summary className="flex justify-between items-center font-heading font-black text-lg md:text-xl uppercase tracking-tight list-none">
                  <span>Can I embed Google reviews on my website using ReviewBoost?</span>
                  <span className="text-2xl transition-transform group-open:rotate-45 font-mono text-accent-yellow">+</span>
                </summary>
                <p className="mt-4 font-bold opacity-80 text-base leading-relaxed border-t-2 border-white/10 pt-4 text-gray-300">
                  Yes. ReviewBoost includes responsive, edge-cached review widgets and social proof badges that can be embedded on any Next.js, WordPress, or Shopify website to increase landing page conversion rates.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* 4. Final CTA */}
        <section className="py-24 border-b-2 border-foreground bg-accent-yellow text-black text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading font-black text-4xl md:text-6xl uppercase tracking-tighter mb-6">
              Ready to Dominate Your Local 3-Pack?
            </h2>
            <p className="text-lg md:text-xl font-bold opacity-80 mb-10 max-w-2xl mx-auto">
              Start collecting automated 5-star Google reviews today with ReviewBoost.
            </p>
            <a 
              href="https://reviews.thebrandmaniacs.online/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white border-2 border-black font-black uppercase text-base py-5 px-10 tracking-widest shadow-[6px_6px_0_0_#FFF] hover:-translate-y-1 transition-all"
            >
              Start Free 14-Day Trial <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
