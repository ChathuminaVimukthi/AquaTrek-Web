import { Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display-loaded',
  display: 'swap',
})

const gilroy = localFont({
  src: [
    { path: '../public/fonts/Gilroy-Light.woff2',     weight: '300', style: 'normal' },
    { path: '../public/fonts/Gilroy-Extrabold.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-body-loaded',
  display: 'swap',
})

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  '@id': 'https://aquatrekhikkaduwa.com/#organization',
  name: 'AquaTrek Water Adventures',
  alternateName: 'AquaTrek Hikkaduwa',
  url: 'https://aquatrekhikkaduwa.com',
  logo: 'https://aquatrekhikkaduwa.com/logo-final.JPG',
  image: [
    'https://aquatrekhikkaduwa.com/images/main-carousel/carousel1.webp',
    'https://aquatrekhikkaduwa.com/images/sunrise-tour/mangrove-kayaking5.webp',
  ],
  description:
    'Family-run guided kayak and canoe tours on Rathgama Lake, Hikkaduwa, Sri Lanka. Sunrise wildlife tours, sunset mangrove adventures, and group kayaking experiences.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dodandugoda Rd, Dodanduwa',
    addressLocality: 'Hikkaduwa',
    addressRegion: 'Southern Province',
    addressCountry: 'LK',
    postalCode: '80240',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 6.1051642,
    longitude: 80.1312126,
  },
  telephone: '+94773366171',
  email: 'aquatrekhikka@gmail.com',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '06:00',
      closes: '18:00',
    },
  ],
  priceRange: 'Rs 1,000 – Rs 3,000',
  currenciesAccepted: 'LKR',
  paymentAccepted: 'Cash, WhatsApp transfer',
  sameAs: [
    'https://www.facebook.com/p/Aqua-Trek-Water-Adventures-Hikkaduwa-61574798053293/',
    'https://www.instagram.com/aquatrekhikka/',
    'https://www.tripadvisor.com/Attraction_Review-g304134-d28123099-Reviews-Aqua_Trek_Water_Adventures_Hikkaduwa-Hikkaduwa_Galle_District_Southern_Province.html',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '100',
    bestRating: '5',
    worstRating: '1',
  },
}

export const metadata: Metadata = {
  title: {
    template: '%s | AquaTrek Hikkaduwa',
    default: 'AquaTrek — Kayaking Tours on Rathgama Lake, Hikkaduwa',
  },
  description:
    'Guided kayak & canoe tours on Rathgama Lake, Hikkaduwa. Sunrise wildlife tours, sunset mangrove adventures, and family kayaking from Rs 1,000. Book via WhatsApp.',
  keywords:
    'kayaking Hikkaduwa, kayak tour Rathgama Lake, water adventures Hikkaduwa, mangrove kayaking Sri Lanka',
  metadataBase: new URL('https://aquatrekhikkaduwa.com'),
  openGraph: {
    siteName: 'AquaTrek Water Adventures',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-images/homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'Kayaking on Rathgama Lake at sunrise, Hikkaduwa, Sri Lanka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-images/homepage.jpg'],
  },
  icons: {
    icon: '/logo192.png',
    shortcut: '/logo192.png',
    apple: '/logo512.png',
  },
  alternates: {
    canonical: 'https://aquatrekhikkaduwa.com',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${gilroy.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
