'use client'

import React, { useState } from 'react'
import { Button } from './ui/Button'

type Category = 'hostel' | 'coworking' | 'rooftop'

interface WaitlistFormProps {
  category: Category
  placeholder?: string
}

const FORM_IDS: Record<Category, string> = {
  hostel:    'YOUR_HOSTEL_FORM_ID',    // TODO: replace with Formspree form ID
  coworking: 'YOUR_COWORKING_FORM_ID', // TODO: replace with Formspree form ID
  rooftop:   'YOUR_ROOFTOP_FORM_ID',   // TODO: replace with Formspree form ID
}

export default function WaitlistForm({ category, placeholder }: WaitlistFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const formId = FORM_IDS[category]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const data = new FormData(e.currentTarget)

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
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
      <div className="rounded-card p-8 bg-[var(--color-success-bg)] border border-[var(--color-success)] text-center">
        <div className="w-12 h-12 rounded-full bg-[var(--color-success)] text-white flex items-center justify-center mx-auto mb-4 text-2xl">
          ✓
        </div>
        <h3 className="text-xl font-semibold text-[var(--color-success)] mb-2">You&apos;re on the list!</h3>
        <p className="text-[var(--text-secondary)]">
          We&apos;ll reach out as soon as we&apos;re ready to open bookings.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-[var(--text-primary)] mb-1">
          Name <span className="text-[var(--brand-accent)]">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="w-full rounded-[var(--radius-lg)] bg-[var(--input-bg)] border border-[var(--border-default)] px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--brand-primary)] focus:shadow-[var(--input-focus-ring)] transition-all"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-[var(--text-primary)] mb-1">
          Email <span className="text-[var(--brand-accent)]">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="w-full rounded-[var(--radius-lg)] bg-[var(--input-bg)] border border-[var(--border-default)] px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--brand-primary)] focus:shadow-[var(--input-focus-ring)] transition-all"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[var(--text-primary)] mb-1">
          Message <span className="text-[var(--text-tertiary)] font-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder={placeholder ?? 'Anything you&apos;d like us to know?'}
          className="w-full rounded-[var(--radius-lg)] bg-[var(--input-bg)] border border-[var(--border-default)] px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--brand-primary)] focus:shadow-[var(--input-focus-ring)] transition-all resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="rounded-lg p-4 bg-[var(--color-error-bg)] text-[var(--color-error)] text-sm">
          Something went wrong. Please try WhatsApp:{' '}
          <a
            href="https://wa.me/94721301524"
            className="underline font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            +94 72 130 1524
          </a>
        </div>
      )}

      <Button type="submit" variant="primary" size="lg" loading={status === 'loading'} className="w-full">
        Join the Waitlist
      </Button>
    </form>
  )
}
