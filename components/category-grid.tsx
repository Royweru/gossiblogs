import { PostType } from '@/types'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/lib/imageBuilder'

export const CategoryGrid = ({posts}:{
    posts:PostType[]
}) => {
  return (
    <div className=' max-w-6xl mx-auto lg:px-0 md:px-3 px-4 py-8 lg:py-14'>
      <div className="grid md:grid-cols-3 gap-6">
    <div className="bg-[#f4f4f4] shadow lg:p-4 p-2 rounded-2xl">
      <h3 className="text-2xl font-bold mb-4">Technology</h3>
      {posts.filter(p => p?.category?.title === 'Technology').slice(0, 3).map(post => (
      <Link key={post._id} href={`/blogs/${post.currentSlug}`} className=" py-3 border-b flex flex-col gap-y-1 last:border-0 px-1 hover:cursor-pointer">
         <div className=' relative h-48 rounded-lg w-full'>
           <Image
           fill
           src={post.mainImage ? (urlFor(post.mainImage)?.url() || "/image.png") : "/image.png"}
           alt={post.title}
           className='object-cover object-center rounded-lg'
           sizes="(max-width: 768px) 100vw, 33vw"
           />
         </div>
        <h4 className="font-medium hover:text-blue-600 font-montserrat">{post.title}</h4>
      </Link>
      ))}
    </div>
    
    <div className="bg-[#f4f4f4] shadow lg:p-4 p-2 rounded-2xl">
      <h3 className="text-2xl font-bold mb-4 text-blue-500">Finance</h3>
      {posts.filter(p => p?.category?.title === 'Finance').slice(0, 3).map(post => (
      <Link key={post._id} href={`/blogs/${post.currentSlug}`} className="flex flex-col gap-y-1 px-1 py-3 border-b last:border-0 hover:cursor-pointer">
         <div className=' relative h-48 rounded-lg w-full'>
           <Image
           fill
           src={post.mainImage ? (urlFor(post.mainImage)?.url() || "/image.png") : "/image.png"}
           alt={post.title}
           className='object-cover object-center rounded-lg'
           sizes="(max-width: 768px) 100vw, 33vw"
           />
         </div>
        <h4 className="font-medium hover:text-blue-600 cursor-pointer font-montserrat">{post.title}</h4>
      </Link>
      ))}
    </div>

    <div className="bg-[#f4f4f4] shadow lg:p-4 p-2 rounded-2xl">
      <h3 className="text-2xl font-bold mb-4 text-purple-600">Lifestyle</h3>
      {posts.filter(p => p?.category?.title === 'Lifestyle').slice(0, 3).map(post => (
      <Link key={post._id} href={`/blogs/${post.currentSlug}`} className="flex flex-col gap-y-1 px-1 py-3 border-b last:border-0 hover:cursor-pointer">
          <div className=' relative h-48 rounded-lg w-full'>
           <Image
           fill
           src={post.mainImage ? (urlFor(post.mainImage)?.url() || "/image.png") : "/image.png"}
           alt={post.title}
           className='object-cover object-center rounded-lg'
           sizes="(max-width: 768px) 100vw, 33vw"
           />
         </div>
        <h4 className="font-medium hover:text-blue-600 font-montserrat ">{post.title}</h4>
      </Link>
      ))}
    </div>
    </div>
    </div>
  
  )
}
