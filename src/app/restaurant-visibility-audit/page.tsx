import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Restaurant Visibility Audit | The Brand Maniacs",
  description: "Find out why nearby customers are choosing competing restaurants instead of yours.",
};

export default function RestaurantAuditPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-20 text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-heading font-black text-4xl md:text-6xl uppercase tracking-tighter mb-8">
          Free Restaurant Visibility Audit
        </h1>
        <p className="text-xl font-bold opacity-80 mb-12">
          Find out why nearby customers are choosing competing restaurants instead of yours.
        </p>
        
        <div className="bg-[#111] text-white p-8 border-4 border-accent-yellow shadow-[8px_8px_0_0_#FFE600]">
          <p className="font-bold mb-6">Our diagnostic team is currently reviewing requests. Please use our main intake form and mention "Restaurant Audit".</p>
          <a 
            href="https://form.typeform.com/to/bB1k9X7u"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent-yellow text-black border-2 border-black font-black uppercase tracking-widest px-8 py-4 hover:bg-white transition-colors"
          >
            Start Intake Form
          </a>
        </div>
      </div>
    </div>
  );
}
