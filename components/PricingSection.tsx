export default function PricingSection() {
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Option 1 - Standard Package */}
          <div className="bg-white p-8 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-2 text-brand-navy" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>Standard Package</h3>
            <p className="text-brand-deep mb-6" style={{ fontFamily: '"Asap", Sans-serif' }}>Duration: 1 hour</p>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-extrabold text-brand-navy" style={{ fontFamily: '"Gilroy", Sans-serif', fontWeight: 800 }}>Rs 1,000</span>
              <span className="text-brand-deep ml-2">/person</span>
            </div>
            <p className="text-brand-navy font-semibold mb-3" style={{ fontFamily: '"Gilroy", Sans-serif' }}>Includes:</p>
            <ul className="space-y-3 text-brand-deep mb-6" style={{ fontFamily: '"Asap", Sans-serif' }}>
              {['Welcome drink', 'Water bottle', 'Life jacket', 'Waterproof mobile cover'].map((item) => (
                <li key={item} className="flex items-start">
                  <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-brand-navy font-semibold mb-3" style={{ fontFamily: '"Gilroy", Sans-serif' }}>Optional:</p>
            <ul className="space-y-3 text-brand-deep" style={{ fontFamily: '"Asap", Sans-serif' }}>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-secondary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Guide for the tour – Rs 1,500 (per tour)</span>
              </li>
            </ul>
            <div className="mt-8">
              <p className="text-center text-brand-navy font-semibold mb-4" style={{ fontFamily: '"Gilroy", Sans-serif' }}>
                Ready to book? Contact us now!
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+94773366171"
                  className="flex items-center justify-center bg-brand-navy hover:bg-primary-hover text-white font-semibold py-3 px-4 transition-colors duration-300"
                  style={{ fontFamily: '"Gilroy", Sans-serif' }}
                >
                  <svg className="w-5 h-5 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="hidden md:inline">Call Now</span>
                </a>
                <a
                  href="https://wa.me/message/NJJEXSOX3ABGM1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-secondary hover:bg-secondary-hover text-white font-semibold py-3 px-4 transition-colors duration-300"
                  style={{ fontFamily: '"Gilroy", Sans-serif' }}
                >
                  <svg className="w-5 h-5 md:mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span className="hidden md:inline">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Option 2 - Full Lake Adventure (Most Popular) */}
          <div className="bg-white p-8 border-highlight-text relative">
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
              {['Guided or non-guided', 'Welcome drink', 'Water bottle', 'Tea & snacks after return', 'Customizable route', 'Life jacket', 'Waterproof mobile cover'].map((item) => (
                <li key={item} className="flex items-start">
                  <svg className="w-5 h-5 text-secondary-hover mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-center text-secondary font-semibold mb-4" style={{ fontFamily: '"Gilroy", Sans-serif' }}>
                Ready to book? Contact us now!
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:+94773366171"
                  className="flex items-center justify-center bg-brand-navy hover:bg-primary-hover text-white font-semibold py-3 px-4 transition-colors duration-300"
                  style={{ fontFamily: '"Gilroy", Sans-serif' }}
                >
                  <svg className="w-5 h-5 md:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="hidden md:inline">Call Now</span>
                </a>
                <a
                  href="https://wa.me/message/NJJEXSOX3ABGM1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center bg-secondary hover:bg-secondary-hover text-white font-semibold py-3 px-4 transition-colors duration-300"
                  style={{ fontFamily: '"Gilroy", Sans-serif' }}
                >
                  <svg className="w-5 h-5 md:mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span className="hidden md:inline">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12 px-4">
          <div className="bg-white p-6 text-center">
            <p className="text-brand-navy mb-2" style={{ fontFamily: '"Asap", Sans-serif' }}>
              Need more time? <span className="text-primary">Rs 500 per extra hour</span>
            </p>
            <p className="text-brand-deep text-base mb-2" style={{ fontFamily: '"Asap", Sans-serif' }}>
              We can accommodate up to 35 people in a single session — perfect for groups and events!
            </p>
            <p className="text-xl text-brand-deep text-base font-semibold" style={{ fontFamily: '"Gilroy", Sans-serif' }}>
              Have a special request? WhatsApp us and we&apos;ll customize your experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
