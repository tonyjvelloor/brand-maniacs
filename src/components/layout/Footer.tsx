import Link from "next/link";
import { CALENDLY_URL, WHATSAPP_URL, INSTAGRAM_URL, LINKEDIN_URL } from "@/lib/config";

export function Footer() {
    return (
        <footer className="bg-background border-t-2 border-foreground py-12 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

                    {/* Brand */}
                    <div className="md:col-span-2 space-y-4">
                        <Link href="/" className="font-heading font-black uppercase text-2xl tracking-tighter text-foreground flex items-center gap-2 group hover:text-accent-yellow transition-none w-fit">
                            <div className="w-8 h-8 border-2 border-foreground flex items-center justify-center text-foreground font-black text-sm group-hover:bg-accent-yellow group-hover:text-black group-hover:border-accent-yellow transition-none">
                                B
                            </div>
                            The Brand Maniacs
                        </Link>
                        <p className="text-foreground max-w-sm text-sm font-bold leading-relaxed">
                            We build brands people can't ignore — through psychology, experiments, and obsessive creative thinking.
                        </p>
                        {/* Social */}
                        <div className="flex gap-3 pt-2">
                            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="border-2 border-foreground px-3 py-2 text-xs font-black uppercase tracking-widest hover:bg-accent-red hover:text-white hover:border-accent-red transition-none">
                                Instagram
                            </a>
                            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="border-2 border-foreground px-3 py-2 text-xs font-black uppercase tracking-widest hover:bg-accent-blue hover:text-white hover:border-accent-blue transition-none">
                                LinkedIn
                            </a>
                            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="border-2 border-foreground px-3 py-2 text-xs font-black uppercase tracking-widest hover:bg-green-500 hover:text-white hover:border-green-500 transition-none">
                                WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Growth Engines */}
                    <div className="space-y-4">
                        <h4 className="font-heading font-black uppercase text-accent-red underline decoration-2 underline-offset-4">Growth Engines</h4>
                        <ul className="space-y-3 text-sm font-bold uppercase text-foreground">
                            <li><Link href="/#services" className="hover:bg-foreground hover:text-background p-1 transition-none border-2 border-transparent hover:border-foreground inline-block">Identity Engine™</Link></li>
                            <li><Link href="/#services" className="hover:bg-foreground hover:text-background p-1 transition-none border-2 border-transparent hover:border-foreground inline-block">Attention Engine™</Link></li>
                            <li><Link href="/#services" className="hover:bg-foreground hover:text-background p-1 transition-none border-2 border-transparent hover:border-foreground inline-block">Revenue Engine™</Link></li>
                            <li><Link href="/#services" className="hover:bg-foreground hover:text-background p-1 transition-none border-2 border-transparent hover:border-foreground inline-block">Authority Engine™</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h4 className="font-heading font-black uppercase text-accent-yellow underline decoration-2 underline-offset-4">Company</h4>
                        <ul className="space-y-3 text-sm font-bold uppercase text-foreground">
                            <li><Link href="/case-studies" className="hover:bg-foreground hover:text-background p-1 transition-none border-2 border-transparent hover:border-foreground inline-block">Case Studies</Link></li>
                            <li><Link href="/ai-growth-audit" className="hover:bg-foreground hover:text-background p-1 transition-none border-2 border-transparent hover:border-foreground inline-block">Free AI Audit</Link></li>
                            <li><Link href="/creator-powerhouse" className="hover:bg-foreground hover:text-background p-1 transition-none border-2 border-transparent hover:border-foreground inline-block">Creator Engine</Link></li>
                            <li>
                                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="hover:bg-accent-red hover:text-white p-1 transition-none border-2 border-transparent hover:border-accent-red inline-block">
                                    Book Strategy Call
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t-2 border-foreground flex flex-col md:flex-row items-center justify-between text-xs font-bold uppercase text-foreground gap-4">
                    <p className="bg-foreground text-background px-2 py-1">© {new Date().getFullYear()} The Brand Maniacs. All rights reserved.</p>
                    <div className="flex gap-4">
                        <span className="opacity-50 cursor-default hover:opacity-100 px-2 py-1">Privacy Policy</span>
                        <span className="opacity-50 cursor-default hover:opacity-100 px-2 py-1">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
