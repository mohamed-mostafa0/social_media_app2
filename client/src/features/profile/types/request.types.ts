export interface FollowRequester {
  _id: string;
  firstName: string;
  lastName: string;
  profilePicture?: string;
  email?: string;
}

export interface FollowRequestItem {
  _id: string;
  followFromId: FollowRequester;
  followToId: string;
  status: "pending" | "accepted";
  createdAt?: string;
  updatedAt?: string;
}
