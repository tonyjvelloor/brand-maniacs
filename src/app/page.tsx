import { Hero } from "@/components/sections/Hero";
import { FounderSection } from "@/components/sections/FounderSection";
import { WorkShowcase } from "@/components/sections/WorkShowcase";
import { GrowthSystems } from "@/components/sections/GrowthSystems";
import { IntentionallySmall } from "@/components/sections/IntentionallySmall";
import { Process } from "@/components/sections/Process";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      {/* 1. Hero — "The internet doesn't need more content" */}
      <Hero />

      {/* 2. Founder — Tony Joseph + operating beliefs */}
      <FounderSection />

      {/* 3. Work — Challenge → Thinking → Execution → Learning */}
      <WorkShowcase />

      {/* 4. Systems — Brand Foundation, Attention, Conversion, Growth Experiments */}
      <GrowthSystems />

      {/* 5. Intentionally Small — Proof + positioning */}
      <IntentionallySmall />

      {/* 6. Process — How we work */}
      <Process />

      {/* 7. Final CTA */}
      <FinalCTA />
    </>
  );
}
