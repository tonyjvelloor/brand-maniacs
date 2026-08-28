"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Crosshair, Activity, Sparkles, Filter, ChevronRight, Droplets } from "lucide-react";

interface LeakInfo {
  id: string;
  label: string;
  name: string;
  icon: typeof Crosshair;
  tag: string;
  wasteRange: string;
  symptom: string;
  rootCause: string;
  fix: string;
  badgeColor: string;
}

const LEAKS: LeakInfo[] = [
  {
    id: "targeting",
    label: "01",
    name: "Targeting Leak",
    icon: Crosshair,
    tag: "Audience & Match Types",
    wasteRange: "20% - 35% of spend",
    symptom: "Lots of clicks from irrelevant locations or bargain seekers.",
    rootCause: "Broad match spillovers, missing negative keyword cascades, loose Meta Advantage+ expansions.",
    fix: "High-intent keyword segmentation & negative audience quarantine.",
    badgeColor: "bg-red-500/10 text-red-500 border-red-500/30",
  },
  {
    id: "tracking",
    label: "02",
    name: "Tracking Leak",
    icon: Activity,
    tag: "Attribution & CAPI",
    wasteRange: "15% - 40% misattribution",
    symptom: "Ad manager shows 40 conversions, but your bank account shows 8.",
    rootCause: "Broken server-side CAPI deduplication, ghost page-view conversions, iOS 14+ signal loss.",
    fix: "Server-side GTM + CAPI audit & exact offline revenue synchronization.",
    badgeColor: "bg-amber-500/10 text-amber-500 border-amber-500/30",
  },
  {
    id: "creative",
    label: "03",
    name: "Creative Leak",
    icon: Sparkles,
    tag: "Hook & Messaging",
    wasteRange: "25% - 45% click burn",
    symptom: "High CTR but instantaneous bounce rate; ad clicks don't convert.",
    rootCause: "Clickbait or misaligned ad hooks attracting curiosity clickers rather than qualified buyers.",
    fix: "Intent-matching ad hooks that pre-qualify customers before they click.",
    badgeColor: "bg-yellow-500/10 text-yellow-600 border-yellow-500/30",
  },
  {
    id: "funnel",
    label: "04",
    name: "Funnel Leak",
    icon: Filter,
    tag: "Speed & Friction",
    wasteRange: "30% - 50% drop-off",
    symptom: "Warm traffic hits the landing page and abandons within 4 seconds.",
    rootCause: "Slow mobile loading, confusing copy hierarchy, cognitive overload on checkout/forms.",
    fix: "Zero-friction single-path landing flow with sub-2s mobile load speeds.",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  },
];

