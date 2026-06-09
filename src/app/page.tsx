import { Hero } from "@/components/sections/Hero";
import { TheBrokenModel } from "@/components/sections/TheBrokenModel";
import { FounderSection } from "@/components/sections/FounderSection";
import { TheManiacMethod } from "@/components/sections/TheManiacMethod";
import { WorkShowcase } from "@/components/sections/WorkShowcase";
import { GrowthSystems } from "@/components/sections/GrowthSystems";
import { IntentionallySmall } from "@/components/sections/IntentionallySmall";
import { Process } from "@/components/sections/Process";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      {/* 1. Hero — Creative Technology Studio positioning */}
      <Hero />

      {/* 2. The Broken Model — Traditional vs Maniac Method */}
      <TheBrokenModel />

      {/* 3. The Maniac Method — IP Breakdown */}
      <TheManiacMethod />

      {/* 4. Founder — Tony Joseph + operating beliefs */}
      <FounderSection />

      {/* 5. Work — Problem → System Built → Outcome/Learning */}
      <WorkShowcase />

      {/* 6. Systems — Brand Foundation, Attention, Conversion, Growth Experiments */}
      <GrowthSystems />

      {/* 7. Intentionally Small — Proof + positioning */}
      <IntentionallySmall />

      {/* 8. Process — How we work */}
      <Process />

      {/* 9. Final CTA */}
      <FinalCTA />
    </>
  );
}
