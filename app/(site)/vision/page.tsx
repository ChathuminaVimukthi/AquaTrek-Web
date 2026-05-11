import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ImageWithOverlay } from '@/components/ui/ImageWithOverlay'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Our Vision — Lagoon Oasis by AquaTrek Hikkaduwa',
  description:
    "AquaTrek's long-term vision for Rathgama Lake: a calm, nature-led space built slowly around the water. Kayaking, a lakefront hostel, coworking café, and rooftop events — all guided by respect for the lagoon.",
  alternates: { canonical: 'https://aquatrekhikkaduwa.com/vision' },
  openGraph: {
    title: 'Our Vision — Lagoon Oasis | AquaTrek Hikkaduwa',
    description: "AquaTrek's future vision for a calm, nature-led lagoon space beside Rathgama Lake.",
    url: 'https://aquatrekhikkaduwa.com/vision',
    images: [{ url: '/og-images/homepage.jpg', width: 1200, height: 630, alt: 'Rathgama Lake lagoon at sunrise — AquaTrek vision page' }],
  },
}

const guardrails = [
  {
    title: 'We Are Not a Party Venue',
    bullets: ['No loud music or DJs', 'No late-night events', 'No nightlife culture'],
  },
  {
    title: 'We Are Not a Resort',
    bullets: ['No all-inclusive packages', 'No mass tourism buses', 'No rigid or rushed schedules'],
  },
  {
    title: 'We Are Not a Bar',
    bullets: [
      'No alcohol sales (BYOB only where applicable)',
      'No drinking near the lagoon or kayak areas',
      'Sunset socials stay calm and unhurried',
    ],
  },
  {
    title: 'We Are Not a Coworking Office',
    bullets: ['No corporate vibe', 'No phone-call heavy zones', 'Work feels light, creative, and optional'],
  },
]

const coming = [
  {
    badge: 'Opening Early 2027',
    icon: '🏡',
    title: 'AquaTrek Lake House',
    desc: "Sri Lanka's only lakefront hostel on Rathgama Lake. Dorm beds, private rooms, Starlink WiFi, and kayak tours from your doorstep.",
    href: '/hostel',
    cta: 'Learn more →',
  },
  {
    badge: 'Opening Early 2027',
    icon: '💻',
    title: 'AquaHub Cowork',
    desc: 'Starlink-powered coworking café right on the lake. The most productive — and most peaceful — office in Hikkaduwa.',
    href: '/aquahub',
    cta: 'Learn more →',
  },
  {
    badge: 'Opening Early 2027',
    icon: '🌅',
    title: 'Rooftop Sunset Deck',
    desc: '360° views over Rathgama Lake. Sunset yoga, private dinners, birthday events, and corporate retreats up to 50 guests.',
    href: '/rooftop',
    cta: 'Learn more →',
  },
]

const roadmap = [
  {
    period: 'Now',
    label: 'Kayak Tours',
    items: ['Sunrise Wildlife Tour', 'Sunset Banyan Tree Tour', 'Private & group bookings', 'Celebration packages'],
  },
  {
    period: 'Early 2027',
    label: 'Lagoon Oasis Phase 1',
    items: ['Lake House Hostel', 'AquaHub Coworking Café', 'Rooftop Sunset Deck', 'Expanded tour schedule'],
  },
  {
    period: 'Beyond',
    label: 'Slow Growth',
    items: ['Wellness programming', 'Community conservation projects', 'Long-stay creative residencies', 'Guided by guest feedback'],
  },
]

const stewardship = [
  { icon: '🪸', title: 'Reef-safe sunscreen only', body: 'We provide and require reef-safe sunscreen on all tours to protect the lake\'s aquatic ecosystem.' },
  { icon: '🚫', title: 'No single-use plastic', body: 'Reusable water bottles, bamboo paddles, and biodegradable packaging across all operations.' },
  { icon: '🐦', title: 'Wildlife-first protocols', body: 'Guides keep minimum distances from nesting sites. No feeding, no chasing, no flash photography.' },
  { icon: '🌱', title: 'Mangrove protection', body: 'We partner with local conservation efforts and educate every guest about the mangrove system they are paddling through.' },
]

