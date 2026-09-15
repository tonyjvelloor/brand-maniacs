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
    '/digital-marketing-agency-pune'
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

  return [...staticEntries, ...caseStudyEntries];
}
