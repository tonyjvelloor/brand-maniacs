import { Metadata } from "next";
import { RestaurantAuditClient } from "./client";

export const metadata: Metadata = {
  title: "Free Restaurant Visibility Audit",
  description: "Find out why nearby diners and corporate customers are choosing competing restaurants instead of yours. Diagnostic report by The Brand Maniacs.",
  alternates: {
    canonical: "/restaurant-visibility-audit",
  },
};

export default function RestaurantAuditPage() {
  return <RestaurantAuditClient />;
}
