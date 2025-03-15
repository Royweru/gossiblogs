/* eslint-disable @typescript-eslint/no-unused-vars */
import { urlFor } from "@/lib/imageBuilder";
import { PostType } from "@/types";
import Image from "next/image";
import React from "react";
import { SectionHeader } from "./section-header";

export const FeaturedStories = ({ posts }: { posts: PostType[] }) => {
  const postImageUrl1 = posts[0].mainImage
    ? urlFor(posts[0].mainImage)?.url()
    : null;
  // const postImageUrl2 = posts[1].mainImage
  //   ? urlFor(posts[1].mainImage)?.url()
  //   : null;
  // const postImageUrl3 = posts[2].mainImage
  //   ? urlFor(posts[2].mainImage)?.url()
  //   : null;
  // const postImageUrl4 = posts[3].mainImage
  //   ? urlFor(posts[3].mainImage)?.url()
  //   : null;
  return (
    <div className=" max-w-6xl lg:px-0 md:px-3 px-2 mx-auto ">
      <SectionHeader title="Editors pick" />

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/*Right side , first blog*/}
        <div className="relative  rounded-3xl overflow-hidden">
          {posts[5].mainImage && (
            <>
              <img
                src={ urlFor(posts[5]?.mainImage)?.url()
                  || '/entertainment2.jpg'
                }
                alt={posts[5].title}
                className="object-cover w-full h-full absolute -z-10"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
            </>
          )}

          <div className="relative p-8 h-full flex flex-col justify-end text-white">
              <span className="text-sm bg-zinc-700/90 text-white shadow-sm px-3 py-1 rounded-full w-fit ">
                {posts[5].category.title}
              </span>
           
            <a href={`/blogs/${posts[5].currentSlug}`}>
            <h1 className="text-4xl font-bold mt-2 mb-4 hover:underline cursor-pointer">
              {posts[5].title || "Want a Career in Technology?"}
            </h1>
            </a>

            <time className=" text-lg">
              {new Date(posts[5].publishedAt).toLocaleDateString("en-us", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>


 {/*End of right side blog*/}

 {/*Right side , second set of  blogs*/}

        <div className="space-y-4 relative">

            {/*First blog*/}
          <div className="  flex h-32 items-center gap-x-2 justify-between w-full ">
            <div className=" h-32 md:w-1/2 w-full relative rounded-2xl overflow-hidden">
              {posts[4]?.mainImage && (
          <Image
            src={ urlFor(posts[4]?.mainImage)?.url() ||'/entertainment-1.jpg'}
            alt={posts[1].title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl object-center"
          />
              )}
            </div>

            <div className="relative p-1.5 h-full flex w-full flex-col justify-between  text-gray-900">
              <span className="text-sm bg-sky-500/80 shadow-sm px-3 py-1 rounded-full text-white w-fit">
          {posts[4]?.category?.title || "Technology"}
        
              </span>
              <a href={`/blogs/${posts[4].currentSlug}`}>
          <h2 className="md:text-base  text-sm font-semibold hover:underline cursor-pointer">
            {posts[4]?.title?.slice(0, 50) ||
              "15 Shocking Elon Musk Tweets"}
          </h2>
              </a>

              <time className="text-gray-500 text-sm italic">
          {new Date(posts[4].publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
              </time>
            </div>
          </div>

       {/*Second blog*/}
          <div className="  flex h-32 items-center justify-between w-full ">
            <div className=" h-32 md:w-1/2 w-full relative rounded-2xl overflow-hidden">
              {posts[7]?.mainImage && (
          <Image
            src={urlFor(posts[7]?.mainImage)?.url()||'/lifestyle2.jpg'}
            alt={posts[7].title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
              )}
            </div>

            <div className="relative p-1.5 h-full w-full flex flex-col justify-between text-gray-900">
              <span className="text-sm bg-pink-600/75 px-3 text-white py-1 rounded-full w-fit">
          {posts[7]?.category?.title || "Technology"}
              </span>
              <a href={`/blogs/${posts[7].currentSlug}`}>
          <h2 className="md:text-base  text-sm font-semibold cursor-pointer hover:underline ">
            {posts[7]?.title?.slice(0, 50) ||
              "15 Shocking Elon Musk Tweets"}
          </h2>
              </a>

              <time className="text-gray-500 text-sm italic">
          {new Date(posts[7].publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
              </time>
            </div>
          </div>

  {/*Third blog*/}
          <div className="  flex h-32 items-center justify-between w-full ">
            <div className=" h-32 md:w-1/2 w-full relative rounded-2xl overflow-hidden">
              {posts[3]?.mainImage && (
          <Image
            src={ urlFor(posts[3]?.mainImage)?.url()||"/business1.jpg"}
            alt={posts[3].title}
            fill
            style={{ objectFit: "cover" }}
            className="rounded-2xl"
          />
              )}
            </div>

            <div className="relative px-1.5 justify-between h-full w-full flex flex-col  text-gray-900">
              <span className="text-sm bg-lime-500/80 px-3 py-1 rounded-full w-fit">
          {posts[3]?.category?.title || "Technology"}
              </span>
              <a href={`/blogs/${posts[3].currentSlug}`}>
          <h2 className="md:text-base  text-sm font-semibold cursor-pointer hover:underline ">
            {posts[3]?.title?.slice(0, 50) ||
              "15 Shocking Elon Musk Tweets"}
          </h2>
              </a>
              <time className="text-gray-500 text-sm italic">
          {new Date(posts[3].publishedAt).toLocaleDateString("en-us", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
