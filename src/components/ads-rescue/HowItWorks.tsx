"use client";

import { motion } from "framer-motion";
import { FileText, Search, Video, Compass, ArrowDown, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    number: "01",
    title: "You share the context.",
    description: "After payment, you complete a short questionnaire about your business and advertising goals.",
    detail: "Takes under 3 minutes. Share your target CAC/CPL, platforms used, and grant read-only access or upload reports.",
    icon: FileText,
  },
  {
    number: "02",
    title: "We investigate.",
    description: "We review the relevant Google and/or Meta advertising setup thoroughly before the call.",
    detail: "We inspect your tracking, match types, campaign setups, audience overlap, and historical spend logs.",
    icon: Search,
  },
  {
    number: "03",
    title: "We diagnose.",
    description: "You join a focused strategy session where we walk through what we found.",
    detail: "A 1-on-1, 60-minute deep-dive screen share call with a senior performance engineer. No fluff.",
    icon: Video,
  },
  {
    number: "04",
    title: "You leave with clarity.",
    description: "You get a prioritized action roadmap detailing exactly what to execute.",
    detail: "Clear, sequential directives: Fix this first. Then fix this. Don't spend money on this yet.",
    icon: Compass,
    actionBox: [
      { label: "Fix this first", desc: "Highest leverage leak stopping conversions immediately.", color: "text-red-500 bg-red-500/10 border-red-500/30" },
      { label: "Then fix this", desc: "Optimization to scale profitability safely.", color: "text-amber-500 bg-amber-500/10 border-amber-500/30" },
      { label: "Don't spend money on this yet", desc: "Premature tests that will waste your budget.", color: "text-blue-400 bg-blue-500/10 border-blue-500/30" },
    ]
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-[#F5F3EE] text-[#111111] border-b-2 border-black">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 md:mb-20">
          <span className="inline-block font-mono text-xs font-black uppercase tracking-widest text-[#111111]/70 bg-black/5 px-3 py-1 border border-black/15">
            // 02 — THE 4-STEP PROTOCOL
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-[#111111] leading-[1.05]">
            Here's what happens next.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#111111]/75 max-w-xl mx-auto font-medium">
            A frictionless, transparent process designed to give you instant clarity without wasting weeks.
          </p>
        </div>

        {/* Steps Flow */}
        <div className="max-w-4xl mx-auto space-y-8 relative">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border-2 border-black p-6 sm:p-8 shadow-[6px_6px_0_0_#000000] relative"
            >
              <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                {/* Step Number Badge */}
                <div className="w-14 h-14 bg-black text-accent-yellow flex items-center justify-center font-mono font-black text-2xl border-2 border-black shrink-0 shadow-[3px_3px_0_0_#FFE600]">
                  {step.number}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#111111]">
                      {step.title}
                    </h3>
                    <step.icon className="w-5 h-5 text-black/40" />
                  </div>

                  <p className="font-sans text-base sm:text-lg text-[#111111] font-bold">
                    {step.description}
                  </p>

                  <p className="font-mono text-xs sm:text-sm text-[#111111]/70 leading-relaxed">
                    {step.detail}
                  </p>

                  {/* Step 4 Special Action Box */}
                  {step.actionBox && (
                    <div className="mt-4 pt-4 border-t border-black/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {step.actionBox.map((box, i) => (
                        <div key={i} className={`p-3 border ${box.color}`}>
                          <span className="font-mono text-xs font-black uppercase tracking-wider block mb-1">
                            {box.label}
                          </span>
                          <p className="font-sans text-xs text-[#111111]/80 font-medium">
                            {box.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Connecting Down Arrow for steps 1, 2, 3 */}
              {index < STEPS.length - 1 && (
                <div className="hidden md:flex justify-center -bottom-7 left-1/2 -translate-x-1/2 absolute z-10">
                  <div className="w-8 h-8 bg-accent-yellow border-2 border-black rounded-full flex items-center justify-center shadow-[2px_2px_0_0_#000]">
                    <ArrowDown className="w-4 h-4 text-black font-black" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
