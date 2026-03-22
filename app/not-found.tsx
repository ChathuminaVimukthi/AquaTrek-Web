import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="flex justify-center mb-8">
          <Image src="/images/logo.png" alt="AquaTrek Hikkaduwa" width={80} height={80} />
        </div>
        <h1
          className="text-8xl md:text-9xl font-bold text-brand-navy mb-4"
          style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
        >
          404
        </h1>
        <h2
          className="text-2xl md:text-3xl font-bold text-brand-navy mb-4"
          style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
        >
          Page Not Found
        </h2>
        <p
          className="text-gray-600 mb-8"
          style={{ fontFamily: '"Asap", Sans-serif' }}
        >
          The page you&apos;re looking for doesn&apos;t exist. Head back to explore our kayaking tours.
        </p>
        <Link
          href="/"
          className="bg-brand-navy hover:bg-primary text-white px-8 py-4 font-semibold transition-colors duration-300 inline-block"
          style={{ fontFamily: '"Asap", Sans-serif' }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
