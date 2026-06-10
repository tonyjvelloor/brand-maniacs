"use client";

import { FadeUp } from "@/components/ui/FadeUp";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/config";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const chartData = [
  { month: "M1", single: 10, system: 12 },
  { month: "M2", single: 15, system: 22 },
  { month: "M3", single: 20, system: 40 },
  { month: "M4", single: 25, system: 65 },
  { month: "M5", single: 30, system: 105 },
  { month: "M6", single: 35, system: 160 },
];

const systems = [
    {
        num: "01",
        name: "Brand Foundation\nSystem",
        tagline: "Before anyone remembers you, they need to understand you.",
        description: "We define what you stand for, who you&apos;re for, why they should choose you — and build the visual and verbal identity that makes it impossible to forget.",
        includes: ["Brand Positioning", "Identity & Visual Language", "Messaging Architecture", "Competitive Differentiation"],
        accent: "bg-accent-yellow",
        textAccent: "text-black",
        borderAccent: "border-black",
    },
    {
        num: "02",
        name: "Attention\nEngine",
        tagline: "The brands that win attention, win the market.",
        description: "We build content systems that stop scrolls, grow audiences, and create genuine brand believers — through strategy, short-form video, creator systems, and campaign concepts.",
        includes: ["Content Strategy & Calendar", "Short-Form Video Production", "Campaign Concepting", "Influencer & Creator Systems"],
        accent: "bg-accent-red",
        textAccent: "text-white",
        borderAccent: "border-white",
    },
    {
        num: "03",
        name: "Conversion\nEngine",
        tagline: "Attention means nothing if it doesn&apos;t convert.",
        description: "We engineer the digital infrastructure that turns interest into action — websites, landing pages, funnels, and performance marketing built on testing, not guessing.",
        includes: ["Websites & Landing Pages", "Funnel Engineering", "Performance Marketing", "A/B & Creative Testing"],
        accent: "bg-foreground",
        textAccent: "text-background",
        borderAccent: "border-background",
        featured: true,
    },
    {
        num: "04",
        name: "Growth\nExperiments",
        tagline: "Your competitors are running the same playbook. We don&apos;t.",
        description: "We design and run creative experiments — trend hacking, viral mechanics, campaign innovations — that find the 1 idea that changes your trajectory.",
        includes: ["Trend Hacking", "Creative Testing Sprints", "Campaign Innovation", "Viral Mechanics Design"],
        accent: "bg-accent-blue",
        textAccent: "text-white",
        borderAccent: "border-white",
    },
];

