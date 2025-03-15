/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IndividualPost } from "@/types";
import SearchModal from "./search-modal";
import { useSearhModalFilter } from "@/hooks/use-search-modal-filter";
import { useSubscribeModal } from "@/hooks/use-subscribe-modal";
import SubscribeModal from "./subsribe-modal";

const NavigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Health",
    href: "/category/Health",
  },
  {
    name: "Technology",
    href: "/category/Technology",
  },
  {
    name: "Sports",
    href: "/category/Sports",
  },
  {
    name: "Science",
    href: "/category/Science",
  },

  {
    name: "Politics",
    href: "/category/Politics",
  },

  {
    name: "Entertainment",
    href: "/category/Entertainment",
  },
];

const moreNavigationItems = [
    {
    name: "Breaking news",
    href: "/category/Breakingnews",
  },
    {
    name: "Business & Finance",
    href: "/category/Finance",
  },
    {
    name: "Podcast",
    href: "/podcast",
  },
    {
    name: "Videos",
    href: "/videos",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const Navbar= ({
  posts
}:{
  posts:IndividualPost[]
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const{subscribeModalOpen} = useSubscribeModal()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isHidden = pathname==='/'
  const {open} = useSearhModalFilter()
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: { target: any; }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
 
  return (
    <>
    <SubscribeModal  />
    <SearchModal blogs={posts} />
      <header className={`bg-white shadow-sm ${isHidden && 'hidden'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 md:hidden"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <h1 className="text-3xl font-serif font-bold text-gray-800">
                Gossippremier
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {NavigationItems.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`${!isActive ? "text-gray-600 hover:text-gray-900" : "text-pink-500 hover:text-pink-700"}   text-sm font-medium cursor-pointer`}
                >
                  {item.name.toUpperCase()}
                </Link>
              );
            })}

            <div className="relative" ref={dropdownRef}>
              <button 
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center"
                onClick={toggleDropdown}
              >
                MORE
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  {moreNavigationItems.map((item, idx) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={idx}
                        href={item.href}
                        className={`${
                          !isActive ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100" : "text-pink-500 hover:text-pink-700"
                        } block px-4 py-2 text-sm font-medium`}
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center">
            <button 
            className="ml-3 p-1 rounded-full text-gray-700
             hover:text-gray-900 focus:outline-none"
             onClick={open}
             >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button
              onClick={subscribeModalOpen}
              className="ml-6 px-6 py-2 bg-red-500 text-white rounded-full text-sm font-medium"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NavigationItems.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={`${!isActive ? "text-gray-600 hover:text-gray-900" : "text-pink-500 hover:text-pink-700"} block px-3 py-2 text-sm font-medium cursor-pointer`}
                >
                  {item.name.toUpperCase()}
                </Link>
              );
            })}
            
            {/* Mobile More dropdown */}
            <div className="relative px-3 py-2">
              <button 
                className="text-gray-700 hover:text-gray-900 text-sm font-medium flex items-center w-full"
                onClick={toggleDropdown}
              >
                MORE
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {/* Mobile Dropdown Items */}
              {isDropdownOpen && (
                <div className="mt-2 pl-4 space-y-1">
                  {moreNavigationItems.map((item, idx) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={idx}
                        href={item.href}
                        className={`${
                          !isActive ? "text-gray-600 hover:text-gray-900" : "text-pink-500 hover:text-pink-700"
                        } block py-2 text-sm font-medium`}
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  
  );
};