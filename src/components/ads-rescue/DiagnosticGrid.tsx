"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, 
  Sparkles, 
  Filter, 
  Activity, 
  TrendingUp, 
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
  XCircle
} from "lucide-react";
import { SCORECARD_PILLARS } from "@/lib/scorecard";

const PILLARS_DISPLAY = [
  {
    number: "01",
    name: "ATTRACT",
    headline: "Are you reaching the right people?",
    description: "We check whether your ads are attracting people who are actually likely to become customers.",
    icon: Users,
    detailPoints: [
      "Targeting accuracy & audience signals",
      "Search keyword intent on Google",
      "Irrelevant curiosity traffic filtering",
      "Message-to-market pain point match"
    ]
  },
  {
    number: "02",
    name: "CONVINCE",
    headline: "Are your ads giving people a reason to act?",
    description: "We check your message, offer, and creative to understand whether they are compelling enough to win buyers.",
    icon: Sparkles,
    detailPoints: [
      "Scroll-stopping visual and hook clarity",
      "Offer positioning & why choose you",
      "Differentiation from direct competitors",
      "Clear, frictionless calls-to-action"
    ]
  },
  {
    number: "03",
    name: "CONVERT",
    headline: "What happens after someone clicks?",
    description: "We look for places on your landing page, lead forms, or checkout where potential customers may be losing interest or dropping off.",
    icon: Filter,
    detailPoints: [
      "Mobile page load speed & responsiveness",
      "Ad-to-landing-page message continuity",
      "Form simplicity & checkout friction",
      "Speed-to-lead and sales follow-up flow"
    ]
  },
  {
    number: "04",
    name: "TRACK",
    headline: "Do you know what's actually working?",
    description: "We check whether you can clearly see where your leads, sales, and bank account revenue are coming from.",
    icon: Activity,
    detailPoints: [
      "Meta Pixel & Google tag firing health",
      "Server-side conversion tracking (CAPI)",
      "False/duplicate lead reporting checks",
      "Algorithm feedback on qualified buyers"
    ]
  },
  {
    number: "05",
    name: "SCALE",
    headline: "Is it safe to spend more money?",
    description: "We check whether your current advertising is strong enough to scale without driving up costs or wasting more budget.",
    icon: TrendingUp,
    detailPoints: [
      "Budget concentration on winning campaigns",
      "Systematic creative testing routines",
      "Customer acquisition cost (CAC) economics",
      "Operational capacity to fulfill higher demand"
    ]
  }
];

