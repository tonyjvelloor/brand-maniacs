import { Metadata } from "next";
import { TheBrokenModel } from "@/components/sections/TheBrokenModel";
import { Solutions } from "@/components/sections/Solutions";
import { ResultsShowcase } from "@/components/sections/ResultsShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { OurSystem } from "@/components/sections/OurSystem";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Digital Marketing Agency in Pune — AI Growth & Web Systems",
    description: "Looking for a top digital marketing agency in Pune? We engineer AI-powered growth systems, Next.js websites, and customer acquisition funnels across Hinjewadi, Baner, Kharadi, and PCMC.",
    alternates: {
        canonical: "/digital-marketing-agency-pune",
    },
};

const puneFaqs = [
    {
        q: "How is The Brand Maniacs different from traditional digital marketing agencies in Pune?",
        a: "Most agencies in Pune sell isolated deliverables—social media post packages, basic WordPress websites, or unmanaged ad spend. We operate as an outsourced growth studio: engineering custom Next.js conversion websites, Server-to-Server (S2S) attribution, high-velocity ad creative testing, and automated WhatsApp/CRM pipelines tied directly to revenue."
    },
    {
        q: "Which industries in Pune do you specialize in?",
        a: "From our Pune headquarters, we build specialized acquisition systems for SaaS & IT companies (Hinjewadi, Kharadi, Magarpatta), Ayurveda clinics & healthcare hospitals (Baner, Aundh, Kothrud, PCMC), manufacturing & industrial exporters (Pimpri, Chikhali, Moshi MIDC), and D2C e-commerce brands."
    },
    {
        q: "Can we meet your team in person in Pune?",
        a: "Yes. Our engineering and growth studio is headquartered in Pune (Pimpri-Chinchwad). We work closely with founders and leadership teams across Pune as well as international clients in the UAE, UK, and US."
    }
];

const puneSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "ProfessionalService",
            "@id": "https://www.thebrandmaniacs.online/digital-marketing-agency-pune#localbusiness",
            "name": "The Brand Maniacs — Digital Marketing Agency Pune",
            "url": "https://www.thebrandmaniacs.online/digital-marketing-agency-pune",
            "logo": "https://www.thebrandmaniacs.online/icon.png",
            "image": "https://www.thebrandmaniacs.online/images/og-image.jpg",
            "description": "Digital Marketing Agency and Growth Infrastructure Studio in Pune, Maharashtra.",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Pimpri-Chinchwad",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411033",
                "addressCountry": "IN"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": 18.6298,
                "longitude": 73.7997
            },
            "areaServed": ["Pune", "Hinjewadi", "Baner", "Wakad", "Kharadi", "Koregaon Park", "Pimpri-Chinchwad"],
            "priceRange": "$$"
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.thebrandmaniacs.online/digital-marketing-agency-pune#breadcrumb",
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
                    "name": "Digital Marketing Agency Pune",
                    "item": "https://www.thebrandmaniacs.online/digital-marketing-agency-pune"
                }
            ]
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.thebrandmaniacs.online/digital-marketing-agency-pune#faq",
            "mainEntity": puneFaqs.map((item) => ({
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

export default function PuneLocationPage() {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-accent-yellow selection:text-black">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(puneSchema) }}
            />
            <main>
                {/* Localized Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b-2 border-foreground">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-5xl">
                            <span className="inline-block border-2 border-foreground font-black text-xs md:text-sm uppercase tracking-widest px-3 py-1 mb-6 bg-accent-yellow text-black">
                                // PUNE HQ · GLOBAL REACH
                            </span>
                            
                            <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.9] text-foreground mb-8">
                                Pune's <br />
                                <span className="text-accent-red">Growth</span> <br />
                                Studio.
                            </h1>
                            
                            <div className="max-w-2xl">
                                <p className="text-lg md:text-xl font-bold text-foreground opacity-80 leading-relaxed">
                                    You don't need another traditional digital marketing agency in Pune that promises "more traffic." You need a growth system that actually prints revenue. We engineer brand, conversion, and acquisition infrastructure for ambitious companies.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reuse core components for the rest of the funnel */}
                <TheBrokenModel />
                <Solutions />
                <ResultsShowcase />
                <OurSystem />

                {/* Pune FAQ Accordion */}
                <section className="py-24 border-b-2 border-foreground bg-[#F5F5F5] text-black">
                  <div className="container mx-auto px-4 max-w-4xl">
                    <h3 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-tighter mb-12 text-center">
                      Pune Growth Studio <span className="text-accent-red">FAQs</span>
                    </h3>
                    <div className="space-y-4">
                      {puneFaqs.map((item, idx) => (
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
                    <div className="mt-10 text-center">
                      <Link href="/guides/custom-website-development-cost-pune-guide-2026" className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase tracking-widest border-2 border-black px-5 py-3 bg-accent-yellow text-black shadow-[3px_3px_0_0_#000] hover:bg-black hover:text-white transition-colors">
                        Read 2026 Pune Website Development Cost Guide →
                      </Link>
                    </div>
                  </div>
                </section>

                {/* Locations (PROGRAMMATIC SEO INTERNAL LINKING) */}
                <section className="py-12 bg-foreground text-background">
                  <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                      <h3 className="font-black text-sm uppercase tracking-widest text-background/50 mb-6 border-b-2 border-background/20 pb-4">
                        Global Reach: Find a Growth Agency Near You
                      </h3>
                      <div className="flex flex-wrap gap-x-6 gap-y-3">
                        {[
                          { name: "Mumbai", slug: "mumbai" },
                          { name: "Bangalore", slug: "bangalore" },
                          { name: "Delhi", slug: "delhi" },
                          { name: "Hyderabad", slug: "hyderabad" },
                          { name: "Chennai", slug: "chennai" },
                          { name: "Ahmedabad", slug: "ahmedabad" },
                          { name: "Gurgaon", slug: "gurgaon" },
                          { name: "Noida", slug: "noida" }
                        ].map((city) => (
                          <Link 
                            key={city.slug} 
                            href={`/digital-marketing-agency-in-${city.slug}`}
                            className="text-sm font-bold text-background/70 hover:text-accent-red transition-colors"
                          >
                            Digital Marketing Agency in {city.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                <FinalCTA />
            </main>
</div>
    );
}
