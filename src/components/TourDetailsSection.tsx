import React from 'react';

const TourDetailsSection: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 order-1 md:order-1">
          <img 
            src="/carousel2.jpg" 
            alt="Kayaking tour" 
            className="w-full h-40 md:h-[560px] object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 px-6 md:px-12 py-12 md:py-16 order-1 md:order-2 flex items-center">
          <div className="w-full">
          <div className="flex flex-col items-center md:items-start mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy text-center md:text-left" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
              Before You Paddle — Good To Know
            </h2>
          </div>

          {/* Safety Features */}
          <div className="mb-10">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-brand-deep" style={{ fontFamily: '"Asap", Sans-serif' }}>Quality life jackets for all participants</span>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="text-brand-deep" style={{ fontFamily: '"Asap", Sans-serif' }}>Waterproof mobile phone cases</span>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-brand-deep" style={{ fontFamily: '"Asap", Sans-serif' }}>Experienced guide accompanying your tour</span>
              </div>
            </div>
          </div>

          {/* Description and More Details Button */}
          <div>
            <p 
              className="text-brand-deep mb-6 leading-relaxed text-left"
              style={{ fontFamily: '"Asap", Sans-serif' }}
            >
              Make the most of your time on Rathgama Lake! We've got everything set for your comfort and convenience—from clean changing facilities and shaded rest areas to refreshing drinks and easy parking—everything you need to make your adventure stress-free. Keep your eyes open for the lake's vibrant wildlife, from birds gliding above to playful fish beneath the water's surface.
            </p>
            <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 font-semibold transition-colors duration-300">
              See All Amenities & Tips
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetailsSection;
