import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'var(--surface-page)' }}
    >
      <div className="text-center max-w-lg">
        <div className="flex justify-center mb-8">
          <Image src="/images/logo.png" alt="AquaTrek Hikkaduwa" width={80} height={80} />
        </div>
        <p
          className="mb-2"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-9xl)',
            fontWeight: 800,
            color: 'var(--brand-primary)',
            lineHeight: 1,
          }}
        >
          404
        </p>
        <h1
          className="mb-4"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-3xl)',
            color: 'var(--text-heading)',
            letterSpacing: 'var(--tracking-tight)',
          }}
        >
          Page Not Found
        </h1>
        <p className="mb-8" style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-base)' }}>
          The page you&apos;re looking for doesn&apos;t exist. Head back to explore our kayaking tours.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-7 py-3 rounded-pill text-sm font-semibold transition-all hover:-translate-y-px hover:shadow-sm"
          style={{ background: 'var(--brand-accent)', color: 'white' }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
