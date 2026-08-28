"use client";

import { motion } from "framer-motion";
import { 
  Activity, 
  Crosshair, 
  Wallet, 
  Sparkles, 
  Search, 
  Filter, 
  ArrowRight,
  Check
} from "lucide-react";

interface DiagnosticArea {
  number: string;
  name: string;
  question: string;
  icon: typeof Activity;
  checks: string[];
}

const AREAS: DiagnosticArea[] = [
  {
    number: "01",
    name: "TRACKING",
    question: "Are you measuring the right conversions?",
    icon: Activity,
    checks: [
      "Server-side CAPI & GTM configuration",
      "Deduplication & pixel misfire checks",
      "Offline sales vs ad-reported revenue reconciliation",
      "Attribution window calibration (7-day click vs 1-day view)"
    ]
  },
  {
    number: "02",
    name: "TARGETING",
    question: "Are you reaching potential buyers?",
    icon: Crosshair,
    checks: [
      "Audience network / spam placement bleed",
      "Audience overlap across active ad sets",
      "Geo-location exclusion leakage",
      "Advantage+ audience expansion guardrails"
    ]
  },
  {
    number: "03",
    name: "SPEND",
    question: "Where is the budget actually going?",
    icon: Wallet,
    checks: [
      "Campaign budget cannibalization across ad sets",
      "Device & hourly bid distribution anomalies",
      "Underperforming creative budget hogs",
      "Brand search bidding efficiency vs competitor terms"
    ]
  },
  {
    number: "04",
    name: "CREATIVE",
    question: "Is your messaging attracting the wrong people?",
    icon: Sparkles,
    checks: [
      "First 3-second hook hold rate & drop-offs",
      "Value proposition match to target pain points",
      "Curiosity clickers vs buyer-intent messaging",
      "Creative fatigue cycle vs refreshing schedule"
    ]
  },
  {
    number: "05",
    name: "INTENT",
    question: "Are you paying for clicks that won't convert?",
    icon: Search,
    checks: [
      "Negative keyword library & wasted search terms",
      "Broad match query intent contamination",
      "Informational queries vs commercial buyer queries",
      "PMax asset group search themes & audience signals"
    ]
  },
  {
    number: "06",
    name: "FUNNEL",
    question: "Where are potential customers dropping off?",
    icon: Filter,
    checks: [
      "Mobile landing page load speed & Core Web Vitals",
      "Ad-to-landing-page message continuity & smell test",
      "Form field resistance & friction analysis",
      "Call-to-action visibility and clarity on mobile"
    ]
  }
];

export function DiagnosticGrid() {
  return (
    <section className="py-16 md:py-24 bg-[#050505] text-foreground border-b-2 border-foreground/20 relative overflow-hidden">
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
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-14 md:mb-20">
          <span className="inline-block font-mono text-xs font-black uppercase tracking-widest text-accent-yellow bg-accent-yellow/10 border border-accent-yellow/30 px-3 py-1">
            THE ADS RESCUE METHOD
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-foreground leading-[1.05]">
            We don't guess. <br className="hidden sm:block" />
            <span className="text-accent-yellow">We investigate.</span>
          </h2>
          <p className="font-mono text-sm sm:text-base text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            A comprehensive 6-pillar forensic examination of your Google & Meta ad infrastructure to isolate exact leaks.
          </p>
        </div>

        {/* Clean 2 × 3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {AREAS.map((area, index) => (
            <motion.div
              key={area.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-[#111111] border-2 border-foreground/20 p-6 sm:p-7 flex flex-col justify-between hover:border-accent-yellow transition-colors group"
            >
              <div>
                {/* Header: Area Number & Icon */}
                <div className="flex items-center justify-between border-b border-foreground/10 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-black text-sm text-accent-yellow">
                      {area.number}
                    </span>
                    <span className="font-mono text-foreground/40 text-xs">—</span>
                    <span className="font-heading font-black text-sm tracking-wider uppercase text-foreground">
                      {area.name}
                    </span>
                  </div>
                  <area.icon className="w-5 h-5 text-foreground/40 group-hover:text-accent-yellow transition-colors" />
                </div>

                {/* Main Question */}
                <h3 className="font-heading font-black text-xl sm:text-2xl text-foreground uppercase tracking-tight mb-4 leading-tight group-hover:text-accent-yellow transition-colors">
                  {area.question}
                </h3>

                {/* Specific Audit Checks */}
                <ul className="space-y-2 text-xs font-mono text-foreground/75 mb-6">
                  {area.checks.map((check, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-accent-yellow shrink-0 mt-0.5" />
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Tag */}
              <div className="pt-3 border-t border-foreground/10 flex items-center justify-between text-[11px] font-mono font-bold text-foreground/40 uppercase">
                <span>Pillar {area.number}/06</span>
                <span className="text-accent-yellow opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Full Diagnostic <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Hook */}
        <div className="mt-12 text-center">
          <a
            href="#offer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-black uppercase text-accent-yellow hover:text-white underline underline-offset-4 tracking-wider"
          >
            <span>Lock In All 6 Diagnostic Pillars for ₹2,499</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
