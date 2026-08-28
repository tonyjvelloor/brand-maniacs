"use client";

import { useState, useMemo } from "react";
import { 
  calculateOverallHealthScore, 
  getScorecardClassification, 
  generateImplications 
} from "@/lib/scorecard";
import { 
  Calculator, 
  ArrowRight, 
  HelpCircle,
  ShieldAlert 
} from "lucide-react";
import { trackCTAClick } from "@/lib/tracking";

interface InteractiveScorecardCalculatorProps {
  onOpenCheckout?: () => void;
}

const QUESTIONS = [
  {
    key: "attract" as const,
    number: "01",
    question: "Are you reaching the right people?",
    leftLabel: "Not sure / Irrelevant clicks",
    rightLabel: "Yes, genuine buyers",
  },
  {
    key: "convince" as const,
    number: "02",
    question: "Do your ads make people take action?",
    leftLabel: "Rarely / Low response",
    rightLabel: "Often / High engagement",
  },
  {
    key: "convert" as const,
    number: "03",
    question: "Are website visitors becoming customers?",
    leftLabel: "Not enough / High drop-off",
    rightLabel: "Consistently converting",
  },
  {
    key: "track" as const,
    number: "04",
    question: "Do you know which ads actually drive revenue?",
    leftLabel: "No idea / Blurry data",
    rightLabel: "Clearly tracked in CRM",
  },
  {
    key: "scale" as const,
    number: "05",
    question: "Are you confident spending more money right now?",
    leftLabel: "Not yet / Costs might spike",
    rightLabel: "Yes, ready to grow",
  },
];

export function InteractiveScorecardCalculator({ onOpenCheckout }: InteractiveScorecardCalculatorProps) {
  const [scores, setScores] = useState({
    attract: 5.0,
    convince: 5.0,
    convert: 4.0,
    track: 3.5,
    scale: 4.0,
  });

  const overallScore = useMemo(() => {
    return calculateOverallHealthScore(scores);
  }, [scores]);

  const classification = useMemo(() => {
    return getScorecardClassification(overallScore);
  }, [overallScore]);

  const implications = useMemo(() => {
    return generateImplications(scores);
  }, [scores]);

  const handleSliderChange = (pillar: keyof typeof scores, val: number) => {
    setScores((prev) => ({ ...prev, [pillar]: val }));
  };

  const handleCTAClick = () => {
    trackCTAClick("simulator_cta", "Check My Full Ad Health — ₹2,499");
    if (onOpenCheckout) {
      onOpenCheckout();
    } else {
      const el = document.getElementById("offer");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#0A0A0A] text-foreground border-b-2 border-foreground/20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12 md:mb-16">
          <span className="inline-block font-mono text-xs font-black uppercase tracking-widest text-accent-yellow bg-accent-yellow/10 border border-accent-yellow/30 px-3 py-1">
            QUICK ESTIMATOR
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tighter text-foreground leading-[1.05]">
            How Healthy Are Your Ads?
          </h2>
          <p className="font-sans text-base sm:text-lg text-foreground/80 max-w-xl mx-auto font-medium">
            Answer 5 simple questions to see an estimated health check of your current advertising.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sliders Column */}
          <div className="lg:col-span-7 bg-[#141414] border-2 border-foreground/20 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between border-b border-foreground/15 pb-3">
              <span className="text-xs font-mono font-bold uppercase text-foreground/80">
                5-Question Self-Check
              </span>
              <span className="text-[10px] font-mono text-foreground/40 uppercase">
                Slide to evaluate
              </span>
            </div>

            {QUESTIONS.map((q) => (
              <div key={q.key} className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 font-bold">
                    <span className="text-accent-yellow">{q.number}</span>
                    <span className="text-foreground uppercase">{q.question}</span>
                  </div>
                  <span className="font-black text-accent-yellow">{scores[q.key].toFixed(1)} / 10</span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.5"
                  value={scores[q.key]}
                  onChange={(e) => handleSliderChange(q.key, parseFloat(e.target.value))}
                  className="w-full accent-accent-yellow cursor-pointer h-2 bg-[#252525]"
                />

                <div className="flex items-center justify-between text-[10px] font-mono text-foreground/50">
                  <span>{q.leftLabel}</span>
                  <span>{q.rightLabel}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Health Meter Box */}
            <div className="bg-[#141414] border-4 border-accent-yellow p-6 text-center space-y-4 shadow-[8px_8px_0_0_#FFE600]">
              <span className="font-mono text-xs font-black uppercase tracking-widest text-foreground/70 block">
                Estimated Ad Health
              </span>

              <div className="font-heading font-black text-6xl sm:text-7xl text-accent-yellow tracking-tight">
                {overallScore.toFixed(1)} <span className="text-xl sm:text-2xl text-foreground/40 font-mono">/ 10</span>
              </div>

              {/* Status Badge */}
              <div className={`p-2.5 border font-mono text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 ${classification.bgBadge}`}>
                <span>{classification.icon}</span>
                <span>{classification.title}</span>
              </div>

              <p className="font-sans text-xs sm:text-sm text-foreground/80 leading-relaxed font-medium">
                {classification.description}
              </p>

              <div className="bg-[#1C1C1C] p-3 border border-foreground/10 text-left text-xs font-mono space-y-1">
                <span className="text-[10px] text-accent-yellow font-black uppercase block">
                  Recommended First Step:
                </span>
                <p className="text-foreground/90 font-bold">
                  {classification.primaryDirective}
                </p>
              </div>
            </div>

            {/* Top Detected Issue */}
            {implications.length > 0 && (
              <div className="bg-[#181818] border-2 border-red-500/40 p-5 space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-red-400 font-bold uppercase">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Main Area to Investigate</span>
                </div>
                <p className="text-foreground/90 font-sans text-xs font-medium">
                  {implications[0].implication}
                </p>
                <div className="pt-1 text-accent-yellow">
                  Suggested Action: <strong>{implications[0].solution}</strong>
                </div>
              </div>
            )}

            {/* CTA */}
            <button
              type="button"
              onClick={handleCTAClick}
              className="w-full bg-accent-yellow text-black hover:bg-white font-heading font-black uppercase text-sm sm:text-base py-4 px-6 tracking-wider border-2 border-black shadow-[4px_4px_0_0_#F0F0F0] transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Your Official Ad Check — ₹2,499 →</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
