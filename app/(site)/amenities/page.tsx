import type { Metadata } from 'next'
import Link from 'next/link'
import { ImageWithOverlay } from '@/components/ui/ImageWithOverlay'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'Amenities & Tips for Your Kayaking Tour | AquaTrek Hikkaduwa',
  description:
    'Everything you need to know before your kayaking tour at Rathgama Lake — gear provided, what to bring, safety info, and honest tips from our guides in Hikkaduwa, Sri Lanka.',
  alternates: { canonical: 'https://aquatrekhikkaduwa.com/amenities' },
  openGraph: {
    title: 'Amenities & Tips | AquaTrek Hikkaduwa',
    description: 'Everything you need to know for your kayaking adventure at Rathgama Lake.',
    url: 'https://aquatrekhikkaduwa.com/amenities',
    images: [{ url: '/og-images/homepage.jpg', width: 1200, height: 630, alt: 'Kayaking on Rathgama Lake' }],
  },
}

const amenities = [
  {
    icon: '🛟',
    title: 'Safety Equipment',
    items: ['Quality life jackets for all sizes', 'Waterproof phone cases provided', 'Trained guide & lifeguard on all tours', 'First aid kit on-site'],
  },
  {
    icon: '🚿',
    title: 'On-Site Facilities',
    items: ['Changing rooms', 'Clean bathroom facilities', 'Shaded rest areas & hammocks', 'Free on-site parking'],
  },
  {
    icon: '🥥',
    title: 'Refreshments',
    items: ['Welcome drink on arrival', 'Fresh water bottle included', 'Tea after every tour', 'Snacks on Full Lake Adventure'],
  },
  {
    icon: '🛶',
    title: 'Quality Gear',
    items: ['Well-maintained open-top kayaks', 'Comfortable ergonomic paddles', 'Dry bags for belongings', 'Waterproof phone cases'],
  },
  {
    icon: '🧭',
    title: 'Expert Guides',
    items: ['Pre-tour safety briefing', 'Paddling technique instruction', 'Local wildlife & cultural knowledge', 'Sunrise & sunset specialist guides'],
  },
  {
    icon: '👨‍👩‍👧',
    title: 'For Everyone',
    items: ['Beginner-friendly — no experience needed', 'Child-sized life jackets available', 'Family & group sessions (up to 35)', 'Solo travellers warmly welcome'],
  },
]

const tips = [
  {
    heading: 'What to Bring',
    items: [
      { label: 'Reef-safe sunscreen', detail: 'The sun reflects off the water — apply before you arrive' },
      { label: 'Wide-brim hat & sunglasses', detail: 'Essential at 6°N latitude, even on overcast mornings' },
      { label: 'Light quick-dry clothing', detail: 'Long sleeves protect better than a T-shirt; you will thank yourself later' },
      { label: 'Closed-toe water shoes', detail: 'Flip-flops work but water shoes grip better when boarding' },
      { label: 'Small towel', detail: 'For after the paddle; leave extra clothes in the vehicle' },
      { label: 'Binoculars (optional)', detail: '8×42 is ideal for spotting kingfishers and raptors' },
    ],
  },
  {
    heading: 'What to Expect',
    items: [
      { label: 'Calm, flat water', detail: 'Rathgama is a sheltered lake — no surf, no currents in the channels' },
      { label: 'Wildlife from the kayak', detail: 'Kingfishers, herons, monitors — approach within metres quietly' },
      { label: 'A relaxed pace', detail: 'We stop, look, and listen — this is not a fitness paddle' },
      { label: 'You may get splashed', detail: 'Not much, but quick-dry clothes help if you do' },
      { label: 'Warm water year-round', detail: '27–30°C — comfortable for swimming if you want to' },
      { label: 'Smiling guides', detail: 'Rathgama is our home and we genuinely love sharing it' },
    ],
  },
  {
    heading: 'Best Times to Go',
    items: [
      { label: 'Sunrise Tour (6:00 AM)', detail: 'Peak wildlife activity, cool air, golden light — our top recommendation' },
      { label: 'Morning Tour (8:00 AM)', detail: 'Great for families; still active wildlife before the heat builds' },
      { label: 'Sunset Tour (3:30 PM)', detail: 'Brahminy Kites, fruit bats, and dramatic skies over the lake' },
      { label: 'November – February', detail: 'Dry season peak: migratory birds + best photography light' },
      { label: 'May – August', detail: 'Lush green season, fewer tourists, kingfishers breeding' },
      { label: 'Weekdays over weekends', detail: 'Quieter lake, more personal experience with guides' },
    ],
  },
  {
    heading: 'Safety Reminders',
    items: [
      { label: 'Always wear your life jacket', detail: 'Even strong swimmers — it is non-negotiable on our tours' },
      { label: 'Follow your guide', detail: 'They know the channels, the tides, and the weather patterns' },
      { label: 'Stay hydrated', detail: 'Drink water before and after; dehydration sneaks up in tropical heat' },
      { label: 'Sit, do not stand', detail: 'Open-top kayaks are stable — standing is not worth the risk' },
      { label: 'Respect the wildlife', detail: 'Paddle slowly near animals; the closer approach goes to those who wait' },
      { label: 'Tell us about health concerns', detail: 'We adapt tours for most needs — just let us know beforehand' },
    ],
  },
]

