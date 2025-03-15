/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { PlayCircle } from 'lucide-react';
import Link from 'next/link';

export const WatchNowSection = () => {
  return (
    <>
      <div className="bg-gray-900 text-white py-10 lg:px-0 md:px-4 px-5
     ">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex justify-between items-center border-b border-gray-700 pb-4">
          <h2 className="text-4xl font-bold">Watch Now</h2>
          <Link href="/videos" className="text-sm hover:underline">View More</Link>
        </div>
      </div>
      
      {/* Video Grid */}
      <div className="max-w-6xl mx-auto py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Feature Video */}
          <div className="lg:col-span-2 relative rounded-lg overflow-hidden group">
            <video
              src="/video1.mp4" // Replace with your actual video source
              className="w-full  md:h-5/6 object-cover"
              controls // Add video controls
            />
            <div className="relative flex flex-col justify-end p-4">
              <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded w-fit mb-2">NEWS</div>
              <h3 className="lg:text-2xl md:text-xl text-lg font-bold mb-4">Is Shopping Second Hand Still a Sustainable Option?</h3>
            </div>
          </div>
          {/* Side Videos */}
          <div className="space-y-6">
            {/* Video 1 */}
            <div className="flex flex-col">
              <div className="relative rounded-lg overflow-hidden mb-3">
                <video
                  src="/video2.mp4" // Replace with your actual video source
                  className="w-full h-52 object-cover"
                  controls // Add video controls
                />
                <div className="relative  flex flex-col justify-end p-2">
                  <h3 className="font-bold tex-base font-montserrat text-white">I Drank my Face Serum and This is What Happened</h3>
                </div>
              </div>
            </div>
            
            {/* Video 2 */}
            <div className="flex flex-col">
              <div className="relative rounded-lg overflow-hidden mb-3">
                <video
                  src="/video3.mp4" // Replace with your actual video source
                  className="w-full h-52 object-cover"
                  controls // Add video controls
                />
                <div className=" relative  flex flex-col justify-end p-2">
                  <h3 className="font-bold text-lg text-white">8 Inexpensive Glasses that are Worth Paying Attention To</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    
    
    </div>
      {/* Podcasts Section */}
    <div className=' bg-black/90 w-full lg:py-6 py-5'>
    <div className="max-w-6xl mx-auto lg:px-0 md:px-4 px-5">
        <div className="flex relative w-full justify-between items-center border-b border-white pb-4 mb-12">
          <h2 className="text-4xl font-bold text-neutral-50">Podcasts</h2>
          <Link href="/podcast" className="text-sm text-neutral-50 hover:underline">View More</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Podcast 1 */}
          <div className="flex">
            <div className="w-1/3 flex-shrink-0">
              <img 
                src="/podcast1.jpeg" 
                alt="Fashion podcast" 
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
            <div className="w-2/3 ml-4">
              <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded w-fit mb-2">LIFESTYLE</div>
              <h3 className="font-semibold font-montserrat text-neutral-100
               lg:text-lg ">Five Signs You Might Be Better Off Breaking Up With Your Partner</h3>
            </div>
          </div>
          
          {/* Podcast 2 */}
          <div className="flex">
            <div className="w-1/3 flex-shrink-0">
              <img 
                src="/podcast2.jpg" 
                alt="Vegan beauty brands" 
                className="w-full aspect-square object-cover rounded-lg"
              />
            </div>
            <div className="w-2/3 ml-4">
              <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded w-fit mb-2">SCIENCE</div>
              <h3 className="font-semibold font-montserrat text-neutral-100
               lg:text-lg ">
                How your body reacts to chemicals
               </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    </>
  )
};

