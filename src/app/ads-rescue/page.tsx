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
          __html: JSON.stringify({
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
          })
        }}
      />
      <AdsRescueLandingClient />
    </>
  );
}
