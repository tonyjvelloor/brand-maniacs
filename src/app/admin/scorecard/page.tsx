"use client";

import { useState, useMemo } from "react";
import { 
  SCORECARD_PILLARS, 
  calculatePillarScore, 
  calculateOverallHealthScore, 
  getScorecardClassification,
  generateImplications,
  ScorecardPillar 
} from "@/lib/scorecard";
import { 
  Printer, 
  Save, 
  FileText, 
  Calculator, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  Download,
  RotateCcw
} from "lucide-react";

export default function AdminScorecardPage() {
  const [clientInfo, setClientInfo] = useState({
    clientName: "Acme Wellness D2C",
    website: "https://acmewellness.in",
    auditPeriod: "Last 60 Days",
    platforms: "Meta Ads (IG/FB) + Google Search/PMax",
    monthlySpend: "₹65,000 / month",
    auditorName: "Tony J Velloor (Brand Maniacs)",
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
  });

  // Default checkpoint grades (0 - 3)
  const [grades, setGrades] = useState<Record<string, number>>({
    // ATTRACT
    attract_audience_quality: 2,
    attract_traffic_intent: 1,
    attract_search_relevance: 1,
    attract_message_market_match: 2,
    attract_click_quality: 1,

    // CONVINCE
    convince_problem_recognition: 2,
    convince_offer_clarity: 1,
    convince_differentiation: 1,
    convince_creative_match: 2,
    convince_cta_strength: 2,

    // CONVERT
    convert_destination_relevance: 1,
    convert_friction: 1,
    convert_mobile_ux: 2,
    convert_lead_flow: 1,
    convert_sales_followup: 2,

    // TRACK
    track_conversion_tracking: 1,
    track_pixel_tag_health: 1,
    track_lead_quality_feedback: 0,
    track_attribution_visibility: 1,
    track_reporting_quality: 1,

    // SCALE
    scale_budget_allocation: 1,
    scale_testing_system: 1,
    scale_winning_identification: 2,
    scale_unit_economics: 2,
    scale_operational_scalability: 3,
  });

  // Evidence notes per checkpoint
  const [evidence, setEvidence] = useState<Record<string, string>>({
    attract_traffic_intent: "High volume of broad match search queries like 'free fitness tips' triggering paid clicks.",
    convince_offer_clarity: "Landing page fails to state price or exact deliverables above the fold.",
    track_lead_quality_feedback: "No offline conversion tracking uploaded to Meta; algorithm optimizes for cheap form submits instead of qualified buyers.",
  });

  // Top 3 Manual Leaks overrides
  const [topLeaks, setTopLeaks] = useState([
    {
      title: "Broken Conversion Feedback Loop",
      found: "Ad platform is optimizing for raw form fills without knowing 70% of numbers are fake.",
      impact: "Meta algorithm is actively hunting for people who fill forms but never purchase.",
      action: "Implement offline conversion value sync and CAPI server-side event deduplication."
    },
    {
      title: "Broad Match Query Bleed on Google Ads",
      found: "Over 38% of Search budget is spent on informational and generic competitor search terms.",
      impact: "High CTR with instant 90% bounce rate on landing page.",
      action: "Quarantine negative keyword list and segment into exact-intent match groups."
    },
    {
      title: "Mobile Funnel Friction & Offer Ambiguity",
      found: "Mobile load speed is 4.8 seconds; form requires 8 manual input fields.",
      impact: "Paid traffic abandons before completing the questionnaire.",
      action: "Deploy streamlined single-column mobile funnel with 3-field intake."
    }
  ]);

  const handleGradeChange = (checkpointId: string, val: number) => {
    setGrades(prev => ({ ...prev, [checkpointId]: val }));
  };

  const handleEvidenceChange = (checkpointId: string, val: string) => {
    setEvidence(prev => ({ ...prev, [checkpointId]: val }));
  };

  // Compute 5 pillar scores
  const pillarScores = useMemo(() => {
    const scores: Record<string, number> = {};
    SCORECARD_PILLARS.forEach(pillar => {
      const pillarCheckpointGrades: Record<string, number> = {};
      pillar.checkpoints.forEach(cp => {
        pillarCheckpointGrades[cp.id] = grades[cp.id] ?? 0;
      });
      scores[pillar.id] = calculatePillarScore(pillarCheckpointGrades);
    });
    return scores as { attract: number; convince: number; convert: number; track: number; scale: number };
  }, [grades]);

  const overallScore = useMemo(() => {
    return calculateOverallHealthScore(pillarScores);
  }, [pillarScores]);

  const classification = useMemo(() => {
    return getScorecardClassification(overallScore);
  }, [overallScore]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-foreground p-4 sm:p-8 font-mono">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="bg-[#181818] border-2 border-foreground/20 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
          <div>
            <span className="text-xs font-mono font-black uppercase text-accent-yellow block">
              Internal Tool // Brand Maniacs Auditor Hub
            </span>
            <h1 className="font-heading font-black text-2xl uppercase tracking-tight text-white">
              25-Point Ads Rescue Scorecard Builder
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="bg-accent-yellow text-black hover:bg-white font-heading font-black uppercase text-xs px-5 py-2.5 border-2 border-black flex items-center gap-2 cursor-pointer shadow-[3px_3px_0_0_#F0F0F0]"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF Report</span>
            </button>
          </div>
        </div>

        {/* Client Metadata Header */}
        <div className="bg-[#141414] border-2 border-foreground/20 p-6 space-y-4 print:border-black print:text-black">
          <div className="flex items-center justify-between border-b border-foreground/15 pb-3">
            <span className="text-xs font-black uppercase text-accent-yellow">Client & Audit Parameters</span>
            <span className="text-xs text-foreground/50">{clientInfo.date}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block text-foreground/50 uppercase font-bold mb-1">Client Name</label>
              <input
                type="text"
                value={clientInfo.clientName}
                onChange={(e) => setClientInfo({ ...clientInfo, clientName: e.target.value })}
                className="w-full bg-[#202020] border border-foreground/20 px-3 py-2 text-foreground font-bold"
              />
            </div>

            <div>
              <label className="block text-foreground/50 uppercase font-bold mb-1">Website URL</label>
              <input
                type="text"
                value={clientInfo.website}
                onChange={(e) => setClientInfo({ ...clientInfo, website: e.target.value })}
                className="w-full bg-[#202020] border border-foreground/20 px-3 py-2 text-foreground font-bold"
              />
            </div>

            <div>
              <label className="block text-foreground/50 uppercase font-bold mb-1">Monthly Ad Spend</label>
              <input
                type="text"
                value={clientInfo.monthlySpend}
                onChange={(e) => setClientInfo({ ...clientInfo, monthlySpend: e.target.value })}
                className="w-full bg-[#202020] border border-foreground/20 px-3 py-2 text-foreground font-bold"
              />
            </div>
          </div>
        </div>

        {/* Overall Health Score Summary Card */}
        <div className="bg-[#141414] border-4 border-accent-yellow p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[8px_8px_0_0_#FFE600] print:border-black print:shadow-none">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-foreground/60 block">
              AD SPEND HEALTH SCORE (WEIGHTED)
            </span>
            <div className="font-heading font-black text-6xl sm:text-7xl text-accent-yellow tracking-tight">
              {overallScore.toFixed(1)} <span className="text-2xl text-foreground/40 font-mono">/ 10</span>
            </div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 border font-mono text-xs font-black uppercase ${classification.bgBadge}`}>
              <span>{classification.icon}</span>
              <span>{classification.title} ({classification.range})</span>
            </div>
          </div>

          {/* 5 Pillar Score Gauges */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 w-full md:w-auto">
            {SCORECARD_PILLARS.map((p) => {
              const score = pillarScores[p.id];
              return (
                <div key={p.id} className="bg-[#1F1F1F] border border-foreground/20 p-3 text-center space-y-1">
                  <span className="text-[10px] font-mono font-bold text-foreground/50 uppercase block">{p.name} ({p.weightPercent}%)</span>
                  <div className={`font-heading font-black text-xl ${score < 5 ? "text-accent-red" : score < 7.5 ? "text-accent-yellow" : "text-green-400"}`}>
                    {score.toFixed(1)} <span className="text-[10px] text-foreground/40">/10</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 25 Diagnostic Checkpoints Auditor Matrix */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b-2 border-foreground/20 pb-2">
            <h2 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight text-white">
              The 25 Checkpoints Audit Matrix
            </h2>
            <span className="text-xs font-mono text-foreground/50">
              Grade: 0 = Critical | 1 = Weak | 2 = Functional | 3 = Strong
            </span>
          </div>

          {SCORECARD_PILLARS.map((pillar) => {
            const currentPillarScore = pillarScores[pillar.id];
            return (
              <div key={pillar.id} className="bg-[#141414] border-2 border-foreground/20 p-6 space-y-4">
                {/* Pillar Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-foreground/15 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-accent-yellow text-black font-black flex items-center justify-center text-xs">
                      {pillar.number}
                    </span>
                    <strong className="font-heading font-black text-lg uppercase text-white tracking-wider">
                      {pillar.name} — {pillar.tagline}
                    </strong>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-sm font-black text-accent-yellow">
                      Score: {currentPillarScore.toFixed(1)} / 10
                    </span>
                  </div>
                </div>

                {/* Checkpoint Rows */}
                <div className="space-y-3">
                  {pillar.checkpoints.map((cp) => {
                    const grade = grades[cp.id] ?? 0;
                    return (
                      <div key={cp.id} className="bg-[#1A1A1A] border border-foreground/10 p-3 sm:p-4 space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div className="space-y-0.5">
                            <span className="font-mono text-xs font-black text-accent-yellow mr-2">
                              {pillar.number}.{cp.letter} {cp.name}
                            </span>
                            <p className="font-sans text-xs text-foreground/80 font-bold">
                              {cp.question}
                            </p>
                          </div>

                          {/* Grade Selector (0, 1, 2, 3) */}
                          <div className="flex items-center gap-1 shrink-0 print:hidden">
                            {[0, 1, 2, 3].map((num) => (
                              <button
                                key={num}
                                type="button"
                                onClick={() => handleGradeChange(cp.id, num)}
                                className={`w-8 h-8 font-mono text-xs font-black border transition-all ${
                                  grade === num
                                    ? num === 0 ? "bg-red-600 text-white border-red-400"
                                      : num === 1 ? "bg-orange-500 text-white border-orange-300"
                                      : num === 2 ? "bg-yellow-500 text-black border-yellow-300"
                                      : "bg-green-600 text-white border-green-300"
                                    : "bg-[#252525] text-foreground/60 border-foreground/20 hover:bg-[#333]"
                                }`}
                              >
                                {num}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Evidence Note Input */}
                        <div className="pt-1">
                          <input
                            type="text"
                            placeholder="Enter specific audit evidence / observation note..."
                            value={evidence[cp.id] || ""}
                            onChange={(e) => handleEvidenceChange(cp.id, e.target.value)}
                            className="w-full bg-[#111] border border-foreground/15 px-3 py-1.5 text-xs text-foreground/90 font-mono placeholder:text-foreground/30 focus:border-accent-yellow focus:outline-none"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Top 3 Leaks Review (Printable Section) */}
        <div className="bg-[#141414] border-2 border-foreground/20 p-6 space-y-4">
          <div className="border-b border-foreground/15 pb-2">
            <span className="text-xs font-mono font-black uppercase text-accent-red">Section 3 // Diagnostic Highlights</span>
            <h3 className="font-heading font-black text-xl uppercase tracking-tight text-white">
              The Top 3 Biggest Leaks
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topLeaks.map((leak, idx) => (
              <div key={idx} className="bg-[#1A1A1A] border border-foreground/15 p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-accent-red text-white flex items-center justify-center text-xs font-black">
                    {idx + 1}
                  </span>
                  <strong className="font-heading font-black text-sm uppercase text-white">
                    {leak.title}
                  </strong>
                </div>

                <div className="text-xs space-y-1 pt-1 font-mono">
                  <p><strong className="text-foreground/50">Found:</strong> {leak.found}</p>
                  <p><strong className="text-accent-red">Impact:</strong> {leak.impact}</p>
                  <p><strong className="text-accent-yellow">Fix:</strong> {leak.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
