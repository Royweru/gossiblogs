import type { BlogPost } from "./types"

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js and React",
    body: "Next.js is a React framework that enables server-side rendering, static site generation, and more. It's a great choice for building modern web applications. In this post, we'll explore the basics of Next.js and how to get started with your first project. We'll cover installation, project structure, routing, and data fetching strategies.",
    date: "2023-09-15",
    readTime: 5,
    author: {
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "2",
    title: "Understanding React Hooks",
    excerpt: "A deep dive into React's hooks system and how to use them effectively",
    body: "React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class. In this comprehensive guide, we'll explore useState, useEffect, useContext, useReducer, and custom hooks. You'll learn how to manage component state, handle side effects, and create reusable logic with custom hooks.",
    date: "2023-08-22",
    readTime: 8,
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "3",
    title: "CSS Grid Layout Mastery",
    excerpt: "Master the CSS Grid Layout system for modern responsive designs",
    body: "CSS Grid Layout is a powerful two-dimensional layout system designed for the web. It allows you to create complex grid-based layouts with ease. In this tutorial, we'll cover grid containers, grid items, template areas, and responsive grid designs. By the end, you'll be able to create sophisticated layouts that adapt to different screen sizes.",
    date: "2023-07-10",
    readTime: 6,
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "4",
    title: "TypeScript for JavaScript Developers",
    excerpt: "Learn how TypeScript can improve your JavaScript development workflow",
    body: "TypeScript is a superset of JavaScript that adds static typing to the language. It can help catch errors during development and provide better tooling support. In this guide, we'll introduce TypeScript fundamentals, interfaces, type annotations, generics, and how to gradually migrate a JavaScript project to TypeScript. You'll see how TypeScript can make your code more robust and maintainable.",
    date: "2023-06-18",
    readTime: 7,
    author: {
      name: "Sarah Williams",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "5",
    title: "Building a REST API with Node.js",
    excerpt: "A step-by-step guide to creating RESTful APIs with Node.js and Express",
    body: "Node.js is an excellent platform for building scalable and efficient APIs. In this tutorial, we'll walk through creating a RESTful API using Node.js and Express. We'll cover route handling, middleware, authentication, database integration with MongoDB, error handling, and testing. By the end, you'll have a solid foundation for building production-ready APIs.",
    date: "2023-05-05",
    readTime: 10,
    author: {
      name: "Michael Brown",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
  {
    id: "6",
    title: "Introduction to Tailwind CSS",
    excerpt: "Discover how Tailwind CSS can streamline your styling workflow",
    body: "Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. In this introduction, we'll explore Tailwind's philosophy, setup process, utility classes, responsive design, and customization options. You'll learn how Tailwind can help you build unique designs faster while maintaining consistency across your project.",
    date: "2023-04-12",
    readTime: 5,
    author: {
      name: "Emily Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  },
]

