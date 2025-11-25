import React from 'react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const carouselImages = [
    '/carousel1.jpg',
    '/carousel2.jpg',
    '/carousel3.jpg',
    '/carousel4.jpg',
    '/carousel5.JPG',
    '/carousel6.JPG',
    '/carousel7.jpg',
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <style>{`
        @keyframes floatKayak {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .kayak-float {
          animation: floatKayak 3s ease-in-out infinite;
        }
      `}</style>

      {/* Gradient Background Section */}
      <div className="overflow-x-hidden" style={{ background: 'linear-gradient(90deg, #EBFBFF 30%, #FFFFFF 100%)' }}>
      {/* Hero Section */}
      <div className="relative px-4 py-20 pb-0">
        {/* Decorative wave paths - Left Side */}
        <img 
          src="/thbhth-1024x441.png" 
          alt="" 
          className="absolute top-15 opacity-60 hidden md:block"
          style={{ width: 'var(--container-widget-width, 30%)', maxWidth: '30%', left: '20px' }}
        />

        {/* Decorative wave paths - Right Side */}
        <img 
          src="/thbhth-1024x441.png" 
          alt="" 
          className="absolute top-15 opacity-60 hidden md:block"
          style={{ width: 'var(--container-widget-width, 30%)', maxWidth: '30%', right: '20px' }}
        />

        {/* Main Content */}
        <div className="mx-auto mt-16 max-w-4xl text-center">
          <h1 
            className="mb-6 font-black uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[104px]"
            style={{
              color: '#1A1A1A',
              fontFamily: '"Roboto", Sans-serif',
              fontWeight: 600,
              lineHeight: '1.25em',
              letterSpacing: '6px'
            }}
          >
            KAYAKING
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>
            Take a 100% clear kayak guided tour today! We take you where there
            is a world of wonder around you, but also, under you.
          </p>
          <button 
            className="rounded-full px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-all cursor-pointer bg-cover bg-center hover:bg-gradient-to-r hover:from-red-600 hover:to-yellow-500"
            style={{
              backgroundImage: 'url(/but0bhf.png)',
              fontFamily: '"Roboto", Sans-serif',
              fontWeight: 700,
              height: '60px',
              fontSize: '17px',
            }}
          >
            Start Now
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full pt-0 -mt-20 md:-mt-40 lg:-mt-60 overflow-hidden">
        <div className="relative grid grid-cols-1 md:grid-cols-2">
          {/* Travelers Choice Badge */}
          <div 
            className="flex items-center justify-center space-x-4 p-8 min-h-[300px] md:min-h-[700px] mb-0"
            style={{
              backgroundImage: 'url(/jeirugjr.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex-shrink-0">
              <svg className="h-16 w-16" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="30" fill="none" stroke="#1f2937" strokeWidth="2" />
                <path
                  d="M 20 32 L 15 22 L 20 22 L 32 15 L 44 22 L 49 22 L 44 32 L 49 42 L 44 42 L 32 49 L 20 42 L 15 42 Z"
                  fill="#1f2937"
                />
                <circle cx="32" cy="32" r="8" fill="white" />
                <path
                  d="M 32 28 L 33.5 31 L 36.5 31 L 34 33 L 35 36 L 32 34 L 29 36 L 30 33 L 27.5 31 L 30.5 31 Z"
                  fill="#1f2937"
                />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="mb-1 text-lg font-bold text-gray-900" style={{ fontFamily: '"Roboto", Sans-serif' }}>Travelers choice</h3>
              <p className="text-sm text-gray-600" style={{ fontFamily: '"Asap", Sans-serif' }}>
                #1 best of the best travelers kayak entertainment of the year
              </p>
            </div>
          </div>

          {/* Kayak Image - Mobile View (stacked) */}
          <div className="absolute left-1/3 -translate-x-1/4 md:hidden" style={{zIndex: 10, top: '282px'}}>
            <img 
              src="/8ghu-1024x177.png" 
              alt="Kayak" 
              className="kayak-float w-full max-w-md h-auto"
            />
          </div>

          {/* Image Carousel */}
          <div className="flex items-end justify-center min-h-[200px] md:min-h-[700px] pt-0 md:pt-0">
            <div className="relative w-full h-[455px] overflow-hidden shadow-lg">
              {/* Carousel Images */}
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Kayaking tour ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors z-10"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors z-10"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Kayak Image - Floating on top */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block" style={{ width: '35%', zIndex: 10, marginTop: '160px', marginLeft: '-25%'}}>
            <img 
              src="/8ghu-1024x177.png" 
              alt="Kayak" 
              className="kayak-float w-full h-auto"
            />
          </div>

          
        </div>

        {/* Our Tours Section */}
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 relative">
          <div 
            className="absolute inset-0 opacity-[0.8] bg-contain bg-left bg-no-repeat pointer-events-none"
            style={{
              backgroundImage: 'url(/wave-bg-isolated.png)',
              backgroundSize: '100% auto',
            }}
          ></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
            {/* Title - Mobile Only (Before Map) */}
            <div className="md:hidden flex flex-col items-center">
              <img src="/payjmpng-100x100.png" alt="" className="w-12 h-12 mb-4" />
              <h2 className="text-4xl font-bold text-gray-900 uppercase text-center" style={{ fontFamily: '"Roboto", Sans-serif' }}>
                Pick Your Perfect Tour
              </h2>
            </div>

            {/* Tour Map - Left Side */}
            <div className="relative group cursor-pointer" onClick={() => window.open('/FinalMap.png', '_blank')}>
              <img 
                src="/FinalMap.png" 
                alt="Tour Map" 
                className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center">
                <svg 
                  className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>

            {/* Description - Right Side */}
            <div className="space-y-6">
              <div className="hidden md:flex flex-col items-center">
                <img src="/payjmpng-100x100.png" alt="" className="w-12 h-12 mb-4" />
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase text-center" style={{ fontFamily: '"Roboto", Sans-serif' }}>
                  Pick Your Perfect Tour
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: '"Asap", Sans-serif' }}>
                Discover the magic of Rathgama Lake with our two unique kayaking routes—each crafted to highlight different moods of nature. Whether you're seeking sunrise tranquility or a golden sunset over the ocean, we've got the perfect journey for you.
              </p>
              <p className="text-base text-gray-600 italic" style={{ fontFamily: '"Asap", Sans-serif' }}>
                Routes are also customizable upon request — just let us know your preferences and we'll tailor the experience to you!
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: '"Roboto", Sans-serif' }}>
                    Route A – Evening Tour with Sunset & Banyan Tree Experience (4.5 km)
                  </h4>
                  <p className="text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>
                    This route is ideal for late afternoon into evening. Your adventure takes you first to a stunning location where a majestic Banyan tree extends beautifully over the lake—perfect for photos, relaxing, and even tree-climbing for the adventurous.
                    The tour continues to the beach near the Dodanduwa fishing harbour, where you'll climb a small rocky outcrop and witness a spectacular ocean sunset.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: '"Roboto", Sans-serif' }}>
                    Route B – Morning Sunrise & Wildlife Tour (4.5 km)
                  </h4>
                  <p className="text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>
                    Best enjoyed early around 6am, this route starts with sunrise reflecting across calm waters, creating an atmosphere of pure serenity. As you travel deeper into nature-rich mangrove canals, you'll have the opportunity to witness local fishermen at work — using traditional nets and homemade fishing rods — giving you an authentic glimpse into rural Sri Lankan life.
