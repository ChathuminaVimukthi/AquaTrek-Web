import React, { useState } from 'react';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Footer from '../components/Footer';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agreeToTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      agreeToTerms: e.target.checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Google Maps Section - Full Width */}
      <div className="w-full h-[450px]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.116972756945!2d80.12791827567882!3d6.114951627774728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae177c787157e87%3A0x391386f6ac2c7ec9!2sAqua%20Trek%20Water%20Adventures%20-%20Hikkaduwa!5e0!3m2!1sen!2slk!4v1764639425863!5m2!1sen!2slk" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="AquaTrek Location"
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Side - Form */}
          <div>
            <h1 
              className="text-4xl md:text-8xl font-bold text-brand-navy mb-8"
              style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
            >
              Get in touch
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  style={{ fontFamily: '"Asap", Sans-serif' }}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  style={{ fontFamily: '"Asap", Sans-serif' }}
                  required
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={8}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                style={{ fontFamily: '"Asap", Sans-serif' }}
                required
              ></textarea>

              {/* Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleCheckboxChange}
                  className="mt-1 w-4 h-4 text-primary focus:ring-primary border-gray-300"
                  required
                />
                <label 
                  htmlFor="agreeToTerms" 
                  className="text-sm text-gray-600"
                  style={{ fontFamily: '"Asap", Sans-serif' }}
                >
                  I agree that my submitted data is being collected and stored.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-brand-navy text-white px-8 py-3 hover:bg-brand-deep transition-colors duration-300"
                style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 700 }}
              >
                SEND
              </button>
            </form>
          </div>

          {/* Right Side - Contact Information */}
          <div className="bg-white p-8 md:p-20 space-y-0 ">
            {/* Location */}
            <div className="flex items-start space-x-4 py-6">
              <div className="flex-shrink-0">
                <MapPinIcon className="w-6 h-6 text-brand-navy" />
              </div>
              <div className="text-left">
                <h3 
                  className="text-xl font-bold text-brand-navy mb-2"
                  style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
                >
                  AquaTrek Water Adventures,
                </h3>
                <p 
                  className="text-gray-600"
                  style={{ fontFamily: '"Asap", Sans-serif' }}
                >
                  Dodandugoda Rd, Dodanduwa, Hikkaduwa
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Email */}
            <div className="flex items-start space-x-4 py-6">
              <div className="flex-shrink-0">
                <EnvelopeIcon className="w-6 h-6 text-brand-navy" />
              </div>
              <div className="text-left">
                <a 
                  href="mailto:aquatrekhikk@gmail.com"
                  className="text-xl font-bold text-brand-navy hover:text-primary transition-colors"
                  style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
                >
                  aquatrekhikk@gmail.com
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* Phone */}
            <div className="flex items-start space-x-4 py-6">
              <div className="flex-shrink-0">
                <PhoneIcon className="w-6 h-6 text-brand-navy" />
              </div>
              <div className="text-left">
                <a 
                  href="tel:+94773366171"
                  className="text-xl font-bold text-brand-navy hover:text-primary transition-colors"
                  style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
                >
                  +94 77 336 6171
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* WhatsApp */}
            <div className="flex items-start space-x-4 py-6">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-brand-navy" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </div>
              <div className="text-left">
                <a 
                  href="https://wa.me/message/NJJEXSOX3ABGM1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-brand-navy hover:text-primary transition-colors"
                  style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
