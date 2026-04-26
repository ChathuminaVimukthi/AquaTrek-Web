import React from 'react'

type Variant = 'coming-soon' | 'category' | 'featured' | 'new'

interface BadgeProps {
  variant?: Variant
  className?: string
  children: React.ReactNode
}

const variantStyles: Record<Variant, string> = {
  'coming-soon': 'bg-[var(--brand-accent)] text-white',
  'category':    'bg-[var(--neutral-200)] text-[var(--brand-primary)]',
  'featured':    'bg-[var(--brand-primary)] text-white',
  'new':         'bg-[var(--color-success)] text-white',
}

export function Badge({ variant = 'category', className = '', children }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center',
        'px-[0.625rem] py-1',
        'text-xs font-semibold tracking-widest uppercase',
        'rounded-pill',
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  )
}
