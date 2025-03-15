import React from 'react';
import { urlFor } from '@/lib/imageBuilder';
import { PostType } from '@/types';

export const NewsGrid = ({ posts }: { posts: PostType[] }) => {
  // Early return if no posts
  if (!posts || posts.length === 0) {
    return <div className="text-center py-12">No stories available</div>;
  }

  // Ensure we have enough posts to display
  const displayPosts = posts.slice(0, Math.min(posts.length, 6));

  return (
    <div className="w-full max-w-6xl mx-auto lg:px-0 md:px-3 px-2 sm:px-4  mb-8 lg:mb-12">
      {/* Header Section */}
      <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Latest Stories</h2>
        <a href="/news" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
          View More
        </a>
      </div>

      {/* Featured Article - Larger and more prominent */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
        <div className="lg:col-span-7 group cursor-pointer">
          {displayPosts[0] && (
            <div className="relative h-full overflow-hidden rounded-xl shadow-lg transform transition duration-300 hover:scale-[1.02] ">
              <div className="h-96 relative overflow-hidden">
                {displayPosts[0].mainImage && (
                  <img
                    src={urlFor(displayPosts[0].mainImage)?.width(800)?.url()}
                    alt={displayPosts[0].title || "Featured article"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:bg-black/80">
                <div className="mb-2">
                  <span className="bg-indigo-600 text-white
                   uppercase text-xs px-3 py-1 rounded-full font-semibold tracking-wider">
                    {displayPosts[0].category.title || "Lifestyle"}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2 ">{displayPosts[0].title}</h3>
                <p className="line-clamp-2  mb-2">{displayPosts[0].excerpt}</p>
                <div className="flex items-center text-sm ">
                  <span>{new Date(displayPosts[0].publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  <span className="mx-2">•</span>
                  <span>{displayPosts[0].author?.name || "CMSMASTERS"}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Secondary Feature Articles - Vertical Stack */}
        <div className="lg:col-span-5">
          <div className="grid grid-cols-1 gap-6 h-full">
            {[displayPosts[1], displayPosts[2]].map((post, index) => (
              post && (
                <div key={post._id || index} className="group cursor-pointer rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-[1.02] bg-white">
                  <div className="flex flex-col sm:flex-row h-full">
                    <div className="w-full sm:w-1/2 h-48 sm:h-auto relative">
                      {post.mainImage && (
                        <img
                          src={urlFor(post.mainImage)?.width(400).url()}
                          alt={post.title || "Article image"}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <div className="w-full sm:w-1/2 p-4 flex flex-col justify-center">
                      <div className="mb-2">
                        <span className="bg-pink-100 text-pink-800 uppercase text-xs px-2 py-1 rounded-full font-semibold tracking-wider">
                          {displayPosts[0].category.title || "Fashion"}
                        </span>|

                      </div>

                      <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-500 text-sm mb-2 line-clamp-2">{post.excerpt}</p>
                      <div className="text-xs text-gray-400 mt-auto">
                        {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row - Smaller Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[displayPosts[3], displayPosts[4], displayPosts[5]].map((post, index) => (
          post && (
            <div key={post._id || index} className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-[1.02] group cursor-pointer">
              <div className="h-48 relative overflow-hidden">
                {post.mainImage && (
                  <img
                    src={urlFor(post.mainImage)?.width(400).url()}
                    alt={post.title || "Article image"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <span className={`text-xs px-2 py-1 rounded-full font-semibold tracking-wider uppercase ${
                    index % 3 === 0 ? 'bg-green-100 text-green-800' : 
                    index % 3 === 1 ? 'bg-purple-100 text-purple-800' : 
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {displayPosts[0].category.title || "Lifestyle"}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-2 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
                  <span>{new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</span>
                  <span>{post.author?.name || "CMSMASTERS"}</span>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};