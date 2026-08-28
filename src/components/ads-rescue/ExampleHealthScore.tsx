"use client";

import { motion } from "framer-motion";
import { 
  Target, 
  Megaphone, 
  MousePointerClick, 
  BarChart2, 
  Coins, 
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ArrowDown
} from "lucide-react";
import { trackCTAClick } from "@/lib/tracking";

interface ExampleHealthScoreProps {
  onOpenCheckout?: () => void;
}

const REPORT_PILLARS = [
  { name: "ATTRACT", score: "6.7", percent: 67, color: "bg-[#FFE600]", icon: Target, iconColor: "text-amber-500 bg-amber-500/10" },
  { name: "CONVINCE", score: "5.3", percent: 53, color: "bg-[#E11D48]", icon: Megaphone, iconColor: "text-rose-500 bg-rose-500/10" },
  { name: "CONVERT", score: "4.7", percent: 47, color: "bg-[#2563EB]", icon: MousePointerClick, iconColor: "text-blue-500 bg-blue-500/10" },
  { name: "TRACK", score: "3.3", percent: 33, color: "bg-[#059669]", icon: BarChart2, iconColor: "text-emerald-500 bg-emerald-500/10" },
  { name: "SCALE", score: "7.0", percent: 70, color: "bg-[#EA580C]", icon: Coins, iconColor: "text-orange-500 bg-orange-500/10" },
];

