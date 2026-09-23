import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed "output: export" to enable API routes and server-side features
  // Required for: /api/audit, /api/audit-admin, /api/creator-intel
  // Vercel handles serverless functions automatically
  async redirects() {
    return [
      {
        source: '/marketing-agency-for-ayurveda-clinics-and-hospitals',
        destination: '/ayurveda-marketing-agency',
        permanent: true,
      },
      {
        source: '/industries/ayurveda-wellness',
        destination: '/ayurveda-marketing-agency',
        permanent: true,
      },
      {
        source: '/marketing-agency-for-restaurants',
        destination: '/restaurant-marketing-agency',
        permanent: true,
      }
    ];
  },
};

export default nextConfig;
