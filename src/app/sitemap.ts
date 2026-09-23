import type { MetadataRoute } from 'next';
import { caseStudies } from '@/lib/case-studies';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.thebrandmaniacs.online';
  
  const routes = [
    '',
    '/growth-systems',
    '/method',
    '/work',
    '/about',
    '/labs',
    '/book',
    '/start',
    '/ai-growth-audit',
    '/ads-rescue',
    '/digital-marketing-agency-pune',
    '/brand-foundation',
    '/conversion-engine',
    '/growth-engine',
    '/ai-intelligence',
    '/industries/d2c-ecommerce',
    '/industries/ayurveda-wellness',
    '/website-development'
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${baseUrl}/work/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const locationEntries: MetadataRoute.Sitemap = [
    "pune", "pimple-saudagar", "kalewadi", "pimpri", "moshi", "chikhali", 
    "wakad", "hinjewadi", "baner", "balewadi", "koregaon-park", "kalyani-nagar", 
    "viman-nagar", "magarpatta", "kharadi", "aundh"
  ].map((location) => ({
    url: `${baseUrl}/website-development-agency-in-${location}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const industryEntries: MetadataRoute.Sitemap = [
    "b2b-saas", "d2c-ecommerce", "real-estate", "fintech", "edtech"
  ].map((industry) => ({
    url: `${baseUrl}/marketing-agency-for-${industry}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const cityEntries: MetadataRoute.Sitemap = [
    "mumbai", "bangalore", "delhi", "hyderabad", "chennai", "ahmedabad", "gurgaon", "noida"
  ].map((city) => ({
    url: `${baseUrl}/digital-marketing-agency-in-${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...caseStudyEntries, ...locationEntries, ...industryEntries, ...cityEntries];
}
