import type { Metadata } from "next";
import { CALENDLY_URL } from "@/lib/config";
import Link from "next/link";


export const metadata: Metadata = {
    title: "Tony Joseph — Founder, The Brand Maniacs | AI Marketing Studio, Pune",
    description: "Tony Joseph is a marketer-turned-builder obsessed with brand psychology and AI-powered growth systems. Founder of The Brand Maniacs and creator of AIProdGen.",
};

const beliefs = [
    {
        num: "01",
        title: "Marketing Is a Behaviour Science Problem",
        body: "Every scroll-stop, every trust signal, every buying decision starts in the human brain. We study psychology before we write a single word of copy or design a single asset.",
    },
    {
        num: "02",
        title: "Technology is Leverage, Not a Strategy",
        body: "AI doesn't make bad ideas good. It makes good ideas scale infinitely. We use technology to execute brilliant, human-led strategies at speeds traditional agencies can't match.",
    },
    {
        num: "03",
        title: "Speed of Experimentation Wins",
        body: "Not the agency with the most creative awards. Not the one with the biggest team. The one that tests fastest and kills bad ideas earliest wins the market.",
    },
    {
        num: "04",
        title: "Build Systems, Not Just Campaigns",
        body: "A viral post fades in 48 hours. A system compounds for years. My mission is building technology and creative systems that help brands move at the speed of culture.",
    },
];

const timeline = [
    { year: "2018", event: "Started studying consumer psychology and digital marketing. First brand experiments with zero budget." },
    { year: "2020", event: "Built and tested content systems for early-stage D2C brands. Found what actually works vs. what looks like it works." },
    { year: "2022", event: "The Brand Maniacs formally founded. Mission: apply psychological thinking to brand building for ambitious Indian brands." },
    { year: "2024", event: "The Shift. Transitioned from pure marketer to builder. Began integrating AI-powered production systems to bypass slow traditional agency workflows." },
    { year: "Now", event: "Operating as a Creative Technology Studio. Building proprietary tech like AIProdGen. Selectively working with 3 brands at a time." },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background pt-28 pb-24">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">

                {/* Hero */}
                <div className="mb-20">
                    <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-8 bg-foreground text-background">
                        About The Founder
                    </span>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h1 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tighter text-foreground leading-[0.9] mb-8">
                                Tony<br />
                                <span className="bg-accent-yellow text-black px-2">Joseph.</span>
                            </h1>
                            <p className="text-sm font-black uppercase tracking-widest text-foreground opacity-50 mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 bg-accent-red rounded-full animate-pulse"></span>
                                Founder. Marketer. Builder of AI Systems.
                            </p>
                            <p className="text-lg font-bold text-foreground leading-snug mb-6 border-l-4 border-accent-yellow pl-4">
                                "After years creating campaigns, I realized the future belongs to teams who can combine creativity with technology."
                            </p>
                            <p className="text-base font-bold text-foreground opacity-70 leading-snug mb-8">
                                For years, I built brands the traditional way. It was slow. It was expensive. And it relied entirely on human hours. When AI and advanced tooling emerged, I realized the entire agency model was about to become obsolete.
                            </p>
                            <p className="text-base font-bold text-foreground opacity-70 leading-snug mb-8">
                                I stopped just marketing and started building. Today, my mission is building systems that help brands move at the speed of culture—combining the depth of human psychology with the infinite scale of technology.
                            </p>
                            <a
                                href={CALENDLY_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 border-2 border-foreground font-black text-sm uppercase tracking-widest px-6 py-3 text-foreground hover:bg-foreground hover:text-background transition-none"
                            >
                                Book a Call with Tony →
                            </a>
                        </div>

                        {/* Photo & Quote card */}
                        <div className="flex flex-col gap-6 relative">
                            {/* Founder Photo */}
                            <div className="w-full aspect-[4/5] bg-foreground/5 border-2 border-foreground relative overflow-hidden group">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img 
                                    src="/images/tony-joseph.jpg" 
                                    alt="Tony Joseph, Founder of The Brand Maniacs" 
                                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                            
                            {/* Quote Card (overlapping) */}
                            <div className="bg-foreground p-8 md:p-10 border-2 border-foreground md:-mt-32 md:-ml-12 relative z-10 shadow-2xl">
                                <blockquote className="font-heading text-2xl md:text-3xl font-black uppercase text-background leading-tight mb-8">
                                    "The brands that win don't just look better. They have better systems. And they move faster than anyone else."
                                </blockquote>
                                <div className="flex items-center gap-4 pt-6 border-t-2 border-background/20">
                                    <div className="w-12 h-12 bg-accent-yellow flex items-center justify-center border-2 border-background font-heading font-black text-black text-xl shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                                        T
                                    </div>
                                    <div>
                                        <p className="font-black uppercase text-background text-sm">Tony Joseph</p>
                                        <p className="text-background opacity-50 text-[10px] font-bold uppercase tracking-widest">Founder, The Brand Maniacs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What I believe */}
                <div className="mb-20">
                    <div className="mb-12">
                        <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter text-foreground leading-[0.95]">
                            What I Actually<br />
                            <span className="bg-accent-red text-white px-2">Believe.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-foreground bg-foreground">
                        {beliefs.map((b, i) => (
                            <div key={i} className="bg-background p-8 border-r-2 border-b-2 border-foreground group hover:bg-foreground transition-none">
                                <span className="font-heading text-5xl font-black text-foreground opacity-10 group-hover:opacity-5 transition-none block mb-6">{b.num}</span>
                                <h3 className="font-heading text-xl font-black uppercase text-foreground mb-4 leading-tight group-hover:text-background transition-none">{b.title}</h3>
                                <p className="text-sm font-bold text-foreground opacity-70 leading-snug group-hover:text-background group-hover:opacity-80 transition-none">{b.body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Timeline */}
                <div className="mb-20">
                    <h2 className="font-heading text-3xl md:text-4xl font-black uppercase tracking-tighter text-foreground mb-12">
                        The Story So Far.
                    </h2>
                    <div className="border-2 border-foreground">
                        {timeline.map((t, i) => (
                            <div key={i} className="flex items-start gap-0 border-b-2 border-foreground last:border-b-0 group hover:bg-foreground transition-none">
                                <div className="bg-accent-yellow text-black border-r-2 border-foreground px-6 py-6 font-heading font-black text-lg w-28 shrink-0 flex items-center justify-center group-hover:bg-accent-red group-hover:text-white transition-none">
                                    {t.year}
                                </div>
                                <div className="p-6">
                                    <p className="font-bold text-sm text-foreground leading-snug group-hover:text-background transition-none">{t.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-foreground border-2 border-foreground p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div>
                        <h3 className="font-heading text-3xl font-black uppercase text-background leading-tight mb-3">
                            Want to Build Your System?
                        </h3>
                        <p className="font-bold text-background opacity-60 text-base">
                            We only take 3 brands at a time. If you're ready to build a brand that can't be ignored, let's talk.
                        </p>
                    </div>
                    <div className="flex flex-col gap-3 shrink-0">
                        <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-accent-yellow text-black border-2 border-black font-black text-sm uppercase tracking-widest px-8 py-4 hover:bg-accent-red hover:text-white hover:border-accent-red transition-none whitespace-nowrap"
                        >
                            Build My Growth System →
                        </a>
                        <Link href="/ai-growth-audit" className="inline-flex items-center gap-2 border-2 border-background text-background font-black text-xs uppercase tracking-widest px-8 py-3 hover:bg-background hover:text-foreground transition-none">
                            Apply for Free Audit
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
