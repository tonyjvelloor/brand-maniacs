import { Metadata } from "next";
import { WebsiteDevLandingClient } from "@/app/website-development/client";

// List of target areas in Pune
const TARGET_LOCATIONS = [
  "pune",
  "pimple-saudagar",
  "kalewadi",
  "pimpri",
  "moshi",
  "chikhali",
  "wakad",
  "hinjewadi",
  "baner",
  "balewadi",
  "koregaon-park",
  "kalyani-nagar",
  "viman-nagar",
  "magarpatta",
  "kharadi",
  "aundh"
];

// Helper to format slug to Title Case
function formatLocationName(slug: string): string {
  if (!slug) return "";
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function generateStaticParams() {
  return TARGET_LOCATIONS.map((location) => ({
    location,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ location: string }> }): Promise<Metadata> {
  const { location } = await params;
  const formattedLocation = formatLocationName(location);
  
  return {
    title: `Best Website Development Agency in ${formattedLocation} | The Brand Maniacs`,
    description: `Looking for the best website development agency in ${formattedLocation}? We build high-converting digital sales assets designed to turn visitors into revenue.`,
    alternates: {
      canonical: `/website-development-agency-in-${location}`,
    },
  };
}

export default async function DynamicWebsiteDevelopmentPage({ params }: { params: Promise<{ location: string }> }) {
  const { location } = await params;
  const formattedLocation = formatLocationName(location);
  
  return <WebsiteDevLandingClient locationName={formattedLocation} />;
}
