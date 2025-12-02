import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <div className="bg-primary-bg">
      <div className="w-full px-[50px] -mt-20 md:-mt-20 lg:-mt-20 relative z-10">
        <div className="w-full mx-auto text-center bg-brand-navy px-8 py-12 md:px-12 md:py-16">
          <h2 
            className="text-5xl md:text-8xl lg:text-8xl font-bold text-white mb-6"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
          >
            Welcome to AquaTrek
          </h2>
          <p 
            className="text-l md:text-xl text-accent-gold leading-relaxed"
            style={{ fontFamily: '"Gilroy", Sans-serif' }}
          >
            Discover the beauty of Rathgama Lagoon with us! Enjoy guided kayak and canoe tours through serene waters, spotting wildlife and soaking in stunning views.
          </p>
        </div>
      </div>

      {/* Welcome Speech Section */}
      <div className="w-full px-4 pt-16 pb-5 md:pt-20 md:pb-5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 
            className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-navy mb-8"
            style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
          >
            Experience Nature Like Never Before
          </h3>
          <div className="space-y-4 text-brand-deep leading-relaxed" style={{ fontFamily: '"Asap", Sans-serif' }}>
            <p className="text-md md:text-md">
              For us, the most important thing is to see you enjoy every moment on the water. We love seeing you try new things and achieve little adventures you haven't done before! We love kids, and we'll go the extra mile to make sure they have a splash-tastic time! We love great company and those stories shared over a peaceful waterside stop! We love wildlife!
            </p>
            
            <p className="text-md md:text-md">
              "Water Adventures Like No Other" - Dive into experiences that go beyond expectations. Because <span className="font-bold">we're passionate about what we do!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
