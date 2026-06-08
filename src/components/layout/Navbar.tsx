"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
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
                    The Brand Maniacs
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/case-studies" className="text-sm font-bold uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background px-2 py-1 border-2 border-transparent hover:border-foreground transition-none">
                        Case Studies
                    </Link>
                    <Link href="/creator-powerhouse" className="text-sm font-bold uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background px-2 py-1 border-2 border-transparent hover:border-foreground transition-none">
                        Creator Engine
                    </Link>
                    <Button variant="primary" size="sm" className="hidden lg:inline-flex">
                        Book Strategy Call
                    </Button>
                </nav>

                {/* Mobile CTA */}
                <div className="md:hidden">
                    <Button variant="primary" size="sm">
                        Book Call
                    </Button>
                </div>
            </div>
        </motion.header>
    );
}
