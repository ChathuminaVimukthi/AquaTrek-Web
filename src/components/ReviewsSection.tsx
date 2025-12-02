import React from 'react';

const ReviewsSection: React.FC = () => {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy text-center" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
            Words from Fellow Adventurers
          </h2>
        </div>

        {/* Elfsight Google Reviews Widget */}
        <div className="max-w-5xl mx-auto">
          {/* Reviews */}
          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div className="elfsight-app-0a0e1efb-32bc-4121-afdd-57d5990c11a6" data-elfsight-app-lazy></div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
