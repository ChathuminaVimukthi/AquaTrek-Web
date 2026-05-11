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
  title: 'Rooftop Sunset Deck — Events & Private Dining Hikkaduwa | AquaTrek',
  description:
    'Open-air rooftop with unobstructed views over Rathgama Lake. Sunset yoga, private dinners, birthday events, and corporate retreats. Hikkaduwa, Sri Lanka.',
  alternates: { canonical: 'https://aquatrekhikkaduwa.com/rooftop' },
  openGraph: {
    title: 'Rooftop Sunset Deck — Events & Private Dining Hikkaduwa',
    description: 'Open-air rooftop with lake views. Sunset yoga, private dinners, events. Opening Early 2027.',
    url: 'https://aquatrekhikkaduwa.com/rooftop',
    images: [{ url: '/og-images/rooftop.jpg', width: 1200, height: 630, alt: 'AquaTrek rooftop sunset deck with views over Rathgama Lake, Hikkaduwa' }],
  },
}

const eventVenueSchema = {
  '@context': 'https://schema.org',
  '@type': 'EventVenue',
  name: 'AquaTrek Rooftop Sunset Deck',
  description: 'Open-air rooftop event venue with unobstructed views over Rathgama Lake, Hikkaduwa.',
  url: 'https://aquatrekhikkaduwa.com/rooftop',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dodandugoda Road, Dodanduwa',
    addressLocality: 'Hikkaduwa',
    addressRegion: 'Southern Province',
    postalCode: '80240',
    addressCountry: 'LK',
  },
  maximumAttendeeCapacity: 50,
}

const events = [
  { icon: '🧘', title: 'Sunset Yoga', desc: 'Group yoga sessions as the sun sets over the lake. All levels welcome. Bring your mat or borrow one.' },
  { icon: '🍽️', title: 'Private Dinners', desc: 'Intimate lakeside dining for 2–20 guests. Custom menus featuring local Sri Lankan cuisine.' },
  { icon: '🎂', title: 'Birthday Events', desc: 'Celebrate with a view. We handle decor, catering, and activities so you can focus on celebrating.' },
  { icon: '🏢', title: 'Corporate Retreats', desc: 'Off-site team days with kayaking, workshops, and lakeside dining. Up to 50 attendees.' },
]

const spaceDetails = [
  { icon: '👥', label: 'Capacity', value: 'Up to 50 guests' },
  { icon: '🌅', label: 'View', value: '360° lake panorama' },
  { icon: '🎤', label: 'AV', value: 'Sound system & mic' },
  { icon: '🍹', label: 'Bar', value: 'Full bar service' },
  { icon: '🕯️', label: 'Lighting', value: 'Ambient & event lighting' },
  { icon: '🅿️', label: 'Parking', value: 'On-site parking' },
]

export default function RooftopPage() {
  return (
    <main>
      <JsonLd data={eventVenueSchema} />

      {/* Hero */}
      <ImageWithOverlay
        src="/images/main-carousel/carousel6.webp"
        alt="Sunset sky over Rathgama Lake — AquaTrek rooftop sunset deck in Hikkaduwa"
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
              Rooftop Sunset Deck
            </h1>
            <p className="text-lg mb-6" style={{ color: 'rgba(255,255,255,0.80)', maxWidth: '520px', lineHeight: 'var(--leading-relaxed)' }}>
              Open-air rooftop with unobstructed views over Rathgama Lake. Yoga, private dinners, events, and unforgettable sunsets.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Button href="#enquire" variant="primary">Enquire Now</Button>
              <Button href="/contact" variant="ghost">Get in Touch</Button>
            </div>
          </div>
        </div>
      </ImageWithOverlay>

      {/* Events */}
      <section className="section" style={{ background: 'var(--surface-page)' }}>
        <div className="container">
          <SectionHeader
            eyebrow="What We Host"
            heading="Events with a View"
            subtext="From intimate sunset dinners to full corporate retreats — every event is made better by the lake."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 reveal-children">
            {events.map((e) => (
              <Card key={e.title} variant="default" className="p-6">
                <div className="text-4xl mb-4">{e.icon}</div>
                <h3 className="font-display mb-2" style={{ fontSize: 'var(--text-2xl)' }}>{e.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{e.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Space details */}
      <section className="section" style={{ background: 'var(--brand-primary)' }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              eyebrow="The Space"
              heading="Built for Memorable Moments"
              align="center"
              inverse
            />
            <div className="reveal">
              <InfoGrid
                cols={3}
                items={spaceDetails.map((s) => ({
                  icon: <span className="text-lg">{s.icon}</span>,
                  label: s.label,
                  value: s.value,
                }))}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquire" className="section" style={{ background: 'var(--surface-page)' }}>
        <div className="container">
          <div className="max-w-lg mx-auto">
            <SectionHeader
              eyebrow="Make an Enquiry"
              heading="Plan Your Event"
              subtext="Tell us about your event and we'll get back to you within 24 hours."
              align="center"
            />
            <WaitlistForm
              category="rooftop"
              placeholder="Tell us about your event — date, type, number of guests"
            />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-sm" style={{ background: 'var(--neutral-200)' }}>
        <div className="container text-center">
          <p className="eyebrow mb-4">Also at AquaTrek</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/hostel" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-pill text-sm font-semibold border transition-all hover:-translate-y-px" style={{ border: '1px solid var(--brand-primary)', color: 'var(--brand-primary)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--brand-accent)' }} />Lake House Hostel
            </Link>
            <Link href="/aquahub" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-pill text-sm font-semibold border transition-all hover:-translate-y-px" style={{ border: '1px solid var(--brand-primary)', color: 'var(--brand-primary)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--brand-accent)' }} />AquaHub Cowork
            </Link>
            <Link href="/tour/sunset-banyan-tree" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-pill text-sm font-semibold transition-all hover:-translate-y-px" style={{ background: 'var(--brand-accent)', color: 'white' }}>
              Sunset Kayak Tour →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
