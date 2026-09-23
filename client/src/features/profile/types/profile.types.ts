export interface ProfileStats {
  posts: number;
  followers: number;
  following: number;
  collections: number;
  photos: number;
  videos: number;
}

export interface ProfileInfo {
  location: string;
  birthday: string;
  education: string;
}

export interface SocialLink {
  platform: "Instagram" | "Dribbble" | "Behance" | "LinkedIn";
  url: string;
  iconName: string;
}

export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  duration?: string;
}

export interface PhotoItem {
  id: string;
  url: string;
  caption?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration?: string;
  views?: string;
}

export interface ProfilePost {
  id: string;
  author: {
    name: string;
    avatar: string;
    date: string;
  };
  content?: string;
  tags?: string[];
  location?: string;
  images: string[];
  likes: number | string;
  comments: number | string;
  shares?: number | string;
}

export interface UserProfileData {
  id: string;
  name: string;
  title: string;
  avatar: string;
  coverImage: string;
  stats: ProfileStats;
  info: ProfileInfo;
  socials: SocialLink[];
  music: MusicTrack[];
  photos: PhotoItem[];
  videos: VideoItem[];
  posts: ProfilePost[];
}
