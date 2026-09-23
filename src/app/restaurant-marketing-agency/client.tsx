"use client";

import { ArrowRight, Check, MapPin, Search, Utensils, Users, Star } from "lucide-react";
import Link from "next/link";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function RestaurantClient() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-accent-yellow selection:text-black font-sans">
      <main>
        {/* 1. HERO */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b-2 border-foreground">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-red rounded-full blur-[120px] opacity-10 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl">
              <span className="inline-block border-2 border-foreground font-black text-xs md:text-sm uppercase tracking-widest px-3 py-1 mb-8 bg-accent-red text-white shadow-[2px_2px_0_0_#000]">
                Restaurant Revenue Engine
              </span>
              
              <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9] text-foreground mb-8">
                Restaurant Marketing That <span className="text-accent-yellow underline decoration-8 underline-offset-8">Fills Tables</span> — Not Just Instagram Feeds.
              </h1>
              
              <p className="text-xl md:text-2xl font-bold text-foreground opacity-80 leading-relaxed mb-10 max-w-3xl">
                A beautiful Instagram isn't enough to pack your restaurant. We build end-to-end local discovery engines that turn "near me" searches into reservations and walk-ins.
              </p>

              <Link 
                href="/restaurant-visibility-audit"
                className="inline-flex justify-center items-center gap-2 bg-foreground text-background border-2 border-foreground font-black text-sm md:text-base uppercase tracking-widest px-8 py-5 hover:bg-accent-yellow hover:text-black transition-colors shadow-[4px_4px_0_0_#000] group"
              >
                Get Your Free Restaurant Visibility Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* 2. THE REVENUE ENGINE */}
        <section className="py-24 border-b-2 border-foreground bg-[#111] text-white overflow-hidden">
          <div className="container mx-auto px-4 max-w-6xl text-center relative z-10">
            <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-16">
              The Restaurant Revenue Engine
            </h2>
            
            <div className="bg-black text-white p-8 md:p-12 border-4 border-foreground shadow-[8px_8px_0_0_#FFE600] text-left max-w-4xl mx-auto">
              <div className="flex flex-col gap-3 font-mono font-bold text-sm md:text-base">
                {[
                  "Local Discovery (SEO)",
                  "Google Maps Dominance",
                  "Social Intent & Ads",
                  "Compelling Offer / Menu UX",
                  "Reservation / WhatsApp Booking",
                  "Dining Experience (Visit)",
                  "Automated 5-Star Review Generation",
                  "Loyalty & Repeat Visit"
                ].map((step, idx, arr) => (
                  <div key={idx} className="flex flex-col">
                    <div className={`${idx === 1 ? 'bg-accent-red scale-105 shadow-[2px_2px_0_0_#FFF] z-10' : 'bg-foreground/10'} p-4 border border-foreground flex items-center gap-4`}>
                      <span className="w-8 h-8 bg-white text-black flex items-center justify-center shrink-0">{idx + 1}</span>
                      {step}
                    </div>
                    {idx < arr.length - 1 && <div className="flex justify-center"><ArrowRight className="w-5 h-5 rotate-90 opacity-50 my-2" /></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. CORE SERVICES */}
        <section className="py-24 border-b-2 border-foreground bg-[#F5F5F5] text-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-16 text-center">
              Solving What Owners Actually Care About
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "More Covers", desc: "Driving consistent footfall through local search and targeted social ads." },
                { title: "Google Maps Visibility", desc: "If you don't rank in the top 3 on Maps, you are losing diners to competitors." },
                { title: "Local SEO", desc: "Capturing 'best italian near me' and high-intent dining queries." },
                { title: "Review Management", desc: "Automating 5-star reviews to build unshakeable local authority." },
                { title: "Event & Private Dining", desc: "Lead generation funnels for high-ticket corporate events and parties." },
                { title: "New-Restaurant Launches", desc: "Building hype, pre-bookings, and opening-week lines out the door." },
                { title: "Website / Menu Conversion", desc: "Mobile-first menus that make people hungry and drive direct bookings." },
                { title: "Repeat Customers", desc: "Loyalty loops and WhatsApp remarketing to bring diners back." },
                { title: "Paid Acquisition", desc: "Meta Ads designed for footfall, not just aesthetic engagement." }
              ].map((item, i) => (
                <div key={i} className="bg-white border-2 border-black p-6 hover:-translate-y-1 transition-transform shadow-[4px_4px_0_0_#000]">
                  <h3 className="font-heading font-black uppercase text-lg mb-3 flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent-red" />
                    {item.title}
                  </h3>
                  <p className="font-bold opacity-80 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CTA */}
        <section className="py-24 border-b-2 border-foreground bg-accent-yellow text-black text-center">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-8">
              Stop Competing on Instagram. Start Competing on Revenue.
            </h2>
            <Link 
              href="/restaurant-visibility-audit"
              className="inline-flex justify-center items-center gap-2 bg-black text-white border-2 border-black font-black text-sm md:text-base uppercase tracking-widest px-8 py-5 hover:bg-transparent hover:text-black transition-colors shadow-[4px_4px_0_0_#000]"
            >
              Get Your Free Restaurant Visibility Audit
            </Link>
          </div>
        </section>

        {/* CROSS LINK */}
        <section className="py-12 bg-foreground text-background text-center">
          <div className="container mx-auto px-4">
            <p className="font-bold text-lg">
              Launching a new restaurant? <Link href="/website-development" className="text-accent-red underline underline-offset-4">See how we build conversion-ready restaurant websites.</Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
