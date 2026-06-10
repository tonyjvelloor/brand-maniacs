"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/config";

export function Hero() {
    return (
        <section className="relative min-h-[100vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden bg-black">
            {/* Cinematic Background Video */}
            <div className="absolute inset-0 z-0">
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover opacity-60 mix-blend-screen scale-105"
                >
                    <source src="https://cdn.pixabay.com/video/2023/10/22/186115-877134375_large.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Gradients & Vignette for Text Contrast */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-foreground via-transparent to-transparent pointer-events-none h-48"></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-foreground via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(13,13,13,0.8)_100%)] pointer-events-none"></div>

            {/* Film Grain / Noise Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.08] mix-blend-overlay" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>

            {/* Glowing Accent Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-yellow opacity-10 rounded-full blur-[100px] pointer-events-none z-0"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">

                    {/* Studio label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15 }}
                        className="mb-10"
                    >
                        <span className="inline-flex items-center gap-3 border-2 border-white/20 bg-white/5 px-4 py-2 backdrop-blur-sm relative z-10">
                            <span className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse shadow-[0_0_10px_rgba(255,230,0,0.8)]" />
                            <span className="font-black text-[11px] uppercase tracking-widest text-white/80">
                                Creative Technology Studio · Est. India
                            </span>
                        </span>
                    </motion.div>

                    {/* Main headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15, delay: 0.05 }}
                        className="mb-10"
                    >
                        <h1 className="font-heading font-black uppercase tracking-tighter text-white leading-[0.9] text-5xl sm:text-6xl md:text-[72px] lg:text-[96px]">
                            Brands don&apos;t<br />
                            grow by creating<br />
                            more.<br />
                            <span className="text-white/50">They grow by</span><br />
                            <span className="bg-accent-yellow text-black px-4 inline-block mt-1">becoming</span><br />
                            <span className="relative inline-block mt-1">
                                <span className="relative z-10 bg-accent-red text-white px-4 py-1">impossible to ignore.</span>
                            </span>
                        </h1>
                    </motion.div>

                    {/* Sub */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15, delay: 0.1 }}
                        className="max-w-2xl mb-12"
                    >
                        <p className="text-lg md:text-xl font-bold text-white/90 leading-snug border-l-4 border-accent-yellow pl-5">
                            The Brand Maniacs is an AI-powered growth studio building brands through strategy, storytelling, AI-powered production, and growth experiments.
                        </p>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.15, delay: 0.15 }}
                        className="flex flex-col sm:flex-row items-start gap-4 mb-20"
                    >
                        <Button variant="inverted" size="lg" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                            Build My Growth System
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button variant="outlineWhite" size="lg" href="/labs">
                            Explore Technology ↗
                        </Button>
                    </motion.div>

                    {/* Bottom bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.15, delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-white/20 bg-white/10 max-w-3xl backdrop-blur-md"
                    >
                        {[
                            { v: "Human", s: "Strategy First" },
                            { v: "AI", s: "Production Scale" },
                            { v: "Testing", s: "Before Assuming" },
                            { v: "Systems", s: "Not Random Posts" },
                        ].map((item, i) => (
                            <div key={i} className="p-3 sm:p-5 border-r-2 border-b-2 md:border-b-0 border-white/20 last:border-r-0 group hover:bg-white hover:text-black transition-colors">
                                <div className="font-heading text-base font-black uppercase text-white group-hover:text-black">{item.v}</div>
                                <div className="text-xs font-bold text-white/50 group-hover:text-black/70 uppercase tracking-widest">{item.s}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
