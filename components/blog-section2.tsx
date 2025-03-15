import { PostType } from '@/types'
import {ArrowRightIcon } from 'lucide-react'
import React from 'react'
import { BlogSectionCard } from './blog-section-card'

export const  BlogSection2 = ({
  posts}:{
  posts:PostType[]
}) => {
  if(!posts) return

  return (
    <div className=' w-full py-6 lg:py-8 max-w-6xl mx-auto grid gap-4 md:gap-8 md:grid-cols-2  lg:px-0 md:px-3 px-2'>
          <div className=' col-span-1  space-y-2'>
                  <div className=' w-full flex justify-between'>
                      <h5 className=' text-xl font-semibold '>
                          {posts[7].category.title}
                      </h5>
                      <div className=' flex gap-x-2 items-center '>
                        <a href={`/categories/${posts[7].category.title}`}>
                        <p className=' text-base italic hover:underline'>
                       View all
                       </p>
                        </a>
                     
                       <ArrowRightIcon className=' size-3.5 text-neutral-800 '/>
                      </div>
                  </div>
                  <BlogSectionCard
                   data={posts[7]} />
          </div>
          <div className=' col-span-1  space-y-2 '>
          <div className=' w-full flex justify-between'>
                      <h5 className=' text-xl font-semibold '>
                          {posts[0].category.title}
                      </h5>
                      <div className=' flex gap-x-2 items-center '>
                      <a href={`/categories/${posts[0].category.title}`}>
                        <p className=' text-base italic hover:underline'>
                       View all
                       </p>
                        </a>
                       <ArrowRightIcon className=' size-3.5 text-neutral-800 '/>
                      </div>
                  </div>
                  <BlogSectionCard
                   data={posts[0]}
                    />
          </div>
       </div>
  )
}
