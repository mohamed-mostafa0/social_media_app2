"use client";

import { useState } from "react";
import { FiPlay, FiPause } from "react-icons/fi";
import { MusicTrack } from "../types/profile.types";

interface ProfileMusicCardProps {
  tracks: MusicTrack[];
  totalCount?: number;
}

export function ProfileMusicCard({ tracks, totalCount = 338 }: ProfileMusicCardProps) {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const togglePlay = (id: string) => {
    setPlayingId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-bold text-gray-900">My music</h3>
          <span className="text-xs text-gray-400 font-medium">· {totalCount}</span>
        </div>
      </div>

      <div className="space-y-3">
        {tracks.map((track) => {
          const isPlaying = playingId === track.id;
          return (
            <div
              key={track.id}
              onClick={() => togglePlay(track.id)}
              className="flex items-center gap-3 p-1.5 -mx-1.5 rounded-xl hover:bg-gray-50 transition-colors group cursor-pointer"
            >
              <div className="relative w-11 h-11 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                <img
                  src={track.coverUrl}
                  alt={track.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity ${
                    isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {isPlaying ? (
                    <FiPause className="w-4 h-4 text-white" />
                  ) : (
                    <FiPlay className="w-4 h-4 text-white ml-0.5" />
                  )}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-xs font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                  {track.title}
                </h4>
                <p className="text-[11px] text-gray-400 truncate mt-0.5">
                  {track.artist}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
