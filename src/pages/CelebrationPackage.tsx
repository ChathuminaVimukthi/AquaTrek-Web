import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const CelebrationPackage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const celebration = {
    id: 'celebration-package',
    title: 'Celebrate by the Water',
    heroImage: '/carousel3.jpg',
    heroTitle: 'Create Unforgettable Memories',
    mainTitle: 'Special Celebration Packages',
    mainDescription: 'Make your special occasions truly memorable with our customized celebration packages. Whether it\'s a birthday, anniversary, or any milestone worth celebrating, we create the perfect waterside experience for you and your loved ones.',
    tourCards: [
      { image: '/carousel3.jpg', title: 'Birthday Celebrations' },
      { image: '/carousel1.jpg', title: 'Anniversary Specials' },
      { image: '/carousel2.jpg', title: 'Group Events' }
    ],
    tourInfoBg: '/carousel3.jpg',
    tourInfoTitle: 'Celebration Info',
    tourInfoSubtitle: 'Personalized Experiences for Your Special Day',
    tourInfoLeft: [
      { label: 'Duration', value: 'Customizable', color: 'text-primary' },
      { label: 'Includes', value: 'Catering Available', color: 'text-white' },
      { label: 'Availablity', value: 'Book in Advance', color: 'text-white' },
      { label: 'Group Size', value: 'Up to 20 People', color: 'text-white' }
    ],
    tourInfoRight: [
      { label: 'Type', value: 'Private Event', color: 'text-primary' },
      { label: 'For', value: 'All Occasions', color: 'text-white' },
      { label: 'Setup', value: 'Decorated Space', color: 'text-white' },
      { label: 'Location', value: 'Lakeside Venue', color: 'text-white' }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="w-full h-screen relative">
        <img 
          src={celebration.heroImage} 
          alt={celebration.title} 
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
                {celebration.heroTitle}
              </h1>
              <button 
                className="bg-brand-deep text-white px-8 py-3 font-semibold hover:bg-opacity-90 transition-colors"
                style={{ fontFamily: '"Asap", Sans-serif' }}
              >
                Book Your Celebration Now
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
            Make It Special
          </p>
          <h2 
            className="text-3xl md:text-7xl font-bold text-brand-navy text-center mb-8"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
          >
            {celebration.mainTitle}
          </h2>
          <p 
            className="text-center text-brand-deep max-w-4xl mx-auto leading-relaxed mb-12"
            style={{ fontFamily: '"Asap", Sans-serif' }}
          >
            {celebration.mainDescription}
          </p>

          {/* Three Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {celebration.tourCards.map((card, index) => (
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

      {/* Celebration Info Section with Background */}
      <div className="w-full relative py-20 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={celebration.tourInfoBg} 
            alt="Celebration Info Background" 
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
                alt="Celebration" 
                className="w-full max-w-md"
              />
            </div>

            {/* Right Side - Celebration Info - Animate from top */}
            <div className="w-full md:w-1/2 text-left animate-[slideDown_1s_ease-out]">
              <p 
                className="text-secondary-hover mb-2 text-xl md:text-2xl"
                style={{ fontFamily: '"Gilroy", Sans-serif' }}
              >
                {celebration.tourInfoSubtitle}
              </p>
              <h2 
                className="text-4xl md:text-6xl font-bold text-white mb-12"
                style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
              >
                {celebration.tourInfoTitle}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                {/* Left Column */}
                <div className="space-y-8">
                  {celebration.tourInfoLeft.map((item, index) => (
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
                  {celebration.tourInfoRight.map((item, index) => (
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
                  Perfect for Every Occasion
                </h3>
              </div>
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

export default CelebrationPackage;
