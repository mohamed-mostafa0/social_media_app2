"use client";

import { FiPlay } from "react-icons/fi";
import { VideoItem } from "../types/profile.types";

interface ProfileVideosCardProps {
  videos: VideoItem[];
  totalCount?: number;
  onViewAll?: () => void;
}

export function ProfileVideosCard({
  videos,
  totalCount = 64,
  onViewAll,
}: ProfileVideosCardProps) {
  const featuredVideo = videos[0];

  return (
    <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-bold text-gray-900">My videos</h3>
          <span className="text-xs text-gray-400 font-medium">· {totalCount}</span>
        </div>
        {onViewAll && (
          <button
            onClick={onViewAll}
            type="button"
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            See all
          </button>
        )}
      </div>

      {featuredVideo && (
        <div className="group relative aspect-video rounded-xl overflow-hidden bg-gray-100 cursor-pointer shadow-xs">
          <img
            src={featuredVideo.thumbnailUrl}
            alt={featuredVideo.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-11 h-11 bg-white/80 group-hover:bg-white text-gray-900 rounded-full flex items-center justify-center shadow-lg backdrop-blur-xs transition-transform group-hover:scale-110">
              <FiPlay className="w-5 h-5 ml-0.5 fill-gray-900 text-gray-900" />
            </div>
          </div>

          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px] font-medium">
            <span className="truncate pr-2">{featuredVideo.title}</span>
            {featuredVideo.duration && (
              <span className="px-1.5 py-0.5 bg-black/60 backdrop-blur-xs rounded-sm text-[10px]">
                {featuredVideo.duration}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
