"use client";

import { motion } from "framer-motion";
import { AlertCircle, HelpCircle, ArrowUpRight, TrendingDown } from "lucide-react";

const PROBLEMS = [
  {
    number: "01",
    primary: "Getting leads.",
    secondary: "But not customers.",
    detail: "Inquiries keep coming into your CRM, but they never pick up the phone, are outside your service area, or say they 'never asked for info'.",
    icon: HelpCircle,
  },
  {
    number: "02",
    primary: "Spending more.",
    secondary: "But getting worse results.",
    detail: "Every time you increase daily budget by 30%, cost per acquisition doubles while conversion volume plateaus.",
    icon: TrendingDown,
  },
  {
    number: "03",
    primary: "Your agency says:",
    secondary: "“Let's increase the budget.”",
    detail: "Instead of auditing audience overlap, search terms, or landing page drop-offs, they treat your money as trial-and-error fuel.",
    icon: AlertCircle,
  },
  {
    number: "04",
    primary: "You have the data.",
    secondary: "But no idea what's actually driving revenue.",
    detail: "Ad Manager shows 100 conversions and high ROAS, but your bank account balance and actual sales don't match the reports.",
    icon: ArrowUpRight,
  },
];

export function ProblemRecognition() {
  return (
    <section className="py-16 md:py-24 bg-[#F5F3EE] text-[#111111] border-b-2 border-black">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-14 md:mb-18">
          <span className="inline-block font-mono text-xs font-black uppercase tracking-widest text-[#111111]/70 bg-black/5 px-3 py-1 border border-black/15">
            // 01 — THE PROBLEM RECOGNITION
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter leading-[1.05] text-[#111111]">
            Your ads are running. <br className="hidden sm:block" />
            <span className="underline decoration-accent-red decoration-4 md:decoration-6 underline-offset-4">
              But are they actually working?
            </span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#111111]/75 max-w-2xl mx-auto font-medium">
            If you recognize any of these four patterns, your budget isn't failing because your market is small. It's failing because the system has structural leaks.
          </p>
        </div>

        {/* 4 Large Statements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {PROBLEMS.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border-2 border-black p-6 sm:p-8 flex flex-col justify-between shadow-[6px_6px_0_0_#000000] hover:shadow-[10px_10px_0_0_#000000] hover:-translate-y-1 hover:-translate-x-1 transition-all group"
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between border-b-2 border-black/10 pb-4 mb-6">
                  <span className="font-mono font-black text-2xl sm:text-3xl text-accent-red tracking-tight">
                    {item.number}
                  </span>
                  <item.icon className="w-6 h-6 text-black/40 group-hover:text-accent-red transition-colors" />
                </div>

                {/* Primary & Secondary Statement */}
                <div className="space-y-1.5 mb-4">
                  <p className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight text-[#111111]">
                    {item.primary}
                  </p>
                  <p className="font-heading font-black text-2xl sm:text-3xl uppercase tracking-tight text-accent-red">
                    {item.secondary}
                  </p>
                </div>

                {/* Elaboration */}
                <p className="font-sans text-sm sm:text-base text-[#111111]/75 font-medium leading-relaxed">
                  {item.detail}
                </p>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-xs font-mono font-bold text-black/50 uppercase">
                <span>Diagnostic Area #{item.number}</span>
                <span className="text-accent-red font-black">Requires Audit →</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 md:mt-16 max-w-4xl mx-auto bg-black text-white p-6 sm:p-8 border-2 border-black text-center space-y-3 shadow-[8px_8px_0_0_#FFE600]"
        >
          <span className="font-mono text-xs font-black uppercase tracking-widest text-accent-yellow block">
            Core Realization
          </span>
          <p className="font-heading font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white leading-tight">
            More ad spend isn't always the answer.
          </p>
          <p className="font-sans text-sm sm:text-base text-white/80 max-w-2xl mx-auto">
            Pouring more budget into an uncalibrated campaign only burns your capital faster. You have to locate the leak before turning up the pressure.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
