import { IndividualPost} from '@/types'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/imageBuilder'
import { PortableText } from 'next-sanity'
export const MainArticle = ({post}:{
    post:IndividualPost
}) => {
    const postImageUrl = post.mainImage
    && urlFor(post.mainImage)?.url()
    
  return (
    <article className="lg:w-2/3 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
    <div className="my-2 lg:my-4">
      <Link href="/" className="inline-flex items-center text-blue-600 hover:underline">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" />
        </svg>
        Back
      </Link>
    </div>

    {postImageUrl && (
      <figure className="mb-8">
         <div className="relative h-96 w-full rounded-lg overflow-hidden">
        <Image
          src={postImageUrl}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="object-cover"
          />
         </div>
        <figcaption className="mt-2 text-sm text-gray-500 italic">Digital art by Anonymous</figcaption>
      </figure>
    )}

    <header className="mb-8 lg:mb-10 space-y-4">
      <h1 className="mb-4 text-4xl font-extrabold leading-tight text-gray-900 lg:text-5xl dark:text-white">
        {post.title}
      </h1>
      <div className="flex items-center space-x-4">
        <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
          {post?.category?.title}
        </span>
        <time className="text-sm text-gray-500 dark:text-gray-400">
          {new Date(post.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
      </div>
    </header>

    <div className="prose prose-lg dark:prose-invert max-w-none">
      {Array.isArray(post.body) && <PortableText value={post.body} />}
    </div>
  </article>
  )
}
