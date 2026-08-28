"use client";

import { motion } from "framer-motion";
import { X, Check, ShieldCheck, HeartHandshake } from "lucide-react";

export function AntiAgency() {
  return (
    <section className="py-16 md:py-24 bg-[#0A0A0A] text-foreground border-b-2 border-foreground/20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 md:mb-18">
          <span className="inline-block font-mono text-xs font-black uppercase tracking-widest text-accent-red bg-accent-red/10 border border-accent-red/30 px-3 py-1">
            // 03 — RADICAL TRANSPARENCY
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-foreground leading-[1.05]">
            This is not a <br className="hidden sm:block" />
            <span className="text-accent-yellow">disguised sales call.</span>
          </h2>
          <p className="font-mono text-sm sm:text-base text-foreground/70 max-w-xl mx-auto leading-relaxed">
            Most agencies use "free audits" to pitch expensive ₹50k/month retainers. We charge ₹2,499 so we can dedicate senior growth engineers and deliver brutal, uncompromised honesty.
          </p>
        </div>

        {/* Minimal Comparison Container */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          {/* What You WON'T Get */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#141414] border-2 border-red-500/30 p-6 sm:p-8 space-y-5"
          >
            <div className="flex items-center gap-2 border-b border-red-500/20 pb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <h3 className="font-heading font-black text-lg sm:text-xl uppercase tracking-wider text-red-400">
                What We Will NEVER Do:
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
                  ✕
                </span>
                <div>
                  <strong className="text-foreground font-heading uppercase text-sm block">
                    No generic marketing advice
                  </strong>
                  <span className="text-xs font-mono text-foreground/60">
                    No recycled checklists. Every recommendation is extracted from your actual data logs.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
                  ✕
                </span>
                <div>
                  <strong className="text-foreground font-heading uppercase text-sm block">
                    No “increase your budget” without evidence
                  </strong>
                  <span className="text-xs font-mono text-foreground/60">
                    We never recommend scaling budget until baseline ROAS and conversion tracking are validated.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
                  ✕
                </span>
                <div>
                  <strong className="text-foreground font-heading uppercase text-sm block">
                    No pressure to sign a monthly retainer
                  </strong>
                  <span className="text-xs font-mono text-foreground/60">
                    The Ads Rescue Session is a standalone diagnostic. You own the insights 100%.
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* What You WILL Get */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#141414] border-2 border-green-500/30 p-6 sm:p-8 space-y-5"
          >
            <div className="flex items-center gap-2 border-b border-green-500/20 pb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <h3 className="font-heading font-black text-lg sm:text-xl uppercase tracking-wider text-green-400">
                What You Get Instead:
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
                  ✓
                </span>
                <div>
                  <strong className="text-foreground font-heading uppercase text-sm block">
                    A genuine analysis of what's happening
                  </strong>
                  <span className="text-xs font-mono text-foreground/60">
                    Raw, unvarnished truth on where your money was wasted and how to plug the leaks.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
                  ✓
                </span>
                <div>
                  <strong className="text-foreground font-heading uppercase text-sm block">
                    Exact step-by-step fix priority
                  </strong>
                  <span className="text-xs font-mono text-foreground/60">
                    Whether you fix it in-house, with your current agency, or with us, you know what to do next.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-black">
                  ✓
                </span>
                <div>
                  <strong className="text-foreground font-heading uppercase text-sm block">
                    100% actionable takeaway
                  </strong>
                  <span className="text-xs font-mono text-foreground/60">
                    Walk away with a clear diagnostic roadmap document and call recording.
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* The Brand Maniacs Fit Promise Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto bg-[#181818] border-2 border-accent-yellow p-6 sm:p-8 text-center space-y-3 shadow-[6px_6px_0_0_#FFE600]"
        >
          <div className="flex items-center justify-center gap-2 text-accent-yellow font-mono text-xs font-black uppercase tracking-widest">
            <HeartHandshake className="w-4 h-4" />
            <span>Our Commitment to Truth</span>
          </div>
          <p className="font-heading font-black text-xl sm:text-2xl md:text-3xl uppercase text-foreground leading-snug">
            “If we believe Brand Maniacs can help implement the solution, we'll tell you. <br className="hidden md:block" />
            If we don't believe we're the right fit, we'll tell you that too.”
          </p>
          <p className="font-mono text-xs sm:text-sm text-foreground/60">
            No games. No awkward sales pitches. Just pure engineering clarity.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
