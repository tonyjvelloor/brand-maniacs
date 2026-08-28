"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, ShieldAlert, ArrowRight, HelpCircle } from "lucide-react";
import { trackCTAClick } from "@/lib/tracking";

interface ExitIntentModalProps {
  onOpenCheckout: () => void;
}

export function ExitIntentModal({ onOpenCheckout }: ExitIntentModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Only on desktop viewport
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !hasShown) {
        // Check if user already saw it in this session
        const seen = sessionStorage.getItem("bm_exit_intent_seen");
        if (!seen) {
          setIsOpen(true);
          setHasShown(true);
          sessionStorage.setItem("bm_exit_intent_seen", "true");
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const handleClaimCheckout = () => {
    trackCTAClick("exit_intent", "Exit Intent: Get My Ads Checked");
    setIsOpen(false);
    onOpenCheckout();
  };

  const handleWhatsApp = () => {
    trackCTAClick("exit_intent", "Exit Intent: WhatsApp Lead");
    window.open(
      "https://wa.me/919496660000?text=Hi%20Tony,%20I%20was%20looking%20at%20the%20Ads%20Rescue%20Session.%20Can%20you%20take%20a%20quick%20look%20at%20my%20ad%20account%20setup?",
      "_blank"
    );
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-[#141414] text-foreground border-4 border-accent-yellow p-6 sm:p-8 shadow-[12px_12px_0_0_#FFE600] z-10 space-y-5"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-7 h-7 bg-[#222] border border-foreground/20 hover:bg-accent-red hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-accent-yellow/20 text-accent-yellow border border-accent-yellow/40 px-2.5 py-0.5 text-xs font-mono font-bold uppercase">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Before You Spend Another ₹10,000</span>
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-white leading-tight">
                Not sure if your ads are leaking?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-foreground/80 leading-relaxed font-medium">
                If you are spending ₹25,000+/month on ads, fixing just one bad audience setting or broken tracking tag will save you multiple times the ₹2,499 diagnostic fee.
              </p>
            </div>

            {/* 2 Primary Options */}
            <div className="space-y-2 pt-1">
              <button
                type="button"
                onClick={handleClaimCheckout}
                className="w-full bg-accent-yellow text-black hover:bg-white font-heading font-black uppercase text-sm py-3.5 px-6 border-2 border-black shadow-[3px_3px_0_0_#F0F0F0] flex items-center justify-center gap-2 cursor-pointer transition-all hover:-translate-y-0.5"
              >
                <span>Book Risk-Free Ad Check — ₹2,499 →</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full bg-[#202020] text-foreground hover:bg-[#282828] font-mono font-bold uppercase text-xs py-3 px-6 border border-foreground/20 flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-green-400" />
                <span>Ask Quick Question On WhatsApp</span>
              </button>
            </div>

            {/* Subtle dismiss */}
            <div className="text-center pt-1">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-[11px] font-mono text-foreground/40 hover:text-foreground/70 underline cursor-pointer"
              >
                No thanks, I'll continue running ads as-is
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
