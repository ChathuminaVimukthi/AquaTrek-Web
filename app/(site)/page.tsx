import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import HeroSection from '@/components/HeroSection'
import { TrustBar } from '@/components/ui/TrustBar'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/JsonLd'
import InstagramFeed from '@/components/InstagramFeed'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'AquaTrek — Kayaking Tours on Rathgama Lake, Hikkaduwa',
  description:
    'Guided kayak & canoe tours on Rathgama Lake, Hikkaduwa. Sunrise wildlife tours, sunset mangrove adventures, and family kayaking from Rs 1,000. Book via WhatsApp.',
  keywords: 'kayaking Hikkaduwa, kayak tour Rathgama Lake, water adventures Hikkaduwa, mangrove kayaking Sri Lanka',
  alternates: { canonical: 'https://aquatrekhikkaduwa.com' },
  openGraph: {
    title: 'AquaTrek — Kayaking on Rathgama Lake, Hikkaduwa',
    description: 'Family-run kayak tours through mangroves, wildlife, and golden sunrises on Rathgama Lake.',
    url: 'https://aquatrekhikkaduwa.com',
    images: [{ url: '/og-images/homepage.jpg', width: 1200, height: 630, alt: 'Kayaking on Rathgama Lake at sunrise, Hikkaduwa, Sri Lanka' }],
  },
  twitter: {
    title: 'AquaTrek — Kayaking Tours on Rathgama Lake, Hikkaduwa',
    description: 'Family-run kayak tours through mangroves and wildlife. From Rs 1,000.',
    images: ['/og-images/homepage.jpg'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I book an AquaTrek kayak tour?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can book directly via WhatsApp at +94 72 130 1524, by calling us, or through the booking form on our website at aquatrekhikkaduwa.com/booking. We confirm all bookings within 24 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is kayaking at Rathgama Lake suitable for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, absolutely. Rathgama Lake is calm and sheltered, making it perfect for first-time kayakers of all ages. Our guides provide a full safety briefing and paddling instruction before every tour. Children and non-swimmers are welcome with proper life jackets.',
      },
    },
    {
      '@type': 'Question',
      name: 'What wildlife can you see on a kayak tour at Rathgama Lake?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rathgama Lake is rich in wildlife. You can commonly spot kingfishers, purple herons, brahminy kites, cormorants, and numerous migratory birds. Water monitor lizards are frequently seen sunbathing on the banks. Monkeys, fruit bats, and traditional fishermen using ancient techniques are also regular sights on the tour.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to go kayaking at Rathgama Lake?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The sunrise tour (6:00–9:00 AM) offers the calmest water, best wildlife activity, and magical golden light. The sunset tour (3:00–6:00 PM) ends at Dodanduwa harbour with stunning ocean views. Both are available year-round. The high season (November to April) has the most reliable weather.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Rathgama Lake from Hikkaduwa town?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AquaTrek is located on Dodandugoda Road in Dodanduwa, approximately 5–6 km from central Hikkaduwa. The journey takes about 15–20 minutes by tuk-tuk. We can share our exact location via WhatsApp when you book.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in the AquaTrek kayak tour price?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All tours include a welcome drink, water bottle, life jacket, waterproof phone case, and an experienced guide. The Full Lake Adventure (Rs 3,000) also includes tea and snacks after the tour. The Standard Package (Rs 1,000) includes 1 hour of kayaking with the same safety equipment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can large groups do a kayak tour at AquaTrek?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We can accommodate up to 35 people in a single session, making us ideal for school groups, corporate team days, and family reunions. Contact us on WhatsApp to arrange group bookings and custom packages.',
      },
    },
  ],
}

const tours = [
  {
    id: 'sunset-banyan-tree',
    image: '/images/sunset-tour/sunset-kayaking-1.webp',
    alt: 'Group of kayakers watching the sunset from Dodanduwa fishing harbour, Hikkaduwa',
    badge: 'Route A',
    title: 'Sunset & Banyan Tree Tour',
    description:
      'Paddle to a majestic Banyan tree, explore mangrove channels, and watch the sunset from Dodanduwa fishing harbour.',
    distance: '4.5 km',
    href: '/tour/sunset-banyan-tree',
  },
  {
    id: 'sunrise-wildlife',
    image: '/images/sunrise-tour/mangrove-kayaking5.webp',
    alt: 'Sunrise kayak tour on Rathgama Lake with mist rising over the water in Hikkaduwa',
    badge: 'Route B',
    title: 'Sunrise & Wildlife Tour',
    description:
      'Early morning serenity on calm waters. Spot kingfishers, herons, and monitor lizards at dawn on Rathgama Lake.',
    distance: '4.5 km',
    href: '/tour/sunrise-wildlife',
  },
  {
    id: 'celebration',
    image: '/images/garden-celeb/main.webp',
    alt: 'Special celebration event with fireworks on the lakeside at AquaTrek Hikkaduwa',
    badge: 'Special',
    title: 'Celebrate by the Water',
    description:
      'Birthdays, anniversaries, proposals — create unforgettable memories with our custom celebration packages.',
    distance: '',
    href: '/celebration',
  },
]

