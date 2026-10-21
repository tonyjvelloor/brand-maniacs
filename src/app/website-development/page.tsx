import { Metadata } from "next";
import { WebsiteDevLandingClient } from "./client";

export const metadata: Metadata = {
  title: "Website Development & Growth Design",
  description: "Don't just hire someone to build a website. Build a high-converting digital sales asset and growth system designed to turn visitors into revenue.",
  alternates: {
    canonical: "/website-development",
  },
};

const websiteDevSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.thebrandmaniacs.online/website-development#service",
      "name": "Custom Website Development & Growth Design",
      "provider": {
        "@id": "https://www.thebrandmaniacs.online/#organization"
      },
      "serviceType": "Web Development",
      "description": "High-performance custom web development built on Next.js, React, and modern edge infrastructure. Engineered for conversion, SEO/AEO indexability, and revenue generation.",
      "areaServed": ["Pune", "Mumbai", "Bangalore", "Delhi", "Global"],
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.thebrandmaniacs.online/website-development#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How is The Brand Maniacs different from a traditional web design agency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Traditional agencies build digital brochures—pretty pages with no commercial strategy, slow load speeds, and generic templates. The Brand Maniacs engineers full Growth Systems. Every website we build includes Day 1 conversion architecture, SEO/AEO metadata and schema, sub-second Next.js edge performance, and closed-loop analytics tracking to directly generate inbound leads and revenue."
          }
        },
        {
          "@type": "Question",
          "name": "Why do you build on Next.js and React instead of WordPress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "WordPress sites rely on heavy plugins, have slow load times (2–5s), and frequently break or suffer security vulnerabilities. We build with Next.js (React) on modern edge infrastructure. This delivers sub-second load times (< 1.2s LCP), 100/100 Core Web Vitals, enterprise security, and seamless programmatic SEO capabilities that rank higher on Google."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to design and launch a custom website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A complete high-converting Growth Website typically takes 3 to 5 weeks from initial discovery to deployment. This includes positioning strategy, custom UI/UX design, full-stack Next.js development, responsive mobile testing, and analytics configuration."
          }
        },
        {
          "@type": "Question",
          "name": "Will my website be optimized for SEO and Google AI Overviews on Day 1?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every build comes with our Day 1 Growth Stack installed: structured JSON-LD schema markup, optimized meta tags, clean semantic HTML hierarchy, sitemap generation, OpenGraph social cards, and fast Core Web Vitals to maximize indexation across Google Search, ChatGPT Search, and Perplexity."
          }
        },
        {
          "@type": "Question",
          "name": "Do you build websites for businesses outside Pune or internationally?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. While our headquarters and engineering team are in Pune, India, we build growth systems and digital products for clients across India (Mumbai, Bangalore, Delhi) and internationally (UAE, UK, USA, Australia)."
          }
        }
      ]
    }
  ]
};

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteDevSchema) }}
      />
      <WebsiteDevLandingClient />
    </>
  );
}
