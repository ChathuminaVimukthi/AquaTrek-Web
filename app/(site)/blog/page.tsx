import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { ImageWithOverlay } from '@/components/ui/ImageWithOverlay'
import { Badge } from '@/components/ui/Badge'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Blog — Nature, Wildlife & Kayaking Stories | AquaTrek',
  description:
    'Stories from Rathgama Lake — birdwatching guides, mangrove ecology, wildlife encounters, local culture, and kayaking tips from Hikkaduwa, Sri Lanka.',
  alternates: { canonical: 'https://aquatrekhikkaduwa.com/blog' },
  openGraph: {
    title: 'Blog | AquaTrek Hikkaduwa',
    description: 'Stories from Rathgama Lake — nature, wildlife, culture, and kayaking from Hikkaduwa, Sri Lanka.',
    url: 'https://aquatrekhikkaduwa.com/blog',
    images: [{ url: '/og-images/homepage.jpg', width: 1200, height: 630, alt: 'Rathgama Lake at sunrise' }],
  },
}

const tagVariant: Record<string, 'category' | 'featured' | 'coming-soon' | 'new'> = {
  Birds: 'featured',
  Nature: 'category',
  Knowledge: 'category',
  Culture: 'new',
  Wildlife: 'featured',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main>
      {/* Hero */}
      <ImageWithOverlay
        src="/images/main-carousel/carousel7.webp"
        alt="Rathgama Lake at dawn — AquaTrek blog"
        className="h-[70vh]"
        priority
      >
        <div className="h-full container flex flex-col justify-end pb-16 lg:pb-20">
          <p className="eyebrow text-white/70 mb-4">From the Water</p>
          <h1
            className="text-white leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-5xl)',
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            Stories from<br />Rathgama Lake
          </h1>
        </div>
      </ImageWithOverlay>

      {/* Posts grid */}
      <section className="section" style={{ background: 'var(--surface-page)' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--grid-gap)]">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] flex flex-col"
                style={{
                  background: 'var(--surface-raised)',
                  border: 'var(--card-border)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                {/* Cover image */}
                <div className="relative overflow-hidden flex-shrink-0" style={{ aspectRatio: '16/9' }}>
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={i < 3}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant={tagVariant[tag] ?? 'category'}>{tag}</Badge>
                    ))}
                  </div>
                  <h2
                    className="font-display mb-3 group-hover:text-[var(--brand-accent)] transition-colors"
                    style={{ fontSize: 'var(--text-xl)', color: 'var(--text-heading)', lineHeight: 'var(--leading-snug)' }}
                  >
                    {post.title}
                  </h2>
                  <p
                    className="text-sm flex-1 mb-4"
                    style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}
                  >
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{post.date}</span>
                    <span
                      className="text-xs font-semibold transition-colors group-hover:text-[var(--brand-accent)]"
                      style={{ color: 'var(--brand-primary-light)' }}
                    >
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ background: 'var(--brand-primary)' }}>
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="eyebrow mb-2" style={{ color: 'var(--brand-primary-muted)' }}>Ready to Experience It?</p>
            <p className="font-display text-white" style={{ fontSize: 'var(--text-2xl)', color: 'rgba(255,255,255,0.85)' }}>
              These stories are better lived than read.
            </p>
          </div>
          <Link
            href="/booking"
            className="flex-shrink-0 inline-flex items-center px-7 py-3 rounded-pill text-sm font-semibold transition-all hover:-translate-y-px hover:shadow-lg"
            style={{ background: 'var(--brand-accent)', color: 'white' }}
          >
            Book a Tour →
          </Link>
        </div>
      </section>
    </main>
  )
}
