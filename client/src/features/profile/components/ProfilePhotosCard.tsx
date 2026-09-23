"use client";

import { PhotoItem } from "../types/profile.types";

interface ProfilePhotosCardProps {
  photos: PhotoItem[];
  totalCount?: number;
  onViewAll?: () => void;
}

export function ProfilePhotosCard({
  photos,
  totalCount = 338,
  onViewAll,
}: ProfilePhotosCardProps) {
  const displayPhotos = photos.slice(0, 4);

  return (
    <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-bold text-gray-900">My photos</h3>
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

      <div className="grid grid-cols-2 gap-2.5">
        {displayPhotos.map((photo) => (
          <div
            key={photo.id}
            className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100 cursor-pointer shadow-xs"
          >
            <img
              src={photo.url}
              alt={photo.caption || "User photo"}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
}
