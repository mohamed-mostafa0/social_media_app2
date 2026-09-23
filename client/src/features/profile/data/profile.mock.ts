import { UserProfileData } from "../types/profile.types";

export const defaultProfileData: UserProfileData = {
  id: "amanda-powers",
  name: "Amanda Powers",
  title: "Lead Designer @pixel_union",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces",
  coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&h=600&fit=crop",
  stats: {
    posts: 232,
    followers: 1344,
    following: 786,
    collections: 6,
    photos: 338,
    videos: 64,
  },
  info: {
    location: "London, UK",
    birthday: "April 24",
    education: "Postgraduate Art and Design University",
  },
  socials: [
    { platform: "Instagram", url: "https://instagram.com", iconName: "instagram" },
    { platform: "Dribbble", url: "https://dribbble.com", iconName: "dribbble" },
    { platform: "Behance", url: "https://behance.net", iconName: "behance" },
    { platform: "LinkedIn", url: "https://linkedin.com", iconName: "linkedin" },
  ],
  music: [
    {
      id: "1",
      title: "911",
      artist: "The Cartons",
      coverUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=120&h=120&fit=crop",
    },
    {
      id: "2",
      title: "Nice For What",
      artist: "Drake",
      coverUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&h=120&fit=crop",
    },
    {
      id: "3",
      title: "Sad! Bad News",
      artist: "XXXTentacion",
      coverUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120&h=120&fit=crop",
    },
  ],
  photos: [
    {
      id: "p1",
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=500&fit=crop",
      caption: "Fashion portrait",
    },
    {
      id: "p2",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=500&fit=crop",
      caption: "Studio session",
    },
    {
      id: "p3",
      url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=500&fit=crop",
      caption: "Natural sunlight",
    },
    {
      id: "p4",
      url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&h=500&fit=crop",
      caption: "Profile shoot",
    },
  ],
  videos: [
    {
      id: "v1",
      title: "Mountain Lake Travel Vlog",
      thumbnailUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=450&fit=crop",
      duration: "03:45",
      views: "1.2k views",
    },
  ],
  posts: [
    {
      id: "post-1",
      author: {
        name: "Amanda Powers",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces",
        date: "26 Jun 2018 at 7:36 pm",
      },
      content: "",
      tags: ["#thinkfirstthink"],
      location: "London, UK",
      images: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&h=900&fit=crop",
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=600&fit=crop",
      ],
      likes: "1.4k",
      comments: 248,
      shares: 32,
    },
  ],
};
