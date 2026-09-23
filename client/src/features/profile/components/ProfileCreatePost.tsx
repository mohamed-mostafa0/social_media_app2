"use client";

import { FiCamera, FiPaperclip } from "react-icons/fi";

interface ProfileCreatePostProps {
  onPost?: (content: string) => void;
}

export function ProfileCreatePost({ onPost }: ProfileCreatePostProps) {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-gray-100 mb-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="What's new?"
            className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none cursor-pointer py-1"
            onClick={() => onPost?.("")}
          />
        </div>

        <div className="flex items-center gap-2 sm:gap-3 text-gray-400">
          <button
            type="button"
            aria-label="Add photo"
            className="p-1.5 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
          >
            <FiCamera className="w-5 h-5 text-gray-400 hover:text-blue-600 transition-colors" />
          </button>
          <button
            type="button"
            aria-label="Add attachment"
            className="p-1.5 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
          >
            <FiPaperclip className="w-5 h-5 text-gray-400 hover:text-blue-600 transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
}
