'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

const slides = [
  {
    src: '/images/garden-celeb/birthday-baby-tent.jpeg',
    alt: 'Baby girl laughing beside a decorated tent at AquaTrek lakeside birthday celebration, Rathgama Lake',
    pos: 'center center',   // landscape, subject centred
  },
  {
    src: '/images/garden-celeb/birthday-family-portrait.jpeg',
    alt: 'Family portrait with baby daughter on a lakeside bench at AquaTrek birthday celebration, Hikkaduwa',
    pos: 'center center',   // landscape
  },
  {
    src: '/images/garden-celeb/birthday-decor-setup.jpeg',
    alt: 'Lakeside birthday decoration setup with tent, hammock, and toys at AquaTrek Rathgama Lake',
    pos: 'center center',   // landscape, wide scene
  },
  {
    src: '/images/garden-celeb/birthday-family-bench.jpeg',
    alt: 'Parents with baby girl sitting on white bench by Rathgama Lake during AquaTrek birthday event',
    pos: 'center 20%',      // portrait, faces in upper third
  },
  {
    src: '/images/garden-celeb/birthday-mom-baby-walk.jpeg',
    alt: 'Mother and daughter in matching pink dresses walking by the lake at AquaTrek celebration event',
    pos: 'center 15%',      // portrait, tall — push down to show both mum & baby
  },
  {
    src: '/images/garden-celeb/birthday-dad-baby-walk.jpeg',
    alt: 'Father walking with baby daughter beside Rathgama Lake at AquaTrek birthday celebration',
    pos: 'center 25%',      // portrait, subjects in upper half
  },
  {
    src: '/images/garden-celeb/birthday-family-lakeside.jpeg',
    alt: 'Family with baby enjoying the Rathgama Lake view at AquaTrek celebration, Hikkaduwa',
    pos: 'center center',   // landscape
  },
  {
    src: '/images/garden-celeb/birthday-family-garden.jpeg',
    alt: 'Family of three posing in the lakeside garden at AquaTrek Water Adventures, Hikkaduwa',
    pos: 'center 20%',      // portrait, subjects in upper half
  },
  {
    src: '/images/garden-celeb/birthday-baby-playing.jpeg',
    alt: 'Baby girl playing in decorated tent area at AquaTrek lakeside birthday celebration',
    pos: 'center 30%',      // portrait, baby in middle-upper area
  },
  {
    src: '/images/garden-celeb/main.webp',
    alt: 'Lakeside celebration event setup at AquaTrek Water Adventures, Rathgama Lake',
    pos: 'center center',
  },
  {
    src: '/images/garden-celeb/MBD03090.webp',
    alt: 'Decorated birthday celebration event at AquaTrek lakeside garden, Hikkaduwa',
    pos: 'center center',
  },
  {
    src: '/images/garden-celeb/PMD02696.webp',
    alt: 'Anniversary celebration setup beside Rathgama Lake at AquaTrek Water Adventures',
    pos: 'center center',
  },
  {
    src: '/images/garden-celeb/PMD02704.webp',
    alt: 'Group celebration event in the lakeside garden at AquaTrek, Hikkaduwa, Sri Lanka',
    pos: 'center center',
  },
]

const INTERVAL = 4500

export default function CelebrationCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback((index: number) => {
    setCurrent((index + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length)
    }, INTERVAL)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [paused])

  return (
    <div
      className="relative overflow-hidden rounded-card"
      style={{ aspectRatio: '4/3' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Images — crossfade */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? 'auto' : 'none' }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
            style={{ objectPosition: slide.pos }}
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
      ))}

      {/* Dark scrim at bottom for dots */}
      <div
        className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45), transparent)' }}
      />

      {/* Prev / Next arrows */}
      <button
        onClick={() => go(current - 1)}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
        style={{ background: 'rgba(0,0,0,0.35)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => go(current + 1)}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
        style={{ background: 'rgba(0,0,0,0.35)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 flex-wrap justify-center px-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to photo ${i + 1}`}
            className="transition-all duration-300 rounded-full flex-shrink-0"
            style={{
              width: i === current ? '20px' : '6px',
              height: '6px',
              background: i === current ? 'white' : 'rgba(255,255,255,0.5)',
            }}
          />
        ))}
      </div>

      {/* Photo counter */}
      <div
        className="absolute top-3 right-3 z-10 text-xs font-semibold px-2.5 py-1 rounded-full"
        style={{ background: 'rgba(0,0,0,0.35)', color: 'rgba(255,255,255,0.85)' }}
      >
        {current + 1} / {slides.length}
      </div>
    </div>
  )
}
