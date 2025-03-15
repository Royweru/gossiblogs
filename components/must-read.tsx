import { PostType } from "@/types";
import React from "react";

import { urlFor } from "@/lib/imageBuilder";

export const MustRead = ({ posts }: { posts: PostType[] }) => {
  // Early return if no posts
  if (!posts || posts.length < 3) {
    return <div className="text-center py-12">Insufficient content for Must Read section</div>;
  }

  // Get featured post and remaining posts
  const featuredPost = posts[0] || null;
  const remainingPosts = posts.slice(4, 6);

  return (
    <section className="w-full lg:px-0 md:px-3 px-2 max-w-6xl mx-auto py-12 md:py-16">
      {/* Section Header with stylish accent */}
      <div className="flex items-center mb-8 gap-x-4">
        <h2 className="text-3xl font-bold text-neutral-900">Must Read</h2>
        <div className="h-[1px] bg-gradient-to-r from-pink-500 to-indigo-500 flex-grow opacity-80"></div>
      </div>

      <div className="grid md:grid-cols-12 gap-8">
        {/* Left Column - Featured Article + Regular Articles */}
        <div className="md:col-span-8 space-y-8">
          {/* Featured Article */}
          {featuredPost && (
            <div className="group relative overflow-hidden rounded-xl shadow-lg bg-white transform transition duration-300 hover:shadow-xl cursor-pointer">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-7/12 h-64 md:h-auto relative overflow-hidden">
                  {featuredPost.mainImage && (
                    <img
                      src={urlFor(featuredPost.mainImage)?.width(600).url()}
                      alt={featuredPost.title || "Featured article"}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-pink-600 uppercase text-xs px-3 py-1.5 rounded-full font-semibold tracking-wider shadow-sm">
                      Editor&apos;s Pick
                    </span>
                  </div>
                </div>

                <div className="md:w-5/12 p-6 flex flex-col justify-center">
                  <div className="mb-3">
                    <span className="bg-purple-100 text-purple-800 uppercase text-xs px-3 py-1 rounded-full font-semibold tracking-wider">
                      {featuredPost.category.title || "Featured"}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-pink-600 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                    {featuredPost.excerpt || "Discover the latest trends and insights in this must-read feature article selected by our editors."}
                  </p>
                  <div className="flex items-center text-xs text-neutral-500 mt-auto">
                    <div className="flex items-center">
                      <span className="inline-block w-6 h-6 rounded-full bg-neutral-200 mr-2"></span>
                      <span className="font-medium">{featuredPost.author?.name || "CMSMASTERS"}</span>
                    </div>
                    <span className="mx-2">•</span>
                    <span>
                      {new Date(featuredPost.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{ "5 min read"}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular Articles with Modern Design */}
          <div className="grid gap-6">
            {remainingPosts.map((post, index) => (
              <div 
                key={post._id || index} 
                className="flex flex-col sm:flex-row gap-5 p-5 rounded-xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="sm:w-1/3 aspect-[4/3] overflow-hidden rounded-lg relative">
                  {post.mainImage ? (
                    <img
                      src={urlFor(post.mainImage)?.width(300).url()}
                      alt={post.title || "Article image"}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-neutral-200 flex items-center justify-center">
                      <span className="text-neutral-400">No image</span>
                    </div>
                  )}
                  {index === 0 && (
                    <div className="absolute top-2 left-2">
                      <span className="bg-amber-400 text-amber-900 text-xs px-2 py-0.5 rounded font-medium">
                        Trending
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="sm:w-2/3 flex flex-col">
                  <div className="mb-2 flex flex-wrap gap-2">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      index % 2 === 0 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {post.category.title || "Lifestyle"}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-neutral-600 text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-xs text-neutral-500 mt-auto">
                    <span className="font-medium">{post.author?.name || "CMSMASTERS"}</span>
                    <span className="mx-2">•</span>
                    <span>
                      {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Stay Connected */}
        <div className="md:col-span-4">
          <div className="sticky top-24 bg-gradient-to-br from-indigo-50 to-pink-50 rounded-xl shadow-sm p-6 border border-indigo-100/80">
            <h3 className="text-xl font-bold mb-5 text-neutral-900 flex items-center">
              <span className="w-8 h-8 flex items-center justify-center bg-indigo-600 text-white rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M3.105 2.289a.75.75 0 0 0-.826.95l1.414 4.925A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.896 28.896 0 0 0 15.293-7.154.75.75 0 0 0 0-1.115A28.897 28.897 0 0 0 3.105 2.289Z" />
                </svg>
              </span>
              Stay Connected
            </h3>
            
            
            {/* Newsletter Signup */}
            <div className="mt-8 pt-6 border-t border-indigo-200/50">
              <h4 className="font-semibold text-neutral-900 mb-3">Get Weekly Updates</h4>
              <p className="text-sm text-neutral-600 mb-4">Subscribe to our newsletter for curated content delivered to your inbox.</p>
              
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                />
                <button className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-2.5 rounded-lg text-sm font-medium hover:from-indigo-700 hover:to-pink-700 transition-all shadow-sm">
                  Subscribe
                </button>
              </div>
              
              <p className="text-xs text-neutral-500 mt-3">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};