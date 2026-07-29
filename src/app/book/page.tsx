"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { CALENDLY_URL } from "@/lib/config";
import Link from "next/link";
import posthog from 'posthog-js';
import { useEffect } from "react";
import { FadeUp } from "@/components/ui/FadeUp";

export default function BookStrategySession() {
    useEffect(() => {
        posthog.capture('booking_page_viewed');
    }, []);

    return (
        <main className="min-h-screen bg-background text-foreground pt-32 pb-24">
            <div className="container mx-auto px-4 md:px-6">
                
                <Link href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-accent-yellow transition-colors mb-12">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                </Link>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                    
                    {/* Left Column: What to Expect */}
                    <div className="lg:col-span-5">
                        <FadeUp>
                            <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 bg-accent-yellow text-black">
                                Strategy Session
                            </span>
                            <h1 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
                                Engineering your <br /> growth roadmap.
                            </h1>
                            <p className="font-bold text-lg opacity-80 leading-snug mb-12">
                                We don't do traditional sales pitches. This is a 30-minute working session to diagnose your bottlenecks and map out a technical growth infrastructure.
                            </p>
                        </FadeUp>

                        <div className="space-y-10">
                            {/* What Happens */}
                            <FadeUp delay={0.1}>
                                <h3 className="font-heading text-xl font-black uppercase mb-4 text-accent-red border-l-2 border-accent-red pl-3">What Happens</h3>
                                <ul className="space-y-3 font-bold opacity-80 text-sm">
                                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent-yellow shrink-0 mt-0.5" /> 30-minute working session</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent-yellow shrink-0 mt-0.5" /> Meet directly with a senior strategist</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent-yellow shrink-0 mt-0.5" /> Review your AI-generated roadmap</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent-yellow shrink-0 mt-0.5" /> Identify high-leverage opportunities</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent-yellow shrink-0 mt-0.5" /> Agree on actionable next steps</li>
                                </ul>
                            </FadeUp>

                            {/* What to Prepare */}
                            <FadeUp delay={0.2}>
                                <h3 className="font-heading text-xl font-black uppercase mb-4 text-accent-blue border-l-2 border-accent-blue pl-3">What to Prepare</h3>
                                <ul className="space-y-3 font-bold opacity-80 text-sm">
                                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent-yellow shrink-0 mt-0.5" /> Context on current marketing challenges</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent-yellow shrink-0 mt-0.5" /> Baseline analytics (if available)</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent-yellow shrink-0 mt-0.5" /> Business and revenue goals</li>
                                </ul>
                            </FadeUp>

                            {/* What You'll Leave With */}
                            <FadeUp delay={0.3}>
                                <h3 className="font-heading text-xl font-black uppercase mb-4 text-foreground border-l-2 border-foreground pl-3">What You'll Leave With</h3>
                                <ul className="space-y-3 font-bold opacity-80 text-sm">
                                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent-yellow shrink-0 mt-0.5" /> Immediate growth priorities</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent-yellow shrink-0 mt-0.5" /> Suggested systems and infrastructure</li>
                                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-accent-yellow shrink-0 mt-0.5" /> Clarity on whether we're the right fit</li>
                                </ul>
                            </FadeUp>
                        </div>
                    </div>

                    {/* Right Column: Calendly Embed */}
                    <div className="lg:col-span-7">
                        <FadeUp delay={0.4} className="h-full">
                            <div className="bg-foreground text-background p-2 border-2 border-foreground h-[700px] w-full">
                                <iframe 
                                    src={`${CALENDLY_URL}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=1C1C1C&text_color=F4F4F0&primary_color=FFE600`}
                                    width="100%" 
                                    height="100%" 
                                    frameBorder="0"
                                    className="h-full w-full bg-foreground"
                                    title="Book Strategy Session"
                                ></iframe>
                            </div>
                        </FadeUp>
                    </div>

                </div>
            </div>
        </main>
    );
}