export function DiagnosticGrid() {
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-[#080808] text-foreground border-b-2 border-foreground/20 relative overflow-hidden">
      {/* Blueprint Grid Background */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#FFE600 1px, transparent 1px), linear-gradient(90deg, #FFE600 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header — Level 1 Clarity */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-14 md:mb-18">
          <span className="inline-block font-mono text-xs font-black uppercase tracking-widest text-accent-yellow bg-accent-yellow/10 border border-accent-yellow/30 px-3 py-1">
            THE 5-POINT AD HEALTH CHECK
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-foreground leading-[1.05]">
            We don't guess. <br className="hidden sm:block" />
            <span className="text-accent-yellow">We diagnose the system.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto font-medium">
            Your advertising is evaluated across five critical areas to pinpoint exactly what's working and what's costing you money.
          </p>
        </div>

        {/* 5-Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {PILLARS_DISPLAY.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-[#121212] border-2 border-foreground/20 p-6 sm:p-7 flex flex-col justify-between hover:border-accent-yellow transition-colors group"
            >
              <div className="space-y-3">
                {/* Number & Icon */}
                <div className="flex items-center justify-between border-b border-foreground/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-black text-sm text-accent-yellow">
                      {pillar.number}
                    </span>
                    <span className="font-mono text-foreground/40 text-xs">—</span>
                    <span className="font-heading font-black text-sm tracking-wider uppercase text-foreground">
                      {pillar.name}
                    </span>
                  </div>
                  <pillar.icon className="w-5 h-5 text-foreground/40 group-hover:text-accent-yellow transition-colors" />
                </div>

                {/* Primary Question */}
                <h3 className="font-heading font-black text-xl sm:text-2xl text-foreground uppercase tracking-tight leading-snug group-hover:text-accent-yellow transition-colors">
                  {pillar.headline}
                </h3>

                {/* Plain-English Meaning */}
                <p className="font-sans text-xs sm:text-sm text-foreground/75 font-medium leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Evaluated Checkpoints */}
              <div className="mt-5 pt-3 border-t border-foreground/10 space-y-1.5 text-xs font-mono text-foreground/70">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-foreground/40 block mb-1">
                  What we look at:
                </span>
                {pillar.detailPoints.map((pt, i) => (
                  <div key={i} className="flex items-center gap-2 text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-yellow shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* 6th Card: Simple Scoring Explanation */}
          <div className="bg-[#181818] border-2 border-accent-yellow/40 p-6 sm:p-7 flex flex-col justify-between shadow-lg">
            <div className="space-y-3">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-accent-yellow block">
                HOW YOUR AUDIT WORKS
              </span>
              <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight text-white leading-snug">
                25 diagnostic checks. <br />Zero vague opinions.
              </h3>
              <p className="font-sans text-xs sm:text-sm text-foreground/80 leading-relaxed font-medium">
                We look at 25 important parts of your advertising. Each area is checked and scored based on what we find, so you see:
              </p>

              <div className="space-y-1.5 text-xs font-mono pt-1">
                <div className="flex items-center gap-2 text-green-400 font-bold">
                  <span>🟢</span>
                  <span>What's working well</span>
                </div>
                <div className="flex items-center gap-2 text-yellow-400 font-bold">
                  <span>🟡</span>
                  <span>What needs improvement</span>
                </div>
                <div className="flex items-center gap-2 text-red-400 font-bold">
                  <span>🔴</span>
                  <span>What's costing you money</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-foreground/15">
              <a
                href="#offer"
                className="w-full inline-flex items-center justify-between bg-accent-yellow text-black font-heading font-black uppercase text-xs sm:text-sm py-3 px-4 hover:bg-white transition-colors"
              >
                <span>Get Your Ads Checked — ₹2,499</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Expandable Technical Depth Accordion for analytical visitors */}
        <div className="max-w-4xl mx-auto text-center">
          <button
            type="button"
            onClick={() => setShowTechnicalDetails(!showTechnicalDetails)}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-accent-yellow hover:text-white transition-colors cursor-pointer py-2 px-4 border border-foreground/20 bg-[#121212]"
          >
            <span>{showTechnicalDetails ? "Hide technical methodology" : "How is your score calculated? See all 25 checkpoints"}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showTechnicalDetails ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {showTechnicalDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 bg-[#141414] border-2 border-foreground/20 p-6 text-left space-y-6 overflow-hidden"
              >
                <div className="border-b border-foreground/15 pb-3">
                  <h4 className="font-heading font-black text-lg uppercase text-white">
                    The 25-Point Diagnostic Methodology
                  </h4>
                  <p className="text-xs font-mono text-foreground/60">
                    Each checkpoint receives an evidence-backed score (0 = Critical Issue, 1 = Weak, 2 = Functional, 3 = Strong) to calculate your weighted Ad Health Score.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  {SCORECARD_PILLARS.map((pillar) => (
                    <div key={pillar.id} className="bg-[#1A1A1A] p-4 border border-foreground/10 space-y-2">
                      <div className="flex items-center justify-between font-bold text-accent-yellow border-b border-foreground/10 pb-1">
                        <span>{pillar.number}. {pillar.name} ({pillar.weightPercent}% Weight)</span>
                      </div>
                      <ul className="space-y-1.5 text-foreground/80">
                        {pillar.checkpoints.map((cp) => (
                          <li key={cp.id} className="flex items-start gap-1.5">
                            <span className="text-accent-yellow font-bold">{cp.letter}.</span>
                            <span><strong>{cp.name}:</strong> {cp.question}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
