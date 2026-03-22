import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogArticleClient from '@/components/BlogArticleClient'
import { getAllPosts, getPostBySlug } from '@/lib/blog'

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://aquatrekhikkaduwa.com/blog/${slug}` },
    openGraph: {
      title: `${post.title} | AquaTrek Hikkaduwa`,
      description: post.excerpt,
      url: `https://aquatrekhikkaduwa.com/blog/${slug}`,
      images: post.coverImage ? [{ url: post.coverImage }] : [],
    },
  }
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage ? `https://aquatrekhikkaduwa.com${post.coverImage}` : undefined,
    datePublished: post.date,
    url: `https://aquatrekhikkaduwa.com/blog/${slug}`,
    author: { '@type': 'Organization', name: 'AquaTrek Hikkaduwa', url: 'https://aquatrekhikkaduwa.com' },
    publisher: { '@type': 'Organization', name: 'AquaTrek Hikkaduwa', url: 'https://aquatrekhikkaduwa.com' },
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogArticleClient post={post} source={post.content} />
    </>
  )
}
