"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, IndianRupee, Users, TrendingUp, AlertTriangle } from "lucide-react";

export default function AyurvedaROICalculator() {
  const [budget, setBudget] = useState(25000);
  const [cpl, setCpl] = useState(300);
  const [leadToConsult, setLeadToConsult] = useState(20);
  const [consultToPatient, setConsultToPatient] = useState(40);
  const [avgTreatmentValue, setAvgTreatmentValue] = useState(15000);

  const [results, setResults] = useState({
    leads: 0,
    consultations: 0,
    patients: 0,
    revenue: 0,
    roas: 0,
    cac: 0,
  });

  useEffect(() => {
    const leads = Math.floor(budget / (cpl || 1));
    const consultations = Math.floor(leads * (leadToConsult / 100));
    const patients = Math.floor(consultations * (consultToPatient / 100));
    const revenue = patients * avgTreatmentValue;
    const roas = budget > 0 ? (revenue / budget).toFixed(2) : "0.00";
    const cac = patients > 0 ? Math.floor(budget / patients) : 0;

    setResults({
      leads,
      consultations,
      patients,
      revenue,
      roas: parseFloat(roas as string),
      cac,
    });
  }, [budget, cpl, leadToConsult, consultToPatient, avgTreatmentValue]);

  return (
    <div className="bg-background min-h-screen text-foreground pt-32 pb-24 font-mono">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header */}
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 bg-accent-yellow text-black">
            <Calculator className="w-4 h-4" /> Free Tool
          </span>
          <h1 className="font-heading font-black text-4xl md:text-6xl uppercase tracking-tighter leading-none text-foreground mb-6">
            Ayurveda Patient <br/>
            <span className="text-accent-blue">Acquisition Calculator.</span>
          </h1>
          <p className="text-lg font-bold opacity-80 max-w-2xl">
            Stop guessing your marketing ROI. Plug in your numbers below to see exactly how many high-value patients you should be generating, and what your actual Customer Acquisition Cost (CAC) is.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Controls */}
          <div className="lg:col-span-5 space-y-8 bg-foreground/5 p-6 md:p-8 border-2 border-foreground/10">
            <div>
              <h3 className="font-black uppercase text-xl mb-6 flex items-center gap-2 border-b-2 border-foreground/10 pb-4">
                Your Funnel Metrics
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="flex justify-between text-xs font-bold uppercase tracking-wide mb-2">
                  <span>Monthly Ad Budget</span>
                  <span className="text-accent-blue">₹{budget.toLocaleString('en-IN')}</span>
                </label>
                <input 
                  type="range" 
                  min="5000" max="200000" step="5000" 
                  value={budget} 
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full accent-accent-blue"
                />
              </div>

              <div>
                <label className="flex justify-between text-xs font-bold uppercase tracking-wide mb-2">
                  <span>Cost Per Lead (CPL)</span>
                  <span className="text-accent-red">₹{cpl.toLocaleString('en-IN')}</span>
                </label>
                <input 
                  type="range" 
                  min="50" max="1500" step="50" 
                  value={cpl} 
                  onChange={(e) => setCpl(Number(e.target.value))}
                  className="w-full accent-accent-red"
                />
              </div>

              <div>
                <label className="flex justify-between text-xs font-bold uppercase tracking-wide mb-2">
                  <span>Lead to Consult Conversion</span>
                  <span className="text-green-500">{leadToConsult}%</span>
                </label>
                <input 
                  type="range" 
                  min="1" max="100" step="1" 
                  value={leadToConsult} 
                  onChange={(e) => setLeadToConsult(Number(e.target.value))}
                  className="w-full accent-green-500"
                />
              </div>

              <div>
                <label className="flex justify-between text-xs font-bold uppercase tracking-wide mb-2">
                  <span>Consult to Patient Conversion</span>
                  <span className="text-green-500">{consultToPatient}%</span>
                </label>
                <input 
                  type="range" 
                  min="1" max="100" step="1" 
                  value={consultToPatient} 
                  onChange={(e) => setConsultToPatient(Number(e.target.value))}
                  className="w-full accent-green-500"
                />
              </div>

              <div>
                <label className="flex justify-between text-xs font-bold uppercase tracking-wide mb-2">
                  <span>Avg. Treatment Value (Panchakarma etc.)</span>
                  <span className="text-accent-yellow">₹{avgTreatmentValue.toLocaleString('en-IN')}</span>
                </label>
                <input 
                  type="range" 
                  min="1000" max="100000" step="1000" 
                  value={avgTreatmentValue} 
                  onChange={(e) => setAvgTreatmentValue(Number(e.target.value))}
                  className="w-full accent-accent-yellow"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-7">
            <div className="bg-foreground text-background p-6 md:p-10 shadow-[12px_12px_0_0_#3b82f6]">
              <h3 className="font-heading font-black text-2xl uppercase mb-8 text-center tracking-wide">
                Your Monthly Projection
              </h3>
              
              <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8">
                <div className="border-2 border-background/20 p-4">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" /> Total Leads
                  </p>
                  <p className="text-3xl font-black">{results.leads}</p>
                </div>
                
                <div className="border-2 border-background/20 p-4">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60 mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" /> Consultations
                  </p>
                  <p className="text-3xl font-black">{results.consultations}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-12">
                <div className="bg-accent-blue/20 border-2 border-accent-blue p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-accent-blue mb-2 flex items-center gap-2">
                    <IndianRupee className="w-4 h-4" /> Projected Revenue
                  </p>
                  <p className="text-4xl md:text-5xl font-black text-white">
                    ₹{results.revenue.toLocaleString('en-IN')}
                  </p>
                </div>
                
                <div className="bg-green-500/20 border-2 border-green-500 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-green-400 mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" /> Return on Ad Spend
                  </p>
                  <p className="text-4xl md:text-5xl font-black text-white">
                    {results.roas}x
                  </p>
                </div>
              </div>

              <div className="border-t-2 border-background/20 pt-8 mt-8">
                <div className="flex items-start gap-4 mb-8 bg-background/5 p-4 border-l-4 border-accent-red">
                  <AlertTriangle className="w-6 h-6 text-accent-red shrink-0" />
                  <div>
                    <p className="font-bold text-sm mb-1">Your Customer Acquisition Cost (CAC) is <span className="text-accent-red">₹{results.cac.toLocaleString('en-IN')}</span>.</p>
                    <p className="text-xs opacity-80 leading-relaxed">
                      Most clinics bleed money because their CAC is higher than their profit margin. If your metrics look worse than the industry benchmark, you have a conversion leak.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm font-bold uppercase mb-4 opacity-80 tracking-widest">Fix Your Funnel Today</p>
                  <Link 
                    href="/ayurveda-patient-acquisition-audit" 
                    className="inline-flex justify-center items-center gap-2 bg-accent-yellow text-black font-black text-sm uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors w-full md:w-auto"
                  >
                    Take The Free Acquisition Audit <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
