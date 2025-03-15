import React from 'react'

export const SectionHeader = ({
    title}:{
    title:string
}) => {
  return (
<div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-8">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        <a href="/news" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
          View More
        </a>
      </div>
  )
}
