"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronRight, AlertCircle, Activity, Loader2 } from "lucide-react";
import Link from "next/link";

type Step = "intro" | "clinic_info" | "current_marketing" | "performance" | "contact" | "calculating" | "results";

export function AyurvedaAuditClient() {
  const [step, setStep] = useState<Step>("intro");
  
  // Form State
  const [formData, setFormData] = useState({
    clinicName: "",
    location: "",
    website: "",
    hasGMB: "",
    reviewsCount: "",
    monthlyEnquiries: "",
    primaryChannel: "",
    runningAds: "",
    marketingSpend: "",
    treatmentFocus: "",
    biggestProblem: "",
    name: "",
    phone: "",
    email: ""
  });

  const [scores, setScores] = useState({
    localSearch: 0,
    maps: 0,
    website: 0,
    paid: 0,
    tracking: 0,
    reputation: 0
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const trackStep = (stepName: string) => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "audit_step_view",
        audit_type: "ayurveda",
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
        localSearch: 50,
        maps: 40,
        website: 50,
        paid: 30,
        tracking: 40,
        reputation: 50
      };

      if (formData.hasGMB === "Yes") newScores.maps += 30;
      if (formData.reviewsCount === "50+") newScores.reputation += 35;
      if (formData.reviewsCount === "10-50") newScores.reputation += 10;
      if (formData.runningAds === "Yes") {
        newScores.paid += 40;
        newScores.tracking += 20; // Assume they have basic tracking if running ads
      }
      if (formData.website !== "") newScores.website += 25;
      if (formData.primaryChannel === "SEO / Organic Search") newScores.localSearch += 30;

      setScores(newScores);
      
      // In a real app, we would POST to our Google Sheet webhook here.
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "generate_lead",
          audit_type: "ayurveda",
          clinic_name: formData.clinicName
        });
      }

      handleStepChange("results");
    }, 2000);
  };

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-accent-red selection:text-white font-sans">
      <main className="container mx-auto px-4 py-20 max-w-3xl">
        
        {step === "intro" && (
          <div className="text-center mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="font-heading font-black text-4xl md:text-6xl uppercase tracking-tighter mb-6">
              Find Out Where Your Clinic Is <span className="text-accent-red underline decoration-4">Losing Patients</span> Online
            </h1>
            <p className="text-xl font-bold opacity-80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Get a 5-minute diagnostic assessment of your Google visibility, local search, website conversion, tracking, and patient acquisition funnel.
            </p>
            <button 
              onClick={() => handleStepChange("clinic_info")}
              className="inline-flex justify-center items-center gap-2 bg-foreground text-background border-2 border-foreground font-black text-lg uppercase tracking-widest px-10 py-6 hover:bg-accent-red hover:text-white transition-colors shadow-[6px_6px_0_0_#000]"
            >
              Start Diagnostic Audit
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm font-bold opacity-60 uppercase tracking-widest">
              <Activity className="w-4 h-4" /> Based on 100+ Clinic Audits
            </div>
          </div>
        )}

        {step === "clinic_info" && (
          <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0_0_#000] animate-in fade-in slide-in-from-right-8">
            <h2 className="font-heading font-black text-2xl uppercase mb-8 border-b-2 border-black pb-4">1. Clinic Infrastructure</h2>
            <div className="space-y-6">
              <div>
                <label className="block font-black uppercase text-sm mb-2">Clinic / Hospital Name</label>
                <input type="text" value={formData.clinicName} onChange={(e) => handleInputChange("clinicName", e.target.value)} className="w-full border-2 border-black p-4 font-bold focus:outline-none focus:border-accent-red" placeholder="e.g. Karmanya Ayurveda" />
              </div>
              <div>
                <label className="block font-black uppercase text-sm mb-2">City / Location</label>
                <input type="text" value={formData.location} onChange={(e) => handleInputChange("location", e.target.value)} className="w-full border-2 border-black p-4 font-bold focus:outline-none focus:border-accent-red" placeholder="e.g. Pune" />
              </div>
              <div>
                <label className="block font-black uppercase text-sm mb-2">Website URL (Optional)</label>
                <input type="url" value={formData.website} onChange={(e) => handleInputChange("website", e.target.value)} className="w-full border-2 border-black p-4 font-bold focus:outline-none focus:border-accent-red" placeholder="https://" />
              </div>
              <div className="pt-6 flex justify-between">
                <button onClick={() => handleStepChange("intro")} className="font-bold opacity-60 hover:opacity-100">Back</button>
                <button onClick={() => handleStepChange("current_marketing")} className="bg-black text-white px-8 py-3 font-black uppercase tracking-widest hover:bg-accent-red flex items-center gap-2">Next <ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        )}

        {step === "current_marketing" && (
          <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0_0_#000] animate-in fade-in slide-in-from-right-8">
            <h2 className="font-heading font-black text-2xl uppercase mb-8 border-b-2 border-black pb-4">2. Visibility & Traffic</h2>
            <div className="space-y-6">
              <div>
                <label className="block font-black uppercase text-sm mb-3">Do you have a claimed Google Business Profile?</label>
                <div className="flex gap-4">
                  {["Yes", "No", "Not Sure"].map(opt => (
                    <button key={opt} onClick={() => handleInputChange("hasGMB", opt)} className={`flex-1 border-2 border-black py-3 font-bold ${formData.hasGMB === opt ? 'bg-accent-red text-white' : 'hover:bg-gray-100'}`}>{opt}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block font-black uppercase text-sm mb-3">Roughly how many Google Reviews do you have?</label>
                <div className="grid grid-cols-2 gap-4">
                  {["0-10", "10-50", "50-100", "100+"].map(opt => (
                    <button key={opt} onClick={() => handleInputChange("reviewsCount", opt)} className={`border-2 border-black py-3 font-bold ${formData.reviewsCount === opt ? 'bg-accent-red text-white' : 'hover:bg-gray-100'}`}>{opt}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block font-black uppercase text-sm mb-3">Are you currently running Google or Meta Ads?</label>
                <div className="flex gap-4">
                  {["Yes", "No", "Tried but stopped"].map(opt => (
                    <button key={opt} onClick={() => handleInputChange("runningAds", opt)} className={`flex-1 border-2 border-black py-3 font-bold ${formData.runningAds === opt ? 'bg-accent-red text-white' : 'hover:bg-gray-100'}`}>{opt}</button>
                  ))}
                </div>
              </div>
              <div className="pt-6 flex justify-between">
                <button onClick={() => handleStepChange("clinic_info")} className="font-bold opacity-60 hover:opacity-100">Back</button>
                <button onClick={() => handleStepChange("performance")} className="bg-black text-white px-8 py-3 font-black uppercase tracking-widest hover:bg-accent-red flex items-center gap-2">Next <ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        )}

        {step === "performance" && (
          <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0_0_#000] animate-in fade-in slide-in-from-right-8">
            <h2 className="font-heading font-black text-2xl uppercase mb-8 border-b-2 border-black pb-4">3. Growth & Goals</h2>
            <div className="space-y-6">
              <div>
                <label className="block font-black uppercase text-sm mb-2">What is your primary treatment focus?</label>
                <input type="text" value={formData.treatmentFocus} onChange={(e) => handleInputChange("treatmentFocus", e.target.value)} className="w-full border-2 border-black p-4 font-bold focus:outline-none focus:border-accent-red" placeholder="e.g. Panchakarma, Joint Pain, General" />
              </div>
              <div>
                <label className="block font-black uppercase text-sm mb-3">Approx. monthly patient enquiries (from digital)?</label>
                <div className="grid grid-cols-2 gap-4">
                  {["< 10", "10 - 30", "30 - 100", "100+"].map(opt => (
                    <button key={opt} onClick={() => handleInputChange("monthlyEnquiries", opt)} className={`border-2 border-black py-3 font-bold ${formData.monthlyEnquiries === opt ? 'bg-accent-red text-white' : 'hover:bg-gray-100'}`}>{opt}</button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block font-black uppercase text-sm mb-2">What is your biggest growth bottleneck right now?</label>
                <textarea value={formData.biggestProblem} onChange={(e) => handleInputChange("biggestProblem", e.target.value)} className="w-full border-2 border-black p-4 font-bold focus:outline-none focus:border-accent-red h-24" placeholder="e.g. Getting leads but they don't show up..."></textarea>
              </div>
              <div className="pt-6 flex justify-between">
                <button onClick={() => handleStepChange("current_marketing")} className="font-bold opacity-60 hover:opacity-100">Back</button>
                <button onClick={() => handleStepChange("contact")} className="bg-black text-white px-8 py-3 font-black uppercase tracking-widest hover:bg-accent-red flex items-center gap-2">Next <ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        )}

        {step === "contact" && (
          <div className="bg-accent-red text-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0_0_#000] animate-in fade-in slide-in-from-right-8">
            <h2 className="font-heading font-black text-2xl uppercase mb-4 border-b-2 border-white/20 pb-4">Where should we send your Diagnostic Report?</h2>
            <p className="font-bold opacity-90 mb-8">Almost done. Enter your details to generate your patient acquisition score.</p>
            <div className="space-y-6">
              <div>
                <label className="block font-black uppercase text-sm mb-2">Your Name</label>
                <input type="text" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} className="w-full border-2 border-black p-4 font-bold text-black focus:outline-none" />
              </div>
              <div>
                <label className="block font-black uppercase text-sm mb-2">WhatsApp Number</label>
                <input type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} className="w-full border-2 border-black p-4 font-bold text-black focus:outline-none" />
              </div>
              <div>
                <label className="block font-black uppercase text-sm mb-2">Work Email</label>
                <input type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} className="w-full border-2 border-black p-4 font-bold text-black focus:outline-none" />
              </div>
              <div className="pt-6 flex justify-between items-center">
                <button onClick={() => handleStepChange("performance")} className="font-bold opacity-80 hover:opacity-100">Back</button>
                <button onClick={calculateScore} className="bg-black text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black border-2 border-black transition-colors flex items-center gap-2">
                  Generate Diagnostic <Activity className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {step === "calculating" && (
          <div className="text-center py-20 animate-in fade-in">
            <Loader2 className="w-12 h-12 animate-spin mx-auto mb-6 text-accent-red" />
            <h2 className="font-heading font-black text-3xl uppercase tracking-tighter mb-2">Analyzing Inputs...</h2>
            <p className="font-mono text-sm opacity-60">Evaluating local search footprint, map rankings, and conversion gaps.</p>
          </div>
        )}

        {step === "results" && (
          <div className="animate-in fade-in slide-in-from-bottom-8">
            <div className="text-center mb-12">
              <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-4 bg-accent-yellow text-black">
                Diagnostic Complete
              </span>
              <h1 className="font-heading font-black text-4xl md:text-5xl uppercase tracking-tighter mb-4">
                Ayurveda Patient Acquisition Score
              </h1>
              <p className="text-lg font-bold opacity-80 max-w-2xl mx-auto">
                Based on your inputs, here is a breakdown of your current acquisition infrastructure.
              </p>
            </div>

            <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_#000] p-6 md:p-10 mb-12">
              <div className="space-y-6">
                {[
                  { label: "Local Search Visibility", score: scores.localSearch },
                  { label: "Google Maps Presence", score: scores.maps },
                  { label: "Website Conversion", score: scores.website },
                  { label: "Paid Acquisition", score: scores.paid },
                  { label: "Tracking & Analytics", score: scores.tracking },
                  { label: "Reviews / Reputation", score: scores.reputation },
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

            <div className="bg-black text-white border-4 border-accent-red p-8 md:p-12 text-center shadow-[8px_8px_0_0_#FF3333]">
              <AlertCircle className="w-12 h-12 text-accent-red mx-auto mb-6" />
              <h2 className="font-heading font-black text-3xl md:text-4xl uppercase tracking-tighter mb-6">
                {scores.paid < 50 || scores.tracking < 50 
                  ? "Your biggest leakage appears to be Paid Acquisition & Tracking."
                  : scores.reputation < 50 
                    ? "Your biggest leakage appears to be Local Reputation & Reviews."
                    : "You have a solid foundation, but you are leaving revenue on the table."}
              </h2>
              <p className="font-bold opacity-90 mb-10 text-lg max-w-2xl mx-auto">
                We've found the gaps. Let's fix them. Get a personalized walkthrough of these findings and a blueprint of the exact system we used to grow Karmanya Ayurveda by 120%.
              </p>
              
              <a 
                href="https://calendly.com/tonyjvelloor/30min" // Replace with actual Calendly link if different
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-accent-red text-white border-2 border-accent-red font-black text-lg uppercase tracking-widest px-10 py-5 hover:bg-white hover:text-black transition-colors"
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
