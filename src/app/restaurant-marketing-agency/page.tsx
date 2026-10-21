import { Metadata } from "next";
import { RestaurantClient } from "./client";

export const metadata: Metadata = {
  title: "Restaurant Marketing Agency — Fills Tables, Not Feeds",
  description: "Restaurant marketing systems that drive reservations, corporate events, and direct customer relationships without aggregator dependency.",
  alternates: {
    canonical: "/restaurant-marketing-agency",
  },
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.thebrandmaniacs.online/restaurant-marketing-agency#service",
      "name": "Restaurant Revenue Engine & Local Marketing",
      "provider": {
        "@id": "https://www.thebrandmaniacs.online/#organization"
      },
      "serviceType": "Hospitality & Restaurant Marketing",
      "description": "Full-stack revenue marketing for premium dining, rooftop restaurants, and food brands: Google Maps SEO, direct table reservations, creator marketing, and private dining acquisition.",
      "areaServed": ["India", "Global"],
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.thebrandmaniacs.online/restaurant-marketing-agency#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do you help restaurants fill tables without paying 25-30% aggregator commissions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aggregators like Swiggy and Zomato keep your customer data and charge 25–30% on every order. We build direct discovery assets: Google Maps Local 3-Pack domination, direct table reservation systems, WhatsApp VIP re-order workflows, and high-margin private dining acquisition funnels that you own 100%."
          }
        },
        {
          "@type": "Question",
          "name": "Why does typical food influencer marketing fail to drive real revenue?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most food influencers bring freebie-seekers who only visit for a single discount and never return. We replace random influencer barters with our Creator Scoring Matrix: partnering only with creators whose audience demographic matches your exact dining ticket size, and combining creator assets with localized Meta Retargeting to convert footfall repeatedly."
          }
        },
        {
          "@type": "Question",
          "name": "How does Google Maps Local SEO impact restaurant footfall?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Over 70% of diners search 'best rooftop restaurant near me', 'family dining', or specific cuisines on Google Maps within 2 hours of dining out. By optimizing your Google Business Profile categories, menu schema, geotagged dish photos, and deploying automated ReviewBoost collection, we position your restaurant in the top 3 recommendations."
          }
        },
        {
          "@type": "Question",
          "name": "Can you generate corporate events and private party bookings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Corporate bookings, team dinners, and banquet celebrations carry high ticket values (₹50,000 to ₹5,00,000+). We run targeted B2B Google Search and LinkedIn campaigns reaching HR managers and executive assistants searching for team party venues within your 5–10km radius."
          }
        }
      ]
    }
  ]
};

export default function RestaurantPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <RestaurantClient />
    </>
  );
}
