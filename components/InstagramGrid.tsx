'use client'

import Image from 'next/image'
import type { InstagramPost } from '@/lib/instagram'

function NoTokenState() {
  return (
    <div
      className="rounded-card p-12 text-center"
      style={{ background: 'var(--neutral-200)', border: 'var(--card-border)' }}
    >
      <div className="text-5xl mb-4">📸</div>
      <h3
        className="mb-2"
        style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--text-heading)' }}
      >
        Instagram feed not connected yet
      </h3>
      <p className="text-sm mb-6 mx-auto" style={{ color: 'var(--text-secondary)', maxWidth: '44ch' }}>
        To display live Instagram posts, add your{' '}
        <code
          className="px-1.5 py-0.5 rounded text-xs"
          style={{ background: 'var(--surface-raised)', color: 'var(--brand-accent)' }}
        >
          INSTAGRAM_ACCESS_TOKEN
        </code>{' '}
        to your environment variables. See setup instructions below.
      </p>
      <a
        href="https://instagram.com/aquatrekhikkaduwa"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-pill text-sm font-semibold transition-all hover:-translate-y-px"
        style={{ background: 'var(--brand-accent)', color: 'white' }}
      >
        View on Instagram →
      </a>

      <div
        className="mt-10 p-6 rounded-card text-left mx-auto"
        style={{ background: 'var(--surface-raised)', border: 'var(--card-border)', maxWidth: '560px' }}
      >
        <p className="font-semibold text-sm mb-3" style={{ color: 'var(--text-heading)' }}>
          How to connect your Instagram
        </p>
        <ol className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
          <li className="flex gap-2">
            <span style={{ color: 'var(--brand-accent)', fontWeight: 600 }}>1.</span>
            Convert your Instagram account to a <strong>Business or Creator</strong> account (free, in Instagram settings)
          </li>
          <li className="flex gap-2">
            <span style={{ color: 'var(--brand-accent)', fontWeight: 600 }}>2.</span>
            Go to <strong>developers.facebook.com</strong> → Create App → Add Instagram Graph API product
          </li>
          <li className="flex gap-2">
            <span style={{ color: 'var(--brand-accent)', fontWeight: 600 }}>3.</span>
            Generate a long-lived user access token (valid 60 days, auto-refresh built in)
          </li>
          <li className="flex gap-2">
            <span style={{ color: 'var(--brand-accent)', fontWeight: 600 }}>4.</span>
            Add <code className="text-xs px-1 rounded" style={{ background: 'var(--neutral-200)' }}>INSTAGRAM_ACCESS_TOKEN=your_token</code> to <code className="text-xs px-1 rounded" style={{ background: 'var(--neutral-200)' }}>.env.local</code>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default function InstagramGrid({ posts }: { posts: InstagramPost[] }) {
  if (posts.length === 0) return <NoTokenState />

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2">
      {posts.map((post) => {
        const imageUrl = post.media_type === 'VIDEO' ? post.thumbnail_url! : post.media_url
        const caption = post.caption?.split('\n')[0]?.slice(0, 120) ?? ''

        return (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-sm"
            style={{ aspectRatio: '1 / 1' }}
            aria-label={caption || 'View on Instagram'}
          >
            <Image
              src={imageUrl}
              alt={caption || 'AquaTrek Hikkaduwa — Rathgama Lake'}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            {/* Hover overlay */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(28,58,43,0.82)' }}
            >
              {post.media_type === 'CAROUSEL_ALBUM' && (
                <svg className="w-5 h-5 text-white/80 mb-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0v12h12V6H4zm14-2h2a2 2 0 012 2v12a2 2 0 01-2 2h-2v-2h2V6h-2V4zM6 4h2v2H6V4z" />
                </svg>
              )}
              {post.media_type === 'VIDEO' && (
                <svg className="w-6 h-6 text-white/80 mb-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
              {caption && (
                <p className="text-white text-xs text-center leading-relaxed line-clamp-3">
                  {caption}
                </p>
              )}
              <div className="mt-3 flex items-center gap-1 text-white/70 text-xs">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                View on Instagram
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}
