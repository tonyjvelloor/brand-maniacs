"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { CALENDLY_URL, WHATSAPP_URL } from "@/lib/config";

export function FinalCTA() {
    return (
        <section className="py-24 md:py-40 bg-background border-b-2 border-foreground relative overflow-hidden">

            {/* Decorative background text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <span className="font-heading text-[200px] md:text-[300px] font-black uppercase text-foreground opacity-[0.03] whitespace-nowrap">
                    MANIAC
                </span>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-5xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.1 }}
                    >
                        <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-10 bg-accent-yellow text-black brutalist-shadow">
                            Ready?
                        </span>

                        <h2 className="font-heading text-5xl md:text-[88px] font-black uppercase tracking-tighter text-foreground leading-[0.95] mb-10 drop-shadow-[4px_4px_0_rgba(255,42,0,1)]">
                            Ready to Build<br />
                            Something People<br />
                            <span className="bg-foreground text-background px-4 inline-block">Remember?</span>
                        </h2>

                        <p className="text-xl md:text-2xl font-bold text-foreground mb-14 max-w-2xl leading-tight">
                            Book a free 45-minute strategy call. We'll show you exactly what's holding your brand back — and what the first 30 days look like if we work together.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start mb-20">
                            <Button size="lg" className="min-w-[300px]" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                                Book Strategy Call — Free
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button variant="secondary" size="lg" className="min-w-[260px]" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                                WhatsApp Us First
                            </Button>
                        </div>

                        {/* Trust row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-foreground bg-foreground max-w-3xl">
                            {[
                                { val: "No", sub: "Long-term lock-ins" },
                                { val: "48hr", sub: "Response guarantee" },
                                { val: "100%", sub: "Outcome focused" },
                                { val: "Free", sub: "First audit call" },
                            ].map((item, i) => (
                                <div key={i} className="bg-background p-6 border-r-2 border-foreground last:border-r-0 flex flex-col items-center text-center hover:bg-accent-yellow transition-none group">
                                    <div className="font-heading text-3xl font-black text-accent-red group-hover:text-black transition-none mb-1">
                                        {item.val}
                                    </div>
                                    <div className="text-xs font-black uppercase tracking-widest text-foreground group-hover:text-black transition-none">
                                        {item.sub}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
