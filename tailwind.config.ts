import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest:     'var(--brand-primary)',
        sage:       'var(--brand-primary-light)',
        moss:       'var(--brand-primary-muted)',
        terracotta: 'var(--brand-accent)',
        sunrise:    'var(--brand-accent-light)',
        cream:      'var(--neutral-100)',
        sand:       'var(--neutral-200)',
        bark:       'var(--neutral-300)',
        ink:        'var(--neutral-700)',
        stone:      'var(--neutral-500)',
        mist:       'var(--neutral-400)',
        /* Keep legacy colour names so existing components don't break */
        primary: {
          DEFAULT: 'var(--brand-accent)',
          hover:   'var(--brand-accent-hover)',
          bg:      'var(--surface-page)',
        },
        secondary: {
          DEFAULT: 'var(--brand-primary)',
          hover:   'var(--brand-primary-light)',
        },
        brand: {
          deep:  'var(--brand-primary)',
          navy:  'var(--brand-primary)',
        },
        accent: {
          offer: 'var(--brand-accent)',
          gold:  'var(--brand-accent-light)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body:    ['var(--font-body)'],
      },
      borderRadius: {
        card: 'var(--radius-card)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        card:         'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        sm:           'var(--shadow-sm)',
        md:           'var(--shadow-md)',
        lg:           'var(--shadow-lg)',
        xl:           'var(--shadow-xl)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}

export default config
