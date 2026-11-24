export interface GuideFAQ {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: "Reputation & Local SEO" | "D2C Growth" | "Web Architecture" | "B2B & Industrial";
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  excerpt: string;
  author: {
    name: string;
    role: string;
    image: string;
    url: string;
  };
  faqs: GuideFAQ[];
}

export const guides: Guide[] = [
  {
    slug: "us-growth-marketing-agency-vs-global-growth-studio-cost-2026",
    title: "Hiring a Growth Marketing & Next.js Web Agency in the US (2026): $20k/Mo Retainers vs. Engineering-First Growth Studios",
    metaTitle: "US Growth Marketing & Next.js Web Agency Cost Guide (2026) | USD Pricing",
    metaDescription: "Comparing $15k–$25k/mo US marketing agency retainers vs. engineering-first global growth studios. Full 2026 breakdown of Next.js web development costs, CAPI attribution, and ROI.",
    category: "Web Architecture",
    readTime: "8 min read",
    publishedAt: "2026-11-21",
    updatedAt: "2026-11-21",
    excerpt: "Why US D2C and B2B SaaS founders in Austin, NYC, and SF are replacing bloated $20,000/month agency retainers with senior Next.js growth engineering studios.",
    author: {
      name: "Tony Joseph",
      role: "Chief Architect, The Brand Maniacs",
      image: "/images/tony-joseph.jpg",
      url: "https://www.thebrandmaniacs.online/about"
    },
    faqs: [
      {
        question: "How much does a growth marketing agency cost in the US in 2026?",
        answer: "In major US hubs (New York, San Francisco, Los Angeles, Austin), traditional full-service growth marketing agencies charge $12,000 to $25,000/month plus 10–15% of ad spend, while custom Next.js website builds cost $25,000 to $60,000. By partnering with a global engineering-first growth studio like The Brand Maniacs, US brands access senior Next.js engineers and growth architects for $3,500–$7,500 per web build and $2,500–$5,000/month ongoing."
      },
      {
        question: "Why do traditional $15k/mo US agency retainers fail seed and Series A brands?",
        answer: "Traditional agencies suffer from severe overhead bloat. When a US brand pays a $15,000/month retainer, over 65% goes toward Manhattan or Bay Area office rent, partner margins, and layers of non-technical account coordinators. Actual execution is delegated to junior staff juggling 10+ accounts, resulting in slow creative testing and zero engineering depth."
      },
      {
        question: "How does timezone collaboration work for US founders (EST, CST, PST)?",
        answer: "We operate with dedicated live overlap blocks during US Eastern (EST), Central (CST), and Pacific (PST) business hours for Slack collaboration and weekly sprint calls. Additionally, our 24-hour development cycle turns timezone differences into an advantage: landing page changes or creative iterations requested at 5 PM EST are coded, QA-tested, and live by 8 AM EST the next morning."
      },
      {
        question: "What technical stack do you deploy for US D2C and SaaS clients?",
        answer: "We build on Next.js App Router (React), edge-cached on Vercel/Cloudflare for sub-second (<1.2s LCP) speeds across North America, paired with Shopify Storefront API (for D2C), Server-to-Server (Meta CAPI, Google Enhanced Conversions, ChatGPT Ads S2S) attribution, and full Schema.org JSON-LD + llms.txt for AI search engines."
      }
    ]
  },
  {
    slug: "custom-website-development-cost-pune-guide-2026",
    title: "Custom Website Development Cost in Pune (2026): Agency vs Freelancer vs Next.js Systems",
    metaTitle: "Website Development Cost in Pune (2026 Price Guide)",
    metaDescription: "How much does a custom website cost in Pune? Full breakdown of pricing for WordPress vs custom Next.js web applications, agency vs freelancer costs, and ROI models.",
    category: "Web Architecture",
    readTime: "8 min read",
    publishedAt: "2026-11-04",
    updatedAt: "2026-11-04",
    excerpt: "Looking to build or redesign a business website in Pune? Here is an unfiltered 2026 breakdown of what web development actually costs—from ₹25,000 WordPress templates to ₹1.5L+ custom Next.js conversion engines.",
    author: {
      name: "Tony Joseph",
      role: "Chief Architect, The Brand Maniacs",
      image: "/images/tony-joseph.jpg",
      url: "https://www.thebrandmaniacs.online/about"
    },
    faqs: [
      {
        question: "How much does custom website development cost in Pune in 2026?",
        answer: "In Pune, website development costs typically range across three tiers: Basic WordPress template sites cost between ₹20,000 and ₹45,000; mid-tier agency builds range from ₹50,000 to ₹1,20,000; and high-performance custom Next.js web applications engineered for lead generation, SEO/AEO indexability, and sub-second speed range from ₹75,000 to ₹2,50,000+ depending on CRM integrations and custom UI architecture."
      },
      {
        question: "Why are cheap ₹15,000–₹25,000 WordPress websites risky for growing businesses?",
        answer: "Cheap websites rely on bloated pre-made templates and 20+ conflicting plugins. They suffer from 3–6 second mobile load times, frequent malware vulnerabilities, zero conversion architecture, and broken Google analytics tracking. You end up burning money on ads that bounce before the page loads."
      },
      {
        question: "What is the difference between a freelance web developer and a growth studio?",
        answer: "A freelance developer focuses purely on writing code or setting up a theme to match a visual mockup. A growth studio like The Brand Maniacs engineers the complete commercial asset: commercial positioning, direct-response copywriting, technical SEO and schema, sub-second edge hosting, and automated CRM lead capture."
      },
      {
        question: "How long does it take to build a custom Next.js business website?",
        answer: "A custom Next.js growth website takes between 3 to 5 weeks from kickoff to launch. This includes discovery, conversion copywriting, custom Figma UI/UX prototyping, full-stack React/Next.js engineering, mobile responsiveness testing, and Day 1 analytics setup."
      }
    ]
  },
  {
    slug: "ayurveda-clinic-patient-acquisition-digital-marketing-guide",
    title: "How Ayurveda Clinics Can Acquire 50+ Patients Every Month from Google (The 2026 Blueprint)",
    metaTitle: "Ayurveda Patient Acquisition: How to Get 50+ Patients/Mo from Google",
    metaDescription: "Step-by-step digital marketing blueprint for Ayurveda clinics and Panchakarma hospitals. Dominate Google Local 3-Pack, run compliant Google Ads, and automate WhatsApp bookings.",
    category: "Reputation & Local SEO",
    readTime: "9 min read",
    publishedAt: "2026-11-04",
    updatedAt: "2026-11-04",
    excerpt: "Stop wasting money on social media retainers and festival posters. Here is the exact system Karmanya Ayurveda used to increase patient volume by +120% and drop Cost Per Lead by 40%.",
    author: {
      name: "Tony Joseph",
      role: "Chief Architect, The Brand Maniacs",
      image: "/images/tony-joseph.jpg",
      url: "https://www.thebrandmaniacs.online/about"
    },
    faqs: [
      {
        question: "Why do Instagram and social media marketing fail for Ayurveda clinics?",
        answer: "Patients seeking treatment for chronic conditions like Panchakarma, sciatica, arthritis, or skin disorders search with high intent on Google when they are experiencing distress. They do not look for doctors on Instagram reels. Agencies charging monthly retainers for social media festival graphics generate vanity impressions with zero booked consultations."
      },
      {
        question: "How do you rank an Ayurveda clinic in the Google Maps Local 3-Pack?",
        answer: "Ranking in the Local 3-Pack requires: 1) Optimizing your primary Google Business Profile category (e.g. 'Ayurvedic clinic' or 'Alternative medicine practitioner'), 2) Embedding localized clinical procedure schema on your website, 3) Uploading geotagged treatment room and doctor photos, and 4) Maintaining consistent review velocity with patients mentioning specific treatments in their reviews."
      },
      {
        question: "How do you handle Google Ads healthcare restrictions for Ayurvedic medicine?",
        answer: "Google strictly enforces policies prohibiting unapproved pharmaceuticals and misleading curative claims. Compliant campaigns focus on doctor consultation bookings, holistic wellness evaluation, and authentic clinical credentials rather than guaranteeing cures for specific medical conditions."
      },
      {
        question: "What is an acceptable Patient Acquisition Cost (CAC) for Ayurveda clinics?",
        answer: "For qualified outpatient consultations, a healthy Cost Per Lead (CPL) is between ₹180 to ₹350, resulting in an acquired patient cost of ₹800 to ₹1,500. Given that high-ticket Panchakarma packages and chronic therapies range from ₹15,000 to ₹50,000+, this delivers a 10x+ ROAS on marketing spend."
      }
    ]
  },
  {
    slug: "b2b-lead-generation-manufacturing-industrial-companies",
    title: "B2B Lead Generation for Manufacturing & Industrial Companies: How to Get Global RFQs Online",
    metaTitle: "B2B Lead Generation for Manufacturing: How to Get Online Export RFQs",
    metaDescription: "Learn how manufacturing OEMs, machine shops, and industrial fabricators generate qualified domestic and export RFQs online without relying purely on trade shows.",
    category: "B2B & Industrial",
    readTime: "8 min read",
    publishedAt: "2026-11-04",
    updatedAt: "2026-11-04",
    excerpt: "Industrial procurement officers and design engineers search online before they ever walk a trade show. Here is how modern manufacturers build digital acquisition engines that produce verified purchase orders.",
    author: {
      name: "Tony Joseph",
      role: "Chief Architect, The Brand Maniacs",
      image: "/images/tony-joseph.jpg",
      url: "https://www.thebrandmaniacs.online/about"
    },
    faqs: [
      {
        question: "Why is relying solely on trade shows and exhibitions dangerous for manufacturers?",
        answer: "Trade shows cost ₹5L–₹25L+ per booth and happen once or twice a year. If competitors intercept procurement managers online during the remaining 360 days, your pipeline dries up. A digital inbound engine generates qualified Requests for Quotation (RFQs) 24/7/365 at a fraction of the cost."
      },
      {
        question: "How do industrial buyers search for manufacturers online?",
        answer: "Procurement managers and mechanical engineers search by technical specifications, part geometries, tolerances (e.g. 'CNC precision turning ISO 9001'), material grades (e.g. 'SS 316 sheet metal fabrication'), and OEM batch volume capabilities. If your website lacks technical spec sheets, you are invisible to them."
      },
      {
        question: "What is an RFQ conversion funnel for manufacturing?",
        answer: "An RFQ conversion funnel replaces the generic 'Contact Us' box with an interactive specification submitter: allowing engineers to upload CAD/STEP files, select batch quantities, specify material grades, and set target delivery dates. This pre-qualifies buyers and eliminates back-and-forth email delays."
      },
      {
        question: "Can an Indian manufacturer get export clients in the US, Germany, and UAE via digital marketing?",
        answer: "Yes. By optimizing programmatic search landing pages for international B2B buyer intent, earning technical backlinks, and configuring multi-region Google Search campaigns targeting overseas procurement managers, Indian manufacturers regularly close high-margin export contracts."
      }
    ]
  },
  {
    slug: "how-to-get-more-google-reviews-policy-compliant",
    title: "How to Get More Google Reviews in 2026 (Without Violating Google's Anti-Gating Policy)",
    metaTitle: "How to Get More Google Reviews in 2026 (Policy-Compliant Guide)",
    metaDescription: "Learn how to get more 5-star Google reviews using WhatsApp and QR codes without violating Google's review gating policies. Full breakdown by The Brand Maniacs.",
    category: "Reputation & Local SEO",
    readTime: "7 min read",
    publishedAt: "2026-10-25",
    updatedAt: "2026-10-25",
    excerpt: "Google penalizes review-gating schemes. Here is the exact, policy-compliant 3-step system local clinics, restaurants, and retail brands use to generate 50+ authentic 5-star Google reviews every month.",
    author: {
      name: "Tony Joseph",
      role: "Chief Architect, The Brand Maniacs",
      image: "/images/tony-joseph.jpg",
      url: "https://www.thebrandmaniacs.online/about"
    },
    faqs: [
      {
        question: "What is Google's review gating policy?",
        answer: "Google strictly prohibits 'review gating'—the practice of filtering customers by asking if their experience was positive or negative, and only sending positive customers to Google Maps while blocking negative ones. Under Google's Maps user-contributed content policies, all customers must be given the direct opportunity to leave public feedback."
      },
      {
        question: "How do you collect Google reviews without violating gating rules?",
        answer: "You comply with Google's policies by never blocking review links. Instead, you offer customers two clear, transparent options: 'Leave a Public Review on Google' or 'Send Private Feedback Directly to Management'. This empowers customers with grievances to get immediate internal resolution while allowing happy customers to proceed to Google Maps in one click."
      },
      {
        question: "How do QR codes for Google reviews work?",
        answer: "A smart Google review QR code directs customers straight to your Google Business Profile review modal on mobile, with 5 stars pre-selected. Placed on checkout counters, clinic prescription folders, or dining tables, it removes the friction of searching for the business manually."
      },
      {
        question: "How do more Google reviews impact the Google Local 3-Pack?",
        answer: "Google's local algorithm weighs review quantity, review velocity (how frequently new reviews appear), average star rating, and the specific keywords customers mention in their reviews. Consistent review velocity signals strong real-world engagement, boosting your ranking in local search."
      }
    ]
  },
  {
    slug: "nextjs-vs-shopify-vs-wordpress-d2c-growth",
    title: "Next.js vs Shopify vs WordPress: The 2026 Tech Stack Guide for Scaling D2C Brands",
    metaTitle: "Next.js vs Shopify vs WordPress for D2C (2026 Tech Guide)",
    metaDescription: "Comparing Next.js, Shopify, and WordPress for D2C e-commerce. Discover which platform delivers the highest conversion rate, fastest mobile speed, and lowest CAC.",
    category: "D2C Growth",
    readTime: "9 min read",
    publishedAt: "2026-10-25",
    updatedAt: "2026-10-25",
    excerpt: "Why traditional Shopify themes and WooCommerce plugins bleed ad spend at scale, and how modern D2C brands use Next.js edge landing pages to lift conversion rates by 25–40%.",
    author: {
      name: "Tony Joseph",
      role: "Chief Architect, The Brand Maniacs",
      image: "/images/tony-joseph.jpg",
      url: "https://www.thebrandmaniacs.online/about"
    },
    faqs: [
      {
        question: "Why do standard Shopify themes have slow load times?",
        answer: "Standard Shopify Liquid themes often slow down due to app bloat (review apps, currency converters, popups, tracking scripts) that load render-blocking JavaScript. On mobile devices, this often pushes Largest Contentful Paint (LCP) past 3.5 seconds, causing 30–50% of paid ad clicks to bounce before the product page renders."
      },
      {
        question: "When should a D2C brand consider Next.js?",
        answer: "A D2C brand should consider Next.js when monthly paid ad spend exceeds ₹5L–₹10L ($10k+) and the primary bottleneck is mobile bounce rate or PDP conversion rate. Next.js can power dedicated headless landing funnels that connect to Shopify's backend checkout, delivering sub-second load times (<1.2s) without migrating your catalog."
      },
      {
        question: "Can Next.js connect directly to Shopify checkout?",
        answer: "Yes. Using Shopify's Storefront API, Next.js handles the front-end product presentation, bundling, and landing page experience, and then hands off the cart seamlessly to Shopify's native, high-trust checkout (Shop Pay)."
      },
      {
        question: "Is WordPress / WooCommerce suitable for high-scale D2C brands?",
        answer: "WordPress/WooCommerce is cost-effective for small catalogs under 100 orders/month, but struggles under heavy concurrent ad traffic spikes (such as flash sales or viral TikTok/Meta ads), frequently suffering database lockouts, server crashes, and security vulnerabilities."
      }
    ]
  }
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
