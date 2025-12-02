import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bars3Icon,
  XMarkIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLocationClick = () => {
    // Replace with your actual Google Maps location
    window.open('https://maps.app.goo.gl/jSaYGaPdi1sckKdBA', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+94773366171'; // Replace with your actual phone number
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.65)', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center" style={{ height: '48px' }}>
          {/* Logo and Name */}
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <img 
              src="/logo-final.JPG" 
              alt="AquaTrek Logo" 
              className="rounded-full object-cover"
              style={{ width: '32px', height: '32px' }}
            />
            <span className="font-bold text-brand-navy" style={{ fontSize: '18px' }}>AquaTrek</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Navigation Links */}
            <div className="flex items-center space-x-6 px-6">
              <Link to="/about" className="text-brand-navy hover:text-primary transition-colors uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>
                About Us
              </Link>
              {/* <a href="#team" className="text-brand-navy hover:text-primary transition-colors uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>
                Our Team
              </a> */}
              <Link to="/blog" className="text-brand-navy hover:text-primary transition-colors uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>
                Blog
              </Link>
            </div>

            {/* Vertical Divider */}
            <div className="bg-gray-300" style={{ height: '24px', width: '1px' }}></div>

            {/* Location */}
            <button
              onClick={handleLocationClick}
              className="flex items-center space-x-2 px-4 text-brand-navy hover:text-primary transition-colors"
              style={{ fontSize: '12px', fontWeight: 600 }}
            >
              <MapPinIcon style={{ width: '16px', height: '16px' }} />
              <span>Our Location</span>
            </button>

            {/* Vertical Divider */}
            <div className="bg-gray-300" style={{ height: '24px', width: '1px' }}></div>

            {/* Phone */}
            <button
              onClick={handlePhoneClick}
              className="flex flex-col items-center px-4 text-brand-navy hover:text-primary transition-colors"
              style={{ fontSize: '12px', fontWeight: 600 }}
            >
              <div className="flex items-center space-x-2">
                <PhoneIcon style={{ width: '16px', height: '16px' }} />
                <span>+94 77 336 6171</span>
              </div>
              <span className="text-gray-500" style={{ fontSize: '10px', marginTop: '2px', fontWeight: 600 }}>Call Us</span>
            </button>

            {/* Vertical Divider */}
            <div className="bg-gray-300" style={{ height: '24px', width: '1px' }}></div>

            {/* Contact Us Button */}
            <Link to="/contact" className="px-4 text-brand-navy border border-brand-navy rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-colors uppercase" style={{ fontSize: '12px', padding: '6px 20px', fontWeight: 600 }}>
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-brand-navy hover:text-primary p-2">
            {isMenuOpen ? (
              <XMarkIcon style={{ width: '24px', height: '24px' }} />
            ) : (
              <Bars3Icon style={{ width: '24px', height: '24px' }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {/* Navigation Links */}
            <Link
              to="/about"
              className="block py-2 text-brand-navy hover:text-primary hover:bg-gray-50 rounded transition-colors uppercase"
              style={{ fontSize: '13px', fontWeight: 600 }}
            >
              About Us
            </Link>
            <a
              href="#team"
              className="block py-2 text-brand-navy hover:text-primary hover:bg-gray-50 rounded transition-colors uppercase"
              style={{ fontSize: '13px', fontWeight: 600 }}
            >
              Our Team
            </a>
            <Link
              to="/blog"
              className="block py-2 text-brand-navy hover:text-primary hover:bg-gray-50 rounded transition-colors uppercase"
              style={{ fontSize: '13px', fontWeight: 600 }}
            >
              Blog
            </Link>

            {/* Divider */}
            <div className="border-t border-gray-200 my-2"></div>

            {/* Location */}
            <button
              onClick={handleLocationClick}
              className="flex items-center space-x-2 w-full py-2 text-brand-navy hover:text-primary hover:bg-gray-50 rounded transition-colors"
              style={{ fontSize: '12px', fontWeight: 600 }}
            >
              <MapPinIcon style={{ width: '16px', height: '16px' }} />
              <span>Our Location</span>
            </button>

            {/* Phone */}
            <button
              onClick={handlePhoneClick}
              className="flex flex-col items-start w-full py-2 text-brand-navy hover:text-primary hover:bg-gray-50 rounded transition-colors"
              style={{ fontSize: '12px', fontWeight: 600 }}
            >
              <div className="flex items-center space-x-2">
                <PhoneIcon style={{ width: '16px', height: '16px' }} />
                <span>+123 456 7890</span>
              </div>
              <span className="text-gray-500" style={{ fontSize: '10px', marginLeft: '24px', fontWeight: 600 }}>Call Us</span>
            </button>

            {/* Divider */}
            <div className="border-t border-gray-200 my-2"></div>

            {/* Contact Us Button */}
            <Link to="/contact" className="block w-full text-center text-brand-navy border border-brand-navy rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-colors uppercase" style={{ fontSize: '12px', padding: '8px 24px', fontWeight: 600 }}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
