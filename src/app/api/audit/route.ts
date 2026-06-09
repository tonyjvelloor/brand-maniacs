import { NextResponse } from 'next/server';
import { readSubmissions, writeSubmissions } from '@/lib/storage';

export const maxDuration = 30;

export interface AuditSubmission {
    id: string;
    submittedAt: string;
    status: 'pending' | 'qualified' | 'rejected' | 'report_sent';
    // Step 1 — Contact Info
    contactName: string;
    email: string;
    phone: string;
    companyName: string;
    role: string;
    // Step 2 — Business Details
    website: string;
    industry: string;
    monthlyRevenue: string;
    teamSize: string;
    businessAge: string;
    // Step 3 — Marketing Details
    monthlyAdSpend: string;
    currentChannels: string[];
    cac: string;
    currentAgency: string;
    // Step 4 — Goals
    primaryChallenge: string;
    goals: string;
    timeline: string;
    // Generated report (filled after qualification)
    report?: string;
}

// POST — submit a new audit application
export async function POST(req: Request) {
    try {
        const body = await req.json();

        const {
            contactName, email, phone, companyName, role,
            website, industry, monthlyRevenue, teamSize, businessAge,
            monthlyAdSpend, currentChannels, cac, currentAgency,
            primaryChallenge, goals, timeline
        } = body;

        if (!contactName || !email || !phone || !companyName || !website || !primaryChallenge) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const submission: AuditSubmission = {
            id: `audit_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
            submittedAt: new Date().toISOString(),
            status: 'pending',
            contactName, email, phone, companyName, role: role || '',
            website, industry: industry || '', monthlyRevenue: monthlyRevenue || '',
            teamSize: teamSize || '', businessAge: businessAge || '',
            monthlyAdSpend: monthlyAdSpend || '', currentChannels: currentChannels || [],
            cac: cac || '', currentAgency: currentAgency || '',
            primaryChallenge, goals: goals || '', timeline: timeline || '',
        };

        const existing = await readSubmissions();
        existing.push(submission);
        await writeSubmissions(existing);

        return NextResponse.json({ success: true, id: submission.id });

    } catch (error) {
        console.error('Audit submission error:', error);
        return NextResponse.json({ error: 'Submission failed. Please try again.' }, { status: 500 });
    }
}

// GET — return all submissions (admin use)
export async function GET() {
    const submissions = await readSubmissions();
    return NextResponse.json(submissions);
}
