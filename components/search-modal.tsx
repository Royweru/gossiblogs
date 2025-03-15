/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { X, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/data"
import { IndividualPost, PostType } from "@/types"
import { useSearhModalFilter } from "@/hooks/use-search-modal-filter"
import { useRouter } from "next/navigation"



export default function SearchModal({ blogs }: {
    blogs:IndividualPost[]
}) {
    const {isOpen, close} = useSearhModalFilter()
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredPosts, setFilteredPosts] = useState<IndividualPost[]>([])
  const modalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
      setTimeout(() => inputRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [isOpen, close])

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredPosts([])
      return
    }

    const term = searchTerm.toLowerCase()
    const results = blogs.filter(
      (post:any) =>
        post.title.toLowerCase().includes(term) ||
        post.excerpt?.toLowerCase()?.includes(term)||
        post.category.title.toLowerCase().includes(term)
    )
    setFilteredPosts(results)
  }, [blogs, searchTerm])

  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
       close()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-background/80  backdrop-blur-sm flex items-start justify-center 
      p-4 sm:p-6 md:p-8 overflow-y-auto "
      onClick={handleClickOutside}
    >
      <div
        ref={modalRef}
        className="bg-card w-full bg-gray-900 text-white max-w-2xl rounded-lg
         shadow-lg border p-4 max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Search Blog Posts</h2>
          <Button variant="ghost" size="icon" onClick={close} aria-label="Close">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            ref={inputRef}
            value={searchTerm}
            onChange={(e: { target: { value: React.SetStateAction<string> } }) => setSearchTerm(e.target.value)}
            placeholder="Search by title, excerpt or content..."
            className="pl-10"
          />
        </div>

        <div className="overflow-y-auto flex-1">
          {searchTerm.trim() !== "" && filteredPosts.length === 0 ? (
            <p className="text-center py-8 text-muted-foreground">No results found for &quot;{searchTerm}&quot;</p>
          ) : (
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <div key={post._id} 
                className="p-4 border rounded-md hover:bg-accents-charcoalBlack  hover:scale-105 hover:cursor-pointer"
                onClick={()=>router.push( `/blogs/${post.currentSlug}`)}
                >
                  <h3 className="font-medium mb-1">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

