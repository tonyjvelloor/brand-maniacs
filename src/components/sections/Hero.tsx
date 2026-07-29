"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import posthog from 'posthog-js';

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";

// Dynamically import heavy WebGL background to avoid blocking initial render
const LiquidBackground = dynamic(() => import("@/components/animations/LiquidBackground").then(mod => mod.LiquidBackground), { ssr: false });

export function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const [isFirstVisit, setIsFirstVisit] = useState(true);

    useEffect(() => {
        // Check session storage to see if they've already seen the preloader
        const hasVisited = sessionStorage.getItem("tbm_visited");
        if (hasVisited) {
            setIsFirstVisit(false);
        } else {
            sessionStorage.setItem("tbm_visited", "true");
        }
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline();

        if (isFirstVisit) {
            // Tension Preloader Sequence (Max 2 seconds total)
            tl.to(".preloader-text-1", { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" })
              .to(".preloader-text-1", { opacity: 0, y: -10, duration: 0.3, delay: 0.4, ease: "power2.in" })
              
              .to(".preloader-text-2", { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" })
              .to(".preloader-text-2", { opacity: 0, y: -10, duration: 0.3, delay: 0.5, ease: "power2.in" })
              
              .to(".preloader-logo", { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.5)" })
              .to(".preloader", { yPercent: -100, duration: 0.6, ease: "expo.inOut", delay: 0.3 })
              .set(".preloader", { display: "none" });
        } else {
            // If returning visitor, hide preloader immediately
            gsap.set(".preloader", { display: "none" });
        }

        // Hero Reveal Sequence (Starts after preloader finishes, or immediately)
        const heroTl = gsap.timeline({ delay: isFirstVisit ? 2.5 : 0.2 });

        heroTl.from(".hero-label", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" })
              .to(".word-reveal", {
                  y: 0,
                  rotationZ: 0,
                  opacity: 1,
                  stagger: 0.05,
                  duration: 0.8,
                  ease: "power4.out"
              }, "-=0.3")
              .from(".hero-sub", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.4")
              .from(".hero-cta", { opacity: 0, y: 20, duration: 0.6, stagger: 0.1, ease: "power3.out" }, "-=0.4")
              .from(".hero-bottom", { opacity: 0, y: 20, duration: 0.6, stagger: 0.1, ease: "power3.out" }, "-=0.4");

    }, { scope: container, dependencies: [isFirstVisit] });

    // Helper to wrap words for GSAP masking
    const wrapWords = (text: string, customClass = "") => {
        return text.split(' ').map((word, i) => (
            <span key={i} className="inline-block overflow-hidden mr-[0.25em] align-bottom pb-2">
                <span className={`inline-block translate-y-[120%] rotate-2 opacity-0 word-reveal will-change-transform ${customClass}`}>{word}</span>
            </span>
        ));
    };

    return (
        <section ref={container} className="relative min-h-[100vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-black">
            
            {/* Tension Preloader */}
            <div className={`preloader fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center ${!isFirstVisit ? 'hidden' : ''}`}>
                <div className="preloader-text-1 absolute opacity-0 translate-y-4 font-heading text-2xl md:text-4xl text-white font-black uppercase tracking-widest text-center px-4">
                    Most agencies make websites.
                </div>
                <div className="preloader-text-2 absolute opacity-0 translate-y-4 font-heading text-3xl md:text-5xl text-accent-yellow font-black uppercase tracking-widest text-center px-4">
                    We engineer growth.
                </div>
                <div className="preloader-logo absolute opacity-0 scale-90 font-heading text-5xl text-white font-black tracking-tighter">
                    TBM™
                </div>
            </div>

            {/* Interactive WebGL Liquid Background */}
            <LiquidBackground />

            {/* Gradients & Vignette for Text Contrast */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none h-48"></div>

            {/* Film Grain / Noise Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">

                    {/* Studio label */}
                    <div className="mb-10 hero-label opacity-100">
                        <span className="inline-flex items-center gap-3 border-2 border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm relative z-10">
                            <span className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse shadow-[0_0_10px_rgba(255,230,0,0.8)]" />
                            <span className="font-black text-[11px] uppercase tracking-widest text-white/80">
                                Growth Infrastructure Studio · Est. India
                            </span>
                        </span>
                    </div>

                    {/* Main headline */}
                    <div className="mb-10">
                        <h1 className="font-heading font-black uppercase tracking-tighter text-white leading-[0.9] text-5xl sm:text-6xl md:text-[72px] lg:text-[96px]">
                            <div className="flex flex-wrap">{wrapWords("We Build Brands")}</div>
                            <div className="flex flex-wrap items-center mt-2">
                                {wrapWords("and Digital Products", "text-white/50")}
                            </div>
                            <div className="flex flex-wrap mt-2 lg:mt-4">
                                <span className="inline-block overflow-hidden relative">
                                    <span className="inline-block translate-y-[120%] word-reveal relative z-10 bg-accent-yellow text-black px-4 pb-2 pt-1 lg:pt-3 lg:pb-4">That Drive Measurable Growth.</span>
                                </span>
                            </div>
                        </h1>
                    </div>

                    {/* Sub */}
                    <div className="max-w-2xl mb-12 hero-sub opacity-100">
                        <p className="text-lg md:text-xl font-bold text-white/90 leading-snug border-l-4 border-accent-yellow pl-5">
                            Strategy, design and technology engineered to increase trust, conversions and long-term business growth.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                        <div className="hero-cta opacity-100">
                            <Button variant="inverted" size="lg" href="/start" isMagnetic={true}>
                                Start Your Growth Project
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </div>
                        <div className="hero-cta opacity-100">
                            <Button 
                                variant="outlineWhite" 
                                size="lg" 
                                href="/book" 
                                isMagnetic={true}
                                onClick={() => posthog.capture('hero_cta_clicked', { source: 'hero_primary' })}
                            >
                                Book Strategy Session ↗
                            </Button>
                        </div>
                    </div>

                    {/* Social Proof Above the Fold */}
                    <div className="mb-20 hero-bottom opacity-100">
                        <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">Trusted by 40+ brands generating ₹3.2Cr+ ad spend</p>
                    </div>

                    {/* Bottom bar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-white/20 bg-white/10 max-w-3xl backdrop-blur-md hero-bottom opacity-100">
                        {[
                            { v: "Human", s: "Strategy First" },
                            { v: "AI", s: "Where It Adds Value" },
                            { v: "Testing", s: "Performance-first" },
                            { v: "Systems", s: "Long-term growth" },
                        ].map((item, i) => (
                            <div key={i} className="p-3 sm:p-5 border-r-2 border-b-2 md:border-b-0 border-white/20 last:border-r-0 group hover:bg-white hover:text-black transition-colors">
                                <div className="font-heading text-base font-black uppercase text-white group-hover:text-black">{item.v}</div>
                                <div className="text-xs font-bold text-white/50 group-hover:text-black/70 uppercase tracking-widest">{item.s}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
