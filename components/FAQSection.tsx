'use client'

import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: 'How can I book?',
    answer: 'You can book by contacting us through WhatsApp, Instagram, Facebook, or by calling directly. Same-day bookings are usually available, but we recommend booking in advance — especially for sunrise and sunset tours.',
  },
  {
    id: 2,
    question: 'What is included in the package?',
    answer: null,
    list: [
      '✔ Quality life jackets',
      '✔ Waterproof phone covers',
      '✔ Welcome drink',
      '✔ Water bottle',
      '✔ Guided or non-guided experience depending on the package',
      '✔ Tea (and snacks for the full adventure)',
    ],
  },
  {
    id: 3,
    question: 'Do I need any kayaking experience?',
    answer: 'No experience is required — all our tours are beginner-friendly, and our guides will assist you with everything.',
  },
  {
    id: 4,
    question: 'Is it safe?',
    answer: 'Yes — safety is our top priority. We provide certified safety gear, and a trained guide/lifeguard accompanies all guided tours.',
  },
  {
    id: 5,
    question: 'Can children participate?',
    answer: 'Absolutely! Kids are welcome, and we provide smaller life jackets for them. Children under 12 must be accompanied by an adult.',
  },
  {
    id: 6,
    question: 'Can I bring my phone or camera?',
    answer: 'Yes — and we provide waterproof mobile covers so you can take photos safely while on the water.',
  },
  {
    id: 7,
    question: 'What happens if it rains?',
    answer: 'Light rain is not a problem — many guests enjoy the atmosphere. In case of unsafe weather or heavy rain, we will reschedule or fully refund the booking.',
  },
  {
    id: 8,
    question: 'Is there parking available?',
    answer: 'Yes, we have free parking and on-site bathroom & changing facilities.',
  },
  {
    id: 9,
    question: 'Can you accommodate big groups?',
    answer: 'Yes — we can host up to 35 people in a single session, perfect for families, events, and corporate outings.',
  },
]

export default function FAQSection() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  return (
    <div className="mt-16">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-navy text-center" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-4xl mx-auto border border-gray-200">
        {faqs.map((faq, idx) => (
          <div key={faq.id} className={idx < faqs.length - 1 ? 'border-b border-gray-200' : ''}>
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full px-6 py-4 flex items-start bg-sand-beige hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="text-xl font-bold text-primary mr-3 flex-shrink-0" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
                {expandedFAQ === faq.id ? '−' : '+'}
              </span>
              <h3 className="text-base font-bold text-brand-navy text-left" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
                {faq.question}
              </h3>
            </button>
            <div
              className="overflow-hidden transition-all duration-300 ease-in-out"
              style={{ maxHeight: expandedFAQ === faq.id ? '500px' : '0' }}
            >
              <div className="px-6 py-4 bg-white">
                {faq.answer && (
                  <p className="text-gray-700 leading-relaxed text-left" style={{ fontFamily: '"Asap", Sans-serif' }}>
                    {faq.answer}
                  </p>
                )}
                {faq.list && (
                  <>
                    <p className="text-gray-700 mb-3 text-left" style={{ fontFamily: '"Asap", Sans-serif' }}>
                      Every package includes:
                    </p>
                    <ul className="space-y-2 text-gray-700 text-left" style={{ fontFamily: '"Asap", Sans-serif' }}>
                      {faq.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
