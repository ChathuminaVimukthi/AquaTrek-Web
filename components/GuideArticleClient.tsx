import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllGuides } from '@/lib/guides'
import { ImageWithOverlay } from '@/components/ui/ImageWithOverlay'
import { Badge } from '@/components/ui/Badge'
import type { GuideMeta } from '@/lib/guides'

const categoryColor: Record<string, 'category' | 'featured' | 'new' | 'coming-soon'> = {
  'Destination Guide': 'featured',
  'Beach & Water': 'new',
  'Getting Here': 'category',
  'Day Trips': 'category',
}

export default function GuideArticleClient({
  guide,
  source,
}: {
  guide: GuideMeta
  source: string
}) {
  const related = getAllGuides()
    .filter((g) => g.slug !== guide.slug)
    .slice(0, 2)

  return (
    <main>
      {/* Hero */}
      <ImageWithOverlay
        src={guide.coverImage}
        alt={guide.title}
        className="h-[70vh]"
        priority
      >
        <div className="h-full container flex flex-col justify-end pb-16 lg:pb-20">
          <Link
            href="/guides"
            className="inline-flex items-center gap-1.5 text-sm font-semibold mb-6 transition-colors"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            ← All Guides
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant={categoryColor[guide.category] ?? 'category'}>{guide.category}</Badge>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>{guide.readTime}</span>
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
            {guide.title}
          </h1>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
            By AquaTrek · Hikkaduwa locals
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

      {/* Related guides */}
      {related.length > 0 && (
        <section style={{ background: 'var(--neutral-200)' }}>
          <div className="container py-12">
            <p className="eyebrow mb-6">More Guides</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="group flex gap-4 rounded-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
                  style={{ background: 'var(--surface-raised)', border: 'var(--card-border)' }}
                >
                  <div className="relative flex-shrink-0 rounded-lg overflow-hidden" style={{ width: '96px', height: '72px' }}>
                    <Image
                      src={g.coverImage}
                      alt={g.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="96px"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-1.5">
                      <Badge variant={categoryColor[g.category] ?? 'category'}>{g.category}</Badge>
                    </div>
                    <p
                      className="font-semibold text-sm leading-snug group-hover:text-[var(--brand-accent)] transition-colors"
                      style={{ color: 'var(--text-heading)' }}
                    >
                      {g.title}
                    </p>
                    <p className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>{g.readTime}</p>
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
          alt="Kayaking on Rathgama Lake — book a tour with AquaTrek"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(28,58,43,0.70)' }} />
        <div className="relative z-10 container py-16 flex flex-col items-center text-center">
          <p className="eyebrow text-white/70 mb-3">Now You Know Where to Go</p>
          <h2 className="font-display text-white mb-6" style={{ fontSize: 'var(--text-3xl)' }}>
            Start with sunrise on Rathgama Lake
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
