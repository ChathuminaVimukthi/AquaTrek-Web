import React from 'react';
import OptimizedImage from './OptimizedImage';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  
  const slides = [
    { image: '/images/main-carousel/carousel1.jpg', text: 'Explore Hidden Waters' },
    { image: '/images/sunrise-tour/bird0.jpg', text: 'Nature At Peace' },
    { image: '/images/sunset-tour/sunset-1.jpg', text: 'Sunset Adventures Await' },
    { image: '/images/main-carousel/carousel2.jpg', text: 'Discover Wildlife Wonders' },
  ];

  React.useEffect(() => {
    // Preload next slide image
    const nextSlide = (currentSlide + 1) % slides.length;
    const img = new Image();
    img.src = slides[nextSlide].image;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <div className="relative px-4 py-20 pb-0 h-screen">
      <style>{`
        @keyframes slideFromTop {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes slideFromBottom {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-word-top {
          animation: slideFromTop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-word-bottom {
          animation: slideFromBottom 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
      {/* Carousel Hero Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <OptimizedImage
              src={slide.image}
              alt={slide.text}
              className=""
              priority={index === 0}
              blur={true}
              objectFit="cover"
              fill={true}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            
            {/* Animated Text Overlay */}
            {index === currentSlide && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4 overflow-hidden">
                  {slide.text.split(' ').map((word, wordIndex, array) => {
                    const isFirstHalf = wordIndex < array.length / 2;
                    const delay = wordIndex * 0.1;
                    
                    return (
                      <span
                        key={wordIndex}
                        className={`inline-block mx-2 text-4xl md:text-6xl lg:text-7xl font-extrabold text-white ${
                          isFirstHalf ? 'animate-word-top' : 'animate-word-bottom'
                        }`}
                        style={{
                          fontFamily: '"Gilroy", Sans-serif',
                          animationDelay: `${delay}s`,
                          textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
                        }}
                      >
                        {word}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 transition-all z-20 group"
        aria-label="Previous slide"
      >
        <svg className="w-8 h-8 text-white hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 transition-all z-20 group"
        aria-label="Next slide"
      >
        <svg className="w-8 h-8 text-white hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default HeroSection;
