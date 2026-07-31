"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import posthog from 'posthog-js';
import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const resultsData = [
    {
        headlineMetric: "Full-Stack",
        headlineLabel: "SaaS Build",
        client: "FlexPilot",
        category: "Technology · Flagship Product",
        accentColor: "bg-accent-red",
        accentText: "text-white",
        problem: "Flexible workspaces were struggling with operational inefficiencies. Booking management, access control, and lead pipelines were fragmented across multiple tools.",
        systemBuilt: [
            "Identified operational challenges in coworking spaces",
            "Designed the product strategy & brand identity",
            "Engineered the SaaS platform with AI-assisted workflows",
            "Took it from concept to launch"
        ],
        metrics: [
            { label: "Execution", value: "Concept to Launch", width: "100%" },
            { label: "Capability", value: "Revenue OS", width: "100%" }
        ],
        outcome: "Built the Revenue Operating System for flexible workspaces. Proof that we don't just design websites—we build and scale real products.",
        badgeText: "Flagship Product"
    },
    {
        headlineMetric: "Live",
        headlineLabel: "Product",
        client: "CouponHub.store",
        category: "Consumer Marketplace · Savings Platform",
        accentColor: "bg-accent-blue",
        accentText: "text-white",
        problem: "Consumers were frustrated by outdated coupons, intrusive advertising, and unreliable savings platforms. The objective was to build a premium destination where shoppers could quickly discover verified deals from leading brands.",
        systemBuilt: [
            "Designed and developed a high-performance platform using Next.js",
            "Built an SEO-first architecture for long-term organic growth",
            "Created a premium dark-mode shopping experience",
            "Developed intelligent merchant categorisation and coupon discovery",
            "Engineered a scalable foundation for affiliate commerce"
        ],
        metrics: [
            { label: "Capabilities", value: "Aggregator Engine", width: "100%" },
            { label: "SEO", value: "Programmatic", width: "85%" }
        ],
        outcome: "CouponHub demonstrates our ability to take a product from concept to launch by combining product strategy, branding, UX, engineering, SEO, and growth infrastructure into a single platform.",
        badgeText: "Built & Operated by The Brand Maniacs",
        link: "https://www.couponhub.store/"
    },
    {
        headlineMetric: "+120%",
        headlineLabel: "Patient Volume",
        client: "Karmanya Ayurveda",
        category: "Wellness · Ayurveda",
        accentColor: "bg-accent-yellow",
        accentText: "text-black",
        problem: "A traditional Ayurveda clinic with deep clinical expertise but zero digital presence. They were competing on discounts in a market where trust is the only currency that matters.",
        systemBuilt: [
            "Built an educational content system combining doctor authority and patient psychology",
            "Created landing pages that spoke the language of the patient",
            "Ran targeted campaigns to high-intent wellness audiences"
        ],
        metrics: [
            { label: "Cost Per Consultation", value: "-40%", width: "60%" },
            { label: "Brand Perception", value: "Premium", width: "100%" }
        ],
        outcome: "Shifted positioning from discount-clinic to premium wellness destination. Patient volume grew consistently month-over-month without a single discount offered.",
    },
    {
        headlineMetric: "3x",
        headlineLabel: "Inbound Demos",
        client: "B2B SaaS Founder",
        category: "SaaS · LinkedIn Authority",
        accentColor: "bg-accent-blue",
        accentText: "text-white",
        problem: "Excellent product. Completely invisible. No LinkedIn presence, a 4-month average sales cycle, and 100% dependence on outbound cold outreach that was getting harder every quarter.",
        systemBuilt: [
            "Built a 90-day founder LinkedIn content strategy around real insight",
            "Created a content-to-demo pipeline nurturing cold audiences to warm leads",
            "Built a weekly publishing system running with minimal founder time"
        ],
        metrics: [
            { label: "LinkedIn Following", value: "12K → 61K", width: "100%" },
            { label: "Sales Cycle", value: "6 Weeks", width: "75%" }
        ],
        outcome: "LinkedIn following grew to 61,000. Inbound demo requests tripled. Sales cycle compressed from 4 months to 6 weeks. Authority compounds.",
    },
    {
        headlineMetric: "-95%",
        headlineLabel: "Production Cost",
        client: "AIProdGen Experiment",
        category: "Technology · Internal IP",
        accentColor: "bg-background",
        accentText: "text-foreground",
        problem: "Product shoots are slow and expensive (₹50,000+). D2C brands hesitate to test radical creative angles because the cost of failure is too high.",
        systemBuilt: [
            "Engineered prompts to place product in 20 radically different environments",
            "Generated high-fidelity, ad-ready assets maintaining exact brand lighting",
            "Built a workflow completing the entire process in under 45 minutes"
        ],
        metrics: [
            { label: "Creative Output", value: "20x", width: "100%" },
            { label: "Testing Speed", value: "Days → Hours", width: "90%" }
        ],
        outcome: "Replaced a ₹50,000 physical shoot with infinite creative variations. Allowed the brand to run a 20-variant creative testing sprint at a fraction of the cost.",
        badgeText: "Technology Lab"
    },
];

