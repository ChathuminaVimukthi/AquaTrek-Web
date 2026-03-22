import localFont from 'next/font/local'
import type { Metadata } from 'next'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import './globals.css'

const gilroy = localFont({
  src: [
    { path: '../public/fonts/Gilroy-Light.woff2', weight: '300', style: 'normal' },
    { path: '../public/fonts/Gilroy-Extrabold.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-gilroy',
})

export const metadata: Metadata = {
  title: { template: '%s | AquaTrek Hikkaduwa', default: 'AquaTrek Hikkaduwa' },
  description: 'Kayaking tours in Rathgama Lake, Hikkaduwa, Sri Lanka',
  metadataBase: new URL('https://aquatrekhikkaduwa.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={gilroy.variable}>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
