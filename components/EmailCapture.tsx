'use client'

import { useState } from 'react'
import { trackEvent } from '@/lib/analytics'

type Source = 'homepage_banner' | 'footer' | 'blog_post' | 'exit_intent'

interface EmailCaptureProps {
  source: Source
  compact?: boolean
}

export default function EmailCapture({ source, compact = false }: EmailCaptureProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    setStatus('loading')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, source }),
      })
      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error || 'Something went wrong. Try again.')
        setStatus('error')
        return
      }

      trackEvent({ name: 'email_signup', params: { source } })
      setStatus('success')
    } catch {
      setErrorMsg('Connection error. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        className="flex flex-col items-center text-center gap-3 py-6 px-4 rounded-card"
        style={{ background: 'var(--color-success-bg)', border: '1px solid var(--color-success)' }}
      >
        <span className="text-2xl">🦅</span>
        <p className="font-semibold text-sm" style={{ color: 'var(--color-success)' }}>
          Your wildlife guide is on its way!
        </p>
        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
          Check your inbox — the download link is in the welcome email.
        </p>
      </div>
    )
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="flex-1 min-w-0 text-sm px-3 py-2 rounded-lg"
          style={{
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: 'white',
            outline: 'none',
          }}
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 min-w-0 text-sm px-3 py-2 rounded-lg"
          style={{
            background: 'rgba(255,255,255,0.12)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: 'white',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="whitespace-nowrap text-sm font-semibold px-5 py-2 rounded-pill transition-opacity hover:opacity-90 disabled:opacity-60"
          style={{ background: 'var(--brand-accent)', color: 'white' }}
        >
          {status === 'loading' ? 'Sending…' : 'Get Free Guide'}
        </button>
        {status === 'error' && (
          <p className="text-xs w-full" style={{ color: '#fca5a5' }}>{errorMsg}</p>
        )}
      </form>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full text-sm px-4 py-3 rounded-lg"
          style={{
            background: 'var(--surface-page)',
            border: '1px solid var(--border-default)',
            color: 'var(--text-primary)',
            outline: 'none',
          }}
        />
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full text-sm px-4 py-3 rounded-lg"
          style={{
            background: 'var(--surface-page)',
            border: '1px solid var(--border-default)',
            color: 'var(--text-primary)',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full text-sm font-semibold px-5 py-3 rounded-pill transition-all hover:-translate-y-px hover:shadow-md disabled:opacity-60"
          style={{ background: 'var(--brand-accent)', color: 'white' }}
        >
          {status === 'loading' ? 'Sending…' : 'Send me the free guide →'}
        </button>
        {status === 'error' && (
          <p className="text-xs text-center" style={{ color: 'var(--color-error)' }}>{errorMsg}</p>
        )}
      </div>
    </form>
  )
}
