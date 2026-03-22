'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agreeToTerms: false,
  })
  const [status, setStatus] = useState<Status>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, agreeToTerms: e.target.checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="py-12 text-center"
        style={{ fontFamily: '"Asap", Sans-serif' }}
      >
        <p className="text-2xl font-bold text-brand-navy mb-3" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
          Message Sent!
        </p>
        <p className="text-gray-600">
          Your message has been sent. We&apos;ll be in touch soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          style={{ fontFamily: '"Asap", Sans-serif' }}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          style={{ fontFamily: '"Asap", Sans-serif' }}
          required
        />
      </div>

      {/* Message */}
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleInputChange}
        rows={8}
        className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
        style={{ fontFamily: '"Asap", Sans-serif' }}
        required
      ></textarea>

      {/* Checkbox */}
      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleCheckboxChange}
          className="mt-1 w-4 h-4 text-primary focus:ring-primary border-gray-300"
          required
        />
        <label htmlFor="agreeToTerms" className="text-sm text-gray-600" style={{ fontFamily: '"Asap", Sans-serif' }}>
          I agree that my submitted data is being collected and stored.
        </label>
      </div>

      {/* Error Banner */}
      {status === 'error' && (
        <p className="text-sm text-red-600" style={{ fontFamily: '"Asap", Sans-serif' }}>
          Something went wrong. Please try again or WhatsApp us directly.
        </p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-brand-navy text-white px-8 py-3 hover:bg-brand-deep transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 700 }}
      >
        {status === 'loading' ? 'SENDING…' : 'SEND'}
      </button>
    </form>
  )
}
