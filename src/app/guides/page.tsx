import { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/guides";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Growth Engineering & Marketing Guides",
  description: "Tactical, fluff-free guides on conversion architecture, D2C acquisition, local SEO, and AI search optimization. Written by The Brand Maniacs.",
  alternates: {
    canonical: "/guides",
  },
  openGraph: {
    title: "Growth Engineering Guides | The Brand Maniacs",
    description: "In-depth frameworks and technical playbooks for scaling revenue, lowering CAC, and dominating search engines.",
    url: "https://www.thebrandmaniacs.online/guides",
    type: "website",
  },
};

const guidesHubSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.thebrandmaniacs.online/guides#webpage",
      "url": "https://www.thebrandmaniacs.online/guides",
      "name": "Growth Engineering & Marketing Guides — The Brand Maniacs",
      "description": "Tactical playbooks and engineering guides for scaling revenue, D2C performance, and search dominance.",
      "publisher": {
        "@id": "https://www.thebrandmaniacs.online/#organization"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.thebrandmaniacs.online/guides#breadcrumb",
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
        }
      ]
    }
  ]
};

export default function GuidesPage() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-accent-yellow selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guidesHubSchema) }}
      />

      <main className="pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header */}
          <div className="mb-16">
            <span className="inline-flex items-center gap-2 border-2 border-foreground font-black text-xs md:text-sm uppercase tracking-widest px-4 py-1.5 mb-6 bg-accent-yellow text-black shadow-[3px_3px_0_0_#000]">
              <BookOpen className="w-4 h-4" />
              <span>THE PLAYBOOK · TACTICAL IP</span>
            </span>
            
            <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-[0.9] text-foreground mb-6">
              Growth <br />
              <span className="text-accent-red">Guides.</span>
            </h1>
            
            <p className="text-lg md:text-xl font-bold text-foreground opacity-80 max-w-2xl leading-relaxed">
              No generic agency fluff or 500-word SEO filler. Deep, architectural playbooks on conversion rate optimization, local search dominance, and D2C customer acquisition.
            </p>
          </div>

          {/* Guides Grid */}
          <div className="grid gap-8">
            {guides.map((guide) => (
              <article 
                key={guide.slug}
                className="border-4 border-foreground p-8 md:p-10 bg-white text-black shadow-[8px_8px_0_0_#000] hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#FFE600] transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono font-black uppercase tracking-widest text-black/60 mb-4">
                    <span className="bg-accent-yellow text-black px-2 py-0.5 border border-black">
                      {guide.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {guide.readTime}
                    </span>
                    <span>•</span>
                    <span>{guide.publishedAt}</span>
                  </div>

                  <h2 className="font-heading font-black text-2xl md:text-4xl uppercase tracking-tight mb-4 group-hover:text-accent-red transition-colors">
                    <Link href={`/guides/${guide.slug}`}>
                      {guide.title}
                    </Link>
                  </h2>

                  <p className="font-bold opacity-80 text-base leading-relaxed mb-6">
                    {guide.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t-2 border-black/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent-yellow border-2 border-black flex items-center justify-center font-heading font-black text-xs">
                      TJ
                    </div>
                    <span className="font-mono text-xs font-black uppercase">{guide.author.name}</span>
                  </div>

                  <Link 
                    href={`/guides/${guide.slug}`}
                    className="inline-flex items-center gap-2 font-heading font-black text-sm uppercase tracking-wider text-black group-hover:translate-x-1 transition-transform"
                  >
                    Read Guide <ArrowRight className="w-4 h-4 text-accent-red" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-20 border-4 border-foreground p-8 md:p-12 bg-accent-yellow text-black shadow-[8px_8px_0_0_#000]">
            <h3 className="font-heading font-black text-3xl md:text-4xl uppercase tracking-tighter mb-4">
              Need A Custom Growth Architecture For Your Brand?
            </h3>
            <p className="font-bold text-base md:text-lg opacity-85 mb-8 max-w-2xl leading-relaxed">
              We diagnose your marketing bottlenecks, analyze your tracking data, and map out a custom acquisition infrastructure in 30 minutes.
            </p>
            <Link 
              href="/book" 
              className="inline-flex items-center gap-2 bg-black text-white border-2 border-black font-black uppercase text-sm py-4 px-8 tracking-widest shadow-[4px_4px_0_0_#FFF] hover:-translate-y-0.5 transition-all"
            >
              Book Strategy Session <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
