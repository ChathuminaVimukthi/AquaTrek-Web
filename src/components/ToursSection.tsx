import React from 'react';
import { Link } from 'react-router-dom';

const ToursSection: React.FC = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(1); // Start with second card

  const tours = [
    {
      id: 'sunset-banyan-tree',
      image: '/images/sunset-tour/sunset-kayaking-1.jpg',
      title: 'Sunset & Banyan Tree Tour',
      description: 'Late afternoon adventure to a majestic Banyan tree. Ends at Dodanduwa fishing harbour with a stunning ocean sunset.',
      badge: 'Route A',
      badgeColor: 'bg-secondary',
      distance: '4.5 km',
      buttonColor: 'bg-secondary hover:bg-secondary-hover',
      textColor: 'text-secondary'
    },
    {
      id: 'sunrise-wildlife',
      image: '/images/sunrise-tour/mangrove-kayaking5.jpg',
      title: 'Sunrise & Wildlife Tour',
      description: 'Early morning serenity on calm waters. Explore mangrove canals, spot local wildlife, and watch traditional fishermen at work.',
      badge: 'Route B',
      badgeColor: 'bg-secondary',
      distance: '4.5 km',
      buttonColor: 'bg-secondary hover:bg-secondary-hover',
      textColor: 'text-secondary'
    },
    {
      id: 'celebration-package',
      image: '/images/garden-celeb/main.jpg',
      title: 'Celebrate by the Water',
      description: 'Create unforgettable memories with our special celebration packages. Perfect for birthdays, anniversaries, or any special occasion.',
      badge: 'Special',
      badgeColor: 'bg-secondary',
      distance: '',
      buttonColor: 'bg-secondary hover:bg-secondary-hover',
      textColor: 'text-accent-offer',
      route: '/celebration'
    }
  ];

  // Create infinite loop array: [...tours, ...tours, ...tours]
  const infiniteTours = [...tours, ...tours, ...tours];

  const scrollToCard = (index: number, smooth: boolean = true) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 610;
      const gap = 24;
      const containerWidth = container.offsetWidth;
      // Calculate position to center the card
      const scrollPosition = index * (cardWidth + gap) - (containerWidth / 2 - cardWidth / 2);
      container.scrollTo({ left: scrollPosition, behavior: smooth ? 'smooth' : 'auto' });
    }
  };

  const handlePrevious = () => {
    const newIndex = activeIndex - 1;
    setActiveIndex(newIndex);
    scrollToCard(newIndex);
    
    // After animation completes, check if we need to loop
    if (newIndex <= 2) {
      setTimeout(() => {
        const loopIndex = newIndex + 3;
        setActiveIndex(loopIndex);
        scrollToCard(loopIndex, false);
      }, 300);
    }
  };

  const handleNext = () => {
    const newIndex = activeIndex + 1;
    setActiveIndex(newIndex);
    scrollToCard(newIndex);
    
    // After animation completes, check if we need to loop
    if (newIndex >= 6) {
      setTimeout(() => {
        const loopIndex = newIndex - 3;
        setActiveIndex(loopIndex);
        scrollToCard(loopIndex, false);
      }, 300);
    }
  };

  const handleDotClick = (index: number) => {
    // Map dot index (0-2) to middle set (3-5)
    const targetIndex = index + 3;
    setActiveIndex(targetIndex);
    scrollToCard(targetIndex);
  };

  React.useEffect(() => {
    // Start at middle set, second card (index 4 = tours[1] of middle set)
    const initialIndex = 4; // Second card of middle set
    setActiveIndex(initialIndex);
    setTimeout(() => {
      scrollToCard(initialIndex, false);
    }, 100);
  }, []);



  const getActiveDotIndex = () => {
    return activeIndex % 3;
  };

  return (
    <div className="bg-primary-bg">
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-20 md:pt-5 md:pb-20">
        
      {/* Scrollable Cards Container - Horizontal on desktop, stacked on mobile */}
      <div className="relative">
        <div 
          ref={scrollContainerRef}
          className="overflow-hidden md:block hidden"
        >
          <div className="flex gap-6 pb-4">
            
            {infiniteTours.map((tour, index) => (
              <div key={index} className="flex-shrink-0 bg-white overflow-hidden w-[610px]">
                <div className="relative w-full h-[427px] overflow-hidden">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    draggable="false"
                  />
                  <div className={`absolute top-4 left-4 ${tour.badgeColor} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
                    {tour.badge}
                  </div>
                </div>
                <div className="p-6 max-w-[610px]">
                  <h3 
                    className="text-2xl font-bold text-brand-navy mb-3"
                    style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
                  >
                    {tour.title}
                  </h3>
                  <p 
                    className="text-brand-deep mb-4 leading-relaxed"
                    style={{ fontFamily: '"Asap", Sans-serif' }}
                  >
                    {tour.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`${tour.textColor} font-bold text-lg`}>{tour.distance}</span>
                    <Link to={tour.route || `/tour/${tour.id}`} className={`${tour.buttonColor} text-white px-6 py-2 font-semibold transition-colors duration-300`}>
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}

        </div>
        </div>

        {/* Mobile: Stack cards vertically - only show original 3 cards */}
        <div className="md:hidden flex flex-col gap-6">
          {tours.map((tour, index) => (
            <div key={index} className="flex-shrink-0 bg-white overflow-hidden w-full">
              <div className="relative w-full h-64 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover"
                  draggable="false"
                />
                <div className={`absolute top-4 left-4 ${tour.badgeColor} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
                  {tour.badge}
                </div>
              </div>
              <div className="p-6">
                <h3 
                  className="text-2xl font-bold text-brand-navy mb-3"
                  style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
                >
                  {tour.title}
                </h3>
                <p 
                  className="text-brand-deep mb-4 leading-relaxed"
                  style={{ fontFamily: '"Asap", Sans-serif' }}
                >
                  {tour.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`${tour.textColor} font-bold text-lg`}>{tour.distance}</span>
                  <Link to={tour.route || `/tour/${tour.id}`} className={`${tour.buttonColor} text-white px-6 py-2 font-semibold transition-colors duration-300`}>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows - Hidden on mobile */}
        <button 
          onClick={handlePrevious}
          className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
          aria-label="Previous tour"
        >
          <svg className="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={handleNext}
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 rounded-full p-3 shadow-lg transition-all duration-300 z-10"
          aria-label="Next tour"
        >
          <svg className="w-6 h-6 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot Indicators - Desktop only */}
      <div className="hidden md:flex justify-center gap-2 mt-6">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`transition-all duration-300 rounded-full ${
              getActiveDotIndex() === index 
                ? 'w-8 h-3 bg-secondary' 
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to tour ${index + 1}`}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default ToursSection;
