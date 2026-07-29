"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FadeUp } from "@/components/ui/FadeUp";

const articles = [
    {
        category: "Strategy",
        title: "Why Most Websites Don't Sell",
        excerpt: "A beautiful design is a commodity. If your digital infrastructure doesn't address buyer psychology and friction points, it's just an expensive brochure.",
        date: "Oct 24",
        readTime: "4 min read"
    },
    {
        category: "Brand",
        title: "Why Beautiful Design Isn't Enough",
        excerpt: "How positioning and narrative systems create a moat that your competitors can't copy, even if they steal your visual language.",
        date: "Oct 12",
        readTime: "6 min read"
    },
    {
        category: "Technology",
        title: "The Future of AI Branding",
        excerpt: "Generative AI isn't replacing creativity; it's replacing slow execution. How we use AI to run 20x more creative tests in half the time.",
        date: "Sep 28",
        readTime: "5 min read"
    }
];

export function Insights() {
    return (
        <section className="py-24 bg-background border-b-2 border-foreground" id="insights">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
                        <FadeUp>
                            <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 bg-accent-yellow text-black">
                                The Growth Journal
                            </span>
                            <h2 className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter text-foreground leading-[0.95]">
                                How We <br />
                                <span className="bg-foreground text-background px-2">Think.</span>
                            </h2>
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <p className="text-lg font-bold text-foreground opacity-80 leading-snug mb-6 max-w-md">
                                Insights, essays, and unfiltered opinions on engineering growth, brand psychology, and creative technology.
                            </p>
                            <Link href="/insights" className="inline-flex items-center gap-3 border-2 border-foreground px-6 py-3 font-black text-sm uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-none">
                                Read All Insights
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </FadeUp>
                    </div>

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-foreground bg-foreground">
                        {articles.map((article, i) => (
                            <FadeUp key={i} delay={i * 0.1} className="bg-background border-r-2 border-b-2 md:border-b-0 border-foreground group hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(255,230,0,1)] transition-all duration-300 relative flex flex-col h-full last:border-r-0">
                                
                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="text-[10px] font-black uppercase tracking-widest border-2 border-foreground px-2 py-1">
                                            {article.category}
                                        </span>
                                        <ArrowUpRight className="w-5 h-5 text-foreground opacity-30 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    
                                    <h3 className="font-heading text-2xl font-black uppercase tracking-tighter leading-tight mb-4 group-hover:text-accent-red transition-colors">
                                        {article.title}
                                    </h3>
                                    
                                    <p className="font-bold text-sm opacity-80 leading-relaxed mb-8 flex-grow">
                                        {article.excerpt}
                                    </p>
                                    
                                    <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest opacity-50 border-t-2 border-foreground/10 pt-4 mt-auto">
                                        <span>{article.date}</span>
                                        <span>{article.readTime}</span>
                                    </div>
                                </div>
                                
                                {/* Overlay Link */}
                                <a href="/insights" className="absolute inset-0 z-10">
                                    <span className="sr-only">Read {article.title}</span>
                                </a>
                            </FadeUp>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
