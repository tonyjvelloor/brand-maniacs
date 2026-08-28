"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/config";
import { trackCTAClick } from "@/lib/tracking";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What happens after I pay?",
    answer: "You are immediately redirected to our secure onboarding page to complete a 3-minute questionnaire about your business and ad setup. You'll also receive an instant calendar booking link to pick a convenient date & time for your 60-minute strategy session."
  },
  {
    question: "Do I need to run both Google and Meta Ads?",
    answer: "No. We analyse the platform you're currently using. Whether you run only Meta (Facebook/Instagram), only Google Ads (Search/Shopping/PMax/YouTube), or both, we tailor the diagnostic to your exact stack."
  },
  {
    question: "Do I need to give full access to my ad account?",
    answer: "No. We request only read-only / viewer level access so that our team can check all of the details. We never ask for admin credentials or billing control."
  },
  {
    question: "Will you manage my ads after the session?",
    answer: "Not automatically. The Ads Rescue Session is a standalone diagnostic engineered to give you clarity and an actionable roadmap without any retainer obligation."
  },
  {
    question: "What if I need help implementing the recommendations?",
    answer: "If we both agree Brand Maniacs is the right partner for execution, we can discuss implementation sprints or ongoing growth engineering separately after the diagnostic."
  },
  {
    question: "How long is the session?",
    answer: "Approximately 60 minutes. We jump straight into the technical findings, screen-share the exact leaks, and build your prioritized fix roadmap together."
  }
];

interface FaqAccordionProps {
  onOpenCheckout?: () => void;
}

export function FaqAccordion({ onOpenCheckout }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCTAClick = () => {
    trackCTAClick("faq_cta", "Book My Ads Rescue — ₹2,499");
    if (onOpenCheckout) {
      onOpenCheckout();
    } else {
      const el = document.getElementById("offer");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#F5F3EE] text-[#111111] border-b-2 border-black">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14 md:mb-18">
          <span className="inline-block font-mono text-xs font-black uppercase tracking-widest text-[#111111]/70 bg-black/5 px-3 py-1 border border-black/15">
            // 05 — FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-[#111111] leading-[1.05]">
            Frequently Asked <br className="hidden sm:block" />
            <span className="underline decoration-accent-red decoration-4 md:decoration-6 underline-offset-4">
              Questions.
            </span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#111111]/75 max-w-xl mx-auto font-medium">
            Clear answers to common questions about the Ads Rescue diagnostic.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border-2 border-black shadow-[4px_4px_0_0_#000000] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-black/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-black text-lg sm:text-xl uppercase tracking-tight text-[#111111]">
                    {faq.question}
                  </span>
                  <span className="w-8 h-8 bg-black text-accent-yellow flex items-center justify-center shrink-0 border border-black">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-black/10 font-sans text-sm sm:text-base text-[#111111]/80 leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="max-w-3xl mx-auto mt-12 bg-white border-2 border-black p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[6px_6px_0_0_#000000]">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading font-black text-xl uppercase tracking-tight text-[#111111]">
              Ready to stop leaking ad budget?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#111111]/70">
              Get your 60-minute diagnostic session booked today for just ₹2,499 (Standard Price: ₹7,500).
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleCTAClick}
              className="bg-accent-yellow text-black hover:bg-black hover:text-white font-heading font-black uppercase text-xs sm:text-sm py-3 px-6 border-2 border-black transition-colors whitespace-nowrap cursor-pointer shadow-[2px_2px_0_0_#000]"
            >
              Get Diagnosed — ₹2,499 →
            </button>
            <a
              href={`${WHATSAPP_URL}&text=${encodeURIComponent("Hi! I have a question about the Ads Rescue Session.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black hover:bg-green-500 hover:text-white font-heading font-black uppercase text-xs sm:text-sm py-3 px-4 border-2 border-black transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-green-600 group-hover:text-white" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
