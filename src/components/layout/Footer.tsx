"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { WHATSAPP_URL, INSTAGRAM_URL, LINKEDIN_URL } from "@/lib/config";

export function Footer() {
    const pathname = usePathname();

    // Hide standard studio footer on standalone funnel routes
    if (pathname?.startsWith("/ads-rescue")) {
        return null;
    }
    return (
        <footer className="bg-background border-t-2 border-foreground pt-16 pb-28 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">

                    {/* Brand & Mission */}
                    <div className="md:col-span-4 space-y-6">
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
                        <div className="flex flex-wrap gap-2 pt-2">
                            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="border-2 border-foreground px-3 py-1.5 text-[10px] font-black uppercase tracking-widest hover:bg-accent-red hover:text-white hover:border-accent-red transition-none">
                                Instagram
                            </a>
                            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="border-2 border-foreground px-3 py-1.5 text-[10px] font-black uppercase tracking-widest hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-none">
                                LinkedIn
                            </a>
                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="border-2 border-foreground px-3 py-1.5 text-[10px] font-black uppercase tracking-widest hover:bg-green-500 hover:text-white hover:border-green-500 transition-none">
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Industries (SEO Internal Linking) */}
                    <div className="md:col-span-3 space-y-4 md:pl-4">
                        <h4 className="font-heading font-black uppercase text-foreground underline decoration-2 underline-offset-4 mb-2">Industries</h4>
                        <ul className="space-y-3 text-xs sm:text-sm font-bold uppercase tracking-wide text-foreground">
                            <li><Link href="/industries/ayurveda-wellness" className="hover:bg-foreground hover:text-background p-1 -ml-1 transition-none" title="Ayurveda Clinic Marketing Company">Ayurveda Clinics</Link></li>
                            <li><Link href="/industries/d2c-ecommerce" className="hover:bg-foreground hover:text-background p-1 -ml-1 transition-none" title="D2C E-commerce Growth">D2C E-commerce</Link></li>
                            <li><Link href="/website-development" className="text-accent-blue hover:bg-accent-blue hover:text-white p-1 -ml-1 transition-none font-black" title="Website Development Agency">Web Development</Link></li>
                        </ul>
                    </div>

                    {/* Growth Systems */}
                    <div className="md:col-span-2 space-y-4">
                        <h4 className="font-heading font-black uppercase text-accent-red underline decoration-2 underline-offset-4 mb-2">Systems</h4>
                        <ul className="space-y-3 text-xs sm:text-sm font-bold uppercase tracking-wide text-foreground">
                            <li><Link href="/ads-rescue" className="text-accent-yellow hover:bg-accent-yellow hover:text-black p-1 -ml-1 transition-none font-black">Ads Rescue ⚡</Link></li>
                            <li><Link href="/growth-systems" className="hover:bg-foreground hover:text-background p-1 -ml-1 transition-none">Brand</Link></li>
                            <li><Link href="/growth-systems" className="hover:bg-foreground hover:text-background p-1 -ml-1 transition-none">Conversion</Link></li>
                            <li><Link href="/growth-systems" className="hover:bg-foreground hover:text-background p-1 -ml-1 transition-none">Growth</Link></li>
                            <li><Link href="/growth-systems" className="hover:bg-foreground hover:text-background p-1 -ml-1 transition-none">AI Ops</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="md:col-span-3 space-y-4">
                        <h4 className="font-heading font-black uppercase text-accent-yellow underline decoration-2 underline-offset-4 mb-2">Studio</h4>
                        <ul className="space-y-3 text-xs sm:text-sm font-bold uppercase tracking-wide text-foreground">
                            <li><Link href="/labs" className="text-accent-blue hover:bg-accent-blue hover:text-white p-1 -ml-1 transition-none">Maniac Labs</Link></li>
                            <li>
                                <a href="https://reviews.thebrandmaniacs.online/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:bg-green-400 hover:text-black p-1 -ml-1 transition-none font-black flex items-center gap-1 w-fit">
                                    TBM Reviews Software <span className="text-[8px] bg-green-400 text-black px-1">NEW</span>
                                </a>
                            </li>
                            <li><Link href="/work" className="hover:bg-foreground hover:text-background p-1 -ml-1 transition-none">Our Work</Link></li>
                            <li><Link href="/method" className="hover:bg-foreground hover:text-background p-1 -ml-1 transition-none">Methodology</Link></li>
                            <li><Link href="/about" className="hover:bg-foreground hover:text-background p-1 -ml-1 transition-none">Founder</Link></li>
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
