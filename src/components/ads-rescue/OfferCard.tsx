"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Lock, Sparkles, ArrowRight, Zap, Clock, TrendingUp } from "lucide-react";
import { trackCTAClick } from "@/lib/tracking";

interface OfferCardProps {
  onOpenCheckout: () => void;
}

const UPGRADED_DELIVERABLES = [
  {
    title: "Pre-Session Account Diagnostic",
    desc: "We review your Google Ads and/or Meta Ads setup before the call.",
  },
  {
    title: "Ad Spend Leak Analysis",
    desc: "We identify where budget is wasted across campaigns, targeting, keywords, audiences or funnel stages.",
  },
  {
    title: "Lead Quality Diagnosis",
    desc: "Not just “How many leads?” but: Are these the right people converting into actual revenue?",
  },
  {
    title: "Tracking & Conversion Review",
    desc: "We check whether your campaigns are optimizing toward meaningful bottom-line actions.",
  },
  {
    title: "Campaign & Targeting Analysis",
    desc: "Deep audit of structure, search intent, audience exclusions, creative messaging, and budget allocation.",
  },
  {
    title: "60-Minute Strategy Session",
    desc: "Live 1-on-1 screen share: What's working. What's broken. What to fix first.",
  },
  {
    title: "Priority Action Plan",
    desc: "A clear roadmap: DO THIS FIRST → THEN THIS → DON'T WASTE MONEY HERE YET.",
  },
];

const VALUE_STACK = [
  { item: "Ad Account Diagnostic", value: "₹2,000" },
  { item: "Ad Spend Leak Analysis", value: "₹1,500" },
  { item: "Targeting & Lead Quality Review", value: "₹1,500" },
  { item: "Tracking & Funnel Review", value: "₹1,000" },
  { item: "60-Minute Strategy Session", value: "₹2,000" },
  { item: "Priority Action Plan", value: "₹1,000" },
];

