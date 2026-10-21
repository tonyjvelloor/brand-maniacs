import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creator Powerhouse — High-ROI Influencer & UGC Systems",
  description: "Data-driven influencer and UGC marketing. We score creators by audience authenticity and track direct revenue attribution.",
  alternates: {
    canonical: "/creator-powerhouse",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
