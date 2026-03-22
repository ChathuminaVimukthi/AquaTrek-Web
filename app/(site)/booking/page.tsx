import type { Metadata } from 'next'
import { Suspense } from 'react'
import BookingFormClient from '@/components/BookingFormClient'

export const metadata: Metadata = {
  title: 'Book a Tour — AquaTrek Hikkaduwa',
  description:
    'Book your kayaking tour at Rathgama Lake with AquaTrek Hikkaduwa. Choose from sunrise wildlife, sunset banyan tree, or celebration packages.',
  alternates: { canonical: 'https://aquatrekhikkaduwa.com/booking' },
  openGraph: {
    title: 'Book a Tour | AquaTrek Hikkaduwa',
    description: 'Reserve your kayaking tour at Rathgama Lake, Sri Lanka.',
    url: 'https://aquatrekhikkaduwa.com/booking',
  },
}

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Header */}
      <div className="bg-brand-navy py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
          >
            Book a Tour
          </h1>
          <p
            className="text-white/80 text-lg"
            style={{ fontFamily: '"Asap", Sans-serif' }}
          >
            Fill in the form below and we&apos;ll confirm your booking within 24 hours.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-8 py-14">
        <div className="bg-white px-8 md:px-12 py-10">
          <Suspense fallback={<div className="h-96 flex items-center justify-center text-gray-400" style={{ fontFamily: '"Asap", Sans-serif' }}>Loading form…</div>}>
            <BookingFormClient />
          </Suspense>
        </div>

        {/* Info note */}
        <p
          className="text-center text-sm text-gray-500 mt-6"
          style={{ fontFamily: '"Asap", Sans-serif' }}
        >
          Prefer to book via WhatsApp?{' '}
          <a
            href="https://wa.me/94773366171"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary underline hover:text-secondary-hover"
          >
            Message us directly
          </a>
        </p>
      </div>
    </div>
  )
}
