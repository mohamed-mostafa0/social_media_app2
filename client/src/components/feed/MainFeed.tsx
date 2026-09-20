"use client";

import { useState } from "react";
import { SearchBar } from "./SearchBar";
import { Stories } from "./Stories";
import { PostCard } from "./PostCard";
import { motion } from "framer-motion";

const samplePosts = [
  {
    id: 1,
    author: {
      name: "Robert Fox",
      handle: "@alessandroveronezi",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop"
    },
    content: "While Corfu gives us the ability to shoot by the sea with amazing blue background full of light of the sky, Florina give us its gentle side. The humble atmosphere and Light of Florina which comes...",
    tags: ["landscape", "flora", "nature"],
    images: [
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1506744626753-1fa44f4a4df2?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400&h=400&fit=crop"
    ],
    likes: "1.6k",
    comments: "2.3k"
  },
  {
    id: 2,
    author: {
      name: "Dianne Russell",
      handle: "@amandadasilva",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop"
    },
    content: "Exploring the hidden gems of the city tonight. The neon lights really bring this place to life after dark. Can't wait to share more photos from this series!",
    tags: ["cityscape", "nightphotography", "urban"],
    images: [
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=400&fit=crop"
    ],
    likes: "3.2k",
    comments: "412"
  }
];

export function MainFeed() {
  const [activeTab, setActiveTab] = useState<"Popular" | "Latest">("Popular");

  return (
    <main className="flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      <SearchBar />
      
      <Stories />

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Feeds</h2>
        <div className="bg-gray-100 p-1 rounded-full flex gap-1 relative">
          <motion.div 
            className="absolute inset-y-1 bg-blue-600 rounded-full"
            initial={false}
            animate={{
              left: activeTab === "Popular" ? "0.25rem" : "50%",
              width: "calc(50% - 0.25rem)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          
          <button 
            onClick={() => setActiveTab("Popular")}
            className={`relative z-10 px-4 py-1.5 text-sm font-semibold rounded-full transition-colors ${
              activeTab === "Popular" ? "text-white" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Popular
          </button>
          <button 
            onClick={() => setActiveTab("Latest")}
            className={`relative z-10 px-4 py-1.5 text-sm font-semibold rounded-full transition-colors ${
              activeTab === "Latest" ? "text-white" : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Latest
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {samplePosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
}
