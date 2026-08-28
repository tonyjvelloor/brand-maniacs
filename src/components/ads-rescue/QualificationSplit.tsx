"use client";

import { motion } from "framer-motion";
import { Check, X, Users, ArrowRight } from "lucide-react";
import { trackCTAClick } from "@/lib/tracking";

interface QualificationSplitProps {
  onOpenCheckout?: () => void;
}

export function QualificationSplit({ onOpenCheckout }: QualificationSplitProps) {
  const handleCTAClick = () => {
    trackCTAClick("qualification_cta", "Qualify & Diagnose My Ads");
    if (onOpenCheckout) {
      onOpenCheckout();
    } else {
      const el = document.getElementById("offer");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#F5F3EE] text-[#111111] border-b-2 border-black">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 md:mb-18">
          <span className="inline-block font-mono text-xs font-black uppercase tracking-widest text-[#111111]/70 bg-black/5 px-3 py-1 border border-black/15">
            // 04 — QUALIFICATION FILTER
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-[#111111] leading-[1.05]">
            Who this is for <br className="hidden sm:block" />
            <span className="underline decoration-accent-yellow decoration-4 md:decoration-6 underline-offset-4">
              (and who it's NOT for).
            </span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#111111]/75 max-w-xl mx-auto font-medium">
            We intentionally filter our diagnostic clients to ensure every session yields massive ROI.
          </p>
        </div>

        {/* Split Screen Container */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Column 1: THIS IS FOR YOU IF */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white border-2 border-black p-6 sm:p-8 flex flex-col justify-between shadow-[6px_6px_0_0_#000000] relative"
          >
            <div>
              <div className="bg-black text-accent-yellow p-3 border-2 border-black mb-6 text-center font-heading font-black text-lg sm:text-xl uppercase tracking-wider shadow-[3px_3px_0_0_#FFE600]">
                THIS IS FOR YOU IF:
              </div>

              <ul className="space-y-4 font-sans">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                    ✓
                  </div>
                  <div>
                    <strong className="text-base text-[#111111] font-bold block">
                      Spending ₹25,000+/month
                    </strong>
                    <span className="text-xs font-mono text-[#111111]/70">
                      You have active campaign volume and real data for us to analyze.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                    ✓
                  </div>
                  <div>
                    <strong className="text-base text-[#111111] font-bold block">
                      Already running Google or Meta Ads
                    </strong>
                    <span className="text-xs font-mono text-[#111111]/70">
                      You are actively in the market or have run campaigns recently.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                    ✓
                  </div>
                  <div>
                    <strong className="text-base text-[#111111] font-bold block">
                      Getting poor-quality or expensive leads
                    </strong>
                    <span className="text-xs font-mono text-[#111111]/70">
                      Cost per acquisition is rising while sales conversions are falling.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                    ✓
                  </div>
                  <div>
                    <strong className="text-base text-[#111111] font-bold block">
                      Not sure what's actually wrong
                    </strong>
                    <span className="text-xs font-mono text-[#111111]/70">
                      You want definitive, technical answers rather than agency guesswork.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-black/10">
              <button
                type="button"
                onClick={handleCTAClick}
                className="w-full bg-accent-yellow text-black hover:bg-black hover:text-white font-heading font-black uppercase text-sm py-3 px-4 border-2 border-black transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Yes, This Is My Situation →</span>
              </button>
            </div>
          </motion.div>

          {/* Column 2: THIS IS NOT FOR YOU IF */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#EFECE4] border-2 border-black/30 p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="bg-white/80 text-black/70 p-3 border-2 border-black/20 mb-6 text-center font-heading font-black text-lg sm:text-xl uppercase tracking-wider">
                THIS IS NOT FOR YOU IF:
              </div>

              <ul className="space-y-4 font-sans">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500/20 text-red-600 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                    ✕
                  </div>
                  <div>
                    <strong className="text-base text-[#111111]/80 font-bold block">
                      You're looking for free consulting
                    </strong>
                    <span className="text-xs font-mono text-[#111111]/60">
                      We dedicate senior performance engineers; we charge to protect our focus.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500/20 text-red-600 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                    ✕
                  </div>
                  <div>
                    <strong className="text-base text-[#111111]/80 font-bold block">
                      You're just experimenting with ₹2,000–₹5,000 budgets
                    </strong>
                    <span className="text-xs font-mono text-[#111111]/60">
                      Insufficient statistical significance for a deep algorithmic diagnostic.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500/20 text-red-600 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                    ✕
                  </div>
                  <div>
                    <strong className="text-base text-[#111111]/80 font-bold block">
                      You want someone to guarantee results
                    </strong>
                    <span className="text-xs font-mono text-[#111111]/60">
                      We diagnose facts and optimize infrastructure; we don't sell snake oil.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500/20 text-red-600 rounded-full flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                    ✕
                  </div>
                  <div>
                    <strong className="text-base text-[#111111]/80 font-bold block">
                      You're looking for the cheapest agency
                    </strong>
                    <span className="text-xs font-mono text-[#111111]/60">
                      We focus on high-leverage engineering and radical problem-solving.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-black/10 text-center">
              <span className="text-xs font-mono font-bold text-black/50 uppercase">
                Integrity Filter · High Perceived Value
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
