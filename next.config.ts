import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed "output: export" to enable API routes and server-side features
  // Required for: /api/audit, /api/audit-admin, /api/creator-intel
  // Vercel handles serverless functions automatically
};

export default nextConfig;
