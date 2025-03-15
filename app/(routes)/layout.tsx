/* eslint-disable @typescript-eslint/no-unused-vars */

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { client } from '@/lib/sanity';
import { IndividualPost } from '@/types';
import React from 'react'

const POSTS_QUERY = `*[
    _type == "post"]|order(publishedAt desc){
    _id, 
    title, 
    "currentSlug":slug.current,
    publishedAt,
    mainImage,
    category->{title},
    author->{name, twitter, bio, image, email},
    excerpt,
    body
    }`;
    const options = { next: { revalidate: 30 } };
const RoutesLayout =async({
    children
}:{
    children:React.ReactNode
}) => {
    const posts = await client.fetch<IndividualPost[]>(POSTS_QUERY,{},options)
  return (
     <div className=' relative min-h-screen w-full'>
   
         <Navbar  posts={posts} />
          {children}
          <Footer />
     </div>
  )
}

export default RoutesLayout