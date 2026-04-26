'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    image: '/images/main-carousel/carousel1.webp',
    alt: 'Kayaker paddling through calm mangrove channels on Rathgama Lake, Hikkaduwa at dawn',
    heading: 'Explore Hidden\nWaters',
    subtext: "Guided kayak & canoe tours through Sri Lanka's most serene lagoon. Wildlife, mangroves, and golden sunrises await.",
  },
  {
    image: '/images/sunrise-tour/bird6.webp',
    alt: 'Kingfisher bird perched near the waterway during a sunrise wildlife kayak tour on Rathgama Lake',
    heading: 'Wildlife at\nEvery Turn',
    subtext: 'Kingfishers, purple herons, monitor lizards, and more — spot them all on our sunrise wildlife tour at dawn.',
  },
  {
    image: '/images/sunset-tour/sunset-1.webp',
    alt: 'Golden sunset over Rathgama Lake as seen from a kayak near Dodanduwa harbour',
    heading: 'Chase the\nGolden Hour',
    subtext: 'Paddle to Dodanduwa harbour and watch the sun melt into the ocean on our signature sunset kayak tour.',
  },
  {
    image: '/images/others/island-hermitage1.webp',
    alt: 'Aerial view of Rathgama Lake surrounded by coconut palms and lush greenery in Dodanduwa',
    heading: 'A Best-Kept\nSecret',
    subtext: 'Rathgama Lagoon — calm, wildlife-rich waters tucked between coconut palms, just minutes from Hikkaduwa.',
  },
]

export default function HeroSection({ className = '' }: { className?: string }) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length)
    }, 5000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [paused])

  return (
    <section
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background images — crossfade */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(160deg, rgba(0,0,0,0.10) 0%, rgba(28,58,43,0.72) 100%)' }}
      />

      {/* Single bottom-anchored content column — text, buttons, dots in one flow */}
      <div className="absolute inset-x-0 bottom-0 z-20 container pb-6 sm:pb-8 lg:pb-10">

        {/* Slide text — slide 0 sets the height, others overlay absolutely */}
        <div className="relative mb-5 sm:mb-6">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`transition-opacity duration-1000 pointer-events-none ${
                i === 0 ? 'relative' : 'absolute inset-x-0 bottom-0'
              }`}
              style={{ opacity: i === current ? 1 : 0 }}
            >
              <p className="eyebrow text-white/70 mb-3">
                Rathgama Lake · Hikkaduwa · Sri Lanka
              </p>
              <h1
                className="text-white mb-3 leading-none"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-5xl)',
                  letterSpacing: 'var(--tracking-tight)',
                  whiteSpace: 'pre-line',
                }}
              >
                {slide.heading}
              </h1>
              <p
                className="hidden sm:block text-white/80 text-base lg:text-lg"
                style={{ maxWidth: '480px', lineHeight: 'var(--leading-relaxed)' }}
              >
                {slide.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mb-5">
          <Link
            href="/booking"
            className="inline-flex items-center px-6 py-2.5 rounded-pill text-sm font-semibold transition-all duration-200 hover:-translate-y-px hover:shadow-lg"
            style={{ background: 'var(--brand-accent)', color: 'white' }}
          >
            Book a Tour
          </Link>
          <a
            href="https://www.youtube.com/@aquatrekhikkaduwa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-pill text-sm font-semibold transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.45)',
              color: 'white',
            }}
          >
            ▶ Watch
          </a>
        </div>

        {/* Dots + scroll indicator in one row */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? '24px' : '8px',
                height: '8px',
                background: i === current ? 'white' : 'rgba(255,255,255,0.45)',
              }}
            />
          ))}
          <div className="ml-auto text-white/60 animate-bounce">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
