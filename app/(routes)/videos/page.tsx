import React,{Suspense} from 'react'
import VideosClient from './videos-client'
import { client } from '@/lib/sanity';

const POSTS_QUERY = `*[
  _type == "videoBlogPost"]|order(publishedAt desc){
  _id, 
  title, 
  "currentSlug":slug.current,
  video,
  thumbnail,
  category->{title},
  author->{name, twitter, bio, image, email},
  excerpt
  }`;
  const options = {next:{revalidate:30}}
const VideosPage = async() => {
   const posts = await client.fetch(POSTS_QUERY,{},options)
   
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VideosClient videoBlogs={posts} />
    </Suspense>
   
  )
}

export default VideosPage