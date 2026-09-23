"use client";

import { Stories } from "@/features/stories/components/Stories";
import { CreatePost } from "./CreatePost";
import { PostCard } from "./PostCard";
import { FiChevronDown } from "react-icons/fi";
import { Post } from "../types/post.types";

const samplePosts: Post[] = [
  {
    id: 1,
    author: {
      name: "Cameron Williamson",
      date: "14 Aug at 4:21 PM",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop"
    },
    content: "",
    tags: [],
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&h=600&fit=crop",
    ],
    likes: "30",
    comments: "12",
    shares: "5"
  },
  {
    id: 2,
    author: {
      name: "Terry Lipshutz",
      date: "14 Aug at 4:21 PM",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
    },
    content: "Exploring the hidden gems of the city tonight. The neon lights really bring this place to life after dark. Can't wait to share more photos from this series!",
    tags: ["cityscape", "nightphotography", "urban"],
    images: [
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=400&fit=crop"
    ],
    likes: "1.2k",
    comments: "412",
    shares: "89"
  }
];

export function MainFeed() {
  return (
    <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <Stories />
      <CreatePost />

      <div className="flex items-center justify-end mb-4">
        <button className="flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors">
          Sort by: <span className="text-gray-900">Following</span>
          <FiChevronDown className="w-4 h-4 ml-0.5" />
        </button>
      </div>

      <div className="space-y-6">
        {samplePosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
}
