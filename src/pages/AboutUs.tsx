import React from 'react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="About Us - Family-Run Kayaking Tours"
        description="Learn about AquaTrek Hikkaduwa, a family-owned kayaking tour business in Rathgama Lake, Sri Lanka. Discover our story, passion for nature, and commitment to providing authentic eco-tourism experiences."
        keywords="about AquaTrek, family kayaking business, Hikkaduwa tours, eco tourism Sri Lanka, local tour guides, Rathgama Lake"
        canonical="https://aquatrekhikkaduwa.com/about"
      />
      {/* Hero Image Section - Full Width and Height */}
      <div className="w-full h-screen relative">
        <img 
          src="/carousel1.jpg" 
          alt="Rathgama Lake" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 
            className="text-5xl md:text-7xl font-bold text-white text-center px-4"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
          >
            About Us
          </h1>
        </div>
      </div>

      {/* Content Section - Split Layout */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left Side - Image */}
          <div className="order-2 md:order-1">
            <img 
              src="/carousel2.jpg" 
              alt="Family at Rathgama Lake" 
              className="w-full h-[60vh] object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="order-1 md:order-2 px-8 md:px-16 py-12 md:py-16 flex flex-col justify-center text-left">
            <h2 
              className="text-3xl md:text-6xl font-bold text-brand-navy mb-6"
              style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
            >
              Locally Grown, Family-Run
            </h2>
            
            <div className="space-y-6 text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>
              <p className="text-md leading-relaxed text-left">
                Aqua Trek Water Adventures is more than a tour — it's a family story. Born from our deep connection to Rathgama Lake and the surrounding nature, we've turned our passion into a personal, welcoming experience for every guest who visits.
              </p>
              
              <p className="text-md leading-relaxed text-left">
                We believe in simple things done with sincerity — warm hospitality, genuine smiles, and giving you a real taste of local life. Our routes and experiences are shaped by years of growing up around these waters, knowing their hidden corners, the wildlife rhythms, and the best times to paddle through calm reflections and golden sunsets.
              </p>
              
              <p className="text-md leading-relaxed text-left">
                When you visit us, you're not just joining a tour — you're being welcomed by a family that truly loves what we do, and wants to share that joy with you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Content Section - Split Layout (Reversed) */}
      <div className="w-full bg-secondary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left Side - Content */}
          <div className="px-8 md:px-16 py-12 md:py-16 flex flex-col justify-center text-left">
            <h2 
              className="text-3xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
            >
              Our Approach
            </h2>
            
            <div className="space-y-6 text-white" style={{ fontFamily: '"Asap", Sans-serif' }}>
              <p className="text-md leading-relaxed text-left">
                We believe that the best adventures are personal, unhurried, and authentic. That's why at Aqua Trek, we don't rush the journey — we embrace it. Our tours are designed to help you slow down, breathe, and truly connect with the lake's natural rhythm.
              </p>
              
              <p className="text-md leading-relaxed text-left">
                We focus on relaxed paddling, mindful exploration, and genuine local insight rather than fast-paced tourism. Whether you're here to learn, unwind, or simply enjoy the view, our approach is all about creating a meaningful, memorable experience that feels intimate and real.
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div>
            <img 
              src="/carousel3.jpg" 
              alt="Kayaking at Rathgama Lake" 
              className="w-full h-[60vh] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Third Content Section - Text Only */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-12 md:py-16 text-left">
          <h2 
            className="text-3xl md:text-6xl font-bold text-brand-navy mb-6"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
          >
            The Soul of Rathgama
          </h2>
          
          <div className="space-y-6 text-gray-700" style={{ fontFamily: '"Asap", Sans-serif' }}>
            <p className="text-md leading-relaxed text-left">
              Rathgama Lake is a tranquil brackish lagoon nestled just inland from the southern coast of Sri Lanka, near the village of Dodanduwa. Surrounded by mangrove forests and dotted with peaceful islands, the lake is part of a delicate ecosystem that supports over twenty species of mangrove plants and a rich diversity of birdlife and aquatic species.
            </p>
            
            <p className="text-md leading-relaxed text-left">
              What makes Rathgama Lake truly special is its blend of nature and culture. Several of its islands are home to historic Buddhist hermitages — most notably the Island Hermitage founded in 1911 — making the lake not only a sanctuary for wildlife, but also a quiet refuge for spiritual retreat.
            </p>
            
            <p className="text-md leading-relaxed text-left">
              The lagoon's connection to the Indian Ocean makes it a dynamic environment where freshwater and saltwater meet, creating fertile habitats that have supported local fishing communities for generations. Today, Rathgama Lake remains a peaceful escape — calm, reflective, and deeply rooted in both ecological and cultural heritage.
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AboutUs;
