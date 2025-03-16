import React, { Suspense } from 'react'

const CategoryBlogsContent = () => {
  return (
    <div>CategoryBlogs</div>
  )
}

const CategoryBlogs = () =>{
  return(
    <Suspense fallback={<div>Loading...</div>}>
    <CategoryBlogsContent />
    </Suspense>
  )
}
export default CategoryBlogs