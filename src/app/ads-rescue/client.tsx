"use client";

import { useState, useEffect } from "react";
import { AdsRescueHeader } from "@/components/ads-rescue/AdsRescueHeader";
import { AdsRescueHero } from "@/components/ads-rescue/AdsRescueHero";
import { ProblemRecognition } from "@/components/ads-rescue/ProblemRecognition";
import { ScorecardFramework } from "@/components/ads-rescue/ScorecardFramework";
import { InteractiveScorecardCalculator } from "@/components/ads-rescue/InteractiveScorecardCalculator";
import { DiagnosticGrid } from "@/components/ads-rescue/DiagnosticGrid";
import { HowItWorks } from "@/components/ads-rescue/HowItWorks";
import { AntiAgency } from "@/components/ads-rescue/AntiAgency";
import { QualificationSplit } from "@/components/ads-rescue/QualificationSplit";
import { OfferCard } from "@/components/ads-rescue/OfferCard";
import { FaqAccordion } from "@/components/ads-rescue/FaqAccordion";
import { AdsRescueFooter } from "@/components/ads-rescue/AdsRescueFooter";
import { RazorpayCheckoutModal } from "@/components/ads-rescue/RazorpayCheckoutModal";
import { trackPageView } from "@/lib/tracking";

export function AdsRescueLandingClient() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    trackPageView("Ads Rescue Session Landing");
  }, []);

  const openCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-foreground flex flex-col font-mono selection:bg-accent-yellow selection:text-black">
      {/* 1. Distraction-Free Header with Sticky CTA */}
      <AdsRescueHeader onOpenCheckout={openCheckout} />

      {/* 2. Section 1 — Hero with Leaking Budget Visual & Strict Qualification */}
      <AdsRescueHero onOpenCheckout={openCheckout} />

      {/* 3. Section 2 — Problem Recognition (4 Patterns of Failure) */}
      <ProblemRecognition />

      {/* 4. Section 3 — The 25-Point Scorecard Methodology & STOP/FIX/TEST/SCALE Matrix */}
      <ScorecardFramework />

      {/* 5. Section 4 — Interactive Health Score Simulator */}
      <InteractiveScorecardCalculator onOpenCheckout={openCheckout} />

      {/* 6. Section 5 — The 6 Forensic Investigation Areas */}
      <DiagnosticGrid />

      {/* 7. Section 6 — How It Works (The 4-Step Protocol) */}
      <HowItWorks />

      {/* 8. Section 7 — The Anti-Agency Section (Radical Transparency & Fit) */}
      <AntiAgency />

      {/* 9. Section 8 — Who It's For vs NOT For (Split Screen) */}
      <QualificationSplit onOpenCheckout={openCheckout} />

      {/* 10. Section 9 — The Offer Card (7 Deliverables + ₹9,000 Tangible Value Stack) */}
      <OfferCard onOpenCheckout={openCheckout} />

      {/* 11. Section 10 — FAQ (6 Objections Crusher) */}
      <FaqAccordion onOpenCheckout={openCheckout} />

      {/* 12. Distraction-Free Brand Maniacs Footer */}
      <AdsRescueFooter />

      {/* 13. Seamless Razorpay / Sandbox Checkout Modal */}
      <RazorpayCheckoutModal
        isOpen={isCheckoutOpen}
        onClose={closeCheckout}
      />
    </div>
  );
}
