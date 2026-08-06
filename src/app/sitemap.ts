import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { const routes = ['', '/about', '/leadership', '/resume', '/portfolio', '/journey', '/insights', '/contact', '/downloads']; return routes.map((route) => ({ url: `https://davidtaiwo.com${route}`, lastModified: new Date(), changeFrequency: 'monthly', priority: route === '' ? 1 : .7 })); }
