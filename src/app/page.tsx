import { Hero } from "@/components/sections/Hero";
import { TheEnemy } from "@/components/sections/TheEnemy";
import { OperatingSystem } from "@/components/sections/OperatingSystem";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { GrowthEngines } from "@/components/sections/GrowthEngines";
import { Process } from "@/components/sections/Process";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      {/* 1. Hero: "Build Brands People Can't Ignore" */}
      <Hero />

      {/* 2. The Enemy: "Marketing Has Become Noise" */}
      <TheEnemy />

      {/* 3. The Maniac Method™ — Our Operating System */}
      <OperatingSystem />

      {/* 4. Case Studies — Transformations, Not Campaigns */}
      <CaseStudies />

      {/* 5. Growth Engines — Packaged Services */}
      <GrowthEngines />

      {/* 6. Process — How We Work */}
      <Process />

      {/* 7. Final CTA */}
      <FinalCTA />
    </>
  );
}
