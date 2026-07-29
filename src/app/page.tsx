import { Hero } from "@/components/sections/Hero";
import { TheBrokenModel } from "@/components/sections/TheBrokenModel";
import { MeetTheManiacs } from "@/components/sections/MeetTheManiacs";
import { OurSystem } from "@/components/sections/OurSystem";
import { ResultsShowcase } from "@/components/sections/ResultsShowcase";
import { Solutions } from "@/components/sections/Solutions";
import { Insights } from "@/components/sections/Insights";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { IntentionallySmall } from "@/components/sections/IntentionallySmall";
import { Process } from "@/components/sections/Process";
import { ProjectEstimatorTeaser } from "@/components/sections/ProjectEstimatorTeaser";
import { FinalCTA } from "@/components/sections/FinalCTA";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Brand Maniacs | AI-Powered Creative Growth Studio — Pune, India",
  description: "We combine human strategy, AI-powered production (AIProdGen), and growth experiments to build brands people can't ignore. Studio for ambitious D2C, SaaS & ecom brands.",
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

      {/* 7. Why Choose Us */}
      <WhyChooseUs />

      {/* 8. Intentionally Small — Proof + positioning */}
      <IntentionallySmall />

      {/* 9. Insights */}
      <Insights />

      {/* 8. Process — How we work */}
      <Process />

      {/* 10. Start Your Project Teaser */}
      <ProjectEstimatorTeaser />

      {/* 9. Final CTA */}
      <FinalCTA />
    </>
  );
}
