import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1FA7B8',
          hover: '#2BC3D3',
          bg: '#F5F5F5',
        },
        secondary: {
          DEFAULT: '#1C5D44',
          hover: '#7FA27B',
        },
        brand: {
          deep: '#0C3C63',
          navy: '#072D48',
        },
        nature: {
          bg: '#7DBFA7',
          text: '#0C3C63',
        },
        accent: {
          offer: '#FF7C19',
          gold: '#FFB034',
        },
        highlight: {
          text: '#1FA7B8',
        },
      },
    },
  },
  plugins: [],
}

export default config
