import type { Metadata } from 'next'
import Link from 'next/link'
import { ImageWithOverlay } from '@/components/ui/ImageWithOverlay'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact AquaTrek — Kayaking Tours Hikkaduwa, Sri Lanka',
  description:
    'Get in touch with AquaTrek Hikkaduwa. Book a kayak tour on Rathgama Lake via WhatsApp or email. Located at Dodandugoda Road, Dodanduwa, Hikkaduwa, Sri Lanka.',
  alternates: { canonical: 'https://aquatrekhikkaduwa.com/contact' },
  openGraph: {
    title: 'Contact AquaTrek | Hikkaduwa, Sri Lanka',
    description: 'Book a kayak tour or ask us anything — we reply within 2 hours on WhatsApp.',
    url: 'https://aquatrekhikkaduwa.com/contact',
    images: [{ url: '/og-images/homepage.jpg', width: 1200, height: 630, alt: 'AquaTrek kayaking on Rathgama Lake, Hikkaduwa' }],
  },
}

const contactItems = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Find Us',
    value: 'Dodandugoda Rd, Dodanduwa, Hikkaduwa',
    href: 'https://maps.google.com/?q=AquaTrek+Water+Adventures+Hikkaduwa',
    external: true,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    ),
    label: 'WhatsApp',
    value: '+94 72 130 1524',
    href: 'https://wa.me/message/NJJEXSOX3ABGM1',
    external: true,
    highlight: true,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'Call',
    value: '+94 77 336 6171',
    href: 'tel:+94773366171',
    external: false,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Email',
    value: 'aquatrekhikka@gmail.com',
    href: 'mailto:aquatrekhikka@gmail.com',
    external: false,
  },
]

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <ImageWithOverlay
        src="/images/sunrise-tour/mangrove-kayaking2.webp"
        alt="AquaTrek kayaking on Rathgama Lake, Hikkaduwa — contact us to book"
        className="h-[70vh]"
        priority
      >
        <div className="h-full container flex flex-col justify-end pb-16 lg:pb-20">
          <p className="eyebrow text-white/70 mb-4">We Reply Fast</p>
          <h1
            className="text-white max-w-xl"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-5xl)',
              letterSpacing: 'var(--tracking-tight)',
              lineHeight: 'var(--leading-tight)',
            }}
          >
            Get in Touch
          </h1>
          <p className="mt-3 text-base lg:text-lg max-w-lg" style={{ color: 'rgba(255,255,255,0.80)', lineHeight: 'var(--leading-relaxed)' }}>
            WhatsApp is fastest — we typically reply within 2 hours. Or fill in the form below.
          </p>
        </div>
      </ImageWithOverlay>

      {/* Contact section */}
      <section className="section" style={{ background: 'var(--surface-page)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left — contact info */}
            <div>
              <p className="eyebrow mb-3">Contact Details</p>
              <h2
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-3xl)',
                  color: 'var(--text-heading)',
                  letterSpacing: 'var(--tracking-tight)',
                }}
              >
                Four ways to reach us
              </h2>

              <div className="space-y-1">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-4 p-4 rounded-card transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] group"
                    style={{
                      background: item.highlight ? 'var(--brand-accent-subtle)' : 'var(--surface-raised)',
                      border: item.highlight ? '1px solid var(--brand-accent)' : 'var(--card-border)',
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                      style={{
                        background: item.highlight ? 'var(--brand-accent)' : 'var(--neutral-200)',
                        color: item.highlight ? 'white' : 'var(--text-secondary)',
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold mb-0.5" style={{ color: 'var(--text-tertiary)' }}>
                        {item.label}
                      </p>
                      <p
                        className="text-sm font-semibold group-hover:text-[var(--brand-accent)] transition-colors"
                        style={{ color: item.highlight ? 'var(--brand-accent)' : 'var(--text-heading)' }}
                      >
                        {item.value}
                      </p>
                    </div>
                    {item.highlight && (
                      <span className="ml-auto text-xs font-semibold self-center px-2 py-0.5 rounded-full" style={{ background: 'var(--brand-accent)', color: 'white' }}>
                        Fastest
                      </span>
                    )}
                  </a>
                ))}
              </div>

              <div
                className="mt-8 p-5 rounded-card"
                style={{ background: 'var(--neutral-200)', border: 'var(--card-border)' }}
              >
                <p className="text-sm font-semibold mb-1" style={{ color: 'var(--text-heading)' }}>
                  Response times
                </p>
                <ul className="space-y-1">
                  {[
                    { channel: 'WhatsApp', time: 'Within 2 hours' },
                    { channel: 'Phone call', time: 'Immediate (8 AM – 8 PM)' },
                    { channel: 'Email / form', time: 'Within 24 hours' },
                  ].map((r) => (
                    <li key={r.channel} className="flex justify-between text-xs" style={{ color: 'var(--text-secondary)' }}>
                      <span>{r.channel}</span>
                      <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{r.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right — form */}
            <div>
              <p className="eyebrow mb-3">Send a Message</p>
              <h2
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-3xl)',
                  color: 'var(--text-heading)',
                  letterSpacing: 'var(--tracking-tight)',
                }}
              >
                We&apos;d love to hear from you
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ background: 'var(--neutral-200)' }}>
        <div className="container py-12">
          <p className="eyebrow mb-3">Location</p>
          <h2
            className="mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-2xl)',
              color: 'var(--text-heading)',
            }}
          >
            Find us on the lake
          </h2>
          <div className="overflow-hidden rounded-card" style={{ height: '400px', border: 'var(--card-border)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.116972756945!2d80.12791827567882!3d6.114951627774728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae177c787157e87%3A0x391386f6ac2c7ec9!2sAqua%20Trek%20Water%20Adventures%20-%20Hikkaduwa!5e0!3m2!1sen!2slk!4v1764639425863!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AquaTrek Location — Dodandugoda Rd, Hikkaduwa"
            />
          </div>
          <p className="mt-3 text-sm" style={{ color: 'var(--text-tertiary)' }}>
            Dodandugoda Road, Dodanduwa, Hikkaduwa · 6 km from Hikkaduwa beach, 15 min by tuk-tuk
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--brand-primary)' }}>
        <div className="container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="eyebrow mb-2" style={{ color: 'var(--brand-primary-muted)' }}>Ready to Paddle?</p>
            <p
              className="text-white"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', fontWeight: 'var(--font-bold)' }}
            >
              Same-day bookings are usually available.
            </p>
          </div>
          <Link
            href="/booking"
            className="flex-shrink-0 inline-flex items-center px-7 py-3 rounded-pill text-sm font-semibold transition-all hover:-translate-y-px hover:shadow-lg"
            style={{ background: 'var(--brand-accent)', color: 'white' }}
          >
            Book a Tour →
          </Link>
        </div>
      </section>
    </main>
  )
}
