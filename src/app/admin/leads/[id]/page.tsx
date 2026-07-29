import { Redis } from '@upstash/redis';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, AlertTriangle, ShieldAlert, Rocket, Globe } from 'lucide-react';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function LeadBriefPage({ params }: { params: { id: string } }) {
    const redis = (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) 
        ? new Redis({
            url: process.env.UPSTASH_REDIS_REST_URL,
            token: process.env.UPSTASH_REDIS_REST_TOKEN,
          })
        : null;

    if (!redis) {
        return <div className="p-12 text-red-500 font-bold">Redis configuration missing.</div>;
    }

    const rawLead = await redis.get(`lead:${params.id}`);
    if (!rawLead) {
        notFound();
    }

    const lead = typeof rawLead === 'string' ? JSON.parse(rawLead) : rawLead;
    const brief = lead.aiBrief;
    const contact = lead.contact;
    const raw = lead.rawAnswers;
    const website = lead.websiteData;

    return (
        <main className="min-h-screen bg-[#F4F4F0] text-[#1C1C1C] p-8 md:p-12 font-sans pt-24">
            <div className="max-w-5xl mx-auto">
                <Link href="/admin/leads" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-yellow-600 transition-colors mb-8">
                    <ArrowLeft className="w-4 h-4" /> Back to Pipeline
                </Link>

                {/* Header Header */}
                <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <span className="inline-block bg-accent-yellow text-black border-2 border-black font-black text-xs px-3 py-1 uppercase tracking-widest mb-4">
                            Client Intelligence
                        </span>
                        <h1 className="font-heading text-4xl font-black uppercase tracking-tighter leading-none mb-2">{contact?.company}</h1>
                        <p className="font-bold opacity-70">{contact?.name} • <a href={`mailto:${contact?.email}`} className="underline">{contact?.email}</a></p>
                        {contact?.website && (
                            <a href={contact.website} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-blue-600 hover:underline flex items-center gap-1 mt-2">
                                <Globe className="w-3 h-3" /> {contact.website}
                            </a>
                        )}
                    </div>
                    <div className="text-right flex gap-8">
                        <div>
                            <div className="font-black uppercase tracking-widest text-xs opacity-50 mb-1">Status</div>
                            <div className="font-bold text-xl">{lead.status}</div>
                        </div>
                        <div>
                            <div className="font-black uppercase tracking-widest text-xs opacity-50 mb-1">Growth Score</div>
                            <div className="font-heading font-black text-4xl">{brief?.growthReadiness?.totalScore || 'N/A'}<span className="text-xl opacity-50">/100</span></div>
                        </div>
                    </div>
                </div>

                {/* AI Brief Content */}
                {brief ? (
                    <div className="space-y-8">
                        
                        {/* 1. Executive Summary & Strategy */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-2 bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <h3 className="font-black uppercase tracking-widest text-sm mb-4 border-l-4 border-black pl-3">Executive Summary</h3>
                                <p className="font-bold text-lg leading-snug mb-8">{brief.executiveSummary}</p>

                                <h3 className="font-black uppercase tracking-widest text-sm mb-4 border-l-4 border-black pl-3">Likely Business Stage</h3>
                                <p className="font-bold text-base">{brief.likelyBusinessStage}</p>
                            </div>

                            <div className="bg-black text-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <h3 className="font-black uppercase tracking-widest text-sm mb-4 text-accent-yellow border-l-4 border-accent-yellow pl-3">Confidence</h3>
                                <ul className="space-y-4">
                                    <li>
                                        <div className="text-xs font-bold uppercase opacity-70 mb-1">Messaging</div>
                                        <div className="w-full bg-gray-800 h-2"><div className="bg-accent-yellow h-2" style={{width: `${brief.confidenceScores.websiteMessaging}%`}}></div></div>
                                    </li>
                                    <li>
                                        <div className="text-xs font-bold uppercase opacity-70 mb-1">Positioning</div>
                                        <div className="w-full bg-gray-800 h-2"><div className="bg-accent-yellow h-2" style={{width: `${brief.confidenceScores.brandPositioning}%`}}></div></div>
                                    </li>
                                    <li>
                                        <div className="text-xs font-bold uppercase opacity-70 mb-1">Automation</div>
                                        <div className="w-full bg-gray-800 h-2"><div className="bg-accent-yellow h-2" style={{width: `${brief.confidenceScores.automation}%`}}></div></div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 2. Website & Messaging Audit */}
                        <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <div className="bg-gray-100 border-b-2 border-black p-4">
                                <h3 className="font-black uppercase tracking-widest text-sm flex items-center gap-2">
                                    <Globe className="w-4 h-4" /> Website Observations
                                </h3>
                            </div>
                            <div className="grid md:grid-cols-2">
                                <div className="p-6 md:border-r-2 border-black">
                                    <h4 className="font-black uppercase tracking-widest text-xs opacity-50 mb-4">Messaging (AI)</h4>
                                    <ul className="space-y-3">
                                        {brief.websiteHealth.aiObservations.map((obs: string, i: number) => (
                                            <li key={i} className="text-sm font-bold flex gap-2"><ArrowLeft className="w-4 h-4 shrink-0 rotate-180 opacity-50"/> {obs}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="p-6">
                                    <h4 className="font-black uppercase tracking-widest text-xs opacity-50 mb-4">Technical & Structure</h4>
                                    <ul className="space-y-3">
                                        {brief.websiteHealth.technicalObservations.map((obs: string, i: number) => (
                                            <li key={i} className="text-sm font-bold flex gap-2"><ArrowLeft className="w-4 h-4 shrink-0 rotate-180 opacity-50"/> {obs}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="border-t-2 border-black p-6 bg-gray-50">
                                <h4 className="font-black uppercase tracking-widest text-xs opacity-50 mb-4">Messaging Audit Breakdown</h4>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                                    <div><span className="block opacity-50 text-xs font-black uppercase mb-1">Value Prop</span><span className="font-bold">{brief.messagingAudit.valueProposition}</span></div>
                                    <div><span className="block opacity-50 text-xs font-black uppercase mb-1">Audience</span><span className="font-bold">{brief.messagingAudit.primaryAudience}</span></div>
                                    <div><span className="block opacity-50 text-xs font-black uppercase mb-1">Clarity</span><span className="font-bold">{brief.messagingAudit.messagingClarity}</span></div>
                                    <div><span className="block opacity-50 text-xs font-black uppercase mb-1">Trust</span><span className="font-bold">{brief.messagingAudit.trustSignals}</span></div>
                                    <div><span className="block opacity-50 text-xs font-black uppercase mb-1">Differentiation</span><span className="font-bold">{brief.messagingAudit.differentiation}</span></div>
                                    <div><span className="block opacity-50 text-xs font-black uppercase mb-1">CTA Quality</span><span className="font-bold">{brief.messagingAudit.callToActionQuality}</span></div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Obstacles & Opportunities */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-red-50 border-2 border-red-500 p-8 shadow-[4px_4px_0px_0px_rgba(239,68,68,1)] text-red-900">
                                <h3 className="font-black uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" /> Growth Constraints
                                </h3>
                                <ul className="space-y-2">
                                    {brief.growthConstraints.map((constraint: string, i: number) => (
                                        <li key={i} className="font-bold text-sm bg-white/50 p-3 border border-red-200">{constraint}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="bg-green-50 border-2 border-green-600 p-8 shadow-[4px_4px_0px_0px_rgba(22,163,74,1)] text-green-900">
                                <h3 className="font-black uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                                    <Rocket className="w-5 h-5" /> Immediate Opportunities
                                </h3>
                                <ul className="space-y-2">
                                    {brief.immediateOpportunities.map((opp: string, i: number) => (
                                        <li key={i} className="font-bold text-sm bg-white/50 p-3 border border-green-200">{opp}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* 4. The Pitch Prep */}
                        <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-8">
                            <div className="border-b-2 border-black pb-6 mb-6">
                                <h3 className="font-black uppercase tracking-widest text-sm mb-4 text-blue-600">Recommended Engagement Path</h3>
                                <div className="flex flex-wrap gap-2 items-center">
                                    {brief.suggestedEngagementPath.map((step: string, i: number) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <span className="font-bold bg-gray-100 border-2 border-black px-4 py-2">{step}</span>
                                            {i < brief.suggestedEngagementPath.length - 1 && (
                                                <ArrowLeft className="w-5 h-5 rotate-180 opacity-50 mx-2" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-black uppercase tracking-widest text-sm mb-4 text-purple-600">Relevant Case Studies</h3>
                                    <ul className="space-y-2">
                                        {brief.relevantCaseStudies.map((cs: string, i: number) => (
                                            <li key={i} className="font-bold flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-purple-600" /> {cs}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-black uppercase tracking-widest text-sm mb-4">Discovery Questions to Ask</h3>
                                    <ul className="space-y-3">
                                        {brief.suggestedQuestions.map((q: string, i: number) => (
                                            <li key={i} className="font-bold text-sm flex gap-2">
                                                <span className="opacity-50">{i+1}.</span> {q}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 5. Objection Handling */}
                        <div className="bg-accent-yellow border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-8">
                            <h3 className="font-black uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
                                <ShieldAlert className="w-5 h-5" /> Potential Objections
                            </h3>
                            <div className="grid gap-4">
                                {brief.potentialObjections.map((obj: any, i: number) => (
                                    <div key={i} className="bg-white border-2 border-black p-4">
                                        <div className="font-black uppercase tracking-widest text-xs opacity-50 mb-1">If they say:</div>
                                        <div className="font-bold text-lg mb-3">"{obj.concern}"</div>
                                        <div className="font-black uppercase tracking-widest text-xs opacity-50 mb-1">Pivot to:</div>
                                        <div className="text-sm font-medium border-l-2 border-black pl-3">{obj.suggestedResponse}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                ) : (
                    <div className="bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <p className="font-bold">No AI Brief was generated for this lead. Raw answers below:</p>
                        <pre className="bg-gray-100 p-4 mt-4 text-xs overflow-auto font-mono">
                            {JSON.stringify(raw, null, 2)}
                        </pre>
                    </div>
                )}
            </div>
        </main>
    );
}
