/**
 * THE ADS RESCUE SCORECARD SYSTEM
 * 5 Pillars × 5 Checks = 25 Diagnostic Checkpoints
 * 
 * Checkpoint Grades:
 * 0 = Critical issue
 * 1 = Weak / missing
 * 2 = Functional but needs improvement
 * 3 = Strong
 * 
 * Pillar Score = (Points Achieved ÷ 15) × 10
 * Overall Score = (Attract × 0.20) + (Convince × 0.20) + (Convert × 0.25) + (Track × 0.20) + (Scale × 0.15)
 */

export interface ScorecardCheckpoint {
  id: string;
  letter: string;
  name: string;
  question: string;
  description: string;
  weight: number; // Max 3
}

export interface ScorecardPillar {
  id: "attract" | "convince" | "convert" | "track" | "scale";
  number: string;
  name: string;
  tagline: string;
  weightPercent: number;
  weightMultiplier: number;
  color: string;
  checkpoints: ScorecardCheckpoint[];
  implicationThreshold: number; // If score < threshold, trigger specific solution
  implication: {
    diagnosis: string;
    recommendedSolution: string;
    engagementType: "One-time implementation" | "Project-based" | "System Constraint";
  };
}

export interface PillarGrade {
  pillarId: string;
  scores: Record<string, number>; // checkpointId -> 0 | 1 | 2 | 3
  evidence: Record<string, string>; // checkpointId -> note/evidence
  pointsAchieved: number; // sum of scores (0-15)
  pillarScore: number; // (points / 15) * 10
}

export interface ScorecardClassification {
  tier: "CRITICAL" | "LEAKING" | "UNSTABLE" | "HEALTHY" | "SCALE_READY";
  color: string;
  bgBadge: string;
  borderBadge: string;
  icon: string;
  range: string;
  title: string;
  description: string;
  primaryDirective: string;
}

