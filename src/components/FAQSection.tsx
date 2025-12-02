import React from 'react';

interface FAQSectionProps {
  expandedFAQ: number | null;
  toggleFAQ: (index: number) => void;
}

const FAQSection: React.FC<FAQSectionProps> = ({ expandedFAQ, toggleFAQ }) => {
  return (
    <div className="mt-16">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-navy text-center" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-4xl mx-auto border border-gray-200">
        {/* FAQ Item 1 */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleFAQ(1)}
            className="w-full px-6 py-4 flex items-start bg-sand-beige hover:bg-gray-100 transition-colors duration-200"
          >
            <span className="text-xl font-bold text-primary mr-3 flex-shrink-0" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
              {expandedFAQ === 1 ? '−' : '+'}
            </span>
            <h3 className="text-base font-bold text-brand-navy text-left" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
              How can I book?
            </h3>
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: expandedFAQ === 1 ? '500px' : '0' }}
          >
            <div className="px-6 py-4 bg-white">
              <p className="text-gray-700 leading-relaxed text-left" style={{ fontFamily: '"Asap", Sans-serif' }}>
                You can book by contacting us through WhatsApp, Instagram, Facebook, or by calling directly. Same-day bookings are usually available, but we recommend booking in advance — especially for sunrise and sunset tours.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Item 2 */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleFAQ(2)}
            className="w-full px-6 py-4 flex items-start bg-sand-beige hover:bg-gray-100 transition-colors duration-200"
          >
            <span className="text-xl font-bold text-primary mr-3 flex-shrink-0" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
              {expandedFAQ === 2 ? '−' : '+'}
            </span>
            <h3 className="text-base font-bold text-brand-navy text-left" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
              What is included in the package?
            </h3>
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: expandedFAQ === 2 ? '500px' : '0' }}
          >
            <div className="px-6 py-4 bg-white">
              <p className="text-gray-700 mb-3 text-left" style={{ fontFamily: '"Asap", Sans-serif' }}>
                Every package includes:
              </p>
              <ul className="space-y-2 text-gray-700 text-left" style={{ fontFamily: '"Asap", Sans-serif' }}>
                <li>✔ Quality life jackets</li>
                <li>✔ Waterproof phone covers</li>
                <li>✔ Welcome drink</li>
                <li>✔ Water bottle</li>
                <li>✔ Guided or non-guided experience depending on the package</li>
                <li>✔ Tea (and snacks for the full adventure)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Item 3 */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleFAQ(3)}
            className="w-full px-6 py-4 flex items-start bg-sand-beige hover:bg-gray-100 transition-colors duration-200"
          >
            <span className="text-xl font-bold text-primary mr-3 flex-shrink-0" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
              {expandedFAQ === 3 ? '−' : '+'}
            </span>
            <h3 className="text-base font-bold text-brand-navy text-left" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
              Do I need any kayaking experience?
            </h3>
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: expandedFAQ === 3 ? '500px' : '0' }}
          >
            <div className="px-6 py-4 bg-white">
              <p className="text-gray-700 leading-relaxed text-left" style={{ fontFamily: '"Asap", Sans-serif' }}>
                No experience is required — all our tours are beginner-friendly, and our guides will assist you with everything.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Item 4 */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleFAQ(4)}
            className="w-full px-6 py-4 flex items-start bg-sand-beige hover:bg-gray-100 transition-colors duration-200"
          >
            <span className="text-xl font-bold text-primary mr-3 flex-shrink-0" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
              {expandedFAQ === 4 ? '−' : '+'}
            </span>
            <h3 className="text-base font-bold text-brand-navy text-left" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
              Is it safe?
            </h3>
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: expandedFAQ === 4 ? '500px' : '0' }}
          >
            <div className="px-6 py-4 bg-white">
              <p className="text-gray-700 leading-relaxed text-left" style={{ fontFamily: '"Asap", Sans-serif' }}>
                Yes — safety is our top priority. We provide certified safety gear, and a trained guide/lifeguard accompanies all guided tours.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Item 5 */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleFAQ(5)}
            className="w-full px-6 py-4 flex items-start bg-sand-beige hover:bg-gray-100 transition-colors duration-200"
          >
            <span className="text-xl font-bold text-primary mr-3 flex-shrink-0" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
              {expandedFAQ === 5 ? '−' : '+'}
            </span>
            <h3 className="text-base font-bold text-brand-navy text-left" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
              Can children participate?
            </h3>
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: expandedFAQ === 5 ? '500px' : '0' }}
          >
            <div className="px-6 py-4 bg-white">
              <p className="text-gray-700 leading-relaxed text-left" style={{ fontFamily: '"Asap", Sans-serif' }}>
                Absolutely! Kids are welcome, and we provide smaller life jackets for them. Children under 12 must be accompanied by an adult.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Item 6 */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleFAQ(6)}
            className="w-full px-6 py-4 flex items-start bg-sand-beige hover:bg-gray-100 transition-colors duration-200"
          >
            <span className="text-xl font-bold text-primary mr-3 flex-shrink-0" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
              {expandedFAQ === 6 ? '−' : '+'}
            </span>
            <h3 className="text-base font-bold text-brand-navy text-left" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
              Can I bring my phone or camera?
            </h3>
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: expandedFAQ === 6 ? '500px' : '0' }}
          >
            <div className="px-6 py-4 bg-white">
              <p className="text-gray-700 leading-relaxed text-left" style={{ fontFamily: '"Asap", Sans-serif' }}>
                Yes — and we provide waterproof mobile covers so you can take photos safely while on the water.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Item 7 */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleFAQ(7)}
            className="w-full px-6 py-4 flex items-start bg-sand-beige hover:bg-gray-100 transition-colors duration-200"
          >
            <span className="text-xl font-bold text-primary mr-3 flex-shrink-0" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
              {expandedFAQ === 7 ? '−' : '+'}
            </span>
            <h3 className="text-base font-bold text-brand-navy text-left" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
              What happens if it rains?
            </h3>
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: expandedFAQ === 7 ? '500px' : '0' }}
          >
            <div className="px-6 py-4 bg-white">
              <p className="text-gray-700 leading-relaxed text-left" style={{ fontFamily: '"Asap", Sans-serif' }}>
                Light rain is not a problem — many guests enjoy the atmosphere. In case of unsafe weather or heavy rain, we will reschedule or fully refund the booking.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Item 8 */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => toggleFAQ(8)}
            className="w-full px-6 py-4 flex items-start bg-sand-beige hover:bg-gray-100 transition-colors duration-200"
          >
            <span className="text-xl font-bold text-primary mr-3 flex-shrink-0" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
              {expandedFAQ === 8 ? '−' : '+'}
            </span>
            <h3 className="text-base font-bold text-brand-navy text-left" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
              Is there parking available?
            </h3>
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: expandedFAQ === 8 ? '500px' : '0' }}
          >
            <div className="px-6 py-4 bg-white">
              <p className="text-gray-700 leading-relaxed text-left" style={{ fontFamily: '"Asap", Sans-serif' }}>
                Yes, we have free parking and on-site bathroom & changing facilities.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Item 9 */}
        <div>
          <button
            onClick={() => toggleFAQ(9)}
            className="w-full px-6 py-4 flex items-start bg-sand-beige hover:bg-gray-100 transition-colors duration-200"
          >
            <span className="text-xl font-bold text-primary mr-3 flex-shrink-0" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
              {expandedFAQ === 9 ? '−' : '+'}
            </span>
            <h3 className="text-base font-bold text-brand-navy text-left" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>
              Can you accommodate big groups?
            </h3>
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: expandedFAQ === 9 ? '500px' : '0' }}
          >
            <div className="px-6 py-4 bg-white">
              <p className="text-gray-700 leading-relaxed text-left" style={{ fontFamily: '"Asap", Sans-serif' }}>
                Yes — we can host up to 35 people in a single session, perfect for families, events, and corporate outings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
