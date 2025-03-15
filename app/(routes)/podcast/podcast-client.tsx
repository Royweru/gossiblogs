/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { urlFor } from "@/lib/imageBuilder";
import Link from "next/link";
import { useState } from "react";
// const podcastsData = [
//   {
//     id: 1,
//     title: "The Art of Skincare: Beyond the Basics",
//     description:
//       "Beauty editor Maya Chen talks with dermatologist Dr. Sarah Williams about creating an effective skincare routine that actually works for your specific skin type.",
//     image: "/podcast1.jpeg",
//     category: "BEAUTY",
//     host: "Maya Chen",
//     guest: "Dr. Sarah Williams",
//     duration: "45 min",
//     date: "March 5, 2025",
//     comments: 12,
//     views: 1458,
//   },
//   {
//     id: 2,
//     title: "Spring Fashion Trends: What's In and What's Out",
//     description:
//       "Fashion director Thomas Reid and stylist Zoe Parker discuss the biggest runway trends for Spring 2025 and how to incorporate them into your everyday wardrobe.",
//     image: "/podcast2.jpg",
//     category: "FASHION",
//     host: "Thomas Reid",
//     guest: "Zoe Parker",
//     duration: "38 min",
//     date: "February 28, 2025",
//     comments: 8,
//     views: 1203,
//   },
//   {
//     id: 3,
//     title: "The Future of Sustainable Living",
//     description:
//       "Environmental journalist Alex Marino interviews eco-designer Emma Thompson on practical ways to create a more sustainable home without sacrificing style.",
//     image: "/business1.jpg",
//     category: "LIFESTYLE",
//     host: "Alex Marino",
//     guest: "Emma Thompson",
//     duration: "52 min",
//     date: "February 21, 2025",
//     comments: 15,
//     views: 1822,
//   },
//   {
//     id: 4,
//     title: "Mindful Eating: Nutrition for Body and Soul",
//     description:
//       "Nutritionist Dr. James Lee and chef Olivia Santos explore the connection between food, mood, and overall wellbeing with practical tips for everyday meals.",
//     image: "/podcast4.jpg",
//     category: "LIFESTYLE",
//     host: "Dr. James Lee",
//     guest: "Olivia Santos",
//     duration: "41 min",
//     date: "February 14, 2025",
//     comments: 9,
//     views: 1356,
//   },
//   // {
//   //   id: 5,
//   //   title: "The Science of Beauty Sleep",
//   //   description: "Sleep researcher Dr. Nina Patel discusses how quality sleep affects your appearance and shares her top tips for getting better rest for both health and beauty.",
//   //   image: "/api/placeholder/600/400",
//   //   category: "BEAUTY",
//   //   host: "Cassandra Wright",
//   //   guest: "Dr. Nina Patel",
//   //   duration: "47 min",
//   //   date: "February 7, 2025",
//   //   comments: 11,
//   //   views: 1648
//   // }
// ];

// Trending podcasts - different format for the sidebar
const trendingPodcasts = [
  {
    id: 1,
    title: "The Art of Skincare: Beyond the Basics",
    category: "BEAUTY",
    views: 1458,
    comments: 12,
  },
  {
    id: 3,
    title: "The Future of Sustainable Living",
    category: "LIFESTYLE",
    views: 1822,
    comments: 15,
  },
  {
    id: 5,
    title: "The Science of Beauty Sleep",
    category: "BEAUTY",
    views: 1648,
    comments: 11,
  },
];

const PodcastsClient = ({ podcastsData }: { podcastsData: any[] }) => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = ["ALL", "Sports", "Entertainment", "Lifestyle"];

  const filteredPodcasts =
    activeCategory === "ALL"
      ? podcastsData
      : podcastsData.filter(
          (podcast: { category: { title: string } }) =>
            podcast.category.title === activeCategory
        );

  return (
    <div className="min-h-screen bg-gray-50 md:py-8 py-6">
      {/* Navigation */}

      {/* Header */}
      <header className="py-12 border-b">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900">Podcast</h1>
          <div className="flex items-center mt-4 text-sm text-gray-600">
            <a href="#">Home</a>
            <span className="mx-2">&gt;</span>
            <span>Podcast</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col lg:flex-row">
        {/* Main Content */}
        <div className="w-full lg:w-2/3 lg:pr-8">
          {/* Category Filter */}
          <div className="flex mb-8 border-b pb-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`mr-6 pb-2 text-sm font-medium ${activeCategory === category ? "text-red-500 border-b-2 border-red-500" : "text-gray-700"}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Podcasts List */}
          <div className="lg:space-y-12 md:space-y-8 space-y-6">
            {filteredPodcasts.map((podcast) => (
              <Link key={podcast._id} href={`/listen/${podcast.currentSlug}`}>
                <div className="flex flex-col md:flex-row border-b pb-8">
                  <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <img
                      src={
                        (podcast.thumbnail &&
                          urlFor(podcast.thumbnail)?.url()) ||
                        "/podcast3.jpg"
                      }
                      alt={podcast.title}
                      className="w-full rounded-lg"
                    />
                  </div>
                  <div className="w-full md:w-2/3 md:pl-6">
                    <div className="text-red-500 text-sm font-medium mb-2">
                      {podcast.category.title}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {podcast.title}
                    </h2>
                    <p className="text-gray-700 mb-4">{podcast.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <div className="mr-4">
                        Host:{" "}
                        <span className="font-medium">{podcast.author.name}</span>
                      </div>
                      {/* <div>
                        Guest:{" "}
                        <span className="font-medium">{podcast.guest}</span>
                      </div> */}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="mr-4">{podcast.publishedAt}</div>
                      <div className="mr-4">30 min</div>
                      <div className="flex items-center mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        {podcast.views}
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                        {podcast.comments}
                      </div>
                    </div>
                    <button className="mt-4 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded">
                      Listen Now
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {/* <div className="flex justify-center mt-12">
            <button className="w-10 h-10 mx-1 flex items-center justify-center rounded-full bg-gray-200 text-gray-700">1</button>
            <button className="w-10 h-10 mx-1 flex items-center justify-center rounded-full text-gray-700">2</button>
            <button className="w-10 h-10 mx-1 flex items-center justify-center rounded-full text-gray-700">3</button>
            <button className="w-10 h-10 mx-1 flex items-center justify-center rounded-full text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div> */}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3 mt-12 lg:mt-0">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 pb-4 mb-6 border-b relative">
              TRENDING NOW
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-red-500"></span>
            </h3>

            <div className="space-y-6">
              {trendingPodcasts.map((podcast, index) => (
                <div key={podcast.id} className="flex">
                  <div className="mr-4 text-4xl font-bold text-gray-200">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      {podcast.title}
                    </h4>
                    <div className="text-sm text-gray-600">
                      in{" "}
                      <span className="text-gray-900">{podcast.category}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        {podcast.views}
                      </span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                        {podcast.comments}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-8 bg-gray-900 text-white py-3 rounded font-medium">
              View All Trending
            </button>
          </div>

          {/* Newsletter */}
          <div className="bg-white rounded-lg p-6 shadow-sm mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-700 mb-4">
              Get the latest podcasts and updates delivered to your inbox.
            </p>
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-3 border rounded mb-4"
            />
            <button className="w-full bg-red-500 text-white py-3 rounded font-medium">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default PodcastsClient;
