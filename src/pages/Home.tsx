import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ToursSection from '../components/ToursSection';
import TourDetailsSection from '../components/TourDetailsSection';
import FAQSection from '../components/FAQSection';
import PricingSection from '../components/PricingSection';
import ServiceGuaranteeSection from '../components/ServiceGuaranteeSection';
import WaveDivider from '../components/WaveDivider';
import ReviewsSection from '../components/ReviewsSection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Home: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      
      <FeaturesSection />
      
      <ToursSection />
      
      <TourDetailsSection />
            
      {/* <FAQSection 
        expandedFAQ={expandedFAQ}
        toggleFAQ={toggleFAQ}
      /> */}
      
      <PricingSection />
      
      <ServiceGuaranteeSection />
      
      <ReviewsSection />
      
      <Footer />
      
      <ScrollToTop />
    </div>
  );
};

export default Home;
