"use client";

import { useState, useEffect } from "react";
import { AdsRescueHeader } from "@/components/ads-rescue/AdsRescueHeader";
import { AdsRescueHero } from "@/components/ads-rescue/AdsRescueHero";
import { ProblemRecognition } from "@/components/ads-rescue/ProblemRecognition";
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

      {/* 2. Section 1 — Hero with Leaking Budget Visual & Qualification */}
      <AdsRescueHero onOpenCheckout={openCheckout} />

      {/* 3. Section 2 — Problem Recognition (4 Statements) */}
      <ProblemRecognition />

      {/* 4. Section 3 — The Mechanism: The Ads Rescue Method (2x3 Grid) */}
      <DiagnosticGrid />

      {/* 5. Section 4 — How It Works (4 Steps) */}
      <HowItWorks />

      {/* 6. Section 5 — The Anti-Agency Section (Radical Transparency & Fit) */}
      <AntiAgency />

      {/* 7. Section 6 — Who It's For vs NOT For (Split Screen) */}
      <QualificationSplit onOpenCheckout={openCheckout} />

      {/* 8. Section 7 — The Offer Card (Conversion Engine) */}
      <OfferCard onOpenCheckout={openCheckout} />

      {/* 9. Section 8 — FAQ (6 Objections Crusher) */}
      <FaqAccordion onOpenCheckout={openCheckout} />

      {/* 10. Distraction-Free Brand Maniacs Footer */}
      <AdsRescueFooter />

      {/* 11. Seamless Razorpay / Sandbox Checkout Modal */}
      <RazorpayCheckoutModal
        isOpen={isCheckoutOpen}
        onClose={closeCheckout}
      />
    </div>
  );
}
