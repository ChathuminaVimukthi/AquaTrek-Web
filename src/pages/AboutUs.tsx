import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-800 md:text-5xl">
          About Us
        </h1>
        <div className="mx-auto max-w-3xl">
          <p className="mb-6 text-lg text-gray-700">
            AquaTrek is dedicated to bringing you the best aquatic adventures
            and experiences. Founded with a passion for water sports and marine
            exploration, we strive to make every journey memorable.
          </p>
          <p className="mb-6 text-lg text-gray-700">
            Our team of experienced professionals is committed to safety,
            sustainability, and creating unforgettable moments for our
            customers.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-blue-600">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To inspire and enable aquatic adventures for everyone.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-blue-600">
                Our Vision
              </h3>
              <p className="text-gray-600">
                Becoming the leading platform for water-based experiences.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-xl font-semibold text-blue-600">
                Our Values
              </h3>
              <p className="text-gray-600">
                Safety, sustainability, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
