"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Activity, Sparkles, Filter, Droplets, Laptop, BarChart3 } from "lucide-react";
import { LeakingBudgetVisual } from "./LeakingBudgetVisual";

export function HeroVisualInteractive() {
  const [viewMode, setViewMode] = useState<"founder" | "simulation">("founder");

  return (
    <div className="w-full relative">
      {/* Top Visual Mode Toggle Bar */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-yellow animate-ping" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-accent-yellow">
            Ad Spend Diagnosis // Visual Overview
          </span>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 bg-[#141414] border border-foreground/20 p-0.5 text-[10px] font-mono">
          <button
            type="button"
            onClick={() => setViewMode("founder")}
            className={`px-2.5 py-1 transition-all cursor-pointer font-bold uppercase ${
              viewMode === "founder"
                ? "bg-accent-yellow text-black"
                : "text-foreground/60 hover:text-white"
            }`}
          >
            Ad Dashboard Reality
          </button>
          <button
            type="button"
            onClick={() => setViewMode("simulation")}
            className={`px-2.5 py-1 transition-all cursor-pointer font-bold uppercase ${
              viewMode === "simulation"
                ? "bg-accent-yellow text-black"
                : "text-foreground/60 hover:text-white"
            }`}
          >
            Leak Simulator
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === "founder" ? (
          <motion.div
            key="founder-view"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-none overflow-hidden border-2 border-foreground/20 bg-[#121212] aspect-[4/3] sm:aspect-[16/11] max-w-full shadow-2xl group"
          >
            {/* Real Cinematic Founder Background Image */}
            <Image
              src="/images/founder_at_laptop.jpg"
              alt="Business owner analyzing ad spend and campaign performance"
              fill
              priority
              className="object-cover object-center filter brightness-90 contrast-105 group-hover:scale-102 transition-transform duration-700"
            />

            {/* Dark Vignette Overlay for High-Contrast Readable Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 pointer-events-none" />

            {/* Top Right Hook Badge */}
            <div className="absolute top-4 right-4 z-20 pointer-events-none">
              <span className="font-handwriting font-bold text-accent-yellow text-xs sm:text-sm tracking-wide bg-black/60 backdrop-blur-md px-2.5 py-1 border border-accent-yellow/30 shadow-lg">
                Better Ads. Real Results. ✨
              </span>
            </div>

            {/* Hand-Drawn Chalk Annotations & Pain Points */}
            <div className="absolute top-8 left-6 sm:left-10 z-20 pointer-events-none">
              <div className="font-mono text-[11px] sm:text-xs text-white/90 bg-black/50 backdrop-blur-sm px-2 py-0.5 border-l-2 border-accent-yellow">
                Good spend. Few leads.
              </div>
              <svg className="w-10 h-8 text-accent-yellow/80 mt-1 ml-4" viewBox="0 0 40 30" fill="none">
                <path d="M5 5 C 15 20, 25 15, 32 25 M 32 25 L 26 22 M 32 25 L 30 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            <div className="absolute top-28 right-6 sm:right-12 z-20 pointer-events-none text-right">
              <div className="font-mono text-[11px] sm:text-xs text-white/90 bg-black/50 backdrop-blur-sm px-2 py-0.5 border-r-2 border-accent-red">
                High clicks. Low conversions.
              </div>
              <svg className="w-12 h-10 text-accent-red/80 mt-1 mr-4 ml-auto" viewBox="0 0 50 40" fill="none">
                <path d="M40 5 C 30 25, 20 20, 10 32 M 10 32 L 18 30 M 10 32 L 12 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            <div className="absolute bottom-16 right-4 sm:right-8 z-20 pointer-events-none">
              <div className="font-mono text-xs sm:text-sm font-bold text-accent-yellow bg-black/70 backdrop-blur-sm px-3 py-1 border border-accent-yellow/40 shadow-xl">
                Where is the leak? ⚡
              </div>
            </div>

            {/* FLOATING HUD CARD 1: Meta Ads Glass Card */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="absolute top-6 left-4 sm:left-6 z-30 bg-[#0F172A]/85 backdrop-blur-md border border-cyan-500/40 p-2.5 sm:p-3 shadow-2xl rounded-none w-36 sm:w-44 text-white"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-black text-white">
                    ∞
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-blue-300">
                    Meta Ads
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              </div>
              <div className="text-base sm:text-lg font-heading font-black text-white tracking-tight">
                1,24,532
              </div>
              <div className="flex items-center justify-between text-[9px] font-mono text-foreground/60">
                <span>Clicks</span>
                <span className="text-red-400 font-bold">0.8% Conv</span>
              </div>
              {/* Blue Mini Wave */}
              <svg className="w-full h-4 text-blue-400 mt-1" viewBox="0 0 100 20" fill="none">
                <path d="M0 15 Q 25 5, 50 12 T 100 4" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </motion.div>

            {/* FLOATING HUD CARD 2: Google Ads Glass Card */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="absolute top-20 right-4 sm:right-6 z-30 bg-[#061A12]/85 backdrop-blur-md border border-emerald-500/40 p-2.5 sm:p-3 shadow-2xl rounded-none w-36 sm:w-44 text-white"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 bg-yellow-400 flex items-center justify-center text-[9px] font-black text-black">
                    ▲
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-emerald-300">
                    Google Ads
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="text-base sm:text-lg font-heading font-black text-white tracking-tight">
                89,412
              </div>
              <div className="flex items-center justify-between text-[9px] font-mono text-foreground/60">
                <span>Search Clicks</span>
                <span className="text-yellow-400 font-bold">₹42 Avg CPC</span>
              </div>
              {/* Green Mini Wave */}
              <svg className="w-full h-4 text-emerald-400 mt-1" viewBox="0 0 100 20" fill="none">
                <path d="M0 12 Q 25 18, 50 8 T 100 14" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </motion.div>

            {/* Bottom Caption Pill */}
            <div className="absolute bottom-3 left-3 z-20">
              <span className="text-[10px] font-mono font-bold text-foreground/75 bg-black/70 backdrop-blur-sm px-2.5 py-1 border border-foreground/20">
                Forensic Analysis: Google & Meta Ad Spend
              </span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="simulation-view"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <LeakingBudgetVisual />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
