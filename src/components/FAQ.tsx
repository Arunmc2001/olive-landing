'use client';

import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How accurate is Olive's ingredient analysis?",
      answer: "Olive uses independent lab testing and expert nutritional guidelines to provide 99.9% accurate ingredient analysis. Our database is constantly updated with the latest product information and safety alerts."
    },
    {
      question: "Is Olive suitable for children with food allergies?",
      answer: "Yes, Olive is specifically designed to help families manage food allergies. We flag potential allergens and cross-contamination risks, providing safer alternatives for children with specific dietary needs."
    },
    {
      question: "How often is the product database updated?",
      answer: "Our database is updated in real-time with new product launches, reformulations, and safety recalls. We add approximately 10,000 new products each month to ensure comprehensive coverage."
    },
    {
      question: "Can I use Olive without an internet connection?",
      answer: "Basic scanning functions work offline, but for the most accurate and up-to-date analysis, we recommend using Olive with an internet connection to access our latest database and expert recommendations."
    },
    {
      question: "What makes Olive different from other food scanner apps?",
      answer: "Olive is the only app that combines independent lab testing, expert nutritionist backing, and family-focused insights. We don't just show ingredients - we provide actionable recommendations tailored to your family's health needs."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions by Parents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about keeping your family safe
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-green-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-4">
              Our support team is here to help you make the best choices for your family.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
