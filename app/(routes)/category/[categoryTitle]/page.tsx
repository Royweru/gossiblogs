import { client } from "@/lib/sanity";
import CategoryDetailsClient from "./category-details-client";
import { Suspense } from "react";

const options = { next: { revalidate: 30 } };
const CategoryDetailsPage = async ({
  params,
}: {
  params: Promise<{ categoryTitle: string }>;
}) => {
  const POSTS_QUERY = `*[_type =="post" && category->title == $categoryTitle]{
                      title,
                      publishedAt,
                      "currentSlug":slug.current,
                      mainImage,
                      excerpt,
                      "estimatedReadingTime":round(length(pt::text(body))/5/180),
                      category->{title},
                       author->{name, twitter, bio, image, email},
   }`;
  const posts = await client.fetch(POSTS_QUERY, await params, options);
  

  return (
    <Suspense fallback={<div> Loading....</div>}>
       <div className="min-h-screen  md:py-8 py-6 ">
      <CategoryDetailsClient posts={posts} />
    </div>
    </Suspense>
   
  );
};

export default CategoryDetailsPage;
