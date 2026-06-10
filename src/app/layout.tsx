import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thebrandmaniacs.online'),
  title: {
    template: "%s",
    default: "The Brand Maniacs | AI-Powered Creative Growth Studio — Pune, India",
  },
  description: "We combine human strategy, AI-powered production (AIProdGen), and growth experiments to build brands people can't ignore.",
  openGraph: {
    type: "website",
    url: "https://www.thebrandmaniacs.online",
    title: "The Brand Maniacs | AI-Powered Creative Growth Studio — Pune, India",
    description: "We combine human strategy, AI-powered production (AIProdGen), and growth experiments to build brands people can't ignore.",
    siteName: "The Brand Maniacs",
    images: [{
      url: "https://www.thebrandmaniacs.online/images/og-image.jpg",
      width: 1200,
      height: 630,
    }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased selection:bg-accent-yellow selection:text-black min-h-screen flex flex-col font-mono text-foreground bg-background`}
      >
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
