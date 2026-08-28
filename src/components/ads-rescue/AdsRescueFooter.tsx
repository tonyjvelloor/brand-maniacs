"use client";

import Link from "next/link";
import { ShieldCheck, ArrowUpRight } from "lucide-react";
import { INSTAGRAM_URL, LINKEDIN_URL, WHATSAPP_URL } from "@/lib/config";

export function AdsRescueFooter() {
  return (
    <footer className="bg-[#0A0A0A] text-foreground border-t-2 border-foreground/20 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Top Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-foreground/15">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-heading font-black text-2xl tracking-tighter text-foreground">
                THE BRAND MANIACS
              </span>
              <span className="bg-accent-yellow text-black text-[10px] font-mono font-black px-2 py-0.5 uppercase">
                DIAGNOSTICS
              </span>
            </div>
            <p className="font-mono text-xs sm:text-sm text-foreground/70 max-w-md leading-relaxed">
              ADS RESCUE™ is an independent diagnostic session engineered by The Brand Maniacs. We isolate budget leaks, audit attribution, and give founders immediate clarity on their advertising spend.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-accent-yellow">
              <ShieldCheck className="w-4 h-4" />
              <span>Strict NDA & Data Confidentiality Protocol Applied</span>
            </div>
          </div>

          {/* Quick Context & Support */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs font-black uppercase text-foreground/50 tracking-wider block">
              Core Offer
            </span>
            <ul className="space-y-2 text-xs font-mono text-foreground/80">
              <li>ADS RESCUE SESSION — ₹2,499</li>
              <li>Google Ads + Meta Ads Audit</li>
              <li>60-Minute Screen-Share Diagnostic</li>
              <li>Prioritized Fix Action Plan</li>
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-xs font-black uppercase text-foreground/50 tracking-wider block">
              Direct Contact
            </span>
            <div className="flex flex-col gap-2 text-xs font-mono text-foreground/80">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-yellow transition-colors flex items-center gap-1"
              >
                WhatsApp Strategy Desk <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-yellow transition-colors flex items-center gap-1"
              >
                LinkedIn Studio Page <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-yellow transition-colors flex items-center gap-1"
              >
                Instagram (@thebrandmaniacs) <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-foreground/50">
          <p>© {new Date().getFullYear()} The Brand Maniacs. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Refund & Cancellation Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
