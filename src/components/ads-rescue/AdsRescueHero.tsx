"use client";

import { motion } from "framer-motion";
import { LeakingBudgetVisual } from "./LeakingBudgetVisual";
import { trackCTAClick } from "@/lib/tracking";
import { ArrowRight, CheckCircle2, AlertOctagon, ShieldCheck, Zap } from "lucide-react";

interface AdsRescueHeroProps {
  onOpenCheckout?: () => void;
}

export function AdsRescueHero({ onOpenCheckout }: AdsRescueHeroProps) {
  const handleCTAClick = () => {
    trackCTAClick("hero_cta", "Get Your Ads Diagnosed — ₹2,499");
    if (onOpenCheckout) {
      onOpenCheckout();
    } else {
      const el = document.getElementById("offer");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 bg-[#0A0A0A] text-foreground border-b-2 border-foreground/15 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-accent-yellow/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8">
          
          {/* Eyebrow / Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-[#1A1A1A] border-2 border-foreground/20 px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-accent-yellow"
          >
            <span className="w-2 h-2 rounded-full bg-accent-red animate-ping" />
            <span>Google & Meta Ads Forensic Diagnostic</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.95] text-foreground"
          >
            BEFORE YOU SPEND <br className="hidden sm:block" />
            ANOTHER <span className="text-accent-yellow underline decoration-accent-red decoration-4 md:decoration-8 underline-offset-4">₹10,000</span> ON ADS.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground/90 max-w-3xl mx-auto leading-tight"
          >
            Find out what went wrong with the money you've already spent.
          </motion.p>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="font-mono text-sm sm:text-base text-foreground/70 max-w-2xl mx-auto leading-relaxed"
          >
            A deep-dive forensic diagnostic for businesses spending ₹25,000+ per month on Google or Meta Ads but not getting the leads or customers they expected.
          </motion.p>

          {/* Primary CTA & Microcopy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2 flex flex-col items-center justify-center gap-3"
          >
            <button
              type="button"
              onClick={handleCTAClick}
              className="w-full sm:w-auto min-w-[320px] sm:min-w-[420px] bg-accent-yellow text-black hover:bg-white border-2 border-black font-heading font-black uppercase text-base sm:text-xl py-4 sm:py-5 px-8 tracking-wider brutalist-shadow transition-all hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0_0_#F0F0F0] active:translate-x-0 active:translate-y-0 active:shadow-none flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Get Your Ads Diagnosed — ₹2,499</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>

            {/* Direct Qualification Subtext Under CTA */}
            <p className="font-mono text-xs sm:text-sm font-bold text-accent-yellow">
              For businesses already spending ₹25,000+/month on Google or Meta Ads.
            </p>

            {/* Microcopy & Price Anchor */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono font-bold text-foreground/60 pt-1">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                One-time payment
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                No monthly commitment
              </span>
              <span>·</span>
              <span>
                Standard Price: <del className="text-foreground/40">₹7,500</del>
              </span>
            </div>

            {/* The Buyer Psychology Callout */}
            <div className="bg-[#141414] border border-foreground/15 px-4 py-2 mt-1 text-[11px] font-mono text-foreground/75 max-w-lg mx-auto">
              💡 <span className="text-foreground font-bold">The ROI Reality:</span> If ₹2,499 helps you plug even one recurring leak in your ₹30k–₹1L+ monthly spend, this diagnostic pays for itself on day one.
            </div>
          </motion.div>

          {/* Qualification Callout Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="bg-[#141414] border-2 border-foreground/20 p-4 sm:p-5 max-w-3xl mx-auto text-left"
          >
            <div className="flex items-center gap-2 mb-3 text-accent-yellow font-mono text-xs font-black uppercase tracking-widest">
              <AlertOctagon className="w-4 h-4 text-accent-red" />
              <span>Strict Qualification Notice</span>
            </div>
            <p className="text-xs sm:text-sm font-sans font-bold text-foreground/90 mb-2">
              This diagnostic session is exclusively for businesses that are:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-foreground/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-yellow shrink-0" />
                <span>Spending ₹25,000+/month on ads</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-yellow shrink-0" />
                <span>Running Google Ads, Meta Ads, or both</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-yellow shrink-0" />
                <span>Already experiencing poor or stagnant results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-yellow shrink-0" />
                <span>Wanting to understand what is actually wrong</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Leaking Budget Metaphor Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 max-w-5xl mx-auto"
        >
          <LeakingBudgetVisual />
        </motion.div>

      </div>
    </section>
  );
}
