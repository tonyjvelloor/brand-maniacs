import { Metadata } from "next";
import { TheBrokenModel } from "@/components/sections/TheBrokenModel";
import { Solutions } from "@/components/sections/Solutions";
import { ResultsShowcase } from "@/components/sections/ResultsShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { OurSystem } from "@/components/sections/OurSystem";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Ayurveda Clinic & Hospital Marketing Company | The Brand Maniacs",
    description: "The leading Ayurveda hospital marketing company. We build predictable patient acquisition systems for Ayurvedic clinics & doctors. Stop discounting, start scaling.",
    alternates: {
        canonical: "/industries/ayurveda-wellness",
    },
};

export default function AyurvedaIndustryPage() {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-accent-yellow selection:text-black">
            <main>
                {/* Industry Hero Section */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b-2 border-foreground">
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-5xl">
                            <span className="inline-block border-2 border-foreground font-black text-xs md:text-sm uppercase tracking-widest px-3 py-1 mb-6 bg-accent-yellow text-black">
                                // AYURVEDA CLINIC & HOSPITAL MARKETING
                            </span>
                            
                            <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.9] text-foreground mb-8">
                                Ayurveda <br />
                                Hospital <br />
                                <span className="text-accent-yellow">Marketing.</span> <br />
                            </h1>
                            
                            <div className="max-w-2xl mb-10">
                                <h2 className="sr-only">Marketing Company for Ayurvedic Clinics and Hospitals</h2>
                                <p className="text-lg md:text-xl font-bold text-foreground opacity-80 leading-relaxed mb-4">
                                    In Ayurvedic medicine, trust is the only currency that matters. As a specialized <strong>Ayurveda clinic marketing company</strong>, we engineer educational funnels and digital authority systems that make you the premium choice for chronic care and wellness.
                                </p>
                                <p className="text-base md:text-lg font-bold text-foreground opacity-60 leading-relaxed">
                                    Stop competing on "free consultations" and generic local SEO. We build patient acquisition engines designed specifically for Ayurvedic hospitals and specialized doctors.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link 
                                    href="/work/karmanya-ayurveda" 
                                    className="inline-flex justify-center items-center gap-2 bg-foreground text-background border-2 border-foreground font-black text-sm uppercase tracking-widest px-8 py-4 hover:opacity-80 transition-opacity"
                                >
                                    Read Karmanya Clinic Case Study <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <TheBrokenModel />
                <Solutions />
                
                {/* SEO Authority Section */}
                <section className="py-24 bg-[#F5F5F5] text-black border-b-2 border-foreground">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="space-y-12">
                            <div>
                                <h2 className="font-heading font-black text-3xl md:text-5xl uppercase tracking-tighter mb-6">
                                    The Top-Rated Marketing Company for Ayurvedic Clinics
                                </h2>
                                <div className="space-y-4 font-mono text-sm md:text-base leading-relaxed opacity-90">
                                    <p>
                                        Marketing an Ayurveda hospital or specialized clinic is fundamentally different from marketing a generic dental or skin clinic. Your patients aren't just looking for a quick fix—they are looking for deep, holistic healing for chronic conditions.
                                    </p>
                                    <p>
                                        As a dedicated <strong>Ayurveda hospital marketing agency</strong>, we understand that standard digital marketing tactics (like offering 50% off on first consultations) devalue your brand. Instead, we focus on <strong>Authority Marketing</strong>. We build trust-driven funnels, optimize your local SEO to dominate "Ayurveda hospital near me" searches, and scale your patient acquisition through high-intent Google Ads and educational Meta campaigns.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t-2 border-black/10">
                                <div>
                                    <h3 className="font-heading font-black text-xl uppercase mb-3">Ayurveda Clinic SEO</h3>
                                    <p className="font-mono text-sm opacity-80">
                                        We structure your website architecture and content to rank for high-value disease-specific keywords (e.g., "Ayurvedic treatment for PCOS") so you attract patients actively seeking your exact expertise.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-heading font-black text-xl uppercase mb-3">Patient Acquisition Systems</h3>
                                    <p className="font-mono text-sm opacity-80">
                                        We replace unreliable lead generation with predictable, automated growth systems. From tracking every WhatsApp inquiry to nurturing old leads, our marketing systems are built specifically for Ayurvedic doctors.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ResultsShowcase />
                <OurSystem />
                <FinalCTA />
            </main>
</div>
    );
}
