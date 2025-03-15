/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { urlFor } from "@/lib/imageBuilder";
import Link from "next/link";
import React from "react";

const VideosClient = ({ videoBlogs }: { videoBlogs: any[] }) => {
  return (
    <div className="min-h-screen mt-12 mb-8 w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4 md:gap-6 px-4">
        {/*content*/}
        <main className="md:w-2/3 w-full">
          {/*Header */}

          <header className="pb-8 mb-2 border-b">
            <div className="max-w-6xl mx-auto px-4">
              <h1 className="text-5xl font-bold text-gray-900">Podcast</h1>
              <div className="flex items-center mt-4 text-sm text-gray-600">
                <a href="#">Home</a>
                <span className="mx-2">&gt;</span>
                <span>Videos</span>
              </div>
            </div>
          </header>

          {/* First Article */}
          {videoBlogs.map((vid) => (
            <Link key={vid._id} href={`/watch/${vid.currentSlug}`}>
              <article className="mb-4 bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row">
                <div className="md:w-2/5 bg-pink-600 relative">
                  <img
                    src={vid.thumbnail&&(urlFor(vid.thumbnail)?.url()) ||'/podcast4.jpg'}
                    alt="Person with sunglasses"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <span className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-md mb-3">
                    {vid.category.title}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                   {vid.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                  {vid.excerpt}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <span className="mr-3">By ECOTRENDS</span>
                    <span className="flex items-center mr-3">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        ></path>
                      </svg>
                      3 Comments
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}

          {/* Second Article */}
        </main>

        <aside className="md:w-1/3  relative w-full">
          <div className="bg-white p-6 rounded-lg shadow-md ">
            <h3 className="text-lg font-bold border-b border-gray-200 pb-3 mb-6 flex items-center">
              <span className="inline-block w-2 h-6 bg-red-500 mr-2"></span>
              TRENDING NOW
            </h3>

            <div className="space-y-6">
              {/* Trending Item 1 */}
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-gray-300">1</span>
                <div>
                  <h4 className="font-semibold text-gray-800 hover:text-red-500 transition">
                    The UK&apos;s Best Outdoor Restaurants and Terraces
                  </h4>
                  <div className="text-xs text-gray-500 mt-1">
                    <span className="uppercase">in LIFESTYLE</span>
                    <span className="inline-flex items-center ml-3">
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                      856
                    </span>
                    <span className="inline-flex items-center ml-3">
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        ></path>
                      </svg>
                      2
                    </span>
                  </div>
                </div>
              </div>

              {/* Trending Item 2 */}
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-gray-300">2</span>
                <div>
                  <h4 className="font-semibold text-gray-800 hover:text-red-500 transition">
                    The 15 Best Mascaras for Volume and Length
                  </h4>
                  <div className="text-xs text-gray-500 mt-1">
                    <span className="uppercase">in FASHION</span>
                    <span className="inline-flex items-center ml-3">
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                      492
                    </span>
                    <span className="inline-flex items-center ml-3">
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        ></path>
                      </svg>
                      1
                    </span>
                  </div>
                </div>
              </div>

              {/* Trending Item 3 */}
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-gray-300">3</span>
                <div>
                  <h4 className="font-semibold text-gray-800 hover:text-red-500 transition">
                    Sustainable Christmas Gift Ideas for Fashion Lovers
                  </h4>
                  <div className="text-xs text-gray-500 mt-1">
                    <span className="uppercase">in NEWS</span>
                    <span className="inline-flex items-center ml-3">
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        ></path>
                      </svg>
                      298
                    </span>
                    <span className="inline-flex items-center ml-3">
                      <svg
                        className="w-3 h-3 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        ></path>
                      </svg>
                      1
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2">
              <button className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-md shadow-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </button>
              <button className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-md shadow-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  ></path>
                </svg>
              </button>
              <button className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-md shadow-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default VideosClient;
