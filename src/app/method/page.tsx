import type { Metadata } from "next";
import { CALENDLY_URL } from "@/lib/config";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";

export const metadata: Metadata = {
    title: "Our Methodology | The Brand Maniacs",
    description: "Marketing is a behavior science and systems engineering problem. Learn how we engineer growth through psychology, infrastructure, and high-velocity testing.",
};

const principles = [
    {
        num: "01",
        title: "Behavior Science First",
        subtitle: "Why People Buy",
        body: "Every scroll-stop, every trust signal, and every buying decision starts in the human brain. Before we write a line of code or design a single asset, we map the psychological triggers of your market. We don't guess what your audience wants; we engineer the precise stimuli required to capture their attention and earn their trust.",
        color: "bg-accent-yellow",
        textColor: "text-black",
        borderColor: "border-black",
    },
    {
        num: "02",
        title: "Systems Engineering",
        subtitle: "Building the Infrastructure",
        body: "A viral post fades in 48 hours. A growth system compounds for years. We treat marketing as an engineering discipline. We build interconnected digital products, automated pipelines, and programmatic SEO architectures that capture demand and convert it systematically.",
        color: "bg-foreground",
        textColor: "text-background",
        borderColor: "border-background",
    },
    {
        num: "03",
        title: "Speed of Experimentation",
        subtitle: "Data over Ego",
        body: "The agency with the most creative awards rarely wins the market. The agency that tests the fastest does. By leveraging AI-powered production (AIProdGen) and high-velocity creative testing, we deploy, measure, and iterate at speeds traditional teams cannot match. We kill bad ideas early and scale what mathematically works.",
        color: "bg-accent-red",
        textColor: "text-white",
        borderColor: "border-white",
    }
];

export default function MethodPage() {
    return (
        <div className="min-h-screen bg-background pt-28 pb-0">
            {/* Hero Section */}
            <div className="container mx-auto px-4 md:px-6 max-w-6xl mb-24">
                <FadeUp>
                    <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-8 bg-foreground text-background">
                        The Core Philosophy
                    </span>
                    
                    <h1 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tighter text-foreground leading-[0.9] mb-12">
                        Growth Is <br />
                        <span className="bg-accent-blue text-white px-2">Engineered.</span>
                    </h1>
                </FadeUp>
                
                <FadeUp delay={0.1}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <p className="text-2xl font-black uppercase leading-tight text-foreground mb-6">
                                The traditional agency model relies on guesswork, ego, and hoping a campaign goes viral. We rely on math.
                            </p>
                        </div>
                        <div>
                            <p className="text-lg font-bold text-foreground opacity-80 leading-snug mb-6 border-l-4 border-foreground pl-4">
                                Our entire studio is built on a single, uncompromising belief: Marketing is a behavior science and systems engineering problem.
                            </p>
                            <p className="text-base font-bold text-foreground opacity-60 leading-snug">
                                We don't just build beautiful brands. We build the underlying infrastructure required to acquire customers at scale, profitably, and predictably.
                            </p>
                        </div>
                    </div>
                </FadeUp>
            </div>

            {/* The 3 Pillars */}
            <div className="border-t-2 border-foreground bg-foreground py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="space-y-0 border-2 border-background">
                        {principles.map((p, i) => (
                            <FadeUp key={i} delay={i * 0.1}>
                                <div className={`flex flex-col md:flex-row border-b-2 border-background last:border-b-0 ${p.color} ${p.textColor}`}>
                                    {/* Number Block */}
                                    <div className={`p-8 md:p-12 md:w-1/4 border-b-2 md:border-b-0 md:border-r-2 ${p.borderColor} flex items-center justify-center bg-black/5`}>
                                        <span className="font-heading text-8xl font-black opacity-30 leading-none">
                                            {p.num}
                                        </span>
                                    </div>
                                    
                                    {/* Content Block */}
                                    <div className="p-8 md:p-12 md:w-3/4">
                                        <span className={`inline-block font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 border-2 ${p.borderColor}`}>
                                            Phase {i + 1}
                                        </span>
                                        <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">
                                            {p.title}
                                        </h2>
                                        <h3 className="font-black text-sm uppercase tracking-widest opacity-70 mb-6">
                                            {p.subtitle}
                                        </h3>
                                        <p className="font-bold text-base md:text-lg leading-relaxed opacity-90 max-w-2xl">
                                            {p.body}
                                        </p>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-background py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                    <FadeUp>
                        <h3 className="font-heading text-4xl md:text-6xl font-black uppercase text-foreground leading-tight mb-6">
                            Ready to Engineer <br />Your Growth?
                        </h3>
                        <p className="font-bold text-foreground opacity-70 text-lg mb-10 max-w-2xl mx-auto">
                            Stop buying random marketing services. Start building a growth system. Book a strategy session to see how this methodology applies to your business.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link 
                                href="/start" 
                                className="inline-flex justify-center items-center gap-2 border-2 border-foreground text-foreground font-black text-sm uppercase tracking-widest px-8 py-4 hover:bg-foreground hover:text-background transition-none"
                            >
                                Free Growth Audit
                            </Link>
                            <a
                                href={CALENDLY_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex justify-center items-center gap-2 bg-accent-yellow text-black border-2 border-black font-black text-sm uppercase tracking-widest px-8 py-4 hover:bg-accent-red hover:text-white hover:border-accent-red transition-none whitespace-nowrap"
                            >
                                Book Strategy Session <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </FadeUp>
                </div>
            </div>
        </div>
    );
}
