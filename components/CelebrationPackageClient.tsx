import Image from 'next/image'
import Link from 'next/link'
import { ImageWithOverlay } from '@/components/ui/ImageWithOverlay'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Badge } from '@/components/ui/Badge'
import CelebrationCarousel from '@/components/CelebrationCarousel'

const eventTypes = [
  {
    image: '/images/garden-celeb/birthday-baby-tent.jpeg',
    title: 'Birthday Celebrations',
    description: 'Cake on the water, lakeside décor, and a moment you and your guests will never forget.',
  },
  {
    image: '/images/garden-celeb/MBD03090.webp',
    title: 'Anniversary Specials',
    description: 'A quiet, decorated space by the lake. Just the two of you, the water, and the evening sky.',
  },
  {
    image: '/images/others/before-you-paddle.webp',
    title: 'Group & Corporate Events',
    description: 'Team outings, reunions, and milestone gatherings for groups of up to 20 people.',
  },
]

const stats = [
  { icon: '👥', label: 'Group Size', value: 'Up to 20 People' },
  { icon: '⏱️', label: 'Duration', value: 'Fully Customisable' },
  { icon: '🍽️', label: 'Catering', value: 'Available on Request' },
  { icon: '🎀', label: 'Setup', value: 'Decorated Lakeside Space' },
  { icon: '📅', label: 'Booking', value: 'Advance Notice Required' },
  { icon: '📍', label: 'Location', value: 'Rathgama Lake, Hikkaduwa' },
]

const steps = [
  {
    n: '01',
    title: 'Tell Us Your Vision',
    body: 'Share the occasion, your group size, preferred date, and any special requests via WhatsApp or the contact form.',
  },
  {
    n: '02',
    title: 'We Plan Together',
    body: "We'll arrange the décor, catering, kayak slots, and timeline around what makes your day special.",
  },
  {
    n: '03',
    title: 'Arrive & Celebrate',
    body: 'Turn up, take in the view, and let us handle everything else. Your only job is to enjoy the moment.',
  },
]

