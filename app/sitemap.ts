import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'
import { getAllGuides } from '@/lib/guides'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aquatrekhikkaduwa.com'
  const now = new Date()

  const staticRoutes: Array<{ url: string; changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency']; priority: number }> = [
    { url: baseUrl,                                        changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/about`,                             changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/vision`,                            changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/tour/sunset-banyan-tree`,           changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tour/sunrise-wildlife`,             changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tour/standard-1hr`,                 changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/celebration`,                       changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/amenities`,                         changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/booking`,                           changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`,                           changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${baseUrl}/blog`,                              changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${baseUrl}/hostel`,                            changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/aquahub`,                           changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/rooftop`,                           changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/guides`,                            changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${baseUrl}/gallery`,                           changeFrequency: 'daily',   priority: 0.7 },
  ]

  const blogPosts = getAllPosts().map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const guides = getAllGuides().map((g) => ({
    url: `${baseUrl}/guides/${g.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticRoutes.map((r) => ({ ...r, lastModified: now })),
    ...blogPosts,
    ...guides,
  ]
}
