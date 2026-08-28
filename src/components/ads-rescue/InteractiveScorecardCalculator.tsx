"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  calculateOverallHealthScore, 
  getScorecardClassification, 
  generateImplications 
} from "@/lib/scorecard";
import { 
  Calculator, 
  ArrowRight, 
  AlertOctagon, 
  Activity, 
  Sparkles, 
  Crosshair, 
  Filter, 
  TrendingUp, 
  ShieldAlert 
} from "lucide-react";
import { trackCTAClick } from "@/lib/tracking";

interface InteractiveScorecardCalculatorProps {
  onOpenCheckout?: () => void;
}

export function InteractiveScorecardCalculator({ onOpenCheckout }: InteractiveScorecardCalculatorProps) {
  // 5 quick self-evaluation pillar scores (0 - 10)
  const [pillarScores, setPillarScores] = useState({
    attract: 5.0,
    convince: 5.5,
    convert: 4.0,
    track: 3.5,
    scale: 4.0,
  });

  const overallScore = useMemo(() => {
    return calculateOverallHealthScore(pillarScores);
  }, [pillarScores]);

  const classification = useMemo(() => {
    return getScorecardClassification(overallScore);
  }, [overallScore]);

  const implications = useMemo(() => {
    return generateImplications(pillarScores);
  }, [pillarScores]);

  const handleSliderChange = (pillar: keyof typeof pillarScores, val: number) => {
    setPillarScores((prev) => ({ ...prev, [pillar]: val }));
  };

  const handleCTAClick = () => {
    trackCTAClick("value_stack_cta", "Book Full 25-Point Audit");
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
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12 md:mb-16">
          <span className="inline-block font-mono text-xs font-black uppercase tracking-widest text-accent-yellow bg-accent-yellow/10 border border-accent-yellow/30 px-3 py-1">
            INTERACTIVE SYSTEM SIMULATOR
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tighter text-foreground leading-[1.05]">
            Estimate Your Ad Spend Health Score
          </h2>
          <p className="font-mono text-sm sm:text-base text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Slide each pillar based on your current advertising confidence to see your simulated health tier and primary constraint.
          </p>
        </div>

        {/* Simulator Grid Container */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sliders Column */}
          <div className="lg:col-span-7 bg-[#141414] border-2 border-foreground/20 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-foreground/15 pb-3">
              <span className="text-xs font-mono font-bold uppercase text-foreground/80">
                Self-Assessment Sliders (0 - 10)
              </span>
              <span className="text-[10px] font-mono text-accent-yellow font-bold uppercase">
                Weighted Algorithm
              </span>
            </div>

            {/* Slider 1: ATTRACT */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 font-bold">
                  <span className="text-accent-red">01</span>
                  <span className="text-foreground uppercase">ATTRACT (20% Wt)</span>
                </div>
                <span className="font-black text-accent-yellow">{pillarScores.attract.toFixed(1)} / 10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="0.5"
                value={pillarScores.attract}
                onChange={(e) => handleSliderChange("attract", parseFloat(e.target.value))}
                className="w-full accent-accent-yellow cursor-pointer h-2 bg-[#252525]"
              />
              <p className="text-[11px] font-mono text-foreground/50">
                Are search terms and audiences qualified, or are you paying for curiosity clicks?
              </p>
            </div>

            {/* Slider 2: CONVINCE */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 font-bold">
                  <span className="text-accent-yellow">02</span>
                  <span className="text-foreground uppercase">CONVINCE (20% Wt)</span>
                </div>
                <span className="font-black text-accent-yellow">{pillarScores.convince.toFixed(1)} / 10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="0.5"
                value={pillarScores.convince}
                onChange={(e) => handleSliderChange("convince", parseFloat(e.target.value))}
                className="w-full accent-accent-yellow cursor-pointer h-2 bg-[#252525]"
              />
              <p className="text-[11px] font-mono text-foreground/50">
                Does your ad creative clearly communicate your offer and stop the scroll?
              </p>
            </div>

            {/* Slider 3: CONVERT */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 font-bold">
                  <span className="text-purple-400">03</span>
                  <span className="text-foreground uppercase">CONVERT (25% Wt)</span>
                </div>
                <span className="font-black text-accent-yellow">{pillarScores.convert.toFixed(1)} / 10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="0.5"
                value={pillarScores.convert}
                onChange={(e) => handleSliderChange("convert", parseFloat(e.target.value))}
                className="w-full accent-accent-yellow cursor-pointer h-2 bg-[#252525]"
              />
              <p className="text-[11px] font-mono text-foreground/50">
                Is your mobile landing page fast, relevant, and zero-friction for lead capture?
              </p>
            </div>

            {/* Slider 4: TRACK */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 font-bold">
                  <span className="text-cyan-400">04</span>
                  <span className="text-foreground uppercase">TRACK (20% Wt)</span>
                </div>
                <span className="font-black text-accent-yellow">{pillarScores.track.toFixed(1)} / 10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="0.5"
                value={pillarScores.track}
                onChange={(e) => handleSliderChange("track", parseFloat(e.target.value))}
                className="w-full accent-accent-yellow cursor-pointer h-2 bg-[#252525]"
              />
              <p className="text-[11px] font-mono text-foreground/50">
                Can you trace exact sales revenue back to ad campaigns with verified CAPI?
              </p>
            </div>

            {/* Slider 5: SCALE */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 font-bold">
                  <span className="text-green-400">05</span>
                  <span className="text-foreground uppercase">SCALE (15% Wt)</span>
                </div>
                <span className="font-black text-accent-yellow">{pillarScores.scale.toFixed(1)} / 10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="0.5"
                value={pillarScores.scale}
                onChange={(e) => handleSliderChange("scale", parseFloat(e.target.value))}
                className="w-full accent-accent-yellow cursor-pointer h-2 bg-[#252525]"
              />
              <p className="text-[11px] font-mono text-foreground/50">
                Do you have a structured testing system and clear unit economics (CAC / LTV)?
              </p>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Health Score Meter Box */}
            <div className="bg-[#141414] border-4 border-accent-yellow p-6 text-center space-y-4 shadow-[8px_8px_0_0_#FFE600]">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-foreground/70 block">
                OVERALL AD SPEND HEALTH SCORE
              </span>

              <div className="font-heading font-black text-6xl sm:text-7xl text-accent-yellow tracking-tight">
                {overallScore.toFixed(1)} <span className="text-xl sm:text-2xl text-foreground/40 font-mono">/ 10</span>
              </div>

              {/* Status Badge */}
              <div className={`p-2.5 border font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 ${classification.bgBadge}`}>
                <span>{classification.icon}</span>
                <span>{classification.title}</span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-foreground/80 leading-relaxed">
                {classification.description}
              </p>

              <div className="bg-[#1C1C1C] p-3 border border-foreground/10 text-left text-xs font-mono space-y-1">
                <span className="text-[10px] text-accent-yellow font-black uppercase block">
                  Primary Action Directive:
                </span>
                <p className="text-foreground/90 font-bold">
                  {classification.primaryDirective}
                </p>
              </div>
            </div>

            {/* Top Detected Implication */}
            {implications.length > 0 && (
              <div className="bg-[#181818] border-2 border-red-500/40 p-5 space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-red-400 font-bold uppercase">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Primary Detected Constraint ({implications[0].pillar})</span>
                </div>
                <p className="text-foreground/90 font-sans text-xs">
                  {implications[0].implication}
                </p>
                <div className="pt-1 text-accent-yellow">
                  Prescribed Fix: <strong>{implications[0].solution}</strong>
                </div>
              </div>
            )}

            {/* CTA */}
            <button
              type="button"
              onClick={handleCTAClick}
              className="w-full bg-accent-yellow text-black hover:bg-white font-heading font-black uppercase text-sm sm:text-base py-4 px-6 tracking-wider border-2 border-black shadow-[4px_4px_0_0_#F0F0F0] transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Your 25-Point Audit — ₹2,499 →</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
