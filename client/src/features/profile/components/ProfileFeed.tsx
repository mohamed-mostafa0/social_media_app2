"use client";

import { ProfilePost } from "../types/profile.types";
import { ProfileCreatePost } from "./ProfileCreatePost";
import { ProfilePostCard } from "./ProfilePostCard";

interface ProfileFeedProps {
  posts: ProfilePost[];
  onNewPost?: (content: string) => void;
}

export function ProfileFeed({ posts, onNewPost }: ProfileFeedProps) {
  return (
    <div className="space-y-6">
      <ProfileCreatePost onPost={onNewPost} />

      <div className="space-y-6">
        {posts.map((post) => (
          <ProfilePostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
