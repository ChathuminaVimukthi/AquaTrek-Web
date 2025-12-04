import React, { useState } from 'react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import FAQSection from '../components/FAQSection';

const AmenitiesAndTips: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Amenities & Tips for Kayaking Tours"
        description="Everything you need to know for your kayaking adventure at Rathgama Lake. Learn about our amenities, safety equipment, what to bring, and helpful tips for an amazing tour experience."
        keywords="kayaking tips, tour amenities, what to bring kayaking, safety equipment, Rathgama Lake guide, kayaking preparation"
        canonical="https://aquatrekhikkaduwa.com/amenities"
      />
      {/* Hero Section */}
      <div className="w-full h-[50vh] md:h-[60vh] relative">
        <img 
          src="/images/others/ameneties1.jpg" 
          alt="Amenities and Tips" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 
            className="text-4xl md:text-7xl font-bold text-white text-center px-4"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
          >
            Amenities & Tips
          </h1>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="w-full bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-6xl font-bold text-brand-navy mb-4"
              style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
            >
              Everything You Need for a Great Experience
            </h2>
            <p 
              className="text-lg text-gray-700 max-w-3xl mx-auto"
              style={{ fontFamily: '"Gilroy", Sans-serif' }}
            >
              We've thought of everything to make your kayaking adventure comfortable, safe, and memorable.
            </p>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Safety Equipment */}
            <div className="bg-sand-beige p-8 rounded-lg text-left">
              <div className="flex items-center mb-4">
                <svg className="w-10 h-10 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 
                  className="text-2xl font-bold text-brand-navy"
                  style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
                >
                  Safety First
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>
                <li>✓ Quality life jackets for all sizes</li>
                <li>✓ Waterproof mobile phone cases</li>
                <li>✓ Experienced guides & lifeguards</li>
                <li>✓ First aid equipment on-site</li>
              </ul>
            </div>

            {/* Facilities */}
            <div className="bg-sand-beige p-8 rounded-lg text-left">
              <div className="flex items-center mb-4">
                <svg className="w-10 h-10 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 
                  className="text-2xl font-bold text-brand-navy"
                  style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
                >
                  Clean Facilities
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>
                <li>✓ Changing rooms</li>
                <li>✓ Clean bathroom facilities</li>
                <li>✓ Shaded rest areas & hammocks</li>
                <li>✓ Free on-site parking</li>
              </ul>
            </div>

            {/* Refreshments */}
            <div className="bg-sand-beige p-8 rounded-lg text-left">
              <div className="flex items-center mb-4">
                <svg className="w-10 h-10 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <h3 
                  className="text-2xl font-bold text-brand-navy"
                  style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
                >
                  Refreshments
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>
                <li>✓ Welcome drinks on arrival</li>
                <li>✓ Fresh water bottles</li>
                <li>✓ Tea after the tour</li>
                <li>✓ Snacks (full adventure package)</li>
              </ul>
            </div>

            {/* Equipment */}
            <div className="bg-sand-beige p-8 rounded-lg text-left">
              <div className="flex items-center mb-4">
                <svg className="w-10 h-10 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
                <h3 
                  className="text-2xl font-bold text-brand-navy"
                  style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
                >
                  Quality Gear
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>
                <li>✓ Well-maintained kayaks</li>
                <li>✓ Comfortable paddles</li>
                <li>✓ Dry bags for belongings</li>
                <li>✓ Photography equipment available</li>
              </ul>
            </div>

            {/* Guidance */}
            <div className="bg-sand-beige p-8 rounded-lg text-left">
              <div className="flex items-center mb-4">
                <svg className="w-10 h-10 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 
                  className="text-2xl font-bold text-brand-navy"
                  style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
                >
                  Expert Support
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>
                <li>✓ Pre-tour safety briefing</li>
                <li>✓ Paddling technique instruction</li>
                <li>✓ Local knowledge & stories</li>
                <li>✓ Wildlife spotting guidance</li>
              </ul>
            </div>

            {/* Accessibility */}
            <div className="bg-sand-beige p-8 rounded-lg text-left">
              <div className="flex items-center mb-4">
                <svg className="w-10 h-10 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <h3 
                  className="text-2xl font-bold text-brand-navy"
                  style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
                >
                  For Everyone
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>
                <li>✓ Family-friendly environment</li>
                <li>✓ Beginner-friendly approach</li>
                <li>✓ Child-sized life jackets</li>
                <li>✓ Group accommodations (up to 35)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="w-full bg-secondary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 
              className="text-3xl md:text-6xl font-bold text-white mb-4"
              style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
            >
              Pro Tips for Your Visit
            </h2>
            <p 
              className="text-lg text-white max-w-3xl mx-auto"
              style={{ fontFamily: '"Gilroy", Sans-serif' }}
            >
              Make the most of your time on the water with these helpful tips from our local experts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* What to Bring */}
            <div className="bg-white p-8">
              <h3 
                className="text-3xl font-bold text-brand-navy mb-6"
                style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
              >
                What to Bring
              </h3>
              <ul className="space-y-3 text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Sunscreen:</strong> The sun reflects off the water — protect your skin</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Hat & Sunglasses:</strong> Keep the glare at bay</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Comfortable Clothing:</strong> Light, quick-dry clothes work best</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Closed-Toe Shoes:</strong> Water shoes or sneakers are ideal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Towel:</strong> For after your paddle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Extra Clothes:</strong> Keep them in your vehicle</span>
                </li>
              </ul>
            </div>

            {/* What to Expect */}
            <div className="bg-white p-8">
              <h3 
                className="text-3xl font-bold text-brand-navy mb-6"
                style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
              >
                What to Expect
              </h3>
              <ul className="space-y-3 text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Calm Waters:</strong> Rathgama Lake is beginner-friendly and peaceful</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Wildlife Encounters:</strong> Birds, fish, and sometimes water monitors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Relaxed Pace:</strong> We take our time — no rushing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>You Might Get Wet:</strong> Not much, but splashes happen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Beautiful Scenery:</strong> Mangroves, islands, and open water views</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Friendly Locals:</strong> We love sharing our home with you</span>
                </li>
              </ul>
            </div>

            {/* Best Times to Visit */}
            <div className="bg-white p-8">
              <h3 
                className="text-3xl font-bold text-brand-navy mb-6"
                style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
              >
                Best Times to Visit
              </h3>
              <ul className="space-y-3 text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Sunrise Tours (6:00 AM):</strong> Cool, calm, and magical light</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Morning Tours (8:00 AM):</strong> Great for families and photography</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Afternoon Tours (3:00 PM):</strong> Warm weather, vibrant energy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Sunset Tours (5:00 PM):</strong> Stunning colors and romantic vibes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Weekdays:</strong> Quieter lake, more personal experience</span>
                </li>
              </ul>
            </div>

            {/* Safety Reminders */}
            <div className="bg-white p-8">
              <h3 
                className="text-3xl font-bold text-brand-navy mb-6"
                style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
              >
                Safety Reminders
              </h3>
              <ul className="space-y-3 text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Always Wear Your Life Jacket:</strong> Even if you're a strong swimmer</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Listen to Your Guide:</strong> They know the lake and weather conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Stay Hydrated:</strong> Drink water before and after paddling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Don't Stand in the Kayak:</strong> Balance is tricky on water</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Respect Wildlife:</strong> Observe from a distance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span><strong>Let Us Know:</strong> Tell us about any health concerns beforehand</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <FAQSection expandedFAQ={expandedFAQ} toggleFAQ={toggleFAQ} />
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AmenitiesAndTips;