export const SCORECARD_PILLARS: ScorecardPillar[] = [
  {
    id: "attract",
    number: "01",
    name: "ATTRACT",
    tagline: "Are the right people entering the funnel?",
    weightPercent: 20,
    weightMultiplier: 0.20,
    color: "#FF2A00",
    implicationThreshold: 5.0,
    implication: {
      diagnosis: "The business is paying to attract curiosity clickers and out-of-market traffic.",
      recommendedSolution: "Audience & Search Intent Quarantine / Campaign Restructure",
      engagementType: "One-time implementation"
    },
    checkpoints: [
      {
        id: "attract_audience_quality",
        letter: "A",
        name: "Targeting & Audience Quality",
        question: "Are we reaching the right customer profile?",
        description: "Exclusions, demographic parameters, Advantage+ guardrails, and audience overlap.",
        weight: 3,
      },
      {
        id: "attract_traffic_intent",
        letter: "B",
        name: "Traffic Intent",
        question: "Are people actively looking for the solution or casually browsing?",
        description: "Search keyword commercial intent vs social scroll curiosity.",
        weight: 3,
      },
      {
        id: "attract_search_relevance",
        letter: "C",
        name: "Search Terms & Signal Relevance",
        question: "Are queries relevant and negative keyword lists populated?",
        description: "Wasteful query leakage on Google, low-signal lookalikes on Meta.",
        weight: 3,
      },
      {
        id: "attract_message_market_match",
        letter: "D",
        name: "Message-to-Market Match",
        question: "Does the ad speak to the actual problem the buyer cares about?",
        description: "Alignment between pain point, target persona, and hook angle.",
        weight: 3,
      },
      {
        id: "attract_click_quality",
        letter: "E",
        name: "Click Quality",
        question: "Are people clicking with intent or because of misleading curiosity hooks?",
        description: "Post-click bounce rate within first 3 seconds.",
        weight: 3,
      }
    ]
  },
  {
    id: "convince",
    number: "02",
    name: "CONVINCE",
    tagline: "Does the ad make the right person want to take action?",
    weightPercent: 20,
    weightMultiplier: 0.20,
    color: "#FFE600",
    implicationThreshold: 5.0,
    implication: {
      diagnosis: "Better targeting alone won't solve the problem. Messaging lacks differentiation.",
      recommendedSolution: "Creative Hook Sprint & High-Conviction Offer Architecture",
      engagementType: "Project-based"
    },
    checkpoints: [
      {
        id: "convince_problem_recognition",
        letter: "A",
        name: "Problem Recognition",
        question: "Does the prospect immediately recognize their specific situation?",
        description: "Hook relevance that halts the scroll and identifies the core struggle.",
        weight: 3,
      },
      {
        id: "convince_offer_clarity",
        letter: "B",
        name: "Offer Clarity",
        question: "Can they understand what they are getting within 3 seconds?",
        description: "No vague promises; clear deliverables, pricing, and outcomes.",
        weight: 3,
      },
      {
        id: "convince_differentiation",
        letter: "C",
        name: "Differentiation & Moat",
        question: "Why should they choose this business over alternatives?",
        description: "Unique mechanism, proof elements, or structural advantage.",
        weight: 3,
      },
      {
        id: "convince_creative_match",
        letter: "D",
        name: "Creative-to-Audience Match",
        question: "Does the creative fit their awareness and intent level?",
        description: "Unaware vs problem-aware vs solution-aware messaging cadence.",
        weight: 3,
      },
      {
        id: "convince_cta_strength",
        letter: "E",
        name: "Call-to-Action Strength",
        question: "Is the next step clear, frictionless, and logical?",
        description: "Direct CTA that matches the cognitive commitment level.",
        weight: 3,
      }
    ]
  },
  {
    id: "convert",
    number: "03",
    name: "CONVERT",
    tagline: "Where are potential customers dropping off?",
    weightPercent: 25,
    weightMultiplier: 0.25,
    color: "#9333EA",
    implicationThreshold: 5.0,
    implication: {
      diagnosis: "Increasing ad traffic will simply accelerate wasted clicks due to funnel drop-off.",
      recommendedSolution: "Landing Page & High-Velocity Conversion Rate Sprint",
      engagementType: "Project-based"
    },
    checkpoints: [
      {
        id: "convert_destination_relevance",
        letter: "A",
        name: "Landing Page Relevance & Continuity",
        question: "Does the page continue the exact promise made in the ad?",
        description: "Zero disconnect between ad hook and hero headline/offer.",
        weight: 3,
      },
      {
        id: "convert_friction",
        letter: "B",
        name: "Conversion Friction",
        question: "How difficult is it to enquire, book, or buy?",
        description: "Form fields, unnecessary questions, slow checkout, confusing navigation.",
        weight: 3,
      },
      {
        id: "convert_mobile_ux",
        letter: "C",
        name: "Mobile Experience & Speed",
        question: "Does the conversion experience load and operate under 2.5s on mobile?",
        description: "Core Web Vitals, thumb ergonomics, mobile form auto-fill.",
        weight: 3,
      },
      {
        id: "convert_lead_flow",
        letter: "D",
        name: "Lead & Post-Click Flow",
        question: "What happens immediately after the person submits or buys?",
        description: "Immediate confirmation, calendar scheduling, qualification filters.",
        weight: 3,
      },
      {
        id: "convert_sales_followup",
        letter: "E",
        name: "Sales Response & Follow-up Velocity",
        question: "Are leads being contacted within 5 minutes and handled systematically?",
        description: "Speed-to-lead, WhatsApp automation, CRM pipeline tracking.",
        weight: 3,
      }
    ]
  },
  {
    id: "track",
    number: "04",
    name: "TRACK",
    tagline: "Do we actually know what is driving revenue?",
    weightPercent: 20,
    weightMultiplier: 0.20,
    color: "#00E5FF",
    implicationThreshold: 5.0,
    implication: {
      diagnosis: "Do not scale ad spend. Algorithmic optimization is blinded by broken attribution.",
      recommendedSolution: "Server-Side GTM + Meta CAPI + Offline Conversion Synchronization",
      engagementType: "One-time implementation"
    },
    checkpoints: [
      {
        id: "track_conversion_tracking",
        letter: "A",
        name: "Meaningful Conversion Tracking",
        question: "Are we tracking actual revenue actions instead of vanity pageviews?",
        description: "Qualified leads, pipeline stages, or purchases vs generic page hits.",
        weight: 3,
      },
      {
        id: "track_pixel_tag_health",
        letter: "B",
        name: "Pixel & Server-Side Tag Health",
        question: "Are Meta Pixel, CAPI, GTM, and GA4 firing and deduplicating correctly?",
        description: "Event Match Quality (EMQ) > 8.0, server-side redundancy.",
        weight: 3,
      },
      {
        id: "track_lead_quality_feedback",
        letter: "C",
        name: "Lead Quality Feedback Loop",
        question: "Does the ad platform receive feedback on which leads became paying customers?",
        description: "Offline conversion uploads or CRM value syncing to train the algorithm.",
        weight: 3,
      },
      {
        id: "track_attribution_visibility",
        letter: "D",
        name: "Attribution Visibility & Reconciliation",
        question: "Can you reconcile ad manager revenue with bank account sales?",
        description: "7-day click attribution vs 1-day view, multi-touch clarity.",
        weight: 3,
      },
      {
        id: "track_reporting_quality",
        letter: "E",
        name: "Decision-Grade Reporting Quality",
        question: "Can leadership make confident scaling decisions based on available reports?",
        description: "Clean blended CAC/MER tracking without vanity noise.",
        weight: 3,
      }
    ]
  },
  {
    id: "scale",
    number: "05",
    name: "SCALE",
    tagline: "Is the business ready to put more money behind what works?",
    weightPercent: 15,
    weightMultiplier: 0.15,
    color: "#10B981",
    implicationThreshold: 7.0,
    implication: {
      diagnosis: "Account cannot scale safely until lower-funnel constraints are resolved.",
      recommendedSolution: "Systematic Testing Protocol & Budget Allocation Framework",
      engagementType: "System Constraint"
    },
    checkpoints: [
      {
        id: "scale_budget_allocation",
        letter: "A",
        name: "Budget Allocation Efficiency",
        question: "Is 70%+ of budget concentrated exclusively on proven winning ad sets?",
        description: "Eliminating budget spread across dozens of mediocre ad tests.",
        weight: 3,
      },
      {
        id: "scale_testing_system",
        letter: "B",
        name: "Systematic Testing Engine",
        question: "Is there a weekly scientific system for testing angles, hooks, and keywords?",
        description: "Structured creative testing sandbox separate from scaling campaigns.",
        weight: 3,
      },
      {
        id: "scale_winning_identification",
        letter: "C",
        name: "Winning Campaign Identification",
        question: "Do you know with statistical confidence which specific creative drives the lowest CAC?",
        description: "Clear fatigue thresholds and evergreen winner isolation.",
        weight: 3,
      },
      {
        id: "scale_unit_economics",
        letter: "D",
        name: "Unit Economics & Payback Windows",
        question: "Are maximum allowable CPL, CAC, and customer LTV clearly established?",
        description: "Target ROAS thresholds mapped to gross margin reality.",
        weight: 3,
      },
      {
        id: "scale_operational_scalability",
        letter: "E",
        name: "Operational & Delivery Scalability",
        question: "Can the business handle 2x to 3x more leads without breaking fulfillment?",
        description: "Sales capacity, onboarding bandwidth, and inventory readiness.",
        weight: 3,
      }
    ]
  }
];

