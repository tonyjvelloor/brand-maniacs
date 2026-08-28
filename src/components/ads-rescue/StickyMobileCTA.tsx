"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { trackCTAClick } from "@/lib/tracking";

interface StickyMobileCTAProps {
  onOpenCheckout: () => void;
}

export function StickyMobileCTA({ onOpenCheckout }: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (400px)
      if (window.scrollY > 420) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    trackCTAClick("sticky_header_cta", "Mobile Sticky Bar: Check My Ads — ₹2,499");
    onOpenCheckout();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-[#0E0E0E]/95 backdrop-blur-md border-t-2 border-accent-yellow p-3 sm:hidden shadow-[0_-8px_20px_rgba(0,0,0,0.8)]"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] font-mono font-bold uppercase text-foreground/80">
                  Ad Health Check
                </span>
              </div>
              <div className="font-heading font-black text-lg text-accent-yellow tracking-tight leading-none">
                ₹2,499 <span className="text-[10px] font-mono text-foreground/40 line-through">₹7,500</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleClick}
              className="bg-accent-yellow text-black font-heading font-black uppercase text-xs px-5 py-3 border-2 border-black shadow-[3px_3px_0_0_#F0F0F0] active:translate-y-0.5 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>CHECK MY ADS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