const comingSoon = [
  {
    icon: '🏠',
    title: 'AquaTrek Lake House',
    description: "Sri Lanka's only lakefront hostel on Rathgama Lake. Dorm beds, private rooms, Starlink WiFi, kayak tours from your doorstep.",
    href: '/hostel',
  },
  {
    icon: '💻',
    title: 'AquaHub Cowork & Café',
    description: 'Work with a lake view. Starlink-powered coworking café on Rathgama Lake. Day passes from Rs 1,500.',
    href: '/aquahub',
  },
  {
    icon: '🌅',
    title: 'Rooftop Sunset Deck',
    description: 'Open-air rooftop with unobstructed views over Rathgama Lake. Sunset yoga, private dinners, birthday events.',
    href: '/rooftop',
  },
]

const faqs = [
  {
    q: 'How do I book a tour?',
    a: 'Book via WhatsApp (+94 72 130 1524), call us, or use the booking form on our website. We confirm within 24 hours.',
  },
  {
    q: 'Is kayaking suitable for beginners?',
    a: 'Yes. Rathgama Lake is calm and sheltered — perfect for all ages. Our guides give a full safety briefing before every tour.',
  },
  {
    q: 'What wildlife will I see?',
    a: 'Kingfishers, purple herons, brahminy kites, water monitor lizards, monkeys, fruit bats, and traditional fishermen.',
  },
  {
    q: 'What is the best time to visit?',
    a: 'The sunrise tour (6–9 AM) has the calmest water and best wildlife. The sunset tour ends with ocean views at Dodanduwa harbour. Both run year-round.',
  },
  {
    q: 'What is included in the price?',
    a: 'Welcome drink, water bottle, life jacket, waterproof phone case, and an experienced guide. The Full Lake Adventure also includes tea and snacks.',
  },
  {
    q: 'Can you accommodate large groups?',
    a: 'Yes — up to 35 people per session. Ideal for school groups, corporate events, and family reunions.',
  },
]

