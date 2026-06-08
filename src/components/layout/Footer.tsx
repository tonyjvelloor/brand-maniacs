import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-background border-t-2 border-foreground py-12 mt-20 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2 space-y-4">
                        <Link href="/" className="font-heading font-black uppercase text-2xl tracking-tighter text-foreground flex items-center gap-2 group hover:text-accent-yellow transition-none w-fit">
                            <div className="w-8 h-8 border-2 border-foreground flex items-center justify-center text-foreground font-black text-sm group-hover:bg-accent-yellow group-hover:text-black group-hover:border-accent-yellow transition-none">
                                B
                            </div>
                            The Brand Maniacs
                        </Link>
                        <p className="text-foreground max-w-sm text-sm font-bold uppercase leading-relaxed bg-accent-blue text-white inline-block p-2 border-2 border-transparent">
                            We build predictable growth engines using AI, performance marketing, and creator amplification for Indian mid-market brands.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-heading font-black uppercase text-accent-red underline decoration-2 underline-offset-4">Systems</h4>
                        <ul className="space-y-4 text-sm font-bold uppercase text-foreground">
                            <li><Link href="/ai-growth-audit" className="hover:bg-foreground hover:text-background p-1 transition-none border-2 border-transparent hover:border-foreground">AI Growth Audit</Link></li>
                            <li><Link href="/creator-powerhouse" className="hover:bg-foreground hover:text-background p-1 transition-none border-2 border-transparent hover:border-foreground">Creator Scale Sprint</Link></li>
                            <li><Link href="#" className="hover:bg-foreground hover:text-background p-1 transition-none border-2 border-transparent hover:border-foreground">Infrastructure Retainer</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-heading font-black uppercase text-accent-yellow underline decoration-2 underline-offset-4">Company</h4>
                        <ul className="space-y-4 text-sm font-bold uppercase text-foreground">
                            <li><Link href="/case-studies" className="hover:bg-foreground hover:text-background p-1 transition-none border-2 border-transparent hover:border-foreground">Case Studies</Link></li>
                            <li><Link href="#" className="hover:bg-foreground hover:text-background p-1 transition-none border-2 border-transparent hover:border-foreground">About Us</Link></li>
                            <li><Link href="#" className="hover:bg-foreground hover:text-background p-1 transition-none border-2 border-transparent hover:border-foreground">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t-2 border-foreground flex flex-col md:flex-row items-center justify-between text-xs font-bold uppercase text-foreground">
                    <p className="bg-foreground text-background px-2 py-1">© {new Date().getFullYear()} The Brand Maniacs.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="#" className="hover:bg-accent-red hover:text-white px-2 py-1 transition-none">Privacy Policy</Link>
                        <Link href="#" className="hover:bg-accent-blue hover:text-white px-2 py-1 transition-none">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
