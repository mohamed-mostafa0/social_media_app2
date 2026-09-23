"use client";

import { FiMapPin, FiCalendar, FiBookOpen } from "react-icons/fi";
import { ProfileInfo } from "../types/profile.types";

interface ProfileInfoCardProps {
  info: ProfileInfo;
}

export function ProfileInfoCard({ info }: ProfileInfoCardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-xs border border-gray-100">
      <div className="space-y-4">
        <div className="flex items-center gap-3.5 text-gray-700">
          <div className="text-gray-400">
            <FiMapPin className="w-4 h-4 text-gray-400" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-700">
            {info.location}
          </span>
        </div>

        <div className="flex items-center gap-3.5 text-gray-700">
          <div className="text-gray-400">
            <FiCalendar className="w-4 h-4 text-gray-400" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-700">
            {info.birthday}
          </span>
        </div>

        <div className="flex items-start gap-3.5 text-gray-700">
          <div className="text-gray-400 mt-0.5">
            <FiBookOpen className="w-4 h-4 text-gray-400" />
          </div>
          <span className="text-xs sm:text-sm font-medium text-gray-700 leading-snug">
            {info.education}
          </span>
        </div>
      </div>
    </div>
  );
}
