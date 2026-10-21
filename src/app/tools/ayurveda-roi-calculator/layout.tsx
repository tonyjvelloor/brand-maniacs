import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ayurveda Patient Acquisition ROI Calculator",
  description: "Calculate your clinic's patient acquisition cost (CAC), lead volume, and marketing ROAS with our free interactive Ayurveda ROI calculator.",
  alternates: {
    canonical: "/tools/ayurveda-roi-calculator",
  },
  openGraph: {
    title: "Ayurveda Patient Acquisition ROI Calculator | The Brand Maniacs",
    description: "Calculate your clinic's CAC, lead volume, and marketing ROAS with our interactive calculator.",
    url: "https://www.thebrandmaniacs.online/tools/ayurveda-roi-calculator",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
