"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { CALENDLY_URL } from "@/lib/config";

import { usePathname } from "next/navigation";

const navLinks = [
    { label: "Work", href: "/work" },
    { label: "Labs", href: "/labs" },
    { label: "About", href: "/about" },
    { label: "Approach", href: "/approach" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [mobileOpen]);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.15 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-md border-b-2 border-foreground/10"
                : "bg-transparent border-b-2 border-transparent"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between py-4">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
                    <Image 
                        src="/images/logos/logo-menu.png" 
                        alt="The Brand Maniacs" 
                        width={180} 
                        height={45} 
                        className="object-contain hidden md:block" 
                        priority
                    />
                    <Image 
                        src="/icon.png" 
                        alt="The Brand Maniacs Icon" 
                        width={40} 
                        height={40} 
                        className="object-contain md:hidden" 
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-xs font-black uppercase tracking-widest px-4 py-2 group`}
                            >
                                <span className={`transition-colors duration-200 ${isActive ? 'text-foreground' : 'text-foreground/60 group-hover:text-foreground'}`}>
                                    {link.label}
                                </span>
                                {isActive && (
                                    <motion.div 
                                        layoutId="nav-indicator"
                                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground" 
                                    />
                                )}
                            </Link>
                        );
                    })}
                    <div className="ml-3">
                        <Button
                            variant="primary"
                            size="sm"
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Free Audit
                        </Button>
                    </div>
                </nav>

                <button
                    className="md:hidden border-2 border-foreground w-10 h-10 flex items-center justify-center hover:bg-foreground hover:text-background transition-none"
                    onClick={() => setMobileOpen(true)}
                    aria-label="Open menu"
                >
                    <Menu className="w-5 h-5" />
                </button>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-foreground flex flex-col justify-center items-center md:hidden"
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 border-2 border-background w-10 h-10 flex items-center justify-center hover:bg-background hover:text-foreground text-background transition-none"
                            onClick={() => setMobileOpen(false)}
                            aria-label="Close menu"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        
                        {/* Logo for mobile menu */}
                        <div className="absolute top-4 left-4 flex items-center">
                            <span className="font-heading font-black text-2xl uppercase tracking-widest text-background">
                                TBM™
                            </span>
                        </div>

                        <div className="flex flex-col items-center gap-8 w-full px-6">
                            {navLinks.map((link, i) => {
                                const isActive = pathname === link.href;
                                return (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={`font-heading text-5xl sm:text-6xl font-black uppercase tracking-tighter transition-colors ${isActive ? "text-accent-yellow" : "text-background hover:text-accent-yellow"}`}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                                );
                            })}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.4, delay: navLinks.length * 0.1 }}
                                className="mt-8 w-full sm:w-auto"
                                onClick={() => setMobileOpen(false)}
                            >
                                <Button
                                    variant="primary"
                                    size="lg"
                                    href={CALENDLY_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full"
                                >
                                    Free Audit
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
