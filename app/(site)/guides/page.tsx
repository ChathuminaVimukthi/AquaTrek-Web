import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllGuides } from '@/lib/guides'
import { ImageWithOverlay } from '@/components/ui/ImageWithOverlay'
import { Badge } from '@/components/ui/Badge'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Hikkaduwa Travel Guides — Local Tips & Destination Advice | AquaTrek',
  description:
    'Practical guides to Hikkaduwa from locals who live here. Things to do, how to get here, beach and reef tips, day trips to Galle Fort, Sinharaja, and whale watching in Mirissa.',
  alternates: { canonical: 'https://aquatrekhikkaduwa.com/guides' },
  openGraph: {
    title: 'Hikkaduwa Travel Guides | AquaTrek',
    description: 'Practical local guides to Hikkaduwa — things to do, getting here, day trips, beach and reef.',
    url: 'https://aquatrekhikkaduwa.com/guides',
    images: [{ url: '/og-images/homepage.jpg', width: 1200, height: 630, alt: 'Hikkaduwa, Sri Lanka' }],
  },
}

const categoryColor: Record<string, 'category' | 'featured' | 'new' | 'coming-soon'> = {
  'Destination Guide': 'featured',
  'Beach & Water': 'new',
  'Getting Here': 'category',
  'Day Trips': 'category',
}

export default function GuidesPage() {
  const guides = getAllGuides()

  return (
    <main>
      {/* Hero */}
      <ImageWithOverlay
        src="/images/others/before-you-paddle.webp"
        alt="Hikkaduwa coastline — AquaTrek local travel guides"
        className="h-[70vh]"
        priority
      >
        <div className="h-full container flex flex-col justify-end pb-16 lg:pb-20">
          <p className="eyebrow text-white/70 mb-4">Written by Locals</p>
          <h1
            className="text-white max-w-2xl"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-5xl)',
              letterSpacing: 'var(--tracking-tight)',
              lineHeight: 'var(--leading-tight)',
            }}
          >
            Hikkaduwa<br />Travel Guides
          </h1>
          <p className="mt-3 max-w-lg text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Practical, honest advice from people who live on the lake — not aggregator sites.
          </p>
        </div>
      </ImageWithOverlay>

      {/* Guides grid */}
      <section className="section" style={{ background: 'var(--surface-page)' }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--grid-gap)]">
            {guides.map((guide, i) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
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
                    src={guide.coverImage}
                    alt={guide.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={i < 2}
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant={categoryColor[guide.category] ?? 'category'}>{guide.category}</Badge>
                    <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{guide.readTime}</span>
                  </div>
                  <h2
                    className="font-display mb-3 group-hover:text-[var(--brand-accent)] transition-colors"
                    style={{ fontSize: 'var(--text-2xl)', color: 'var(--text-heading)', lineHeight: 'var(--leading-snug)' }}
                  >
                    {guide.title}
                  </h2>
                  <p
                    className="text-sm flex-1 mb-4"
                    style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}
                  >
                    {guide.excerpt}
                  </p>
                  <span
                    className="text-xs font-semibold transition-colors group-hover:text-[var(--brand-accent)]"
                    style={{ color: 'var(--brand-primary-light)' }}
                  >
                    Read guide →
                  </span>
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
              The lake is better from a kayak than a guidebook.
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
