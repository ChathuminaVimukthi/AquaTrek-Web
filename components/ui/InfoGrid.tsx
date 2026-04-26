import React from 'react'

interface InfoItem {
  icon: React.ReactNode
  label: string
  value: string
}

interface InfoGridProps {
  items: InfoItem[]
  cols?: 2 | 3 | 4
  className?: string
}

const colStyles: Record<number, string> = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4',
}

export function InfoGrid({ items, cols = 3, className = '' }: InfoGridProps) {
  return (
    <div
      className={[
        'grid gap-4',
        colStyles[cols] ?? colStyles[3],
        className,
      ].join(' ')}
    >
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--brand-primary-subtle)] flex items-center justify-center text-[var(--brand-primary)]">
            {item.icon}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-0.5">
              {item.label}
            </p>
            <p className="text-base font-semibold text-[var(--text-primary)]">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
