/**
 * Storage adapter for audit submissions.
 * - Production (Vercel): Upstash Redis via UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN
 * - Development (local): JSON file at /data/audit-submissions.json
 */

import type { AuditSubmission } from "@/app/api/audit/route";
import { promises as fs } from "fs";
import path from "path";

const KEY = "audit:submissions";
const LOCAL_PATH = path.join(process.cwd(), "data", "audit-submissions.json");

// ── Local (dev) helpers ──────────────────────────────────────────────────────

async function localRead(): Promise<AuditSubmission[]> {
    try {
        const raw = await fs.readFile(LOCAL_PATH, "utf-8");
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

async function localWrite(data: AuditSubmission[]): Promise<void> {
    await fs.mkdir(path.dirname(LOCAL_PATH), { recursive: true });
    await fs.writeFile(LOCAL_PATH, JSON.stringify(data, null, 2));
}

// ── Upstash (production) helpers ─────────────────────────────────────────────

async function redisRead(): Promise<AuditSubmission[]> {
    const { Redis } = await import("@upstash/redis");
    const redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL!,
        token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    });
    const data = await redis.get<AuditSubmission[]>(KEY);
    return data ?? [];
}

async function redisWrite(data: AuditSubmission[]): Promise<void> {
    const { Redis } = await import("@upstash/redis");
    const redis = new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL!,
        token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    });
    await redis.set(KEY, data);
}

// ── Public API ───────────────────────────────────────────────────────────────

const isProduction = !!(
    process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
);

export async function readSubmissions(): Promise<AuditSubmission[]> {
    return isProduction ? redisRead() : localRead();
}

export async function writeSubmissions(data: AuditSubmission[]): Promise<void> {
    return isProduction ? redisWrite(data) : localWrite(data);
}