export function ExampleHealthScore({ onOpenCheckout }: ExampleHealthScoreProps) {
  const handleCTAClick = () => {
    trackCTAClick("value_stack_cta", "Get My Ad Health Score — ₹2,499");
    if (onOpenCheckout) {
      onOpenCheckout();
    } else {
      const el = document.getElementById("offer");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#0A0A0A] text-foreground border-b-2 border-foreground/20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* 2-Column Responsive Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-7xl mx-auto">
          
          {/* Left Column: 3D Physical "Example Report" Card Mockup */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* Handwritten "Example Report" Tag Annotation */}
            <div className="absolute -top-5 -left-2 sm:left-4 z-20 pointer-events-none">
              <span className="font-mono text-xs font-bold text-accent-yellow bg-black/80 px-2.5 py-1 border border-accent-yellow/40 rotate-[-8deg] inline-block shadow-md">
                Example Report ✍️
              </span>
            </div>

            {/* The Document Card */}
            <motion.div
              initial={{ opacity: 0, rotate: -2, y: 20 }}
              whileInView={{ opacity: 1, rotate: -1.5, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md bg-white text-[#111111] p-6 sm:p-8 border-4 border-black shadow-[10px_10px_0_0_#FFE600] relative space-y-6"
            >
              {/* Document Header */}
              <div className="border-b-2 border-black/10 pb-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-5 h-5 bg-black text-accent-yellow flex items-center justify-center font-bold text-[10px]">
                    BM
                  </span>
                  <span className="font-heading font-black text-xs uppercase tracking-wider text-black">
                    THE BRAND MANIACS
                  </span>
                </div>
                <h4 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight text-black">
                  AD SPEND HEALTH SCORE
                </h4>
                <p className="font-mono text-[11px] text-black/50 uppercase">
                  CONFIDENTIAL AUDIT REPORT
                </p>
              </div>

              {/* 5 Pillar Progress Bars */}
              <div className="space-y-4">
                {REPORT_PILLARS.map((pillar) => (
                  <div key={pillar.name} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono font-bold">
                      <div className="flex items-center gap-2">
                        <span className={`w-5 h-5 rounded-full ${pillar.iconColor} flex items-center justify-center`}>
                          <pillar.icon className="w-3 h-3" />
                        </span>
                        <span className="text-black uppercase">{pillar.name}</span>
                      </div>
                      <span className="text-black font-black font-mono">
                        {pillar.score} <span className="text-black/40 font-normal">/ 10</span>
                      </span>
                    </div>

                    {/* Progress Bar Track */}
                    <div className="w-full h-3 bg-black/10 rounded-full overflow-hidden border border-black/20">
                      <div
                        className={`h-full ${pillar.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${pillar.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Overall Result Badge */}
              <div className="bg-[#FAF9F5] border-2 border-black p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-black/50 uppercase block">
                      OVERALL HEALTH
                    </span>
                    <span className="font-heading font-black text-2xl text-black tracking-tight">
                      5.0 <span className="text-sm font-mono text-black/40">/ 10</span>
                    </span>
                  </div>
                  <span className="bg-[#EA580C] text-white px-2.5 py-1 text-xs font-mono font-black uppercase border border-black">
                    🟠 LEAKING
                  </span>
                </div>

                <p className="font-sans text-xs text-black/75 font-medium leading-relaxed border-t border-black/10 pt-2">
                  Your ads are working, but there are clear areas where your budget may be getting wasted.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Explanatory Context & How It's Scored */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-black uppercase text-accent-yellow tracking-widest block">
                YOUR AD SPEND GETS A
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tighter text-white">
                HEALTH CHECK
              </h2>
              <p className="font-sans text-sm sm:text-base text-foreground/80 leading-relaxed font-medium max-w-lg">
                We look at 25 important checkpoints across 5 areas. Each area gets a score, so you can see exactly where you're strong — and where you're losing money.
              </p>
            </div>

            {/* Box 1: What Your Score Shows */}
            <div className="bg-[#141414] border-2 border-foreground/20 p-5 space-y-3 shadow-lg">
              <span className="font-mono text-xs font-black uppercase tracking-wider text-white block">
                WHAT YOUR SCORE SHOWS
              </span>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-start gap-2.5 text-foreground/90">
                  <span className="text-green-400 text-sm">🟢</span>
                  <div>
                    <strong className="text-white block font-sans">What's working</strong>
                    <span className="text-foreground/60 text-[11px]">Keep doing this to maintain momentum.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-foreground/90">
                  <span className="text-yellow-400 text-sm">🟡</span>
                  <div>
                    <strong className="text-white block font-sans">What needs improvement</strong>
                    <span className="text-foreground/60 text-[11px]">Fix these areas to stabilize unit economics.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-foreground/90">
                  <span className="text-red-400 text-sm">🔴</span>
                  <div>
                    <strong className="text-white block font-sans">What's costing you money</strong>
                    <span className="text-foreground/60 text-[11px]">Stop or change this immediately to prevent waste.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2: How It's Scored Flow Diagram */}
            <div className="bg-[#141414] border-2 border-foreground/20 p-5 space-y-3 shadow-lg">
              <span className="font-mono text-xs font-black uppercase tracking-wider text-accent-yellow block">
                HOW IT'S SCORED
              </span>

              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div className="bg-[#1A1A1A] p-3 border border-foreground/10 space-y-1">
                  <span className="w-8 h-8 rounded-full bg-accent-yellow text-black font-black flex items-center justify-center mx-auto text-sm">
                    25
                  </span>
                  <span className="text-[10px] text-foreground/70 block leading-tight font-bold">
                    Key checkpoints (5 per area)
                  </span>
                </div>

                <div className="bg-[#1A1A1A] p-3 border border-foreground/10 space-y-1">
                  <span className="w-8 h-8 rounded-full bg-[#333] text-white font-black flex items-center justify-center mx-auto text-sm">
                    0–3
                  </span>
                  <span className="text-[10px] text-foreground/70 block leading-tight font-bold">
                    Score for each checkpoint
                  </span>
                </div>

                <div className="bg-[#1A1A1A] p-3 border border-foreground/10 space-y-1">
                  <span className="w-8 h-8 rounded-full bg-accent-yellow/20 text-accent-yellow border border-accent-yellow font-black flex items-center justify-center mx-auto text-[11px]">
                    Wt
                  </span>
                  <span className="text-[10px] text-foreground/70 block leading-tight font-bold">
                    Weighted Overall Score (0–10)
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleCTAClick}
                className="w-full sm:w-auto bg-accent-yellow text-black hover:bg-white font-heading font-black uppercase text-sm sm:text-base py-4 px-8 border-2 border-black shadow-[4px_4px_0_0_#F0F0F0] transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get Your Ad Health Score — ₹2,499 →</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
