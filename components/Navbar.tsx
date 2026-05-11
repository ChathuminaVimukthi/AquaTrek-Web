'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { trackEvent } from '@/lib/analytics'
import { Bars3Icon, XMarkIcon, PhoneIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const tourLinks = [
  {
    href: '/tour/sunrise-wildlife',
    label: 'Sunrise & Wildlife',
    description: 'Dawn paddle through mangroves · Rs 3,000',
    image: '/images/sunrise-tour/sunrise2.webp',
    tag: 'Most Popular',
  },
  {
    href: '/tour/sunset-banyan-tree',
    label: 'Sunset & Banyan Tree',
    description: 'Golden-hour paddle to the harbour · Rs 3,000',
    image: '/images/sunset-tour/sunset-1.webp',
    tag: null,
  },
  {
    href: '/celebration',
    label: 'Celebrations',
    description: 'Birthdays, anniversaries & private events',
    image: '/images/garden-celeb/birthday-baby-tent.jpeg',
    tag: null,
  },
]

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

const readLinks = [
  { href: '/blog', label: 'Blog', description: 'Stories, wildlife guides & lake insights' },
  { href: '/guides', label: 'Travel Guides', description: 'Plan your visit to Hikkaduwa & Rathgama Lake' },
]

const comingSoonLinks = [
  { href: '/hostel', label: 'Lake House Hostel', description: 'Lakefront dorms & private rooms on the lake' },
  { href: '/aquahub', label: 'AquaHub Cowork & Café', description: 'Starlink-powered workspace with lake views' },
  { href: '/rooftop', label: 'Rooftop Sunset Deck', description: 'Sunset events, yoga & private dining' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [toursOpen, setToursOpen] = useState(false)
  const [readOpen, setReadOpen] = useState(false)
  const [comingOpen, setComingOpen] = useState(false)
  const [mobileTourOpen, setMobileTourOpen] = useState(true)
  const toursRef = useRef<HTMLDivElement>(null)
  const readRef = useRef<HTMLDivElement>(null)
  const comingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (toursRef.current && !toursRef.current.contains(e.target as Node)) setToursOpen(false)
      if (readRef.current && !readRef.current.contains(e.target as Node)) setReadOpen(false)
      if (comingRef.current && !comingRef.current.contains(e.target as Node)) setComingOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeAll = () => {
    setMenuOpen(false)
    setToursOpen(false)
    setReadOpen(false)
    setComingOpen(false)
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[var(--z-sticky)] transition-all duration-300"
        style={{
          height: 'var(--nav-height)',
          background: scrolled ? 'var(--nav-bg-scrolled)' : 'var(--nav-bg)',
          borderBottom: scrolled ? 'var(--nav-border-scrolled)' : 'none',
          backdropFilter: 'var(--nav-blur)',
          WebkitBackdropFilter: 'var(--nav-blur)',
        }}
      >
        <div className="container h-full flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0" onClick={closeAll}>
            <Image
              src="/logo-final.JPG"
              alt="AquaTrek Water Adventures logo"
              width={36}
              height={36}
              className="rounded-full object-cover"
            />
            <span
              className="font-extrabold text-[var(--brand-primary)] text-lg tracking-tight"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              AquaTrek
            </span>
          </Link>

          {/* Desktop centre nav */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">

            {/* Tours dropdown */}
            <div className="relative" ref={toursRef}>
              <button
                onClick={() => { setToursOpen((v) => !v); setComingOpen(false) }}
                className="flex items-center gap-1 px-3 py-2 text-sm text-[var(--nav-link-color)] hover:text-[var(--brand-primary)] transition-colors rounded-lg hover:bg-[var(--surface-overlay)]"
              >
                Services
                <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform duration-200 ${toursOpen ? 'rotate-180' : ''}`} />
              </button>

              {toursOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 p-3 w-[480px] animate-in fade-in slide-in-from-top-1 duration-150"
                  style={{
                    background: 'var(--surface-raised)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: 'var(--shadow-xl)',
                  }}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider px-2 mb-2" style={{ color: 'var(--text-tertiary)' }}>
                    Our Experiences
                  </p>
                  <div className="grid grid-cols-1 gap-1">
                    {tourLinks.map((t) => (
                      <Link
                        key={t.href}
                        href={t.href}
                        onClick={() => setToursOpen(false)}
                        className="flex items-center gap-3 p-2.5 rounded-xl transition-colors hover:bg-[var(--surface-overlay)] group"
                      >
                        <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={t.image}
                            alt={t.label}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="text-sm font-semibold text-[var(--text-heading)] group-hover:text-[var(--brand-primary)] transition-colors">
                              {t.label}
                            </p>
                            {t.tag && (
                              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full flex-shrink-0" style={{ background: 'var(--brand-accent)', color: 'white' }}>
                                {t.tag}
                              </span>
                            )}
                          </div>
                          <p className="text-xs truncate" style={{ color: 'var(--text-secondary)' }}>{t.description}</p>
                        </div>
                        <svg className="w-4 h-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--text-tertiary)' }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-2 pt-2" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                    <Link
                      href="/booking"
                      onClick={() => setToursOpen(false)}
                      className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all hover:-translate-y-px"
                      style={{ background: 'var(--brand-accent)', color: 'white' }}
                    >
                      Book Any Tour →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Flat links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[var(--nav-link-color)] hover:text-[var(--brand-primary)] transition-colors rounded-lg hover:bg-[var(--surface-overlay)] relative group"
              >
                {link.label}
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[var(--brand-primary)] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </Link>
            ))}

            {/* Read dropdown */}
            <div className="relative" ref={readRef}>
              <button
                onClick={() => { setReadOpen((v) => !v); setToursOpen(false); setComingOpen(false) }}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[var(--nav-link-color)] hover:text-[var(--brand-primary)] transition-colors rounded-lg hover:bg-[var(--surface-overlay)]"
              >
                Read
                <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform duration-200 ${readOpen ? 'rotate-180' : ''}`} />
              </button>

              {readOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 p-2 min-w-[240px] animate-in fade-in slide-in-from-top-1 duration-150"
                  style={{
                    background: 'var(--surface-raised)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: 'var(--shadow-xl)',
                  }}
                >
                  {readLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setReadOpen(false)}
                      className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-[var(--surface-overlay)] transition-colors"
                    >
                      <span className="text-sm font-semibold text-[var(--text-heading)]">{link.label}</span>
                      <span className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>{link.description}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Coming Soon dropdown */}
            <div className="relative" ref={comingRef}>
              <button
                onClick={() => { setComingOpen((v) => !v); setToursOpen(false); setReadOpen(false) }}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[var(--nav-link-color)] hover:text-[var(--brand-primary)] transition-colors rounded-lg hover:bg-[var(--surface-overlay)]"
              >
                🌿 Coming Soon
                <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform duration-200 ${comingOpen ? 'rotate-180' : ''}`} />
              </button>

              {comingOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 p-2 min-w-[220px] animate-in fade-in slide-in-from-top-1 duration-150"
                  style={{
                    background: 'var(--surface-raised)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-xl)',
                    boxShadow: 'var(--shadow-xl)',
                  }}
                >
                  {comingSoonLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setComingOpen(false)}
                      className="flex flex-col px-3 py-2.5 rounded-lg hover:bg-[var(--surface-overlay)] transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-[var(--text-heading)]">{link.label}</span>
                        <span className="text-[10px] font-semibold text-[var(--brand-accent)] bg-[var(--brand-accent-subtle)] px-1.5 py-0.5 rounded-full flex-shrink-0">
                          Soon
                        </span>
                      </div>
                      <span className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>{link.description}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:+94773366171"
              onClick={() => trackEvent({ name: 'phone_click', params: { source: 'navbar' } })}
              className="flex items-center gap-1.5 text-sm font-medium text-[var(--nav-link-color)] hover:text-[var(--brand-primary)] transition-colors"
            >
              <PhoneIcon className="w-4 h-4" />
              +94 77 336 6171
            </a>
            <Link
              href="/booking"
              className="inline-flex items-center px-5 py-2 text-sm font-semibold rounded-pill transition-all duration-200 hover:-translate-y-px hover:shadow-sm"
              style={{ background: 'var(--brand-accent)', color: 'white' }}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden p-2 text-[var(--brand-primary)]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Spacer */}
      <div style={{ height: 'var(--nav-height)' }} />

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-[var(--z-modal)] lg:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />

        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-full flex flex-col transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          style={{ background: 'var(--brand-primary)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--border-inverse)]">
            <span className="text-white font-extrabold text-lg">AquaTrek</span>
            <button onClick={() => setMenuOpen(false)} className="text-white p-1">
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-1">

            {/* Tours section — collapsible */}
            <div>
              <button
                onClick={() => setMobileTourOpen((v) => !v)}
                className="w-full flex items-center justify-between text-white text-xl font-semibold py-3 border-b border-[var(--border-inverse)]"
                style={{ minHeight: '56px' }}
              >
                Tours
                <ChevronDownIcon className={`w-5 h-5 transition-transform duration-200 ${mobileTourOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileTourOpen && (
                <div className="py-2 pl-2 space-y-1">
                  {tourLinks.map((t) => (
                    <Link
                      key={t.href}
                      href={t.href}
                      onClick={closeAll}
                      className="flex items-center gap-3 py-2.5 rounded-xl transition-colors hover:bg-white/10"
                    >
                      <div className="relative w-12 h-9 rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={t.image} alt={t.label} fill className="object-cover" sizes="48px" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold leading-tight">{t.label}</p>
                        {t.tag && (
                          <span className="text-[10px] font-semibold" style={{ color: 'var(--brand-accent)' }}>{t.tag}</span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Flat nav links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeAll}
                className="block text-white text-xl font-semibold py-3 border-b border-[var(--border-inverse)] hover:text-[var(--brand-primary-muted)] transition-colors"
                style={{ minHeight: '56px', display: 'flex', alignItems: 'center' }}
              >
                {link.label}
              </Link>
            ))}

            {/* Read */}
            <div className="pt-2 pb-2">
              <p className="text-[var(--brand-primary-muted)] text-xs font-semibold uppercase tracking-wider mb-2">
                Read
              </p>
              {readLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeAll}
                  className="flex items-center gap-2 text-[var(--brand-primary-muted)] text-base py-2.5 hover:text-white transition-colors"
                  style={{ minHeight: '44px' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-primary-light)] flex-shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Coming Soon */}
            <div className="pt-4 pb-2">
              <p className="text-[var(--brand-primary-muted)] text-xs font-semibold uppercase tracking-wider mb-2">
                Coming Soon
              </p>
              {comingSoonLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeAll}
                  className="flex items-center gap-2 text-[var(--brand-primary-muted)] text-base py-2.5 hover:text-white transition-colors"
                  style={{ minHeight: '44px' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-accent)]" />
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Drawer bottom */}
          <div className="px-6 py-6 border-t border-[var(--border-inverse)] space-y-3">
            <Link
              href="/booking"
              onClick={closeAll}
              className="flex items-center justify-center w-full py-3 rounded-pill text-sm font-semibold transition-all"
              style={{ background: 'var(--brand-accent)', color: 'white' }}
            >
              Book Now
            </Link>
            <a
              href="tel:+94773366171"
              className="flex items-center gap-2 text-white font-semibold text-sm"
              onClick={() => { closeAll(); trackEvent({ name: 'phone_click', params: { source: 'navbar_mobile' } }) }}
            >
              <PhoneIcon className="w-4 h-4" />
              +94 77 336 6171
            </a>
            <div className="flex gap-4 pt-1">
              <a
                href="https://www.facebook.com/p/Aqua-Trek-Water-Adventures-Hikkaduwa-61574798053293/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a
                href="https://www.instagram.com/aquatrekhikka/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
