import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI Growth & Acquisition Audit",
  description: "Get a comprehensive audit of your brand's acquisition funnel, ad efficiency, and conversion architecture. Built by The Brand Maniacs.",
  alternates: {
    canonical: "/ai-growth-audit",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
