import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllGuides, getGuideBySlug } from '@/lib/guides'
import GuideArticleClient from '@/components/GuideArticleClient'

export async function generateStaticParams() {
  return getAllGuides().map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) return {}
  return {
    title: `${guide.title} | AquaTrek Hikkaduwa`,
    description: guide.excerpt,
    alternates: { canonical: `https://aquatrekhikkaduwa.com/guides/${slug}` },
    openGraph: {
      title: `${guide.title} | AquaTrek Hikkaduwa`,
      description: guide.excerpt,
      url: `https://aquatrekhikkaduwa.com/guides/${slug}`,
      images: guide.coverImage ? [{ url: guide.coverImage }] : [],
    },
  }
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = getGuideBySlug(slug)
  if (!guide) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.excerpt,
    image: guide.coverImage ? `https://aquatrekhikkaduwa.com${guide.coverImage}` : undefined,
    datePublished: guide.date,
    url: `https://aquatrekhikkaduwa.com/guides/${slug}`,
    author: { '@type': 'Organization', name: 'AquaTrek Hikkaduwa', url: 'https://aquatrekhikkaduwa.com' },
    publisher: { '@type': 'Organization', name: 'AquaTrek Hikkaduwa', url: 'https://aquatrekhikkaduwa.com' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GuideArticleClient guide={guide} source={guide.content} />
    </>
  )
}
