"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { CALENDLY_URL } from "@/lib/config";

const navLinks = [
    { label: "Case Studies", href: "/case-studies" },
    { label: "Growth Engines", href: "/#services" },
    { label: "AI Audit", href: "/ai-growth-audit" },
    { label: "Creator Engine", href: "/creator-powerhouse" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-0 ${isScrolled
                ? "bg-background brutalist-border"
                : "bg-transparent border-b-2 border-transparent"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between py-4">
                <Link href="/" className="font-heading font-black uppercase text-2xl tracking-tighter text-foreground flex items-center gap-2 group hover:text-accent-yellow transition-none">
                    <div className="w-10 h-10 border-2 border-foreground flex items-center justify-center text-foreground font-black text-xl group-hover:bg-accent-yellow group-hover:text-black group-hover:border-accent-yellow transition-none">
                        B
                    </div>
                    <span className="hidden sm:inline">The Brand Maniacs</span>
                    <span className="sm:hidden">TBM</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-bold uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background px-2 py-1 border-2 border-transparent hover:border-foreground transition-none"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button
                        variant="primary"
                        size="sm"
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Book Strategy Call
                    </Button>
                </nav>

                {/* Mobile: Hamburger */}
                <button
                    className="md:hidden border-2 border-foreground w-10 h-10 flex items-center justify-center hover:bg-foreground hover:text-background transition-none"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-background border-t-2 border-foreground"
                >
                    <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-black uppercase tracking-widest text-foreground border-2 border-transparent hover:border-foreground hover:bg-foreground hover:text-background px-4 py-3 transition-none"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button
                            variant="primary"
                            size="md"
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Book Strategy Call
                        </Button>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}
