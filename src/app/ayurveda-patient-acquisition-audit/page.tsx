import { Metadata } from "next";
import { AyurvedaAuditClient } from "./client";

export const metadata: Metadata = {
  title: "Free Ayurveda Patient Acquisition Audit | The Brand Maniacs",
  description: "See exactly where your clinic is losing potential patients across Google, Maps, Ads, Website & Reviews.",
};

export default function AyurvedaAuditPage() {
  return <AyurvedaAuditClient />;
}
