"use client"
import { urlFor } from '@/lib/imageBuilder'
import { PostType } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export const BlogSectionCard = ({
    data
}:{
    data:PostType
}) => {
    const router =useRouter()
    if(!data) return
  return (
    <div className=' md:space-y-4 space-y-3'>
        <div className=' w-full relative h-[200px] md:h-[250px] lg:h-[300px] mt-4'>
             <Image
               src={data.mainImage&&urlFor(data.mainImage)?.url()}
               alt={data.title}
               className=' object-cover rounded-md'
               fill
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               />
        </div>
        <div className=' pl-1' onClick={()=>router.push(`/categories/${data.category.title}`)}>
             <span className=' text-blue-500 text-sm font-light hover:underline'>
                {data.category.title}
             </span>
        </div>
        <div>
        <h4 className=' text-lg font-semibold leading-tight tracking-normal hover:underline'>
          {data.title}
        </h4>
        </div>
      
       
       
        <div className='pl-1 flex items-center gap-x-3'>
            <p className=' text-sm text-gray-900 font-semibold'>
                {data.author.name}
            </p>
            <span className=' text-xs'>
            {new Date(data.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
            </span>
        </div>
        <div className=' w-full'>
            <p className='text-sm lg:text-base'>
            Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ....
            </p>
        </div>
    </div>
  )
}
