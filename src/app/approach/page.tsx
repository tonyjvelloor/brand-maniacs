import type { Metadata } from "next";
import { CALENDLY_URL } from "@/lib/config";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Approach — The Brand Maniacs",
    description: "We don&apos;t just execute. We think. Discover our operating principles for building brands that win attention and trust.",
};

const principles = [
    {
        num: "01",
        title: "Attention Comes Before Sales",
        body: "You can&apos;t convert a customer you haven't stopped. In a world of infinite scrolling, the first battle is simply getting noticed. Every strategy we build starts with earning the scroll-stop through psychological hooks, striking visuals, and contrarian thinking.",
        icon: "👁️"
    },
    {
        num: "02",
        title: "Strategy Before Aesthetic",
        body: "Beautiful work that says nothing is expensive noise. We don&apos;t design to make things look 'pretty'. We design to communicate a specific feeling, overcome a specific objection, and drive a specific action. We think before we design.",
        icon: "🧠"
    },
    {
        num: "03",
        title: "Test Before Assuming",
        body: "Best practices are averages. Averages don&apos;t win. We run creative experiments, A/B tests, and rapid prototyping sprints. We kill bad ideas cheap and early. We scale what the data proves actually works.",
        icon: "🧪"
    },
    {
        num: "04",
        title: "Build Systems, Not Random Posts",
        body: "A viral post fades in 48 hours. A content system compounds for years. We don&apos;t do random acts of marketing. We engineer interconnected systems—brand foundations, attention engines, and conversion flows—that work together.",
        icon: "⚙️"
    },
    {
        num: "05",
        title: "Differentiation is a Conversion Tactic",
        body: "When you look and sound like every other brand in your category, customers buy on price. When you are distinct, customers buy on preference. We build brands that make price irrelevant by making the brand irreplaceable.",
        icon: "💎"
    },
    {
        num: "06",
        title: "We Stay Intentionally Small",
        body: "We are not a volume agency. We don&apos;t take on 50 clients and hand the work to juniors. We work with a maximum of 3 ambitious brands at any given time, ensuring every project gets senior strategic oversight and obsessive execution.",
        icon: "🎯"
    }
];

export default function ApproachPage() {
    return (
        <div className="min-h-screen bg-background pt-28 pb-24">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">

                {/* Header */}
                <div className="mb-20 max-w-4xl">
                    <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 bg-accent-blue text-white">
                        Our Operating Principles
                    </span>
                    <h1 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tighter text-foreground leading-[0.9] mb-8">
                        How We Think.<br />
                        <span className="text-foreground opacity-30">And Why It</span><br />
                        <span className="bg-foreground text-background px-2">Works.</span>
                    </h1>
                    <p className="text-lg md:text-xl font-bold text-foreground opacity-80 leading-snug border-l-4 border-accent-blue pl-5 max-w-2xl">
                        The difference between premium agencies and commodity vendors isn't the tools they use. It&apos;s how they think. These are the uncompromising principles that govern every piece of work we touch.
                    </p>
                </div>

                {/* Principles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {principles.map((p, i) => (
                        <div key={i} className="border-2 border-foreground bg-background hover:bg-foreground hover:text-background transition-colors duration-300 group p-8 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-8">
                                <span className="font-heading text-4xl font-black text-foreground opacity-20 group-hover:text-accent-yellow group-hover:opacity-100 transition-colors">
                                    {p.num}
                                </span>
                                <span className="text-4xl opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                                    {p.icon}
                                </span>
                            </div>
                            <h3 className="font-heading text-2xl font-black uppercase mb-4 leading-tight">
                                {p.title}
                            </h3>
                            <p className="text-sm font-bold opacity-70 group-hover:opacity-90 flex-grow leading-relaxed">
                                {p.body}
                            </p>
                        </div>
                    ))}
                </div>

                {/* The Process */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground">
                            The Methodology
                        </h2>
                        <p className="text-sm font-black uppercase tracking-widest text-foreground opacity-50 mt-4">
                            How we turn principles into practice
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting line for desktop */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-foreground opacity-20 -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {[
                                { step: "1", title: "Diagnose", desc: "Audit the brand, audience psychology, and current revenue leaks." },
                                { step: "2", title: "Strategize", desc: "Build the foundation, positioning, and 90-day execution blueprint." },
                                { step: "3", title: "Execute", desc: "Deploy creative systems across attention and conversion channels." },
                                { step: "4", title: "Iterate", desc: "Test, measure, kill the losers, and scale the winning variants." }
                            ].map((s, i) => (
                                <div key={i} className="bg-background border-2 border-foreground p-6 text-center relative group hover:-translate-y-2 transition-transform">
                                    <div className="w-12 h-12 mx-auto bg-foreground text-background font-heading font-black text-xl flex items-center justify-center mb-6 group-hover:bg-accent-yellow group-hover:text-black transition-colors">
                                        {s.step}
                                    </div>
                                    <h4 className="font-heading text-xl font-black uppercase mb-3">{s.title}</h4>
                                    <p className="text-xs font-bold opacity-70 leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-accent-blue text-white border-2 border-black p-10 md:p-16 text-center max-w-4xl mx-auto">
                    <h3 className="font-heading text-3xl md:text-5xl font-black uppercase leading-tight mb-6">
                        Align with our thinking?
                    </h3>
                    <p className="font-bold opacity-90 text-lg mb-10 max-w-xl mx-auto">
                        If these principles sound like the way you want your brand to be built, we should have a conversation.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center gap-2 bg-accent-yellow text-black border-2 border-black font-black text-sm uppercase tracking-widest px-8 py-4 hover:bg-white transition-none"
                        >
                            Book a Strategy Call <ArrowRight className="w-4 h-4" />
                        </a>
                        <Link 
                            href="/work" 
                            className="inline-flex justify-center items-center gap-2 border-2 border-white text-white font-black text-sm uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-accent-blue transition-none"
                        >
                            See Our Work
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
