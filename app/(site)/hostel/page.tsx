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
  title: 'AquaTrek Lake House — Lakefront Hostel Hikkaduwa | Opening Early 2027',
  description:
    "Sri Lanka's only lakefront hostel on Rathgama Lake. Dorm beds, private rooms, Starlink WiFi, kayak tours from your doorstep. Perfect for backpackers, digital nomads & couples.",
  alternates: { canonical: 'https://aquatrekhikkaduwa.com/hostel' },
  openGraph: {
    title: 'AquaTrek Lake House — Lakefront Hostel Hikkaduwa',
    description: "Sri Lanka's only lakefront hostel on Rathgama Lake. Opening Early 2027.",
    url: 'https://aquatrekhikkaduwa.com/hostel',
    images: [{ url: '/og-images/hostel.jpg', width: 1200, height: 630, alt: 'AquaTrek Lake House lakefront hostel on Rathgama Lake, Hikkaduwa' }],
  },
}

const lodgingSchema = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'AquaTrek Lake House',
  description: "Sri Lanka's only lakefront hostel on Rathgama Lake, Hikkaduwa.",
  url: 'https://aquatrekhikkaduwa.com/hostel',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dodandugoda Road, Dodanduwa',
    addressLocality: 'Hikkaduwa',
    addressRegion: 'Southern Province',
    postalCode: '80240',
    addressCountry: 'LK',
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Free WiFi (Starlink)', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Lake View', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Kayak Tours', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
  ],
}

const guestTypes = [
  { icon: '🎒', title: 'Backpackers', desc: 'Affordable dorm beds steps from the lake. Meet fellow travellers and explore southern Sri Lanka.' },
  { icon: '💻', title: 'Digital Nomads', desc: 'Starlink WiFi, a dedicated work area, and a serene lakefront backdrop. Paddle on your lunch break.' },
  { icon: '💑', title: 'Couples & Solos', desc: 'Private lake-view rooms for a romantic getaway or a solo adventure in nature.' },
]

const pricing = [
  { type: 'Dorm Bed', price: 'From Rs 2,500', note: 'Shared 6-bed dorm, lake-facing' },
  { type: 'Dorm Private Pod', price: 'From Rs 3,500', note: 'Privacy curtain + personal storage' },
  { type: 'Private Room', price: 'From Rs 6,000', note: 'En-suite, garden view' },
  { type: 'Lake View Private', price: 'From Rs 8,500', note: 'En-suite, direct lake view', featured: true },
]

const amenities = [
  { icon: '📶', label: 'Connectivity', value: 'Starlink WiFi' },
  { icon: '🛶', label: 'Activities', value: 'Kayak tours included' },
  { icon: '❄️', label: 'Rooms', value: 'Air-conditioned' },
  { icon: '🍳', label: 'Kitchen', value: 'Shared kitchen' },
  { icon: '🌅', label: 'View', value: 'Lakefront terrace' },
  { icon: '🧳', label: 'Storage', value: 'Luggage lockers' },
]

const faqs = [
  { q: "What's included in the dorm bed price?", a: "Bed linen, towel, locker, and Starlink WiFi. Breakfast available at extra charge." },
  { q: "Is there a curfew?", a: "No curfew. The hostel operates 24/7 with keycard access." },
  { q: "Do hostel guests get free coworking access?", a: "Yes — hostel guests get 2 hours free at AquaHub coworking per day." },
  { q: "How close is the hostel to Hikkaduwa beach?", a: "About 6 km from Hikkaduwa beach — a 15-minute tuk-tuk ride." },
  { q: "Can I store my luggage?", a: "Yes, we have secure luggage storage available for all guests." },
]

