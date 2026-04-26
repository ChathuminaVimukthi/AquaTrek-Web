import React from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'link'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  className?: string
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  target?: string
  rel?: string
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-7 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const variantStyles: Record<Variant, string> = {
  primary: [
    'bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)]',
    'hover:bg-[var(--btn-primary-bg-hover)] hover:-translate-y-px hover:shadow-sm',
    'active:scale-[0.98]',
  ].join(' '),
  secondary: [
    'bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)]',
    'border border-[var(--btn-secondary-border)]',
    'hover:bg-[var(--btn-secondary-bg-hover)] hover:text-[var(--btn-secondary-text-hover)]',
    'hover:-translate-y-px hover:shadow-sm',
    'active:scale-[0.98]',
  ].join(' '),
  ghost: [
    'bg-[var(--btn-ghost-bg)] text-[var(--btn-ghost-text)]',
    'border border-[var(--btn-ghost-border)]',
    'hover:bg-[var(--btn-ghost-bg-hover)]',
    'active:scale-[0.98]',
  ].join(' '),
  link: [
    'bg-transparent text-[var(--brand-accent)] p-0',
    'underline-offset-2 hover:underline',
  ].join(' '),
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled,
  loading,
  className = '',
  children,
  type = 'button',
  target,
  rel,
}: ButtonProps) {
  const base = [
    'inline-flex items-center justify-center gap-2',
    'font-semibold tracking-wide rounded-pill',
    'transition-all duration-200',
    'cursor-pointer select-none',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variant !== 'link' ? sizeStyles[size] : '',
    variantStyles[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a href={href} className={base} target={target} rel={rel}>
        {loading ? <Spinner /> : children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={base}>
      {loading ? <Spinner /> : children}
    </button>
  )
}

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}
