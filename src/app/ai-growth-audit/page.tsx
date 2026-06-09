"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CALENDLY_URL } from "@/lib/config";

const INDUSTRIES = [
    "D2C / E-commerce", "Wellness & Ayurveda", "Fashion & Lifestyle",
    "Food & Beverage", "SaaS / Tech", "Education / EdTech",
    "Real Estate", "Healthcare", "Finance / Fintech", "Other"
];

const CHANNELS = [
    "Meta Ads", "Google Ads", "Instagram (Organic)", "LinkedIn",
    "YouTube", "Influencer / Creator", "WhatsApp Marketing", "Email Marketing", "SEO"
];

const REVENUE_RANGES = [
    "Under ₹5 Lakhs/mo", "₹5L – ₹20L/mo", "₹20L – ₹50L/mo",
    "₹50L – ₹1 Crore/mo", "Above ₹1 Crore/mo"
];

const AD_SPEND_RANGES = [
    "Under ₹50K/mo", "₹50K – ₹2L/mo", "₹2L – ₹5L/mo",
    "₹5L – ₹15L/mo", "Above ₹15L/mo", "Not running paid ads yet"
];

const TEAM_SIZES = ["Solo founder", "2–5", "6–15", "16–50", "50+"];
const TIMELINES = ["ASAP (within 30 days)", "1–3 months", "3–6 months", "Just exploring for now"];

interface FormData {
    // Step 1
    contactName: string;
    email: string;
    phone: string;
    companyName: string;
    role: string;
    // Step 2
    website: string;
    industry: string;
    monthlyRevenue: string;
    teamSize: string;
    businessAge: string;
    // Step 3
    monthlyAdSpend: string;
    currentChannels: string[];
    cac: string;
    currentAgency: string;
    // Step 4
    primaryChallenge: string;
    goals: string;
    timeline: string;
}

const initialForm: FormData = {
    contactName: "", email: "", phone: "", companyName: "", role: "",
    website: "", industry: "", monthlyRevenue: "", teamSize: "", businessAge: "",
    monthlyAdSpend: "", currentChannels: [], cac: "", currentAgency: "",
    primaryChallenge: "", goals: "", timeline: "",
};

function InputField({ label, placeholder, value, onChange, type = "text", required = true }: {
    label: string; placeholder: string; value: string;
    onChange: (v: string) => void; type?: string; required?: boolean;
}) {
    return (
        <div>
            <label className="block text-xs font-black uppercase tracking-widest text-background mb-2">
                {label}{required && <span className="text-accent-yellow ml-1">*</span>}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-background border-2 border-background px-4 py-3 text-foreground font-bold placeholder:text-gray-500 focus:outline-none focus:border-accent-yellow transition-none text-sm"
            />
        </div>
    );
}

