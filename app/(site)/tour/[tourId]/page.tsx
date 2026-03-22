import type { Metadata } from 'next'
import TourDetailsClient from '@/components/TourDetailsClient'

const tourTitles: { [key: string]: string } = {
  'sunset-banyan-tree': 'Sunset Banyan Tree Tour',
  'sunrise-wildlife': 'Sunrise Wildlife Tour',
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tourId: string }>
}): Promise<Metadata> {
  const { tourId } = await params
  const title = tourTitles[tourId] || 'Kayaking Tour'
  return {
    title,
    description: `Book the ${title} at Rathgama Lake, Hikkaduwa, Sri Lanka. Experience unforgettable kayaking adventures with AquaTrek.`,
    alternates: { canonical: `https://aquatrekhikkaduwa.com/tour/${tourId}` },
    openGraph: {
      title: `${title} | AquaTrek Hikkaduwa`,
      url: `https://aquatrekhikkaduwa.com/tour/${tourId}`,
    },
  }
}

export default async function TourDetailsPage({
  params,
}: {
  params: Promise<{ tourId: string }>
}) {
  const { tourId } = await params
  const title = tourTitles[tourId] || 'Kayaking Tour'
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: title,
    description: `${title} at Rathgama Lake, Hikkaduwa, Sri Lanka. Guided kayaking adventure with wildlife, mangroves and stunning lake scenery.`,
    touristType: ['Nature lovers', 'Families', 'Wildlife enthusiasts'],
    provider: {
      '@type': 'LocalBusiness',
      name: 'AquaTrek Hikkaduwa',
      url: 'https://aquatrekhikkaduwa.com',
    },
    url: `https://aquatrekhikkaduwa.com/tour/${tourId}`,
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <TourDetailsClient tourId={tourId} />
    </>
  )
}
