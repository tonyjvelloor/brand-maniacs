"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "@/components/ui/FadeUp";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import posthog from 'posthog-js';
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const steps = [
    {
        id: "goal",
        question: "What's the primary growth bottleneck right now?",
        options: [
            { id: "traffic", label: "We have a great product, but not enough people know about it (Traffic & Attention)." },
            { id: "conversion", label: "We get traffic, but they aren't turning into qualified leads or customers (Conversion)." },
            { id: "brand", label: "Our brand looks outdated and we're losing out to competitors with better positioning." },
            { id: "efficiency", label: "Our customer acquisition cost (CAC) is too high and creative testing is too slow." }
        ]
    },
    {
        id: "stage",
        question: "What stage is the company at?",
        options: [
            { id: "seed", label: "Early Stage / Seed (Figuring out product-market fit)" },
            { id: "growth", label: "Growth Stage (We know what works, we need to scale it)" },
            { id: "scale", label: "Scaling / Series A+ (Need to optimize efficiency and dominate the market)" },
            { id: "enterprise", label: "Established / Enterprise (Looking for modernization and aggressive market share)" }
        ]
    },
    {
        id: "budget",
        question: "What is your anticipated budget for this growth project?",
        options: [
            { id: "under10k", label: "Under ₹10,00,000" },
            { id: "10k-25k", label: "₹10,00,000 - ₹25,00,000" },
            { id: "25k-50k", label: "₹25,00,000 - ₹50,00,000" },
            { id: "over50k", label: "₹50,00,000+" }
        ]
    },
    {
        id: "industry",
        question: "What industry are you in?",
        options: [
            { id: "saas", label: "B2B SaaS & Technology" },
            { id: "ecommerce", label: "E-Commerce & D2C" },
            { id: "services", label: "Professional Services / Consulting" },
            { id: "other", label: "Other / Niche" }
        ]
    },
    {
        id: "teamSize",
        question: "What is your current team size?",
        options: [
            { id: "1-10", label: "1 - 10 Employees" },
            { id: "11-50", label: "11 - 50 Employees" },
            { id: "51-200", label: "51 - 200 Employees" },
            { id: "201+", label: "201+ Employees" }
        ]
    }
];

