import React from 'react'
import VideoSlugPageClient from './video-slug-page-client'
import { client } from '@/lib/sanity';

const POST_QUERY = `*[_type == "videoBlogPost" && slug.current == $videoSlug][0]{
  title,
  body,
   publishedAt,
   slug,
   mainImage,
      category->{title},
 
}`;
;
const options = {next:{revalidate:30}}
const VideoSlugPage = async({params}:{
  params:Promise<{videoSlug:string}>
}) => {

  const post = await client.fetch(POST_QUERY,await params,options)
  console.log(post)
  return (
    <VideoSlugPageClient post={post} />
  )
}

export default VideoSlugPage