import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_URL, INSTAGRAM_URL, LINKEDIN_URL } from "@/lib/config";

export function Footer() {
    return (
        <footer className="bg-background border-t-2 border-foreground pt-16 pb-28 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">

                    {/* Brand & Mission */}
                    <div className="md:col-span-5 space-y-6">
                        <Link href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity w-fit">
                            <Image 
                                src="/images/logos/logo-outline.png" 
                                alt="The Brand Maniacs" 
                                width={200} 
                                height={50} 
                                className="object-contain" 
                            />
                        </Link>
                        <p className="text-foreground max-w-sm text-sm font-bold leading-relaxed opacity-80">
                            A Creative Technology Studio combining human strategy, AI-powered creative systems, and performance experiments to build brands faster.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="border-2 border-foreground px-4 py-2 text-xs font-black uppercase tracking-widest hover:bg-accent-red hover:text-white hover:border-accent-red transition-none">
                                Instagram
                            </a>
                            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="border-2 border-foreground px-4 py-2 text-xs font-black uppercase tracking-widest hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-none">
                                LinkedIn
                            </a>
                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="border-2 border-foreground px-4 py-2 text-xs font-black uppercase tracking-widest hover:bg-green-500 hover:text-white hover:border-green-500 transition-none">
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Growth Systems */}
                    <div className="md:col-span-3 space-y-5">
                        <h4 className="font-heading font-black uppercase text-accent-red underline decoration-2 underline-offset-4 mb-2">Systems</h4>
                        <ul className="space-y-3 text-sm font-bold uppercase tracking-wide text-foreground">
                            <li><Link href="/#services" className="hover:bg-foreground hover:text-background p-1 -ml-1 transition-none">Brand Foundation System</Link></li>
                            <li><Link href="/#services" className="hover:bg-foreground hover:text-background p-1 -ml-1 transition-none">Attention Engine</Link></li>
                            <li><Link href="/#services" className="hover:bg-foreground hover:text-background p-1 -ml-1 transition-none">Conversion Engine</Link></li>
                            <li><Link href="/#services" className="hover:bg-foreground hover:text-background p-1 -ml-1 transition-none">Growth Experiments</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="md:col-span-4 space-y-5">
                        <h4 className="font-heading font-black uppercase text-accent-yellow underline decoration-2 underline-offset-4 mb-2">Studio</h4>
                        <ul className="space-y-3 text-sm font-bold uppercase tracking-wide text-foreground">
                            <li><Link href="/labs" className="text-accent-blue hover:bg-accent-blue hover:text-white p-1 -ml-1 transition-none">Maniac Labs</Link></li>
                            <li><Link href="/work" className="hover:bg-foreground hover:text-background p-1 -ml-1 transition-none">Our Work & Proof</Link></li>
                            <li><Link href="/approach" className="hover:bg-foreground hover:text-background p-1 -ml-1 transition-none">Operating Principles</Link></li>
                            <li><Link href="/about" className="hover:bg-foreground hover:text-background p-1 -ml-1 transition-none">About The Founder</Link></li>
                            <li><Link href="/ai-growth-audit" className="text-accent-red hover:bg-accent-red hover:text-white p-1 -ml-1 transition-none border-2 border-transparent hover:border-accent-red inline-block mt-2">Apply for Free Audit</Link></li>
                            <li className="pt-2">
                                <Link href="/book" className="bg-foreground text-background px-4 py-2 inline-block hover:bg-accent-yellow hover:text-black transition-none">
                                    Build My Growth System →
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t-2 border-foreground flex flex-col items-center justify-center text-xs font-black uppercase tracking-widest text-foreground gap-4 text-center">
                    <p className="text-sm md:text-base mb-2">Built to make brands impossible to ignore.</p>
                    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
                        <p className="opacity-60">© {new Date().getFullYear()} The Brand Maniacs. All rights reserved.</p>
                        <div className="flex gap-6">
                            <span className="opacity-40 cursor-default hover:opacity-100 transition-opacity">Privacy Policy</span>
                            <span className="opacity-40 cursor-default hover:opacity-100 transition-opacity">Terms of Service</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
