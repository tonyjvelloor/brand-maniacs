"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Calendar, XCircle, ShieldCheck, AlertOctagon } from "lucide-react";
import { trackCTAClick } from "@/lib/tracking";
import { HeroVisualInteractive } from "./HeroVisualInteractive";

interface AdsRescueHeroProps {
  onOpenCheckout: () => void;
}

export function AdsRescueHero({ onOpenCheckout }: AdsRescueHeroProps) {
  const handleCTAClick = () => {
    trackCTAClick("hero_cta", "GET YOUR ADS CHECKED — ₹2,499");
    onOpenCheckout();
  };

  return (
    <section className="relative pt-6 pb-14 md:pt-12 md:pb-20 bg-[#0A0A0A] text-foreground border-b-2 border-foreground/15 overflow-hidden">
      {/* Background Ambience Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-accent-yellow/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* 2-Column Desktop Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center max-w-7xl mx-auto">
          
          {/* Left Column: Core Narrative & Conversion Triggers */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            
            {/* Overline Qualification Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-accent-yellow text-black border-2 border-black px-3.5 py-1 text-xs font-mono font-black uppercase tracking-wider shadow-[3px_3px_0_0_#FFE600]"
            >
              <span className="w-2 h-2 rounded-full bg-accent-red animate-ping" />
              <span>FOR BUSINESSES SPENDING ₹25,000+/MONTH ON ADS</span>
            </motion.div>

            {/* Main Headline — High Emotional Impact */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tighter uppercase leading-[1.05] text-foreground"
            >
              SPENDING MONEY ON ADS <br />
              BUT NOT GETTING THE <br />
              <span className="text-accent-yellow underline decoration-accent-red decoration-4 md:decoration-6 underline-offset-4">
                RESULTS YOU EXPECTED?
              </span>
            </motion.h1>

            {/* Subtitle & Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-sm sm:text-base md:text-lg text-foreground/85 font-medium leading-relaxed max-w-xl"
            >
              We'll analyse your Google or Meta Ads, find the biggest problems, and show you exactly what to fix first.
            </motion.p>

            {/* Primary Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="space-y-3 pt-1"
            >
              <button
                type="button"
                onClick={handleCTAClick}
                className="w-full sm:w-auto bg-accent-yellow text-black hover:bg-white border-2 border-black font-heading font-black uppercase text-base sm:text-xl py-4 sm:py-4.5 px-8 tracking-wider brutalist-shadow transition-all hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#F0F0F0] active:translate-x-0 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>GET YOUR ADS CHECKED — ₹2,499</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              {/* 3 Trust Badges (From Mockup) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] font-mono text-foreground/80 pt-1">
                <div className="flex items-center gap-1.5 bg-[#141414] border border-foreground/15 px-2.5 py-1.5">
                  <Calendar className="w-3.5 h-3.5 text-accent-yellow shrink-0" />
                  <span>One-time payment</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#141414] border border-foreground/15 px-2.5 py-1.5">
                  <XCircle className="w-3.5 h-3.5 text-accent-red shrink-0" />
                  <span>No monthly commitment</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#141414] border border-foreground/15 px-2.5 py-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-400 shrink-0" />
                  <span>60-Min Strategy Session</span>
                </div>
              </div>
            </motion.div>

            {/* Standard Price Anchor Note */}
            <div className="text-xs font-mono text-foreground/60 pt-1 flex items-center gap-2">
              <span>Standard Price: <del className="text-foreground/40">₹7,500</del></span>
              <span>·</span>
              <span className="text-accent-yellow font-bold">Save ₹5,000 during Launch</span>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <HeroVisualInteractive />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
