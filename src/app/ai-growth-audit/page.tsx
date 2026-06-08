"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import ReactMarkdown from "react-markdown";

export default function AIGrowthAuditPage() {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [report, setReport] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        url: "",
        revenue: "",
        spend: "",
        cac: "",
        bottleneck: "",
    });

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleNext = () => setStep((s) => s + 1);
    const handlePrev = () => setStep((s) => s - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStep(4);

        try {
            const res = await fetch("/api/audit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (data.report) {
                setReport(data.report);
            } else {
                setReport("Failed to generate audit. Please try again later.");
            }
        } catch (error) {
            console.error("Audit error:", error);
            setReport("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-32 pb-24 bg-background min-h-screen relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="font-heading text-5xl md:text-7xl font-black uppercase text-foreground mb-8 tracking-tighter drop-shadow-[4px_4px_0_rgba(255,42,0,1)]">
                        Is Your Brand Ready to <br /><span className="bg-accent-yellow text-black px-4 inline-block mt-2 brutalist-border drop-shadow-none">Scale with AI?</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground font-bold border-2 border-foreground p-4 bg-accent-blue inline-block max-w-2xl">
                        Take the AI Growth Audit to discover your biggest revenue bottlenecks and get a custom infrastructure blueprint.
                    </p>
                </div>

                <div className={`mx-auto bg-foreground border-2 border-foreground p-8 md:p-12 brutalist-shadow relative overflow-hidden transition-all duration-300 ${step === 4 ? "max-w-4xl" : "max-w-xl"}`}>
                    {/* Progress Bar */}
                    {step < 4 && (
                        <div className="absolute top-0 left-0 right-0 h-4 border-b-2 border-foreground bg-background">
                            <motion.div
                                className="h-full bg-accent-red border-r-2 border-foreground"
                                initial={{ width: "25%" }}
                                animate={{ width: `${(step / 3) * 100}%` }}
                                transition={{ duration: 0.1, ease: "linear" }}
                            />
                        </div>
                    )}

                    {step < 4 && (
                        <div className="text-sm font-black text-background bg-foreground tracking-widest uppercase mb-8 mt-4 inline-block">
                            Step {step} of 3
                        </div>
                    )}

                    <div className="min-h-[350px] flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.1 }}
                                    className="space-y-8"
                                >
                                    <div>
                                        <label className="block text-sm font-black text-background uppercase mb-3">Website URL</label>
                                        <input
                                            type="url"
                                            placeholder="https://yourbrand.com"
                                            className="w-full bg-background border-2 border-background px-5 py-4 text-foreground font-bold placeholder:text-gray-500 focus:outline-none focus:border-accent-yellow transition-none brutalist-shadow-yellow"
                                            value={formData.url}
                                            onChange={(e) => handleChange("url", e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black text-background uppercase mb-3">Monthly Revenue Range</label>
                                        <select
                                            className="w-full bg-background border-2 border-background px-5 py-4 text-foreground font-bold focus:outline-none focus:border-accent-yellow transition-none appearance-none brutalist-shadow-yellow"
                                            value={formData.revenue}
                                            onChange={(e) => handleChange("revenue", e.target.value)}
                                        >
                                            <option value="" disabled className="text-gray-500">Select range...</option>
                                            <option value="under-10l">Under ₹10 Lakhs</option>
                                            <option value="10l-50l">₹10L - ₹50 Lakhs</option>
                                            <option value="50l-1cr">₹50L - ₹1 Crore</option>
                                            <option value="above-1cr">Above ₹1 Crore</option>
                                        </select>
                                    </div>
                                    <Button
                                        className="w-full mt-8 bg-accent-yellow text-black border-black hover:bg-black hover:text-accent-yellow brutalist-shadow transition-none disabled:opacity-50 disabled:hover:bg-accent-yellow disabled:hover:text-black"
                                        onClick={handleNext}
                                        disabled={!formData.url || !formData.revenue}
                                    >
                                        Continue
                                    </Button>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.1 }}
                                    className="space-y-8"
                                >
                                    <div>
                                        <label className="block text-sm font-black text-background uppercase mb-3">Monthly Ad Spend</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. ₹5,000,000"
                                            className="w-full bg-background border-2 border-background px-5 py-4 text-foreground font-bold placeholder:text-gray-500 focus:outline-none focus:border-accent-yellow transition-none brutalist-shadow-yellow"
                                            value={formData.spend}
                                            onChange={(e) => handleChange("spend", e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-black text-background uppercase mb-3">Current CAC (Customer Acquisition Cost)</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. ₹800"
                                            className="w-full bg-background border-2 border-background px-5 py-4 text-foreground font-bold placeholder:text-gray-500 focus:outline-none focus:border-accent-yellow transition-none brutalist-shadow-yellow"
                                            value={formData.cac}
                                            onChange={(e) => handleChange("cac", e.target.value)}
                                        />
                                        <p className="text-sm font-bold text-background mt-3 bg-accent-red px-2 py-1 inline-block border-2 border-background">*If you don't know your exact CAC, enter an estimate.</p>
                                    </div>
                                    <div className="flex gap-4 mt-8">
                                        <Button variant="outline" className="w-full border-background text-background hover:bg-background hover:text-foreground" onClick={handlePrev}>Back</Button>
                                        <Button
                                            className="w-full bg-accent-yellow text-black border-black hover:bg-black hover:text-accent-yellow brutalist-shadow transition-none disabled:opacity-50 disabled:hover:bg-accent-yellow disabled:hover:text-black"
                                            onClick={handleNext}
                                            disabled={!formData.spend || !formData.cac}
                                        >
                                            Continue
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.1 }}
                                    className="space-y-8"
                                >
                                    <div>
                                        <label className="block text-sm font-black text-background uppercase mb-3">Primary Growth Bottleneck</label>
                                        <textarea
                                            placeholder="What is stopping you from scaling your ad spend profitably right now?"
                                            rows={5}
                                            className="w-full bg-background border-2 border-background px-5 py-4 text-foreground font-bold placeholder:text-gray-500 focus:outline-none focus:border-accent-yellow transition-none resize-none brutalist-shadow-yellow"
                                            value={formData.bottleneck}
                                            onChange={(e) => handleChange("bottleneck", e.target.value)}
                                        />
                                    </div>
                                    <div className="flex gap-4 mt-8">
                                        <Button variant="outline" className="w-full border-background text-background hover:bg-background hover:text-foreground" onClick={handlePrev}>Back</Button>
                                        <Button
                                            className="w-full bg-accent-red text-white border-black hover:bg-black hover:text-accent-yellow brutalist-shadow transition-none disabled:opacity-50 disabled:hover:bg-accent-red disabled:hover:text-white"
                                            onClick={handleSubmit}
                                            disabled={!formData.bottleneck}
                                        >
                                            Generate AI Blueprint
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {step === 4 && (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.1 }}
                                    className="py-10 text-left"
                                >
                                    {loading ? (
                                        <div className="flex flex-col items-center justify-center text-center space-y-6">
                                            <div className="w-24 h-24 bg-accent-yellow border-4 border-black brutalist-shadow flex items-center justify-center">
                                                <Loader2 className="w-12 h-12 text-black animate-spin font-black" />
                                            </div>
                                            <h3 className="font-heading text-3xl font-black uppercase text-background">Analyzing Bottlenecks...</h3>
                                            <p className="text-xl font-bold bg-black text-accent-yellow p-4 border-2 border-background inline-block">
                                                Our Chief Growth Officer AI is reviewing your metrics and building your custom growth infrastructure blueprint.
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="space-y-8">
                                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 border-b-4 border-background pb-8">
                                                <div className="w-20 h-20 bg-accent-yellow text-black border-4 border-black flex items-center justify-center brutalist-shadow shrink-0">
                                                    <CheckCircle2 className="w-10 h-10 font-black" />
                                                </div>
                                                <div>
                                                    <h3 className="font-heading text-4xl md:text-5xl font-black uppercase text-background mb-2">Your Growth Blueprint</h3>
                                                    <p className="text-lg font-bold text-background block">
                                                        Generated exclusively for {formData.url}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="prose prose-invert prose-lg max-w-none text-background font-bold custom-prose">
                                                <ReactMarkdown
                                                    components={{
                                                        h1: ({ node, ...props }) => <h1 className="font-heading text-3xl uppercase text-accent-yellow font-black mt-10 mb-6 bg-black inline-block px-4 py-2 border-2 border-background" {...props} />,
                                                        h2: ({ node, ...props }) => <h2 className="font-heading text-2xl uppercase text-background font-black mt-8 mb-4 border-b-2 border-background pb-2" {...props} />,
                                                        p: ({ node, ...props }) => <p className="mb-6 leading-relaxed" {...props} />,
                                                        ul: ({ node, ...props }) => <ul className="space-y-3 mb-6 list-none pl-0" {...props} />,
                                                        li: ({ node, ...props }) => <li className="flex items-start before:content-['→'] before:mr-3 before:text-accent-yellow before:font-black" {...props} />,
                                                        strong: ({ node, ...props }) => <strong className="text-accent-yellow font-black bg-black px-1" {...props} />,
                                                    }}
                                                >
                                                    {report || ""}
                                                </ReactMarkdown>
                                            </div>

                                            <div className="mt-12 pt-8 border-t-4 border-background flex flex-col md:flex-row gap-6 items-center justify-between">
                                                <p className="text-xl font-black text-background uppercase mb-0 md:mr-4">Ready to execute this plan?</p>
                                                <div className="flex w-full md:w-auto gap-4">
                                                    <Button className="w-full md:w-auto border-2 border-background bg-transparent text-background hover:bg-background hover:text-foreground brutalist-hover-invert transition-none" onClick={() => window.location.href = "/"}>
                                                        Back to Home
                                                    </Button>
                                                    <Button className="w-full md:w-auto bg-accent-blue text-white hover:bg-black hover:text-accent-yellow border-black brutalist-shadow transition-none">
                                                        Book Strategy Call
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}
