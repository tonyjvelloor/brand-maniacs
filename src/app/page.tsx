import { Hero } from "@/components/sections/Hero";
import { TheProblem } from "@/components/sections/TheProblem";
import { Infrastructure } from "@/components/sections/Infrastructure";
import { Proof } from "@/components/sections/Proof";
import { EngagementModels } from "@/components/sections/EngagementModels";

export default function Home() {
  return (
    <>
      <Hero />
      <TheProblem />
      <Infrastructure />
      <Proof />
      <EngagementModels />
    </>
  );
}
