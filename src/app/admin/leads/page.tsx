import { Redis } from '@upstash/redis';
import Link from 'next/link';

// Force dynamic rendering since we want real-time leads
export const dynamic = 'force-dynamic';

export default async function LeadsDashboard() {
    const redis = (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) 
        ? new Redis({
            url: process.env.UPSTASH_REDIS_REST_URL,
            token: process.env.UPSTASH_REDIS_REST_TOKEN,
          })
        : null;

    let leads: any[] = [];

    if (redis) {
        try {
            const leadIds = await redis.lrange("leads_list", 0, 50); // Get last 50 leads
            
            if (leadIds.length > 0) {
                const rawLeads = await redis.mget(...leadIds.map(id => `lead:${id}`));
                leads = rawLeads.map(lead => typeof lead === 'string' ? JSON.parse(lead) : lead).filter(Boolean);
            }
        } catch (error) {
            console.error("Failed to fetch leads from Redis", error);
        }
    }

    return (
        <main className="min-h-screen bg-[#F4F4F0] text-[#1C1C1C] p-8 md:p-12 font-sans pt-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-8 border-b-4 border-black pb-4">
                    <div>
                        <h1 className="font-heading text-4xl font-black uppercase tracking-tighter">Sales Cockpit</h1>
                        <p className="font-bold opacity-60">High-intent leads and AI briefs.</p>
                    </div>
                    <Link href="/" className="font-black text-sm uppercase tracking-widest border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
                        Back to Site
                    </Link>
                </div>

                {!redis && (
                    <div className="bg-red-500 text-white p-4 font-bold border-2 border-black mb-8">
                        WARNING: Redis credentials are missing in .env.local. Leads cannot be loaded.
                    </div>
                )}

                <div className="bg-white border-2 border-black overflow-x-auto shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-black text-white text-xs uppercase tracking-widest font-black">
                                <th className="p-4 border-b-2 border-black">Lead</th>
                                <th className="p-4 border-b-2 border-black">Score</th>
                                <th className="p-4 border-b-2 border-black">Stage</th>
                                <th className="p-4 border-b-2 border-black">Budget</th>
                                <th className="p-4 border-b-2 border-black">Systems</th>
                                <th className="p-4 border-b-2 border-black">Status</th>
                                <th className="p-4 border-b-2 border-black">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leads.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="p-8 text-center font-bold opacity-50">
                                        No leads found yet. Start generating traffic.
                                    </td>
                                </tr>
                            ) : (
                                leads.map((lead: any, idx: number) => (
                                    <tr key={lead.id} className={`border-b border-black/20 hover:bg-yellow-50 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                        <td className="p-4 font-bold">
                                            {lead.contact?.company}
                                            <span className="block text-xs opacity-50 font-normal">{lead.contact?.name}</span>
                                        </td>
                                        <td className="p-4">
                                            <span className="inline-block bg-black text-white font-black text-xs px-2 py-1">
                                                {lead.aiBrief?.leadScore || 'N/A'}
                                            </span>
                                        </td>
                                        <td className="p-4 text-sm font-bold opacity-80">{lead.aiBrief?.businessStage || lead.rawAnswers?.stage}</td>
                                        <td className="p-4 text-sm font-bold opacity-80">{lead.aiBrief?.likelyBudgetTier || lead.rawAnswers?.budget}</td>
                                        <td className="p-4">
                                            <div className="flex flex-wrap gap-1">
                                                {(lead.aiBrief?.recommendedSystems || []).slice(0,2).map((sys: string, i: number) => (
                                                    <span key={i} className="text-[10px] font-black uppercase tracking-widest bg-yellow-200 border border-black px-1 py-0.5 whitespace-nowrap">
                                                        {sys}
                                                    </span>
                                                ))}
                                                {(lead.aiBrief?.recommendedSystems?.length > 2) && (
                                                    <span className="text-[10px] font-black uppercase tracking-widest bg-gray-200 border border-black px-1 py-0.5">+{lead.aiBrief.recommendedSystems.length - 2}</span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className="text-xs font-black uppercase tracking-widest text-blue-600">
                                                {lead.status}
                                            </span>
                                        </td>
                                        <td className="p-4">
                                            <Link href={`/admin/leads/${lead.id}`} className="text-xs font-black uppercase tracking-widest border-2 border-black px-3 py-1 hover:bg-black hover:text-white transition-colors whitespace-nowrap">
                                                View Brief
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
        </main>
    );
}
