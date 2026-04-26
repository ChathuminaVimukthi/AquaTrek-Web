import type { Metadata } from 'next'

const baseUrl = 'https://aquatrekhikkaduwa.com'

export function buildMetadata({
  title,
  description,
  path,
  ogImage = '/og-images/homepage.jpg',
  ogImageAlt = 'AquaTrek Water Adventures — Kayaking on Rathgama Lake, Hikkaduwa',
  keywords,
  type = 'website',
}: {
  title: string
  description: string
  path: string
  ogImage?: string
  ogImageAlt?: string
  keywords?: string
  type?: 'website' | 'article'
}): Metadata {
  const url = `${baseUrl}${path}`

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'AquaTrek Water Adventures',
      locale: 'en_US',
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: ogImageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}