export default function StartProjectPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [showLeadCapture, setShowLeadCapture] = useState(false);
    const [leadInfo, setLeadInfo] = useState({ name: "", email: "", company: "", website: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();
    const [isComplete, setIsComplete] = useState(false);
    const [aiBrief, setAiBrief] = useState<any>(null);
    const [showDelayedCTA, setShowDelayedCTA] = useState(false);

    useEffect(() => {
        posthog.capture('estimator_started');
    }, []);

    const handleOptionSelect = (optionId: string) => {
        setAnswers(prev => ({
            ...prev,
            [steps[currentStep].id]: optionId
        }));
    };

    const handleNext = () => {
        posthog.capture('estimator_step_completed', { step: currentStep + 1 });
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            posthog.capture('lead_form_opened');
            setShowLeadCapture(true);
        }
    };

    const handleBack = () => {
        if (showLeadCapture) {
            setShowLeadCapture(false);
        } else if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleLeadSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ answers, leadInfo })
            });
            const data = await res.json();
            
            posthog.capture('lead_submitted', { industry: answers.industry, team_size: answers.teamSize });
            posthog.capture('roadmap_generated');

            if (data.success && data.id) {
                router.push(`/roadmap/${data.id}`);
            }
            
        } catch (error) {
            console.error("Failed to submit lead", error);
            setIsSubmitting(false);
        }
    };

    const handleDownload = () => {
        posthog.capture('roadmap_downloaded');
        window.print();
        setTimeout(() => setShowDelayedCTA(true), 10000);
    };

    // Generate recommendation based on answers
    const getRecommendation = () => {
        let services = [];
        let timeframe = "8-12 weeks";
        
        if (answers.goal === 'brand') services = ["Brand Positioning", "Visual Identity System", "Messaging Architecture"];
        else if (answers.goal === 'traffic') services = ["Attention Architecture", "Content System Setup", "Performance Marketing"];
        else if (answers.goal === 'conversion') services = ["Website Optimization", "Funnel Engineering", "Conversion Rate Optimization"];
        else if (answers.goal === 'efficiency') services = ["AI Workflow Integration", "Creative Testing Sprints", "Growth Experiments"];
        else services = ["Growth Infrastructure Optimization", "Brand Experiences"];

        if (answers.stage === 'seed') timeframe = "4-6 weeks";
        else if (answers.stage === 'growth') timeframe = "8-12 weeks";
        else timeframe = "12-16 weeks";

        return { services, timeframe };
    };

    return (
        <main className="min-h-screen bg-background text-foreground pt-24 pb-12 flex flex-col">
            <div className="container mx-auto px-4 md:px-6 flex-grow flex flex-col">
                <div className="max-w-4xl mx-auto w-full flex-grow flex flex-col">
                    
                    {/* Header */}
                    <div className="mb-12">
                        <Link href="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-accent-yellow transition-colors mb-8">
                            <ArrowLeft className="w-4 h-4" /> Back to Home
                        </Link>
                        
                        {!isComplete && (
                            <div className="flex items-center justify-between mb-4">
                                <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 bg-accent-yellow text-black">
                                    Project Estimator
                                </span>
                                <span className="font-heading text-xl font-black">
                                    {currentStep + 1} / {steps.length}
                                </span>
                            </div>
                        )}
                        
                        <div className="h-2 w-full bg-foreground/10 mb-12">
                            <motion.div 
                                className="h-full bg-accent-yellow"
                                initial={{ width: 0 }}
                                animate={{ width: isComplete ? "100%" : showLeadCapture ? "90%" : `${((currentStep) / steps.length) * 80}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </div>

                    {/* Question Area */}
                    <div className="flex-grow flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            {!isComplete ? (
                                <motion.div
                                    key={currentStep}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h1 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-10">
                                        {steps[currentStep].question}
                                    </h1>
                                    
                                    <div className="grid grid-cols-1 gap-4">
                                        {steps[currentStep].options.map((option) => {
                                            const isSelected = answers[steps[currentStep].id] === option.id;
                                            return (
                                                <button
                                                    key={option.id}
                                                    onClick={() => handleOptionSelect(option.id)}
                                                    className={`text-left p-6 border-2 transition-all duration-200 flex items-start gap-4 ${
                                                        isSelected 
                                                            ? 'border-foreground bg-foreground text-background scale-[1.01] shadow-[4px_4px_0px_0px_rgba(255,230,0,1)]' 
                                                            : 'border-foreground/30 hover:border-foreground bg-background hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                                                    }`}
                                                >
                                                    <div className={`w-6 h-6 shrink-0 border-2 mt-0.5 flex items-center justify-center ${isSelected ? 'border-background' : 'border-foreground/30'}`}>
                                                        {isSelected && <div className="w-3 h-3 bg-accent-yellow" />}
                                                    </div>
                                                    <span className="font-bold text-sm md:text-base leading-snug">
                                                        {option.label}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                    
                                    <div className="mt-12 flex justify-between items-center">
                                        <button
                                            onClick={handleBack}
                                            disabled={currentStep === 0}
                                            className={`font-black text-sm uppercase tracking-widest flex items-center gap-2 ${currentStep === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:text-accent-yellow'}`}
                                        >
                                            <ArrowLeft className="w-4 h-4" /> Previous
                                        </button>
                                        
                                        <Button 
                                            onClick={handleNext}
                                            disabled={!answers[steps[currentStep].id]}
                                            className={!answers[steps[currentStep].id] ? 'opacity-50 cursor-not-allowed' : ''}
                                        >
                                            {currentStep === steps.length - 1 ? 'Analyze Responses' : 'Next Step'}
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </div>
                                </motion.div>
                            ) : showLeadCapture && !isComplete ? (
                                <motion.div
                                    key="lead-capture"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h1 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-4">
                                        Where should we send your roadmap?
                                    </h1>
                                    <p className="font-bold opacity-70 mb-10 text-lg">
                                        We're analyzing your inputs. Enter your details to reveal your custom growth infrastructure plan.
                                    </p>
                                    
                                    <form onSubmit={handleLeadSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest block opacity-70">Full Name</label>
                                                <input 
                                                    type="text" 
                                                    required
                                                    value={leadInfo.name}
                                                    onChange={e => setLeadInfo({...leadInfo, name: e.target.value})}
                                                    className="w-full p-4 bg-background border-2 border-foreground/30 focus:border-foreground focus:outline-none font-bold transition-colors"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest block opacity-70">Work Email</label>
                                                <input 
                                                    type="email" 
                                                    required
                                                    value={leadInfo.email}
                                                    onChange={e => setLeadInfo({...leadInfo, email: e.target.value})}
                                                    className="w-full p-4 bg-background border-2 border-foreground/30 focus:border-foreground focus:outline-none font-bold transition-colors"
                                                    placeholder="john@company.com"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest block opacity-70">Company Name</label>
                                                <input 
                                                    type="text" 
                                                    required
                                                    value={leadInfo.company}
                                                    onChange={e => setLeadInfo({...leadInfo, company: e.target.value})}
                                                    className="w-full p-4 bg-background border-2 border-foreground/30 focus:border-foreground focus:outline-none font-bold transition-colors"
                                                    placeholder="Acme Corp"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold uppercase tracking-widest mb-2">Company Website (Optional but Recommended)</label>
                                                <input 
                                                    type="url"
                                                    placeholder="https://example.com"
                                                    value={leadInfo.website}
                                                    onChange={e => setLeadInfo(prev => ({ ...prev, website: e.target.value }))}
                                                    className="w-full bg-transparent border-2 border-foreground p-4 outline-none focus:bg-foreground focus:text-background transition-colors"
                                                />
                                                <p className="text-xs opacity-60 mt-1">We'll use this to run a real-time messaging audit.</p>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-12 flex justify-between items-center pt-8 border-t-2 border-foreground/10">
                                            <button
                                                type="button"
                                                onClick={handleBack}
                                                className="font-black text-sm uppercase tracking-widest flex items-center gap-2 hover:text-accent-yellow"
                                            >
                                                <ArrowLeft className="w-4 h-4" /> Previous
                                            </button>
                                            
                                            <Button 
                                                type="submit"
                                                disabled={isSubmitting || !leadInfo.name || !leadInfo.email || !leadInfo.company}
                                                className={(isSubmitting || !leadInfo.name || !leadInfo.email || !leadInfo.company) ? 'opacity-50 cursor-not-allowed' : ''}
                                            >
                                                {isSubmitting ? 'Analyzing...' : 'Generate Roadmap'}
                                                {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
                                            </Button>
                                        </div>
                                    </form>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="complete"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-foreground text-background p-8 md:p-14 border-2 border-background"
                                >
                                    <div className="text-center flex flex-col items-center gap-4">
                                        <p className="text-lg font-bold opacity-80 leading-snug mb-4 max-w-xl mx-auto">
                                            We'll review these inputs on a brief call, identify the exact bottleneck, and outline the next steps.
                                        </p>
                                        <p className="text-xs font-black uppercase tracking-widest opacity-50 mt-4">
                                            Redirecting you securely...
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </main>
    );
}
