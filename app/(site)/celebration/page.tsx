import type { Metadata } from 'next'
import CelebrationPackageClient from '@/components/CelebrationPackageClient'

export const metadata: Metadata = {
  title: 'Celebration Packages - Waterside Events',
  description:
    'Make your special occasions truly memorable with our customized celebration packages at Rathgama Lake. Birthdays, anniversaries, and group events in a beautiful lakeside setting.',
  openGraph: {
    title: 'Celebration Packages | AquaTrek Hikkaduwa',
    description: 'Celebrate by the water with AquaTrek\'s special event packages at Rathgama Lake.',
    url: 'https://aquatrekhikkaduwa.com/celebration',
  },
}

export default function CelebrationPage() {
  return <CelebrationPackageClient />
}
