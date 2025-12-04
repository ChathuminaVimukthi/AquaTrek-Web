import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

interface Tour {
  id: string;
  title: string;
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  mainTitle: string;
  mainDescription: string;
  tourCards: {
    image: string;
    title: string;
  }[];
  tourInfoBg: string;
  tourInfoTitle: string;
  tourInfoSubtitle: string;
  tourInfoLeft: {
    label: string;
    value: string;
    color: string;
  }[];
  tourInfoRight: {
    label: string;
    value: string;
    color: string;
  }[];
  scheduleImages: string[];
  schedule: {
    icon: string;
    title: string;
    description: string;
  }[];
}

const TourDetails: React.FC = () => {
  const { tourId } = useParams<{ tourId: string }>();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tourId]);

  const tours: { [key: string]: Tour } = {
    'sunset-banyan-tree': {
      id: 'sunset-banyan-tree',
      title: 'Sunset & Banyan Tree Tour',
      heroImage: '/images/sunset-tour/sunset-1.JPEG',
      heroTitle: 'Sunset & Banyan Tree Adventure!',
      heroSubtitle: '',
      mainTitle: 'Sunset Over Mangroves: The Banyan Trail!',
      mainDescription: 'Explore a majestic Banyan tree over the lake, climb and snap unforgettable photos, then paddle through mangrove channels alive with wildlife, including playful fruit bats. End your evening at Dodanduwa beach with cliff-top views and a golden sunset over the ocean — adventure, nature, and serenity in one unforgettable tour.',
      tourCards: [
        { image: '/images/sunset-tour/banyan-tree1.JPEG', title: 'Banyan Tree' },
        { image: '/images/sunset-tour/banyan-tree2.JPG', title: 'Under The Bridges' },
        { image: '/images/sunset-tour/sunset-2.jpg', title: 'Sunset & Beach' }
      ],
      tourInfoBg: '/images/sunset-tour/sunset-kayaking1.JPG',
      tourInfoTitle: 'Tour Info',
      tourInfoSubtitle: 'Experience the Magic of Sunset on the beach',
      tourInfoLeft: [
        { label: 'Distance', value: '4.5km', color: 'text-white' },
        { label: 'Duration', value: '2-3 Hours', color: 'text-white' },
        { label: 'Availablity', value: 'All around the year', color: 'text-white' },
        { label: 'Participants', value: '2 to 35 Participants', color: 'text-white' }
      ],
      tourInfoRight: [
        { label: 'Difficulty', value: 'Beginner', color: 'text-white' },
        { label: 'For', value: 'All Ages', color: 'text-white' },
        { label: 'Best Time', value: '3:00 PM - 6:00 PM', color: 'text-white' },
        { label: 'Location', value: 'Rathgama Lake', color: 'text-white' }
      ],
      scheduleImages: [
        '/images/sunset-tour/sunset-cliff1.JPEG',
        '/images/sunset-tour/sunset-1.JPEG',
        '/images/sunset-tour/sunset-2.jpg',
        '/images/sunset-tour/banyan-tree1.JPEG',
        '/images/sunset-tour/banyan-tree2.JPG',
        '/images/sunset-tour/banyan-tree3.jpg',
        '/images/sunset-tour/bayan-tree4.JPEG',
        '/images/sunset-tour/banyan-tree5.JPEG',
        '/images/sunset-tour/cliff-1.JPG',
        '/images/sunset-tour/sunset-kayaking1.JPG',
        '/images/sunset-tour/sunset-kayaking2.JPEG'
      ],
      schedule: [
        {
            icon: '🌅',
            title: 'Departure & Paddle Start',
            description: 'Meet at our starting point and get ready for an evening of adventure. We’ll provide all gear, a friendly briefing, and a refreshing welcome drink before you set off across the calm waters.'
        },
        {
            icon: '🌳',
            title: 'Banyan Tree Stop',
            description: 'Paddle to a stunning Banyan tree overhanging the lake. Climb its roots, explore its sprawling branches, take memorable photos, or simply relax in the serene surroundings.'
        },
        {
            icon: '🚣',
            title: 'Mangrove Channels',
            description: 'Continue your journey through winding mangrove pathways alive with local wildlife. Spot fish beneath the water and watch fruit bats flit above as dusk settles over the lake.'
        },
        {
            icon: '🎣',
            title: 'Local Culture & Wildlife',
            description: 'Along the way, observe the natural rhythms of the lake and catch glimpses of local fishermen at work. Our guides will help you spot birds returning to their roosts and other evening-active creatures.'
        },
        {
            icon: '🏖️',
            title: 'Beach & Cliff Adventure',
            description: 'Reach Dodanduwa beach and climb a small cliff for panoramic views. Feel the thrill of exploring as the sky transforms with the colors of sunset.'
        },
        {
            icon: '🌅',
            title: 'Sunset at the Harbour',
            description: 'Watch the sun sink into the horizon over the ocean at Dodanduwa fishing harbour. Enjoy the warm glow reflecting on the water — a magical end to your evening adventure.'
        },
        {
            icon: '☕',
            title: 'Refreshments',
            description: 'Return to shore to enjoy a cup of freshly brewed Ceylon tea and a light snack. Relax, chat with fellow adventurers, and reflect on your unforgettable evening on the lake.'
        }
    ]
    },
    'sunrise-wildlife': {
      id: 'sunrise-wildlife',
      title: 'Sunrise & Wildlife Tour',
      heroImage: '/images/sunrise-tour/sunrise1.JPG',
      heroTitle: 'Experience Nature at Dawn',
      heroSubtitle: '',
      mainTitle: 'Sunrise & Wildlife Adventure',
      mainDescription: 'Begin your day with the quiet magic of dawn on Rathgama Lake. Glide across glass-still waters as the sky softens into shades of gold and rose. Watch the mangroves awaken, birds take flight, and local fishermen begin their morning rituals — all while floating in a world that feels calm, untouched, and beautifully alive.',
      tourCards: [
        { image: '/images/sunrise-tour/sunrise1.JPG', title: 'Early Morning Serenity' },
        { image: '/images/sunrise-tour/bird2.JPG', title: 'Wildlife Spotting' },
        { image: '/images/sunrise-tour/mangrove-kayaking3.JPEG', title: 'Mangrove Exploration' }
      ],
      tourInfoBg: '/images/sunrise-tour/mangrove-kayaking2.JPEG',
      tourInfoTitle: 'Tour Info',
      tourInfoSubtitle: 'Experience the Magic of Sunrise on the Lake',
      tourInfoLeft: [
        { label: 'Distance', value: '4.5 km', color: 'text-white' },
        { label: 'Duration', value: '2-3 Hours', color: 'text-white' },
        { label: 'Availablity', value: 'All around the year', color: 'text-white' },
        { label: 'Participants', value: '2 to 35 Participants', color: 'text-white' }
      ],
      tourInfoRight: [
        { label: 'Difficulty', value: 'Beginner', color: 'text-white' },
        { label: 'For', value: 'All Ages', color: 'text-white' },
        { label: 'Best Time', value: '6:00 AM - 9:00 AM', color: 'text-white' },
        { label: 'Location', value: 'Rathgama Lake', color: 'text-white' }
      ],
      scheduleImages: [
        '/images/sunrise-tour/sunrise1.JPG',
        '/images/main-carousel/carousel2.jpg',
        '/images/sunrise-tour/bird1.JPG',
        '/images/sunrise-tour/bird2.JPG',
        '/images/sunrise-tour/watermonitor1.JPG',
        '/images/sunrise-tour/mangrove-kayaking3.JPEG',
        '/images/sunrise-tour/mangrove-kayaking4.JPG',
        '/images/sunrise-tour/mangrove-kayaking5.JPEG',
      ],
      schedule: [
        {
          icon: '🌅',
          title: 'Arrival',
          description: 'Arrive just before sunrise and feel the quiet beauty of the early morning settle around you. We’ll greet you with a warm welcome and a refreshing welcome drink to start your day right. After a friendly briefing and getting you set with gear, you’ll have a moment to relax and take in the stillness of the waking lake.'
        },
        {
          icon: '🚣',
          title: 'Sunrise Paddle',
          description: 'Push off gently and glide into a mirror-like lake as the first light breaks over the horizon. The waters are calm, the air cool, and every paddle stroke feels effortless. The colors shift softly across the sky as the morning unfolds — a moving, living sunrise that you get to experience from the water.'
        },
        {
          icon: '🦅',
          title: 'Wildlife Observation',
          description: 'This is when the lake is most alive. Watch kingfishers dart like flashes of blue, herons move with elegant stillness, and migrating birds call overhead. Our guides will help point out species, share fun facts, and give you insight into how this thriving ecosystem supports so many creatures.'
        },
        {
          icon: '🌳',
          title: 'Mangrove Channels',
          description: 'Follow narrow pathways into the maze of mangrove forests. Here, the world grows quiet — you’ll hear only gentle water sounds and the soft rustle of leaves. Spot curious crabs on twisted roots, tiny fish flashing beneath the surface, and marvel at how the mangroves protect the shoreline and nurture life.',
        },
        {
          icon: '🎣',
          title: 'Local Culture',
          description: 'Experience an authentic piece of lake life. You’ll see local fishermen using ancestral techniques — nets cast by hand, small boats gliding silently — practices that have sustained families here for generations. It’s not a performance — it’s daily life unfolding naturally around you.'
        },
        {
          icon: '☕',
          title: 'Refreshments',
          description: 'We’ll return to shore to enjoy a cup of freshly brewed Ceylon tea along with a light snack — the perfect way to unwind after your paddle. Take your time, chat with fellow adventurers, reflect on your favorite moments, and soak in the final morning views of the calm lake.'
        }
      ]
    }
  };

  const tour = tourId ? tours[tourId] : null;

  // SEO data based on tour
  const getTourSEO = () => {
    if (tourId === 'sunset-banyan-tree' && tour) {
      return {
        title: 'Sunset & Banyan Tree Kayaking Tour',
        description: 'Experience a magical sunset kayaking tour in Rathgama Lake. Explore a majestic Banyan tree, paddle through mangrove channels, and watch the golden sunset at Dodanduwa beach. 2-3 hours, all ages welcome.',
        keywords: 'sunset kayaking tour, Banyan tree tour, mangrove kayaking, Dodanduwa beach sunset, evening kayaking Hikkaduwa, nature adventure Sri Lanka',
        structuredData: {
          "@context": "https://schema.org",
          "@type": "TouristAttraction",
          "name": "Sunset & Banyan Tree Kayaking Tour",
          "description": tour.mainDescription,
          "image": `https://aquatrekhikkaduwa.com${tour.heroImage}`,
          "touristType": "All Ages",
          "availableLanguage": ["en"],
          "isAccessibleForFree": false,
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceRange": "Contact for pricing"
          },
          "location": {
            "@type": "Place",
            "name": "Rathgama Lake",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hikkaduwa",
              "addressCountry": "LK"
            }
          }
        }
      };
    } else if (tourId === 'sunrise-wildlife' && tour) {
      return {
        title: 'Sunrise & Wildlife Kayaking Tour',
        description: 'Begin your day with a magical sunrise kayaking tour in Rathgama Lake. Watch birds take flight, explore mangroves, and witness the dawn awaken the lake. Perfect for nature lovers and photographers.',
        keywords: 'sunrise kayaking, wildlife tour, birdwatching kayaking, dawn kayaking Hikkaduwa, nature photography, early morning tour Sri Lanka',
        structuredData: {
          "@context": "https://schema.org",
          "@type": "TouristAttraction",
          "name": "Sunrise & Wildlife Kayaking Tour",
          "description": tour.mainDescription,
          "image": `https://aquatrekhikkaduwa.com${tour.heroImage}`,
          "touristType": "All Ages",
          "availableLanguage": ["en"],
          "isAccessibleForFree": false,
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceRange": "Contact for pricing"
          },
          "location": {
            "@type": "Place",
            "name": "Rathgama Lake",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hikkaduwa",
              "addressCountry": "LK"
            }
          }
        }
      };
    }
    return {
      title: 'Kayaking Tours',
      description: 'Explore Rathgama Lake with AquaTrek Hikkaduwa kayaking tours.',
      keywords: 'kayaking tours, Rathgama Lake, Hikkaduwa',
      structuredData: {}
    };
  };

  const seoData = getTourSEO();

  // Auto-advance carousel
  useEffect(() => {
    if (tour && tour.scheduleImages) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % tour.scheduleImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [tour]);

  if (!tour) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 
            className="text-4xl font-bold text-brand-navy mb-4"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
          >
            Tour Not Found
          </h1>
          <button
            onClick={() => navigate('/')}
            className="text-primary hover:text-primary-hover"
            style={{ fontFamily: '"Asap", Sans-serif' }}
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={`https://aquatrekhikkaduwa.com/tour/${tourId}`}
        structuredData={seoData.structuredData}
        ogImage={tour ? `https://aquatrekhikkaduwa.com${tour.heroImage}` : undefined}
      />
      {/* Hero Section */}
      <div className="w-full h-screen relative">
        <img 
          src={tour.heroImage} 
          alt={tour.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-start px-4 pt-24 md:pt-32">
          <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
            <div className="max-w-md">
              {/* Back Button */}
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-white hover:text-primary transition-colors mb-6"
                style={{ fontFamily: '"Asap", Sans-serif' }}
              >
                <ArrowLeftIcon className="w-5 h-5" />
                <span className="text-sm font-semibold">Back</span>
              </button>

              <h1 
                className="text-4xl md:text-8xl font-bold text-white mb-6 text-left leading-tight"
                style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
              >
                {tour.heroTitle}
              </h1>
              <button 
                className="bg-brand-deep text-white px-8 py-3 font-semibold hover:bg-opacity-90 transition-colors"
                style={{ fontFamily: '"Asap", Sans-serif' }}
              >
                Book Your Slot Right Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="w-full bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <p 
            className="text-center text-primary mb-4"
            style={{ fontFamily: '"Asap", Sans-serif', fontSize: '14px', fontWeight: 600 }}
          >
            Sunset & Beach Adventure
          </p>
          <h2 
            className="text-3xl md:text-7xl font-bold text-brand-navy text-center mb-8"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
          >
            {tour.mainTitle}
          </h2>
          <p 
            className="text-center text-brand-deep max-w-4xl mx-auto leading-relaxed mb-12"
            style={{ fontFamily: '"Asap", Sans-serif' }}
          >
            {tour.mainDescription}
          </p>

          {/* Three Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {tour.tourCards.map((card, index) => (
              <div key={index} className="overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-64 object-cover"
                />
                <div className="py-6">
                  <h3 
                    className="text-xl md:text-2xl font-bold text-brand-navy text-center"
                    style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
                  >
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tour Info Section with Background */}
      <div className="w-full relative py-20 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={tour.tourInfoBg} 
            alt="Tour Info Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/50 to-brand-deep/75"></div>
        </div>

        <div className="relative mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Left Side - Kayak Image - Animate from bottom */}
            <div className="w-full md:w-1/2 flex items-center justify-center animate-[slideUp_1s_ease-out]">
              <img 
                src="/FinalMap.png" 
                alt="Kayak" 
                className="w-full max-w-md"
              />
            </div>

            {/* Right Side - Tour Info - Animate from top */}
            <div className="w-full md:w-1/2 text-left animate-[slideDown_1s_ease-out]">
              <p 
                className="text-secondary-hover mb-2 text-xl md:text-2xl"
                style={{ fontFamily: '"Gilroy", Sans-serif' }}
              >
                {tour.tourInfoSubtitle}
              </p>
              <h2 
                className="text-4xl md:text-6xl font-bold text-white mb-12"
                style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
              >
                {tour.tourInfoTitle}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                {/* Left Column */}
                <div className="space-y-8">
                  {tour.tourInfoLeft.map((item, index) => (
                    <div key={index}>
                      <p 
                        className="text-primary text-md md:text-xl mb-1"
                        style={{ fontFamily: '"Gilroy", Sans-serif' }}
                      >
                        {item.label}
                      </p>
                      <p 
                        className={`text-xl md:text-3xl font-bold ${item.color}`}
                        style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
                      >
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {tour.tourInfoRight.map((item, index) => (
                    <div key={index}>
                      <p 
                        className="text-primary text-md md:text-xl mb-1"
                        style={{ fontFamily: '"Gilroy", Sans-serif' }}
                      >
                        {item.label}
                      </p>
                      <p 
                        className={`text-xl md:text-3xl font-bold ${item.color}`}
                        style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
                      >
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h3 
                  className="text-3xl md:text-4xl font-bold text-white text-left mb-2"
                  style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
                >
                  Family Tour Info
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Section */}
      <div className="w-full bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Title and Image */}
            <div className="flex flex-col justify-center items-start space-y-8">
              <h2 
                className="text-3xl md:text-7xl font-bold text-brand-navy text-left"
                style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
              >
                Discover the schedule
              </h2>
              
              <div className="flex items-center justify-center w-full relative">
                <div className="relative w-full overflow-hidden">
                  {tour.scheduleImages.map((image, index) => (
                    <div
                      key={index}
                      className={`transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`Schedule ${index + 1}`} 
                        className="w-full h-auto object-cover max-h-[600px]"
                      />
                    </div>
                  ))}
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + tour.scheduleImages.length) % tour.scheduleImages.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 transition-all z-20 bg-black/30 hover:bg-black/50 rounded-full p-2"
                    aria-label="Previous image"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % tour.scheduleImages.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 transition-all z-20 bg-black/30 hover:bg-black/50 rounded-full p-2"
                    aria-label="Next image"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {tour.scheduleImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentSlide ? 'w-8 h-3 bg-primary' : 'w-3 h-3 bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Schedule Items */}
            <div className="space-y-2 text-left">
              {tour.schedule.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center text-secondary text-2xl">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-bold text-secondary mb-2 text-left"
                      style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="text-brand-deep leading-relaxed text-left"
                      style={{ fontFamily: '"Asap", Sans-serif' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default TourDetails;
