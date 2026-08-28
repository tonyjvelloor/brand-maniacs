"use client";

import { motion } from "framer-motion";
import { TrendingDown, TrendingUp, ShieldCheck, Zap, ArrowUpRight } from "lucide-react";

const PROOF_CARDS = [
  {
    category: "D2C Skincare",
    spend: "₹85k/mo on Meta",
    leak: "Broken CAPI Attribution",
    outcome: "CAC dropped from ₹840 to ₹390",
    timeframe: "within 48 hours",
    type: "positive",
  },
  {
    category: "B2B SaaS / Services",
    spend: "₹1.2L/mo on Google Ads",
    leak: "Broad Match Query Bleed",
    outcome: "Saved ₹52,000/mo in wasted clicks",
    timeframe: "after negative quarantine",
    type: "positive",
  },
  {
    category: "Real Estate & High-Ticket",
    spend: "₹60k/mo Multi-Channel",
    leak: "Ad Hook vs Landing Page Disconnect",
    outcome: "Qualified booking rate jumped 3.2x",
    timeframe: "with streamlined mobile flow",
    type: "positive",
  },
  {
    category: "E-Commerce Apparel",
    spend: "₹1.5L/mo on Meta & PMax",
    leak: "Fragmented Budget Across 18 Ad Sets",
    outcome: "Consolidated winners; ROAS from 1.4x to 3.8x",
    timeframe: "in next campaign cycle",
    type: "positive",
  },
];

export function ProofBarTicker() {
  return (
    <section className="py-8 bg-[#0F0F0F] border-b-2 border-foreground/15 text-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Label */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-xs font-black uppercase tracking-wider text-foreground/80">
              Recent Forensic Fixes & Results
            </span>
          </div>
          <span className="text-[11px] font-mono text-foreground/50">
            Real client data · Anonymized for confidentiality
          </span>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {PROOF_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#161616] border border-foreground/15 p-4 flex flex-col justify-between space-y-2 hover:border-accent-yellow transition-colors shadow-md"
            >
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="font-bold text-accent-yellow uppercase">{card.category}</span>
                  <span className="text-foreground/50">{card.spend}</span>
                </div>
                <div className="text-xs font-mono text-red-400 font-bold">
                  Leak: {card.leak}
                </div>
              </div>

              <div className="pt-2 border-t border-foreground/10 space-y-0.5">
                <div className="font-heading font-black text-sm text-white uppercase tracking-tight flex items-center gap-1">
                  <span>{card.outcome}</span>
                </div>
                <p className="text-[10px] font-mono text-foreground/60">
                  {card.timeframe}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
