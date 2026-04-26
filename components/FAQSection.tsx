'use client'

import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: 'How can I book?',
    answer: 'Contact us via WhatsApp, Instagram, Facebook, or call directly. Same-day bookings are usually available, but we recommend booking ahead — especially for sunrise and sunset tours.',
  },
  {
    id: 2,
    question: 'What is included in the package?',
    answer: null,
    list: [
      'Quality life jackets for all sizes',
      'Waterproof phone cases',
      'Welcome drink on arrival',
      'Fresh water bottle',
      'Guided experience with a local expert',
      'Tea after the tour (snacks included on Full Lake Adventure)',
    ],
  },
  {
    id: 3,
    question: 'Do I need kayaking experience?',
    answer: 'No experience is needed — all tours are beginner-friendly. Our guides will have you paddling confidently within a few minutes.',
  },
  {
    id: 4,
    question: 'Is it safe?',
    answer: 'Absolutely. Safety is our priority. Every tour includes certified life jackets, a pre-tour safety briefing, and a trained guide who accompanies you throughout.',
  },
  {
    id: 5,
    question: 'Can children join?',
    answer: 'Yes — children are welcome and we have smaller life jackets for them. Children under 12 must be accompanied by an adult in the same kayak or alongside.',
  },
  {
    id: 6,
    question: 'Can I bring my phone or camera?',
    answer: 'Yes — we provide waterproof phone cases so you can photograph and film safely from the water. A small dry bag for other valuables is also available.',
  },
  {
    id: 7,
    question: 'What happens if it rains?',
    answer: 'Light rain is fine — many guests prefer it. If conditions become unsafe, we will reschedule or issue a full refund. We never put guests on the water in dangerous weather.',
  },
  {
    id: 8,
    question: 'Is there parking?',
    answer: 'Yes — free on-site parking plus changing rooms and clean bathroom facilities at the launch point.',
  },
  {
    id: 9,
    question: 'Can you handle large groups?',
    answer: 'Yes — we can accommodate up to 35 people in a single session. Great for families, school trips, team outings, and corporate groups.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer ?? (faq.list ? faq.list.join(', ') : ''),
    },
  })),
}

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="text-center mb-10">
        <p className="eyebrow mb-3">Got Questions?</p>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-4xl)',
            color: 'var(--text-heading)',
            letterSpacing: 'var(--tracking-tight)',
          }}
        >
          Frequently Asked Questions
        </h2>
      </div>

      <div className="mx-auto" style={{ maxWidth: '720px' }}>
        {faqs.map((faq, idx) => (
          <div
            key={faq.id}
            className={idx < faqs.length - 1 ? 'border-b' : ''}
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <button
              onClick={() => setOpen(open === faq.id ? null : faq.id)}
              className="w-full px-1 py-5 flex items-start justify-between gap-4 text-left transition-colors"
              aria-expanded={open === faq.id}
            >
              <span
                className="text-sm font-semibold leading-snug"
                style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-body)' }}
              >
                {faq.question}
              </span>
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-transform"
                style={{
                  background: open === faq.id ? 'var(--brand-accent)' : 'var(--brand-accent-subtle)',
                  color: open === faq.id ? 'white' : 'var(--brand-accent)',
                  transform: open === faq.id ? 'rotate(45deg)' : 'rotate(0deg)',
                }}
              >
                +
              </span>
            </button>

            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: open === faq.id ? '400px' : '0' }}
            >
              <div className="pb-5 px-1">
                {faq.answer && (
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {faq.answer}
                  </p>
                )}
                {faq.list && (
                  <ul className="space-y-2 mt-1">
                    {faq.list.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <span className="flex-shrink-0 mt-0.5" style={{ color: 'var(--brand-accent)' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
