"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Avatar } from "../ui/Avatar";
import { IconButton } from "../ui/IconButton";
import { FiMoreHorizontal, FiHeart, FiMessageCircle, FiBookmark } from "react-icons/fi";

interface PostCardProps {
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  content: string;
  tags: string[];
  images: string[];
  likes: string;
  comments: string;
}

export function PostCard({ author, content, tags, images, likes, comments }: PostCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.article 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
      className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Avatar size="md" src={author.avatar} />
          <div>
            <h3 className="font-bold text-gray-900">{author.name}</h3>
            <p className="text-sm text-blue-500">{author.handle}</p>
          </div>
        </div>
        <IconButton variant="ghost" size="sm">
          <FiMoreHorizontal className="w-5 h-5" />
        </IconButton>
      </div>

      {images.length > 0 && (
        <div className={`grid gap-2 mb-4 rounded-2xl overflow-hidden ${
          images.length === 1 ? 'grid-cols-1' : 
          images.length === 2 ? 'grid-cols-2' : 
          images.length === 3 ? 'grid-cols-2' : 'grid-cols-2'
        }`}>
          {images.map((img, index) => {
            if (images.length === 3 && index === 0) {
              return (
                <div key={index} className="col-span-2 aspect-[2/1] relative">
                  <img src={img} alt="Post content" className="w-full h-full object-cover" />
                </div>
              );
            }
            if (images.length >= 4 && index === 0) {
              return (
                <div key={index} className="col-span-1 row-span-2 aspect-square relative">
                  <img src={img} alt="Post content" className="w-full h-full object-cover" />
                </div>
              );
            }
            if (images.length > 4 && index === 3) {
              return (
                <div key={index} className="col-span-1 aspect-square relative cursor-pointer group">
                  <img src={img} alt="Post content" className="w-full h-full object-cover group-hover:brightness-75 transition-all" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">+{images.length - 4}</span>
                  </div>
                </div>
              );
            }
            if (index < 4) {
               return (
                <div key={index} className="col-span-1 aspect-square relative">
                  <img src={img} alt="Post content" className="w-full h-full object-cover" />
                </div>
              );
            }
            return null;
          })}
        </div>
      )}

      <div className="mb-4">
        <p className="text-gray-700 leading-relaxed text-sm">
          {content} <span className="text-gray-400 font-medium cursor-pointer">read more</span>
        </p>
        <div className="flex gap-2 mt-2">
          {tags.map((tag) => (
            <span key={tag} className="text-blue-500 text-sm hover:underline cursor-pointer">#{tag}</span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex gap-4">
          <button className="flex items-center gap-1.5 text-gray-500 hover:text-red-500 transition-colors group">
            <FiHeart className="w-5 h-5 group-hover:fill-red-500 transition-colors" />
            <span className="text-sm font-medium">{likes}</span>
          </button>
          <button className="flex items-center gap-1.5 text-gray-500 hover:text-blue-500 transition-colors group">
            <FiMessageCircle className="w-5 h-5 group-hover:fill-blue-500 transition-colors" />
            <span className="text-sm font-medium">{comments}</span>
          </button>
        </div>
        <button className="text-gray-400 hover:text-blue-500 transition-colors">
          <FiBookmark className="w-5 h-5" />
        </button>
      </div>
    </motion.article>
  );
}