export function OfferCard({ onOpenCheckout }: OfferCardProps) {
  const handleCTAClick = () => {
    trackCTAClick("offer_card_cta", "DIAGNOSE MY ADS — ₹2,499");
    onOpenCheckout();
  };

  return (
    <section id="offer" className="py-16 md:py-28 bg-[#000000] text-foreground border-b-2 border-foreground/20 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-yellow/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Main Standout Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto bg-[#141414] border-4 border-accent-yellow p-6 sm:p-10 md:p-12 shadow-[12px_12px_0_0_#FFE600] relative"
        >
          {/* Top Pill / Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-foreground/15 pb-6 mb-8">
            <div className="space-y-1.5">
              <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-widest text-accent-yellow block">
                THE BRAND MANIACS PRESENTS
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
                ADS RESCUE SESSION
              </h2>
              <p className="font-mono text-xs sm:text-sm text-foreground/80 font-bold uppercase tracking-wide">
                Real Analysis. Real Answers. A Clear Action Plan.
              </p>
            </div>

            <div className="bg-accent-yellow text-black px-4 py-2 font-mono text-xs font-black uppercase tracking-wider border-2 border-black shadow-[3px_3px_0_0_#000]">
              Founding Launch Offer
            </div>
          </div>

          {/* Grid Layout: Deliverables & Tangible Value Stack */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
            
            {/* Left: 7 Core Deliverables */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-black uppercase tracking-widest text-white/90 block">
                  WHAT'S INCLUDED (EVERYTHING YOU GET):
                </span>
                <span className="text-xs font-mono text-accent-yellow font-bold">
                  7 Core Deliverables
                </span>
              </div>

              <ul className="space-y-3.5 font-sans">
                {UPGRADED_DELIVERABLES.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 bg-[#1A1A1A] p-3 border border-foreground/10">
                    <div className="w-5 h-5 bg-accent-yellow text-black rounded-none flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                      ✓
                    </div>
                    <div className="space-y-0.5">
                      <strong className="text-sm sm:text-base font-bold text-foreground block uppercase font-heading">
                        {item.title}
                      </strong>
                      <p className="text-xs font-mono text-foreground/70 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Tangible Value Stack & Checkout CTA */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Tangible Value Stack Table */}
              <div className="bg-[#181818] border-2 border-foreground/30 p-5 sm:p-6 space-y-3">
                <span className="font-mono text-xs font-black uppercase tracking-widest text-accent-yellow block border-b border-foreground/15 pb-2">
                  Tangible Value Breakdown
                </span>

                <div className="space-y-2 text-xs font-mono">
                  {VALUE_STACK.map((row, idx) => (
                    <div key={idx} className="flex items-center justify-between text-foreground/80 border-b border-foreground/5 pb-1">
                      <span className="truncate pr-2">{row.item}</span>
                      <span className="font-bold text-foreground shrink-0">{row.value}</span>
                    </div>
                  ))}

                  {/* Total Value Row */}
                  <div className="pt-2 flex items-center justify-between border-t-2 border-foreground/20 text-sm font-bold">
                    <span className="uppercase text-foreground/70">Total Standalone Value:</span>
                    <span className="font-mono text-foreground line-through decoration-red-500 decoration-2">
                      ₹9,000
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold text-foreground/60">
                    <span>Regular Standalone Price:</span>
                    <span className="line-through">₹7,500</span>
                  </div>
                </div>
              </div>

              {/* Pricing Box & CTA */}
              <div className="bg-[#1C1C1C] border-2 border-accent-yellow p-6 sm:p-7 flex flex-col items-center justify-center text-center space-y-4 shadow-[6px_6px_0_0_#FFE600]">
                
                {/* Pricing Display */}
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-foreground/50 font-mono text-sm line-through">
                      Normally ₹7,500
                    </span>
                    <span className="bg-green-500/20 text-green-400 font-mono text-[11px] font-black px-2 py-0.5 border border-green-500/30 uppercase">
                      Save ₹5,000+
                    </span>
                  </div>
                  <div className="font-heading font-black text-4xl sm:text-5xl text-accent-yellow tracking-tight">
                    ₹2,499
                  </div>
                  <p className="font-mono text-xs font-bold text-foreground/80 uppercase tracking-wider">
                    Founding Launch Offer · One-Time
                  </p>
                </div>

                {/* Conversion CTA Button */}
                <button
                  type="button"
                  onClick={handleCTAClick}
                  className="w-full bg-accent-yellow text-black hover:bg-white border-2 border-black font-heading font-black uppercase text-base sm:text-lg py-4 px-6 tracking-wider shadow-[4px_4px_0_0_#F0F0F0] hover:shadow-[6px_6px_0_0_#F0F0F0] hover:-translate-y-0.5 transition-all active:translate-y-0 active:shadow-none flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>DIAGNOSE MY ADS →</span>
                </button>

                {/* Trust Microcopy */}
                <div className="space-y-1.5 pt-1 text-[11px] font-mono text-foreground/70">
                  <p className="font-bold text-foreground/90">
                    One-time payment · No monthly commitment
                  </p>
                  <div className="flex items-center justify-center gap-1.5 text-foreground/60">
                    <Lock className="w-3 h-3 text-green-400" />
                    <span>Secure 256-bit Razorpay (UPI / Cards / NetBanking)</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Psychology ROI Box */}
          <div className="mt-8 bg-[#181818] border-2 border-foreground/20 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-accent-yellow shrink-0" />
              <div>
                <strong className="text-foreground block uppercase font-heading">
                  Why This Pays For Itself:
                </strong>
                <p className="text-foreground/70 text-[11px] sm:text-xs">
                  If you are already spending ₹25,000–₹1,00,000/month on ads, fixing just ONE targeting leak or broken conversion trigger will save you multiple times this ₹2,499 fee in your next campaign cycle.
                </p>
              </div>
            </div>
            <div className="text-foreground/50 text-[11px] shrink-0 font-bold uppercase">
              ~60 Min Private Session
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
