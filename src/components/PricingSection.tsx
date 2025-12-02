import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <div className="bg-primary-bg">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-navy text-center" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
          Reserve Your Adventure
        </h2>
      </div>
      <p className="text-center text-lg text-brand-deep mb-12 max-w-2xl mx-auto" style={{ fontFamily: '"Asap", Sans-serif' }}>
        Transparent, friendly, and flexible — choose the option that works best for you.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">

        {/* Option 1 - Quick Lake Ride */}
        <div className="bg-white p-8 transition-all duration-300">
          <h3 className="text-2xl font-bold mb-2 text-brand-navy" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>Quick Lake Ride</h3>
          <p className="text-brand-deep mb-6" style={{ fontFamily: '"Asap", Sans-serif' }}>30 minutes</p>
          <div className="flex items-baseline mb-6">
            <span className="text-4xl font-extrabold text-brand-navy" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>Rs 1500</span>
            <span className="text-brand-deep ml-2">/person</span>
          </div>
          <ul className="space-y-3 text-brand-deep" style={{ fontFamily: '"Asap", Sans-serif' }}>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Non-guided</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Welcome drink</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Water bottle</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Life jacket included</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Waterproof mobile cover</span>
            </li>
          </ul>
          <button className="mt-8 w-full bg-brand-navy hover:bg-primary-hover text-white font-semibold py-3 transition-colors duration-300">
            Book Now
          </button>
        </div>

        {/* Option 2 - Relaxed Paddle */}
        <div className="bg-white p-8  transition-all duration-300">
          <h3 className="text-2xl font-bold mb-2 text-brand-navy" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>Relaxed Paddle</h3>
          <p className="text-brand-deep mb-6" style={{ fontFamily: '"Asap", Sans-serif' }}>1 hour</p>
          <div className="flex items-baseline mb-6">
            <span className="text-4xl font-extrabold text-brand-navy" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>Rs 2000</span>
            <span className="text-brand-deep ml-2">/person</span>
          </div>
          <ul className="space-y-3 text-brand-deep" style={{ fontFamily: '"Asap", Sans-serif' }}>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Non-guided</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Welcome drink</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Water bottle</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Tea after return</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Life jacket & waterproof cover</span>
            </li>
          </ul>
          <button className="mt-8 w-full bg-brand-navy hover:bg-primary-hover text-white font-semibold py-3 transition-colors duration-300">
            Book Now
          </button>
        </div>

        {/* Option 3 - Full Lake Adventure (Most Popular) */}
        <div className="bg-white p-8  border-highlight-text relative">
          <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1">
            MOST POPULAR
          </div>
          <h3 className="text-2xl font-bold mb-2 text-secondary mt-6" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>Full Lake Adventure</h3>
          <p className="text-brand-deep mb-6" style={{ fontFamily: '"Asap", Sans-serif' }}>3 hours</p>
          <div className="flex items-baseline mb-6">
            <span className="text-4xl font-extrabold text-secondary" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>Rs 3000</span>
            <span className="text-brand-deep ml-2">/person</span>
          </div>
          <ul className="space-y-3 text-brand-deep" style={{ fontFamily: '"Asap", Sans-serif' }}>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-secondary-hover mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Guided or non-guided</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-secondary-hover mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Welcome drink</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-secondary-hover mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Water bottle</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-secondary-hover mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Tea & snacks after return</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-secondary-hover mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Customizable route</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-secondary-hover mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Life jacket & waterproof cover</span>
            </li>
          </ul>
          <button className="mt-8 w-full bg-secondary hover:bg-secondary-hover text-white font-semibold py-3 transition-colors duration-300">
            Book Now
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 px-4">
        <div className="bg-white p-6 text-center">
          <p className="text-brand-navy  mb-2" style={{ fontFamily: '"Asap", Sans-serif'}}>
            Need more time? <span className="text-primary">Rs 500 per extra hour</span>
          </p>
          <p className="text-brand-deep text-base mb-2" style={{ fontFamily: '"Asap", Sans-serif' }}>
            We can accommodate up to 35 people in a single session — perfect for groups and events!
          </p>
          <p className="text-xl text-brand-deep text-base font-semibold" style={{ fontFamily: '"Gilroy", Sans-serif' }}>
            Have a special request? WhatsApp us and we'll customize your experience.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PricingSection;
