import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aquatrekhikkaduwa.com'

  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/blog',
    '/tour/sunset-banyan-tree',
    '/tour/sunrise-wildlife',
    '/tour/standard-1hr',
    '/celebration',
    '/amenities',
    '/vision',
    '/booking',
  ]

  const blogSlugs = getAllPosts().map((p) => p.slug)

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