function ResultCard({ data, index }: { data: typeof resultsData[0], index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!cardRef.current || !contentRef.current) return;
        
        const xTo = gsap.quickTo(contentRef.current, "rotationY", { duration: 0.8, ease: "power3.out" });
        const yTo = gsap.quickTo(contentRef.current, "rotationX", { duration: 0.8, ease: "power3.out" });

        const handleMouseMove = (e: MouseEvent) => {
            const rect = cardRef.current!.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width * 2 - 1;
            const y = (e.clientY - rect.top) / rect.height * 2 - 1;

            // Tilt limit: 3 degrees
            xTo(x * 3);
            yTo(-y * 3); 
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        const el = cardRef.current;
        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
            el.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <FadeUp
            delay={index * 0.05}
            className="border-b-2 border-foreground last:border-b-0 result-card transition-all duration-300"
        >
            <div ref={cardRef} style={{ perspective: "1500px" }}>
                <div 
                    ref={contentRef} 
                    className="bg-background grid grid-cols-1 lg:grid-cols-12 will-change-transform"
                    style={{ transformStyle: "preserve-3d" }}
                    onClick={() => posthog.capture('case_study_viewed', { project: data.client, category: data.category })}
                >
                    {/* Left Accent - Massive Number Focus */}
                    <div className={`lg:col-span-4 ${data.accentColor} p-8 flex flex-col justify-between border-r-2 lg:border-b-0 border-b-2 border-foreground relative`}>
                        {(data as any).badgeText && (
                            <div className="absolute top-4 right-4 bg-accent-yellow text-black px-2 py-1 text-[10px] font-black uppercase tracking-widest border-2 border-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-right max-w-[200px]">
                                {(data as any).badgeText}
                            </div>
                        )}
                        <div>
                            <div className={`font-heading text-6xl md:text-8xl font-black leading-none ${data.accentText} tracking-tighter`}>
                                {data.headlineMetric}
                            </div>
                            <div className={`font-heading text-xl md:text-3xl font-black uppercase tracking-tighter ${data.accentText} mt-2`}>
                                {data.headlineLabel}
                            </div>
                        </div>
                        <div className="mt-12 lg:mt-0 pt-8 border-t-2 border-black/20">
                            <div className={`text-xs font-black uppercase tracking-widest ${data.accentText} opacity-60 mb-1`}>
                                {data.category}
                            </div>
                            <div className={`font-heading font-black uppercase text-lg leading-tight ${data.accentText}`}>
                                {data.client}
                            </div>
                        </div>
                    </div>

                    {/* Content (Bento Grid Internal) */}
                    <div className="lg:col-span-8 p-8 md:p-10 flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
                            
                            {/* Problem Box */}
                            <div className="border-2 border-foreground p-6 bg-background">
                                <span className="text-xs font-black uppercase tracking-widest text-accent-red block mb-3 border-l-2 border-accent-red pl-3">Before</span>
                                <p className="font-bold text-sm text-foreground leading-snug">{data.problem}</p>
                            </div>

                            {/* Metrics Box */}
                            <div className="border-2 border-foreground p-6 bg-foreground text-background flex flex-col justify-center">
                                <span className="text-xs font-black uppercase tracking-widest opacity-70 block mb-4 border-l-2 border-background pl-3">Impact Metrics</span>
                                <div className="grid grid-cols-1 gap-6">
                                    {data.metrics?.map((metric, k) => (
                                        <div key={k} className="relative overflow-hidden">
                                            <div className="flex justify-between items-end mb-2 relative z-10">
                                                <span className="text-xs font-black uppercase tracking-widest opacity-50">{metric.label}</span>
                                                <span className="font-heading text-xl font-black">{metric.value}</span>
                                            </div>
                                            <div className="h-1.5 w-full bg-background/20">
                                                <div className={`h-full bg-accent-yellow`} style={{ width: metric.width }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* System Built Box */}
                            <div className="border-2 border-foreground p-6 bg-background md:col-span-2">
                                <span className="text-xs font-black uppercase tracking-widest text-accent-blue block mb-4 border-l-2 border-accent-blue pl-3">The Process</span>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {data.systemBuilt.map((item, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm font-bold text-foreground">
                                            <span className="text-accent-yellow font-black shrink-0 mt-0.5 border-2 border-foreground w-4 h-4 flex items-center justify-center text-[10px] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] bg-background">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Outcome Box */}
                            <div className="md:col-span-2 bg-accent-yellow text-black p-6 border-2 border-black flex flex-col justify-between items-start gap-6">
                                <div>
                                    <span className="text-xs font-black uppercase tracking-widest opacity-60 block mb-2 border-l-2 border-black pl-3">After</span>
                                    <p className="font-bold text-sm md:text-base leading-snug">{data.outcome}</p>
                                </div>
                                {(data as any).link && (
                                    <a onClick={(e) => e.stopPropagation()} href={(data as any).link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-black px-6 py-3 font-black text-sm uppercase tracking-widest hover:bg-black hover:text-accent-yellow transition-none group/btn">
                                        Explore {data.client.split('.')[0]}
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </a>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </FadeUp>
    );
}

export function ResultsShowcase() {
    return (
        <section className="py-24 bg-background border-b-2 border-foreground" id="work">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <FadeUp className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
                        <div>
                            <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 bg-accent-yellow text-black">
                                Measurable Impact
                            </span>
                            <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground leading-[0.95]">
                                Results <br />
                                <span className="bg-foreground text-background px-2">Not just</span><br />
                                deliverables.
                            </h2>
                        </div>
                        <div>
                            <p className="text-lg font-bold text-foreground opacity-80 leading-snug mb-4">
                                We don't hide behind pretty design. Every system we engineer is measured against one metric: business growth.
                            </p>
                            <p className="text-xs font-black text-foreground opacity-40 uppercase tracking-widest">
                                Before → The Process → After
                            </p>
                        </div>
                    </FadeUp>

                    {/* Case Study Cards */}
                    <div className="space-y-0 border-2 border-foreground bg-foreground result-card-container has-[.result-card:hover]:[.result-card:not(:hover)]:opacity-50 has-[.result-card:hover]:[.result-card:not(:hover)]:blur-sm transition-all duration-300">
                        {resultsData.map((data, i) => (
                            <ResultCard key={i} data={data} index={i} />
                        ))}
                    </div>

                    <FadeUp className="mt-10">
                        <Link href="/work" className="inline-flex items-center gap-3 border-2 border-foreground px-8 py-4 font-black text-sm uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-none">
                            See All Growth Projects
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </FadeUp>
                </div>
            </div>
        </section>
    );
}
