export interface GuideFAQ {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: "Reputation & Local SEO" | "D2C Growth" | "Web Architecture";
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
