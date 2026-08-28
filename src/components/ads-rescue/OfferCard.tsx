"use client";

import { motion } from "framer-motion";
import { 
  Gauge, 
  AlertTriangle, 
  FileText, 
  Users, 
  CheckSquare, 
  ArrowRight, 
  Lock, 
  Clock, 
  ShieldCheck 
} from "lucide-react";
import { trackCTAClick } from "@/lib/tracking";

interface OfferCardProps {
  onOpenCheckout: () => void;
}

const OUTCOMES_ROW = [
  {
    number: "01",
    title: "Your Ad Spend Health Score",
    description: "A simple snapshot of where your advertising is strong — and where it's leaking.",
    icon: Gauge,
  },
  {
    number: "02",
    title: "Top 3 Budget Leaks",
    description: "The biggest issues currently limiting your performance and burning cash.",
    icon: AlertTriangle,
  },
  {
    number: "03",
    title: "Your Rescue Report",
    description: "A clear breakdown of what we found, why it matters, and how to fix it.",
    icon: FileText,
  },
  {
    number: "04",
    title: "60-Minute Strategy Session",
    description: "We walk you through the findings in plain English and answer all your questions.",
    icon: Users,
  },
  {
    number: "05",
    title: "Your Next Steps",
    description: "What to stop · What to fix · What to test · What to scale.",
    icon: CheckSquare,
  },
];

export function OfferCard({ onOpenCheckout }: OfferCardProps) {
  const handleCTAClick = () => {
    trackCTAClick("offer_card_cta", "GET YOUR ADS CHECKED — ₹2,499");
    onOpenCheckout();
  };

  return (
    <section id="offer" className="py-16 md:py-24 bg-[#0A0A0A] text-foreground border-b-2 border-foreground/20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Main Combined Card Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 border-4 border-black shadow-[10px_10px_0_0_#FFE600] overflow-hidden">
          
          {/* Left Column: Here's What You'll Get (Light Editorial Tray) */}
          <div className="lg:col-span-8 bg-[#FAF9F5] text-[#111111] p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-widest text-[#111111]/70 block mb-1">
                THE COMPLETE DELIVERABLE PACKAGE
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-4xl uppercase tracking-tight text-[#111111]">
                HERE'S WHAT YOU'LL GET
              </h2>
            </div>

            {/* 5 Outcomes Row Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
              {OUTCOMES_ROW.map((item) => (
                <div 
                  key={item.number} 
                  className="bg-white border-2 border-black p-4 flex flex-col justify-between space-y-2 shadow-[2px_2px_0_0_#000]"
                >
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-full bg-accent-yellow border border-black flex items-center justify-center font-mono font-bold text-xs">
                      <item.icon className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-black/50 block">
                      {item.number}
                    </span>
                    <strong className="font-heading font-black text-xs uppercase text-black block leading-tight">
                      {item.title}
                    </strong>
                  </div>
                  <p className="font-sans text-[11px] text-black/75 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust Footer inside left card */}
            <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-mono text-black/70">
              <span className="flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span>100% Read-Only Safety · Zero Credential Sharing</span>
              </span>
              <span className="text-black/50">
                Delivered 1-on-1 via Google Meet
              </span>
            </div>
          </div>

          {/* Right Column: High-Converting Pricing Tile (Dark Contrast) */}
          <div className="lg:col-span-4 bg-[#141414] text-white p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-5 border-t-2 lg:border-t-0 lg:border-l-2 border-black relative">
            
            <div className="space-y-1">
              <div className="text-foreground/50 font-mono text-xs line-through">
                STANDARD PRICE: ₹7,500
              </div>
              <div className="bg-accent-yellow text-black px-3 py-1 font-mono text-[10px] font-black uppercase tracking-wider inline-block border border-black mb-1">
                FOUNDING LAUNCH PRICE
              </div>
              <div className="font-heading font-black text-5xl sm:text-6xl text-accent-yellow tracking-tight">
                ₹2,499
              </div>
              <p className="font-mono text-xs text-foreground/80 font-bold">
                One-time diagnostic. No monthly commitment.
              </p>
            </div>

            {/* Main CTA */}
            <button
              type="button"
              onClick={handleCTAClick}
              className="w-full bg-accent-yellow text-black hover:bg-white border-2 border-black font-heading font-black uppercase text-sm sm:text-base py-4 px-6 tracking-wider shadow-[4px_4px_0_0_#F0F0F0] hover:shadow-[6px_6px_0_0_#F0F0F0] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>GET YOUR ADS CHECKED →</span>
            </button>

            {/* Microcopy & Security */}
            <div className="space-y-1.5 text-[10px] font-mono text-foreground/60">
              <div className="flex items-center justify-center gap-1.5 text-foreground/75">
                <Lock className="w-3.5 h-3.5 text-green-400" />
                <span>Instant Razorpay checkout (UPI / Cards)</span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-accent-yellow font-bold">
                <Clock className="w-3.5 h-3.5" />
                <span>Immediate calendar booking access</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