export function LeakingBudgetVisual() {
  const [activeLeak, setActiveLeak] = useState<string>("targeting");
  const selectedLeak = LEAKS.find((l) => l.id === activeLeak) || LEAKS[0];

  return (
    <div className="w-full bg-[#111111] border-2 border-foreground/20 rounded-none p-4 sm:p-6 md:p-8 relative overflow-hidden shadow-2xl">
      {/* Background blueprint grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#F0F0F0 1px, transparent 1px), linear-gradient(90deg, #F0F0F0 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top Header Tag */}
      <div className="flex items-center justify-between border-b border-foreground/15 pb-4 mb-6 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-accent-yellow animate-ping" />
          <span className="text-[11px] font-mono font-black uppercase tracking-widest text-accent-yellow">
            System Diagnostic // Budget Leak Simulation
          </span>
        </div>
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-foreground/50 border border-foreground/20 px-2 py-0.5">
          Tap Leaks to Inspect
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
        {/* Visual Diagram Column */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative py-4">
          {/* Top Inflow Marker */}
          <div className="text-center mb-2">
            <div className="inline-flex items-center gap-2 bg-foreground text-background px-3 py-1 text-xs font-mono font-black tracking-wider uppercase">
              <span>Intake: ₹25,000 - ₹1,00,000+/mo</span>
              <span className="text-accent-red">↓</span>
            </div>
          </div>

          {/* SVG Vessel Illustration */}
          <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[4/5] flex items-center justify-center">
            <svg
              viewBox="0 0 360 440"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full drop-shadow-[0_0_25px_rgba(255,230,0,0.15)]"
            >
              {/* Central Chamber Base */}
              <defs>
                <linearGradient id="vesselGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D8BE00" />
                  <stop offset="50%" stopColor="#FFE600" />
                  <stop offset="100%" stopColor="#C4AC00" />
                </linearGradient>
                <linearGradient id="fluidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFE600" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FF2A00" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Main Outer Chamber Structure */}
              <rect
                x="80"
                y="50"
                width="200"
                height="320"
                rx="8"
                fill="#181818"
                stroke="#FFE600"
                strokeWidth="4"
              />

              {/* Chamber Metal Bands */}
              <line x1="80" y1="120" x2="280" y2="120" stroke="#FFE600" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="80" y1="210" x2="280" y2="210" stroke="#FFE600" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="80" y1="300" x2="280" y2="300" stroke="#FFE600" strokeWidth="2" strokeDasharray="4 4" />

              {/* Fluid Level (Simulating Leaking Drop) */}
              <motion.rect
                x="86"
                y="150"
                width="188"
                height="214"
                rx="4"
                fill="url(#fluidGrad)"
                initial={{ opacity: 0.8 }}
                animate={{ opacity: [0.7, 0.9, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Top Funnel / Cap */}
              <path
                d="M120 20 L240 20 L220 50 L140 50 Z"
                fill="#222"
                stroke="#F0F0F0"
                strokeWidth="3"
              />

              {/* Bottom Output Drain */}
              <path
                d="M140 370 L220 370 L200 410 L160 410 Z"
                fill="#222"
                stroke="#F0F0F0"
                strokeWidth="3"
              />

              {/* Measurement Gauge on right */}
              <line x1="260" y1="70" x2="270" y2="70" stroke="#000" strokeWidth="2" />
              <line x1="255" y1="100" x2="270" y2="100" stroke="#000" strokeWidth="2" />
              <line x1="260" y1="130" x2="270" y2="130" stroke="#000" strokeWidth="2" />
              <line x1="250" y1="160" x2="270" y2="160" stroke="#000" strokeWidth="3" />
              <line x1="260" y1="190" x2="270" y2="190" stroke="#000" strokeWidth="2" />
              <line x1="255" y1="220" x2="270" y2="220" stroke="#000" strokeWidth="2" />
              <line x1="260" y1="250" x2="270" y2="250" stroke="#000" strokeWidth="2" />
              <line x1="250" y1="280" x2="270" y2="280" stroke="#000" strokeWidth="3" />
              <line x1="260" y1="310" x2="270" y2="310" stroke="#000" strokeWidth="2" />
              <line x1="255" y1="340" x2="270" y2="340" stroke="#000" strokeWidth="2" />

              {/* Rupture Crack 1: TARGETING (Top Left) */}
              <g className="cursor-pointer" onClick={() => setActiveLeak("targeting")}>
                <circle cx="80" cy="110" r="14" fill="#111" stroke={activeLeak === "targeting" ? "#FF2A00" : "#FFE600"} strokeWidth="3" />
                <path d="M72 106 L88 114 M75 114 L85 106" stroke={activeLeak === "targeting" ? "#FF2A00" : "#FFE600"} strokeWidth="2" />
                {/* Leaking Drips */}
                <motion.circle
                  cx="70"
                  cy="125"
                  r="3"
                  fill="#FF2A00"
                  animate={{ y: [0, 25, 45], opacity: [1, 0.8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeIn" }}
                />
              </g>

              {/* Rupture Crack 2: TRACKING (Top Right) */}
              <g className="cursor-pointer" onClick={() => setActiveLeak("tracking")}>
                <circle cx="280" cy="140" r="14" fill="#111" stroke={activeLeak === "tracking" ? "#FF2A00" : "#FFE600"} strokeWidth="3" />
                <path d="M272 136 L288 144 M275 144 L285 136" stroke={activeLeak === "tracking" ? "#FF2A00" : "#FFE600"} strokeWidth="2" />
                <motion.circle
                  cx="290"
                  cy="155"
                  r="3"
                  fill="#FF2A00"
                  animate={{ y: [0, 25, 45], opacity: [1, 0.8, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: 0.4, ease: "easeIn" }}
                />
              </g>

              {/* Rupture Crack 3: CREATIVE (Bottom Left) */}
              <g className="cursor-pointer" onClick={() => setActiveLeak("creative")}>
                <circle cx="80" cy="240" r="14" fill="#111" stroke={activeLeak === "creative" ? "#FF2A00" : "#FFE600"} strokeWidth="3" />
                <path d="M72 236 L88 244 M75 244 L85 236" stroke={activeLeak === "creative" ? "#FF2A00" : "#FFE600"} strokeWidth="2" />
                <motion.circle
                  cx="70"
                  cy="255"
                  r="3"
                  fill="#FF2A00"
                  animate={{ y: [0, 25, 45], opacity: [1, 0.8, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: 0.8, ease: "easeIn" }}
                />
              </g>

              {/* Rupture Crack 4: FUNNEL (Bottom Right) */}
              <g className="cursor-pointer" onClick={() => setActiveLeak("funnel")}>
                <circle cx="280" cy="280" r="14" fill="#111" stroke={activeLeak === "funnel" ? "#FF2A00" : "#FFE600"} strokeWidth="3" />
                <path d="M272 276 L288 284 M275 284 L285 276" stroke={activeLeak === "funnel" ? "#FF2A00" : "#FFE600"} strokeWidth="2" />
                <motion.circle
                  cx="290"
                  cy="295"
                  r="3"
                  fill="#FF2A00"
                  animate={{ y: [0, 25, 45], opacity: [1, 0.8, 0] }}
                  transition={{ duration: 1.7, repeat: Infinity, delay: 1.1, ease: "easeIn" }}
                />
              </g>
            </svg>

            {/* Overlaid Pill Badges for Quick Selection on Mobile/Tablet */}
            <div className="absolute top-[20%] -left-2 sm:-left-6">
              <button
                type="button"
                onClick={() => setActiveLeak("targeting")}
                className={`text-[10px] sm:text-xs font-mono font-bold px-2 sm:px-2.5 py-1 border transition-all ${
                  activeLeak === "targeting"
                    ? "bg-accent-red text-white border-accent-red shadow-lg scale-105"
                    : "bg-[#1A1A1A] text-foreground/80 border-foreground/20 hover:border-accent-yellow"
                }`}
              >
                01 Targeting ⚡
              </button>
            </div>

            <div className="absolute top-[28%] -right-2 sm:-right-6">
              <button
                type="button"
                onClick={() => setActiveLeak("tracking")}
                className={`text-[10px] sm:text-xs font-mono font-bold px-2 sm:px-2.5 py-1 border transition-all ${
                  activeLeak === "tracking"
                    ? "bg-accent-red text-white border-accent-red shadow-lg scale-105"
                    : "bg-[#1A1A1A] text-foreground/80 border-foreground/20 hover:border-accent-yellow"
                }`}
              >
                02 Tracking ⚡
              </button>
            </div>

            <div className="absolute top-[52%] -left-2 sm:-left-6">
              <button
                type="button"
                onClick={() => setActiveLeak("creative")}
                className={`text-[10px] sm:text-xs font-mono font-bold px-2 sm:px-2.5 py-1 border transition-all ${
                  activeLeak === "creative"
                    ? "bg-accent-red text-white border-accent-red shadow-lg scale-105"
                    : "bg-[#1A1A1A] text-foreground/80 border-foreground/20 hover:border-accent-yellow"
                }`}
              >
                03 Creative ⚡
              </button>
            </div>

            <div className="absolute top-[62%] -right-2 sm:-right-6">
              <button
                type="button"
                onClick={() => setActiveLeak("funnel")}
                className={`text-[10px] sm:text-xs font-mono font-bold px-2 sm:px-2.5 py-1 border transition-all ${
                  activeLeak === "funnel"
                    ? "bg-accent-red text-white border-accent-red shadow-lg scale-105"
                    : "bg-[#1A1A1A] text-foreground/80 border-foreground/20 hover:border-accent-yellow"
                }`}
              >
                04 Funnel ⚡
              </button>
            </div>
          </div>

          {/* Bottom Output Drain Label */}
          <div className="text-center mt-2">
            <div className="inline-flex items-center gap-2 bg-[#222] border border-foreground/30 text-foreground/80 px-3 py-1 text-xs font-mono font-bold tracking-wider">
              <span>Actual Customers Reached</span>
              <span className="text-red-400 font-black">(-40% to -65% Drain)</span>
            </div>
          </div>
        </div>

        {/* Diagnostic Inspector Card Column */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          {/* Quick leak selector tab bar */}
          <div className="grid grid-cols-4 gap-1.5 mb-4">
            {LEAKS.map((leak) => {
              const isSelected = leak.id === activeLeak;
              return (
                <button
                  key={leak.id}
                  type="button"
                  onClick={() => setActiveLeak(leak.id)}
                  className={`py-2 px-1 text-center font-mono text-xs uppercase font-bold border transition-all ${
                    isSelected
                      ? "bg-accent-yellow text-black border-accent-yellow font-black shadow-md"
                      : "bg-[#1A1A1A] text-foreground/70 border-foreground/20 hover:bg-[#252525]"
                  }`}
                >
                  <span className="block text-[10px] opacity-70">{leak.label}</span>
                  <span className="truncate block">{leak.name.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Leak Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedLeak.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-[#181818] border-2 border-foreground/30 p-5 sm:p-6 space-y-4 shadow-xl relative"
            >
              {/* Leak Header */}
              <div className="flex flex-wrap items-start justify-between gap-2 border-b border-foreground/10 pb-3">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-accent-yellow block">
                    RUPTURE POINT {selectedLeak.label} // {selectedLeak.tag}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-heading font-black text-foreground uppercase tracking-tight mt-0.5">
                    {selectedLeak.name}
                  </h4>
                </div>
                <div className={`px-2.5 py-1 text-xs font-mono font-black uppercase border ${selectedLeak.badgeColor}`}>
                  {selectedLeak.wasteRange}
                </div>
              </div>

              {/* Symptom & Cause */}
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-xs font-mono font-bold text-foreground/50 uppercase tracking-wider block mb-1">
                    What It Feels Like:
                  </span>
                  <p className="text-foreground font-sans font-medium text-sm sm:text-base leading-snug">
                    "{selectedLeak.symptom}"
                  </p>
                </div>

                <div className="bg-[#111] p-3 border-l-2 border-accent-red">
                  <span className="text-xs font-mono font-bold text-accent-red uppercase tracking-wider block mb-1">
                    The Silent Technical Flaw:
                  </span>
                  <p className="text-foreground/80 font-mono text-xs sm:text-sm leading-relaxed">
                    {selectedLeak.rootCause}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-mono font-bold text-accent-yellow uppercase tracking-wider block mb-1">
                    How We Diagnose & Fix It in 60 Mins:
                  </span>
                  <p className="text-foreground/90 font-sans text-xs sm:text-sm font-medium">
                    {selectedLeak.fix}
                  </p>
                </div>
              </div>

              {/* Bottom Micro-CTA */}
              <div className="pt-2">
                <a
                  href="#offer"
                  className="w-full inline-flex items-center justify-between bg-accent-yellow text-black font-heading font-black uppercase px-4 py-2.5 text-xs sm:text-sm tracking-wider hover:bg-white transition-colors"
                >
                  <span>Plug This Leak For ₹2,499</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
