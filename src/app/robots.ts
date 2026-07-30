import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/roadmap/', '/api/'],
    },
    sitemap: 'https://www.thebrandmaniacs.online/sitemap.xml',
  };
}
