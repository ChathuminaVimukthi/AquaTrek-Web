import type { Metadata } from 'next'
import Link from 'next/link'
import { ImageWithOverlay } from '@/components/ui/ImageWithOverlay'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { InfoGrid } from '@/components/ui/InfoGrid'
import WaitlistForm from '@/components/WaitlistForm'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'AquaHub — Lakeside Coworking Café Hikkaduwa | Starlink WiFi',
  description:
    'Work with a lake view. Starlink-powered coworking café on Rathgama Lake, Hikkaduwa. Day passes from Rs 1,500. Paddle on your lunch break. Opening 2025.',
  alternates: { canonical: 'https://aquatrekhikkaduwa.com/aquahub' },
  openGraph: {
    title: 'AquaHub — Lakeside Coworking Café Hikkaduwa',
    description: 'Starlink-powered coworking café on Rathgama Lake. Opening 2025.',
    url: 'https://aquatrekhikkaduwa.com/aquahub',
    images: [{ url: '/og-images/aquahub.jpg', width: 1200, height: 630, alt: 'AquaHub coworking café with lake view over Rathgama Lake, Hikkaduwa' }],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AquaHub — Lakeside Coworking Café',
  description: 'Starlink-powered coworking café on Rathgama Lake, Hikkaduwa.',
  url: 'https://aquatrekhikkaduwa.com/aquahub',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dodandugoda Road, Dodanduwa',
    addressLocality: 'Hikkaduwa',
    addressRegion: 'Southern Province',
    postalCode: '80240',
    addressCountry: 'LK',
  },
}

const pricing = [
  { name: 'Day Pass', price: 'Rs 1,500', note: '8 AM – 8 PM, unlimited coffee', featured: false },
  { name: 'Weekly Pass', price: 'Rs 6,500', note: '5 days, save 13%', featured: false },
  { name: 'Monthly Hot Desk', price: 'Rs 18,000', note: 'Unlimited, priority seating', featured: true },
  { name: 'Monthly Dedicated', price: 'Rs 28,000', note: 'Reserved desk + locker', featured: false },
  { name: 'Private Office', price: 'Rs 45,000', note: '2-person private cabin, lake view', featured: false },
]

const features = [
  { icon: '📶', label: 'Internet', value: 'Starlink (200+ Mbps)' },
  { icon: '☕', label: 'Drinks', value: 'Unlimited coffee & tea' },
  { icon: '🖨️', label: 'Equipment', value: 'Printer & scanner' },
  { icon: '📞', label: 'Privacy', value: 'Phone booths' },
  { icon: '🌅', label: 'View', value: 'Lake-facing terrace' },
  { icon: '🛶', label: 'Bonus', value: 'Paddle on lunch break' },
]

const faqs = [
  { q: "What internet speed does AquaHub have?", a: "Starlink satellite internet — typically 150–250 Mbps download, with low latency. More than enough for video calls, uploads, and remote work." },
  { q: "Can I use AquaHub without staying at the hostel?", a: "Yes. AquaHub is open to all visitors. Buy a day pass at the door or pre-book a membership." },
  { q: "Are there private call booths?", a: "Yes — AquaHub has two soundproofed call booths available to all members at no extra cost." },
  { q: "What are the coworking hours?", a: "8 AM to 8 PM, 7 days a week. Monthly members get 24/7 keycard access." },
  { q: "Is there a minimum commitment for monthly memberships?", a: "No minimum — pay month to month. We also offer 3-month discounts for long-term stays." },
]

