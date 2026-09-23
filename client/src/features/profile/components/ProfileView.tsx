"use client";

import { useState } from "react";
import { useAuthStore } from "@/features/auth/stores/auth.store";
import { defaultProfileData } from "../data/profile.mock";
import { UserProfileData } from "../types/profile.types";
import { ProfileHeader } from "./ProfileHeader";
import { ProfileStatsBar } from "./ProfileStatsBar";
import { ProfileInfoCard } from "./ProfileInfoCard";
import { ProfileSocialLinks } from "./ProfileSocialLinks";
import { ProfileMusicCard } from "./ProfileMusicCard";
import { ProfileFeed } from "./ProfileFeed";
import { ProfilePhotosCard } from "./ProfilePhotosCard";
import { ProfileVideosCard } from "./ProfileVideosCard";

interface ProfileViewProps {
  initialData?: UserProfileData;
}

export function ProfileView({ initialData = defaultProfileData }: ProfileViewProps) {
  const loggedInUser = useAuthStore((state) => state.user);
  const [activeTab, setActiveTab] = useState("posts");

  const profile: UserProfileData = {
    ...initialData,
    name: loggedInUser
      ? `${loggedInUser.firstName} ${loggedInUser.lastName}`
      : initialData.name,
    avatar: loggedInUser?.profilePicture || initialData.avatar,
    coverImage: loggedInUser?.coverPicture || initialData.coverImage,
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5]/60 pb-12">
      <div className="max-w-[1400px] mx-auto px-0 sm:px-4 lg:px-6 pt-0 sm:pt-4">
        <div className="rounded-none sm:rounded-2xl overflow-hidden bg-white shadow-xs border-0 sm:border border-gray-100">
          <ProfileHeader profile={profile} />
          <ProfileStatsBar
            stats={profile.stats}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
            <ProfileInfoCard info={profile.info} />
            <ProfileSocialLinks socials={profile.socials} />
            <ProfileMusicCard tracks={profile.music} />
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <ProfileFeed posts={profile.posts} />
          </div>

          <div className="lg:col-span-3 space-y-6 order-3">
            <ProfilePhotosCard photos={profile.photos} />
            <ProfileVideosCard videos={profile.videos} />
          </div>
        </div>
      </div>
    </div>
  );
}
