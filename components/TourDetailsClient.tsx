'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ImageWithOverlay } from '@/components/ui/ImageWithOverlay'
import { SectionHeader } from '@/components/ui/SectionHeader'

interface Tour {
  id: string
  title: string
  eyebrow: string
  heroImage: string
  heroSubtitle: string
  description: string
  highlights: string[]
  stats: { icon: string; label: string; value: string }[]
  photos: string[]
  schedule: { icon: string; title: string; description: string }[]
  ctaImage: string
  mapRoute: 'A' | 'B'
}

const tours: Record<string, Tour> = {
  'sunset-banyan-tree': {
    id: 'sunset-banyan-tree',
    title: 'Sunset & Banyan Tree Tour',
    eyebrow: 'Route A · 3:00 PM – 6:00 PM',
    heroImage: '/images/sunset-tour/sunset-1.webp',
    heroSubtitle:
      'Paddle to a majestic Banyan tree, explore mangrove channels alive with fruit bats, and watch the sun melt into the ocean at Dodanduwa harbour.',
    description:
      'Explore a majestic Banyan tree hanging over the lake, climb its roots and snap unforgettable photos, then weave through mangrove channels alive with wildlife as dusk settles. End your evening at Dodanduwa beach with cliff-top views and a golden sunset over the ocean — adventure, nature, and serenity in one tour.',
    highlights: [
      'Climb the iconic Banyan tree overhanging the lake',
      'Paddle through mangrove channels at dusk',
      'Watch fruit bats emerging at twilight',
      'Sunset views from Dodanduwa fishing harbour',
      'Welcome drink, water & waterproof phone case included',
    ],
    stats: [
      { icon: '🗺️', label: 'Distance', value: '4.5 km' },
      { icon: '⏱️', label: 'Duration', value: '2–3 Hours' },
      { icon: '🌅', label: 'Best Time', value: '3:00 – 6:00 PM' },
      { icon: '🟢', label: 'Difficulty', value: 'Beginner' },
      { icon: '👥', label: 'Participants', value: '2 – 35' },
      { icon: '🌿', label: 'Age Group', value: 'All Ages' },
      { icon: '📅', label: 'Availability', value: 'Year-Round' },
      { icon: '📍', label: 'Location', value: 'Rathgama Lake' },
    ],
    photos: [
      '/images/sunset-tour/banyan-tree1.webp',
      '/images/sunset-tour/banyan-tree2.webp',
      '/images/sunset-tour/sunset-2.webp',
      '/images/sunset-tour/sunset-cliff1.webp',
      '/images/sunset-tour/cliff-1.webp',
      '/images/sunset-tour/sunset-kayaking-1.webp',
    ],
    schedule: [
      {
        icon: '🌅',
        title: 'Departure & Paddle Start',
        description:
          "Meet at our starting point for a friendly briefing and a refreshing welcome drink. All gear is provided before you set off across the calm afternoon waters.",
      },
      {
        icon: '🌳',
        title: 'Banyan Tree Stop',
        description:
          'Paddle to a stunning Banyan tree overhanging the lake. Climb its roots, explore its sprawling branches, take memorable photos, or simply sit in the serene surroundings.',
      },
      {
        icon: '🚣',
        title: 'Mangrove Channels',
        description:
          'Continue through winding mangrove pathways alive with local wildlife. Spot fish beneath the surface and watch fruit bats flit above as dusk settles over the lake.',
      },
      {
        icon: '🎣',
        title: 'Local Culture & Wildlife',
        description:
          "Observe the natural rhythms of the lake and glimpse local fishermen at work. Our guides point out birds returning to their roosts and other evening-active creatures.",
      },
      {
        icon: '🏖️',
        title: 'Beach & Cliff Adventure',
        description:
          'Reach Dodanduwa beach and climb a small cliff for panoramic views. The sky begins its transformation into the warm colours of sunset.',
      },
      {
        icon: '🌇',
        title: 'Sunset at the Harbour',
        description:
          'Watch the sun sink into the ocean at Dodanduwa fishing harbour. A golden, deeply satisfying end to your evening on the water.',
      },
      {
        icon: '☕',
        title: 'Refreshments',
        description:
          'Return to shore for freshly brewed Ceylon tea and a light snack. Relax, reflect, and share stories from your unforgettable evening.',
      },
    ],
    ctaImage: '/images/sunset-tour/sunset-kayaking2.webp',
    mapRoute: 'B',
  },

  'sunrise-wildlife': {
    id: 'sunrise-wildlife',
    title: 'Sunrise & Wildlife Tour',
    eyebrow: 'Route B · 6:00 AM – 9:00 AM',
    heroImage: '/images/sunrise-tour/sunrise-1.webp',
    heroSubtitle:
      'Glide across glass-still waters as dawn breaks over Rathgama Lake. Spot kingfishers, herons, and monitor lizards before the world wakes up.',
    description:
      'Begin your day with the quiet magic of dawn on Rathgama Lake. Glide across glass-still waters as the sky softens into shades of gold and rose. Watch the mangroves awaken, birds take flight, and local fishermen begin their morning rituals — all while floating in a world that feels calm, untouched, and beautifully alive.',
    highlights: [
      'Sunrise paddle on mirror-still waters',
      'Spot kingfishers, purple herons & brahminy kites',
      'Watch water monitor lizards on the banks',
      'Navigate through ancient mangrove channels',
      'Observe traditional fishermen at work',
    ],
    stats: [
      { icon: '🗺️', label: 'Distance', value: '4.5 km' },
      { icon: '⏱️', label: 'Duration', value: '2–3 Hours' },
      { icon: '🌄', label: 'Best Time', value: '6:00 – 9:00 AM' },
      { icon: '🟢', label: 'Difficulty', value: 'Beginner' },
      { icon: '👥', label: 'Participants', value: '2 – 35' },
      { icon: '🌿', label: 'Age Group', value: 'All Ages' },
      { icon: '📅', label: 'Availability', value: 'Year-Round' },
      { icon: '📍', label: 'Location', value: 'Rathgama Lake' },
    ],
    photos: [
      '/images/sunrise-tour/sunrise-1.webp',
      '/images/sunrise-tour/bird2.webp',
      '/images/sunrise-tour/bird6.webp',
      '/images/sunrise-tour/mangrove-kayaking3.webp',
      '/images/sunrise-tour/mangrove-kayaking5.webp',
      '/images/sunrise-tour/watermonitor1.webp',
    ],
    schedule: [
      {
        icon: '🌄',
        title: 'Arrival',
        description:
          "Arrive just before sunrise and feel the early morning quiet settle around you. A warm welcome drink and friendly briefing before you push off.",
      },
      {
        icon: '🚣',
        title: 'Sunrise Paddle',
        description:
          'Glide into a mirror-like lake as the first light breaks over the horizon. Cool air, effortless strokes, and colours shifting softly across the sky.',
      },
      {
        icon: '🦅',
        title: 'Wildlife Observation',
        description:
          "Kingfishers dart like flashes of blue, herons stand in elegant stillness, migratory birds call overhead. Our guides share species knowledge and local lake stories.",
      },
      {
        icon: '🌳',
        title: 'Mangrove Channels',
        description:
          "Narrow pathways into the mangrove maze — only water sounds and rustling leaves. Spot crabs on twisted roots and marvel at how these forests protect and nurture life.",
      },
      {
        icon: '🎣',
        title: 'Local Culture',
        description:
          "Fishermen using ancestral techniques — nets cast by hand, small boats gliding silently. Daily life unfolding naturally around you, unchanged for generations.",
      },
      {
        icon: '☕',
        title: 'Refreshments',
        description:
          "Back to shore for freshly brewed Ceylon tea and a light snack. Unwind, share your favourite moments, and soak in the final calm of the morning lake.",
      },
    ],
    ctaImage: '/images/sunrise-tour/mangrove-kayaking2.webp',
    mapRoute: 'A',
  },
}