export const SCORECARD_CLASSIFICATIONS: ScorecardClassification[] = [
  {
    tier: "CRITICAL",
    color: "#EF4444",
    bgBadge: "bg-red-500/10 text-red-400 border-red-500/30",
    borderBadge: "border-red-500",
    icon: "🔴",
    range: "0 – 3.9",
    title: "CRITICAL SYSTEM FAULT",
    description: "Your ad engine has severe foundational leaks. Every additional rupee spent will drain your capital with minimal return.",
    primaryDirective: "STOP SCALING IMMEDIATELY. Quarantine broken campaigns and fix tracking + landing continuity."
  },
  {
    tier: "LEAKING",
    color: "#F97316",
    bgBadge: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    borderBadge: "border-orange-500",
    icon: "🟠",
    range: "4.0 – 5.9",
    title: "SIGNIFICANT BUDGET LEAKAGE",
    description: "Your ads are running and generating initial volume, but severe friction in tracking, search intent, or conversion is halving your profitability.",
    primaryDirective: "PLUG TOP 3 LEAKS. Reallocate budget from underperforming ad sets to verified intent segments."
  },
  {
    tier: "UNSTABLE",
    color: "#EAB308",
    bgBadge: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    borderBadge: "border-yellow-500",
    icon: "🟡",
    range: "6.0 – 7.4",
    title: "UNSTABLE PERFORMANCE",
    description: "Some components are working, but the system is volatile. Increasing budget now will spike your CAC instead of doubling your revenue.",
    primaryDirective: "STABILIZE UNIT ECONOMICS. Refine creative testing cycles and eliminate audience overlap."
  },
  {
    tier: "HEALTHY",
    color: "#10B981",
    bgBadge: "bg-green-500/10 text-green-400 border-green-500/30",
    borderBadge: "border-green-500",
    icon: "🟢",
    range: "7.5 – 8.9",
    title: "HEALTHY GROWTH ENGINE",
    description: "Strong foundation with clean tracking and solid conversion flow. Targeted optimizations will unlock significant scale.",
    primaryDirective: "CONTROLLED SCALE. Expand winning creative angles and test higher-tier bid strategies."
  },
  {
    tier: "SCALE_READY",
    color: "#3B82F6",
    bgBadge: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    borderBadge: "border-blue-500",
    icon: "🔵",
    range: "9.0 – 10.0",
    title: "SCALE READY",
    description: "Elite operational architecture across all 5 pillars. The system is calibrated for aggressive budget expansion.",
    primaryDirective: "AGGRESSIVE EXPANSION. Scale horizontal creatives and open multi-channel distribution."
  }
];