export default function AmenitiesPage() {
  return (
    <main>
      {/* Hero */}
      <ImageWithOverlay
        src="/images/others/ameneties0.webp"
        alt="Kayaking amenities at AquaTrek, Rathgama Lake"
        className="h-[70vh]"
        priority
      >
        <div className="h-full container flex flex-col justify-end pb-16 lg:pb-20">
          <p className="eyebrow text-white/70 mb-4">Before You Paddle</p>
          <h1
            className="text-white max-w-2xl"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-5xl)',
              letterSpacing: 'var(--tracking-tight)',
              lineHeight: 'var(--leading-tight)',
            }}
          >
            Amenities &amp; Tips
          </h1>
          <p className="mt-3 text-base lg:text-lg max-w-lg" style={{ color: 'rgba(255,255,255,0.80)', lineHeight: 'var(--leading-relaxed)' }}>
            Everything we provide — and everything worth knowing — before you get on the water.
          </p>
        </div>
      </ImageWithOverlay>

      {/* What's Included */}
      <section className="section" style={{ background: 'var(--surface-page)' }}>
        <div className="container">
          <div className="text-center mb-12 reveal">
            <p className="eyebrow mb-3">Included With Every Tour</p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-4xl)',
                color: 'var(--text-heading)',
                letterSpacing: 'var(--tracking-tight)',
              }}
            >
              Everything You Need, Provided
            </h2>
            <p className="mt-4 mx-auto" style={{ color: 'var(--text-secondary)', maxWidth: '52ch' }}>
              Turn up and paddle. We take care of the gear, the safety, and the local knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-children">
            {amenities.map((a) => (
              <div
                key={a.title}
                className="reveal rounded-card p-7 flex flex-col gap-4"
                style={{
                  background: 'var(--surface-raised)',
                  border: 'var(--card-border)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: 'var(--brand-accent-subtle)' }}
                  >
                    {a.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-lg)',
                      fontWeight: 'var(--font-bold)',
                      color: 'var(--text-heading)',
                    }}
                  >
                    {a.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {a.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <span className="mt-0.5 flex-shrink-0" style={{ color: 'var(--brand-accent)' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips grid */}
      <section className="section" style={{ background: 'var(--neutral-200)' }}>
        <div className="container">
          <div className="text-center mb-12 reveal">
            <p className="eyebrow mb-3">From Our Guides</p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-4xl)',
                color: 'var(--text-heading)',
                letterSpacing: 'var(--tracking-tight)',
              }}
            >
              Tips for a Great Visit
            </h2>
            <p className="mt-4 mx-auto" style={{ color: 'var(--text-secondary)', maxWidth: '50ch' }}>
              Honest advice from people who paddle this lake every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((section) => (
              <div
                key={section.heading}
                className="reveal rounded-card p-7"
                style={{
                  background: 'var(--surface-raised)',
                  border: 'var(--card-border)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <h3
                  className="mb-5"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-xl)',
                    fontWeight: 'var(--font-bold)',
                    color: 'var(--text-heading)',
                    borderBottom: '2px solid var(--brand-accent)',
                    paddingBottom: '0.75rem',
                  }}
                >
                  {section.heading}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <span
                        className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: 'var(--brand-accent)', marginTop: '0.4rem' }}
                      />
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <strong style={{ color: 'var(--text-primary)', fontWeight: 'var(--font-semibold)' }}>
                          {item.label}:
                        </strong>{' '}
                        {item.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--surface-page)' }}>
        <div className="container">
          <FAQSection />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--brand-primary)' }}>
        <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="eyebrow mb-2" style={{ color: 'var(--brand-primary-muted)' }}>Ready When You Are</p>
            <p
              className="text-white"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-2xl)',
                fontWeight: 'var(--font-bold)',
              }}
            >
              Same-day bookings are usually available.
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
