import { Redis } from '@upstash/redis';
import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/Button";

const redis = (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) 
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

export default async function RoadmapPage({ params }: { params: { id: string } }) {
    if (!redis) return notFound();

    const data = await redis.get(`lead:${params.id}`);
    if (!data) return notFound();

    const leadData = typeof data === 'string' ? JSON.parse(data) : data;
    const { contact, aiBrief } = leadData;

    if (!aiBrief) return notFound();

    return (
        <main className="min-h-screen bg-background text-foreground pt-32 pb-24 px-8 selection:bg-accent-yellow selection:text-black">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 border-b-2 border-foreground pb-8 flex justify-between items-end">
                    <div>
                        <p className="text-accent-yellow font-bold text-sm tracking-widest uppercase mb-4">Confidential</p>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Growth Readiness</h1>
                        <p className="text-xl mt-2 opacity-60">Prepared for {contact.name} at {contact.company}</p>
                    </div>
                    <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                            if (typeof window !== 'undefined') {
                                navigator.clipboard.writeText(window.location.href);
                                alert("Link copied to clipboard");
                            }
                        }}
                    >
                        Copy Link
                    </Button>
                </div>

                <div className="grid md:grid-cols-3 gap-12 mb-16">
                    <div className="md:col-span-2 space-y-8">
                        <div>
                            <h2 className="bg-foreground text-background inline-block px-2 py-1 font-black uppercase tracking-widest text-sm mb-4">Executive Summary</h2>
                            <p className="text-lg leading-relaxed">{aiBrief.executiveSummary}</p>
                        </div>
                        
                        <div>
                            <h2 className="bg-foreground text-background inline-block px-2 py-1 font-black uppercase tracking-widest text-sm mb-4">Key Constraints</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                {aiBrief.growthConstraints.map((constraint: string, i: number) => (
                                    <li key={i}>{constraint}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    <div className="border-2 border-foreground p-6 bg-background relative overflow-hidden">
                        <h2 className="font-black uppercase tracking-widest text-sm mb-6 border-b-2 border-foreground pb-2">Readiness Index</h2>
                        
                        <div className="space-y-4">
                            <ScoreBar label="Brand Positioning" score={aiBrief.growthReadiness.brandPositioning} />
                            <ScoreBar label="Website" score={aiBrief.growthReadiness.website} />
                            <ScoreBar label="Lead Generation" score={aiBrief.growthReadiness.leadGeneration} />
                            <ScoreBar label="Marketing Systems" score={aiBrief.growthReadiness.marketingSystems} />
                            <ScoreBar label="Automation" score={aiBrief.growthReadiness.automation} />
                        </div>
                        
                        <div className="mt-8 pt-4 border-t-2 border-foreground text-sm opacity-80">
                            <p><strong>Total Score: {aiBrief.growthReadiness.totalScore}/100</strong></p>
                            <p className="mt-2 text-xs italic">{aiBrief.growthReadiness.explanation}</p>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h2 className="bg-foreground text-background inline-block px-2 py-1 font-black uppercase tracking-widest text-sm mb-6">90-Day Action Plan</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {aiBrief.actionPlan.map((plan: any, i: number) => (
                            <div key={i} className="border-2 border-foreground p-6 brutalist-hover transition-transform bg-background">
                                <div className="text-accent-yellow font-black uppercase tracking-widest text-xs mb-2">{plan.phase}</div>
                                <h3 className="font-bold text-lg mb-2">{plan.title}</h3>
                                <p className="text-sm opacity-80">{plan.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-foreground text-background p-8 text-center brutalist-shadow">
                    <h2 className="font-black uppercase tracking-tighter text-3xl mb-4">Ready to execute this?</h2>
                    <p className="mb-6 opacity-80">Walk through this roadmap with a senior strategist.</p>
                    <Button href="/book" className="bg-accent-yellow text-black border-background hover:bg-background hover:text-foreground hover:border-foreground">
                        Book Strategy Session
                    </Button>
                </div>
            </div>
        </main>
    );
}

// Custom client component to render the blocks, we need a small interactive wrapper if needed, 
// but since it's just visually rendering we can do it simply.
function ScoreBar({ label, score }: { label: string, score: number }) {
    // Score is out of 20
    const filled = Math.round(score / 2); // Out of 10 blocks
    const empty = 10 - filled;
    
    return (
        <div>
            <div className="flex justify-between text-xs font-bold uppercase mb-1">
                <span>{label}</span>
                <span>{score}/20</span>
            </div>
            <div className="font-mono text-sm tracking-widest text-accent-yellow">
                {'█'.repeat(filled)}{'░'.repeat(empty)}
            </div>
        </div>
    );
}
