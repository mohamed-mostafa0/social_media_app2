export interface PostAuthor {
  name: string;
  avatar: string;
  date?: string;
  handle?: string;
}

export interface Post {
  id: string | number;
  author: PostAuthor;
  content: string;
  tags: string[];
  images: string[];
  likes: string | number;
  comments: string | number;
  shares?: string | number;
  isLiked?: boolean;
  isBookmarked?: boolean;
}

export interface CreatePostPayload {
  content: string;
  images?: string[];
  tags?: string[];
  privacy?: 'public' | 'friends' | 'only_me';
}
