export interface BlogPost {
    id: string
    title: string
    excerpt: string
    body: string
    date: string
    readTime: number
    author: {
      name: string
      avatar: string
    }
  }
  
  