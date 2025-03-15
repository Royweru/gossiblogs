"use client"

import { urlFor } from '@/lib/imageBuilder'
import { PostType } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

export const MustReadCard = ({
    data
}:{
    data:PostType
}) => {
    const router = useRouter()
  return (
    <div 
    className=' flex relative w-full gap-4 '
     >
       
    <div className=' w-1/2 relative h-[180px] md:h-[200px] lg:h-[220px]'>
      <Image
        src={data.mainImage&&urlFor(data.mainImage)?.url()||"/image.png"}
        alt={data.title}
        fill
        style={{objectFit:'cover'}}
        className=' object-contain'
        />
    </div>
     <div className=' flex flex-col space-y-2 w-1/2 h-full'>
     <div className=' pl-1' onClick={()=>router.push(`/categories/${data.category.title}`)}>
         <span className=' text-blue-500 text-sm font-light hover:underline cursor-pointer'>
          {data.category.title}
         </span>
      </div>
      <div className=' w-full '>
         <p className=' md:text-lg text-base font-semibold leading-tight'>
         {data.title}
         </p>
      </div>
      <p className=' text-sm font-normal  font-montserrat '>
       {new Date().toLocaleDateString('en-US',{
        year: 'numeric',
        month: 'long',
        day: 'numeric'
       })}    
      </p>
     </div>
     </div>
  )
}
