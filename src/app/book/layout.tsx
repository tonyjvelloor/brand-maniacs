import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Growth Strategy Session",
  description: "Schedule a 30-minute growth architecture session with The Brand Maniacs. We diagnose your bottlenecks and engineer a custom acquisition system.",
  alternates: {
    canonical: "/book",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