function SelectField({ label, value, onChange, options }: {
    label: string; value: string; onChange: (v: string) => void; options: string[];
}) {
    return (
        <div>
            <label className="block text-xs font-black uppercase tracking-widest text-background mb-2">
                {label}<span className="text-accent-yellow ml-1">*</span>
            </label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-background border-2 border-background px-4 py-3 text-foreground font-bold focus:outline-none focus:border-accent-yellow transition-none appearance-none text-sm"
            >
                <option value="" disabled>Select...</option>
                {options.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
        </div>
    );
}

function CheckboxGroup({ label, options, selected, onChange }: {
    label: string; options: string[]; selected: string[]; onChange: (v: string[]) => void;
}) {
    const toggle = (opt: string) => {
        onChange(selected.includes(opt) ? selected.filter(s => s !== opt) : [...selected, opt]);
    };
    return (
        <div>
            <label className="block text-xs font-black uppercase tracking-widest text-background mb-3">
                {label}<span className="text-accent-yellow ml-1">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
                {options.map((opt) => (
                    <button
                        key={opt}
                        type="button"
                        onClick={() => toggle(opt)}
                        className={`px-3 py-2 text-xs font-black uppercase tracking-wider border-2 transition-none ${selected.includes(opt)
                            ? "bg-accent-yellow text-black border-black"
                            : "bg-background text-foreground border-foreground hover:border-accent-yellow"
                            }`}
                    >
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    );
}

const steps = [
    { num: 1, label: "Contact Info" },
    { num: 2, label: "Your Business" },
    { num: 3, label: "Marketing" },
    { num: 4, label: "Goals" },
];

export default function AIGrowthAuditPage() {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState<FormData>(initialForm);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const set = (field: keyof FormData, value: string | string[]) =>
        setForm((prev) => ({ ...prev, [field]: value }));

    const isStep1Valid = form.contactName && form.email && form.phone && form.companyName && form.role;
    const isStep2Valid = form.website && form.industry && form.monthlyRevenue && form.teamSize;
    const isStep3Valid = form.monthlyAdSpend && form.currentChannels.length > 0;
    const isStep4Valid = form.primaryChallenge.length > 30 && form.timeline;

    const stepValid = [null, isStep1Valid, isStep2Valid, isStep3Valid, isStep4Valid];

    const handleSubmit = async () => {
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/audit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (data.success) {
                setSubmitted(true);
            } else {
                setError(data.error || "Something went wrong. Please try again.");
            }
        } catch {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-background pt-32 pb-24 flex items-center">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-2 border-foreground bg-foreground p-10 md:p-16"
                    >
                        {/* Confirmation Header */}
                        <div className="flex items-start gap-6 mb-10 pb-10 border-b-2 border-background">
                            <div className="w-16 h-16 bg-accent-yellow flex items-center justify-center border-2 border-background shrink-0">
                                <CheckCircle2 className="w-8 h-8 text-black" />
                            </div>
                            <div>
                                <span className="text-xs font-black uppercase tracking-widest text-background opacity-60 block mb-2">
                                    Application Received
                                </span>
                                <h1 className="font-heading text-3xl md:text-4xl font-black uppercase text-background leading-tight">
                                    We&apos;ve Got {form.companyName}.<br />
                                    We'll Be In Touch.
                                </h1>
                            </div>
                        </div>

                        {/* What Happens Next */}
                        <div className="space-y-6 mb-10">
                            <h2 className="text-xs font-black uppercase tracking-widest text-background opacity-60">
                                What Happens Next
                            </h2>
                            {[
                                {
                                    num: "01",
                                    title: "We Review Your Application",
                                    body: "Our team reads every submission personally. We study your business, your numbers, and your challenge — before we say a word.",
                                    time: "Within 24 hours",
                                    color: "bg-accent-yellow text-black",
                                },
                                {
                                    num: "02",
                                    title: "We Qualify You",
                                    body: "We only work with brands we can genuinely move the needle for. If we believe we can create a meaningful transformation, we'll reach out.",
                                    time: "Within 48 hours",
                                    color: "bg-accent-red text-white",
                                },
                                {
                                    num: "03",
                                    title: "You Get a Personalised Audit Report",
                                    body: "No templates. No generic advice. A custom-built growth blueprint made specifically for your brand, your numbers, your market.",
                                    time: "After qualification call",
                                    color: "bg-accent-blue text-white",
                                },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className={`${item.color} w-12 h-12 flex items-center justify-center font-heading font-black text-sm border-2 border-background shrink-0`}>
                                        {item.num}
                                    </div>
                                    <div className="flex-1 border-b-2 border-background pb-6 last:border-b-0">
                                        <div className="flex items-start justify-between gap-4 mb-1">
                                            <span className="font-heading font-black uppercase text-background text-base">{item.title}</span>
                                            <span className="text-xs font-black uppercase tracking-widest text-background opacity-50 shrink-0">{item.time}</span>
                                        </div>
                                        <p className="text-sm font-bold text-background opacity-70 leading-snug">{item.body}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Contact line */}
                        <div className="bg-background p-6 mb-8">
                            <p className="text-sm font-bold text-foreground mb-1">
                                We'll reach out to <span className="font-black text-accent-red">{form.email}</span> and <span className="font-black text-accent-red">{form.phone}</span>.
                            </p>
                            <p className="text-xs font-bold text-foreground opacity-60">
                                Check your inbox and keep your phone handy. We move fast.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button href="/" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground">
                                ← Back to Home
                            </Button>
                            <Button
                                href={CALENDLY_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-accent-yellow text-black border-black"
                            >
                                Can&apos;t wait? Book directly →
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pt-32 pb-24">
            <div className="container mx-auto px-4 md:px-6">

                {/* Page Header */}
                <div className="max-w-3xl mx-auto mb-12 text-center">
                    <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 bg-accent-red text-white">
                        Free — For Qualified Brands Only
                    </span>
                    <h1 className="font-heading text-4xl md:text-6xl font-black uppercase text-foreground mb-6 tracking-tighter leading-[0.95] drop-shadow-[4px_4px_0_rgba(255,42,0,1)]">
                        Apply for Your<br />
                        <span className="bg-foreground text-background px-4 inline-block mt-2">Brand Audit</span>
                    </h1>
                    <p className="text-lg font-bold text-foreground max-w-xl mx-auto leading-snug">
                        We review every application personally. If we can genuinely transform your brand, you'll get a custom growth report — built on your actual numbers.
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="max-w-2xl mx-auto mb-8">
                    <div className="flex items-center justify-between mb-3">
                        {steps.map((s, i) => (
                            <div key={s.num} className="flex items-center flex-1">
                                <div className={`flex items-center gap-2 ${step >= s.num ? "opacity-100" : "opacity-30"}`}>
                                    <div className={`w-8 h-8 border-2 border-foreground flex items-center justify-center font-black text-xs ${step > s.num ? "bg-accent-yellow text-black border-black" : step === s.num ? "bg-foreground text-background" : "bg-background text-foreground"}`}>
                                        {step > s.num ? "✓" : s.num}
                                    </div>
                                    <span className="hidden sm:block text-xs font-black uppercase tracking-wider text-foreground">
                                        {s.label}
                                    </span>
                                </div>
                                {i < steps.length - 1 && (
                                    <div className={`flex-1 h-0.5 mx-2 ${step > s.num ? "bg-accent-yellow" : "bg-foreground opacity-20"}`} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form Card */}
                <div className="max-w-2xl mx-auto bg-foreground border-2 border-foreground">
                    <div className="p-8 md:p-10">
                        <AnimatePresence mode="wait">

                            {/* ─── STEP 1: Contact Info ─── */}
                            {step === 1 && (
                                <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.1 }} className="space-y-5">
                                    <div className="mb-6">
                                        <span className="font-heading font-black uppercase text-background text-xl">Who are we talking to?</span>
                                        <p className="text-sm font-bold text-background opacity-60 mt-1">We reach out to real decision-makers — not inboxes.</p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <InputField label="Your Full Name" placeholder="Priya Sharma" value={form.contactName} onChange={(v) => set("contactName", v)} />
                                        <InputField label="Your Role" placeholder="Founder / Marketing Head" value={form.role} onChange={(v) => set("role", v)} />
                                        <InputField label="Company Name" placeholder="Acme Brands Pvt Ltd" value={form.companyName} onChange={(v) => set("companyName", v)} />
                                        <InputField label="Work Email" placeholder="you@company.com" type="email" value={form.email} onChange={(v) => set("email", v)} />
                                        <div className="sm:col-span-2">
                                            <InputField label="Mobile Number" placeholder="+91 98765 43210" type="tel" value={form.phone} onChange={(v) => set("phone", v)} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* ─── STEP 2: Business Details ─── */}
                            {step === 2 && (
                                <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.1 }} className="space-y-5">
                                    <div className="mb-6">
                                        <span className="font-heading font-black uppercase text-background text-xl">Tell us about {form.companyName}.</span>
                                        <p className="text-sm font-bold text-background opacity-60 mt-1">The more specific, the more useful the audit.</p>
                                    </div>
                                    <InputField label="Website URL" placeholder="https://yourcompany.com" value={form.website} onChange={(v) => set("website", v)} />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <SelectField label="Industry" value={form.industry} onChange={(v) => set("industry", v)} options={INDUSTRIES} />
                                        <SelectField label="Monthly Revenue" value={form.monthlyRevenue} onChange={(v) => set("monthlyRevenue", v)} options={REVENUE_RANGES} />
                                        <SelectField label="Team Size" value={form.teamSize} onChange={(v) => set("teamSize", v)} options={TEAM_SIZES} />
                                        <InputField label="How old is the business?" placeholder="e.g. 3 years" value={form.businessAge} onChange={(v) => set("businessAge", v)} required={false} />
                                    </div>
                                </motion.div>
                            )}

                            {/* ─── STEP 3: Marketing Details ─── */}
                            {step === 3 && (
                                <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.1 }} className="space-y-6">
                                    <div className="mb-6">
                                        <span className="font-heading font-black uppercase text-background text-xl">How are you marketing right now?</span>
                                        <p className="text-sm font-bold text-background opacity-60 mt-1">Be honest. We&apos;ve seen everything — nothing surprises us.</p>
                                    </div>
                                    <SelectField label="Monthly Ad Spend" value={form.monthlyAdSpend} onChange={(v) => set("monthlyAdSpend", v)} options={AD_SPEND_RANGES} />
                                    <CheckboxGroup
                                        label="Active Marketing Channels (select all that apply)"
                                        options={CHANNELS}
                                        selected={form.currentChannels}
                                        onChange={(v) => set("currentChannels", v)}
                                    />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <InputField label="Current CAC (if known)" placeholder="e.g. ₹850 per customer" value={form.cac} onChange={(v) => set("cac", v)} required={false} />
                                        <InputField label="Currently with an agency?" placeholder="Yes — XYZ Agency / No" value={form.currentAgency} onChange={(v) => set("currentAgency", v)} required={false} />
                                    </div>
                                </motion.div>
                            )}

                            {/* ─── STEP 4: Goals ─── */}
                            {step === 4 && (
                                <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.1 }} className="space-y-5">
                                    <div className="mb-6">
                                        <span className="font-heading font-black uppercase text-background text-xl">What do you actually want?</span>
                                        <p className="text-sm font-bold text-background opacity-60 mt-1">The more specific, the sharper the audit. Don&apos;t be polite.</p>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-background mb-2">
                                            What's your primary challenge right now?<span className="text-accent-yellow ml-1">*</span>
                                        </label>
                                        <textarea
                                            placeholder="Be specific. What's actually broken? Where are you bleeding money or attention? What's been tried and failed?"
                                            rows={4}
                                            value={form.primaryChallenge}
                                            onChange={(e) => set("primaryChallenge", e.target.value)}
                                            className="w-full bg-background border-2 border-background px-4 py-3 text-foreground font-bold placeholder:text-gray-500 focus:outline-none focus:border-accent-yellow transition-none resize-none text-sm"
                                        />
                                        <p className={`text-xs font-black mt-1 ${form.primaryChallenge.length < 30 ? "text-accent-yellow" : "text-green-400"}`}>
                                            {form.primaryChallenge.length < 30
                                                ? `${30 - form.primaryChallenge.length} more characters for better insights`
                                                : "✓ Good — we have enough to work with"}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest text-background mb-2">
                                            What would a win look like in 90 days?
                                        </label>
                                        <textarea
                                            placeholder="e.g. ₹1 Crore/month revenue, ROAS above 4x, 10,000 new customers..."
                                            rows={3}
                                            value={form.goals}
                                            onChange={(e) => set("goals", e.target.value)}
                                            className="w-full bg-background border-2 border-background px-4 py-3 text-foreground font-bold placeholder:text-gray-500 focus:outline-none focus:border-accent-yellow transition-none resize-none text-sm"
                                        />
                                    </div>
                                    <SelectField label="How soon do you want to move?" value={form.timeline} onChange={(v) => set("timeline", v)} options={TIMELINES} />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Error */}
                        {error && (
                            <div className="mt-4 bg-accent-red text-white px-4 py-3 border-2 border-black font-bold text-sm">
                                {error}
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className={`mt-8 flex gap-4 ${step > 1 ? "justify-between" : "justify-end"}`}>
                            {step > 1 && (
                                <Button
                                    variant="outline"
                                    onClick={() => setStep((s) => s - 1)}
                                    className="border-background text-background hover:bg-background hover:text-foreground"
                                >
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back
                                </Button>
                            )}

                            {step < 4 ? (
                                <Button
                                    onClick={() => setStep((s) => s + 1)}
                                    disabled={!stepValid[step]}
                                    className="bg-accent-yellow text-black border-black brutalist-shadow disabled:opacity-40"
                                >
                                    Continue
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            ) : (
                                <Button
                                    onClick={handleSubmit}
                                    disabled={!isStep4Valid || loading}
                                    className="bg-accent-red text-white border-black brutalist-shadow disabled:opacity-40 min-w-[180px]"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        <>
                                            Submit Application
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </>
                                    )}
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Footer note */}
                    <div className="bg-background border-t-2 border-foreground px-8 py-4">
                        <p className="text-xs font-bold text-foreground opacity-50 uppercase tracking-widest">
                            🔒 Your data is confidential. We never share it. We read every submission personally.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
