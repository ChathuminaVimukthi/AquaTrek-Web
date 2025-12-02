import React from 'react';

const ServiceGuaranteeSection: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 order-1 md:order-1">
          <img 
            src="/carousel1.jpg" 
            alt="Professional service" 
            className="w-full h-64 md:h-full object-cover"
          />
        </div>

        {/* Right Side - Content with Navy Background */}
        <div className="w-full md:w-1/2 bg-brand-navy px-6 md:px-12 py-12 md:py-16 order-2 md:order-2 flex items-center">
          <div className="w-full">
            {/* Main Heading */}
            <h2 className="text-3xl md:text-8xl md:px-20 font-bold text-white mb-12 text-left md:text-left leading-tight" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
              Professional and personal service guaranteed
            </h2>

            {/* Two Features */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:px-20">
              {/* Feature 1 - Knowledgeable Guides */}
              <div className="flex items-start space-x-4 md:flex-1">
                <div className="flex-shrink-0">
                  <img 
                    src="/people.png" 
                    alt="Knowledgeable Guides" 
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl text-left font-bold text-white mb-2" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
                    Knowledgeable Guides
                  </h3>
                  <p className="text-accent-gold text-left leading-relaxed" style={{ fontFamily: '"Gilroy", Sans-serif' }}>
                    Helping You Explore, Discover, and Enjoy
                  </p>
                </div>
              </div>

              {/* Feature 2 - Tailored Routes */}
              <div className="flex items-start space-x-4 md:flex-1">
                <div className="flex-shrink-0">
                  <img 
                    src="/route.png" 
                    alt="Tailored Routes" 
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl text-left font-bold text-white mb-2" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
                    Tailored Routes
                  </h3>
                  <p className="text-accent-gold text-left leading-relaxed" style={{ fontFamily: '"Gilroy", Sans-serif' }}>
                    Crafted for the Best Experience on Rathgama Lake
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceGuaranteeSection;
