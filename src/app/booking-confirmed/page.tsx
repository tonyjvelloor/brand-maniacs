import { Metadata } from "next";
import { BookingConfirmedClient } from "./client";

export const metadata: Metadata = {
  title: "Booking Confirmed | The Brand Maniacs",
  robots: "noindex, nofollow"
};

export default function BookingConfirmedPage() {
  return <BookingConfirmedClient />;
}