/**
 * Calculates Pillar Score (0 - 10) from raw checkpoint points (0 - 15)
 */
export function calculatePillarScore(scores: Record<string, number>): number {
  const points = Object.values(scores).reduce((sum, val) => sum + (Number(val) || 0), 0);
  const score = (points / 15) * 10;
  return Math.round(score * 10) / 10;
}

/**
 * Calculates Weighted Overall Ad Spend Health Score (0 - 10)
 */
export function calculateOverallHealthScore(pillarScores: {
  attract: number;
  convince: number;
  convert: number;
  track: number;
  scale: number;
}): number {
  const weighted = 
    (pillarScores.attract * 0.20) +
    (pillarScores.convince * 0.20) +
    (pillarScores.convert * 0.25) +
    (pillarScores.track * 0.20) +
    (pillarScores.scale * 0.15);
  
  return Math.round(weighted * 10) / 10;
}

/**
 * Classifies the overall score into one of the 5 diagnostic tiers
 */
export function getScorecardClassification(score: number): ScorecardClassification {
  if (score < 4.0) return SCORECARD_CLASSIFICATIONS[0];
  if (score < 6.0) return SCORECARD_CLASSIFICATIONS[1];
  if (score < 7.5) return SCORECARD_CLASSIFICATIONS[2];
  if (score < 9.0) return SCORECARD_CLASSIFICATIONS[3];
  return SCORECARD_CLASSIFICATIONS[4];
}

/**
 * Implication Engine: Evaluates pillar deficiencies and generates strategic directives
 */
export function generateImplications(pillarScores: {
  attract: number;
  convince: number;
  convert: number;
  track: number;
  scale: number;
}) {
  const actions: Array<{
    pillar: string;
    score: number;
    implication: string;
    solution: string;
    actionType: "STOP" | "FIX" | "TEST" | "SCALE";
    priority: "P1 (Urgent)" | "P2 (High)" | "P3 (Strategic)";
  }> = [];

  // Track check
  if (pillarScores.track < 5.0) {
    actions.push({
      pillar: "TRACK",
      score: pillarScores.track,
      implication: "Algorithmic optimization is blinded by broken attribution. Do NOT increase budget.",
      solution: "Implement Server-Side GTM + Meta CAPI + Offline Conversion Sync.",
      actionType: "STOP",
      priority: "P1 (Urgent)",
    });
  }

  // Convert check
  if (pillarScores.convert < 5.0) {
    actions.push({
      pillar: "CONVERT",
      score: pillarScores.convert,
      implication: "Paid visitors are dropping off before converting due to landing page friction.",
      solution: "Audit mobile load speeds and align ad-to-landing-page messaging continuity.",
      actionType: "FIX",
      priority: "P1 (Urgent)",
    });
  }

  // Attract check
  if (pillarScores.attract < 5.0) {
    actions.push({
      pillar: "ATTRACT",
      score: pillarScores.attract,
      implication: "You are paying for curiosity clicks and broad match search query spillover.",
      solution: "Quarantine negative keywords, tighten demographic exclusions, and fix search intent.",
      actionType: "FIX",
      priority: "P2 (High)",
    });
  }

  // Convince check
  if (pillarScores.convince < 5.0) {
    actions.push({
      pillar: "CONVINCE",
      score: pillarScores.convince,
      implication: "Targeting is acceptable, but messaging fails to communicate a differentiated offer.",
      solution: "Run a Creative Hook Sprint with high-conviction problem recognition angles.",
      actionType: "TEST",
      priority: "P2 (High)",
    });
  }

  // Scale check
  if (pillarScores.scale < 6.0 && pillarScores.track >= 6.0 && pillarScores.convert >= 6.0) {
    actions.push({
      pillar: "SCALE",
      score: pillarScores.scale,
      implication: "Core foundation is healthy; budget is trapped in fragmented underperforming ad sets.",
      solution: "Consolidate budget into top 20% evergreen winners and deploy structured creative testing sandbox.",
      actionType: "SCALE",
      priority: "P3 (Strategic)",
    });
  }

  return actions;
}
