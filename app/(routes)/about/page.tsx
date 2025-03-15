/* eslint-disable @typescript-eslint/no-unused-vars */
// pages/about.js

import Link from 'next/link'
import Image from 'next/image'


export default function About() {

  
  // Team members data
  const teamMembers = [
    {
      name: "Delilah Khomo",
      role: "Editor-in-Chief & Travel Editor",
      bio: "With over 15 years of experience in lifestyle journalism, Delilah brings her passion for travel, food, and culture to every story she curates.",
      image: "/api/placeholder/400/400"
    },
    {
      name: "James Mitchell",
      role: "Beauty Director",
      bio: "Former makeup artist turned beauty journalist, James has an eye for emerging trends and a commitment to honest product reviews.",
      image: "/api/placeholder/400/400"
    },
    {
      name: "Sophia Chen",
      role: "Fashion Editor",
      bio: "Having worked with major fashion houses in Paris and Milan, Sophia brings insider knowledge and a distinctive aesthetic perspective.",
      image: "/api/placeholder/400/400"
    },
    {
      name: "Marcus Oladipo",
      role: "Food & Dining Editor",
      bio: "A trained chef with a passion for storytelling, Marcus explores culinary trends and restaurant experiences with expertise and enthusiasm.",
      image: "/api/placeholder/400/400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 md:py-8 py-6">

    

      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-pink-400 to-purple-500">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl font-serif font-bold text-white mb-4">About Glossier</h1>
            <p className="text-xl text-white">Curating lifestyle content that inspires, informs, and delights since 2018</p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-4">
                Founded in 2018, Glossier began as a small passion project focused on beauty trends and has since evolved into a comprehensive lifestyle destination covering fashion, travel, food, culture, and wellness.
              </p>
              <p className="mb-4">
                Our mission is to provide thoughtful, well-researched content that helps our readers live more intentionally and beautifully. We believe in quality over quantity, authenticity over perfection, and sustainability as a core value in everything we cover.
              </p>
              <p>
                What sets us apart is our dedication to discovering unique stories and perspectives that might otherwise go unnoticed in mainstream media. From hidden restaurant gems to emerging designers and wellness practices rooted in ancient traditions, we seek to highlight the extraordinary in the everyday.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-80 md:h-full rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/about1.jpg" 
                alt="Glossier team working together" 
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-pink-100 text-pink-600 mb-4">
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Authenticity</h3>
              <p className="text-gray-600">We believe in honest reporting and genuine recommendations, free from overly commercial influences.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">We&apos;re committed to promoting eco-conscious choices and highlighting brands that prioritize the planet.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Inclusivity</h3>
              <p className="text-gray-600">We celebrate diverse voices and perspectives, ensuring our content speaks to people from all walks of life.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm transform transition duration-300 hover:-translate-y-2">
              <div className="relative h-64">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-pink-500 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5M+</div>
              <div className="text-lg">Monthly Readers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">42</div>
              <div className="text-lg">Countries Reached</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15K</div>
              <div className="text-lg">Articles Published</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-lg">Industry Awards</div>
            </div>
          </div>
        </div>
      </div>

      {/* Join Our Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-sm">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Join Our Team</h2>
            <p className="text-lg text-gray-600 mb-8">
              We&apos;re always looking for passionate writers, photographers, and content creators to join our growing team. If you have a unique perspective and a love for lifestyle content, we&apos;d love to hear from you.
            </p>
            <Link href="/careers" className="inline-block px-8 py-3 bg-pink-500 text-white rounded-full text-lg font-medium transition-colors hover:bg-pink-600">
              View Open Positions
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Get In Touch</h2>
            <div className="prose prose-lg text-gray-600 max-w-none mb-8">
              <p>
                Have a question, feedback, or a potential collaboration? We&apos;d love to hear from you. Our team typically responds within 48 hours during business days.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">contact@glossier.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">+44 20 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-6 w-6 text-pink-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-lg font-medium text-gray-900">Address</p>
                  <p className="text-gray-600">123 Fashion Street, London, UK</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <form className="bg-white p-8 rounded-lg shadow-sm">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-pink-500 text-white rounded-md font-medium transition-colors hover:bg-pink-600">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
</div>
  )
}