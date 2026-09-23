export interface StoryItem {
  id?: string | number;
  name: string;
  avatar: string;
  isUser?: boolean;
  mediaUrl?: string;
  viewed?: boolean;
}
