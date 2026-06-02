import type { MetadataRoute } from 'next';
import { verticals, capabilities } from '@/lib/site';
import { caseStudies } from '@/lib/case-studies';
import { insights } from '@/lib/insights';

const BASE = 'https://www.hiliks.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '', '/about', '/industries', '/solutions', '/case-studies',
    '/ecosystem', '/insights', '/careers', '/contact',
  ];
  const dynamic = [
    ...verticals.map((v) => `/industries/${v.slug}`),
    ...capabilities.map((c) => `/solutions/${c.slug}`),
    ...caseStudies.map((c) => `/case-studies/${c.slug}`),
    ...insights.map((i) => `/insights/${i.slug}`),
  ];
  return [...staticRoutes, ...dynamic].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.7,
  }));
}