export default function CelebrationPackageClient() {
  return (
    <main className="pb-20 lg:pb-0">

      {/* ── Hero ── */}
      <ImageWithOverlay
        src="/images/garden-celeb/main.webp"
        alt="Lakeside celebration event at AquaTrek, Rathgama Lake, Hikkaduwa"
        className="h-[70vh]"
        priority
      >
        <Link
          href="/"
          className="absolute top-8 z-20"
          style={{
            left: 'var(--container-padding)',
            color: 'rgba(255,255,255,0.75)',
            fontSize: 'var(--text-sm)',
            fontWeight: 600,
          }}
        >
          ← Back to Home
        </Link>

        <div className="h-full container flex flex-col justify-end pb-16 lg:pb-20">
          <div className="max-w-2xl">
            <p className="eyebrow text-white/70 mb-4">Private Events · Rathgama Lake</p>
            <h1
              className="text-white mb-5 leading-none"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-6xl)',
                letterSpacing: 'var(--tracking-tight)',
              }}
            >
              Celebrate by<br />the Water
            </h1>
            <p
              className="text-white/85 text-lg mb-8"
              style={{ maxWidth: '520px', lineHeight: 'var(--leading-relaxed)' }}
            >
              Birthdays, anniversaries, proposals, group outings — we create a personalised lakeside experience for your special occasion.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/94721301524"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3 rounded-pill text-sm font-semibold transition-all duration-200 hover:-translate-y-px hover:shadow-lg"
                style={{ background: 'var(--brand-accent)', color: 'white' }}
              >
                Book Your Event
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-pill text-sm font-semibold transition-all duration-200"
                style={{
                  background: 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.5)',
                  color: 'white',
                }}
              >
                How It Works ↓
              </a>
            </div>
          </div>
        </div>
      </ImageWithOverlay>

      {/* ── Overview ── */}
      <section className="section" style={{ background: 'var(--surface-page)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="eyebrow mb-4">Make It Yours</p>
              <h2 className="font-display mb-6">Special Celebration Packages</h2>
              <p
                className="text-base mb-6"
                style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}
              >
                Make your special occasions truly memorable with our customised celebration packages. Whether it&apos;s a birthday, anniversary, or any milestone worth celebrating, we create the perfect waterside experience for you and your loved ones.
              </p>
              <p
                className="text-base"
                style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}
              >
                Every celebration is different — we work closely with you on the details so the setting, décor, food, and flow all feel personal and unhurried.
              </p>
            </div>

            {/* Photo carousel */}
            <div className="reveal">
              <CelebrationCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* ── Event Types ── */}
      <section className="section" style={{ background: 'var(--surface-raised)' }}>
        <div className="container">
          <div className="reveal">
            <SectionHeader
              eyebrow="What We Celebrate"
              heading="Every Occasion, Personalised"
              subtext="From intimate dinners to group outings, the lake sets the scene."
              align="center"
            />
          </div>
          <div
            className="grid gap-[var(--grid-gap)] reveal-children"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
          >
            {eventTypes.map((e) => (
              <div
                key={e.title}
                className="rounded-card overflow-hidden reveal"
                style={{ background: 'var(--surface-raised)', border: 'var(--card-border)', boxShadow: 'var(--shadow-card)' }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <Image
                    src={e.image}
                    alt={e.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="font-display mb-2"
                    style={{ fontSize: 'var(--text-2xl)', color: 'var(--text-heading)' }}
                  >
                    {e.title}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                    {e.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Details Strip ── */}
      <section style={{ background: 'var(--brand-primary)' }}>
        <div className="container py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 reveal">
            {stats.map((s) => (
              <div key={s.label} className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                >
                  {s.icon}
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: 'var(--brand-primary-muted)' }}
                  >
                    {s.label}
                  </p>
                  <p className="text-base font-semibold text-white">{s.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="section" style={{ background: 'var(--neutral-200)' }}>
        <div className="container">
          <div className="reveal">
            <SectionHeader
              eyebrow="The Process"
              heading="How to Book Your Celebration"
              align="center"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-children">
            {steps.map((step) => (
              <div
                key={step.n}
                className="rounded-card p-8 reveal"
                style={{ background: 'var(--surface-raised)', border: 'var(--card-border)' }}
              >
                <p
                  className="font-display mb-4"
                  style={{ fontSize: 'var(--text-4xl)', color: 'var(--brand-accent)', lineHeight: 1 }}
                >
                  {step.n}
                </p>
                <h3
                  className="font-semibold mb-3"
                  style={{ fontSize: 'var(--text-xl)', color: 'var(--text-heading)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden" style={{ minHeight: '420px' }}>
        <Image
          src="/images/garden-celeb/PMD02696.webp"
          alt="Book a celebration event at Rathgama Lake with AquaTrek"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(28,58,43,0.72)' }} />
        <div className="relative z-10 container section flex flex-col items-center justify-center text-center">
          <p className="eyebrow text-white/70 mb-4">Ready to Celebrate?</p>
          <h2
            className="font-display text-white mb-4"
            style={{ fontSize: 'var(--text-4xl)', color: 'rgba(255,255,255,0.85)' }}
          >
            Let&apos;s Plan Your Event
          </h2>
          <p
            className="text-lg mb-8 mx-auto"
            style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '440px' }}
          >
            Drop us a message and we&apos;ll get back to you within 24 hours to start planning together.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://wa.me/94721301524"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3 rounded-pill text-sm font-semibold transition-all hover:-translate-y-px hover:shadow-lg"
              style={{ background: 'var(--brand-accent)', color: 'white' }}
            >
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-pill text-sm font-semibold transition-all"
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.5)',
                color: 'white',
              }}
            >
              Contact Form →
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile sticky bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex gap-2 p-3"
        style={{ background: 'var(--brand-primary)', borderTop: '1px solid rgba(255,255,255,0.1)' }}
      >
        <a
          href="https://wa.me/94721301524"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center py-3 rounded-pill text-sm font-semibold"
          style={{ background: 'var(--brand-accent)', color: 'white' }}
        >
          WhatsApp to Book
        </a>
        <a
          href="tel:+94773366171"
          className="flex-1 inline-flex items-center justify-center py-3 rounded-pill text-sm font-semibold"
          style={{
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: 'white',
          }}
        >
          Call Us
        </a>
      </div>
    </main>
  )
}
