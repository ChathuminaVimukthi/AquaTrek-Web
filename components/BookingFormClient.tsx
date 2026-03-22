'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

type TourType = 'sunset-banyan-tree' | 'sunrise-wildlife' | 'standard-1hr' | 'celebration' | ''
type ContactType = 'email' | 'whatsapp'
type Status = 'idle' | 'loading' | 'success' | 'error'

const TOUR_LABELS: Record<string, string> = {
  'sunset-banyan-tree': 'Sunset Banyan Tree Tour (3hrs)',
  'sunrise-wildlife': 'Sunrise Wildlife Tour (3hrs)',
  'standard-1hr': 'Standard Kayaking (1hr)',
  celebration: 'Celebration Package',
}

const TOUR_RATES: Record<string, number | null> = {
  'sunset-banyan-tree': 3000,
  'sunrise-wildlife': 3000,
  'standard-1hr': 1000,
  celebration: null,
}

function calcTotal(tourType: TourType, groupSize: number): string | null {
  if (!tourType || !groupSize) return null
  const rate = TOUR_RATES[tourType]
  if (rate === null) return 'Custom quote'
  return `Rs ${(rate * groupSize).toLocaleString()}`
}

function todayStr() {
  return new Date().toISOString().split('T')[0]
}

export default function BookingFormClient() {
  const searchParams = useSearchParams()

  const [formData, setFormData] = useState({
    name: '',
    contactType: 'email' as ContactType,
    contactValue: '',
    tourType: '' as TourType,
    tourDate: '',
    groupSize: 1,
    specialRequests: '',
    agreeToTerms: false,
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const tour = searchParams.get('tour') as TourType
    if (tour && TOUR_LABELS[tour]) {
      setFormData((prev) => ({ ...prev, tourType: tour }))
    }
  }, [searchParams])

  const totalDisplay = calcTotal(formData.tourType, formData.groupSize)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : name === 'groupSize' ? Number(value) : value,
    }))
  }

  const handleContactTypeToggle = (type: ContactType) => {
    setFormData((prev) => ({ ...prev, contactType: type, contactValue: '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          contactType: formData.contactType,
          contactValue: formData.contactValue,
          tourType: formData.tourType,
          tourDate: formData.tourDate,
          groupSize: formData.groupSize,
          specialRequests: formData.specialRequests,
        }),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('success')
      } else {
        setErrorMsg(data.error || 'Something went wrong.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-16 px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-brand-navy mb-4"
          style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
        >
          Booking Received!
        </h2>
        <p className="text-gray-600 max-w-md mx-auto mb-2" style={{ fontFamily: '"Asap", Sans-serif' }}>
          Thank you, <strong>{formData.name}</strong>. We&apos;ve received your booking for{' '}
          <strong>{TOUR_LABELS[formData.tourType] || formData.tourType}</strong> on{' '}
          <strong>{formData.tourDate}</strong>.
        </p>
        <p className="text-gray-500 text-sm max-w-md mx-auto" style={{ fontFamily: '"Asap", Sans-serif' }}>
          We&apos;ll confirm your spot within 24 hours. Questions? WhatsApp us at{' '}
          <a href="https://wa.me/94773366171" className="text-primary underline">
            +94 77 336 6171
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label
          className="block text-sm font-semibold text-brand-navy mb-1"
          style={{ fontFamily: '"Asap", Sans-serif' }}
        >
          Full Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          style={{ fontFamily: '"Asap", Sans-serif' }}
        />
      </div>

      {/* Contact type toggle */}
      <div>
        <label
          className="block text-sm font-semibold text-brand-navy mb-2"
          style={{ fontFamily: '"Asap", Sans-serif' }}
        >
          Preferred Contact *
        </label>
        <div className="flex gap-0 mb-3">
          <button
            type="button"
            onClick={() => handleContactTypeToggle('email')}
            className={`px-6 py-2 text-sm font-semibold border transition-colors duration-200 ${
              formData.contactType === 'email'
                ? 'bg-brand-navy text-white border-brand-navy'
                : 'bg-white text-brand-navy border-gray-300 hover:bg-gray-50'
            }`}
            style={{ fontFamily: '"Asap", Sans-serif' }}
          >
            Email
          </button>
          <button
            type="button"
            onClick={() => handleContactTypeToggle('whatsapp')}
            className={`px-6 py-2 text-sm font-semibold border-t border-b border-r transition-colors duration-200 ${
              formData.contactType === 'whatsapp'
                ? 'bg-secondary text-white border-secondary'
                : 'bg-white text-brand-navy border-gray-300 hover:bg-gray-50'
            }`}
            style={{ fontFamily: '"Asap", Sans-serif' }}
          >
            WhatsApp
          </button>
        </div>
        {formData.contactType === 'email' ? (
          <input
            type="email"
            name="contactValue"
            value={formData.contactValue}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            style={{ fontFamily: '"Asap", Sans-serif' }}
          />
        ) : (
          <input
            type="tel"
            name="contactValue"
            value={formData.contactValue}
            onChange={handleChange}
            placeholder="+94 77 000 0000"
            required
            className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            style={{ fontFamily: '"Asap", Sans-serif' }}
          />
        )}
      </div>

      {/* Tour type + date row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            className="block text-sm font-semibold text-brand-navy mb-1"
            style={{ fontFamily: '"Asap", Sans-serif' }}
          >
            Tour Type *
          </label>
          <select
            name="tourType"
            value={formData.tourType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            style={{ fontFamily: '"Asap", Sans-serif' }}
          >
            <option value="">Select a tour</option>
            {Object.entries(TOUR_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            className="block text-sm font-semibold text-brand-navy mb-1"
            style={{ fontFamily: '"Asap", Sans-serif' }}
          >
            Tour Date *
          </label>
          <input
            type="date"
            name="tourDate"
            value={formData.tourDate}
            onChange={handleChange}
            min={todayStr()}
            required
            className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            style={{ fontFamily: '"Asap", Sans-serif' }}
          />
        </div>
      </div>

      {/* Group size */}
      <div>
        <label
          className="block text-sm font-semibold text-brand-navy mb-1"
          style={{ fontFamily: '"Asap", Sans-serif' }}
        >
          Group Size *
        </label>
        <input
          type="number"
          name="groupSize"
          value={formData.groupSize}
          onChange={handleChange}
          min={1}
          max={20}
          required
          className="w-full md:w-32 px-4 py-3 bg-gray-100 border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          style={{ fontFamily: '"Asap", Sans-serif' }}
        />
      </div>

      {/* Estimated total */}
      {totalDisplay && (
        <div
          className="bg-blue-50 border border-primary/20 px-4 py-3 text-sm text-brand-navy"
          style={{ fontFamily: '"Asap", Sans-serif' }}
        >
          <span className="font-semibold">Estimated total: </span>
          {totalDisplay}
          {totalDisplay !== 'Custom quote' && (
            <span className="text-gray-500 ml-1">(Rs {TOUR_RATES[formData.tourType]?.toLocaleString()} × {formData.groupSize} {formData.groupSize === 1 ? 'person' : 'people'})</span>
          )}
        </div>
      )}

      {/* Special requests */}
      <div>
        <label
          className="block text-sm font-semibold text-brand-navy mb-1"
          style={{ fontFamily: '"Asap", Sans-serif' }}
        >
          Special Requests
        </label>
        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          rows={4}
          placeholder="Any dietary requirements, accessibility needs, or special occasions..."
          className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
          style={{ fontFamily: '"Asap", Sans-serif' }}
        />
      </div>

      {/* Terms */}
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="agreeToTerms"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          required
          className="mt-1 w-4 h-4 text-primary focus:ring-primary border-gray-300"
        />
        <label
          htmlFor="agreeToTerms"
          className="text-sm text-gray-600"
          style={{ fontFamily: '"Asap", Sans-serif' }}
        >
          I agree that my submitted data is being collected and stored for booking purposes.
        </label>
      </div>

      {/* Error */}
      {status === 'error' && (
        <p className="text-sm text-red-600" style={{ fontFamily: '"Asap", Sans-serif' }}>
          {errorMsg || 'Something went wrong. Please try again or WhatsApp us directly.'}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-brand-navy text-white px-10 py-4 hover:bg-primary transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed font-semibold"
        style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 700 }}
      >
        {status === 'loading' ? 'SUBMITTING…' : 'REQUEST BOOKING'}
      </button>
    </form>
  )
}
