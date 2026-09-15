import { Metadata } from "next";
import { WebsiteDevLandingClient } from "./client";

export const metadata: Metadata = {
  title: "Website Development & Growth Design | The Brand Maniacs",
  description: "Don't just hire someone to build a website. Build a high-converting digital sales asset designed to turn visitors into revenue.",
  alternates: {
    canonical: "/website-development",
  },
};

export default function WebsiteDevelopmentPage() {
  return <WebsiteDevLandingClient />;
}
