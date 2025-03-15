import React from 'react'
import AudioPageIdClient from './audio-page-id-client';
import { client } from '@/lib/sanity';
const POST_QUERY = `*[_type == "audioBlogPost" && slug.current == $audioSlug][0]{
  title,
  body,
   publishedAt,
   slug,
   mainImage,
  audio{
          asset->{
          _id,
          url
        },
     category->{title},
     author->{
      name
     }
 
}`;
const options = {next:{revalidate:30}}
const AudioIdPage =async ({params}:{
  params:Promise<{audioSlug:string}>
}) => {
  const post  = await client.fetch(POST_QUERY,await params,options)
  console.log(post)
  return (
   <AudioPageIdClient audioBlog={post}/>
  )
}

export default AudioIdPage