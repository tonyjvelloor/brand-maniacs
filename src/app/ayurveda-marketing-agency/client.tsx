"use client";

import { ArrowRight, Check, Search, Smartphone, TrendingUp, Users, Activity } from "lucide-react";
import Link from "next/link";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function AyurvedaClient() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-accent-yellow selection:text-black font-sans">
      <main>
        {/* 1. HERO */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b-2 border-foreground">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-yellow rounded-full blur-[120px] opacity-10 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <span className="inline-block border-2 border-foreground font-black text-xs md:text-sm uppercase tracking-widest px-3 py-1 mb-8 bg-accent-yellow text-black shadow-[2px_2px_0_0_#000]">
                Ayurveda Patient Acquisition OS
              </span>
              
              <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9] text-foreground mb-8">
                Digital Marketing for Ayurveda Clinics That Turns Search Demand Into <span className="text-accent-red underline decoration-8 underline-offset-8">Patients.</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-bold text-foreground opacity-80 leading-relaxed mb-10 max-w-2xl">
                A patient-acquisition system built around Search, Local SEO, Ads, WhatsApp and conversion tracking.
              </p>

              <Link 
                href="/ayurveda-patient-acquisition-audit"
                className="inline-flex justify-center items-center gap-2 bg-foreground text-background border-2 border-foreground font-black text-sm md:text-base uppercase tracking-widest px-8 py-5 hover:bg-accent-red hover:text-white transition-colors shadow-[4px_4px_0_0_#000] group"
              >
                Get Your Free Ayurveda Patient Acquisition Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* 2. WHY AYURVEDA MARKETING IS DIFFERENT */}
        <section className="py-24 border-b-2 border-foreground bg-[#F5F5F5] text-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-16 text-center">
              Why Ayurveda Marketing Is <span className="text-accent-red">Different</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "High-Intent Local Search", desc: "Patients search 'ayurvedic doctor near me' when they are in pain, not browsing.", icon: Search },
                { title: "Trust-Heavy Decision", desc: "Unlike retail, healthcare requires immense credibility. Your digital presence must reflect clinical excellence.", icon: Users },
                { title: "Location Dependency", desc: "Visibility on Google Maps dictates footfall. If you aren't in the local 3-pack, you don't exist.", icon: Smartphone },
                { title: "Long Consideration", desc: "For chronic conditions (Panchakarma, Arthritis), patients research for months before booking.", icon: Activity }
              ].map((item, i) => (
                <div key={i} className="bg-white border-2 border-black p-6 shadow-[4px_4px_0_0_#000] flex flex-col items-start gap-4 hover:-translate-y-1 transition-transform">
                  <div className="bg-accent-yellow p-3 border-2 border-black"><item.icon className="w-6 h-6" /></div>
                  <h3 className="font-heading font-black uppercase text-xl">{item.title}</h3>
                  <p className="font-bold opacity-80 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. THE ENGINE */}
        <section className="py-24 border-b-2 border-foreground bg-accent-blue text-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
            <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-16">
              The Ayurveda Patient Acquisition Engine
            </h2>
            
            <div className="bg-white text-black p-8 md:p-12 border-4 border-black shadow-[8px_8px_0_0_#000] text-left max-w-3xl mx-auto">
              <div className="flex flex-col gap-2 font-mono font-bold text-sm md:text-base">
                {[
                  "Search (Google/Maps)",
                  "High-Converting Landing Page",
                  "Call / WhatsApp",
                  "Appointment Booked",
                  "Patient Show-up",
                  "Treatment Delivery",
                  "5-Star Review Generation",
                  "Repeat / Referral"
                ].map((step, idx, arr) => (
                  <div key={idx} className="flex flex-col">
                    <div className={`${idx === 1 ? 'bg-accent-yellow scale-105 shadow-[2px_2px_0_0_#000] z-10' : 'bg-[#F5F5F5]'} p-3 border border-black flex items-center gap-4`}>
                      <span className="w-8 h-8 bg-black text-white flex items-center justify-center shrink-0">{idx + 1}</span>
                      {step}
                    </div>
                    {idx < arr.length - 1 && <div className="flex justify-center"><ArrowRight className="w-5 h-5 rotate-90 opacity-50 my-1" /></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. KARMANYA CASE STUDY */}
        <section className="py-24 border-b-2 border-foreground bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 bg-accent-red text-white">
              FLAGSHIP CASE STUDY
            </span>
            <h2 className="font-heading font-black text-5xl md:text-7xl uppercase tracking-tighter mb-8 leading-tight">
              Karmanya Ayurveda
            </h2>
            
            <div className="grid md:grid-cols-12 gap-12 mt-12">
              <div className="md:col-span-8 space-y-8">
                <p className="text-xl font-bold opacity-90 leading-relaxed border-l-4 border-accent-red pl-6">
                  A traditional Ayurveda clinic with deep clinical expertise but struggling with visibility. They were competing in a crowded market where trust is the only currency that matters.
                </p>
                
                <h3 className="font-heading font-black text-2xl uppercase mt-8">The Intervention</h3>
                <ul className="space-y-4 font-bold opacity-80 list-disc pl-6">
                  <li><strong>Search Campaign Architecture:</strong> Rebuilt Google Ads to target high-intent symptom searches (e.g., "ayurvedic treatment for joint pain pune"), not generic branding.</li>
                  <li><strong>Local SEO Strategy:</strong> Overhauled their Google Business Profile, optimizing for local "near me" map pack dominance.</li>
                  <li><strong>Landing-Page Architecture:</strong> Built dedicated condition-specific landing pages that educated patients before asking them to book.</li>
                  <li><strong>Tracking & Analytics:</strong> Mapped exact conversion paths from first click to WhatsApp inquiry.</li>
                </ul>
              </div>
              
              <div className="md:col-span-4 space-y-6">
                <div className="bg-[#F5F5F5] text-black border-2 border-black p-6 shadow-[4px_4px_0_0_#000]">
                  <h4 className="font-heading font-black uppercase text-sm mb-4 border-b-2 border-black pb-2">Verifiable Impact</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-black text-accent-red">+120%</div>
                      <div className="text-xs font-bold uppercase tracking-widest opacity-70">Patient Volume Growth</div>
                      <div className="text-xs font-mono mt-1 opacity-50">Measured over 6 months post-launch</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-accent-blue">-40%</div>
                      <div className="text-xs font-bold uppercase tracking-widest opacity-70">Cost Per Consultation</div>
                      <div className="text-xs font-mono mt-1 opacity-50">Due to highly targeted Search Ads</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHAT WE ACTUALLY BUILD */}
        <section className="py-24 border-b-2 border-foreground bg-[#111] text-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-16 text-center">
              What We Actually Build
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Google Ads Architecture",
                "Local SEO & Maps",
                "Google Business Profile",
                "AEO/Content Strategy",
                "Landing Page Systems",
                "Conversion Tracking",
                "WhatsApp/Call Acquisition",
                "Review Engine (ReviewBoost)",
                "Reporting Dashboards"
              ].map((item, i) => (
                <div key={i} className="border-2 border-white/20 p-6 flex items-center gap-4 hover:border-accent-yellow transition-colors">
                  <Check className="w-5 h-5 text-accent-yellow" />
                  <span className="font-bold uppercase tracking-wide text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. PATIENT ACQUISITION ECONOMICS */}
        <section className="py-24 border-b-2 border-foreground bg-accent-red text-white text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-8">
              Patient Acquisition Economics
            </h2>
            <p className="text-xl font-bold opacity-90 leading-relaxed mb-12">
              Most agencies charge you a retainer to post on Instagram. We build assets that mathematically lower your Patient Acquisition Cost (PAC) while increasing the Lifetime Value (LTV) through retention and reviews.
            </p>
            <Link 
              href="/ayurveda-patient-acquisition-audit"
              className="inline-flex justify-center items-center gap-2 bg-accent-yellow text-black border-2 border-black font-black text-sm md:text-base uppercase tracking-widest px-8 py-5 hover:bg-white transition-colors shadow-[4px_4px_0_0_#000]"
            >
              Get Your Free Patient Acquisition Audit
            </Link>
          </div>
        </section>

        {/* CROSS LINK */}
        <section className="py-12 bg-foreground text-background text-center">
          <div className="container mx-auto px-4">
            <p className="font-bold text-lg">
              Need a website that can actually convert your Google traffic? <Link href="/website-development" className="text-accent-yellow underline underline-offset-4">See our SEO/AEO-ready website development approach.</Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