export default async function HomePage() {
  return (
    <main>
      <JsonLd data={faqSchema} />

      {/* 1. Hero + Trust Bar — together fill exactly one viewport */}
      <div className="flex flex-col" style={{ height: '92svh' }}>
        <HeroSection className="flex-1 min-h-0" />
        <TrustBar variant="dark" />
      </div>

      {/* 3. Welcome */}
      <section className="section" style={{ background: 'var(--surface-page)' }}>
        <div className="container">
          <div className="max-w-[680px] mx-auto text-center reveal">
            <p className="eyebrow mb-3">About AquaTrek</p>
            <h2 className="font-display mb-6">A family&apos;s love for the lake, shared with the world.</h2>
            <p className="text-lg mx-auto" style={{ color: 'var(--text-secondary)' }}>
              For us, the most important thing is to see you enjoy every moment on the water. We love seeing you try
              new things and achieve little adventures you haven&apos;t done before. We love kids, wildlife, and those
              stories shared over a peaceful waterside stop. <strong>We&apos;re passionate about what we do.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 4. Tours Grid */}
      <section className="section" style={{ background: 'var(--surface-raised)' }}>
        <div className="container">
          <div className="reveal">
            <SectionHeader
              eyebrow="Our Experiences"
              heading="Choose Your Adventure"
              subtext="Two routes. One celebration option. Endless wonder on Rathgama Lake."
              align="center"
            />
          </div>
          <div
            className="grid gap-[var(--grid-gap)] reveal-children"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
          >
            {tours.map((tour) => (
              <Card key={tour.id} variant="default" className="reveal">
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={tour.image}
                    alt={tour.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="category">{tour.badge}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-[var(--text-2xl)] mb-2" style={{ fontSize: 'var(--text-2xl)' }}>
                    {tour.title}
                  </h3>
                  <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                    {tour.description}
                  </p>
                  {tour.distance && (
                    <span
                      className="inline-block text-xs font-semibold px-3 py-1 rounded-pill mb-4"
                      style={{
                        background: 'var(--surface-overlay)',
                        color: 'var(--brand-primary)',
                      }}
                    >
                      {tour.distance}
                    </span>
                  )}
                  <div className="flex gap-2 mt-2">
                    <Button href={`/booking?tour=${tour.id}`} variant="primary" size="sm">
                      Book Now
                    </Button>
                    <Button href={tour.href} variant="secondary" size="sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Before You Paddle */}
      <section className="section" style={{ background: 'var(--brand-primary)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-2xl reveal" style={{ aspectRatio: '4/3' }}>
              <Image
                src="/images/others/before-you-paddle.webp"
                alt="Kayaking safety equipment and amenities at AquaTrek, Rathgama Lake"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="reveal">
              <p className="eyebrow mb-3" style={{ color: 'var(--brand-primary-muted)' }}>Good To Know</p>
              <h2 className="font-display text-white mb-6" style={{ color: 'rgba(255,255,255,0.85)' }}>Before You Paddle</h2>
              <ul className="space-y-4 mb-8">
                {[
                  'Quality life jackets for all participants',
                  'Waterproof mobile phone cases provided',
                  'Experienced guide accompanying every tour',
                  'Welcome drink and water bottle included',
                  'Shaded rest areas and easy parking on-site',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3" style={{ color: 'var(--text-inverse-muted)' }}>
                    <span className="mt-1 flex-shrink-0" style={{ color: 'var(--brand-primary-light)' }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/amenities" variant="ghost">
                See All Amenities →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Pricing */}
      <section className="section" style={{ background: 'var(--surface-page)' }}>
        <div className="container">
          <div className="reveal">
            <SectionHeader
              eyebrow="Reserve Your Adventure"
              heading="Transparent, Flexible Pricing"
              subtext="Choose the option that works best for you."
              align="center"
            />
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto reveal-children"
            style={{ maxWidth: '860px' }}
          >
            {/* Standard Package */}
            <div
              className="rounded-card p-8 flex flex-col reveal"
              style={{
                background: 'var(--surface-raised)',
                border: 'var(--card-border)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <h3 className="font-display mb-1" style={{ fontSize: 'var(--text-2xl)' }}>Standard Package</h3>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>Duration: 1 hour</p>
              <p className="mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', color: 'var(--brand-primary)' }}>
                Rs 1,000 <span className="text-base font-normal" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}>/person</span>
              </p>
              <ul className="space-y-2 mb-8 flex-1">
                {['Welcome drink', 'Water bottle', 'Life jacket', 'Waterproof phone case'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span style={{ color: 'var(--brand-primary-light)' }}>✓</span>
                    <span style={{ color: 'var(--text-primary)' }}>{item}</span>
                  </li>
                ))}
                <li className="flex items-center gap-2 text-sm">
                  <span style={{ color: 'var(--brand-accent)' }}>+</span>
                  <span style={{ color: 'var(--text-secondary)' }}>Guide add-on — Rs 1,500</span>
                </li>
              </ul>
              <div className="grid grid-cols-2 gap-3">
                <Button href="https://wa.me/94721301524" variant="primary" size="sm">WhatsApp</Button>
                <Button href="tel:+94773366171" variant="secondary" size="sm">Call Us</Button>
              </div>
            </div>

            {/* Full Lake Adventure — featured */}
            <div
              className="rounded-card p-8 flex flex-col relative reveal"
              style={{
                background: 'var(--surface-raised)',
                border: '2px solid var(--brand-accent)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge variant="featured">Most Popular</Badge>
              </div>
              <h3 className="font-display mt-3 mb-1" style={{ fontSize: 'var(--text-2xl)', color: 'var(--brand-accent)' }}>
                Full Lake Adventure
              </h3>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>Duration: 3 hours</p>
              <p className="mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', color: 'var(--brand-accent)' }}>
                Rs 3,000 <span className="text-base font-normal" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}>/person</span>
              </p>
              <ul className="space-y-2 mb-8 flex-1">
                {[
                  'Guided or non-guided',
                  'Welcome drink',
                  'Water bottle',
                  'Tea & snacks after return',
                  'Customisable route',
                  'Life jacket',
                  'Waterproof phone case',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span style={{ color: 'var(--brand-primary-light)' }}>✓</span>
                    <span style={{ color: 'var(--text-primary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-3">
                <Button href="https://wa.me/94721301524" variant="primary" size="sm">WhatsApp</Button>
                <Button href="tel:+94773366171" variant="secondary" size="sm">Call Us</Button>
              </div>
            </div>
          </div>

          <p className="text-center text-sm mt-6 mx-auto reveal" style={{ color: 'var(--text-secondary)', maxWidth: '520px' }}>
            Need more time? Rs 500 per extra hour. We can accommodate up to 35 people — perfect for groups and events.
          </p>
        </div>
      </section>

      {/* 7. Coming Soon Teaser */}
      <section className="section" style={{ background: 'var(--neutral-200)' }}>
        <div className="container">
          <div className="reveal">
            <SectionHeader
              eyebrow="What's Coming"
              heading="More Than Just Kayaking"
              subtext="We're growing. Here's what's coming to AquaTrek."
              align="center"
            />
          </div>
          <div
            className="grid gap-[var(--grid-gap)] reveal-children"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
          >
            {comingSoon.map((item) => (
              <Card key={item.title} variant="default" className="flex flex-col reveal">
                <div
                  className="flex items-center justify-center text-5xl"
                  style={{
                    background: 'var(--brand-primary)',
                    borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0',
                    height: '100px',
                  }}
                >
                  {item.icon}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-3">
                    <Badge variant="coming-soon">Opening Early 2027</Badge>
                  </div>
                  <h3 className="font-display mb-2" style={{ fontSize: 'var(--text-2xl)' }}>{item.title}</h3>
                  <p className="text-sm flex-1 mb-4" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold hover:underline"
                    style={{ color: 'var(--brand-accent)' }}
                  >
                    Learn More →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials / Reviews */}
      <section className="section" style={{ background: 'var(--surface-raised)' }}>
        <div className="container">
          <div className="reveal">
            <SectionHeader
              eyebrow="Guest Stories"
              heading="Words from Fellow Adventurers"
              align="center"
            />
          </div>
          <div className="max-w-5xl mx-auto">
            <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
            <div className="elfsight-app-0a0e1efb-32bc-4121-afdd-57d5990c11a6" data-elfsight-app-lazy=""></div>
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="section-sm" style={{ background: 'var(--surface-page)' }}>
        <div className="container">
          <div className="max-w-2xl mx-auto reveal">
            <SectionHeader
              eyebrow="Common Questions"
              heading="Frequently Asked Questions"
              align="center"
            />
            <dl className="space-y-4">
              {faqs.map(({ q, a }) => (
                <div
                  key={q}
                  className="p-5 rounded-card"
                  style={{ background: 'var(--surface-raised)', border: 'var(--card-border)' }}
                >
                  <dt className="font-semibold mb-2" style={{ color: 'var(--text-heading)' }}>{q}</dt>
                  <dd className="text-sm" style={{ color: 'var(--text-secondary)' }}>{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 10. Instagram — temporarily commented out
      <section className="section" style={{ background: 'var(--surface-page)' }}>
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="eyebrow mb-2">Follow Along</p>
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
            <Link
              href="/gallery"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-[var(--brand-accent)]"
              style={{ color: 'var(--brand-primary-light)' }}
            >
              See all photos →
            </Link>
          </div>
          <InstagramFeed />
          <div className="mt-6 text-center md:hidden">
            <Link
              href="/gallery"
              className="text-sm font-semibold"
              style={{ color: 'var(--brand-accent)' }}
            >
              See all photos →
            </Link>
          </div>
        </div>
      </section>
      */}

      {/* 10. Wildlife Guide Lead Magnet */}
      <section className="section-sm" style={{ background: 'var(--brand-primary)' }}>
        <div className="container">
          <div className="max-w-xl mx-auto text-center reveal">
            <p className="eyebrow mb-3" style={{ color: 'var(--brand-primary-muted)' }}>Free Download</p>
            <h2
              className="mb-3"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-3xl)',
                color: 'white',
                letterSpacing: 'var(--tracking-tight)',
              }}
            >
              Wildlife Spotting Guide for Rathgama Lake
            </h2>
            <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '44ch', margin: '0 auto 2rem' }}>
              Kingfishers, herons, monitor lizards, and more — know exactly what to look for
              before you get on the water. Free guide, straight to your inbox.
            </p>
            <EmailCapture source="homepage_banner" />
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="relative overflow-hidden" style={{ minHeight: '400px' }}>
        <Image
          src="/images/main-carousel/carousel3.webp"
          alt="Rathgama Lake at golden hour — book your kayak tour with AquaTrek"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(28,58,43,0.7)' }} />
        <div className="relative z-10 container section flex flex-col items-center justify-center text-center">
          <h2 className="font-display text-white mb-4" style={{ color: 'rgba(255,255,255,0.85)' }}>Ready to explore Rathgama Lake?</h2>
          <p className="text-lg mb-8 mx-auto" style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '480px' }}>
            Contact us and we&apos;ll take care of the rest.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="https://wa.me/94721301524" variant="primary" size="lg">
              WhatsApp Us
            </Button>
            <Button href="tel:+94773366171" variant="ghost" size="lg">
              Call Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
