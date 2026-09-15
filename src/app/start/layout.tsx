import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Start Your Growth Project — Free Roadmap | The Brand Maniacs",
    description: "Tell us about your brand's growth bottleneck and we'll generate a custom growth infrastructure roadmap. Start scaling today.",
    alternates: {
        canonical: "/start",
    },
};

export default function StartLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
