'use client';

import React from 'react';

const AppPreview: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <div className="relative">
            {/* Phone Frame */}
            <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
                {/* App Content */}
                <div className="flex flex-col h-full bg-gradient-to-b from-green-50 to-white">
                  {/* Status Bar */}
                  <div className="bg-white px-4 py-2 flex justify-between items-center text-xs">
                    <span className="font-medium">9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-3 bg-gray-800 rounded-sm"></div>
                      <div className="w-4 h-3 bg-gray-800 rounded-sm"></div>
                      <div className="w-4 h-3 bg-gray-800 rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="bg-green-500 px-4 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-white font-semibold">Olive</span>
                      </div>
                      <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                    </div>
                  </div>

                  {/* Product Card */}
                  <div className="flex-1 px-4 py-6">
                    <div className="bg-white rounded-lg shadow-lg p-4">
                      {/* Product Image */}
                      <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                        <div className="text-gray-400 text-sm">Product Image</div>
                      </div>

                      {/* Product Name */}
                      <h3 className="font-semibold text-gray-900 mb-2">Fig and Olive Crackers, Fig and Olive</h3>

                      {/* Score */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold">46</span>
                          </div>
                          <span className="text-gray-600 text-sm">/100</span>
                        </div>
                        <div className="text-red-500 text-sm font-medium">Poor Choice</div>
                      </div>

                      {/* Oliver Says Section */}
                      <div className="bg-green-50 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">O</span>
                          </div>
                          <span className="font-medium text-gray-900 text-sm">Oliver Says</span>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          This product contains high levels of added sugars and refined grains. Consider choosing whole grain alternatives with less added sugars for better health outcomes.
                        </p>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2 mt-4">
                        <button className="flex-1 bg-green-500 text-white py-2 rounded-lg text-sm font-medium">
                          Scan Another
                        </button>
                        <button className="flex-1 border border-green-500 text-green-600 py-2 rounded-lg text-sm font-medium">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="bg-white border-t border-gray-200 px-4 py-2">
                    <div className="flex justify-around">
                      <div className="w-6 h-6 bg-green-500 rounded"></div>
                      <div className="w-6 h-6 bg-gray-300 rounded"></div>
                      <div className="w-6 h-6 bg-gray-300 rounded"></div>
                      <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
