"use client";

import { motion } from "framer-motion";
import { 
  Target, 
  Megaphone, 
  MousePointerClick, 
  BarChart2, 
  Coins, 
  ArrowRight
} from "lucide-react";

const PILLARS_RIBBON = [
  {
    number: "01",
    name: "ATTRACT",
    question: "Are you reaching the right people?",
    description: "We check your targeting, audience quality, search intent and traffic relevance.",
    icon: Target,
    bgCircle: "bg-[#FFE600] text-black",
    borderActive: "border-black",
  },
  {
    number: "02",
    name: "CONVINCE",
    question: "Do your ads give people a reason to act?",
    description: "We review your message, creative, offer and how well they connect with buyers.",
    icon: Megaphone,
    bgCircle: "bg-[#E11D48] text-white",
    borderActive: "border-black",
  },
  {
    number: "03",
    name: "CONVERT",
    question: "What happens after they click?",
    description: "We analyse your landing page, forms, mobile journey and conversion friction.",
    icon: MousePointerClick,
    bgCircle: "bg-[#2563EB] text-white",
    borderActive: "border-black",
  },
  {
    number: "04",
    name: "TRACK",
    question: "Do you know what's actually working?",
    description: "We check your tracking, pixel, events and whether conversion data is accurate.",
    icon: BarChart2,
    bgCircle: "bg-[#059669] text-white",
    borderActive: "border-black",
  },
  {
    number: "05",
    name: "SCALE",
    question: "Is it safe to spend more money?",
    description: "We evaluate your budget allocation, creative testing and operational scalability.",
    icon: Coins,
    bgCircle: "bg-[#EA580C] text-white",
    borderActive: "border-black",
  },
];

export function DiagnosticGrid() {
  return (
    <section className="py-14 md:py-20 bg-[#F5F4EE] text-[#111111] border-b-2 border-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center space-y-3 mb-12 md:mb-16">
          <span className="inline-block font-mono text-xs font-black uppercase tracking-widest text-[#111111]/70 bg-black/5 px-3 py-1 border border-black/15">
            THE ADS RESCUE METHOD
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tighter text-[#111111] leading-tight">
            We don't guess. <br className="hidden sm:block" />
            <span className="text-[#111111]">We diagnose the system.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#111111]/75 max-w-xl mx-auto font-medium">
            Your advertising is evaluated across 5 key areas to find what's working, what's not, and what to fix.
          </p>
        </div>

        {/* 5-Pillar Horizontal Ribbon Grid (From Mockup) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {PILLARS_RIBBON.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white border-2 border-black p-5 sm:p-6 flex flex-col justify-between shadow-[4px_4px_0_0_#000000] hover:shadow-[6px_6px_0_0_#000000] hover:-translate-y-0.5 transition-all"
            >
              <div className="space-y-3">
                {/* Circular Color Icon Badge */}
                <div className={`w-12 h-12 rounded-full ${pillar.bgCircle} border-2 border-black flex items-center justify-center shadow-[2px_2px_0_0_#000]`}>
                  <pillar.icon className="w-5 h-5" />
                </div>

                {/* Pillar Number & Title */}
                <div>
                  <span className="font-heading font-black text-base uppercase text-[#111111] block">
                    {pillar.number}. {pillar.name}
                  </span>
                  <p className="font-heading font-black text-sm text-[#111111] uppercase tracking-tight mt-0.5">
                    {pillar.question}
                  </p>
                </div>

                {/* Plain-English Description */}
                <p className="font-sans text-xs text-[#111111]/75 leading-relaxed font-medium">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
