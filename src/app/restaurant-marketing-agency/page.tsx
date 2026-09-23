import { Metadata } from "next";
import { RestaurantClient } from "./client";

export const metadata: Metadata = {
  title: "Restaurant Marketing Agency | The Brand Maniacs",
  description: "Restaurant Marketing That Fills Tables — Not Just Instagram Feeds. Discover our local discovery revenue engine.",
  alternates: {
    canonical: "/restaurant-marketing-agency",
  },
};

export default function RestaurantPage() {
  return <RestaurantClient />;
}
