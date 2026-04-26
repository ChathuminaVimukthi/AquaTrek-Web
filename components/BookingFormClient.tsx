'use client'

import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

// ── Tour data ──────────────────────────────────────────────────────────────
const TOURS = [
  {
    id: 'sunrise-wildlife',
    name: 'Sunrise Wildlife Tour',
    duration: '2.5 hrs',
    time: '6:00 AM',
    fixedTime: true,
    price: 3000,
    image: '/images/sunrise-tour/sunrise2.webp',
    tags: ['Most Popular', 'Wildlife'],
    highlight: true,
  },
  {
    id: 'sunset-banyan-tree',
    name: 'Sunset Banyan Tree Tour',
    duration: '2.5 hrs',
    time: '5:00 PM',
    fixedTime: true,
    price: 3000,
    image: '/images/sunset-tour/sunset-1.webp',
    tags: ['Romantic', 'Scenic'],
    highlight: false,
  },
  {
    id: 'standard-1hr',
    name: 'Standard Kayaking',
    duration: '1 hr',
    time: null,
    fixedTime: false,
    price: 1000,
    image: '/images/sunrise-tour/mangrove-kayaking1.webp',
    tags: ['Beginner-friendly', 'Flexible'],
    highlight: false,
  },
  {
    id: 'celebration',
    name: 'Celebration Package',
    duration: '2–4 hrs',
    time: null,
    fixedTime: false,
    price: null,
    image: '/images/garden-celeb/PMD02696.webp',
    tags: ['Private', 'Events'],
    highlight: false,
  },
]

function todayStr() {
  return new Date().toISOString().split('T')[0]
}

function formatDate(iso: string) {
  if (!iso) return '–'
  const d = new Date(iso + 'T00:00:00')
  return d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
}

function buildMessage(state: State): string {
  const tour = TOURS.find((t) => t.id === state.tourId)
  if (!tour || !state.date || !state.name) return ''

  const time = tour.fixedTime ? tour.time! : state.customTime || 'To be confirmed'

  const lines = [
    `Hi AquaTrek! I'd like to book a tour 🙏`,
    ``,
    `🚣 *Tour:* ${tour.name}`,
    `📅 *Date:* ${formatDate(state.date)}`,
    `⏰ *Time:* ${time}`,
    `👥 *Guests:* ${state.guests} ${state.guests === 1 ? 'person' : 'people'}`,
    `👤 *Name:* ${state.name}`,
    state.phone ? `📱 *Phone:* ${state.phone}` : null,
    state.requests ? `` : null,
    state.requests ? `📝 *Notes:* ${state.requests}` : null,
    ``,
    tour.price
      ? `💰 *Est. Total:* Rs ${(tour.price * state.guests).toLocaleString()} (Rs ${tour.price.toLocaleString()} × ${state.guests})`
      : `💰 *Pricing:* Custom quote — please advise`,
    ``,
    `Please confirm availability. Thank you!`,
  ]

  return lines.filter((l) => l !== null).join('\n')
}

// ── Types ──────────────────────────────────────────────────────────────────
interface State {
  tourId: string
  date: string
  customTime: string
  guests: number
  name: string
  phone: string
  requests: string
}

const INPUT = {
  width: '100%',
  padding: '0.7rem 0.9rem',
  background: 'var(--surface-page)',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-md)',
  color: 'var(--text-primary)',
  fontSize: 'var(--text-sm)',
  outline: 'none',
}

