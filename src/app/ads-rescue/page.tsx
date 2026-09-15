import type { Metadata } from "next";
import { AdsRescueLandingClient } from "./client";

export const metadata: Metadata = {
  title: "ADS RESCUE SESSION | Stop Leaking Ad Budget — The Brand Maniacs",
  description: "A deep-dive forensic diagnostic for businesses spending ₹25,000+ per month on Google or Meta Ads. Find out what went wrong with the money you've already spent.",
  openGraph: {
    title: "ADS RESCUE SESSION | Google & Meta Ads Performance Diagnostic",
    description: "Before you spend another ₹10,000 on ads, find out why your campaigns aren't producing the leads and revenue they should. Founding launch price: ₹2,499.",
    url: "https://www.thebrandmaniacs.online/ads-rescue",
    siteName: "The Brand Maniacs",
    images: [
      {
        url: "https://www.thebrandmaniacs.online/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brand Maniacs Ads Rescue Diagnostic Session",
      },
    ],
  },
};

export default function AdsRescuePage() {
  return (
    <>
      {/* Structured Schema.org Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Ads Rescue Session — Google & Meta Ads Diagnostic",
              "image": "https://www.thebrandmaniacs.online/images/og-image.jpg",
              "description": "A comprehensive 60-minute diagnostic session for businesses spending ₹25,000+/month on Google or Meta Ads to identify tracking, targeting, spend, creative, intent, and funnel leaks.",
              "brand": {
                "@type": "Brand",
                "name": "The Brand Maniacs"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://www.thebrandmaniacs.online/ads-rescue",
                "priceCurrency": "INR",
                "price": "2499",
                "priceValidUntil": "2026-12-31",
                "availability": "https://schema.org/InStock"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What happens after I pay?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You are immediately redirected to our secure onboarding page to complete a 3-minute questionnaire about your business and ad setup. You'll also receive an instant calendar booking link to pick a convenient date & time for your 60-minute strategy session."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to run both Google and Meta Ads?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. We analyse the platform you're currently using. Whether you run only Meta (Facebook/Instagram), only Google Ads (Search/Shopping/PMax/YouTube), or both, we tailor the diagnostic to your exact stack."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to give full access to my ad account?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. We request only read-only / viewer level access so that our team can check all of the details. We never ask for admin credentials or billing control."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will you manage my ads after the session?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Not automatically. The Ads Rescue Session is a standalone diagnostic engineered to give you clarity and an actionable roadmap without any retainer obligation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What if I need help implementing the recommendations?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If we both agree Brand Maniacs is the right partner for execution, we can discuss implementation sprints or ongoing growth engineering separately after the diagnostic."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long is the session?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Approximately 60 minutes. We jump straight into the technical findings, screen-share the exact leaks, and build your prioritized fix roadmap together."
                  }
                }
              ]
            }
          ])
        }}
      />
      <AdsRescueLandingClient />
    </>
  );
}
