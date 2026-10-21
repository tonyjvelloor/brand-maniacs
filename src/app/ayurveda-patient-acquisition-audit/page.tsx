import { Metadata } from "next";
import { AyurvedaAuditClient } from "./client";

export const metadata: Metadata = {
  title: "Free Ayurveda Patient Acquisition Audit",
  description: "See exactly where your clinic is losing potential patients across Google, Maps, Ads, Website & Reviews. Comprehensive audit by The Brand Maniacs.",
  alternates: {
    canonical: "/ayurveda-patient-acquisition-audit",
  },
};

export default function AyurvedaAuditPage() {
  return <AyurvedaAuditClient />;
}
