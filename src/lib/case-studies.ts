export interface Metric {
  label: string;
  value: string;
  improvement: boolean;
  width: string;
}

export interface CaseStudy {
  slug: string;
  client: string;
  category: string;
  accentColor: string;
  accentText: string;
  problem: string;
  systemBuilt: string[];
  metrics: Metric[];
  outcome: string;
  isTech?: boolean;
  seoTitle: string;
  seoDescription: string;
}

export const caseStudies: CaseStudy[] = [
  {
      slug: "tbm-reviews",
      client: "TBM Reviews Platform",
      category: "B2B SaaS · Reputation Management",
      accentColor: "bg-accent-blue",
      accentText: "text-white",
      problem: "Brands were losing potential customers because they couldn't systematically capture, manage, and display social proof. Existing review platforms were overly complex and expensive.",
      systemBuilt: [
          "Engineered a streamlined digital product at reviews.thebrandmaniacs.online",
          "Built automated review capture funnels to intercept feedback",
          "Developed an SEO-optimized widget system for displaying social proof",
          "Created a scalable, multi-tenant architecture for brand integration"
      ],
      metrics: [
          { label: "Trust Conversion", value: "+45%", improvement: true, width: "85%" },
          { label: "Review Capture Rate", value: "+300%", improvement: true, width: "100%" }
      ],
      outcome: "A standalone digital product (reviews.thebrandmaniacs.online) that perfectly demonstrates our capability to build growth infrastructure solving fundamental behavioral science problems.",
      isTech: true,
      seoTitle: "TBM Reviews Platform Case Study | Reputation Management Systems",
      seoDescription: "How we engineered a streamlined digital product to automate review capture and boost trust conversions by 45% for brands."
  },
  {
      slug: "couponhub",
      client: "CouponHub.store",
      category: "Consumer Marketplace · Savings Platform",
      accentColor: "bg-foreground",
      accentText: "text-background",
      problem: "Consumers were frustrated by outdated coupons, intrusive advertising, and unreliable savings platforms. The objective was to build a premium destination where shoppers could quickly discover verified deals from leading brands.",
      systemBuilt: [
          "Designed and developed a high-performance platform using Next.js",
          "Built a programmatic SEO-first architecture for long-term organic growth",
          "Created a premium dark-mode shopping experience",
          "Engineered a scalable foundation for automated affiliate commerce",
      ],
      metrics: [
          { label: "Platform Speed (LCP)", value: "< 1.2s", improvement: true, width: "95%" },
          { label: "SEO Health Score", value: "100/100", improvement: true, width: "100%" }
      ],
      outcome: "CouponHub demonstrates our ability to take a product from concept to launch by combining product strategy, branding, UX, engineering, SEO, and growth infrastructure.",
      isTech: true,
      seoTitle: "CouponHub Next.js Platform Architecture | Performance Marketing SEO",
      seoDescription: "How we built a high-performance programmatic SEO platform and consumer marketplace achieving 100/100 Core Web Vitals."
  },
  {
      slug: "karmanya-ayurveda",
      client: "Karmanya Ayurveda",
      category: "Wellness · Ayurveda",
      accentColor: "bg-accent-yellow",
      accentText: "text-black",
      problem: "A traditional Ayurveda clinic with deep clinical expertise but zero digital presence. They were competing on discounts in a market where trust is the only currency that matters.",
      systemBuilt: [
          "Built an educational content system combining doctor authority and patient psychology",
          "Created landing pages that spoke the language of the patient, not the clinic",
          "Ran targeted campaigns to high-intent wellness audiences",
          "Developed video content that showed treatment outcomes, not just testimonials",
      ],
      metrics: [
          { label: "Patient Volume", value: "+120%", improvement: true, width: "100%" },
          { label: "Cost Per Consultation", value: "-40%", improvement: true, width: "60%" }
      ],
      outcome: "Shifted positioning from discount-clinic to premium wellness destination. Patient volume grew consistently month-over-month without a single discount offered. Trust scales. Discounts don't.",
      seoTitle: "Ayurveda Digital Marketing Case Study | Karmanya Ayurveda Growth",
      seoDescription: "See how we increased patient volume by 120% and reduced acquisition costs by 40% for Karmanya Ayurveda using our proprietary Growth System."
  },
  {
      slug: "aiprodgen-experiment",
      client: "AIProdGen Experiment",
      category: "Technology · Internal IP",
      accentColor: "bg-background",
      accentText: "text-foreground",
      problem: "Product shoots are slow and expensive (₹50,000+). D2C brands hesitate to test radical creative angles because the cost of failure is too high.",
      systemBuilt: [
          "Ingested a single flat product photo of a sneaker into AIProdGen",
          "Engineered prompts to place the product in 20 radically different environments (ice blocks, neon streets, floating in water)",
          "Generated high-fidelity, ad-ready assets maintaining exact brand lighting",
          "Built a workflow that completed the entire process in under 45 minutes",
      ],
      metrics: [
          { label: "Production Cost", value: "-95%", improvement: true, width: "95%" },
          { label: "Creative Output", value: "20x", improvement: true, width: "100%" }
      ],
      outcome: "Replaced a ₹50,000 physical shoot with infinite creative variations. Allowed the brand to run a 20-variant creative testing sprint at a fraction of the cost, finding winning angles that would have never been tested physically.",
      isTech: true,
      seoTitle: "AI Product Photography Case Study | AIProdGen Creative Testing",
      seoDescription: "How we cut creative production costs by 95% and generated 20x output using AI-powered workflow automation for a D2C fashion brand."
  },
  {
      slug: "d2c-fashion-brand",
      client: "D2C Fashion Brand",
      category: "Fashion · E-Commerce",
      accentColor: "bg-accent-red",
      accentText: "text-white",
      problem: "High traffic, terrible conversions. ₹8L/month in ad spend producing a 0.8% conversion rate. Every month felt like gambling with the founders' money.",
      systemBuilt: [
          "Repositioned as 'slow fashion for people who own their style'",
          "Rebuilt landing pages around brand story, not just product features",
          "Ran 40+ creative variants over 30 days to find what actually stopped the scroll",
          "Cut underperforming ad spend, doubled down on 3 winning creative concepts",
      ],
      metrics: [
          { label: "ROAS", value: "1.4x → 4.8x", improvement: true, width: "80%" },
          { label: "CAC", value: "-45%", improvement: true, width: "45%" }
      ],
      outcome: "ROAS moved from 1.4x to 4.8x over 8 months. Revenue scaled significantly. CAC dropped by 45%. Differentiation is always a conversion problem in disguise.",
      seoTitle: "D2C Fashion Growth Marketing Case Study | ROAS 1.4x to 4.8x",
      seoDescription: "How we fixed a 0.8% conversion rate and lowered CAC by 45% for a D2C fashion brand using creative testing and landing page engineering."
  },
  {
      slug: "b2b-saas-linkedin",
      client: "B2B SaaS Founder",
      category: "SaaS · LinkedIn Authority",
      accentColor: "bg-accent-blue",
      accentText: "text-white",
      problem: "Excellent product. Completely invisible. No LinkedIn presence, a 4-month average sales cycle, and 100% dependence on outbound cold outreach that was getting harder every quarter.",
      systemBuilt: [
          "Built a 90-day founder LinkedIn content strategy around real insight, not self-promotion",
          "Identified 3 trends in their niche and created content that shaped the conversation",
          "Built a weekly publishing system that ran with minimal founder time",
          "Created a content-to-demo pipeline that nurtured cold audiences to warm leads",
      ],
      metrics: [
          { label: "LinkedIn Following", value: "12K → 61K", improvement: true, width: "100%" },
          { label: "Inbound Demos", value: "3x", improvement: true, width: "75%" }
      ],
      outcome: "LinkedIn following grew from 12,000 to 61,000. Inbound demo requests tripled. Sales cycle compressed to 6 weeks. Authority compounds.",
      seoTitle: "B2B SaaS LinkedIn Strategy Case Study | 12K to 61K Followers",
      seoDescription: "How we built a founder-led LinkedIn inbound funnel that tripled demos and compressed a 4-month B2B SaaS sales cycle to 6 weeks."
  },
];
