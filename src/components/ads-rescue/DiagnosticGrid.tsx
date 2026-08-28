"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Sparkles, 
  Filter, 
  Activity, 
  TrendingUp, 
  ArrowRight,
  Check
} from "lucide-react";

interface PillarItem {
  number: string;
  name: string;
  question: string;
  icon: typeof Users;
  includes: string[];
  businessQuestion: string;
}

const HEALTH_CHECK_PILLARS: PillarItem[] = [
  {
    number: "01",
    name: "ATTRACT",
    question: "Are the right people finding you?",
    businessQuestion: "Are you paying for potential buyers, or just curiosity clickers?",
    icon: Users,
    includes: [
      "Targeting accuracy",
      "Audience quality",
      "Search keywords",
      "Search intent match",
      "Traffic relevance"
    ]
  },
  {
    number: "02",
    name: "CONVINCE",
    question: "Does your message make the right people act?",
    businessQuestion: "Does your ad clearly explain why someone should choose you?",
    icon: Sparkles,
    includes: [
      "Ad creative & visuals",
      "Problem recognition hooks",
      "Offer clarity",
      "Differentiation from competitors",
      "Message-to-market fit"
    ]
  },
  {
    number: "03",
    name: "CONVERT",
    question: "Where are potential customers dropping off?",
    businessQuestion: "What friction is stopping warm visitors from buying or inquiring?",
    icon: Filter,
    includes: [
      "Landing page speed & clarity",
      "Lead form friction",
      "WhatsApp & checkout journey",
      "Mobile conversion experience",
      "Sales follow-up process"
    ]
  },
  {
    number: "04",
    name: "TRACK",
    question: "Are you measuring what actually matters?",
    businessQuestion: "Can you trace your bank account revenue back to specific campaigns?",
    icon: Activity,
    includes: [
      "Meta Pixel & Google tag health",
      "Server-side conversion tracking (CAPI)",
      "Accurate sales attribution",
      "Lead quality feedback loops",
      "Decision-grade reporting"
    ]
  },
  {
    number: "05",
    name: "SCALE",
    question: "Are you ready to invest more?",
    businessQuestion: "Will increasing ad spend double your revenue or just double your costs?",
    icon: TrendingUp,
    includes: [
      "Budget allocation efficiency",
      "Systematic creative testing",
      "Winning campaign identification",
      "Cost per lead / customer economics",
      "Operational capacity to handle growth"
    ]
  }
];

export function DiagnosticGrid() {
  return (
    <section className="py-16 md:py-24 bg-[#080808] text-foreground border-b-2 border-foreground/20 relative overflow-hidden">
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
          <span className="inline-block font-mono text-xs font-black uppercase tracking-widest text-accent-yellow bg-accent-yellow/10 border border-accent-yellow/30 px-3 py-1">
            THE ADS RESCUE METHOD
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-foreground leading-[1.05]">
            We don't guess. <br className="hidden sm:block" />
            <span className="text-accent-yellow">We diagnose the system.</span>
          </h2>
          <p className="font-mono text-sm sm:text-base text-foreground/75 max-w-2xl mx-auto leading-relaxed">
            Your advertising is evaluated across five critical areas to isolate exact leaks and inefficiencies.
          </p>
        </div>

        {/* 5-Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {HEALTH_CHECK_PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-[#121212] border-2 border-foreground/20 p-6 sm:p-7 flex flex-col justify-between hover:border-accent-yellow transition-colors group"
            >
              <div>
                {/* Pillar Number & Name */}
                <div className="flex items-center justify-between border-b border-foreground/10 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-black text-sm text-accent-yellow">
                      {pillar.number}
                    </span>
                    <span className="font-mono text-foreground/40 text-xs">—</span>
                    <span className="font-heading font-black text-base tracking-wider uppercase text-foreground">
                      {pillar.name}
                    </span>
                  </div>
                  <pillar.icon className="w-5 h-5 text-foreground/40 group-hover:text-accent-yellow transition-colors" />
                </div>

                {/* Primary Question */}
                <h3 className="font-heading font-black text-xl sm:text-2xl text-foreground uppercase tracking-tight mb-2 leading-tight group-hover:text-accent-yellow transition-colors">
                  {pillar.question}
                </h3>

                {/* Plain-English Business Meaning */}
                <p className="font-sans text-xs sm:text-sm text-foreground/70 mb-5 font-medium leading-snug">
                  {pillar.businessQuestion}
                </p>

                {/* Evaluated Checkpoints */}
                <div className="space-y-1.5 pt-3 border-t border-foreground/10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-foreground/50 block mb-2">
                    What We Investigate:
                  </span>
                  <ul className="space-y-1.5 text-xs font-mono text-foreground/80">
                    {pillar.includes.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-accent-yellow shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Evidence Promise */}
              <div className="mt-6 pt-3 border-t border-foreground/10 flex items-center justify-between text-[11px] font-mono text-foreground/40 uppercase">
                <span>Pillar {pillar.number}/05</span>
                <span className="text-accent-yellow font-bold">Evidence Backed</span>
              </div>
            </motion.div>
          ))}

          {/* 6th Card: The Evidence Commitment */}
          <div className="bg-[#181818] border-2 border-accent-yellow/40 p-6 sm:p-7 flex flex-col justify-between shadow-lg">
            <div className="space-y-3">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-accent-yellow block">
                METHODOLOGY STANDARD
              </span>
              <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight text-white leading-snug">
                Every score is backed by actual account evidence.
              </h3>
              <p className="font-sans text-xs sm:text-sm text-foreground/75 leading-relaxed">
                We don't say “your tracking looks weak.” We show you the exact broken triggers, search term spillovers, and landing page bottlenecks draining your capital.
              </p>
            </div>

            <div className="pt-4 border-t border-foreground/15">
              <a
                href="#offer"
                className="w-full inline-flex items-center justify-between bg-accent-yellow text-black font-heading font-black uppercase text-xs sm:text-sm py-3 px-4 hover:bg-white transition-colors"
              >
                <span>Diagnose My Ads — ₹2,499</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
