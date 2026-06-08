"use client";

import { useState } from "react";
import { Loader2, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import ReactMarkdown from "react-markdown";

export default function CreatorIntelligencePage() {
    const [loading, setLoading] = useState(false);
    const [report, setReport] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        handle: "",
        platform: "Instagram",
        followers: "",
        avgViews: "",
        niche: "",
    });

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleAnalyze = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setReport(null);

        try {
            const res = await fetch("/api/creator-intel", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (data.report) {
                setReport(data.report);
            } else {
                setReport("Failed to generate analysis. Please try again later.");
            }
        } catch (error) {
            console.error("Analysis error:", error);
            setReport("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-8">
            <header className="border-b-4 border-foreground pb-6 mb-8">
                <h1 className="font-heading text-4xl md:text-5xl font-black uppercase text-foreground drop-shadow-[4px_4px_0_rgba(255,42,0,1)]">
                    Creator Intelligence Layer
                </h1>
                <p className="text-xl font-bold text-foreground mt-4 bg-accent-blue inline-block p-2 border-2 border-foreground">
                    AI-backed creator selection & ROI prediction engine.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Input Form */}
                <div className="bg-foreground p-8 border-2 border-foreground brutalist-shadow">
                    <h2 className="font-heading text-2xl font-black uppercase text-background mb-6 border-b-2 border-background pb-2">
                        Input Target Entity
                    </h2>

                    <form onSubmit={handleAnalyze} className="space-y-6">
                        <div>
                            <label className="block text-sm font-black text-background uppercase mb-2">Creator Handle / Name</label>
                            <input
                                type="text"
                                placeholder="@username"
                                className="w-full bg-background border-2 border-background px-4 py-3 text-foreground font-bold focus:outline-none focus:border-accent-yellow transition-none brutalist-shadow-yellow"
                                value={formData.handle}
                                onChange={(e) => handleChange("handle", e.target.value)}
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-black text-background uppercase mb-2">Platform</label>
                                <select
                                    className="w-full bg-background border-2 border-background px-4 py-3 text-foreground font-bold focus:outline-none focus:border-accent-yellow transition-none appearance-none brutalist-shadow-yellow"
                                    value={formData.platform}
                                    onChange={(e) => handleChange("platform", e.target.value)}
                                >
                                    <option>Instagram</option>
                                    <option>YouTube</option>
                                    <option>TikTok</option>
                                    <option>LinkedIn</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-black text-background uppercase mb-2">Follower Count</label>
                                <input
                                    type="text"
                                    placeholder="e.g. 50k"
                                    className="w-full bg-background border-2 border-background px-4 py-3 text-foreground font-bold focus:outline-none focus:border-accent-yellow transition-none brutalist-shadow-yellow"
                                    value={formData.followers}
                                    onChange={(e) => handleChange("followers", e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-black text-background uppercase mb-2">Avg Views / Reel</label>
                                <input
                                    type="text"
                                    placeholder="e.g. 15k"
                                    className="w-full bg-background border-2 border-background px-4 py-3 text-foreground font-bold focus:outline-none focus:border-accent-yellow transition-none brutalist-shadow-yellow"
                                    value={formData.avgViews}
                                    onChange={(e) => handleChange("avgViews", e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-black text-background uppercase mb-2">Content Niche</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Tech, Fitness"
                                    className="w-full bg-background border-2 border-background px-4 py-3 text-foreground font-bold focus:outline-none focus:border-accent-yellow transition-none brutalist-shadow-yellow"
                                    value={formData.niche}
                                    onChange={(e) => handleChange("niche", e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={loading || !formData.handle}
                            className="w-full mt-8 bg-accent-red text-white border-black hover:bg-black hover:text-accent-yellow brutalist-shadow transition-none disabled:opacity-50"
                        >
                            {loading ? (
                                <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Analyzing...</>
                            ) : (
                                <><Zap className="w-5 h-5 mr-2 fill-current" /> Run Deep Analysis</>
                            )}
                        </Button>
                    </form>
                </div>

                {/* Results Panel */}
                <div className="bg-background border-4 border-foreground p-8 relative min-h-[400px]">
                    {loading ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 z-10">
                            <div className="w-16 h-16 bg-accent-yellow border-4 border-foreground brutalist-shadow flex items-center justify-center mb-4">
                                <Loader2 className="w-8 h-8 text-black animate-spin font-black" />
                            </div>
                            <p className="font-heading font-black uppercase text-xl animate-pulse">Running Intelligence Layer...</p>
                        </div>
                    ) : null}

                    {!report && !loading && (
                        <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                            <Users className="w-16 h-16 mb-4" />
                            <p className="font-bold max-w-xs">Input creator metrics to generate a predictive ROI analysis and integration plan.</p>
                        </div>
                    )}

                    {report && (
                        <div className="prose prose-invert prose-lg max-w-none text-foreground font-bold custom-prose relative z-0">
                            <ReactMarkdown
                                components={{
                                    h1: ({ node, ...props }) => <h1 className="font-heading text-2xl uppercase text-black font-black mt-2 mb-6 bg-accent-yellow inline-block px-3 py-1 border-2 border-foreground" {...props} />,
                                    h2: ({ node, ...props }) => <h2 className="font-heading text-xl uppercase text-foreground font-black mt-8 mb-4 border-b-2 border-foreground pb-2" {...props} />,
                                    h3: ({ node, ...props }) => <h3 className="font-heading text-lg font-black text-accent-red mt-6 mb-2" {...props} />,
                                    p: ({ node, ...props }) => <p className="mb-4 leading-relaxed text-sm md:text-base" {...props} />,
                                    ul: ({ node, ...props }) => <ul className="space-y-2 mb-6 list-none pl-0 text-sm md:text-base" {...props} />,
                                    li: ({ node, ...props }) => <li className="flex items-start before:content-['→'] before:mr-3 before:text-accent-red before:font-black" {...props} />,
                                    strong: ({ node, ...props }) => <strong className="text-black font-black bg-foreground px-1" {...props} />,
                                }}
                            >
                                {report}
                            </ReactMarkdown>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
