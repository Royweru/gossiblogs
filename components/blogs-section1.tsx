/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { urlFor } from "@/lib/imageBuilder";
import { PostType } from "@/types";


type ImageProps = {
  src: string;
  alt?: string;
};

type BlogPost = {
  url: string;
  image: ImageProps;
  category: string;
  readTime: string;
  title: string;
  description: string;
  avatar: ImageProps;
  fullName: string;
  date: string;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  blogPosts: PostType[];
};

export type Blog33Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const BlogSection1 = (props: Blog33Props) => {
  const { tagline, heading, description, blogPosts } = {
    ...Blog33Defaults,
    ...props,
  };

  const blogsLength = blogPosts.length
  return (
    <section  className=" py-6 md:py-10 lg:py-12   relative w-full ">
      <div className="max-w-6xl mx-auto relative lg:px-0 md:px-3 px-2">
        <div className="lg:mb-10 md:mb-8 mb-6">
          <div className="mx-auto w-full  text-center">
            <h2 className="rb-5 mb-5  font-bold md:mb-6 
            tracking-tight text-2xl lg:text-4xl  text-accents-electricBlur">
              {heading}
            </h2>
            <p className="  text-neutral-800/75">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-12 lg:grid-cols-3">
          {blogPosts.slice(0,3).map((post, index) => {
            const articleMainImageUrl = urlFor(post.mainImage)?.url()||"/image.png";
            const articleAuthorImageUrl = urlFor(post.author.image)?.url()||"/image.png";

            return (
            <div key={index}>
              <a href={`/blogs/${post.currentSlug}`} className="mb-6 inline-block w-full max-w-full">
                <div className="w-full overflow-hidden">
                  <img
                  src={articleMainImageUrl}
                  alt={post.title}
                  className="aspect-video size-full object-cover"
                  />
                </div>
              </a>
              <a
            href={`/blogs/${post.currentSlug}`}
                className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold"
              >
                {post.category.title.slice(0,50)}
              </a>

              <a href={`/blogs/${post.currentSlug}`} className="mb-2 block max-w-full">
                <h5 className="text-xl font-bold md:text-2xl">{post.title}</h5>
              </a>
              <p>
                {post.excerpt.slice(0,80)
                ||'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan arcu. Nullam sit amet nisi nec nunc ultricies ultricies. Nullam sit amet nisi nec nunc ultricies ultricies.'
                }
              </p>
              <div className="mt-6 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src={articleAuthorImageUrl}
                    alt={post.author.name}
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-sm font-semibold">{post.author.name}</h6>
                  <div className="flex items-center">
                    <p className="text-sm">{new Date(post.publishedAt).toLocaleDateString('en-us',{
                        year:'numeric',
                        month:'long',
                        day:'numeric'
                    })}</p>
                    <span className="mx-2">•</span>
                   
                  </div>
                </div>
              </div>
            </div>
            )
})}
        </div>
        {/* <div className="flex items-center justify-center">
       
        </div> */}
      </div>
    </section>
  );
};

export const Blog33Defaults: Props = {
  tagline: "Toping the list this week",
  heading: "Toping the list this week", 
  description: "Most read and captivating blogs of the week",
 blogPosts: [

    ]
};
