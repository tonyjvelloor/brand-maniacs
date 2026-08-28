"use client";

import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle, CheckCircle2, ShieldAlert } from "lucide-react";
import { trackCTAClick } from "@/lib/tracking";

interface ExampleHealthScoreProps {
  onOpenCheckout?: () => void;
}

const EXAMPLE_PILLARS = [
  { name: "ATTRACT", score: 6.0, dots: 6, max: 10, status: "Moderate", color: "text-accent-yellow" },
  { name: "CONVINCE", score: 4.0, dots: 4, max: 10, status: "Needs Work", color: "text-orange-400" },
  { name: "CONVERT", score: 5.0, dots: 5, max: 10, status: "Friction", color: "text-orange-400" },
  { name: "TRACK", score: 3.0, dots: 3, max: 10, status: "Critical Leak", color: "text-accent-red" },
  { name: "SCALE", score: 7.0, dots: 7, max: 10, status: "Capable", color: "text-green-400" },
];

export function ExampleHealthScore({ onOpenCheckout }: ExampleHealthScoreProps) {
  const handleCTAClick = () => {
    trackCTAClick("value_stack_cta", "Get My Ad Spend Health Score — ₹2,499");
    if (onOpenCheckout) {
      onOpenCheckout();
    } else {
      const el = document.getElementById("offer");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#0D0D0D] text-foreground border-b-2 border-foreground/20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 md:mb-16">
          <span className="inline-block font-mono text-xs font-black uppercase tracking-widest text-accent-yellow bg-accent-yellow/10 border border-accent-yellow/30 px-3 py-1">
            SIGNATURE DIAGNOSTIC ASSET
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tighter text-foreground leading-tight">
            Your advertising gets a health check.
          </h2>
          <p className="font-sans text-base sm:text-lg text-foreground/80 font-medium max-w-xl mx-auto">
            Not a generic audit. Not vague advice. You receive your definitive:
          </p>
          <div className="font-mono text-sm sm:text-base font-black uppercase tracking-widest text-accent-yellow pt-1">
            AD SPEND HEALTH SCORE
          </div>
        </div>

        {/* The Diagnostic Card Output Box */}
        <div className="max-w-4xl mx-auto bg-[#141414] border-4 border-foreground/30 p-6 sm:p-10 shadow-2xl relative">
          
          {/* Top Label Pill */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-foreground/15 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-yellow animate-ping" />
              <span className="font-mono text-xs font-black uppercase tracking-wider text-accent-yellow">
                Example Diagnostic Output
              </span>
            </div>
            <span className="text-[11px] font-mono text-foreground/50 border border-foreground/15 px-2.5 py-0.5">
              Client Spend: ₹60k/mo · Meta & Google
            </span>
          </div>

          {/* 5 Pillar Dot Meters */}
          <div className="space-y-4 mb-8">
            {EXAMPLE_PILLARS.map((pillar) => (
              <div
                key={pillar.name}
                className="bg-[#1A1A1A] border border-foreground/10 p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div className="flex items-center justify-between sm:justify-start gap-4 min-w-[140px]">
                  <strong className="font-heading font-black text-sm uppercase text-foreground">
                    {pillar.name}
                  </strong>
                  <span className={`font-mono text-xs font-bold ${pillar.color}`}>
                    {pillar.status}
                  </span>
                </div>

                {/* Visual Dot Meter */}
                <div className="flex items-center gap-1.5 font-mono text-sm sm:text-base">
                  {Array.from({ length: 10 }).map((_, idx) => (
                    <span
                      key={idx}
                      className={
                        idx < pillar.dots
                          ? "text-accent-yellow font-black"
                          : "text-foreground/20 font-normal"
                      }
                    >
                      {idx < pillar.dots ? "●" : "○"}
                    </span>
                  ))}
                </div>

                {/* Score */}
                <div className="text-right font-mono font-black text-sm text-foreground">
                  {pillar.score.toFixed(1)} <span className="text-foreground/40 text-xs">/ 10</span>
                </div>
              </div>
            ))}
          </div>

          {/* Overall Health Score Banner */}
          <div className="bg-[#1C1C1C] border-2 border-accent-yellow p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[6px_6px_0_0_#FFE600]">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-[11px] font-mono font-bold uppercase text-foreground/60 block">
                Overall Weighted Health Index
              </span>
              <div className="font-heading font-black text-4xl sm:text-5xl text-accent-yellow tracking-tight">
                5.0 <span className="text-lg font-mono text-foreground/40">/ 10</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-orange-500/20 text-orange-400 border border-orange-500/40 text-xs font-mono font-black uppercase">
                <span>🟠 LEAKING</span>
              </div>
            </div>

            <div className="space-y-2 max-w-md text-xs font-mono text-foreground/85 text-center md:text-left">
              <p className="leading-relaxed font-sans text-sm text-foreground/90 font-medium">
                “Your advertising is functioning, but significant weaknesses in tracking and conversion are likely reducing lead quality and wasting budget.”
              </p>
              <span className="text-[11px] text-accent-yellow block font-bold">
                Directive: Stop increasing spend. Re-calibrate attribution and mobile funnel before scaling.
              </span>
            </div>
          </div>

          {/* CTA Footer */}
          <div className="mt-8 pt-6 border-t border-foreground/15 text-center">
            <button
              type="button"
              onClick={handleCTAClick}
              className="w-full sm:w-auto min-w-[320px] bg-accent-yellow text-black hover:bg-white font-heading font-black uppercase text-sm sm:text-base py-4 px-8 border-2 border-black shadow-[4px_4px_0_0_#F0F0F0] transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 mx-auto cursor-pointer"
            >
              <span>Get Your Ad Spend Health Score — ₹2,499 →</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
