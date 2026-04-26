import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts } from '@/lib/blog'
import { ImageWithOverlay } from '@/components/ui/ImageWithOverlay'
import { Badge } from '@/components/ui/Badge'
import type { PostMeta } from '@/lib/blog'

const tagVariant: Record<string, 'category' | 'featured' | 'coming-soon' | 'new'> = {
  Birds: 'featured',
  Nature: 'category',
  Knowledge: 'category',
  Culture: 'new',
  Wildlife: 'featured',
}

export default function BlogArticleClient({
  post,
  source,
}: {
  post: PostMeta
  source: string
}) {
  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug && p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 2)

  return (
    <main>
      {/* Hero */}
      <ImageWithOverlay
        src={post.coverImage}
        alt={post.title}
        className="h-[70vh]"
        priority
      >
        <div className="h-full container flex flex-col justify-end pb-16 lg:pb-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold mb-6 transition-colors"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            ← Back to Blog
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge key={tag} variant={tagVariant[tag] ?? 'category'}>{tag}</Badge>
            ))}
          </div>
          <h1
            className="text-white mb-3 max-w-3xl"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-4xl)',
              letterSpacing: 'var(--tracking-tight)',
              lineHeight: 'var(--leading-tight)',
            }}
          >
            {post.title}
          </h1>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {post.date} · by {post.author}
          </p>
        </div>
      </ImageWithOverlay>

      {/* Article body */}
      <section style={{ background: 'var(--surface-page)' }}>
        <div className="container py-16 lg:py-20">
          <div className="mx-auto blog-prose" style={{ maxWidth: '700px' }}>
            <MDXRemote source={source} />
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section style={{ background: 'var(--neutral-200)' }}>
          <div className="container py-12">
            <p className="eyebrow mb-6">Keep Exploring</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex gap-4 rounded-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
                  style={{ background: 'var(--surface-raised)', border: 'var(--card-border)' }}
                >
                  <div className="relative flex-shrink-0 rounded-lg overflow-hidden" style={{ width: '96px', height: '72px' }}>
                    <Image
                      src={p.coverImage}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="96px"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-1.5">
                      {p.tags.map((t) => (
                        <Badge key={t} variant={tagVariant[t] ?? 'category'}>{t}</Badge>
                      ))}
                    </div>
                    <p
                      className="font-semibold text-sm leading-snug group-hover:text-[var(--brand-accent)] transition-colors"
                      style={{ color: 'var(--text-heading)' }}
                    >
                      {p.title}
                    </p>
                    <p className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>{p.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden" style={{ minHeight: '320px' }}>
        <Image
          src="/images/sunrise-tour/mangrove-kayaking2.webp"
          alt="Kayaking on Rathgama Lake — book a tour"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(28,58,43,0.70)' }} />
        <div className="relative z-10 container py-16 flex flex-col items-center text-center">
          <p className="eyebrow text-white/70 mb-3">Experience It for Real</p>
          <h2 className="font-display text-white mb-6" style={{ fontSize: 'var(--text-3xl)' }}>
            Come paddle Rathgama Lake with us
          </h2>
          <Link
            href="/booking"
            className="inline-flex items-center px-7 py-3 rounded-pill text-sm font-semibold transition-all hover:-translate-y-px hover:shadow-lg"
            style={{ background: 'var(--brand-accent)', color: 'white' }}
          >
            Book a Tour →
          </Link>
        </div>
      </section>
    </main>
  )
}
