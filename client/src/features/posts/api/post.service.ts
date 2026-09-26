import { apiClient } from "@/lib/axios";
import { CreatePostPayload} from "../types/post.types";



export const postService = {
  addPost: async (body: CreatePostPayload | FormData) => {
    const isFormData = typeof FormData !== "undefined" && body instanceof FormData;
    const response = await apiClient.post("/post/add", body, {
      headers: isFormData ? { "Content-Type": "multipart/form-data" } : undefined,
    });
    return response.data;
  },
};
