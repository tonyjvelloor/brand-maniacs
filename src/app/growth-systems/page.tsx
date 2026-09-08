import type { Metadata } from "next";
import { CALENDLY_URL } from "@/lib/config";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Solutions } from "@/components/sections/Solutions";

export const metadata: Metadata = {
    title: "Growth Systems | The Brand Maniacs",
    description: "We don't sell digital marketing services. We build Growth Systems. Learn how our 4-part infrastructure turns attention into measurable revenue.",
};

const ladders = [
    {
        tier: "Entry Point",
        name: "Growth Architecture",
        duration: "2-Week Sprint",
        desc: "We audit your business, identify growth constraints, map out the exact opportunities, and produce a strategic roadmap.",
        deliverable: "Strategic Roadmap & Opportunity Map",
        color: "bg-accent-yellow text-black border-black",
    },
    {
        tier: "Core Build",
        name: "Growth System Build",
        duration: "6–12 Weeks",
        desc: "We build the actual infrastructure. Brand strategy, creative assets, digital products (websites/funnels), and acquisition setup.",
        deliverable: "Live Acquisition System",
        color: "bg-foreground text-background border-background",
    },
    {
        tier: "Ongoing",
        name: "Growth Partner",
        duration: "Recurring",
        desc: "We run the engine. Continuous experimentation, creative velocity, performance optimization, and AI intelligence integration.",
        deliverable: "Measurable Revenue Growth",
        color: "bg-accent-red text-white border-white",
    }
];

export default function GrowthSystemsPage() {
    return (
        <div className="min-h-screen bg-background pt-28 pb-0">
            {/* Hero Section */}
            <div className="container mx-auto px-4 md:px-6 max-w-6xl mb-24">
                <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-8 bg-foreground text-background">
                    The Methodology
                </span>
                
                <h1 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tighter text-foreground leading-[0.9] mb-8">
                    We Don't Sell Services.<br />
                    We Build <span className="bg-accent-yellow text-black px-2">Systems.</span>
                </h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
                    <div>
                        <p className="text-xl md:text-2xl font-black uppercase leading-tight text-foreground mb-6">
                            Most brands don't have a marketing problem. They have a growth-system problem.
                        </p>
                        <p className="text-lg font-bold text-foreground opacity-80 leading-snug mb-8 border-l-4 border-foreground pl-4">
                            What is a Growth System? It is interconnected digital infrastructure that systematically captures attention and turns it into revenue. You don't need another generic digital agency selling you SEO, social media, and graphic design in a vacuum. You need a system.
                        </p>
                    </div>
                    
                    <div className="bg-foreground text-background p-8 border-2 border-foreground relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20 pointer-events-none"></div>
                        <h3 className="font-heading text-2xl font-black uppercase tracking-tighter mb-4 relative z-10">
                            The Paradigm
                        </h3>
                        <p className="font-bold text-sm leading-relaxed opacity-90 relative z-10">
                            “Marketing is a behavior science and systems engineering problem. Technology is leverage. Speed of experimentation wins.”
                        </p>
                        <div className="mt-6 pt-6 border-t-2 border-background/20 relative z-10 flex items-center justify-between">
                            <span className="font-black text-xs uppercase tracking-widest opacity-50">TBM Global Standard</span>
                            <span className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse shadow-[0_0_10px_rgba(255,230,0,0.8)]"></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* The 4 Engines (Imported from Solutions) */}
            <Solutions />

            {/* Engagement Ladder */}
            <div className="py-24 bg-foreground border-t-2 border-foreground">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    
                    <div className="mb-16 text-center">
                        <span className="inline-block border-2 border-background font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 text-background">
                            How We Engage
                        </span>
                        <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tighter text-background leading-[0.95] mb-6">
                            The Engagement <span className="bg-accent-blue text-white px-2">Ladder.</span>
                        </h2>
                        <p className="text-lg font-bold text-background opacity-80 max-w-2xl mx-auto">
                            We don't try to sell a massive retainer immediately. We start by auditing your business and identifying the exact constraints blocking your growth.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 relative max-w-4xl mx-auto">
                        
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute left-8 top-10 bottom-10 w-1 bg-background/20 z-0"></div>

                        {ladders.map((ladder, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-6 relative z-10 group">
                                
                                {/* Step Indicator */}
                                <div className="hidden md:flex flex-col items-center gap-2 pt-6">
                                    <div className="w-16 h-16 bg-background rounded-full border-4 border-foreground flex items-center justify-center font-heading text-2xl font-black text-foreground z-10 shadow-[0_0_0_2px_rgba(255,255,255,1)]">
                                        {index + 1}
                                    </div>
                                    {index < ladders.length - 1 && (
                                        <ArrowDown className="w-6 h-6 text-background/50 my-2" />
                                    )}
                                </div>

                                {/* Card */}
                                <div className={`flex-1 p-8 md:p-10 border-2 ${ladder.color} relative overflow-hidden transition-transform duration-300 hover:-translate-y-1 brutalist-shadow`}>
                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                        <span className="font-black text-[10px] uppercase tracking-widest px-2 py-1 border-2 border-current">
                                            {ladder.tier}
                                        </span>
                                        <span className="font-black text-xs uppercase tracking-widest opacity-60">
                                            {ladder.duration}
                                        </span>
                                    </div>
                                    <h3 className="font-heading text-3xl font-black uppercase tracking-tighter mb-4">
                                        {ladder.name}
                                    </h3>
                                    <p className="font-bold text-sm leading-relaxed opacity-90 mb-6">
                                        {ladder.desc}
                                    </p>
                                    <div className="pt-4 border-t-2 border-current/20 flex items-center gap-3">
                                        <ArrowRight className="w-4 h-4 shrink-0" />
                                        <span className="font-black text-xs uppercase tracking-widest">
                                            Outcome: {ladder.deliverable}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Link
                            href="/start"
                            className="inline-flex items-center gap-3 bg-accent-yellow text-black border-2 border-background font-black text-lg uppercase tracking-widest px-8 py-5 hover:bg-background hover:text-foreground transition-colors brutalist-shadow"
                        >
                            Start With A Growth Audit
                            <ArrowRight className="w-6 h-6" />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
