'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  background: 'var(--surface-page)',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-md)',
  color: 'var(--text-primary)',
  fontSize: 'var(--text-sm)',
  outline: 'none',
  transition: 'border-color 0.2s',
}

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="py-10 px-6 rounded-card text-center"
        style={{ background: 'var(--brand-accent-subtle)', border: '1px solid var(--brand-accent)' }}
      >
        <div className="text-3xl mb-3">✓</div>
        <p className="font-semibold mb-1" style={{ color: 'var(--text-heading)', fontFamily: 'var(--font-display)' }}>
          Message sent!
        </p>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          We&apos;ll be in touch within a few hours. For faster replies, WhatsApp us directly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold mb-1.5" style={{ color: 'var(--text-secondary)' }}>
          Message
        </label>
        <textarea
          name="message"
          placeholder="How can we help you?"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          style={{ ...inputStyle, resize: 'none' }}
          required
        />
      </div>

      {status === 'error' && (
        <p className="text-sm" style={{ color: '#C0392B' }}>
          Something went wrong. Please try again or WhatsApp us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3 rounded-pill text-sm font-semibold transition-all hover:-translate-y-px hover:shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ background: 'var(--brand-accent)', color: 'white' }}
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  )
}
