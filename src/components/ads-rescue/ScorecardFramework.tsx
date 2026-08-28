"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SCORECARD_PILLARS, 
  SCORECARD_CLASSIFICATIONS, 
  ScorecardPillar,
  ScorecardClassification 
} from "@/lib/scorecard";
import { 
  CheckCircle2, 
  AlertTriangle, 
  Activity, 
  Target, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight,
  ChevronRight,
  Calculator,
  Compass,
  FileSpreadsheet
} from "lucide-react";

export function ScorecardFramework() {
  const [selectedPillarId, setSelectedPillarId] = useState<string>("attract");
  const selectedPillar = SCORECARD_PILLARS.find((p) => p.id === selectedPillarId) || SCORECARD_PILLARS[0];

  return (
    <section id="scorecard-methodology" className="py-16 md:py-24 bg-[#080808] text-foreground border-b-2 border-foreground/20 relative overflow-hidden">
      {/* Blueprint Grid Lines */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#FFE600 1px, transparent 1px), linear-gradient(90deg, #FFE600 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 bg-accent-yellow/10 border border-accent-yellow/30 px-3.5 py-1.5 text-xs font-mono font-black uppercase tracking-wider text-accent-yellow">
            <Calculator className="w-3.5 h-3.5" />
            <span>THE 25-POINT ADS RESCUE SCORECARD™</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-foreground leading-[1.05]">
            5 Pillars × 5 Checks = <br className="hidden sm:block" />
            <span className="text-accent-yellow">25 Diagnostic Checkpoints.</span>
          </h2>

          <p className="font-mono text-sm sm:text-base text-foreground/75 max-w-2xl mx-auto leading-relaxed">
            We don't give vague subjective opinions. Every single checkpoint receives an evidence-backed grade from 0 to 3, feeding a defendable mathematical health index.
          </p>
        </div>

        {/* 1. The 5 Pillars Interactive Explorer */}
        <div className="max-w-6xl mx-auto mb-16">
          {/* Pillar Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-6">
            {SCORECARD_PILLARS.map((pillar) => {
              const isSelected = pillar.id === selectedPillarId;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`p-3.5 sm:p-4 text-left border-2 transition-all flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? "bg-[#1C1C1C] border-accent-yellow shadow-[4px_4px_0_0_#FFE600]"
                      : "bg-[#121212] border-foreground/20 hover:border-foreground/40 hover:bg-[#181818]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono font-black text-xs text-accent-yellow">
                      {pillar.number}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 bg-[#222] border border-foreground/20 text-foreground/70">
                      {pillar.weightPercent}% Wt
                    </span>
                  </div>
                  <strong className="font-heading font-black text-lg sm:text-xl uppercase tracking-tight text-foreground block">
                    {pillar.name}
                  </strong>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Pillar Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPillar.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-[#141414] border-4 border-foreground/20 p-6 sm:p-8 shadow-2xl space-y-6"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-foreground/15 pb-6">
                <div>
                  <span className="text-xs font-mono font-black uppercase tracking-widest text-accent-yellow block">
                    PILLAR {selectedPillar.number} // {selectedPillar.weightPercent}% OF OVERALL AD HEALTH
                  </span>
                  <h3 className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-tight text-white mt-1">
                    {selectedPillar.name} — {selectedPillar.tagline}
                  </h3>
                </div>

                <div className="bg-[#202020] border border-foreground/20 px-4 py-2 text-right">
                  <span className="text-[10px] font-mono text-foreground/50 uppercase block">Max Points</span>
                  <span className="text-sm font-mono font-black text-accent-yellow">5 Checks × 3 Pts = 15 Pts</span>
                </div>
              </div>

              {/* Checkpoint Table Grid */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase text-foreground/60 tracking-wider block">
                  The 5 Diagnostic Checkpoints:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {selectedPillar.checkpoints.map((cp) => (
                    <div key={cp.id} className="bg-[#1C1C1C] border border-foreground/15 p-4 flex flex-col justify-between space-y-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 font-mono text-xs font-black text-accent-yellow">
                          <span>{selectedPillar.number}.{cp.letter}</span>
                          <span className="text-foreground/40">·</span>
                          <span className="text-foreground uppercase">{cp.name}</span>
                        </div>
                        <p className="font-sans text-sm font-bold text-foreground/90">
                          {cp.question}
                        </p>
                      </div>
                      <p className="font-mono text-xs text-foreground/60 leading-relaxed border-t border-foreground/10 pt-2">
                        {cp.description}
                      </p>
                    </div>
                  ))}

                  {/* Formula Box */}
                  <div className="bg-black/60 border-2 border-accent-yellow/40 p-4 flex flex-col justify-between space-y-2">
                    <div className="space-y-1">
                      <span className="font-mono text-xs font-black text-accent-yellow uppercase block">
                        Mathematical Formula
                      </span>
                      <p className="font-mono text-xs text-foreground/90 font-bold">
                        Pillar Score = (Points ÷ 15) × 10
                      </p>
                    </div>
                    <div className="text-[11px] font-mono text-foreground/60 bg-[#151515] p-2 border border-foreground/10">
                      Example: 11 / 15 points = <strong className="text-accent-yellow">7.3 / 10</strong> Health
                    </div>
                  </div>
                </div>
              </div>

              {/* The Implication Engine Trigger */}
              <div className="bg-[#1C1C1C] border-l-4 border-accent-red p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-black uppercase text-accent-red tracking-wider block">
                    ⚡ What We Investigate (If Score is Weak)
                  </span>
                  <p className="font-sans text-sm font-bold text-foreground/90">
                    "{selectedPillar.implication.simpleSummary}"
                  </p>
                  <p className="font-mono text-xs text-foreground/60">
                    Suggested Action: <strong className="text-accent-yellow">{selectedPillar.implication.recommendedSolution}</strong>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 2. The 5 Health Classifications Tiers */}
        <div className="max-w-6xl mx-auto mb-16 space-y-6">
          <div className="text-center space-y-2">
            <span className="font-mono text-xs font-black uppercase tracking-widest text-accent-yellow block">
              DIAGNOSTIC CLASSIFICATION
            </span>
            <h3 className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-tight text-white">
              Where Does Your Ad Spend Land?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {SCORECARD_CLASSIFICATIONS.map((c) => (
              <div
                key={c.tier}
                className={`bg-[#141414] border-2 ${c.borderBadge} p-5 flex flex-col justify-between space-y-3 shadow-lg`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-lg">{c.icon}</span>
                    <span className="font-mono text-xs font-black px-2 py-0.5 bg-[#202020] text-white border border-foreground/20">
                      {c.range}
                    </span>
                  </div>
                  <strong className="font-heading font-black text-sm uppercase tracking-wider block text-white">
                    {c.title}
                  </strong>
                  <p className="font-sans text-xs text-foreground/75 leading-relaxed">
                    {c.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-foreground/10">
                  <span className="font-mono text-[10px] uppercase font-bold text-foreground/50 block mb-0.5">
                    Directive:
                  </span>
                  <span className="font-mono text-xs font-black text-accent-yellow block leading-tight">
                    {c.primaryDirective}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. The STOP → FIX → TEST → SCALE Action Matrix */}
        <div className="max-w-5xl mx-auto bg-[#141414] border-4 border-accent-yellow p-6 sm:p-8 space-y-6 shadow-[8px_8px_0_0_#FFE600]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-foreground/15 pb-4">
            <div>
              <span className="font-mono text-xs font-black uppercase text-accent-yellow tracking-widest block">
                THE DELIVERABLE BLUEPRINT
              </span>
              <h4 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                The STOP → FIX → TEST → SCALE Action Matrix
              </h4>
            </div>
            <span className="bg-black text-accent-yellow px-3 py-1 text-xs font-mono font-black uppercase border border-accent-yellow">
              Included in Your ₹2,499 Session
            </span>
          </div>

          <p className="font-mono text-xs sm:text-sm text-foreground/80">
            You don't leave with a vague 50-page automated PDF. You leave with a concrete 4-quadrant action matrix built live with our senior engineers:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#1F1414] border-2 border-red-500/40 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <strong className="font-heading font-black text-red-400 uppercase text-lg">01 · STOP</strong>
                <span className="text-xs font-mono font-black text-red-400">P1 URGENT</span>
              </div>
              <p className="font-sans text-xs text-foreground/80">
                Immediately cut ad sets, search queries, and placements burning budget without converting.
              </p>
            </div>

            <div className="bg-[#241C10] border-2 border-orange-500/40 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <strong className="font-heading font-black text-orange-400 uppercase text-lg">02 · FIX</strong>
                <span className="text-xs font-mono font-black text-orange-400">P1 URGENT</span>
              </div>
              <p className="font-sans text-xs text-foreground/80">
                Repair broken server-side CAPI triggers, negative keyword cascades, and mobile funnel drop-offs.
              </p>
            </div>

            <div className="bg-[#222010] border-2 border-yellow-500/40 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <strong className="font-heading font-black text-yellow-400 uppercase text-lg">03 · TEST</strong>
                <span className="text-xs font-mono font-black text-yellow-400">P2 HIGH</span>
              </div>
              <p className="font-sans text-xs text-foreground/80">
                Deploy controlled creative hook sprints and high-intent audience expansion sandboxes.
              </p>
            </div>

            <div className="bg-[#101F18] border-2 border-green-500/40 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <strong className="font-heading font-black text-green-400 uppercase text-lg">04 · SCALE</strong>
                <span className="text-xs font-mono font-black text-green-400">P3 GROWTH</span>
              </div>
              <p className="font-sans text-xs text-foreground/80">
                Consolidate capital into verified evergreen winners with predictable CAC and unit economics.
              </p>
            </div>
          </div>

          <div className="pt-2 text-center">
            <a
              href="#offer"
              className="inline-flex items-center justify-center gap-2 bg-accent-yellow text-black hover:bg-white font-heading font-black uppercase text-sm py-3.5 px-8 border-2 border-black transition-colors"
            >
              <span>Audit My 25 Checkpoints For ₹2,499 →</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
