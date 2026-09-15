import { MetadataRoute } from 'next';

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
    '/ai-growth-audit'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
