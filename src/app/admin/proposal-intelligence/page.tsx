"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/ui/FadeUp";
import { Search, Loader2, AlertCircle } from "lucide-react";

type ObservationData = {
  aiObservations: {
    valueProposition: string;
    primaryAudience: string;
    messagingClarity: string;
    trustSignals: string;
    differentiation: string;
    callToActionQuality: string;
    growthOpportunities: string[];
  };
  technicalObservations: {
    issues: string[];
  };
};

export default function ProposalIntelligence() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<ObservationData | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await fetch('/api/scrape-and-score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || 'Failed to analyze website');
      }

      setData(result.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="inline-block border-2 border-foreground font-black text-xs uppercase tracking-widest px-3 py-1 mb-6 bg-accent-yellow text-black">
            Internal Tool
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tighter text-foreground mb-4">
            Proposal Intelligence
          </h1>
          <p className="font-bold opacity-80 max-w-2xl">
            Scrape any prospect's website and instantly generate a balanced strategic briefing to fuel your proposal and sales calls.
          </p>
        </div>

        <FadeUp>
          <form onSubmit={handleAnalyze} className="mb-12">
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50" />
                <input 
                  type="url" 
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://client-website.com" 
                  required
                  className="w-full bg-foreground/5 border-2 border-foreground/30 focus:border-accent-yellow p-4 pl-12 font-mono outline-none transition-colors"
                />
              </div>
              <Button type="submit" disabled={loading} className="shrink-0 h-[56px]">
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Analyze Website"
                )}
              </Button>
            </div>
          </form>
        </FadeUp>

        {error && (
          <FadeUp className="mb-12 bg-accent-red/10 border-2 border-accent-red p-6 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-accent-red shrink-0" />
            <div>
              <h3 className="font-black text-accent-red uppercase mb-1">Analysis Failed</h3>
              <p className="font-bold text-sm opacity-80">{error}</p>
            </div>
          </FadeUp>
        )}

        {data && (
          <FadeUp className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column: AI Observations */}
            <div className="space-y-6">
              <div className="bg-foreground text-background p-4 border-b-4 border-accent-yellow">
                <h2 className="font-heading font-black text-2xl uppercase tracking-tight flex items-center gap-2">
                  <span className="w-3 h-3 bg-accent-yellow rounded-full"></span>
                  Strategic Intelligence
                </h2>
              </div>

              <div className="grid gap-6">
                <ObservationCard title="Value Proposition" content={data.aiObservations.valueProposition} />
                <ObservationCard title="Primary Audience" content={data.aiObservations.primaryAudience} />
                <ObservationCard title="Messaging Clarity" content={data.aiObservations.messagingClarity} />
                <ObservationCard title="Trust & Authority" content={data.aiObservations.trustSignals} />
                <ObservationCard title="Differentiation" content={data.aiObservations.differentiation} />
                <ObservationCard title="Conversion Quality" content={data.aiObservations.callToActionQuality} />
                
                <div className="border-2 border-foreground p-6 bg-accent-yellow text-black brutalist-shadow-sm">
                  <h3 className="font-black uppercase tracking-widest text-xs mb-4 opacity-80 border-b-2 border-black/20 pb-2">Growth Opportunities</h3>
                  <ul className="space-y-3">
                    {data.aiObservations.growthOpportunities.map((opp, i) => (
                      <li key={i} className="flex gap-3 text-sm font-bold">
                        <span className="font-black">→</span>
                        {opp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Technical Observations */}
            <div className="space-y-6">
              <div className="bg-foreground text-background p-4 border-b-4 border-accent-red">
                <h2 className="font-heading font-black text-2xl uppercase tracking-tight flex items-center gap-2">
                  <span className="w-3 h-3 bg-accent-red rounded-full"></span>
                  Technical Audit
                </h2>
              </div>

              <div className="border-2 border-foreground p-6 bg-background">
                {data.technicalObservations.issues.length > 0 ? (
                  <ul className="space-y-4">
                    {data.technicalObservations.issues.map((issue, i) => (
                      <li key={i} className="flex items-start gap-3 bg-foreground/5 p-4 border border-foreground/10">
                        <AlertCircle className="w-5 h-5 text-accent-red shrink-0 mt-0.5" />
                        <span className="font-bold text-sm">{issue}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-6 text-center font-bold opacity-50 border-2 border-dashed border-foreground/30">
                    No major technical issues identified by the AI.
                  </div>
                )}
              </div>
            </div>

          </FadeUp>
        )}
      </div>
    </div>
  );
}

function ObservationCard({ title, content }: { title: string, content: string }) {
  return (
    <div className="border-2 border-foreground p-5 bg-background hover:bg-foreground/5 transition-colors">
      <h3 className="font-black uppercase tracking-widest text-xs text-accent-blue mb-2">{title}</h3>
      <p className="font-bold text-sm leading-relaxed">{content}</p>
    </div>
  );
}
