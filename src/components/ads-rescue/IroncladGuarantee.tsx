"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, Lock, ArrowRight } from "lucide-react";
import { trackCTAClick } from "@/lib/tracking";

interface IroncladGuaranteeProps {
  onOpenCheckout?: () => void;
}

export function IroncladGuarantee({ onOpenCheckout }: IroncladGuaranteeProps) {
  const handleCTAClick = () => {
    trackCTAClick("value_stack_cta", "Claim Risk-Free Diagnostic — ₹2,499");
    if (onOpenCheckout) {
      onOpenCheckout();
    } else {
      const el = document.getElementById("offer");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-14 md:py-20 bg-[#0E0E0E] text-foreground border-b-2 border-foreground/20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Main Guarantee Box */}
        <div className="max-w-4xl mx-auto bg-[#141414] border-4 border-green-500/80 p-6 sm:p-10 md:p-12 shadow-[10px_10px_0_0_#10B981] relative">
          
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            
            {/* Guarantee Badge Shield */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-green-500/10 border-2 border-green-400 flex items-center justify-center shrink-0 shadow-lg">
              <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-green-400" />
            </div>

            {/* Text Content */}
            <div className="space-y-3 text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 border border-green-500/40 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider">
                <span>100% Risk-Free Commitment</span>
              </div>

              <h3 className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-tight text-white leading-tight">
                Find A Major Leak Or <span className="text-green-400">Get 100% Refunded.</span>
              </h3>

              <p className="font-sans text-sm sm:text-base text-foreground/85 leading-relaxed font-medium">
                If during our 60-minute diagnostic session we don't identify at least <strong className="text-white">ONE structural leak</strong> currently costing you money, or show you an actionable fix worth multiple times the ₹2,499 fee, tell us on the call and we will refund your ₹2,499 on the spot.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-mono text-foreground/60">
                <span className="flex items-center gap-1.5 text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  Zero awkwardness
                </span>
                <span className="flex items-center gap-1.5 text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  Zero questions asked
                </span>
                <span className="flex items-center gap-1.5 text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  Processed within 24 hours
                </span>
              </div>
            </div>

          </div>

          {/* Action Row */}
          <div className="mt-8 pt-6 border-t border-foreground/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-foreground/70 text-center sm:text-left">
              <span>Standard Price: <del className="text-foreground/40">₹7,500</del></span> · <span className="text-accent-yellow font-bold">Launch Price: ₹2,499</span>
            </div>

            <button
              type="button"
              onClick={handleCTAClick}
              className="w-full sm:w-auto bg-accent-yellow text-black hover:bg-white font-heading font-black uppercase text-xs sm:text-sm py-3.5 px-6 border-2 border-black shadow-[3px_3px_0_0_#F0F0F0] transition-all hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Book Risk-Free Audit — ₹2,499 →</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
