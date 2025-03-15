/* eslint-disable @typescript-eslint/no-unused-vars */

import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoryTitle: string }>;
}): Promise<Metadata> {
  const { categoryTitle } = await params;
  return {
    title: `Gossip Premier - ${categoryTitle}`,
    description: `Gossipremier blogs on ${categoryTitle}`,
  };
}
const CategoryPageLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
   
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12  mb-8 ">
      <div className="flex flex-col md:flex-row gap-4">
        <div className=" md:w-2/3 ">{children}</div>
        <div className="md:w-1/3">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 pb-2 border-b border-gray-200 relative">
              TRENDING NOW
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-pink-500"></span>
            </h3>

            <div className="mt-6 space-y-6">
              <div className="flex items-start">
                <span className="text-4xl font-serif font-bold text-gray-300 mr-4">
                  1
                </span>
                <div>
                  <Link
                    href="/lifestyle/uk-outdoor-restaurants"
                    className="font-bold text-gray-900 hover:text-pink-500 transition-colors"
                  >
                    The UK&apos;s Best Outdoor Restaurants and Terraces
                  </Link>
                  <div className="mt-1 text-xs text-gray-500">
                    <span>in LIFESTYLE</span>
                    <span className="mx-2">•</span>
                    <span>985</span>
                    <span className="mx-2">•</span>
                    <span>2</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-4xl font-serif font-bold text-gray-300 mr-4">
                  2
                </span>
                <div>
                  <Link
                    href="/fashion/best-mascaras"
                    className="font-bold text-gray-900 hover:text-pink-500 transition-colors"
                  >
                    The 17 Best Mascaras of All Time
                  </Link>
                  <div className="mt-1 text-xs text-gray-500">
                    <span>in FASHION</span>
                    <span className="mx-2">•</span>
                    <span>503</span>
                    <span className="mx-2">•</span>
                    <span>1</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <span className="text-4xl font-serif font-bold text-gray-300 mr-4">
                  3
                </span>
                <div>
                  <Link
                    href="/lifestyle/christmas-fashion-gifts"
                    className="font-bold text-gray-900 hover:text-pink-500 transition-colors"
                  >
                    Best Christmas gifts for fashion lovers
                  </Link>
                  <div className="mt-1 text-xs text-gray-500">
                    <span>in LIFESTYLE</span>
                    <span className="mx-2">•</span>
                    <span>421</span>
                    <span className="mx-2">•</span>
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default CategoryPageLayout;
