/**
 * THE ADS RESCUE SCORECARD SYSTEM
 * 5 Pillars × 5 Checks = 25 Diagnostic Checkpoints
 * 
 * Simple on the surface. Smart underneath.
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
  simpleQuestion: string;
  simpleDescription: string;
  weightPercent: number;
  weightMultiplier: number;
  color: string;
  checkpoints: ScorecardCheckpoint[];
  implication: {
    simpleSummary: string;
    whatWeInvestigate: string[];
    recommendedSolution: string;
  };
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
    tagline: "Are you reaching the right people?",
    simpleQuestion: "Are you reaching the right people?",
    simpleDescription: "We check whether your ads are attracting people who are actually likely to become customers.",
    weightPercent: 20,
    weightMultiplier: 0.20,
    color: "#FF2A00",
    implication: {
      simpleSummary: "The biggest problem may be who you're reaching. Your ads could be attracting people who are interested enough to click, but unlikely to ever buy.",
      whatWeInvestigate: [
        "Who is currently seeing your ads",
        "What people are actually searching for before clicking",
        "Which audience segments are responding",
        "Whether you're paying for irrelevant curiosity traffic"
      ],
      recommendedSolution: "Refine audience targeting & eliminate non-buyer search queries."
    },
    checkpoints: [
      {
        id: "attract_audience_quality",
        letter: "A",
        name: "Targeting & Audience Quality",
        question: "Are we reaching the right customer profile?",
        description: "Checking if demographic and interest settings reach genuine buyers.",
        weight: 3,
      },
      {
        id: "attract_traffic_intent",
        letter: "B",
        name: "Traffic Intent",
        question: "Are people actively looking for a solution or just browsing?",
        description: "Checking commercial search intent vs casual social browsing.",
        weight: 3,
      },
      {
        id: "attract_search_relevance",
        letter: "C",
        name: "Search Terms & Relevance",
        question: "Are queries relevant and negative keyword lists populated?",
        description: "Ensuring you aren't paying for irrelevant search terms on Google.",
        weight: 3,
      },
      {
        id: "attract_message_market_match",
        letter: "D",
        name: "Message-to-Market Match",
        question: "Does the ad speak to the actual problem the buyer cares about?",
        description: "Checking alignment between customer pain points and ad copy.",
        weight: 3,
      },
      {
        id: "attract_click_quality",
        letter: "E",
        name: "Click Quality",
        question: "Are people clicking with intent or curiosity?",
        description: "Checking bounce rate within the first 3 seconds of visiting.",
        weight: 3,
      }
    ]
  },
  {
    id: "convince",
    number: "02",
    name: "CONVINCE",
    tagline: "Are your ads giving people a reason to act?",
    simpleQuestion: "Are your ads giving people a reason to act?",
    simpleDescription: "We check your message, offer, and creative to understand whether they are compelling enough to win customers.",
    weightPercent: 20,
    weightMultiplier: 0.20,
    color: "#FFE600",
    implication: {
      simpleSummary: "The biggest problem may be your messaging. People see your ads, but your offer doesn't give them a clear, compelling reason to choose you.",
      whatWeInvestigate: [
        "Whether your ad clearly explains what you sell in 3 seconds",
        "If your offer stands out from competitors",
        "Whether ad visuals catch the eye of the right customer",
        "If your call-to-action is clear and easy to follow"
      ],
      recommendedSolution: "Clarify your offer messaging and test high-conviction ad creative."
    },
    checkpoints: [
      {
        id: "convince_problem_recognition",
        letter: "A",
        name: "Problem Recognition",
        question: "Does the prospect immediately recognize their specific situation?",
        description: "Checking if your ad hook stops the scroll and speaks to their problem.",
        weight: 3,
      },
      {
        id: "convince_offer_clarity",
        letter: "B",
        name: "Offer Clarity",
        question: "Can they understand what you offer within 3 seconds?",
        description: "Checking if pricing, deliverables, and benefits are immediately clear.",
        weight: 3,
      },
      {
        id: "convince_differentiation",
        letter: "C",
        name: "Differentiation",
        question: "Why should they choose you over alternatives?",
        description: "Checking your unique value proposition and proof elements.",
        weight: 3,
      },
      {
        id: "convince_creative_match",
        letter: "D",
        name: "Creative Match",
        question: "Does the ad format match customer expectations?",
        description: "Evaluating video, carousel, and image engagement quality.",
        weight: 3,
      },
      {
        id: "convince_cta_strength",
        letter: "E",
        name: "Call to Action",
        question: "Is the next step clear and logical?",
        description: "Ensuring the call to action makes sense for cold prospects.",
        weight: 3,
      }
    ]
  },
  {
    id: "convert",
    number: "03",
    name: "CONVERT",
    tagline: "What happens after someone clicks?",
    simpleQuestion: "What happens after someone clicks?",
    simpleDescription: "We look for friction on your landing page, lead forms, or checkout where potential buyers may be dropping off.",
    weightPercent: 25,
    weightMultiplier: 0.25,
    color: "#9333EA",
    implication: {
      simpleSummary: "The biggest problem is happening after the click. You are paying to bring people to your page, but something in the experience is turning them away.",
      whatWeInvestigate: [
        "How fast your page loads on mobile phones",
        "Whether your landing page headline matches the ad promise",
        "If forms or checkout steps are too long or confusing",
        "How quickly inquiries are followed up by your sales team"
      ],
      recommendedSolution: "Streamline mobile landing page and remove conversion friction."
    },
    checkpoints: [
      {
        id: "convert_destination_relevance",
        letter: "A",
        name: "Page Relevance",
        question: "Does the page match the exact promise made in the ad?",
        description: "Checking continuity between ad hook and landing page headline.",
        weight: 3,
      },
      {
        id: "convert_friction",
        letter: "B",
        name: "Conversion Friction",
        question: "How easy is it to enquire, book, or buy?",
        description: "Checking form fields, buttons, and checkout clarity.",
        weight: 3,
      },
      {
        id: "convert_mobile_ux",
        letter: "C",
        name: "Mobile Experience",
        question: "Does the page load fast and work smoothly on mobile phones?",
        description: "Evaluating load times and mobile design.",
        weight: 3,
      },
      {
        id: "convert_lead_flow",
        letter: "D",
        name: "Post-Click Flow",
        question: "What happens immediately after someone submits their info?",
        description: "Checking instant confirmation and booking steps.",
        weight: 3,
      },
      {
        id: "convert_sales_followup",
        letter: "E",
        name: "Sales Follow-Up",
        question: "Are new leads contacted quickly and handled properly?",
        description: "Reviewing speed-to-lead and follow-up communication.",
        weight: 3,
      }
    ]
  },
  {
    id: "track",
    number: "04",
    name: "TRACK",
    tagline: "Do you know what's actually working?",
    simpleQuestion: "Do you know what's actually working?",
    simpleDescription: "We check whether your ad accounts and analytics clearly show which campaigns are generating real revenue.",
    weightPercent: 20,
    weightMultiplier: 0.20,
    color: "#00E5FF",
    implication: {
      simpleSummary: "The biggest problem is tracking blindness. Your ad platform is guessing what works because it isn't receiving accurate data on which leads turn into paying customers.",
      whatWeInvestigate: [
        "Whether tracking pixels and tags are recording actual sales",
        "If the ad manager is reporting false or duplicated conversions",
        "Whether you can reconcile ad data with your bank account",
        "If the ad algorithm gets feedback on qualified buyers"
      ],
      recommendedSolution: "Fix tracking tags and feed verified customer data back to ad platforms."
    },
    checkpoints: [
      {
        id: "track_conversion_tracking",
        letter: "A",
        name: "Meaningful Conversions",
        question: "Are meaningful actions being tracked (sales/qualified leads)?",
        description: "Checking if tracking focuses on revenue rather than pageviews.",
        weight: 3,
      },
      {
        id: "track_pixel_tag_health",
        letter: "B",
        name: "Pixel & Tag Setup",
        question: "Are Meta Pixel and Google tags recording correctly?",
        description: "Checking event firing and deduplication accuracy.",
        weight: 3,
      },
      {
        id: "track_lead_quality_feedback",
        letter: "C",
        name: "Lead Quality Feedback",
        question: "Does the ad platform know which leads become buyers?",
        description: "Reviewing feedback loops that train the algorithm.",
        weight: 3,
      },
      {
        id: "track_attribution_visibility",
        letter: "D",
        name: "Attribution Visibility",
        question: "Can you see where your customers actually come from?",
        description: "Checking multi-touch and campaign attribution clarity.",
        weight: 3,
      },
      {
        id: "track_reporting_quality",
        letter: "E",
        name: "Reporting Clarity",
        question: "Can you make confident decisions from your ad reports?",
        description: "Ensuring numbers reflect real business growth.",
        weight: 3,
      }
    ]
  },
  {
    id: "scale",
    number: "05",
    name: "SCALE",
    tagline: "Is it safe to spend more money?",
    simpleQuestion: "Is it safe to spend more money?",
    simpleDescription: "We check whether your current advertising system is stable enough to increase budget without driving up costs or wasting money.",
    weightPercent: 15,
    weightMultiplier: 0.15,
    color: "#10B981",
    implication: {
      simpleSummary: "Your advertising isn't ready to scale yet. Increasing your budget right now will likely just increase your costs without bringing in more customers.",
      whatWeInvestigate: [
        "Where your ad budget is currently being distributed",
        "Whether you have a systematic way to test new ads",
        "If you know your exact acceptable cost per customer",
        "Whether your operations can handle more leads comfortably"
      ],
      recommendedSolution: "Fix lower-funnel leaks before increasing your daily ad budget."
    },
    checkpoints: [
      {
        id: "scale_budget_allocation",
        letter: "A",
        name: "Budget Allocation",
        question: "Is budget focused on proven, winning campaigns?",
        description: "Checking if budget is concentrated on top performers.",
        weight: 3,
      },
      {
        id: "scale_testing_system",
        letter: "B",
        name: "Testing Routine",
        question: "Is there a routine for testing new hooks and audiences?",
        description: "Reviewing testing frequency and structure.",
        weight: 3,
      },
      {
        id: "scale_winning_identification",
        letter: "C",
        name: "Winning Ads",
        question: "Do you know with confidence which ad generates the most profit?",
        description: "Checking data behind your best-performing creatives.",
        weight: 3,
      },
      {
        id: "scale_unit_economics",
        letter: "D",
        name: "Unit Economics",
        question: "Are your target customer acquisition costs clearly defined?",
        description: "Ensuring ad costs align with profit margins.",
        weight: 3,
      },
      {
        id: "scale_operational_scalability",
        letter: "E",
        name: "Delivery Capacity",
        question: "Can your business handle 2x to 3x more customers smoothly?",
        description: "Checking sales and fulfillment readiness for growth.",
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
    title: "Needs Immediate Attention",
    description: "Your advertising has serious problems that should be fixed before spending more money.",
    primaryDirective: "Stop increasing spend. Fix tracking, targeting, and landing page foundation first."
  },
  {
    tier: "LEAKING",
    color: "#F97316",
    bgBadge: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    borderBadge: "border-orange-500",
    icon: "🟠",
    range: "4.0 – 5.9",
    title: "Money May Be Leaking",
    description: "Some things are working, but there are clear areas where your budget may be getting wasted.",
    primaryDirective: "Plug your top 3 leaks. Shift budget away from poor audiences to what actually converts."
  },
  {
    tier: "UNSTABLE",
    color: "#EAB308",
    bgBadge: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    borderBadge: "border-yellow-500",
    icon: "🟡",
    range: "6.0 – 7.4",
    title: "Working, But Needs Improvement",
    description: "Your advertising has a foundation, but there are important gaps to fix before scaling safely.",
    primaryDirective: "Stabilize your ad results. Refine your message and eliminate wasted audience overlap."
  },
  {
    tier: "HEALTHY",
    color: "#10B981",
    bgBadge: "bg-green-500/10 text-green-400 border-green-500/30",
    borderBadge: "border-green-500",
    icon: "🟢",
    range: "7.5 – 8.9",
    title: "Healthy",
    description: "Your advertising is performing well, with good opportunities to improve and scale further.",
    primaryDirective: "Controlled scale. Expand winning ad messages and test higher budget targets."
  },
  {
    tier: "SCALE_READY",
    color: "#3B82F6",
    bgBadge: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    borderBadge: "border-blue-500",
    icon: "🔵",
    range: "9.0 – 10.0",
    title: "Ready to Scale",
    description: "The foundation looks strong enough to carefully and confidently increase your investment.",
    primaryDirective: "Aggressive growth. Scale proven campaigns and expand to new channels."
  }
];

export function calculatePillarScore(scores: Record<string, number>): number {
  const points = Object.values(scores).reduce((sum, val) => sum + (Number(val) || 0), 0);
  const score = (points / 15) * 10;
  return Math.round(score * 10) / 10;
}

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

export function getScorecardClassification(score: number): ScorecardClassification {
  if (score < 4.0) return SCORECARD_CLASSIFICATIONS[0];
  if (score < 6.0) return SCORECARD_CLASSIFICATIONS[1];
  if (score < 7.5) return SCORECARD_CLASSIFICATIONS[2];
  if (score < 9.0) return SCORECARD_CLASSIFICATIONS[3];
  return SCORECARD_CLASSIFICATIONS[4];
}

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
    priority: string;
  }> = [];

  // Track
  if (pillarScores.track < 5.0) {
    actions.push({
      pillar: "TRACK",
      score: pillarScores.track,
      implication: "Your ad platform is guessing what works because tracking isn't reporting real sales accurately.",
      solution: "Fix tracking tags so you know exactly which campaigns drive real revenue.",
      actionType: "STOP",
      priority: "Fix First",
    });
  }

  // Convert
  if (pillarScores.convert < 5.0) {
    actions.push({
      pillar: "CONVERT",
      score: pillarScores.convert,
      implication: "People are clicking your ads but dropping off on your landing page before taking action.",
      solution: "Speed up your mobile page and make inquiring or buying effortless.",
      actionType: "FIX",
      priority: "Fix First",
    });
  }

  // Attract
  if (pillarScores.attract < 5.0) {
    actions.push({
      pillar: "ATTRACT",
      score: pillarScores.attract,
      implication: "Your ads are likely reaching people who click out of curiosity rather than real buying intent.",
      solution: "Refine targeting to focus exclusively on people who might actually purchase.",
      actionType: "FIX",
      priority: "Important",
    });
  }

  // Convince
  if (pillarScores.convince < 5.0) {
    actions.push({
      pillar: "CONVINCE",
      score: pillarScores.convince,
      implication: "Your ad messaging doesn't clearly explain why someone should choose your business.",
      solution: "Clarify your offer and test ad messages that highlight your key advantages.",
      actionType: "TEST",
      priority: "Important",
    });
  }

  // Scale
  if (pillarScores.scale < 6.0 && pillarScores.track >= 6.0 && pillarScores.convert >= 6.0) {
    actions.push({
      pillar: "SCALE",
      score: pillarScores.scale,
      implication: "Your foundation is working, but budget is spread across too many mediocre ads.",
      solution: "Concentrate budget into your best-performing ads and test new angles systematically.",
      actionType: "SCALE",
      priority: "Next Step",
    });
  }

  return actions;
}
