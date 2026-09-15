import { caseStudies } from "@/lib/case-studies";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Image as ImageIcon, Sparkles } from "lucide-react";
import { CALENDLY_URL } from "@/lib/config";

// 1. Generate Static Params at build time
export function generateStaticParams() {
    return caseStudies.map((cs) => ({
        slug: cs.slug,
    }));
}

// 2. Generate dynamic metadata based on the slug
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);

    if (!caseStudy) {
        return {
            title: "Case Study Not Found | The Brand Maniacs",
        };
    }

    return {
        title: caseStudy.seoTitle,
        description: caseStudy.seoDescription,
        alternates: {
            canonical: `/work/${caseStudy.slug}`,
        },
    };
}

// 3. Page Component
export default function CaseStudyPage({ params }: { params: { slug: string } }) {
    const caseStudy = caseStudies.find((cs) => cs.slug === params.slug);

    if (!caseStudy) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background pt-28 pb-24">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                
                {/* Back Link */}
                <Link href="/work" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:opacity-70 transition-opacity mb-12">
                    <ArrowLeft className="w-4 h-4" /> Back to All Work
                </Link>

                {/* Header */}
                <div className="mb-16">
                    <span className={`inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 ${caseStudy.accentColor} ${caseStudy.accentText}`}>
                        {caseStudy.category}
                    </span>
                    <h1 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tighter text-foreground leading-[0.9] mb-8">
                        {caseStudy.client}
                    </h1>
                </div>

                {/* Deep Dive Content (Reusing the card layout structure but expanded) */}
                <div className="border-2 border-foreground bg-foreground p-1 pb-1 mb-16">
                    <div className="bg-background p-6 sm:p-10 md:p-12">
                        
                        {/* Metrics Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            {caseStudy.metrics.map((metric, k) => (
                                <div key={k} className="border-2 border-foreground p-6 bg-background relative overflow-hidden group">
                                    <div className="flex justify-between items-end mb-4 relative z-10">
                                        <span className="text-xs font-black uppercase tracking-widest text-foreground/50">{metric.label}</span>
                                        <span className="font-heading text-4xl font-black">{metric.value}</span>
                                    </div>
                                    <div className="h-2 w-full bg-foreground/10">
                                        <div className={`h-full ${caseStudy.accentColor} transition-all duration-1000 ease-out`} style={{ width: metric.width }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Problem */}
                        <div className="mb-12">
                            <span className="text-sm font-black uppercase tracking-widest text-accent-red block mb-4 border-l-4 border-accent-red pl-4">The Problem Context</span>
                            <p className="font-bold text-lg text-foreground leading-relaxed opacity-90">{caseStudy.problem}</p>
                        </div>

                        {/* Tech visualizer for AIProdGen case study */}
                        {caseStudy.isTech && (
                            <div className="border-2 border-foreground bg-foreground text-background p-8 flex flex-col justify-center mb-12">
                                <div className="flex items-center justify-between text-sm font-black uppercase tracking-widest mb-8">
                                    <span className="opacity-50">Input Layer</span>
                                    <ArrowRight className="w-5 h-5 text-accent-yellow" />
                                    <span className="text-accent-yellow">AI Generative Output</span>
                                </div>
                                <div className="flex justify-between items-end gap-4">
                                    <div className="w-24 h-24 border-2 border-dashed border-background/30 flex items-center justify-center opacity-50">
                                        <ImageIcon className="w-8 h-8" />
                                    </div>
                                    <div className="flex-1 h-1.5 bg-background/20 relative">
                                        <div className="absolute top-0 left-0 h-full w-full bg-accent-yellow animate-pulse"></div>
                                    </div>
                                    <div className="w-32 h-32 bg-accent-yellow border-2 border-black flex items-center justify-center relative overflow-hidden group">
                                        <Sparkles className="w-10 h-10 text-black relative z-10" />
                                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* System Built */}
                        <div className="mb-12 pb-12 border-b-2 border-foreground/20">
                            <span className="text-sm font-black uppercase tracking-widest text-accent-blue block mb-6 border-l-4 border-accent-blue pl-4">The Engineered System</span>
                            <ul className="space-y-4">
                                {caseStudy.systemBuilt.map((item, j) => (
                                    <li key={j} className="flex items-start gap-4 text-base font-bold text-foreground opacity-90">
                                        <span className="text-accent-yellow font-black shrink-0 mt-1 border-2 border-foreground w-5 h-5 flex items-center justify-center text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-background">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Outcome */}
                        <div className="bg-accent-yellow text-black p-8 sm:p-10 border-2 border-black">
                            <span className="text-sm font-black uppercase tracking-widest opacity-60 block mb-4 border-l-4 border-black pl-4">Business Outcome & Growth Learning</span>
                            <p className="font-bold text-xl leading-relaxed">{caseStudy.outcome}</p>
                        </div>

                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="bg-background border-2 border-foreground p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 text-center md:text-left relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent-red rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
                    
                    <div className="relative z-10">
                        <h3 className="font-heading text-3xl md:text-4xl font-black uppercase text-foreground leading-tight mb-3">
                            Want results like this?
                        </h3>
                        <p className="font-bold text-foreground opacity-70 text-base max-w-lg">
                            We don't take every project. But if you have a great product that's underperforming, let's look at the math.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 shrink-0 relative z-10 w-full md:w-auto">
                        <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center gap-2 bg-accent-yellow text-black border-2 border-black font-black text-sm uppercase tracking-widest px-8 py-4 hover:bg-accent-red hover:text-white hover:border-accent-red transition-none whitespace-nowrap w-full sm:w-auto shadow-[4px_4px_0_0_#000]"
                        >
                            Book a Strategy Call <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