// ── Component ──────────────────────────────────────────────────────────────
export default function BookingFormClient() {
  const searchParams = useSearchParams()

  const [state, setState] = useState<State>({
    tourId: '',
    date: '',
    customTime: '',
    guests: 2,
    name: '',
    phone: '',
    requests: '',
  })

  useEffect(() => {
    const t = searchParams.get('tour')
    if (t && TOURS.find((x) => x.id === t)) {
      setState((p) => ({ ...p, tourId: t }))
    }
  }, [searchParams])

  const set = useCallback((key: keyof State, value: string | number) => {
    setState((p) => ({ ...p, [key]: value }))
  }, [])

  const tour = TOURS.find((t) => t.id === state.tourId)
  const message = buildMessage(state)
  const canBook = !!state.tourId && !!state.date && !!state.name
  const waUrl = `https://wa.me/94721301524?text=${encodeURIComponent(message)}`

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

      {/* ── Left: form ──────────────────────────────────────────────── */}
      <div className="lg:col-span-2 space-y-8">

        {/* Step 1 — Choose tour */}
        <div>
          <StepLabel n={1} label="Choose your tour" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            {TOURS.map((t) => {
              const selected = state.tourId === t.id
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => set('tourId', t.id)}
                  className="group relative text-left rounded-card overflow-hidden transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    border: selected ? '2px solid var(--brand-accent)' : '2px solid transparent',
                    outline: selected ? 'none' : '1px solid var(--border-default)',
                    boxShadow: selected ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ height: '100px' }}>
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: selected ? 'rgba(196,98,58,0.18)' : 'rgba(0,0,0,0.25)' }}
                    />
                    {t.highlight && (
                      <span
                        className="absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: 'var(--brand-accent)', color: 'white' }}
                      >
                        Most Popular
                      </span>
                    )}
                    {selected && (
                      <span
                        className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{ background: 'var(--brand-accent)', color: 'white' }}
                      >
                        ✓
                      </span>
                    )}
                  </div>
                  {/* Info */}
                  <div
                    className="p-3"
                    style={{ background: selected ? 'var(--brand-accent-subtle)' : 'var(--surface-raised)' }}
                  >
                    <p
                      className="font-semibold text-sm leading-tight mb-1"
                      style={{ color: selected ? 'var(--brand-accent)' : 'var(--text-heading)' }}
                    >
                      {t.name}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: 'var(--text-tertiary)' }}>
                        {t.duration} {t.time ? `· ${t.time}` : '· Flexible time'}
                      </span>
                      <span
                        className="text-xs font-semibold"
                        style={{ color: selected ? 'var(--brand-accent)' : 'var(--brand-primary)' }}
                      >
                        {t.price ? `Rs ${t.price.toLocaleString()}` : 'Custom'}
                      </span>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Step 2 — Date & Guests */}
        <div>
          <StepLabel n={2} label="Pick a date & group size" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
            {/* Date */}
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                Date *
              </label>
              <input
                type="date"
                value={state.date}
                onChange={(e) => set('date', e.target.value)}
                min={todayStr()}
                style={INPUT}
                required
              />
            </div>

            {/* Custom time (only if tour has no fixed time) */}
            {tour && !tour.fixedTime ? (
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                  Preferred time
                </label>
                <input
                  type="time"
                  value={state.customTime}
                  onChange={(e) => set('customTime', e.target.value)}
                  style={INPUT}
                />
              </div>
            ) : tour?.fixedTime ? (
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                  Tour starts at
                </label>
                <div
                  className="flex items-center gap-2 px-3 py-2.5 rounded-card text-sm font-semibold"
                  style={{
                    background: 'var(--brand-accent-subtle)',
                    border: '1px solid var(--brand-accent)',
                    color: 'var(--brand-accent)',
                  }}
                >
                  ⏰ {tour.time} — fixed
                </div>
              </div>
            ) : (
              <div />
            )}
          </div>

          {/* Guests counter */}
          <div className="mt-4">
            <label className="block text-xs font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>
              Number of guests *
            </label>
            <div className="flex items-center gap-0">
              <button
                type="button"
                onClick={() => set('guests', Math.max(1, state.guests - 1))}
                className="w-10 h-10 flex items-center justify-center rounded-l-card text-lg font-bold transition-colors hover:opacity-80"
                style={{ background: 'var(--neutral-200)', border: '1px solid var(--border-default)', color: 'var(--text-heading)', borderRight: 'none' }}
              >
                −
              </button>
              <div
                className="w-14 h-10 flex items-center justify-center text-sm font-semibold"
                style={{ border: '1px solid var(--border-default)', color: 'var(--text-heading)', background: 'var(--surface-page)' }}
              >
                {state.guests}
              </div>
              <button
                type="button"
                onClick={() => set('guests', Math.min(35, state.guests + 1))}
                className="w-10 h-10 flex items-center justify-center rounded-r-card text-lg font-bold transition-colors hover:opacity-80"
                style={{ background: 'var(--neutral-200)', border: '1px solid var(--border-default)', color: 'var(--text-heading)', borderLeft: 'none' }}
              >
                +
              </button>
              {tour?.price && (
                <span className="ml-4 text-sm font-semibold" style={{ color: 'var(--brand-accent)' }}>
                  Rs {(tour.price * state.guests).toLocaleString()} total
                </span>
              )}
            </div>
            <p className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>
              Groups over 8? We can arrange multiple kayaks — just mention it in your notes.
            </p>
          </div>
        </div>

        {/* Step 3 — Your details */}
        <div>
          <StepLabel n={3} label="Your details" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                Name *
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={state.name}
                onChange={(e) => set('name', e.target.value)}
                style={INPUT}
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
                WhatsApp / phone
              </label>
              <input
                type="tel"
                placeholder="+94 77 000 0000"
                value={state.phone}
                onChange={(e) => set('phone', e.target.value)}
                style={INPUT}
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
              Special requests or notes (optional)
            </label>
            <textarea
              placeholder="Dietary requirements, accessibility needs, special occasion, photography requests…"
              value={state.requests}
              onChange={(e) => set('requests', e.target.value)}
              rows={3}
              style={{ ...INPUT, resize: 'none' }}
            />
          </div>
        </div>

        {/* CTA */}
        <div>
          {!canBook && (
            <p className="text-xs mb-3" style={{ color: 'var(--text-tertiary)' }}>
              Fill in tour, date, and name to continue.
            </p>
          )}
          <a
            href={canBook ? waUrl : undefined}
            target="_blank"
            rel="noopener noreferrer"
            onClick={!canBook ? (e) => e.preventDefault() : undefined}
            className="flex items-center justify-center gap-3 w-full py-4 rounded-pill text-base font-semibold transition-all hover:-translate-y-px hover:shadow-lg"
            style={{
              background: canBook ? '#25D366' : 'var(--neutral-300)',
              color: canBook ? 'white' : 'var(--text-tertiary)',
              cursor: canBook ? 'pointer' : 'not-allowed',
              textDecoration: 'none',
            }}
          >
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            {canBook ? 'Open WhatsApp to Confirm Booking' : 'Complete the form above to continue'}
          </a>
          <p className="text-xs text-center mt-3" style={{ color: 'var(--text-tertiary)' }}>
            This opens WhatsApp with your booking details pre-filled — just hit send.
          </p>
        </div>
      </div>

      {/* ── Right: live preview ──────────────────────────────────────── */}
      <div className="hidden lg:block">
        <div className="sticky top-24">
          <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-tertiary)' }}>
            Your message preview
          </p>

          {/* WhatsApp bubble */}
          <div
            className="rounded-card overflow-hidden"
            style={{ background: '#e5ddd5', border: 'var(--card-border)' }}
          >
            {/* WA header bar */}
            <div className="flex items-center gap-3 px-4 py-3" style={{ background: '#128C7E' }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'white', color: '#128C7E' }}>
                A
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-none">AquaTrek</p>
                <p className="text-white/70 text-xs">+94 72 130 1524</p>
              </div>
            </div>

            {/* Message area */}
            <div className="p-4 min-h-[280px] flex flex-col justify-end">
              {message ? (
                <div
                  className="ml-auto max-w-[85%] rounded-tl-xl rounded-bl-xl rounded-br-xl px-3 py-2 text-xs leading-relaxed whitespace-pre-wrap"
                  style={{ background: '#dcf8c6', color: '#111' }}
                >
                  {message}
                  <span className="block text-right text-[10px] mt-1" style={{ color: '#6b7280' }}>
                    {new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })} ✓✓
                  </span>
                </div>
              ) : (
                <p className="text-center text-xs mx-auto" style={{ color: '#888', maxWidth: '24ch' }}>
                  Fill in the form and your message will appear here
                </p>
              )}
            </div>
          </div>

          {/* Reassurance note */}
          <div
            className="mt-4 p-4 rounded-card text-xs space-y-2"
            style={{ background: 'var(--surface-raised)', border: 'var(--card-border)' }}
          >
            <p className="font-semibold" style={{ color: 'var(--text-heading)' }}>What happens next</p>
            {[
              'WhatsApp opens with your details pre-filled',
              'Hit send — it takes 2 seconds',
              'We confirm availability within 2 hours',
              'No payment until you arrive',
            ].map((s) => (
              <div key={s} className="flex gap-2" style={{ color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--brand-accent)' }}>✓</span>
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

function StepLabel({ n, label }: { n: number; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
        style={{ background: 'var(--brand-accent)', color: 'white' }}
      >
        {n}
      </span>
      <p className="font-semibold text-sm" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-display)' }}>
        {label}
      </p>
    </div>
  )
}
