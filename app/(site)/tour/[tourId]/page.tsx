import type { Metadata } from 'next'
import TourDetailsClient from '@/components/TourDetailsClient'
import { JsonLd } from '@/components/JsonLd'

const tourData: Record<string, {
  title: string
  metaTitle: string
  metaDescription: string
  ogImage: string
  schema: object
}> = {
  'sunset-banyan-tree': {
    title: 'Sunset & Banyan Tree Kayak Tour',
    metaTitle: 'Sunset & Banyan Tree Kayak Tour — Hikkaduwa | AquaTrek',
    metaDescription:
      'Paddle to a majestic Banyan tree, explore mangrove channels, and watch the sunset from Dodanduwa fishing harbour. 4.5km guided tour from Rs 3,000. All ages welcome.',
    ogImage: '/og-images/sunset-tour.jpg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Sunset & Banyan Tree Kayak Tour',
      description:
        'Paddle to a majestic Banyan tree over the lake, explore mangrove channels alive with wildlife, and watch the sunset from Dodanduwa fishing harbour.',
      provider: {
        '@type': 'TouristAttraction',
        name: 'AquaTrek Water Adventures',
        url: 'https://aquatrekhikkaduwa.com',
      },
      touristType: ['Family', 'Couple', 'Solo traveller', 'Beginner'],
      offers: {
        '@type': 'Offer',
        price: '3000',
        priceCurrency: 'LKR',
        availability: 'https://schema.org/InStock',
        url: 'https://aquatrekhikkaduwa.com/booking?tour=sunset-banyan-tree',
      },
      itinerary: {
        '@type': 'ItemList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Departure & Paddle Start' },
          { '@type': 'ListItem', position: 2, name: 'Banyan Tree Stop' },
          { '@type': 'ListItem', position: 3, name: 'Mangrove Channels' },
          { '@type': 'ListItem', position: 4, name: 'Beach & Cliff Adventure' },
          { '@type': 'ListItem', position: 5, name: 'Sunset at the Harbour' },
          { '@type': 'ListItem', position: 6, name: 'Refreshments' },
        ],
      },
      duration: 'PT2H30M',
      maximumAttendeeCapacity: 35,
      availableLanguage: 'en',
    },
  },
  'sunrise-wildlife': {
    title: 'Sunrise & Wildlife Kayak Tour',
    metaTitle: 'Sunrise & Wildlife Kayak Tour — Rathgama Lake, Hikkaduwa | AquaTrek',
    metaDescription:
      'Early morning kayaking through mangrove canals. Spot kingfishers, herons, monitor lizards, and traditional fishermen at dawn on Rathgama Lake. From Rs 3,000.',
    ogImage: '/og-images/sunrise-tour.jpg',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: 'Sunrise & Wildlife Kayak Tour',
      description:
        'Early morning kayak tour through mangrove canals on Rathgama Lake. Spot kingfishers, herons, monitor lizards, and traditional fishermen at dawn.',
      provider: {
        '@type': 'TouristAttraction',
        name: 'AquaTrek Water Adventures',
        url: 'https://aquatrekhikkaduwa.com',
      },
      touristType: ['Nature lovers', 'Families', 'Wildlife enthusiasts', 'Beginners'],
      offers: {
        '@type': 'Offer',
        price: '3000',
        priceCurrency: 'LKR',
        availability: 'https://schema.org/InStock',
        url: 'https://aquatrekhikkaduwa.com/booking?tour=sunrise-wildlife',
      },
      duration: 'PT2H30M',
      startTime: '06:00',
      endTime: '09:00',
      maximumAttendeeCapacity: 35,
    },
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tourId: string }>
}): Promise<Metadata> {
  const { tourId } = await params
  const tour = tourData[tourId]
  if (!tour) {
    return { title: 'Kayaking Tour | AquaTrek Hikkaduwa' }
  }
  return {
    title: tour.metaTitle,
    description: tour.metaDescription,
    alternates: { canonical: `https://aquatrekhikkaduwa.com/tour/${tourId}` },
    openGraph: {
      title: tour.metaTitle,
      description: tour.metaDescription,
      url: `https://aquatrekhikkaduwa.com/tour/${tourId}`,
      images: [{ url: tour.ogImage, width: 1200, height: 630 }],
    },
  }
}

export default async function TourDetailsPage({
  params,
}: {
  params: Promise<{ tourId: string }>
}) {
  const { tourId } = await params
  const tour = tourData[tourId]

  return (
    <>
      {tour && <JsonLd data={tour.schema} />}
      <TourDetailsClient tourId={tourId} />
    </>
  )
}
