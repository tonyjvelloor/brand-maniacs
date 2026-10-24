import { Metadata } from "next";
import { AyurvedaClient } from "./client";

export const metadata: Metadata = {
  title: "Ayurveda Marketing Agency — Digital Marketing for Clinics & Hospitals",
  description: "Specialized digital marketing agency for Ayurveda clinics, wellness centers, and hospitals. Local SEO, Google Ads, and patient acquisition systems.",
  alternates: {
    canonical: "/ayurveda-marketing-agency",
  },
  openGraph: {
    title: "Ayurveda Marketing Agency | The Brand Maniacs",
    description: "Digital marketing for Ayurveda clinics & wellness hospitals that turns search demand into booked patients. See our Karmanya Ayurveda case study.",
    url: "https://www.thebrandmaniacs.online/ayurveda-marketing-agency",
  },
};

const ayurvedaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.thebrandmaniacs.online/ayurveda-marketing-agency#service",
      "name": "Ayurveda Patient Acquisition OS",
      "provider": {
        "@id": "https://www.thebrandmaniacs.online/#organization"
      },
      "serviceType": "Healthcare Marketing & Patient Acquisition",
      "description": "Full-funnel digital marketing systems for Ayurveda clinics, wellness centers, and hospitals: Local SEO, Google Business Profile optimization, compliant Google Ads, and patient conversion funnels.",
      "areaServed": ["India", "Global"],
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.thebrandmaniacs.online/ayurveda-marketing-agency#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.thebrandmaniacs.online"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Ayurveda Marketing Agency",
          "item": "https://www.thebrandmaniacs.online/ayurveda-marketing-agency"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.thebrandmaniacs.online/ayurveda-marketing-agency#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do you help Ayurveda clinics get patients from Google Maps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We optimize your Google Business Profile (GBP) for high-intent local search queries like 'ayurvedic doctor near me', 'panchakarma center', and specific chronic condition treatments. This includes localized clinical citations, geotagged procedure updates, structured review collection via our ReviewBoost system, and optimizing your website's medical schema to rank in the Google Local 3-Pack."
          }
        },
        {
          "@type": "Question",
          "name": "Why do traditional social media agencies fail for Ayurveda doctors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Traditional agencies sell vanity social media retainers—posting generic festival greetings and herbal tips on Instagram. Patients in pain don't look for solutions on Instagram; they search on Google and ask AI engines. We build search-intent funnels, Google Local ads, and educational landing pages that capture patients actively seeking treatment for their specific condition."
          }
        },
        {
          "@type": "Question",
          "name": "What is a typical Patient Acquisition Cost (CAC) for Ayurveda clinics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Across our client base (such as Karmanya Ayurveda), cost-per-lead ranges from ₹180 to ₹350 for qualified consultation inquiries, resulting in an acquired patient cost of ₹800 to ₹1,500 depending on location and speciality. For high-ticket treatments like Panchakarma packages (₹15,000 to ₹50,000+), this generates a 10x+ ROAS. You can test your exact numbers using our free Ayurveda ROI Calculator."
          }
        },
        {
          "@type": "Question",
          "name": "How do you handle Google Ads healthcare policy restrictions for Ayurveda?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google maintains strict policies around medical claims and unapproved pharmaceuticals. We engineer policy-compliant ad copy and landing page architectures that focus on clinical consultations, authentic holistic practitioner credentials, and symptom alleviation rather than disallowed curative claims, avoiding account suspensions."
          }
        }
      ]
    }
  ]
};

export default function AyurvedaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ayurvedaSchema) }}
      />
      <AyurvedaClient />
    </>
  );
}
