import { BlogSection1 } from "@/components/blogs-section1";
import { BlogSection2 } from "@/components/blog-section2";
import { CategoryGrid } from "@/components/category-grid";

import { FeaturedStories } from "@/components/featured";
import HeroSection from "@/components/hero";
import { NewsGrid } from "@/components/news-grid";
import { Newsletter } from "@/components/newsletter";
import { client } from "@/lib/sanity";
import { PostType } from "@/types";
import { MustRead } from "@/components/must-read";
import { Trending } from "@/components/trending";
import { WatchNowSection } from "@/components/watch-now";

const POSTS_QUERY = `*[
  _type == "post"]|order(publishedAt desc){
  _id, 
  title, 
  "currentSlug":slug.current,
  publishedAt,
  mainImage,
  category->{title},
  author->{name, twitter, bio, image, email},
  excerpt
  }`;
const options = { next: { revalidate: 30 } };

export default async function Home() {
  const posts = await client.fetch<PostType[]>(POSTS_QUERY, {}, options);
  console.log(posts)
  return (
    <>
      <HeroSection />
      <Trending />
      <FeaturedStories posts={posts} />
      <CategoryGrid posts={posts} />
      <Newsletter />
      <NewsGrid posts={posts} />
      <BlogSection1
        blogPosts={posts}
        tagline="Latest Posts"
        heading="Topping the charts this week"
        description=" The most popular posts on our platform this week. "
      />
      <BlogSection2 posts={posts} />
       <WatchNowSection />
      <MustRead posts={posts} />
    </>
  );
}
