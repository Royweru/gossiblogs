import { PostType } from '@/types'
import React from 'react'

export const EditorsPick = ({posts}:{
    posts:PostType[]
}) => {
  return (
    <div className="md:mb-12 sm:mb-10 mb-8 max-w-6xl mx-auto lg:px-0 md:px-3 px-2">
    <h2 className="text-3xl font-bold mb-6">Editors Pick ⭐</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {posts.slice(0, 3).map((post) => (
        <div key={post._id} className="bg-white  p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">⭐ Editors Pick</span>
          <h3 className="text-xl font-bold mt-4 mb-2">{post.title}</h3>
          {/* <p className="text-gray-600">{post.excerpt}</p> */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-500">{post.category.title}</span>
            <span className="text-sm text-gray-500">{new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
