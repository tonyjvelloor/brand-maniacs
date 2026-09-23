import { Metadata } from "next";
import { AyurvedaClient } from "./client";

export const metadata: Metadata = {
  title: "Ayurveda Marketing Agency | Patient Acquisition Systems",
  description: "Digital Marketing for Ayurveda Clinics & Hospitals That Turns Search Demand Into Patients. See our Karmanya case study.",
  alternates: {
    canonical: "/ayurveda-marketing-agency",
  },
};

export default function AyurvedaPage() {
  return <AyurvedaClient />;
}
