/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

const AudioPageIdClient = ({audioBlog}:{
  audioBlog:any
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  React.useEffect(() => {
    // Initialize audio when component mounts
    setAudio(new Audio(audioBlog.audio.asset.url));
  }, []);

  // Sample podcast data
  const podcast = {
    title: "The Art of Digital Storytelling in Modern Cinema",
    date: "March 13, 2025",
    duration: "48 minutes",
    category: "Film & Media",
    currentTime: "14:22",
    totalTime: "48:05",
    progress: 30,
    description: [
      "In this episode, we explore how digital technologies have revolutionized storytelling in modern cinema. From CGI advancements to virtual production techniques used in groundbreaking films, we discuss how the technical and the artistic merge to create new narrative possibilities.",
      "Our guest, an award-winning cinematographer, shares insights from recent productions and discusses how emerging filmmakers can harness these tools while staying true to the heart of storytelling."
    ],
    host: {
      name: "Sarah Mitchell",
      bio: "Sarah is a film critic and podcast host with over a decade of experience in the industry. Her interviews with filmmakers have been featured in major publications worldwide."
    },
    transcript: [
      { time: "00:01:22", speaker: "Sarah", text: "Welcome to today's episode. I'm thrilled to have with us one of the most innovative cinematographers working today." },
      { time: "00:02:05", speaker: "Guest", text: "Thanks for having me, Sarah. It's a pleasure to join you and discuss something I'm passionate about." },
      { time: "00:02:17", speaker: "Sarah", text: "Let's start with the evolution we've seen. How has digital technology changed your approach to visual storytelling?" },
      { time: "00:02:35", speaker: "Guest", text: "That's a great question. When I first started in the industry, we were limited by physical constraints in ways that seem almost unimaginable now. Digital has removed so many barriers, but it's also created new challenges..." },
      { time: "00:05:47", speaker: "Sarah", text: "Can you tell us about a moment when technology actually helped solve a narrative problem rather than just creating a spectacular visual?" },
      { time: "00:06:03", speaker: "Guest", text: "Absolutely. On my last film, we had this crucial emotional scene that needed to take place at magic hour, but the location only allowed us a very narrow window of actual shooting time..." }
    ],
    relatedEpisodes: [
      { title: "The Evolution of Sound Design in Horror Films", date: "Mar 6, 2025", duration: "52 min" },
      { title: "Independent Filmmaking in the Streaming Era", date: "Feb 27, 2025", duration: "45 min" },
      { title: "Visual Effects: From Practical to Digital", date: "Feb 20, 2025", duration: "61 min" }
    ],
    about: "Cinema Insights explores the art and craft of filmmaking through conversations with industry professionals. Each week, we dive deep into different aspects of the filmmaking process, from screenwriting to post-production.",
    tags: ["Filmmaking", "Digital Cinema", "Cinematography", "Visual Effects"]
  };

  const togglePlayPause = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause()
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-wrap bg-white mt-12 mb-8">
      {/* Main Content */}
      <main className="w-full lg:w-2/3 p-6 lg:p-10">
        <h1 className="text-4xl font-bold mb-6 leading-tight">{podcast.title}</h1>
        
        <div className="flex items-center mb-8 text-gray-600 text-sm">
          <span className="mr-4">{podcast.date}</span>
          <span className="mr-4">{podcast.duration}</span>
          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">{podcast.category}</span>
        </div>
        
        <div className="mb-8 rounded-lg overflow-hidden">
          <img src="/podcast3.jpg" alt="Podcast episode cover" className="w-full object-cover" />
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <button onClick={togglePlayPause}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={podcast.progress}
          className="w-full"
        />
        <div className="prose max-w-none mb-10">
          {podcast.description.map((paragraph, index) => (
            <p key={index} className="mb-4 text-lg">{paragraph}</p>
          ))}
        </div>
        
        <div className="flex items-start border-t border-gray-100 pt-10 mb-10">
          <img src="/podcast1.jpeg" alt="Host avatar" className="w-16 h-16 rounded-full mr-4" />
          <div>
            <h3 className="font-medium text-lg mb-2">Hosted by {podcast.host.name}</h3>
            <p className="text-gray-600">{podcast.host.bio}</p>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-10">
          <h2 className="text-2xl font-bold mb-6">Episode Transcript</h2>
          <div className="space-y-6">
            {podcast.transcript.map((item, index) => (
              <p key={index} className="leading-relaxed">
                <span className="text-red-500 font-medium mr-2">[{item.time}]</span>
                <strong>{item.speaker}:</strong> {item.text}
              </p>
            ))}
          </div>
        </div>
      </main>
      
      {/* Sidebar */}
      <aside className="w-full lg:w-1/3 p-6 lg:p-10 bg-gray-50 lg:bg-white">
        {/* <div className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-100">Listen On</h2>
          <div className="flex flex-wrap gap-4 mt-4">
            <img src="/api/placeholder/40/40" alt="Apple Podcasts" className="w-10 h-10 rounded-lg" />
            <img src="/api/placeholder/40/40" alt="Spotify" className="w-10 h-10 rounded-lg" />
            <img src="/api/placeholder/40/40" alt="Google Podcasts" className="w-10 h-10 rounded-lg" />
            <img src="/api/placeholder/40/40" alt="YouTube" className="w-10 h-10 rounded-lg" />
          </div>
          <a 
            href="#" 
            className="block w-full mt-6 py-3 bg-red-500 text-white text-center rounded-lg font-medium"
          >
            Subscribe Now
          </a>
        </div> */}
        
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-100">More Episodes</h2>
          <ul className="space-y-4">
            {podcast.relatedEpisodes.map((episode, index) => (
              <li key={index} className="flex pb-4 border-b border-gray-100">
                <img src="/podcast2.jpg" alt="Episode thumbnail" className="w-16 h-16 object-cover rounded mr-3" />
                <div>
                  <h3 className="font-medium text-base mb-1">{episode.title}</h3>
                  <div className="text-sm text-gray-600">{episode.date} • {episode.duration}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-100">About The Show</h2>
          <p className="text-gray-600">{podcast.about}</p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b border-gray-100">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {podcast.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-gray-100 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default AudioPageIdClient;