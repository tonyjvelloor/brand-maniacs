"use client";

import Image from "next/image";
import Link from "next/link";
import { trackCTAClick } from "@/lib/tracking";
import { ShieldCheck, ArrowRight } from "lucide-react";

interface AdsRescueHeaderProps {
  onOpenCheckout?: () => void;
}

export function AdsRescueHeader({ onOpenCheckout }: AdsRescueHeaderProps) {
  const handleCTAClick = () => {
    trackCTAClick("sticky_header_cta", "Get Your Ads Diagnosed — ₹2,499");
    if (onOpenCheckout) {
      onOpenCheckout();
    } else {
      const el = document.getElementById("offer");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#0E0E0E]/95 backdrop-blur-md border-b-2 border-foreground/15 text-foreground transition-all">
      {/* Top Qualification & Value Alert Bar */}
      <div className="bg-accent-yellow text-black px-3 py-1.5 text-center text-[11px] sm:text-xs font-mono font-black uppercase tracking-wider flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-accent-red animate-pulse" />
        <span>For businesses spending ₹25,000+/mo on Google or Meta Ads</span>
        <span className="hidden md:inline text-black/60">·</span>
        <span className="hidden md:inline">
          Normally <del className="text-black/60">₹7,500</del> · Launch Offer: <strong className="bg-black text-accent-yellow px-1.5 py-0.5">₹2,499</strong>
        </span>
      </div>

      {/* Main Header Bar */}
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Brand & Badge */}
        <div className="flex items-center gap-3">
          <Link href="/" className="group flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
            <span className="font-heading font-black text-xl sm:text-2xl tracking-tighter text-foreground">
              THE BRAND MANIACS
            </span>
          </Link>
          <span className="hidden sm:inline-block border border-accent-yellow/40 bg-accent-yellow/10 text-accent-yellow text-[10px] font-mono font-bold px-2 py-0.5 uppercase tracking-widest">
            ADS RESCUE™
          </span>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleCTAClick}
            className="bg-accent-yellow text-black hover:bg-white font-heading font-black uppercase text-xs sm:text-sm px-4 sm:px-6 py-2.5 tracking-wider transition-all hover:shadow-[4px_4px_0_0_#F0F0F0] active:translate-x-0.5 active:translate-y-0.5 flex items-center gap-2 cursor-pointer border-2 border-black"
          >
            <span>Get Your Ads Diagnosed — ₹2,499</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
