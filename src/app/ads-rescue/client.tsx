"use client";

import { useState, useEffect } from "react";
import { AdsRescueHeader } from "@/components/ads-rescue/AdsRescueHeader";
import { AdsRescueHero } from "@/components/ads-rescue/AdsRescueHero";
import { ProblemRecognition } from "@/components/ads-rescue/ProblemRecognition";
import { DiagnosticGrid } from "@/components/ads-rescue/DiagnosticGrid";
import { ExampleHealthScore } from "@/components/ads-rescue/ExampleHealthScore";
import { InteractiveScorecardCalculator } from "@/components/ads-rescue/InteractiveScorecardCalculator";
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
      {/* Distraction-Free Header with Sticky CTA */}
      <AdsRescueHeader onOpenCheckout={openCheckout} />

      {/* 1. HERO — Before you spend another ₹10,000 on ads + Leaking budget simulation */}
      <AdsRescueHero onOpenCheckout={openCheckout} />

      {/* 2. PROBLEM RECOGNITION — 4 Patterns of Failure */}
      <ProblemRecognition />

      {/* 3. THE 5-POINT AD SPEND HEALTH CHECK — Attract, Convince, Convert, Track, Scale */}
      <DiagnosticGrid />

      {/* 4. EXAMPLE AD SPEND HEALTH SCORE — Signature Visual Proof Output */}
      <ExampleHealthScore onOpenCheckout={openCheckout} />

      {/* 5. HOW HEALTHY ARE YOUR ADS? — 5-Question Quick Estimator */}
      <InteractiveScorecardCalculator onOpenCheckout={openCheckout} />

      {/* 6. HOW THE DIAGNOSIS WORKS — The 4-Step Protocol */}
      <HowItWorks />

      {/* 6. WHY THIS IS NOT A SALES PITCH — Anti-Agency Radical Transparency */}
      <AntiAgency />

      {/* 7. WHO THIS IS FOR vs NOT FOR — Split Screen Qualification Filter */}
      <QualificationSplit onOpenCheckout={openCheckout} />

      {/* 8. WHAT YOU ACTUALLY WALK AWAY WITH & ₹2,499 LAUNCH OFFER */}
      <OfferCard onOpenCheckout={openCheckout} />

      {/* 9. FAQ — 6 Objections Crusher + WhatsApp Desk */}
      <FaqAccordion onOpenCheckout={openCheckout} />

      {/* 10. Minimalist Brand Maniacs Footer */}
      <AdsRescueFooter />

      {/* 11. Razorpay / Sandbox Checkout Modal */}
      <RazorpayCheckoutModal
        isOpen={isCheckoutOpen}
        onClose={closeCheckout}
      />
    </div>
  );
}
