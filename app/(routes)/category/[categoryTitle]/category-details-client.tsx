/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { urlFor } from "@/lib/imageBuilder";
import { IndividualPost } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryDetailsClient = ({ posts }: { posts: any[] }) => {
  const categoryTitle = posts[0]?.category?.title || "ENTERTAINMENT";
  // console.log({categoryPosts:posts})
  if (!posts || posts.length === 0) {
    return (
      <div className=" w-full space-y-2 ">
        {/* Header */}
        <header className=" py-3 border-b">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-5xl font-bold text-gray-900">Category</h1>
            <div className="flex items-center mt-4 text-sm text-gray-600">
              <Link href={"/"}>Home</Link>
              <span className="mx-2">&gt;</span>
              <span>Category {categoryTitle}</span>
            </div>
          </div>
        </header>
        {/*content*/}
        <div className=" overflow-hidden border-b border-gray-900 flex flex-col w-full  last:border-0 relative sm:flex-row lg:py-4 md:py-3 py-2 ">
          <div className="sm:w-1/2 md:w-1/3 w-full">
            <div className="relative sm:h-full h-[300px] w-full rounded-xl">
              <Image
                src={
                  (posts[0]?.mainImage && urlFor(posts[0]?.mainImage)?.url()) ||
                  "/lifestyle2.jpg"
                }
                alt="Palm trees at sunset"
                fill
                className="transition-transform  rounded-xl
          duration-300 hover:scale-105 bg-cover bg-center "
              />
            </div>
          </div>

          <div className="px-4 relative sm:w-1/2 md:w-2/3 w-full py-3">
            <div className="uppercase tracking-wide text-sm text-pink-500 font-semibold mb-2">
              {categoryTitle}
            </div>
            <Link href="/blogs" className="block">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 hover:text-pink-500 transition-colors">
                {posts[0]?.title ||
                  "The most controversial people on the internet today"}
              </h2>
            </Link>
            <p className="mt-3 text-gray-600 md:text-sm text-xs font-montserrat">
              With the promise of warm weather and sunshine (finally!) on the
              horizon, travel editor Delilah Khomo has the inside track on the
              best outdoor dining spots across the UK...
            </p>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <span>By {posts[1]?.author?.name || "Jeff Bezos"}</span>
              <span className="mx-2">•</span>
              <span>2 Comments</span>
            </div>
          </div>
        </div>
        <div className=" overflow-hidden border-b border-gray-900 flex flex-col w-full  last:border-0 relative sm:flex-row lg:py-4 md:py-3 py-2">
          <div className="sm:w-1/2 md:w-1/3 w-full">
            <div className="relative sm:h-full h-[300px] w-full rounded-xl">
              <Image
                src={
                  (posts[1]?.mainImage && urlFor(posts[1]?.mainImage)?.url()) ||
                  "/culture1.jpg"
                }
                alt="Palm trees at sunset"
                fill
                className="transition-transform  rounded-xl
          duration-300 hover:scale-105 bg-cover bg-center "
              />
            </div>
          </div>

          {/*Trending now */}
          <div className="px-4 relative sm:w-1/2 md:w-2/3 w-full py-3">
            <div className="uppercase tracking-wide text-sm text-pink-500 font-semibold mb-2">
              {categoryTitle}
            </div>
            <Link href="/blogs" className="block">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 hover:text-pink-500 transition-colors">
                The UK&apos;s Best Outdoor Restaurants and Terraces
              </h2>
            </Link>
            <p className="mt-3 text-gray-600 md:text-sm text-xs font-montserrat">
              With the promise of warm weather and sunshine (finally!) on the
              horizon, travel editor Delilah Khomo has the inside track on the
              best outdoor dining spots across the UK...
            </p>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <span>By {posts[0]?.author?.name || "Jeff Bezos"}</span>
              <span className="mx-2">•</span>
              <span>2 Comments</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className=" w-full space-y-2 ">
      {/* Header */}
      <header className=" py-3 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900">Category</h1>
          <div className="flex items-center mt-4 text-sm text-gray-600">
            <Link href={"/"}>Home</Link>
            <span className="mx-2">&gt;</span>
            <span>Category {categoryTitle}</span>
          </div>
        </div>
      </header>
      {/*content*/}
      {posts.map((post: IndividualPost) => (
        
        <div
          key={post._id}
          className=" overflow-hidden border-b border-gray-900 flex flex-col w-full
                     last:border-0 relative sm:flex-row lg:py-4 md:py-3 py-2 "
        >
          <div className="sm:w-1/2 md:w-1/3 w-full">
            <div className="relative sm:h-full h-[300px] w-full rounded-xl">
              <Image
                src={
                  (post?.mainImage && urlFor(post?.mainImage)?.url()) ||
                  "/lifestyle2.jpg"
                }
                alt="Palm trees at sunset"
                fill
                className="transition-transform  rounded-xl
                          duration-300 hover:scale-105 bg-cover bg-center "
              />
            </div>
          </div>

          <div className="px-4 relative sm:w-1/2 md:w-2/3 w-full py-3">
            <div className="uppercase tracking-wide text-sm text-pink-500 font-semibold mb-2">
              {categoryTitle}
            </div>
            <Link href={ `/blogs/${post.currentSlug}`} className="block">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 hover:text-pink-500 transition-colors">
                {post.title ||
                  "The most controversial people on the internet today"}
              </h2>
            </Link>
            <p className="mt-3 text-gray-600 md:text-sm text-xs font-montserrat">
              {post.excerpt ||
                " With the promise of warm weather and sunshine (finally!) on the horizon, travel editor Delilah Khomo has the inside track best outdoor dining spots across the UK..."}
            </p>
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <span>By {post.author?.name || "Jeff Bezos"}</span>
              <span className="mx-2">•</span>
              <span>2 Comments</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryDetailsClient;
