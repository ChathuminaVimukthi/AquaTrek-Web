import React from 'react'

interface SectionHeaderProps {
  eyebrow?: string
  heading: string
  subtext?: string
  align?: 'left' | 'center'
  maxWidth?: string
  inverse?: boolean
}

export function SectionHeader({
  eyebrow,
  heading,
  subtext,
  align = 'left',
  maxWidth = '680px',
  inverse = false,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''
  const headingColor = inverse ? 'text-white' : 'text-[var(--text-heading)]'
  const subtextColor = inverse ? 'text-[var(--text-inverse-muted)]' : 'text-[var(--text-secondary)]'
  const eyebrowColor = inverse ? 'text-[var(--brand-primary-muted)]' : ''

  return (
    <div className={`${alignClass} mb-10`} style={{ maxWidth: align === 'center' ? maxWidth : undefined }}>
      {eyebrow && (
        <p className={`eyebrow mb-3 ${eyebrowColor}`}>{eyebrow}</p>
      )}
      <h2 className={`font-display ${headingColor} mb-4`}>{heading}</h2>
      {subtext && (
        <p className={`text-lg ${subtextColor} max-w-[60ch] ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtext}
        </p>
      )}
    </div>
  )
}
