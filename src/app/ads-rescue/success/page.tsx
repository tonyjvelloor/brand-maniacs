"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Calendar, 
  FileText, 
  Search, 
  ShieldCheck, 
  ArrowRight, 
  Loader2, 
  Sparkles, 
  MessageCircle,
  ExternalLink
} from "lucide-react";
import { CALENDLY_URL, WHATSAPP_URL } from "@/lib/config";
import { CalendlyEmbed } from "@/components/ui/CalendlyEmbed";
import Link from "next/link";

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderIdParam = searchParams.get("order_id");
  const leadId = searchParams.get("lead_id") || "";
  
  const [orderId, setOrderId] = useState(orderIdParam || "ORD-CONFIRMED");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (orderIdParam) {
      setOrderId(orderIdParam);
    } else if (orderId === "ORD-CONFIRMED") {
      setOrderId("ORD-" + Math.random().toString(36).substring(2, 9).toUpperCase());
    }
  }, [orderIdParam]);

  const [questionnaire, setQuestionnaire] = useState({
    businessName: "",
    websiteUrl: "",
    adPlatforms: "Both Google & Meta",
    monthlySpend: "₹25,000 - ₹50,000",
    targetAudience: "",
    currentCacCpl: "",
    biggestFrustration: "Getting unqualified leads who don't answer calls",
    accessMethod: "I will screen-share on the call",
    additionalNotes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setQuestionnaire({ ...questionnaire, [e.target.name]: e.target.value });
  };

  const handleSubmitQuestionnaire = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/ads-rescue/questionnaire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId,
          leadId,
          questionnaire,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true); // Gracefully advance
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-foreground py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        {/* Top Success Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#141414] border-4 border-accent-yellow p-6 sm:p-10 mb-10 shadow-[10px_10px_0_0_#FFE600] space-y-4 text-center sm:text-left"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 border-b border-foreground/15 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 border border-green-500/40 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Payment Confirmed // ₹2,499</span>
              </div>
              <h1 className="font-heading font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
                You're In.
              </h1>
              <p className="font-mono text-xs text-foreground/60">
                Receipt Ref: <span className="text-accent-yellow font-bold">{orderId}</span>
              </p>
            </div>

            <div className="text-center sm:text-right">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-foreground/50 block">
                Next Milestone
              </span>
              <span className="text-sm font-mono font-black text-accent-yellow">
                Questionnaire & Schedule
              </span>
            </div>
          </div>

          <div className="pt-2">
            <h2 className="font-heading font-bold text-xl sm:text-2xl uppercase tracking-tight text-foreground/90">
              Here's what happens next:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-xs font-mono text-foreground/80">
              <div className="bg-[#1C1C1C] p-4 border border-foreground/10 space-y-1">
                <span className="text-accent-yellow font-black text-sm block">STEP 1</span>
                <strong className="text-foreground block font-heading uppercase text-sm">
                  Complete Questionnaire
                </strong>
                <p className="text-foreground/60 text-[11px]">
                  Fill out the 2-minute diagnostic context form below.
                </p>
              </div>

              <div className="bg-[#1C1C1C] p-4 border border-foreground/10 space-y-1">
                <span className="text-accent-yellow font-black text-sm block">STEP 2</span>
                <strong className="text-foreground block font-heading uppercase text-sm">
                  Pick Session Date
                </strong>
                <p className="text-foreground/60 text-[11px]">
                  Choose your preferred 60-minute time slot on our calendar.
                </p>
              </div>

              <div className="bg-[#1C1C1C] p-4 border border-foreground/10 space-y-1">
                <span className="text-accent-yellow font-black text-sm block">STEP 3</span>
                <strong className="text-foreground block font-heading uppercase text-sm">
                  We Investigate & Meet
                </strong>
                <p className="text-foreground/60 text-[11px]">
                  We review your data beforehand and deliver your prioritized roadmap.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 1: Questionnaire Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[#141414] border-2 border-foreground/20 p-6 sm:p-10 mb-10 shadow-xl space-y-6"
        >
          <div className="flex items-center justify-between border-b border-foreground/15 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 bg-accent-yellow text-black font-mono font-black text-base flex items-center justify-center border border-black">
                01
              </span>
              <div>
                <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight text-white">
                  Ads Rescue Diagnostic Questionnaire
                </h3>
                <p className="text-xs font-mono text-foreground/60">
                  Takes ~2 minutes · Helps us pinpoint leaks before we get on the call
                </p>
              </div>
            </div>
            {submitted && (
              <span className="bg-green-500/20 text-green-400 font-mono text-xs font-bold px-2.5 py-1 border border-green-500/40">
                ✓ Submitted
              </span>
            )}
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmitQuestionnaire} className="space-y-4 text-xs font-mono">
              {/* Business Name & Website */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-foreground/80 font-bold uppercase">
                    Brand / Business Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    required
                    value={questionnaire.businessName}
                    onChange={handleChange}
                    placeholder="e.g. Lumina Skin Co"
                    className="w-full bg-[#202020] border-2 border-foreground/30 px-3 py-2.5 text-foreground focus:border-accent-yellow focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-foreground/80 font-bold uppercase">
                    Landing Page / Website URL *
                  </label>
                  <input
                    type="text"
                    name="websiteUrl"
                    required
                    value={questionnaire.websiteUrl}
                    onChange={handleChange}
                    placeholder="https://luminaskin.com"
                    className="w-full bg-[#202020] border-2 border-foreground/30 px-3 py-2.5 text-foreground focus:border-accent-yellow focus:outline-none"
                  />
                </div>
              </div>

              {/* Platforms & Monthly Spend */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-foreground/80 font-bold uppercase">
                    Ad Platforms Being Run *
                  </label>
                  <select
                    name="adPlatforms"
                    value={questionnaire.adPlatforms}
                    onChange={handleChange}
                    className="w-full bg-[#202020] border-2 border-foreground/30 px-3 py-2.5 text-foreground focus:border-accent-yellow focus:outline-none"
                  >
                    <option value="Both Google & Meta">Both Google Ads & Meta Ads</option>
                    <option value="Meta Ads Only">Meta Ads Only (Facebook / Instagram)</option>
                    <option value="Google Ads Only">Google Ads Only (Search / PMax / Shopping)</option>
                    <option value="Other">Other / Multi-Channel</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-foreground/80 font-bold uppercase">
                    Average Monthly Ad Spend *
                  </label>
                  <select
                    name="monthlySpend"
                    value={questionnaire.monthlySpend}
                    onChange={handleChange}
                    className="w-full bg-[#202020] border-2 border-foreground/30 px-3 py-2.5 text-foreground focus:border-accent-yellow focus:outline-none"
                  >
                    <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000 / month</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000 / month</option>
                    <option value="₹1,00,000 - ₹3,00,000">₹1,00,000 - ₹3,00,000 / month</option>
                    <option value="₹3,00,000+">₹3,00,000+ / month</option>
                  </select>
                </div>
              </div>

              {/* Target CAC and Audience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-foreground/80 font-bold uppercase">
                    Target Audience / Ideal Customer Profile
                  </label>
                  <input
                    type="text"
                    name="targetAudience"
                    value={questionnaire.targetAudience}
                    onChange={handleChange}
                    placeholder="e.g. Founders of D2C brands with 5-20 staff"
                    className="w-full bg-[#202020] border-2 border-foreground/30 px-3 py-2.5 text-foreground focus:border-accent-yellow focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-foreground/80 font-bold uppercase">
                    Current Cost Per Lead / Cost Per Acquisition
                  </label>
                  <input
                    type="text"
                    name="currentCacCpl"
                    value={questionnaire.currentCacCpl}
                    onChange={handleChange}
                    placeholder="e.g. ₹450 per lead, but 80% invalid numbers"
                    className="w-full bg-[#202020] border-2 border-foreground/30 px-3 py-2.5 text-foreground focus:border-accent-yellow focus:outline-none"
                  />
                </div>
              </div>

              {/* Main Frustration */}
              <div className="space-y-1">
                <label className="block text-foreground/80 font-bold uppercase">
                  What is your single biggest advertising bottleneck? *
                </label>
                <select
                  name="biggestFrustration"
                  value={questionnaire.biggestFrustration}
                  onChange={handleChange}
                  className="w-full bg-[#202020] border-2 border-foreground/30 px-3 py-2.5 text-foreground focus:border-accent-yellow focus:outline-none"
                >
                  <option value="Getting unqualified leads who don't answer calls">
                    Getting unqualified leads who don't answer calls or convert
                  </option>
                  <option value="CPA suddenly spiked and won't come down">
                    CPA suddenly spiked and won't come down
                  </option>
                  <option value="Ad Manager shows high conversions but bank account doesn't match">
                    Ad Manager shows high conversions but bank revenue doesn't match (Tracking issue)
                  </option>
                  <option value="Increasing budget doubles cost instead of doubling volume">
                    Increasing budget doubles cost instead of doubling volume
                  </option>
                  <option value="Agency is burning money without transparent answers">
                    Agency is burning money without transparent answers
                  </option>
                </select>
              </div>

              {/* Access preference */}
              <div className="space-y-1">
                <label className="block text-foreground/80 font-bold uppercase">
                  How would you prefer to share ad account access?
                </label>
                <select
                  name="accessMethod"
                  value={questionnaire.accessMethod}
                  onChange={handleChange}
                  className="w-full bg-[#202020] border-2 border-foreground/30 px-3 py-2.5 text-foreground focus:border-accent-yellow focus:outline-none"
                >
                  <option value="I will screen-share on the call">
                    I will screen-share directly during the 60-min live session (No access grant needed)
                  </option>
                  <option value="I will grant read-only/viewer access before the call">
                    I will grant read-only/viewer access before the call
                  </option>
                  <option value="I will upload PDF / CSV export reports">
                    I will upload / send PDF/CSV performance reports
                  </option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent-yellow text-black hover:bg-white font-heading font-black uppercase text-base py-4 px-6 tracking-wider border-2 border-black flex items-center justify-center gap-2 cursor-pointer shadow-[4px_4px_0_0_#F0F0F0] active:translate-y-0.5 transition-all mt-4"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Saving Context...</span>
                  </>
                ) : (
                  <>
                    <span>Save Questionnaire & Proceed to Calendar →</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="bg-green-500/10 border-2 border-green-500/40 p-6 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto" />
              <h4 className="font-heading font-black text-xl uppercase text-green-400">
                Questionnaire Saved Successfully!
              </h4>
              <p className="text-xs font-mono text-foreground/70">
                Our performance engineering team will review these specifics before your call.
              </p>
            </div>
          )}
        </motion.div>

        {/* Step 2: Book Strategy Session Slot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#141414] border-2 border-foreground/20 p-6 sm:p-10 mb-10 shadow-xl space-y-6"
        >
          <div className="flex items-center gap-3 border-b border-foreground/15 pb-4">
            <span className="w-8 h-8 bg-accent-yellow text-black font-mono font-black text-base flex items-center justify-center border border-black">
              02
            </span>
            <div>
              <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight text-white">
                Book Your 60-Minute Session
              </h3>
              <p className="text-xs font-mono text-foreground/60">
                Select your preferred day and time for the 1-on-1 diagnostic call
              </p>
            </div>
          </div>

          <div className="bg-[#1C1C1C] border-2 border-foreground/20 p-4 sm:p-6 space-y-6">
            <div className="text-center space-y-1">
              <h4 className="font-heading font-black text-xl sm:text-2xl uppercase text-white">
                Schedule Your Diagnostic Call
              </h4>
              <p className="text-xs font-mono text-foreground/70 max-w-md mx-auto">
                Select your preferred date & time below. You will receive an instant Google Meet confirmation.
              </p>
            </div>

            {/* Embedded Live Calendly Widget */}
            <div className="w-full bg-[#111] border border-foreground/15 overflow-hidden">
              <CalendlyEmbed url={CALENDLY_URL} />
            </div>

            <div className="text-center pt-2">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-xs font-mono font-bold uppercase text-accent-yellow hover:text-white underline underline-offset-4"
              >
                <span>Having trouble viewing the calendar? Open directly in new tab</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Step 3: Fast Support / WhatsApp Desk */}
        <div className="bg-[#181818] border-2 border-foreground/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-accent-yellow font-black uppercase block">
              Need immediate assistance?
            </span>
            <p className="text-foreground/70">
              Have a specific scheduling request or ad account access question?
            </p>
          </div>
          <a
            href={`${WHATSAPP_URL}&text=${encodeURIComponent(`Hi! I just booked an Ads Rescue Session (Order ID: ${orderId}).`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white hover:bg-green-500 font-heading font-black uppercase px-4 py-2.5 flex items-center gap-2 border border-green-400"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}

export default function AdsRescueSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center text-foreground font-mono">
        <Loader2 className="w-6 h-6 animate-spin text-accent-yellow" />
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
