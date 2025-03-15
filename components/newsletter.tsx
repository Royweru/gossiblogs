"use client"

import { MailIcon } from "lucide-react";

// components/Newsletter.jsx// components/Newsletter.jsx
export function Newsletter() {
    return (
      <div className="w-full max-w-6xl mx-auto lg:px-0 md:px-3 px-2 lg:mb-10 md:mb-8 mb-6">
        <div className="w-full rounded-3xl p-8 relative bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600 opacity-90">
          {/* Abstract Shapes for visual interest */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-200/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-2xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side - Header Section */}
        <div className="text-white md:w-1/2 w-full space-y-5 p-6">
          <h2 className="text-4xl font-bold mb-4">Stay Informed</h2>
          <p className="text-base font-montserrat max-w-md leading-relaxed">
          Get exclusive insights and updates
          delivered straight to your inbox
          </p>
          <div className=" flex items-center gap-x-4">
               <div className="p-5 bg-[#d297ed] rounded-full flex items-center justify-center">
                  <MailIcon className=" size-8 "/>
               </div>
               <div className="flex flex-col space-y-2">
               <h4 className=" text-xl md:text-2xl font-semibold font-montserrat">
          Weekly digest
               </h4>
               <p className=" text-base">
                Every Friday morning
               </p>
               </div>
          </div>
        </div>

        {/* Right Side - Subscription Form */}
        <div className="md:w-1/2 w-full   p-6">
          <form className="space-y-6">
            <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email address
          </label>
          <div className="mt-1">
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>
            </div>

            <div>
          <label className="block text-sm font-medium text-white mb-2">
            Your Interests
          </label>
          <div className="grid grid-cols-2 gap-3">
            {['Technology', 'Stock Market', 'Politics', 'Health'].map((interest) => (
              <label key={interest} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
            />
            <span className="text-white">{interest}</span>
              </label>
            ))}
          </div>
            </div>

            <button
          type="submit"
          className="w-full bg-white text-purple-600 py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium"
            >
          Subscribe Now
            </button>
          </form>
          </div>
        </div>
          </div>
        </div>
     
      
    );
  }