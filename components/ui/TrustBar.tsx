interface TrustBarProps {
  variant?: 'dark' | 'light'
  className?: string
}

const items = [
  { icon: '⭐', value: '250+', label: '5-Star Reviews' },
  { icon: '🚣', value: '300+', label: 'Tours Completed' },
  { icon: '📍', value: 'Rathgama Lake', label: 'Hikkaduwa, Sri Lanka' },
  { icon: '🌿', value: 'Family-Run', label: 'Since 2023' },
  { icon: '🛟', value: 'Safety First', label: 'Certified Guides' },
  { icon: '📅', value: 'Same-Day', label: 'Bookings Available' },
]

// Duplicate for seamless infinite loop — translateX(-50%) brings us back to start
const marqueeItems = [...items, ...items]

export function TrustBar({ variant = 'dark', className = '' }: TrustBarProps) {
  const isDark = variant === 'dark'
  const bg = isDark ? 'bg-[var(--brand-primary)]' : 'bg-[var(--neutral-200)]'
  const textMuted = isDark ? 'text-[var(--text-inverse-muted)]' : 'text-[var(--text-secondary)]'
  const textStrong = isDark ? 'text-white' : 'text-[var(--text-primary)]'
  const divider = isDark ? 'text-white/20' : 'text-[var(--neutral-400)]'

  return (
    <div className={`${bg} ${className} overflow-hidden`}>
      <div className="marquee-track py-3 select-none">
        {marqueeItems.map((item, i) => (
          <span key={i} className={`inline-flex items-center gap-1.5 px-5 text-sm ${textMuted} whitespace-nowrap`}>
            <span>{item.icon}</span>
            <span className={`font-semibold ${textStrong}`}>{item.value}</span>
            <span>{item.label}</span>
            <span className={`ml-4 ${divider}`}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
