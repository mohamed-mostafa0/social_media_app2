"use client";

import { FiImage, FiPaperclip, FiVideo, FiHash, FiAtSign, FiChevronDown, FiSmile } from "react-icons/fi";
import { Button } from "../ui/Button";
import { Avatar } from "../ui/Avatar";

export function CreatePost() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-6">
      <div className="flex items-center gap-4 mb-4">
        <Avatar size="md" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop" />
        
        <div className="flex-1 relative">
          <input
            type="text"
            className="block w-full pl-4 pr-10 py-2.5 bg-gray-50 border-transparent rounded-full text-sm placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-colors outline-none"
            placeholder="What's on your mind?"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
             <FiSmile className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        <Button variant="primary" className="rounded-xl px-6 text-sm py-2 bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-blue-700 shadow-none font-semibold">
          Share Post
        </Button>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-50 mt-4">
        <div className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide py-1">
          <button className="flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-blue-500 transition-colors flex-shrink-0">
            <FiImage className="w-4 h-4 text-blue-500" />
            Image/Video
          </button>
          <button className="flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-yellow-500 transition-colors flex-shrink-0">
            <FiPaperclip className="w-4 h-4 text-yellow-500" />
            Attachment
          </button>
          <button className="flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-red-500 transition-colors flex-shrink-0">
            <FiVideo className="w-4 h-4 text-red-500" />
            Live
          </button>
          <button className="flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-green-500 transition-colors flex-shrink-0">
            <FiHash className="w-4 h-4 text-green-500" />
            Hashtag
          </button>
          <button className="flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-purple-500 transition-colors flex-shrink-0">
            <FiAtSign className="w-4 h-4 text-gray-500" />
            Mention
          </button>
        </div>

        <button className="flex items-center gap-1 text-xs font-semibold text-gray-600 hover:text-gray-900 transition-colors pl-4 border-l border-gray-100 ml-4 flex-shrink-0">
          Public
          <FiChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
