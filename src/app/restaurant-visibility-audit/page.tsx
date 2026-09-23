import { Metadata } from "next";
import { RestaurantAuditClient } from "./client";

export const metadata: Metadata = {
  title: "Free Restaurant Visibility Audit | The Brand Maniacs",
  description: "Find out why nearby customers are choosing competing restaurants instead of yours.",
};

export default function RestaurantAuditPage() {
  return <RestaurantAuditClient />;
}
