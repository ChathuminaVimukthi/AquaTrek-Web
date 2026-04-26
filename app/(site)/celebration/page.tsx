import type { Metadata } from 'next'
import CelebrationPackageClient from '@/components/CelebrationPackageClient'

export const metadata: Metadata = {
  title: 'Celebrate by the Water — Events at Rathgama Lake | AquaTrek',
  description:
    'Birthdays, anniversaries, proposals, and group events on Rathgama Lake, Hikkaduwa. Personalised lakeside celebration packages for up to 20 people. Book via WhatsApp.',
  alternates: { canonical: 'https://aquatrekhikkaduwa.com/celebration' },
  openGraph: {
    title: 'Celebrate by the Water | AquaTrek Hikkaduwa',
    description: 'Personalised lakeside celebration packages — birthdays, anniversaries, and group events on Rathgama Lake.',
    url: 'https://aquatrekhikkaduwa.com/celebration',
    images: [{ url: '/og-images/homepage.jpg', width: 1200, height: 630, alt: 'Lakeside celebration event at AquaTrek, Rathgama Lake' }],
  },
}

export default function CelebrationPage() {
  return <CelebrationPackageClient />
}
