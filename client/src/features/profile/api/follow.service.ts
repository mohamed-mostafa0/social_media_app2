import { apiClient } from "@/lib/axios";
import { FollowRequestItem } from "../types/request.types";

export const followService = {
  getFollowRequests: async (): Promise<FollowRequestItem[]> => {
    const response = await apiClient.get("/profile/list-requests");
    console.log(response);
    
    return response.data?.data?.data || [];
  },

  respondToFollowRequest: async (
    followFromId: string,
    response: "accept" | "reject"
  ) => {
    const res = await apiClient.patch("/profile/respond-to-follow-request", {
      followFromId,
      response,
    });
    return res.data;
  },

  toggleFollow: async (followToId: string) => {
    const res = await apiClient.post(`/profile/toggle-follow/${followToId}`);
    return res.data;
  },
};