export default function AquaHubPage() {
  return (
    <main>
      <JsonLd data={localBusinessSchema} />

      {/* Hero */}
      <ImageWithOverlay
        src="/images/main-carousel/carousel5.webp"
        alt="Open water view of Rathgama Lake — AquaHub coworking café location in Hikkaduwa"
        className="h-[70vh]"
        priority
      >
        <div className="h-full flex items-end pb-16 container">
          <div className="max-w-xl">
            <Badge variant="coming-soon" className="mb-4">Opening 2025</Badge>
            <h1
              className="text-white mb-4"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-5xl)', letterSpacing: 'var(--tracking-tight)' }}
            >
              Work with a lake view.<br />Paddle on your lunch break.
            </h1>
            <p className="text-lg mb-6" style={{ color: 'rgba(255,255,255,0.80)', maxWidth: '520px', lineHeight: 'var(--leading-relaxed)' }}>
              Starlink-powered coworking café right on Rathgama Lake. The most productive office in Hikkaduwa.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Button href="#waitlist" variant="primary">Join Waitlist</Button>
              <Button href="/contact" variant="ghost">Ask a Question</Button>
            </div>
          </div>
        </div>
      </ImageWithOverlay>

      {/* Why AquaHub */}
      <section className="section" style={{ background: 'var(--brand-primary)' }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              eyebrow="Why AquaHub"
              heading="Your Most Productive Day Starts Here"
              align="center"
              inverse
            />
            <ul className="space-y-3 reveal">
              {[
                'Starlink internet — no throttling, no outages',
                'Lake views that actually reduce stress (science says so)',
                'Quiet enough to focus, social enough to connect',
                'Kayak tours available between your meetings',
                'Fresh local food and unlimited specialty coffee',
                'Digital nomad-friendly: monthly plans, no lock-in',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--text-inverse-muted)]">
                  <span className="mt-1 flex-shrink-0" style={{ color: 'var(--brand-primary-light)' }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" style={{ background: 'var(--surface-page)' }}>
        <div className="container">
          <SectionHeader eyebrow="Included" heading="Everything You Need" align="center" />
          <div className="max-w-3xl mx-auto reveal">
            <InfoGrid
              cols={3}
              items={features.map((f) => ({
                icon: <span className="text-lg">{f.icon}</span>,
                label: f.label,
                value: f.value,
              }))}
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section" style={{ background: 'var(--surface-raised)' }}>
        <div className="container">
          <SectionHeader eyebrow="Membership Plans" heading="Simple, Flexible Pricing" align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto reveal-children">
            {pricing.map((p) => (
              <div
                key={p.name}
                className="rounded-card p-6 flex flex-col relative"
                style={{
                  background: 'var(--surface-raised)',
                  border: p.featured ? '2px solid var(--brand-accent)' : 'var(--card-border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="featured">Most Popular</Badge>
                  </div>
                )}
                <h3 className="font-semibold mb-1 mt-2" style={{ color: 'var(--text-heading)' }}>{p.name}</h3>
                <p className="text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>{p.note}</p>
                <p className="mt-auto font-display text-2xl" style={{ color: p.featured ? 'var(--brand-accent)' : 'var(--brand-primary)' }}>
                  {p.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-sm" style={{ background: 'var(--surface-page)' }}>
        <div className="container max-w-2xl mx-auto">
          <SectionHeader eyebrow="FAQ" heading="Coworking Questions" align="center" />
          <dl className="space-y-4 reveal">
            {faqs.map(({ q, a }) => (
              <div key={q} className="p-5 rounded-card" style={{ background: 'var(--surface-raised)', border: 'var(--card-border)' }}>
                <dt className="font-semibold mb-2" style={{ color: 'var(--text-heading)' }}>{q}</dt>
                <dd className="text-sm" style={{ color: 'var(--text-secondary)' }}>{a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="section" style={{ background: 'var(--brand-primary)' }}>
        <div className="container">
          <div className="max-w-lg mx-auto">
            <SectionHeader
              eyebrow="Be First to Know"
              heading="Join the Waitlist"
              subtext="Get first access to day passes and founding member rates."
              align="center"
              inverse
            />
            <WaitlistForm category="coworking" />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-sm" style={{ background: 'var(--surface-page)' }}>
        <div className="container text-center">
          <p className="eyebrow mb-4">Also at AquaTrek</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/hostel" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-pill text-sm font-semibold border transition-all hover:-translate-y-px" style={{ border: '1px solid var(--brand-primary)', color: 'var(--brand-primary)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--brand-accent)' }} />Lake House Hostel
            </Link>
            <Link href="/rooftop" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-pill text-sm font-semibold border transition-all hover:-translate-y-px" style={{ border: '1px solid var(--brand-primary)', color: 'var(--brand-primary)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--brand-accent)' }} />Rooftop Deck
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-pill text-sm font-semibold transition-all hover:-translate-y-px" style={{ background: 'var(--brand-accent)', color: 'white' }}>
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
