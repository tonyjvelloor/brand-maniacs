"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2, XCircle, FileText, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { AuditSubmission } from "@/app/api/audit/route";

const STATUS_STYLES: Record<string, string> = {
    pending:    "bg-accent-yellow text-black",
    qualified:  "bg-accent-blue text-white",
    rejected:   "bg-foreground text-background opacity-50",
    report_sent: "bg-green-600 text-white",
};

const STATUS_LABELS: Record<string, string> = {
    pending:    "Pending Review",
    qualified:  "Qualified",
    rejected:   "Rejected",
    report_sent: "Report Sent",
};

export default function AuditAdminPage() {
    const [submissions, setSubmissions] = useState<AuditSubmission[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const [generatingId, setGeneratingId] = useState<string | null>(null);
    const [reportPreview, setReportPreview] = useState<{ id: string; report: string } | null>(null);
    const [filter, setFilter] = useState<string>("all");

    const fetchSubmissions = async () => {
        const res = await fetch("/api/audit");
        const data = await res.json();
        setSubmissions(data.reverse()); // newest first
        setLoading(false);
    };

    useEffect(() => { fetchSubmissions(); }, []);

    const updateStatus = async (id: string, status: string) => {
        await fetch("/api/audit-admin", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, status }),
        });
        fetchSubmissions();
    };

    const generateReport = async (id: string) => {
        setGeneratingId(id);
        const res = await fetch("/api/audit-admin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        });
        const data = await res.json();
        if (data.report) {
            setReportPreview({ id, report: data.report });
            fetchSubmissions();
        }
        setGeneratingId(null);
    };

    const filtered = filter === "all"
        ? submissions
        : submissions.filter((s) => s.status === filter);

    const counts = {
        all: submissions.length,
        pending: submissions.filter(s => s.status === "pending").length,
        qualified: submissions.filter(s => s.status === "qualified").length,
        report_sent: submissions.filter(s => s.status === "report_sent").length,
        rejected: submissions.filter(s => s.status === "rejected").length,
    };

    return (
        <div>
            <div className="mb-8">
                <h1 className="font-heading text-3xl font-black uppercase text-foreground mb-2 tracking-tighter">
                    Audit Applications
                </h1>
                <p className="text-sm font-bold text-foreground opacity-60 uppercase tracking-widest">
                    Review, qualify, and generate reports for incoming brand audits.
                </p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-0 border-2 border-foreground bg-foreground mb-8">
                {(Object.keys(counts) as (keyof typeof counts)[]).map((key) => (
                    <button
                        key={key}
                        onClick={() => setFilter(key)}
                        className={`p-4 border-r-2 border-b-2 md:border-b-0 border-foreground last:border-r-0 flex flex-col items-center transition-none ${filter === key ? "bg-accent-yellow text-black" : "bg-background text-foreground hover:bg-accent-yellow hover:text-black"}`}
                    >
                        <span className="font-heading text-3xl font-black">{counts[key]}</span>
                        <span className="text-xs font-black uppercase tracking-widest opacity-70">{key.replace("_", " ")}</span>
                    </button>
                ))}
            </div>

            {/* Submissions List */}
            {loading ? (
                <div className="flex items-center gap-3 p-8 border-2 border-foreground">
                    <Loader2 className="w-6 h-6 animate-spin" />
                    <span className="font-black uppercase text-sm">Loading submissions...</span>
                </div>
            ) : filtered.length === 0 ? (
                <div className="p-12 border-2 border-foreground text-center">
                    <p className="font-black uppercase text-foreground opacity-40 text-sm tracking-widest">
                        No submissions in this category yet.
                    </p>
                </div>
            ) : (
                <div className="space-y-0 border-2 border-foreground bg-foreground">
                    {filtered.map((sub) => (
                        <div key={sub.id} className="bg-background border-b-2 border-foreground last:border-b-0">

                            {/* Summary Row */}
                            <div className="p-6 flex flex-col md:flex-row md:items-center gap-4 justify-between">
                                <div className="flex items-start gap-4 flex-1 min-w-0">
                                    <div className="shrink-0">
                                        <span className={`inline-block text-xs font-black uppercase tracking-widest px-2 py-1 border-2 border-foreground ${STATUS_STYLES[sub.status]}`}>
                                            {STATUS_LABELS[sub.status]}
                                        </span>
                                    </div>
                                    <div className="min-w-0">
                                        <div className="font-heading text-xl font-black uppercase text-foreground truncate">
                                            {sub.companyName}
                                        </div>
                                        <div className="text-sm font-bold text-foreground opacity-60">
                                            {sub.contactName} · {sub.role} · {sub.email}
                                        </div>
                                        <div className="text-xs font-black text-foreground opacity-40 uppercase tracking-widest mt-1">
                                            {sub.industry} · {sub.monthlyRevenue} · {new Date(sub.submittedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                    <a href={sub.website} target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-foreground hover:bg-foreground hover:text-background transition-none">
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                    <button
                                        onClick={() => setExpandedId(expandedId === sub.id ? null : sub.id)}
                                        className="p-2 border-2 border-foreground hover:bg-foreground hover:text-background transition-none"
                                    >
                                        {expandedId === sub.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            {/* Expanded Detail */}
                            <AnimatePresence>
                                {expandedId === sub.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.15 }}
                                        className="overflow-hidden border-t-2 border-foreground"
                                    >
                                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-background">

                                            <DataBlock label="Contact" items={[
                                                { k: "Phone", v: sub.phone },
                                                { k: "Email", v: sub.email },
                                                { k: "Role", v: sub.role },
                                            ]} />
                                            <DataBlock label="Business" items={[
                                                { k: "Industry", v: sub.industry },
                                                { k: "Revenue", v: sub.monthlyRevenue },
                                                { k: "Team", v: sub.teamSize },
                                                { k: "Age", v: sub.businessAge || "—" },
                                            ]} />
                                            <DataBlock label="Marketing" items={[
                                                { k: "Ad Spend", v: sub.monthlyAdSpend },
                                                { k: "CAC", v: sub.cac || "Unknown" },
                                                { k: "Agency", v: sub.currentAgency || "—" },
                                                { k: "Channels", v: (sub.currentChannels || []).join(", ") || "—" },
                                            ]} />

                                            <div className="md:col-span-2 lg:col-span-3 space-y-3">
                                                <div className="border-2 border-foreground p-4">
                                                    <span className="text-xs font-black uppercase tracking-widest text-foreground opacity-50 block mb-2">Primary Challenge</span>
                                                    <p className="font-bold text-sm text-foreground">{sub.primaryChallenge}</p>
                                                </div>
                                                {sub.goals && (
                                                    <div className="border-2 border-foreground p-4">
                                                        <span className="text-xs font-black uppercase tracking-widest text-foreground opacity-50 block mb-2">Goals (90 days)</span>
                                                        <p className="font-bold text-sm text-foreground">{sub.goals}</p>
                                                    </div>
                                                )}
                                                <div className="border-2 border-foreground p-4 inline-block">
                                                    <span className="text-xs font-black uppercase tracking-widest text-foreground opacity-50 block mb-1">Timeline</span>
                                                    <p className="font-bold text-sm text-foreground">{sub.timeline}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="border-t-2 border-foreground p-6 flex flex-wrap gap-3 bg-background">
                                            {sub.status === "pending" && (
                                                <>
                                                    <button
                                                        onClick={() => updateStatus(sub.id, "qualified")}
                                                        className="flex items-center gap-2 px-4 py-2 bg-accent-blue text-white border-2 border-foreground font-black text-xs uppercase tracking-widest hover:bg-foreground transition-none"
                                                    >
                                                        <CheckCircle2 className="w-4 h-4" />
                                                        Qualify
                                                    </button>
                                                    <button
                                                        onClick={() => updateStatus(sub.id, "rejected")}
                                                        className="flex items-center gap-2 px-4 py-2 bg-accent-red text-white border-2 border-foreground font-black text-xs uppercase tracking-widest hover:bg-foreground transition-none"
                                                    >
                                                        <XCircle className="w-4 h-4" />
                                                        Reject
                                                    </button>
                                                </>
                                            )}
                                            {sub.status === "qualified" && !sub.report && (
                                                <button
                                                    onClick={() => generateReport(sub.id)}
                                                    disabled={generatingId === sub.id}
                                                    className="flex items-center gap-2 px-4 py-2 bg-accent-yellow text-black border-2 border-black font-black text-xs uppercase tracking-widest hover:bg-black hover:text-accent-yellow transition-none disabled:opacity-50"
                                                >
                                                    {generatingId === sub.id ? (
                                                        <><Loader2 className="w-4 h-4 animate-spin" /> Generating...</>
                                                    ) : (
                                                        <><FileText className="w-4 h-4" /> Generate AI Report</>
                                                    )}
                                                </button>
                                            )}
                                            {sub.report && (
                                                <button
                                                    onClick={() => setReportPreview({ id: sub.id, report: sub.report! })}
                                                    className="flex items-center gap-2 px-4 py-2 bg-foreground text-background border-2 border-foreground font-black text-xs uppercase tracking-widest hover:bg-accent-yellow hover:text-black hover:border-black transition-none"
                                                >
                                                    <FileText className="w-4 h-4" />
                                                    View Report
                                                </button>
                                            )}
                                            {sub.status !== "pending" && (
                                                <button
                                                    onClick={() => updateStatus(sub.id, "pending")}
                                                    className="px-4 py-2 border-2 border-foreground text-foreground font-black text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-none"
                                                >
                                                    Reset to Pending
                                                </button>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            )}

            {/* Report Preview Modal */}
            <AnimatePresence>
                {reportPreview && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/80 flex items-start justify-center p-4 md:p-10 overflow-y-auto"
                        onClick={() => setReportPreview(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95 }}
                            className="bg-foreground border-2 border-background max-w-3xl w-full p-8 md:p-12 my-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between mb-8 pb-6 border-b-2 border-background">
                                <span className="font-heading text-2xl font-black uppercase text-background">Audit Report</span>
                                <button
                                    onClick={() => setReportPreview(null)}
                                    className="border-2 border-background px-4 py-2 text-background font-black text-xs uppercase hover:bg-background hover:text-foreground transition-none"
                                >
                                    Close
                                </button>
                            </div>
                            <div className="prose prose-invert max-w-none text-background font-bold">
                                <ReactMarkdown
                                    components={{
                                        h1: ({ ...props }) => <h1 className="font-heading text-2xl uppercase text-accent-yellow font-black mt-8 mb-4 bg-black px-3 py-1 inline-block" {...props} />,
                                        h2: ({ ...props }) => <h2 className="font-heading text-xl uppercase text-background font-black mt-6 mb-3 border-b-2 border-background pb-2" {...props} />,
                                        p: ({ ...props }) => <p className="mb-4 leading-relaxed text-background" {...props} />,
                                        ul: ({ ...props }) => <ul className="space-y-2 mb-4 list-none pl-0" {...props} />,
                                        li: ({ ...props }) => <li className="flex items-start before:content-['→'] before:mr-2 before:text-accent-yellow before:font-black text-background" {...props} />,
                                        strong: ({ ...props }) => <strong className="text-accent-yellow font-black" {...props} />,
                                    }}
                                >
                                    {reportPreview.report}
                                </ReactMarkdown>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function DataBlock({ label, items }: { label: string; items: { k: string; v: string }[] }) {
    return (
        <div className="border-2 border-foreground p-4">
            <span className="text-xs font-black uppercase tracking-widest text-foreground opacity-50 block mb-3">{label}</span>
            <dl className="space-y-1">
                {items.map(({ k, v }) => (
                    <div key={k} className="flex gap-2">
                        <dt className="text-xs font-black uppercase text-foreground opacity-50 shrink-0 w-16">{k}</dt>
                        <dd className="text-xs font-bold text-foreground">{v}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}
