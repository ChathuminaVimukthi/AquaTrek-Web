'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function ManagerLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      setError('Invalid email or password.')
      setLoading(false)
    } else {
      router.push('/manager/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 w-full max-w-sm shadow-md">
        <div className="text-center mb-8">
          <h1
            className="text-2xl font-bold text-brand-navy"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
          >
            AquaTrek
          </h1>
          <p className="text-gray-500 text-sm mt-1" style={{ fontFamily: '"Asap", Sans-serif' }}>
            Manager Portal
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            style={{ fontFamily: '"Asap", Sans-serif' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            style={{ fontFamily: '"Asap", Sans-serif' }}
          />

          {error && (
            <p className="text-sm text-red-600" style={{ fontFamily: '"Asap", Sans-serif' }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-navy text-white py-3 font-semibold hover:bg-primary transition-colors disabled:opacity-60"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 700 }}
          >
            {loading ? 'Signing in…' : 'SIGN IN'}
          </button>
        </form>
      </div>
    </div>
  )
}
