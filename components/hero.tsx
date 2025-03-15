import Image from 'next/image';
import { NavbarHero } from './navbar-hero'; // Assuming this is imported correctly

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden min-h-screen md:py-0 py-2 w-full bg-cover bg-center rounded-b-md" style={{ backgroundImage: "url(/bg-hero.jpg)" }}>
      <NavbarHero />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-200 via-pink-300 to-indigo-300 opacity-20" />
      
      <div className="relative h-full w-full flex items-center justify-center">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-4">
          {/* Image Section - Left Side */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-xl h-full aspect-[4/4]">
              <Image
                src='/gal-bg3.png'
                alt="Hero"
                fill
                style={{ objectFit: 'contain' }}
                className="object-cover"
              />
            </div>
          </div>

          {/* Content Section - Right Side */}
          <div className="text-white text-center md:text-left">
            <h1 className="lg:text-5xl md:text-3xl text-2xl md:py-0  font-bold lg:mb-8 md:mb-6 mb-5 leading-tight">
              Stay up to date with the latest updates
            </h1>
            <p className="text-base md:text-lg md:mb-6 mb-4 text-neutral-200 font-montserrat max-w-md mx-auto md:mx-0 font-normal leading-relaxed">
              Explore cutting-edge innovations that shape our world
            </p>
            <button className="bg-purple-400 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Explore Now
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Bubble Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-10 h-10 bg-blue-400/30 rounded-full top-20 left-20 animate-float-up-slow"></div>
        <div className="absolute w-6 h-6 bg-pink-500/40 rounded-full top-40 right-40 animate-pulse"></div>
        <div className="absolute w-12 h-12 bg-green-500/30 rounded-full bottom-20 left-60 animate-bounce-slow"></div>
        <div className="absolute w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full top-40 right-20 animate-rotate-slow"></div>
        <div className="absolute w-14 h-14 bg-gradient-to-r from-pink-500 to-pink-700/50 rounded-full bottom-40 left-40 animate-float-up"></div>
      </div>

      {/* Background Gradient Pulse */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-green-500/10 animate-pulse-slow"></div>
    </div>
  );
}