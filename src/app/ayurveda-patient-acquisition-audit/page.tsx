import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Ayurveda Patient Acquisition Audit | The Brand Maniacs",
  description: "See exactly where your clinic is losing potential patients across Google, Maps, Ads, Website & Reviews.",
};

export default function AyurvedaAuditPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-20 text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-heading font-black text-4xl md:text-6xl uppercase tracking-tighter mb-8">
          Free Ayurveda Patient Acquisition Audit
        </h1>
        <p className="text-xl font-bold opacity-80 mb-12">
          See exactly where your clinic is losing potential patients across Google, Maps, Ads, Website & Reviews.
        </p>
        
        <div className="bg-[#F5F5F5] p-8 border-4 border-foreground shadow-[8px_8px_0_0_#000]">
          <p className="font-bold mb-6">Our diagnostic team is currently reviewing requests. Please use our main intake form and mention "Ayurveda Audit".</p>
          <a 
            href="https://form.typeform.com/to/bB1k9X7u"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent-red text-white border-2 border-black font-black uppercase tracking-widest px-8 py-4 hover:bg-black transition-colors"
          >
            Start Intake Form
          </a>
        </div>
      </div>
    </div>
  );
}