Combined with diverse bird sightings and the soothing quiet of the morning lake, this tour is a true immersion into nature and culture.
                  </p>
                </div>
              </div>

              <button 
                onClick={() => window.open('/FinalMap.png', '_blank')}
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                View Full Map
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="relative w-full overflow-hidden" style={{ height: '100px' }}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1000 100" 
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-full rotate-180"
          >
            <path 
              className="fill-white" 
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
              c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
              c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
            />
          </svg>
        </div>
      </div>
      </div>

      {/* White Background Section with Background Image */}
      <div className="relative bg-white">
        <div 
          className="absolute inset-0 opacity-[0.8] bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: 'url(/hgvjhv.png)',
            backgroundSize: 'cover',
          }}
        ></div>
        {/* Tour Details Section */}
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="flex flex-col items-center mb-12">
            <img src="/payjmpng-100x100.png" alt="" className="w-12 h-12 mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase text-center" style={{ fontFamily: '"Roboto", Sans-serif' }}>
              Before You Paddle — Good to Know
            </h2>
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="flex items-start justify-center md:justify-end space-x-4 md:pr-8">
              <svg className="w-8 h-8 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: '"Roboto", Sans-serif' }}>Distance</h3>
                <p className="text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>~4.5km per route</p>
              </div>
            </div>

            <div className="flex items-start justify-center space-x-4 md:pl-8">
              <svg className="w-8 h-8 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: '"Roboto", Sans-serif' }}>Duration</h3>
                <p className="text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>~2–3 hours</p>
              </div>
            </div>
          </div>

          {/* Package Includes */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: '"Roboto", Sans-serif' }}>Package Includes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center md:justify-end space-x-3 md:pr-8">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>Professional guided tour</span>
              </div>

              <div className="flex items-center justify-center space-x-3 md:pl-8">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <span className="text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>Welcome drink upon arrival</span>
              </div>

              <div className="flex items-center justify-center md:justify-end space-x-3 md:pr-8">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>Complimentary water bottle to keep</span>
              </div>

              <div className="flex items-center justify-center space-x-3 md:pl-8">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>Refreshing tea after your adventure</span>
              </div>
            </div>
          </div>

          {/* Safety Features */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: '"Roboto", Sans-serif' }}>Safety Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="flex items-center justify-center md:justify-end space-x-3 md:pr-4">
                <svg className="w-6 h-6 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>Quality life jackets for all participants</span>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <svg className="w-6 h-6 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>Waterproof mobile phone cases</span>
              </div>

              <div className="flex items-center justify-center space-x-3 md:pl-4">
                <svg className="w-6 h-6 text-orange-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>Experienced guide accompanying your tour</span>
              </div>
            </div>
          </div>

          {/* On-Site Amenities */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center" style={{ fontFamily: '"Roboto", Sans-serif' }}>On-Site Amenities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center md:justify-end space-x-3 md:pr-8">
                <svg className="w-6 h-6 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <span className="text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>Convenient parking</span>
              </div>

              <div className="flex items-center justify-center space-x-3 md:pl-8">
                <svg className="w-6 h-6 text-purple-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>Clean bathrooms & changing rooms</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider 2*/}
        <div className="relative w-full overflow-hidden" style={{ height: '100px', background: 'linear-gradient(90deg, #EBFBFF 30%, #FFFFFF 100%)' }}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1000 100" 
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full h-full rotate-180"
          >
            <defs>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="100%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path 
              fill="url(#waveGradient2)"
              d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
	c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
	c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
            />
          </svg>
        </div>
      </div>

      {/* Courses/Pricing Section */}
      <div style={{ background: 'linear-gradient(90deg, #EBFBFF 30%, #FFFFFF 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          {/* Section Title */}
          <div className="flex flex-col items-center mb-4">
            <img src="/payjmpng-100x100.png" alt="" className="w-12 h-12 mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase text-center" style={{ fontFamily: '"Roboto", Sans-serif', letterSpacing: '4px' }}>
              Reserve Your Adventure
            </h2>
          </div>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-2xl mx-auto" style={{ fontFamily: '"Asap", Sans-serif' }}>
            Take a 100% clear kayak guided tour today! We take you where there is a world of wonder around you, but also, under you.
          </p>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Standard Plan */}
            <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col">
              <div className="inline-block self-start">
                <span className="bg-orange-500 text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-wider" style={{ fontFamily: '"Roboto", Sans-serif' }}>
                  Standard
                </span>
              </div>
              
              <div className="mt-8 mb-8">
                <span className="text-5xl font-black text-gray-900" style={{ fontFamily: '"Roboto", Sans-serif' }}>$10</span>
                <span className="text-xl text-gray-600 ml-2" style={{ fontFamily: '"Asap", Sans-serif' }}>/tour</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow" style={{ fontFamily: '"Asap", Sans-serif' }}>
                <li className="text-gray-700 text-center">Pick from Tour A / B</li>
                <li className="text-gray-700 text-center">All inclusive</li>
                <li className="text-gray-700 text-center">Guided / Non-Guided</li>
              </ul>

              <button className="w-full py-3 px-6 bg-gray-900 text-white rounded-full font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors" style={{ fontFamily: '"Roboto", Sans-serif' }}>
                Book Now
              </button>
            </div>

            {/* Customized Plan */}
            <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col">
              <div className="inline-block self-start">
                <span className="bg-blue-600 text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-wider" style={{ fontFamily: '"Roboto", Sans-serif' }}>
                  Customized
                </span>
              </div>
              
              <div className="mt-8 mb-8">
                <span className="text-5xl font-black text-gray-900" style={{ fontFamily: '"Roboto", Sans-serif' }}>$10</span>
                <span className="text-xl text-gray-600 ml-2" style={{ fontFamily: '"Asap", Sans-serif' }}>/2 hours</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow" style={{ fontFamily: '"Asap", Sans-serif' }}>
                <li className="text-gray-700 text-center">Customized tour</li>
                <li className="text-gray-700 text-center">All inclusive</li>
                <li className="text-gray-700 text-center">Guided / Non-Guided</li>
                <li className="text-blue-600 font-semibold text-center">+$2 per extra hour</li>
              </ul>

              <button className="w-full py-3 px-6 border-2 border-gray-900 text-gray-900 rounded-full font-bold uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-colors" style={{ fontFamily: '"Roboto", Sans-serif' }}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section - Blue Gradient Background */}
      <div style={{ background: 'linear-gradient(90deg, #EBFBFF 30%, #FFFFFF 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          {/* Reviews */}
          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div className="elfsight-app-0a0e1efb-32bc-4121-afdd-57d5990c11a6" data-elfsight-app-lazy></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
