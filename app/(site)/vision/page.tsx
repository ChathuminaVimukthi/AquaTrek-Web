import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Lagoon Oasis Vision - Aqua Trek',
  description:
    "Discover Lagoon Oasis, Aqua Trek's future vision for a calm, nature-led lagoon space blending kayaking, wellness, creative work, and slow travel beside Rathgama Lagoon.",
  alternates: { canonical: 'https://aquatrekhikkaduwa.com/vision' },
  openGraph: {
    title: 'Lagoon Oasis Vision | AquaTrek Hikkaduwa',
    description: "Aqua Trek's future vision for a calm, nature-led lagoon space beside Rathgama Lagoon.",
    url: 'https://aquatrekhikkaduwa.com/vision',
  },
}

const becomingHighlights = [
  {
    title: 'Peaceful base for lagoon kayaking',
    body: 'Kayak launches start here with sunrise safety briefings, small-group departures, and guides who know every bend.',
  },
  {
    title: 'Wellness activities',
    body: 'Yoga, breath-work, and cold-water immersion sessions are introduced gradually and refined with real feedback.',
  },
  {
    title: 'Calm café and gathering space',
    body: 'A tea-first hangout for sketching, journaling, and sunset conversations that stay light and intentional.',
  },
  {
    title: 'Creative and long-stay friendly',
    body: 'Invites remote workers and slow travelers who value intention, silence, and lagoon-friendly routines.',
  },
]

const guardrails = [
  {
    title: 'We Are Not a Party Venue',
    bullets: ['No loud music', 'No DJs', 'No late-night events', 'No nightlife culture'],
  },
  {
    title: 'We Are Not a Resort',
    bullets: ['No all-inclusive packages', 'No mass tourism buses', 'No rigid schedules'],
  },
  {
    title: 'We Are Not a Bar',
    bullets: [
      'No alcohol sales (BYOB only when applicable)',
      'No drinking near the lagoon or kayak areas',
      'Sunset socials stay calm and unhurried',
    ],
  },
  {
    title: 'We Are Not a Coworking Office',
    bullets: ['No corporate vibe', 'No phone-call heavy zones', 'Work feels light, creative, and optional'],
  },
]

