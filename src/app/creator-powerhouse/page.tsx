"use client";

import { motion } from "framer-motion";
import { CheckCircle2, BarChart3, Database } from "lucide-react";
import { Button } from "@/components/ui/Button";

const features = [
    {
        icon: Database,
        title: "Creator Scoring System",
        desc: "We don't pick influencers based on followers. We analyze their audience overlap, past conversion rates, and engagement authenticity before spending a single rupee."
    },
    {
        icon: CheckCircle2,
        title: "UGC Testing Matrix",
        desc: "Every creator script is tested across multiple hooks and angles. We treat UGC like direct response ad creative, not brand collateral."
    },
    {
        icon: BarChart3,
        title: "Revenue Attribution",
        desc: "Clear tracking from creator link to cart checkout. We calculate exact CPA per creator so we know exactly who is driving profitable revenue."
    }
];

export default function CreatorPowerhousePage() {
    return (
        <div className="pt-32 pb-24 bg-background min-h-screen relative overflow-hidden border-b-2 border-foreground">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, ease: "linear" }}
                        className="inline-block bg-accent-yellow text-black font-black px-5 py-2 text-sm md:text-base tracking-widest uppercase mb-8 border-2 border-black brutalist-shadow"
                    >
                        The Creator Engine
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.1, ease: "linear" }}
                        className="font-heading text-5xl md:text-7xl font-black uppercase text-foreground mb-8 tracking-tighter drop-shadow-[4px_4px_0_rgba(255,42,0,1)]"
                    >
                        Creator Infrastructure with <br /><span className="bg-foreground text-background px-4 inline-block mt-2 brutalist-border drop-shadow-none">Revenue Accountability.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.1, ease: "linear" }}
                        className="text-xl md:text-2xl text-foreground leading-relaxed font-bold border-2 border-foreground p-4 bg-accent-blue inline-block max-w-2xl"
                    >
                        Indian brands struggle with influencer ROI because they treat it like PR.
                        We treat it like performance marketing. We build the full infrastructure
                        to turn creators into scalable revenue channels.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-foreground bg-foreground mb-24 max-w-6xl mx-auto">
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.1, delay: i * 0.1, ease: "linear" }}
                                className="bg-background border-b-2 md:border-b-0 border-r-2 border-foreground last:border-r-0 p-10 hover:bg-accent-yellow hover:text-black group transition-none flex flex-col items-start"
                            >
                                <div className="w-16 h-16 bg-foreground flex items-center justify-center text-background mb-8 border-2 border-foreground brutalist-shadow transition-none group-hover:bg-background group-hover:text-foreground">
                                    <Icon className="w-8 h-8 font-black" />
                                </div>
                                <h3 className="font-heading text-3xl font-black uppercase text-foreground mb-4 group-hover:text-black transition-none">{feature.title}</h3>
                                <p className="text-foreground text-base leading-relaxed font-bold group-hover:text-black transition-none">{feature.desc}</p>
                            </motion.div>
                        )
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.1, ease: "linear" }}
                    className="max-w-4xl mx-auto bg-accent-red border-2 border-foreground p-10 md:p-16 text-center brutalist-shadow"
                >
                    <h2 className="font-heading text-4xl md:text-6xl font-black uppercase text-white mb-6">Stop Pushing "Brand Awareness"</h2>
                    <p className="text-white md:text-xl mb-10 max-w-2xl mx-auto font-bold leading-relaxed border-2 border-white p-4">
                        If you can't track the ROI of your influencer campaigns, you have a leak in your growth engine. Let's install the revenue attribution you need.
                    </p>
                    <Button size="lg" className="w-full sm:w-auto bg-accent-yellow text-black hover:bg-black hover:text-accent-yellow border-black brutalist-shadow">Request a Creator Scale Sprint</Button>
                </motion.div>
            </div>
        </div>
    );
}
