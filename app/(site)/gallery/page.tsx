import type { Metadata } from 'next'
import Link from 'next/link'
import { ImageWithOverlay } from '@/components/ui/ImageWithOverlay'
import InstagramFeed from '@/components/InstagramFeed'

export const metadata: Metadata = {
  title: 'Gallery — Rathgama Lake Kayaking Photos | AquaTrek Hikkaduwa',
  description:
    'Photos from the water — kayaking Rathgama Lake at sunrise, wildlife encounters, mangrove channels, and sunset paddles. Follow AquaTrek on Instagram for daily updates.',
  alternates: { canonical: 'https://aquatrekhikkaduwa.com/gallery' },
  openGraph: {
    title: 'Gallery | AquaTrek Hikkaduwa',
    description: 'Photos from kayaking on Rathgama Lake — wildlife, mangroves, sunrises, and sunsets.',
    url: 'https://aquatrekhikkaduwa.com/gallery',
    images: [{ url: '/og-images/homepage.jpg', width: 1200, height: 630, alt: 'Kayaking on Rathgama Lake at sunrise' }],
  },
}

export default function GalleryPage() {
  return (
    <main>
      {/* Hero */}
      <ImageWithOverlay
        src="/images/sunrise-tour/sunrise2.webp"
        alt="Sunrise over Rathgama Lake — AquaTrek photo gallery"
        className="h-[70vh]"
        priority
      >
        <div className="h-full container flex flex-col justify-end pb-16 lg:pb-20">
          <p className="eyebrow text-white/70 mb-4">From the Water</p>
          <h1
            className="text-white max-w-2xl"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-5xl)',
              letterSpacing: 'var(--tracking-tight)',
              lineHeight: 'var(--leading-tight)',
            }}
          >
            Life on<br />Rathgama Lake
          </h1>
          <p className="mt-3 text-base lg:text-lg max-w-lg" style={{ color: 'rgba(255,255,255,0.80)', lineHeight: 'var(--leading-relaxed)' }}>
            Every photo is from an actual tour. Follow along on Instagram for daily moments from the lake.
          </p>
        </div>
      </ImageWithOverlay>

      {/* Instagram grid */}
      <section className="section" style={{ background: 'var(--surface-page)' }}>
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="eyebrow mb-2">Instagram</p>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-3xl)',
                  color: 'var(--text-heading)',
                  letterSpacing: 'var(--tracking-tight)',
                }}
              >
                @aquatrekhikkaduwa
              </h2>
            </div>
            <a
              href="https://instagram.com/aquatrekhikkaduwa"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-pill text-sm font-semibold border transition-all hover:-translate-y-px"
              style={{ borderColor: 'var(--brand-primary)', color: 'var(--brand-primary)' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Follow on Instagram
            </a>
          </div>

          <InstagramFeed />

          {/* Mobile Instagram button */}
          <div className="mt-8 flex justify-center md:hidden">
            <a
              href="https://instagram.com/aquatrekhikkaduwa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-pill text-sm font-semibold border transition-all"
              style={{ borderColor: 'var(--brand-primary)', color: 'var(--brand-primary)' }}
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--brand-primary)' }}>
        <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="eyebrow mb-2" style={{ color: 'var(--brand-primary-muted)' }}>Your Turn</p>
            <p
              className="text-white"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-2xl)',
                fontWeight: 'var(--font-bold)',
              }}
            >
              Come create your own moments on the lake.
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
