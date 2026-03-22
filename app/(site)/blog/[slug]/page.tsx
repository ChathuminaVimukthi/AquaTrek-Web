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
  return <BlogArticleClient post={post} source={post.content} />
}
