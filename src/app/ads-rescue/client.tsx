"use client";

import { useState, useEffect } from "react";
import { AdsRescueHeader } from "@/components/ads-rescue/AdsRescueHeader";
import { AdsRescueHero } from "@/components/ads-rescue/AdsRescueHero";
import { ProofBarTicker } from "@/components/ads-rescue/ProofBarTicker";
import { ProblemRecognition } from "@/components/ads-rescue/ProblemRecognition";
import { DiagnosticGrid } from "@/components/ads-rescue/DiagnosticGrid";
import { ExampleHealthScore } from "@/components/ads-rescue/ExampleHealthScore";
import { InteractiveScorecardCalculator } from "@/components/ads-rescue/InteractiveScorecardCalculator";
import { HowItWorks } from "@/components/ads-rescue/HowItWorks";
import { IroncladGuarantee } from "@/components/ads-rescue/IroncladGuarantee";
import { AntiAgency } from "@/components/ads-rescue/AntiAgency";
import { QualificationSplit } from "@/components/ads-rescue/QualificationSplit";
import { OfferCard } from "@/components/ads-rescue/OfferCard";
import { FaqAccordion } from "@/components/ads-rescue/FaqAccordion";
import { AdsRescueFooter } from "@/components/ads-rescue/AdsRescueFooter";
import { StickyMobileCTA } from "@/components/ads-rescue/StickyMobileCTA";
import { ExitIntentModal } from "@/components/ads-rescue/ExitIntentModal";
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
    <div className="min-h-screen bg-[#0A0A0A] text-foreground flex flex-col font-mono selection:bg-accent-yellow selection:text-black relative">
      {/* 1. Distraction-Free Header with Sticky CTA */}
      <AdsRescueHeader onOpenCheckout={openCheckout} />

      {/* 2. HERO — 2-Column High-Converting Split (Copy + Trust Badges + Founder Visual) */}
      <AdsRescueHero onOpenCheckout={openCheckout} />

      {/* 3. SOCIAL PROOF — Recent Fixes & Micro-Case Studies */}
      <ProofBarTicker />

      {/* 4. PROBLEM RECOGNITION — 4 Patterns of Ad Failure */}
      <ProblemRecognition />

      {/* 5. THE 5-POINT METHOD RIBBON — Attract, Convince, Convert, Track, Scale */}
      <DiagnosticGrid />

      {/* 6. SIGNATURE 3D EXAMPLE REPORT & HOW IT'S SCORED */}
      <ExampleHealthScore onOpenCheckout={openCheckout} />

      {/* 7. QUICK ESTIMATOR SIMULATOR — 5-Question Self-Check */}
      <InteractiveScorecardCalculator onOpenCheckout={openCheckout} />

      {/* 8. HOW THE DIAGNOSIS WORKS — The 4-Step Protocol */}
      <HowItWorks />

      {/* 9. ZERO-RISK GUARANTEE — Find a Major Leak or 100% Refund */}
      <IroncladGuarantee onOpenCheckout={openCheckout} />

      {/* 10. WHY THIS IS NOT A SALES PITCH — Radical Transparency */}
      <AntiAgency />

      {/* 11. WHO THIS IS FOR vs NOT FOR — Split Filter */}
      <QualificationSplit onOpenCheckout={openCheckout} />

      {/* 12. HERE'S WHAT YOU'LL GET TRAY & ₹2,499 LAUNCH OFFER */}
      <OfferCard onOpenCheckout={openCheckout} />

      {/* 13. FAQ & OBJECTIONS CRUSHER */}
      <FaqAccordion onOpenCheckout={openCheckout} />

      {/* 14. Minimalist Brand Maniacs Footer */}
      <AdsRescueFooter />

      {/* 15. High-Converting Mobile Bottom Sticky Bar */}
      <StickyMobileCTA onOpenCheckout={openCheckout} />

      {/* 16. Desktop Exit-Intent Recovery Modal */}
      <ExitIntentModal onOpenCheckout={openCheckout} />

      {/* 17. Razorpay / UPI Modal Checkout */}
      <RazorpayCheckoutModal
        isOpen={isCheckoutOpen}
        onClose={closeCheckout}
      />
    </div>
  );
}
