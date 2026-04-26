import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ImageWithOverlay } from '@/components/ui/ImageWithOverlay'

export const metadata: Metadata = {
  title: 'About AquaTrek — Family-Run Kayaking on Rathgama Lake',
  description:
    'AquaTrek is a family-run kayak and canoe tour business on Rathgama Lake, Dodanduwa, Hikkaduwa. Founded by a local family passionate about sharing the beauty of the lagoon.',
  alternates: { canonical: 'https://aquatrekhikkaduwa.com/about' },
  openGraph: {
    title: 'About AquaTrek — Family-Run Kayaking on Rathgama Lake',
    description: 'AquaTrek is a family-run kayak and canoe tour business on Rathgama Lake, Hikkaduwa.',
    url: 'https://aquatrekhikkaduwa.com/about',
    images: [{ url: '/og-images/homepage.jpg', width: 1200, height: 630, alt: 'AquaTrek Water Adventures family team on Rathgama Lake, Hikkaduwa' }],
  },
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <ImageWithOverlay
        src="/images/others/aboutus.webp"
        alt="Aerial drone view of AquaTrek Water Adventures property with kayaks on Rathgama Lake"
        className="h-[70vh]"
        priority
      >
        <div className="h-full container flex flex-col justify-end pb-16 lg:pb-20">
          <p className="eyebrow text-white/70 mb-4">Our Story</p>
          <h1
            className="text-white"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-5xl)',
              letterSpacing: 'var(--tracking-tight)',
              lineHeight: 'var(--leading-tight)',
            }}
          >
            About AquaTrek
          </h1>
          <p className="mt-3 text-base lg:text-lg max-w-lg" style={{ color: 'rgba(255,255,255,0.80)', lineHeight: 'var(--leading-relaxed)' }}>
            A family&apos;s love for the lake, shared with the world.
          </p>
        </div>
      </ImageWithOverlay>

      {/* Locally Grown, Family-Run */}
      <section style={{ background: 'var(--surface-page)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[50vh] md:h-auto order-2 md:order-1">
            <Image
              src="/images/aboutus/team1.webp"
              alt="AquaTrek family team standing by the kayaks at Rathgama Lake, Hikkaduwa"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 md:order-2 px-8 md:px-16 py-16 flex flex-col justify-center">
            <p className="eyebrow mb-3">Who We Are</p>
            <h2 className="font-display mb-6">Locally Grown, Family-Run</h2>
            <div className="space-y-4 text-base" style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
              <p>
                Aqua Trek Water Adventures is more than a tour — it&apos;s a family story. Born from our deep
                connection to Rathgama Lake and the surrounding nature, we&apos;ve turned our passion into a
                personal, welcoming experience for every guest who visits.
              </p>
              <p>
                We believe in simple things done with sincerity — warm hospitality, genuine smiles, and giving
                you a real taste of local life. Our routes are shaped by years of growing up around these waters,
                knowing their hidden corners, wildlife rhythms, and the best times to paddle through calm
                reflections and golden sunsets.
              </p>
            </div>
            <blockquote
              className="mt-6 pl-5 italic"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xl)',
                color: 'var(--brand-primary)',
                borderLeft: '3px solid var(--brand-accent)',
              }}
            >
              &ldquo;When you visit us, you&apos;re not just joining a tour — you&apos;re being welcomed by a family
              that truly loves what we do.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section style={{ background: 'var(--brand-primary)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="px-8 md:px-16 py-16 flex flex-col justify-center">
            <p className="eyebrow mb-3" style={{ color: 'var(--brand-primary-muted)' }}>How We Work</p>
            <h2 className="font-display text-white mb-6">Our Approach</h2>
            <div className="space-y-4 text-base" style={{ color: 'var(--text-inverse-muted)', lineHeight: 'var(--leading-relaxed)' }}>
              <p>
                We believe that the best adventures are personal, unhurried, and authentic. That&apos;s why at
                AquaTrek, we don&apos;t rush the journey — we embrace it. Our tours are designed to help you
                slow down, breathe, and truly connect with the lake&apos;s natural rhythm.
              </p>
              <p>
                We focus on relaxed paddling, mindful exploration, and genuine local insight rather than
                fast-paced tourism. Whether you&apos;re here to learn, unwind, or simply enjoy the view, our
                approach is all about creating a meaningful, memorable experience that feels intimate and real.
              </p>
            </div>
          </div>
          <div className="relative h-[50vh] md:h-auto">
            <Image
              src="/images/aboutus/approach.webp"
              alt="Kayaking through calm mangrove channels with an AquaTrek guide on Rathgama Lake"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Soul of Rathgama */}
      <section className="section" style={{ background: 'var(--surface-page)' }}>
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">The Place</p>
            <h2 className="font-display mb-8">The Soul of Rathgama</h2>
            <div className="space-y-5 text-base" style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
              <p>
                Rathgama Lake is a tranquil brackish lagoon nestled just inland from the southern coast of Sri
                Lanka, near the village of Dodanduwa. Surrounded by mangrove forests and dotted with peaceful
                islands, the lake is part of a delicate ecosystem that supports over twenty species of mangrove
                plants and a rich diversity of birdlife and aquatic species.
              </p>
              <p>
                What makes Rathgama Lake truly special is its blend of nature and culture. Several of its islands
                are home to historic Buddhist hermitages — most notably the Island Hermitage founded in 1911 —
                making the lake not only a sanctuary for wildlife, but also a quiet refuge for spiritual retreat.
              </p>
              <p>
                The lagoon&apos;s connection to the Indian Ocean makes it a dynamic environment where freshwater and
                saltwater meet, creating fertile habitats that have supported local fishing communities for
                generations. Today, Rathgama Lake remains a peaceful escape — calm, reflective, and deeply rooted
                in both ecological and cultural heritage.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-10">
              <Link
                href="/tour/sunrise-wildlife"
                className="inline-flex items-center px-7 py-3 rounded-pill text-sm font-semibold transition-all hover:-translate-y-px hover:shadow-sm"
                style={{ background: 'var(--brand-accent)', color: 'white' }}
              >
                Explore Our Tours
              </Link>
              <Link
                href="/vision"
                className="inline-flex items-center px-7 py-3 rounded-pill text-sm font-semibold border transition-all hover:-translate-y-px"
                style={{ border: '1px solid var(--brand-primary)', color: 'var(--brand-primary)' }}
              >
                Our Vision
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