export function GrowthSystems() {
    return (
        <section className="py-24 bg-background border-b-2 border-foreground" id="services">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <FadeUp className="mb-8">
                        <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 bg-foreground text-background">
                            How We Work
                        </span>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
                            <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground leading-[0.95]">
                                Four Systems.<br />
                                <span className="bg-accent-red text-white px-2">One Brand</span><br />
                                That Wins.
                            </h2>
                            <div>
                                <p className="text-lg font-bold text-foreground leading-snug mb-4 opacity-80">
                                    We don&apos;t sell individual services. We deploy interconnected systems — each one engineered to win a different battle in your brand&apos;s growth.
                                </p>
                                <p className="text-sm font-black text-foreground opacity-40 uppercase tracking-widest border-l-4 border-accent-yellow pl-4">
                                    We stay intentionally small — working closely with selected brands where creative speed and strategic depth both matter.
                                </p>
                            </div>
                        </div>
                    </FadeUp>

                    {/* Chart Visualization */}
                    <FadeUp delay={0.1} className="mb-20">
                        <div className="p-6 md:p-10 border-2 border-foreground bg-foreground/5 relative overflow-hidden group">
                            <div className="absolute top-4 left-4 md:top-6 md:left-10 z-10">
                                <h3 className="font-heading font-black text-xl uppercase tracking-tighter">Compounding Systems vs Single Service</h3>
                            </div>
                            <div className="absolute top-4 right-4 md:top-6 md:right-10 bg-background border-2 border-foreground px-3 py-1 text-[10px] font-black uppercase tracking-widest z-10 flex flex-col sm:flex-row gap-2 sm:gap-4">
                                <span className="flex items-center gap-2"><div className="w-2 h-2 bg-foreground/30"></div> Single Service</span>
                                <span className="flex items-center gap-2"><div className="w-2 h-2 bg-accent-yellow"></div> Maniac System</span>
                            </div>
                            <div className="h-[200px] sm:h-[300px] w-full mt-16 sm:mt-12">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorSystem" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#D97706" stopOpacity={0.3}/>
                                                <stop offset="95%" stopColor="#D97706" stopOpacity={0}/>
                                            </linearGradient>
                                        </defs>
                                        <XAxis dataKey="month" stroke="#777777" tick={{fill: '#777777', fontSize: 12, fontWeight: 900}} tickLine={false} axisLine={false} />
                                        <YAxis stroke="#777777" tick={{fill: '#777777', fontSize: 12, fontWeight: 900}} tickLine={false} axisLine={false} />
                                        <Tooltip 
                                            contentStyle={{ backgroundColor: '#0D0D0D', borderColor: '#FFFFFF', color: '#FFFFFF', fontWeight: 'bold' }}
                                            itemStyle={{ fontWeight: 'black' }}
                                            cursor={{ stroke: '#FFFFFF', strokeWidth: 1, strokeDasharray: '4 4' }}
                                        />
                                        <Area type="monotone" dataKey="single" name="Single Service" stroke="#777777" strokeWidth={3} fill="transparent" />
                                        <Area type="monotone" dataKey="system" name="Maniac System" stroke="#D97706" strokeWidth={4} fillOpacity={1} fill="url(#colorSystem)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </FadeUp>

                    {/* Systems grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-foreground bg-foreground">
                        {systems.map((s, i) => (
                            <FadeUp
                                key={i}
                                delay={i * 0.05}
                                className="bg-background p-10 border-r-2 border-b-2 border-foreground/30 group hover:border-foreground hover:-translate-y-[3px] transition-all duration-200 relative"
                            >
                                {s.featured && (
                                    <div className="absolute -top-4 left-10 bg-accent-yellow text-black font-black text-xs px-4 py-1.5 border-2 border-foreground uppercase tracking-widest">
                                        Most Popular
                                    </div>
                                )}

                                <div className="flex items-start justify-between mb-6">
                                    <span className="font-heading text-7xl font-black leading-none text-foreground opacity-10 group-hover:opacity-20 transition-opacity">
                                        {s.num}
                                    </span>
                                    <span className={`${s.accent} ${s.textAccent} border-2 ${s.borderAccent} font-black text-xs uppercase tracking-widest px-3 py-1`}>
                                        System
                                    </span>
                                </div>

                                <h3 className="font-heading text-3xl md:text-4xl font-black uppercase text-foreground leading-tight mb-3 whitespace-pre-line">
                                    {s.name}
                                </h3>
                                <p className={`font-black text-xs uppercase tracking-widest mb-5 ${s.accent === 'bg-accent-yellow' ? 'text-accent-red' : s.accent === 'bg-foreground' ? 'text-accent-yellow' : 'text-accent-yellow'}`}>
                                    {s.tagline}
                                </p>
                                <p className="font-bold text-sm text-foreground opacity-70 mb-6 leading-snug group-hover:opacity-100 transition-opacity">
                                    {s.description}
                                </p>
                                <ul className="space-y-2">
                                    {s.includes.map((item, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm font-bold text-foreground">
                                            <span className={`w-5 h-5 shrink-0 border-2 border-foreground/50 ${s.accent} ${s.textAccent} flex items-center justify-center text-xs font-black group-hover:border-foreground transition-colors`}>+</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </FadeUp>
                        ))}
                    </div>

                    <FadeUp className="mt-12 flex flex-col sm:flex-row gap-4 items-start">
                        <Button size="lg" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                            Apply to Work With Us
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <a href="/ai-growth-audit" className="border-2 border-foreground px-6 py-4 bg-background hover:bg-foreground hover:text-background transition-none group flex items-center">
                            <p className="font-black text-sm text-foreground uppercase tracking-widest group-hover:text-background transition-none">
                                Not sure where to start? Free Brand Audit →
                            </p>
                        </a>
                    </FadeUp>
                </div>
            </div>
        </section>
    );
}
