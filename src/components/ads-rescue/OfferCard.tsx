"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Lock, ArrowRight, Zap, Clock } from "lucide-react";
import { trackCTAClick } from "@/lib/tracking";

interface OfferCardProps {
  onOpenCheckout: () => void;
}

const OUTCOMES = [
  {
    number: "01",
    title: "Your Ad Spend Health Score",
    description: "A clear, evidence-backed snapshot of where your advertising system is strong—and where it's failing.",
  },
  {
    number: "02",
    title: "Your Top 3 Budget Leaks",
    description: "The three biggest structural issues currently costing you money, lead quality, and conversions.",
  },
  {
    number: "03",
    title: "Your Rescue Report",
    description: "A short, actionable diagnostic document explaining exactly what we found, why it matters, and how to fix it.",
  },
  {
    number: "04",
    title: "Your 60-Minute Rescue Session",
    description: "A 1-on-1 strategy screen share where we walk through the findings and answer your critical questions.",
  },
  {
    number: "05",
    title: "Your Priority Action Plan",
    description: "A sequential blueprint: STOP (cut wasteful spend) → FIX (repair leaks) → TEST (experiment) → SCALE.",
  },
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
            <div className="space-y-1">
              <span className="font-mono text-xs sm:text-sm font-black uppercase tracking-widest text-accent-yellow block">
                THE BRAND MANIACS PRESENTS
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
                ADS RESCUE SESSION
              </h2>
              <p className="font-mono text-xs sm:text-sm text-foreground/75 uppercase tracking-wide">
                A Complete Diagnostic of Your Paid Advertising
              </p>
            </div>

            <div className="bg-accent-yellow text-black px-4 py-2 font-mono text-xs font-black uppercase tracking-wider border-2 border-black shadow-[3px_3px_0_0_#000]">
              Founding Launch Offer
            </div>
          </div>

          {/* Grid Layout: Deliverables & Pricing */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start">
            
            {/* Left: What You Actually Walk Away With */}
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-white/90 block mb-1">
                WHAT YOU ACTUALLY WALK AWAY WITH:
              </span>

              <div className="space-y-3 font-sans">
                {OUTCOMES.map((item) => (
                  <div key={item.number} className="bg-[#1A1A1A] p-4 border border-foreground/10 flex items-start gap-3.5">
                    <span className="w-7 h-7 bg-accent-yellow text-black font-mono font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {item.number}
                    </span>
                    <div className="space-y-0.5">
                      <strong className="text-base font-bold text-foreground block font-heading uppercase">
                        {item.title}
                      </strong>
                      <p className="text-xs font-mono text-foreground/75 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Clean Pricing Box & Checkout CTA */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              <div className="bg-[#1C1C1C] border-2 border-accent-yellow p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-5 shadow-[6px_6px_0_0_#FFE600]">
                
                {/* Clean, Uninflated Pricing Display */}
                <div className="space-y-1">
                  <div className="text-foreground/50 font-mono text-sm line-through">
                    Standard Price: ₹7,500
                  </div>
                  <div className="font-heading font-black text-5xl sm:text-6xl text-accent-yellow tracking-tight">
                    ₹2,499
                  </div>
                  <p className="font-mono text-xs font-bold text-foreground/80 uppercase tracking-wider">
                    Founding Launch Price
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
                <div className="space-y-2 pt-1 text-[11px] font-mono text-foreground/70">
                  <p className="font-bold text-foreground/90">
                    One-time diagnostic. No monthly commitment.
                  </p>
                  <div className="flex items-center justify-center gap-1.5 text-foreground/60">
                    <Lock className="w-3.5 h-3.5 text-green-400" />
                    <span>Secure payment via Razorpay (UPI · Cards · NetBanking)</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 text-accent-yellow font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Instant calendar access after checkout</span>
                  </div>
                </div>

              </div>

              {/* Commercial Reality Callout */}
              <div className="bg-[#181818] border border-foreground/15 p-4 text-xs font-mono text-foreground/75 leading-relaxed">
                💡 <strong className="text-white">Why This Pays For Itself:</strong> If you are spending ₹25,000–₹1,00,000+/month on ads, fixing just one bad audience setting or broken tracking tag will save you multiple times this ₹2,499 fee on your next campaign cycle.
              </div>

            </div>

          </div>

          {/* Bottom Card Footer Guarantee Banner */}
          <div className="mt-8 pt-6 border-t border-foreground/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-foreground/70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent-yellow shrink-0" />
              <span>100% Account Safety: Read-only access guidance, zero credential sharing.</span>
            </div>
            <div className="text-foreground/50">
              Session duration: ~60 minutes
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
