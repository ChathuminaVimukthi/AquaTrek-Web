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
  return <TourDetailsClient tourId={tourId} />
}
