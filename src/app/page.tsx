import { Hero } from "@/components/sections/Hero";
import { TheBrokenModel } from "@/components/sections/TheBrokenModel";
import { MeetTheManiacs } from "@/components/sections/MeetTheManiacs";
import { OurSystem } from "@/components/sections/OurSystem";
import { ResultsShowcase } from "@/components/sections/ResultsShowcase";
import { Solutions } from "@/components/sections/Solutions";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { IntentionallySmall } from "@/components/sections/IntentionallySmall";
import { Process } from "@/components/sections/Process";
import { ProjectEstimatorTeaser } from "@/components/sections/ProjectEstimatorTeaser";
import { ReviewBoostTeaser } from "@/components/sections/ReviewBoostTeaser";
import { FinalCTA } from "@/components/sections/FinalCTA";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Brand Maniacs | Top Growth Marketing Agency & Technology Studio",
  description: "The premier B2B SaaS and Healthcare Growth Marketing Agency. We combine human strategy, AI-powered production, and digital infrastructure to build scalable growth systems.",
};

export default function Home() {
  return (
    <>
      {/* 1. Hero — Creative Technology Studio positioning */}
      <Hero />

      {/* 2. The Broken Model — Traditional vs Maniac Method */}
      <TheBrokenModel />

      {/* 3. Methodology — Discover, Design, Build, Grow */}
      <OurSystem />

      {/* 4. Meet The Maniacs (Founder/Team) */}
      <MeetTheManiacs />

      {/* 5. Results (Case Studies) — Headline Metric → Before → Process → After */}
      <ResultsShowcase />

      {/* 6. Capabilities / Solutions */}
      <Solutions />

      {/* 7. TBM Reviews Software Teaser */}
      <ReviewBoostTeaser />

      {/* 8. Why Choose Us */}
      <WhyChooseUs />

      {/* 9. Intentionally Small — Proof + positioning */}
      <IntentionallySmall />

      {/* 10. Process — How we work */}
      <Process />

      {/* 11. Start Your Project Teaser */}
      <ProjectEstimatorTeaser />

      {/* 12. Final CTA */}
      <FinalCTA />
    </>
  );
}