const guestTraits = [
  'Enjoy quiet mornings',
  'Appreciate nature and shared spaces',
  'Move at an unhurried pace',
  'Value respect more than rush',
]

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] md:h-[80vh]">
        <Image
          src="/images/main-carousel/carousel7.webp"
          alt="Lagoon Oasis future vision"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-center px-6 text-center">
          <p
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 600 }}
          >
            &ldquo;Lagoon Oasis&rdquo;
          </p>
          <h1
            className="text-2xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
          >
            A Future Vision by Aqua Trek
          </h1>
          <p
            className="text-white/80 text-lg md:text-xl max-w-3xl"
            style={{ fontFamily: '"Asap", Sans-serif' }}
          >
            Calm growth guided by water, community, and the rhythm of Rathgama Lagoon.
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="order-2 md:order-1 relative h-[60vh]">
            <Image
              src="/images/sunrise-tour/mangrove-kayaking2.webp"
              alt="Sunrise prep on the lagoon deck"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2 px-8 md:px-16 py-12 md:py-16 flex flex-col justify-center text-left bg-white">
            <p
              className="text-brand-gold uppercase tracking-[0.3em] mb-4 text-sm"
              style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 600 }}
            >
              Lagoon Oasis - Our Direction
            </p>
            <h2
              className="text-3xl md:text-6xl text-brand-navy font-bold mb-6"
              style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
            >
              Lagoon Oasis grows with intention
            </h2>
            <div className="space-y-6 text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>
              <p className="text-md leading-relaxed text-left">
                Lagoon Oasis is the long-term vision of Aqua Trek. Some elements are alive today; others are
                being thoughtfully prototyped, tested, and built over time so they feel natural to the lagoon.
              </p>
              <p className="text-md leading-relaxed text-left">
                Instead of launching everything at once, we move forward step by step, guided by our guests,
                the land, and what feels right for the lagoon environment.
              </p>
              <p className="text-md leading-relaxed text-left">
                This careful pace keeps Aqua Trek personal while allowing Lagoon Oasis to evolve without losing
                what makes it special.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-full bg-secondary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="px-8 md:px-16 py-12 md:py-16 flex flex-col justify-center text-left">
            <p
              className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4"
              style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 600 }}
            >
              Why Lagoon Oasis
            </p>
            <h2
              className="text-3xl md:text-6xl text-white font-bold mb-6"
              style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
            >
              Responding to Rathgama Lagoon with care
            </h2>
            <div className="space-y-6 text-white" style={{ fontFamily: '"Asap", Sans-serif' }}>
              <p className="text-md leading-relaxed text-left">
                The lagoon naturally invites stillness, movement, reflection, and connection with water. Lagoon
                Oasis responds to that invitation with humility and responsibility instead of noise, nightlife,
                or mass tourism.
              </p>
              <p className="text-md leading-relaxed text-left">
                We keep the space open for the experiences the water already suggests — paddling at sunrise,
                quiet work by the water, gentle wellness practices, and meaningful, low-key social moments.
              </p>
            </div>
          </div>
          <div className="relative h-[60vh]">
            <Image
              src="/images/sunrise-tour/sunrise-1.webp"
              alt="Sunrise over Rathgama Lagoon"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Section 3 - Becoming */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-12 md:py-16 text-left">
          <p
            className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 600 }}
          >
            What Lagoon Oasis Is (and Is Becoming)
          </p>
          <h2
            className="text-3xl md:text-6xl text-brand-navy font-bold mb-6"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
          >
            Built slowly, tested in real life
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {becomingHighlights.map((item) => (
              <div key={item.title}>
                <h3
                  className="text-2xl text-brand-navy font-semibold mb-3"
                  style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 700 }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-700 text-md leading-relaxed" style={{ fontFamily: '"Asap", Sans-serif' }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-md leading-relaxed" style={{ fontFamily: '"Asap", Sans-serif' }}>
            Every addition is tested small, shaped by guest feedback, and kept lagoon-friendly. Nothing is
            rushed. Nothing is forced.
          </p>
        </div>
      </div>

      {/* Section 4 - Living glimpses */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="order-2 md:order-1 relative h-[60vh]">
            <Image
              src="/images/sunset-tour/sunset-2.webp"
              alt="Slow sunset gathering"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2 px-8 md:px-16 py-12 md:py-16 flex flex-col justify-center text-left bg-white">
            <p
              className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4"
              style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 600 }}
            >
              Living glimpses
            </p>
            <h2
              className="text-3xl md:text-6xl text-brand-navy font-bold mb-6"
              style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
            >
              Scenes already unfolding at the lagoon
            </h2>
            <div className="space-y-6 text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>
              <p className="text-md leading-relaxed text-left">
                Some Lagoon Oasis elements are quietly alive right now: prototype decks, shade sails, wellness
                nooks, and work tables that drift between sketching stations and tea bars depending on the
                guests present.
              </p>
              <p className="text-md leading-relaxed text-left">
                We test them small, invite feedback, then keep only what feels respectful to the lagoon and
                neighborhood.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5 - Guardrails */}
      <div className="w-full bg-brand-navy">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-12 md:py-16 text-left">
          <p
            className="text-white uppercase tracking-[0.3em] text-sm mb-4"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 600 }}
          >
            What We Are Not
          </p>
          <h2
            className="text-3xl md:text-6xl text-white font-bold mb-12"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
          >
            Guardrails that protect the lagoon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guardrails.map((item) => (
              <div key={item.title}>
                <h3
                  className="text-2xl text-white font-semibold mb-4"
                  style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 700 }}
                >
                  {item.title}
                </h3>
                <ul className="space-y-2 text-white" style={{ fontFamily: '"Asap", Sans-serif' }}>
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="w-2 h-2 mt-2 rounded-full bg-brand-gold flex-shrink-0"></span>
                      <span className="text-md leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 6 - Commitment */}
      <div className="w-full bg-gray-50">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-12 md:py-16 text-left">
          <p
            className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 600 }}
          >
            Our Commitment
          </p>
          <h2
            className="text-3xl md:text-6xl text-brand-navy font-bold mb-6"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
          >
            Calm over crowds. Quality over quantity.
          </h2>
          <div className="space-y-6 text-gray-700" style={{ fontFamily: '"Gilroy", Sans-serif' }}>
            <p className="text-xl md:text-2xl leading-relaxed text-left">
              As Lagoon Oasis evolves, we will always choose respect for the lagoon over fast growth. Growth is
              measured in trust, not headcount.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed text-left">
              If you connect with these qualities, you will feel at home even as Lagoon Oasis keeps growing:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              {guestTraits.map((trait) => (
                <li key={trait} className="flex gap-3 items-start">
                  <span className="text-brand-gold text-xl md:text-2xl">•</span>
                  <span className="text-xl md:text-2xl leading-relaxed">{trait}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