export default function TourDetailsClient({ tourId }: { tourId: string }) {
  const [currentPhoto, setCurrentPhoto] = useState(0)
  const tour = tours[tourId] ?? null

  useEffect(() => {
    if (!tour) return
    const interval = setInterval(() => {
      setCurrentPhoto((p) => (p + 1) % tour.photos.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [tour])

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--surface-page)' }}>
        <div className="text-center">
          <h1 className="font-display mb-4" style={{ color: 'var(--text-heading)' }}>Tour Not Found</h1>
          <Link href="/" style={{ color: 'var(--brand-accent)' }}>Return to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <main className="pb-20 lg:pb-0">

      {/* ── 1. Hero ── */}
      <ImageWithOverlay
        src={tour.heroImage}
        alt={`${tour.title} — AquaTrek Hikkaduwa`}
        className="h-[70vh]"
        priority
      >
        <Link
          href="/#tours"
          className="absolute top-8 left-0 right-0 z-20 container inline-flex items-center gap-2 text-sm font-semibold transition-colors"
          style={{ color: 'rgba(255,255,255,0.75)', width: 'fit-content' }}
        >
          ← All Tours
        </Link>

        <div className="h-full container flex flex-col justify-end pb-16 lg:pb-20">
          <div className="max-w-2xl">
            <p className="eyebrow text-white/70 mb-4">{tour.eyebrow}</p>
            <h1
              className="text-white mb-5 leading-none"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-6xl)',
                letterSpacing: 'var(--tracking-tight)',
              }}
            >
              {tour.title}
            </h1>
            <p
              className="text-white/85 text-lg mb-8"
              style={{ maxWidth: '560px', lineHeight: 'var(--leading-relaxed)' }}
            >
              {tour.heroSubtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/booking?tour=${tourId}`}
                className="inline-flex items-center px-7 py-3 rounded-pill text-sm font-semibold transition-all duration-200 hover:-translate-y-px hover:shadow-lg"
                style={{ background: 'var(--brand-accent)', color: 'white' }}
              >
                Book This Tour
              </Link>
              <a
                href="#schedule"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-pill text-sm font-semibold transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.5)',
                  color: 'white',
                }}
              >
                See Schedule ↓
              </a>
            </div>
          </div>
        </div>
      </ImageWithOverlay>

      {/* ── 2. Overview ── */}
      <section className="section" style={{ background: 'var(--surface-page)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Description + highlights */}
            <div className="reveal">
              <p className="eyebrow mb-4">About This Tour</p>
              <h2 className="font-display mb-6">{tour.title}</h2>
              <p
                className="text-base mb-8"
                style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}
              >
                {tour.description}
              </p>
              <ul className="space-y-3">
                {tour.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: 'var(--brand-accent)' }}
                    />
                    <span className="text-base" style={{ color: 'var(--text-primary)' }}>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2×2 photo grid */}
            <div className="grid grid-cols-2 gap-3 reveal">
              {tour.photos.slice(0, 4).map((src, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-xl"
                  style={{ aspectRatio: '4/3' }}
                >
                  <Image
                    src={src}
                    alt={`${tour.title} — photo ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Tour Stats ── */}
      <section style={{ background: 'var(--brand-primary)' }}>
        <div className="container py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 reveal">
            {tour.stats.map((stat) => (
              <div key={stat.label} className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                >
                  {stat.icon}
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: 'var(--brand-primary-muted)' }}
                  >
                    {stat.label}
                  </p>
                  <p className="text-base font-semibold text-white">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Route Map ── */}
      <section className="section-sm" style={{ background: 'var(--surface-page)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Text */}
            <div className="reveal">
              <p className="eyebrow mb-4">Tour Route {tour.mapRoute}</p>
              <h2 className="font-display mb-6">Your Route on the Lake</h2>
              <p
                className="text-base mb-6"
                style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}
              >
                This tour follows <strong>Route {tour.mapRoute}</strong> on Rathgama Lake. Both routes depart from the same point — the map shows the full path your guide will take you through.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Guided the entire way — no navigation needed',
                  'Both routes cover approx. 4.5 km of lake & channels',
                  'Departure point shared — easy to find',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: 'var(--brand-accent)' }}
                    />
                    <span className="text-sm" style={{ color: 'var(--text-primary)' }}>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Price card */}
              <div
                className="rounded-2xl p-6 flex items-center justify-between gap-6"
                style={{ background: 'var(--surface-raised)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-sm)' }}
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--text-secondary)' }}>
                    Per Person
                  </p>
                  <p
                    className="font-display leading-none"
                    style={{ fontSize: 'var(--text-4xl)', color: 'var(--brand-primary)' }}
                  >
                    Rs 3,000
                  </p>
                  <p className="text-xs mt-1.5" style={{ color: 'var(--text-secondary)' }}>
                    Welcome drink · water · life jacket · guide
                  </p>
                </div>
                <Link
                  href={`/booking?tour=${tourId}`}
                  className="flex-shrink-0 inline-flex items-center px-5 py-3 rounded-pill text-sm font-semibold transition-all hover:-translate-y-px hover:shadow-md"
                  style={{ background: 'var(--brand-accent)', color: 'white' }}
                >
                  Book Now
                </Link>
              </div>
            </div>

            {/* Map */}
            <div
              className="reveal relative overflow-hidden rounded-2xl"
              style={{ boxShadow: 'var(--shadow-lg)' }}
            >
              <Image
                src="/FinalMap_final.webp"
                alt={`Tour Route ${tour.mapRoute} — ${tour.title} route map on Rathgama Lake, Hikkaduwa`}
                width={1720}
                height={1290}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. Schedule ── */}
      <section id="schedule" className="section" style={{ background: 'var(--surface-raised)' }}>
        <div className="container">
          <div className="reveal">
            <SectionHeader
              eyebrow="What Happens on the Tour"
              heading="Your Schedule"
              align="center"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Rotating photo with dots */}
            <div className="reveal">
              <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3' }}>
                {tour.photos.map((src, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 transition-opacity duration-1000"
                    style={{ opacity: i === currentPhoto ? 1 : 0 }}
                  >
                    <Image
                      src={src}
                      alt={`${tour.title} — moment ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {tour.photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPhoto(i)}
                    aria-label={`Photo ${i + 1}`}
                    className="transition-all duration-300 rounded-full"
                    style={{
                      width: i === currentPhoto ? '24px' : '8px',
                      height: '8px',
                      background: i === currentPhoto ? 'var(--brand-primary)' : 'var(--neutral-300)',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Vertical timeline */}
            <div className="relative reveal">
              <div
                className="absolute top-4 bottom-4 w-px"
                style={{ left: '15px', background: 'var(--border-subtle)' }}
              />
              <div className="space-y-8">
                {tour.schedule.map((item, i) => (
                  <div key={i} className="flex gap-5">
                    <div
                      className="relative z-10 w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold"
                      style={{ background: 'var(--brand-primary)', color: 'white' }}
                    >
                      {i + 1}
                    </div>
                    <div className="pt-0.5">
                      <h3
                        className="font-semibold mb-1.5"
                        style={{ fontSize: 'var(--text-lg)', color: 'var(--text-heading)' }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm"
                        style={{
                          color: 'var(--text-secondary)',
                          lineHeight: 'var(--leading-relaxed)',
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Gallery ── */}
      <section className="section-sm" style={{ background: 'var(--neutral-200)' }}>
        <div className="container">
          <div className="reveal">
            <SectionHeader eyebrow="Gallery" heading="The Experience in Photos" align="center" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 reveal-children">
            {tour.photos.map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl reveal"
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src={src}
                  alt={`${tour.title} — gallery ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Book CTA ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '420px' }}>
        <Image
          src={tour.ctaImage}
          alt={`Book the ${tour.title} with AquaTrek`}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(28,58,43,0.72)' }} />
        <div className="relative z-10 container section flex flex-col items-center justify-center text-center">
          <p className="eyebrow text-white/70 mb-4">Ready to Paddle?</p>
          <h2
            className="font-display text-white mb-4"
            style={{ fontSize: 'var(--text-4xl)', color: 'rgba(255,255,255,0.85)' }}
          >
            Book the {tour.title}
          </h2>
          <p
            className="text-lg mb-8 mx-auto"
            style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '440px' }}
          >
            Rs 3,000 per person · All gear included · We confirm within 24 hours
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={`/booking?tour=${tourId}`}
              className="inline-flex items-center px-7 py-3 rounded-pill text-sm font-semibold transition-all hover:-translate-y-px hover:shadow-lg"
              style={{ background: 'var(--brand-accent)', color: 'white' }}
            >
              Book Now
            </Link>
            <a
              href="https://wa.me/94721301524"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-pill text-sm font-semibold transition-all"
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.5)',
                color: 'white',
              }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Mobile sticky booking bar (hidden on lg+) ── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex gap-2 p-3"
        style={{
          background: 'var(--brand-primary)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Link
          href={`/booking?tour=${tourId}`}
          className="flex-1 inline-flex items-center justify-center py-3 rounded-pill text-sm font-semibold"
          style={{ background: 'var(--brand-accent)', color: 'white' }}
        >
          Book Now — Rs 3,000
        </Link>
        <a
          href="https://wa.me/94721301524"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center py-3 rounded-pill text-sm font-semibold"
          style={{
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: 'white',
          }}
        >
          WhatsApp
        </a>
      </div>
    </main>
  )
}