export default function HostelPage() {
  return (
    <main>
      <JsonLd data={lodgingSchema} />

      {/* Hero */}
      <ImageWithOverlay
        src="/images/main-carousel/carousel4.webp"
        alt="AquaTrek Lake House lakefront hostel view over Rathgama Lake, Hikkaduwa"
        className="h-[70vh]"
        priority
      >
        <div className="h-full flex items-end pb-16 container">
          <div className="max-w-xl">
            <Badge variant="coming-soon" className="mb-4">Opening Early 2027</Badge>
            <h1
              className="text-white mb-4"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-5xl)', letterSpacing: 'var(--tracking-tight)' }}
            >
              AquaTrek Lake House
            </h1>
            <p className="text-lg mb-6" style={{ color: 'rgba(255,255,255,0.80)', maxWidth: '520px', lineHeight: 'var(--leading-relaxed)' }}>
              Sri Lanka&apos;s only lakefront hostel on Rathgama Lake. Sleep, paddle, work, explore.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Button href="#waitlist" variant="primary">Join Waitlist</Button>
              <Button href="/contact" variant="ghost">Ask a Question</Button>
            </div>
          </div>
        </div>
      </ImageWithOverlay>

      {/* Who it's for */}
      <section className="section" style={{ background: 'var(--surface-page)' }}>
        <div className="container">
          <SectionHeader
            eyebrow="Who It's For"
            heading="A Home Base for Explorers"
            subtext="Whether you're here for a week or a month, AquaTrek Lake House is your lakeside base."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-children">
            {guestTypes.map((g) => (
              <Card key={g.title} variant="flat" className="p-6 text-center">
                <div className="text-4xl mb-4">{g.icon}</div>
                <h3 className="font-display mb-2" style={{ fontSize: 'var(--text-2xl)' }}>{g.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{g.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section" style={{ background: 'var(--surface-raised)' }}>
        <div className="container">
          <SectionHeader eyebrow="Rates" heading="Simple, Transparent Pricing" align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto reveal-children">
            {pricing.map((p) => (
              <div
                key={p.type}
                className="rounded-card p-6 flex flex-col relative"
                style={{
                  background: 'var(--surface-raised)',
                  border: p.featured ? '2px solid var(--brand-accent)' : 'var(--card-border)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="featured">Best View</Badge>
                  </div>
                )}
                <h3 className="font-semibold mb-1 mt-2" style={{ color: 'var(--text-heading)' }}>{p.type}</h3>
                <p className="text-xs mb-2" style={{ color: 'var(--text-secondary)' }}>{p.note}</p>
                <p className="mt-auto font-display text-xl" style={{ color: p.featured ? 'var(--brand-accent)' : 'var(--brand-primary)' }}>
                  {p.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section" style={{ background: 'var(--surface-page)' }}>
        <div className="container">
          <SectionHeader eyebrow="What's Included" heading="Hostel Amenities" align="center" />
          <div className="max-w-3xl mx-auto reveal">
            <InfoGrid
              cols={3}
              items={amenities.map((a) => ({
                icon: <span className="text-lg">{a.icon}</span>,
                label: a.label,
                value: a.value,
              }))}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-sm" style={{ background: 'var(--surface-raised)' }}>
        <div className="container max-w-2xl mx-auto">
          <SectionHeader eyebrow="FAQ" heading="Hostel Questions" align="center" />
          <dl className="space-y-4 reveal">
            {faqs.map(({ q, a }) => (
              <div key={q} className="p-5 rounded-card" style={{ background: 'var(--surface-page)', border: 'var(--card-border)' }}>
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
              subtext="Get early access and opening-week rates when we launch."
              align="center"
              inverse
            />
            <WaitlistForm category="hostel" />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-sm" style={{ background: 'var(--surface-page)' }}>
        <div className="container text-center">
          <p className="eyebrow mb-4">Also Coming</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/aquahub" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-pill text-sm font-semibold border transition-all hover:-translate-y-px" style={{ border: '1px solid var(--brand-primary)', color: 'var(--brand-primary)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]" />AquaHub Cowork
            </Link>
            <Link href="/rooftop" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-pill text-sm font-semibold border transition-all hover:-translate-y-px" style={{ border: '1px solid var(--brand-primary)', color: 'var(--brand-primary)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]" />Rooftop Deck
            </Link>
            <Link href="/tour/sunrise-wildlife" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-pill text-sm font-semibold transition-all hover:-translate-y-px" style={{ background: 'var(--brand-accent)', color: 'white' }}>
              Book a Kayak Tour →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
