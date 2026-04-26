import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ImageWithOverlay } from '@/components/ui/ImageWithOverlay'
import BookingFormClient from '@/components/BookingFormClient'

export const metadata: Metadata = {
  title: 'Book a Kayak Tour — AquaTrek Hikkaduwa, Sri Lanka',
  description:
    'Book your kayaking tour at Rathgama Lake with AquaTrek Hikkaduwa. Choose from sunrise wildlife, sunset banyan tree, or celebration packages. Book via WhatsApp — confirm in under 2 hours.',
  keywords: 'book kayak tour Hikkaduwa, book kayaking Sri Lanka, Rathgama Lake tour booking',
  alternates: { canonical: 'https://aquatrekhikkaduwa.com/booking' },
  openGraph: {
    title: 'Book a Kayak Tour | AquaTrek Hikkaduwa',
    description: 'Reserve your kayaking tour at Rathgama Lake, Sri Lanka. Same-day bookings usually available.',
    url: 'https://aquatrekhikkaduwa.com/booking',
    images: [{ url: '/og-images/homepage.jpg', width: 1200, height: 630, alt: 'Kayaking on Rathgama Lake, Hikkaduwa' }],
  },
}

export default function BookingPage() {
  return (
    <main>
      {/* Hero */}
      <ImageWithOverlay
        src="/images/sunrise-tour/sunrise2.webp"
        alt="Kayaking at sunrise on Rathgama Lake, Hikkaduwa — book your tour"
        className="h-[55vh]"
        priority
      >
        <div className="h-full container flex flex-col justify-end pb-16 lg:pb-20">
          <p className="eyebrow text-white/70 mb-4">Easy Booking</p>
          <h1
            className="text-white max-w-xl"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-5xl)',
              letterSpacing: 'var(--tracking-tight)',
              lineHeight: 'var(--leading-tight)',
            }}
          >
            Book a Tour
          </h1>
          <p className="mt-3 text-sm max-w-md" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Choose your tour, pick a date, and confirm via WhatsApp in seconds.
          </p>
        </div>
      </ImageWithOverlay>

      {/* Form section */}
      <section className="section" style={{ background: 'var(--surface-page)' }}>
        <div className="container">
          <Suspense
            fallback={
              <div
                className="h-96 flex items-center justify-center rounded-card"
                style={{ background: 'var(--surface-raised)', color: 'var(--text-tertiary)', fontSize: 'var(--text-sm)' }}
              >
                Loading…
              </div>
            }
          >
            <BookingFormClient />
          </Suspense>

          <p className="text-center text-sm mt-8" style={{ color: 'var(--text-tertiary)' }}>
            Prefer to message us first?{' '}
            <a
              href="https://wa.me/message/NJJEXSOX3ABGM1"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-colors hover:opacity-80"
              style={{ color: 'var(--brand-accent)' }}
            >
              Open WhatsApp →
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}
