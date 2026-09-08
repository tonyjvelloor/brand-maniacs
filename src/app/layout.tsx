import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: 'swap',
});

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { PostHogProvider } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thebrandmaniacs.online'),
  title: {
    template: "%s",
    default: "The Brand Maniacs | Growth Infrastructure & Creative Technology Studio",
  },
  description: "Built in India, designed for the world. We build growth systems, digital products, and acquisition infrastructure for ambitious brands.",
  openGraph: {
    type: "website",
    url: "https://www.thebrandmaniacs.online",
    title: "The Brand Maniacs | Global Growth Infrastructure Studio",
    description: "Built in India, designed for the world. We build growth systems, digital products, and acquisition infrastructure for ambitious brands.",
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
        suppressHydrationWarning
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased selection:bg-accent-yellow selection:text-black min-h-screen flex flex-col font-mono text-foreground bg-background`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.thebrandmaniacs.online/#organization",
                  "name": "The Brand Maniacs",
                  "url": "https://www.thebrandmaniacs.online",
                  "logo": "https://www.thebrandmaniacs.online/icon.png",
                  "sameAs": [
                    "https://www.linkedin.com/company/thebrandmaniacs",
                    "https://www.instagram.com/thebrandmaniacs"
                  ],
                  "description": "A Global Growth Infrastructure and Creative Technology Studio. We build growth systems, digital products, and acquisition infrastructure for ambitious brands worldwide.",
                  "founder": {
                    "@type": "Person",
                    "name": "Tony Joseph",
                    "jobTitle": "Chief Architect",
                    "sameAs": "https://www.linkedin.com/in/tonyjoseph/"
                  },
                  "knowsAbout": [
                    "Growth Systems",
                    "Brand Foundation",
                    "Conversion Rate Optimization",
                    "AI-Powered Creative Production",
                    "Programmatic SEO",
                    "Behavioral Science Marketing"
                  ]
                }
              ]
            })
          }}
        />
        <PostHogProvider>
          <CustomCursor />
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
          <WhatsAppCTA />
        </PostHogProvider>
      </body>
    </html>
  );
}