const community = [
  { stat: '100%', label: 'Local guides', detail: 'Every AquaTrek guide is from Rathgama or Dodanduwa — many from fishing families who have worked this lake for generations.' },
  { stat: 'Direct', label: 'Supplier relationships', detail: 'Food, equipment, and services are sourced from local vendors first. Tourist money stays in the community.' },
  { stat: 'Free', label: 'Guest education', detail: 'Every tour includes ecological and cultural context — the lake\'s birds, mangroves, fishing traditions, and the Island Hermitage.' },
]

export default function VisionPage() {
  return (
    <main>
      {/* Hero */}
      <ImageWithOverlay
        src="/images/main-carousel/carousel7.webp"
        alt="Rathgama Lagoon at sunrise — Lagoon Oasis vision by AquaTrek"
        className="h-[70vh]"
        priority
      >
        <div className="h-full container flex flex-col justify-end pb-16 lg:pb-20">
          <p className="eyebrow text-white/70 mb-4">Our Direction</p>
          <h1
            className="text-white max-w-2xl"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-5xl)',
              letterSpacing: 'var(--tracking-tight)',
              lineHeight: 'var(--leading-tight)',
            }}
          >
            Lagoon Oasis
          </h1>
          <p className="mt-3 text-lg max-w-xl" style={{ color: 'rgba(255,255,255,0.80)', lineHeight: 'var(--leading-relaxed)' }}>
            Calm growth guided by water, community, and the rhythm of Rathgama Lagoon.
          </p>
        </div>
      </ImageWithOverlay>

      {/* Philosophy */}
      <div style={{ background: 'var(--surface-page)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="order-2 md:order-1 relative" style={{ minHeight: '420px' }}>
            <Image
              src="/images/sunrise-tour/mangrove-kayaking2.webp"
              alt="Kayaking through the mangrove channels of Rathgama Lake at sunrise"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 md:order-2 px-8 md:px-16 py-14 md:py-20 flex flex-col justify-center">
            <p className="eyebrow mb-4">The Philosophy</p>
            <h2
              className="mb-6"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', color: 'var(--text-heading)' }}
            >
              Built slowly. Tested in real life.
            </h2>
            <div className="space-y-4" style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
              <p>
                Lagoon Oasis is the long-term vision behind AquaTrek. Some elements are alive today. Others are being prototyped,
                tested, and built over time so they feel natural to the lagoon and the community around it.
              </p>
              <p>
                Instead of launching everything at once, we move step by step — guided by our guests, the land, and what feels right
                for the water. This careful pace keeps AquaTrek personal while allowing Lagoon Oasis to grow without losing what makes it special.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What we're building */}
      <section className="section" style={{ background: 'var(--neutral-200)' }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">What We Are Building</p>
            <h2
              style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', color: 'var(--text-heading)', letterSpacing: 'var(--tracking-tight)' }}
            >
              Three spaces. One lagoon.
            </h2>
            <p className="mt-4 mx-auto" style={{ color: 'var(--text-secondary)', maxWidth: '50ch' }}>
              Each opening in early 2027, each designed around the same principle: respect the lake first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coming.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-card p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
                style={{ background: 'var(--surface-raised)', border: 'var(--card-border)', boxShadow: 'var(--shadow-card)' }}
              >
                <div className="mb-4">
                  <Badge variant="coming-soon">{item.badge}</Badge>
                </div>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3
                  className="mb-3"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--text-heading)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm flex-1 mb-4" style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                  {item.desc}
                </p>
                <span
                  className="text-sm font-semibold transition-colors group-hover:text-[var(--brand-accent)]"
                  style={{ color: 'var(--brand-primary-light)' }}
                >
                  {item.cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section" style={{ background: 'var(--brand-primary)' }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3" style={{ color: 'var(--brand-primary-muted)' }}>The Timeline</p>
            <h2
              className="text-white"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', letterSpacing: 'var(--tracking-tight)' }}
            >
              Where We Are Going
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-4xl mx-auto">
            {roadmap.map((phase, i) => (
              <div
                key={phase.period}
                className="relative px-8 py-8"
                style={{
                  borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{ color: 'var(--brand-accent-light)' }}
                >
                  {phase.period}
                </p>
                <h3
                  className="text-white mb-4"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)' }}
                >
                  {phase.label}
                </h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--brand-accent)' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We Are Not */}
      <section className="section" style={{ background: 'var(--surface-raised)' }}>
        <div className="container">
          <div className="mb-12">
            <p className="eyebrow mb-3">Clear Boundaries</p>
            <h2
              style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', color: 'var(--text-heading)', letterSpacing: 'var(--tracking-tight)' }}
            >
              What We Are Not
            </h2>
            <p className="mt-4" style={{ color: 'var(--text-secondary)', maxWidth: '52ch' }}>
              These are not rules for guests — they are guardrails we set for ourselves to protect the lagoon and the community around it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guardrails.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-card"
                style={{ background: 'var(--surface-page)', border: 'var(--card-border)' }}
              >
                <h3 className="font-semibold mb-4" style={{ fontSize: 'var(--text-lg)', color: 'var(--text-heading)' }}>
                  {item.title}
                </h3>
                <ul className="space-y-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'var(--brand-accent)' }} />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental stewardship */}
      <section className="section" style={{ background: 'var(--surface-page)' }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">Our Responsibility</p>
            <h2
              style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', color: 'var(--text-heading)', letterSpacing: 'var(--tracking-tight)' }}
            >
              The Lake Comes First
            </h2>
            <p className="mt-4 mx-auto" style={{ color: 'var(--text-secondary)', maxWidth: '52ch' }}>
              Rathgama Lake is the reason AquaTrek exists. Everything we build must give back more than it takes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {stewardship.map((s) => (
              <div key={s.title} className="flex gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 mt-0.5"
                  style={{ background: 'var(--brand-accent-subtle)' }}
                >
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ fontSize: 'var(--text-base)', color: 'var(--text-heading)' }}>
                    {s.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <div style={{ background: 'var(--neutral-200)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative" style={{ minHeight: '420px' }}>
            <Image
              src="/images/others/local-fisherman1.webp"
              alt="Local fisherman on Rathgama Lake — AquaTrek supports the Rathgama fishing community"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="px-8 md:px-16 py-14 md:py-20 flex flex-col justify-center">
            <p className="eyebrow mb-4">Local First</p>
            <h2
              className="mb-6"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', color: 'var(--text-heading)' }}
            >
              Rooted in the Rathgama community
            </h2>
            <div className="space-y-6">
              {community.map((c) => (
                <div key={c.label} className="flex gap-4">
                  <div
                    className="flex-shrink-0 font-display text-2xl"
                    style={{ color: 'var(--brand-accent)', fontFamily: 'var(--font-display)' }}
                  >
                    {c.stat}
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: 'var(--text-heading)' }}>{c.label}</p>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                      {c.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section style={{ background: 'var(--brand-primary)' }}>
        <div className="container py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="eyebrow mb-2" style={{ color: 'var(--brand-primary-muted)' }}>Start Here</p>
            <p
              className="text-white"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)' }}
            >
              The lagoon is ready when you are.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/tour/sunrise-wildlife"
              className="inline-flex items-center px-7 py-3 rounded-pill text-sm font-semibold transition-all hover:-translate-y-px hover:shadow-lg"
              style={{ background: 'var(--brand-accent)', color: 'white' }}
            >
              Book a Sunrise Tour →
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-7 py-3 rounded-pill text-sm font-semibold border transition-all hover:-translate-y-px"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)' }}
            >
              About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
