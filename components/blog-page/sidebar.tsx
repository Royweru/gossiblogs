import { urlFor } from "@/lib/imageBuilder";
import { PostType } from "@/types";
import Image from "next/image";
import React from "react";

export const Sidebar = ({ posts }: { posts: PostType[] }) => {
  return (
    <aside className="lg:w-1/3 space-y-8 mt-4">
      {/* Newsletter Subscription */}
      <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
        <h3 className="text-xl font-bold mb-4">Subscribe to our newsletter</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Get the latest posts delivered right to your inbox
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Related Posts */}
      {posts && (
        <div className="p-6 bg-accents-gradientGray shadow-sm dark:bg-gray-800 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Related Posts</h3>
          <div className="space-y-4">
            {/* You'll need to fetch related posts based on category */}
            {posts.map((post, i) => (
              <div key={i} className="flex items-center space-x-4 w-full">
                <div className="h-40 bg-gray-200 rounded-lg w-1/2 relative ">
                  <Image
                    fill
                    src={
                      (post.mainImage && urlFor(post.mainImage)?.url()) ||
                      "/image.png"
                    }
                    alt={post.title}
                    className=" bg-cover bg-center rounded-lg"
                  />
                </div>
                <div className=" w-1/2 relative">
                  <a href={`/blogs/${post.currentSlug}`}>
                    <h4 className="font-semibold hover:text-blue-600 cursor-pointer">
                      {post.title}
                    </h4>
                  </a>

                  <p className="text-sm text-gray-500">5 min read</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
};
