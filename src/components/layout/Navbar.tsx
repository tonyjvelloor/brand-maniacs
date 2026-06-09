"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { CALENDLY_URL } from "@/lib/config";

const navLinks = [
    { label: "Work", href: "/work" },
    { label: "Systems", href: "/#services" },
    { label: "Maniac Labs", href: "/labs" },
    { label: "Approach", href: "/approach" },
    { label: "About", href: "/about" },
    { label: "Free Audit", href: "/ai-growth-audit" },
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
            transition={{ duration: 0.15 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-0 ${isScrolled
                ? "bg-background border-b-2 border-foreground"
                : "bg-transparent border-b-2 border-transparent"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between py-4">

                {/* Logo */}
                <Link href="/" className="font-heading font-black uppercase tracking-tighter text-foreground flex items-center gap-2 group hover:opacity-80 transition-none">
                    <div className="w-9 h-9 border-2 border-foreground flex items-center justify-center text-foreground font-black text-lg group-hover:bg-accent-yellow group-hover:text-black group-hover:border-black transition-none">
                        B
                    </div>
                    <span className="hidden sm:inline text-lg">The Brand Maniacs</span>
                    <span className="sm:hidden text-lg">TBM</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-xs font-black uppercase tracking-widest px-3 py-2 border-2 border-transparent hover:border-foreground hover:bg-foreground hover:text-background transition-none ${link.label === "Free Audit" ? "text-accent-red" : link.label === "Maniac Labs" ? "text-accent-blue" : "text-foreground"}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="ml-3">
                        <Button
                            variant="primary"
                            size="sm"
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Build My Growth System
                        </Button>
                    </div>
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden border-2 border-foreground w-10 h-10 flex items-center justify-center hover:bg-foreground hover:text-background transition-none"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.1 }}
                        className="md:hidden bg-background border-t-2 border-foreground"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-black uppercase tracking-widest border-2 border-transparent hover:border-foreground hover:bg-foreground hover:text-background px-4 py-3 transition-none ${link.label === "Free Audit" ? "text-accent-red" : link.label === "Maniac Labs" ? "text-accent-blue" : "text-foreground"}`}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="mt-2">
                                <Button
                                    variant="primary"
                                    size="md"
                                    href={CALENDLY_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Build My Growth System
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
