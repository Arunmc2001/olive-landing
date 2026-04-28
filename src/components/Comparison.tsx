'use client';

import React from 'react';

const Comparison: React.FC = () => {
  const features = [
    {
      feature: "Independent Lab Testing",
      olive: true,
      competitors: false
    },
    {
      feature: "Real-time Ingredient Analysis",
      olive: true,
      competitors: false
    },
    {
      feature: "Personalized Recommendations",
      olive: true,
      competitors: false
    },
    {
      feature: "1M+ Product Database",
      olive: true,
      competitors: false
    },
    {
      feature: "Expert Nutritionist Backed",
      olive: true,
      competitors: false
    },
    {
      feature: "Family-Focused Insights",
      olive: true,
      competitors: false
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Olive Food Scanner App vs. The Rest
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See why thousands of families choose Olive over other food apps
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 border-b border-gray-200">
              <div className="p-4 bg-gray-50 font-semibold text-gray-900">
                Features
              </div>
              <div className="p-4 bg-green-50 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">O</span>
                  </div>
                  <span className="font-semibold text-green-700">Olive</span>
                </div>
              </div>
              <div className="p-4 bg-gray-50 text-center">
                <span className="font-semibold text-gray-700">Other Apps</span>
              </div>
            </div>

            {features.map((item, index) => (
              <div key={index} className="grid grid-cols-3 border-b border-gray-100 last:border-b-0">
                <div className="p-4 text-gray-900">
                  {item.feature}
                </div>
                <div className="p-4 text-center">
                  {item.olive ? (
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div className="p-4 text-center">
                  {item.competitors ? (
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg flex items-center space-x-3 transition-colors shadow-lg mx-auto"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="font-semibold">Download for iOS</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
