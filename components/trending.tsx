import React from 'react';
import {  Lock, Clock, Eye, MessageSquare } from 'lucide-react';

export const Trending = () => {
  return (
    <div className=" lg:py-10 md:py-8 py-6 lg:px-0 md:px-3 px-2">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content - 3 columns wide */}
        <div className="lg:col-span-3 space-y-8">
          {/* Featured Article */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">CULTURE</span>
                  <div className="flex items-center ml-3 text-gray-500 text-xs">
                    <Lock size={14} className="mr-1" />
                    <span>FOR SUBSCRIBERS</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                  Turning Vulnerability into Fashion: Fashion Blogger Interview
                </h1>
                
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <Clock size={16} className="mr-1" />
                  <span className="mr-3">August 20, 3:21 PM</span>
                  <span className="mr-3">by <span className="font-medium text-gray-700">Roy Weru</span></span>
                </div>
                
                <p className="text-gray-600">
                  Every fashion designer has their raison d&apos;être. Some set out to reimagine our unconscious bias of fashion, while...
                </p>
              </div>
              
              <div className="bg-teal-800 h-full">
                <img 
                  src="/culture1.jpg" 
                  alt="Fashion blogger with pink phone" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* 3-Column Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Article 1 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src="/business1.jpg" 
                alt="Fashion House NFT Projects" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">5 Superb Fashion House NFT Projects</h3>
              </div>
            </div>
            
            {/* Article 2 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src="/celebrity1.jpg" 
                alt="Life without Waste" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">With an Eye to the Future: Life without Waste</h3>
              </div>
            </div>
            
            {/* Article 3 */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src="/entertainment3.jpg" 
                alt="Michael Kors Campaign" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">Michael Kors Unveils Fall 2023 Ad Campaign</h3>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar - 1 column wide */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-red-500 inline-block">TRENDING NOW</h2>
            
            <div className="space-y-6">
              {/* Trending Article 1 */}
              <div className="flex gap-4">
                <div className="text-4xl font-bold text-gray-800">1</div>
                <div>
                  <h3 className="font-bold text-gray-800">The UK&apos;s Best Outdoor Restaurants and Terraces</h3>
                  <div className="mt-2 text-xs text-gray-500">
                    <span>in LIFESTYLE</span>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        <span>983</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare size={14} className="mr-1" />
                        <span>2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Trending Article 2 */}
              <div className="flex gap-4">
                <div className="text-4xl font-bold text-gray-800">2</div>
                <div>
                  <h3 className="font-bold text-gray-800">The 17 Best Mascaras of All Time</h3>
                  <div className="mt-2 text-xs text-gray-500">
                    <span>in FASHION</span>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        <span>498</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare size={14} className="mr-1" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* More trending articles... */}
              <div className="flex gap-4">
                <div className="text-4xl font-bold text-gray-800">3</div>
                <div>
                  <h3 className="font-bold text-gray-800">Best Christmas gift for fashion lovers</h3>
                  <div className="mt-2 text-xs text-gray-500">
                    <span>in NEWS</span>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        <span>309</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare size={14} className="mr-1" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="text-4xl font-bold text-gray-800">4</div>
                <div>
                  <h3 className="font-bold text-gray-800">63 best Christmas Gifts For Everybody In 2023</h3>
                  <div className="mt-2 text-xs text-gray-500">
                    <span>in FASHION</span>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        <span>277</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare size={14} className="mr-1" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="text-4xl font-bold text-gray-800">5</div>
                <div>
                  <h3 className="font-bold text-gray-800">How To Stop Saturday&apos;s Full Moon Affecting Your Sleep</h3>
                  <div className="mt-2 text-xs text-gray-500">
                    <span>in FASHION</span>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center">
                        <Eye size={14} className="mr-1" />
                        <span>303</span>
                      </div>
                      <div className="flex items-center">
                        <MessageSquare size={14} className="mr-1" />
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

