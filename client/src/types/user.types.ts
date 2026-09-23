export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender?: 'male' | 'female';
  phoneNumber?: string;
  avatar?: string;
  handle?: string;
  bio?: string;
  followersCount?: number;
  followingCount?: number;
  postsCount?: number;
  isVerified?: boolean;
}
