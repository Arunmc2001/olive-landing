'use client';

import React from 'react';

const Protection: React.FC = () => {
  const protections = [
    {
      title: "Independent Lab Testing",
      description: "We independently test thousands of products to verify ingredient accuracy and detect hidden contaminants.",
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Expert Nutritionist Backed",
      description: "Our recommendations are developed and reviewed by certified nutritionists and food safety experts.",
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Real-time Updates",
      description: "Our database is constantly updated with the latest product recalls and safety alerts.",
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Protect Your Family From Hidden Toxins
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            100% Independent testing and analysis you can trust
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {protections.map((protection, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                {protection.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {protection.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {protection.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg">
            Keep your family safe with Olive
          </button>
        </div>
      </div>
    </section>
  );
};

export default Protection;
