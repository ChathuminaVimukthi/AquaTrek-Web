import React from 'react'

type Variant = 'default' | 'flat' | 'ghost'

interface CardProps {
  variant?: Variant
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

const variantStyles: Record<Variant, string> = {
  default: [
    'bg-[var(--card-bg)]',
    'border border-[var(--border-subtle)]',
    'shadow-[var(--shadow-card)]',
    'hover:shadow-[var(--shadow-card-hover)]',
    'hover:-translate-y-1',
  ].join(' '),
  flat: [
    'bg-[var(--surface-overlay)]',
    'hover:shadow-[var(--shadow-sm)]',
    'hover:-translate-y-1',
  ].join(' '),
  ghost: [
    'bg-transparent',
    'border border-[var(--border-default)]',
    'hover:-translate-y-1',
  ].join(' '),
}

export function Card({ variant = 'default', className = '', children, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={[
        'rounded-card transition-all duration-300 overflow-hidden',
        variantStyles[variant],
        onClick ? 'cursor-pointer' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
