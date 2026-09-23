"use client";

import { useState } from "react";
import { ArrowRight, ChevronRight, AlertCircle, Activity, Loader2, Utensils } from "lucide-react";

type Step = "intro" | "restaurant_info" | "visibility" | "conversion" | "contact" | "calculating" | "results";

export function RestaurantAuditClient() {
  const [step, setStep] = useState<Step>("intro");
  
  // Form State
  const [formData, setFormData] = useState({
    restaurantName: "",
    location: "",
    website: "",
    gmbRanking: "",
    rating: "",
    reservationSystem: "",
    runningAds: "",
    eventDining: "",
    biggestProblem: "",
    name: "",
    phone: "",
    email: ""
  });

  const [scores, setScores] = useState({
    maps: 0,
    reviews: 0,
    website: 0,
    reservation: 0,
    paid: 0,
    events: 0
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const trackStep = (stepName: string) => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "audit_step_view",
        audit_type: "restaurant",
        step_name: stepName
      });
    }
  };

  const handleStepChange = (newStep: Step) => {
    handleStepChange(newStep);
    trackStep(newStep);
  };

  const calculateScore = () => {
    handleStepChange("calculating");
    
    // Simulate calculation time
    setTimeout(() => {
      // Basic rules-based scoring MVP
      let newScores = {
        maps: 40,
        reviews: 50,
        website: 50,
        reservation: 30,
        paid: 30,
        events: 40
      };

      if (formData.gmbRanking === "Top 3") newScores.maps += 50;
      if (formData.gmbRanking === "Page 1 (Below top 3)") newScores.maps += 20;
      
      if (formData.rating === "4.5+") newScores.reviews += 40;
      if (formData.rating === "4.0 - 4.4") newScores.reviews += 15;
      
      if (formData.website !== "") newScores.website += 30;
      
      if (formData.reservationSystem === "Online System (Zomato/Dineout/Direct)") newScores.reservation += 60;
      if (formData.reservationSystem === "WhatsApp / Call Only") newScores.reservation += 20;
      
      if (formData.runningAds === "Yes") newScores.paid += 50;
      
      if (formData.eventDining === "Yes, actively promote it") newScores.events += 50;

      setScores(newScores);
      
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "generate_lead",
          audit_type: "restaurant",
          restaurant_name: formData.restaurantName
        });
      }

      handleStepChange("results");
    }, 2000);
  };

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-accent-yellow selection:text-black font-sans">
      <main className="container mx-auto px-4 py-20 max-w-3xl">
        
        {step === "intro" && (
          <div className="text-center mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="font-heading font-black text-4xl md:text-6xl uppercase tracking-tighter mb-6">
              Find Out Why Nearby Customers Are Choosing <span className="text-accent-yellow underline decoration-4">Competitors</span> Over You
            </h1>
            <p className="text-xl font-bold opacity-80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Get a 5-minute diagnostic assessment of your Google Maps presence, menu conversion, review velocity, and reservation journey.
            </p>
            <button 
              onClick={() => handleStepChange("restaurant_info")}
              className="inline-flex justify-center items-center gap-2 bg-foreground text-background border-2 border-foreground font-black text-lg uppercase tracking-widest px-10 py-6 hover:bg-accent-yellow hover:text-black transition-colors shadow-[6px_6px_0_0_#000]"
            >
              Start Visibility Audit
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm font-bold opacity-60 uppercase tracking-widest">
              <Utensils className="w-4 h-4" /> Designed for Fine Dining & QSR
            </div>
          </div>
        )}

        {step === "restaurant_info" && (
          <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0_0_#000] animate-in fade-in slide-in-from-right-8">
            <h2 className="font-heading font-black text-2xl uppercase mb-8 border-b-2 border-black pb-4">1. The Establishment</h2>
            <div className="space-y-6">
              <div>
                <label className="block font-black uppercase text-sm mb-2">Restaurant Name</label>
                <input type="text" value={formData.restaurantName} onChange={(e) => handleInputChange("restaurantName", e.target.value)} className="w-full border-2 border-black p-4 font-bold focus:outline-none focus:border-accent-yellow" placeholder="e.g. The Grand Bistro" />
              </div>
              <div>
                <label className="block font-black uppercase text-sm mb-2">City / Neighborhood</label>
                <input type="text" value={formData.location} onChange={(e) => handleInputChange("location", e.target.value)} className="w-full border-2 border-black p-4 font-bold focus:outline-none focus:border-accent-yellow" placeholder="e.g. Koregaon Park, Pune" />
              </div>
              <div>
                <label className="block font-black uppercase text-sm mb-2">Website / Menu Link (Optional)</label>
                <input type="url" value={formData.website} onChange={(e) => handleInputChange("website", e.target.value)} className="w-full border-2 border-black p-4 font-bold focus:outline-none focus:border-accent-yellow" placeholder="https://" />
              </div>
              <div className="pt-6 flex justify-between">
                <button onClick={() => handleStepChange("intro")} className="font-bold opacity-60 hover:opacity-100">Back</button>
                <button onClick={() => handleStepChange("visibility")} className="bg-black text-white px-8 py-3 font-black uppercase tracking-widest hover:bg-accent-yellow hover:text-black flex items-center gap-2 transition-colors">Next <ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        )}

        {step === "visibility" && (
          <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0_0_#000] animate-in fade-in slide-in-from-right-8">
            <h2 className="font-heading font-black text-2xl uppercase mb-8 border-b-2 border-black pb-4">2. Local Dominance</h2>
            <div className="space-y-6">
              <div>
                <label className="block font-black uppercase text-sm mb-3">Where do you rank on Google Maps for "restaurants near me"?</label>
                <div className="flex flex-col gap-3">
                  {["Top 3", "Page 1 (Below top 3)", "Not on Page 1", "Not sure"].map(opt => (
                    <button key={opt} onClick={() => handleInputChange("gmbRanking", opt)} className={`border-2 border-black py-3 font-bold ${formData.gmbRanking === opt ? 'bg-accent-yellow text-black' : 'hover:bg-gray-100'}`}>{opt}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block font-black uppercase text-sm mb-3">What is your current Google Rating?</label>
                <div className="grid grid-cols-2 gap-4">
                  {["4.5+", "4.0 - 4.4", "Below 4.0", "New Listing"].map(opt => (
                    <button key={opt} onClick={() => handleInputChange("rating", opt)} className={`border-2 border-black py-3 font-bold ${formData.rating === opt ? 'bg-accent-yellow text-black' : 'hover:bg-gray-100'}`}>{opt}</button>
                  ))}
                </div>
              </div>
              <div className="pt-6 flex justify-between">
                <button onClick={() => handleStepChange("restaurant_info")} className="font-bold opacity-60 hover:opacity-100">Back</button>
                <button onClick={() => handleStepChange("conversion")} className="bg-black text-white px-8 py-3 font-black uppercase tracking-widest hover:bg-accent-yellow hover:text-black flex items-center gap-2 transition-colors">Next <ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        )}

        {step === "conversion" && (
          <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0_0_#000] animate-in fade-in slide-in-from-right-8">
            <h2 className="font-heading font-black text-2xl uppercase mb-8 border-b-2 border-black pb-4">3. Conversion Path</h2>
            <div className="space-y-6">
              <div>
                <label className="block font-black uppercase text-sm mb-3">How do customers book a table?</label>
                <div className="flex flex-col gap-3">
                  {["Online System (Zomato/Dineout/Direct)", "WhatsApp / Call Only", "Walk-ins Only"].map(opt => (
                    <button key={opt} onClick={() => handleInputChange("reservationSystem", opt)} className={`border-2 border-black py-3 font-bold ${formData.reservationSystem === opt ? 'bg-accent-yellow text-black' : 'hover:bg-gray-100'}`}>{opt}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block font-black uppercase text-sm mb-3">Are you running Paid Ads (Meta/Google) for footfall?</label>
                <div className="grid grid-cols-2 gap-4">
                  {["Yes", "No"].map(opt => (
                    <button key={opt} onClick={() => handleInputChange("runningAds", opt)} className={`border-2 border-black py-3 font-bold ${formData.runningAds === opt ? 'bg-accent-yellow text-black' : 'hover:bg-gray-100'}`}>{opt}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block font-black uppercase text-sm mb-3">Do you actively acquire Private Dining / Event Leads?</label>
                <div className="grid grid-cols-2 gap-4">
                  {["Yes, actively promote it", "No, just word of mouth"].map(opt => (
                    <button key={opt} onClick={() => handleInputChange("eventDining", opt)} className={`border-2 border-black py-3 font-bold ${formData.eventDining === opt ? 'bg-accent-yellow text-black' : 'hover:bg-gray-100'}`}>{opt}</button>
                  ))}
                </div>
              </div>
              <div className="pt-6 flex justify-between">
                <button onClick={() => handleStepChange("visibility")} className="font-bold opacity-60 hover:opacity-100">Back</button>
                <button onClick={() => handleStepChange("contact")} className="bg-black text-white px-8 py-3 font-black uppercase tracking-widest hover:bg-accent-yellow hover:text-black flex items-center gap-2 transition-colors">Next <ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        )}

        {step === "contact" && (
          <div className="bg-[#111] text-white border-4 border-accent-yellow p-8 md:p-12 shadow-[8px_8px_0_0_#FFE600] animate-in fade-in slide-in-from-right-8">
            <h2 className="font-heading font-black text-2xl uppercase mb-4 border-b-2 border-white/20 pb-4">Where should we send your Visibility Report?</h2>
            <p className="font-bold opacity-90 mb-8">Almost done. Enter your details to generate your restaurant visibility score.</p>
            <div className="space-y-6">
              <div>
                <label className="block font-black uppercase text-sm mb-2">Your Name</label>
                <input type="text" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} className="w-full border-2 border-accent-yellow p-4 font-bold bg-transparent text-white focus:outline-none focus:bg-white/5" />
              </div>
              <div>
                <label className="block font-black uppercase text-sm mb-2">WhatsApp Number</label>
                <input type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} className="w-full border-2 border-accent-yellow p-4 font-bold bg-transparent text-white focus:outline-none focus:bg-white/5" />
              </div>
              <div>
                <label className="block font-black uppercase text-sm mb-2">Work Email</label>
                <input type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} className="w-full border-2 border-accent-yellow p-4 font-bold bg-transparent text-white focus:outline-none focus:bg-white/5" />
              </div>
              <div className="pt-6 flex justify-between items-center">
                <button onClick={() => handleStepChange("conversion")} className="font-bold opacity-80 hover:opacity-100">Back</button>
                <button onClick={calculateScore} className="bg-accent-yellow text-black px-8 py-4 font-black uppercase tracking-widest hover:bg-white border-2 border-accent-yellow transition-colors flex items-center gap-2">
                  Generate Diagnostic <Activity className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {step === "calculating" && (
          <div className="text-center py-20 animate-in fade-in">
            <Loader2 className="w-12 h-12 animate-spin mx-auto mb-6 text-accent-yellow" />
            <h2 className="font-heading font-black text-3xl uppercase tracking-tighter mb-2">Analyzing Inputs...</h2>
            <p className="font-mono text-sm opacity-60">Evaluating local search footprint, map rankings, and conversion gaps.</p>
          </div>
        )}

        {step === "results" && (
          <div className="animate-in fade-in slide-in-from-bottom-8">
            <div className="text-center mb-12">
              <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-4 bg-accent-red text-white">
                Diagnostic Complete
              </span>
              <h1 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-4">
                Restaurant Visibility Score
              </h1>
              <p className="text-lg font-bold opacity-80 max-w-2xl mx-auto">
                Based on your inputs, here is a breakdown of your current restaurant acquisition engine.
              </p>
            </div>

            <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-6 md:p-10 mb-12">
              <div className="space-y-6">
                {[
                  { label: "Google Maps Presence", score: scores.maps },
                  { label: "Review Velocity & Rating", score: scores.reviews },
                  { label: "Website / Menu Conversion", score: scores.website },
                  { label: "Reservation Journey", score: scores.reservation },
                  { label: "Paid Acquisition (Ads)", score: scores.paid },
                  { label: "Event/Private Dining Funnel", score: scores.events },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between font-black uppercase text-sm mb-2">
                      <span>{item.label}</span>
                      <span className={item.score > 70 ? 'text-green-600' : item.score > 40 ? 'text-accent-yellow' : 'text-accent-red'}>{item.score}/100</span>
                    </div>
                    <div className="h-4 w-full bg-gray-200 border-2 border-black relative overflow-hidden">
                      <div className={`absolute top-0 left-0 h-full ${item.score > 70 ? 'bg-green-500' : item.score > 40 ? 'bg-accent-yellow' : 'bg-accent-red'}`} style={{ width: `${item.score}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-accent-yellow text-black border-4 border-black p-8 md:p-12 text-center shadow-[8px_8px_0_0_#000]">
              <AlertCircle className="w-12 h-12 text-black mx-auto mb-6" />
              <h2 className="font-heading font-black text-3xl md:text-4xl uppercase tracking-tighter mb-6">
                {scores.reservation < 50 || scores.website < 50 
                  ? "Your restaurant is visible — but your conversion path is leaking customers."
                  : scores.maps < 50 
                    ? "Your restaurant experience is great, but nobody can find you on Google Maps."
                    : "You have a solid foundation, but you are leaving revenue on the table."}
              </h2>
              <p className="font-bold opacity-90 mb-10 text-lg max-w-2xl mx-auto">
                We've identified the specific bottlenecks preventing you from maximizing covers. Let's walk through these findings and map out a growth plan to fill your tables consistently.
              </p>
              
              <a 
                href="https://calendly.com/tonyjvelloor/30min" // Replace with actual Calendly link if different
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-black text-white border-2 border-black font-black text-lg uppercase tracking-widest px-10 py-5 hover:bg-white hover:text-black transition-colors"
              >
                Get Your 15-Minute Growth Breakdown
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
