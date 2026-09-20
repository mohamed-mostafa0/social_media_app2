import { apiClient } from './axios';

export const authApi = {
  login: async (credentials: any) => {
    const response = await apiClient.post('/auth/signin', credentials);
    return response.data;
  },
  
  register: async (userData: any) => {
    const response = await apiClient.post('/auth/signup', userData);
    return response.data;
  }
};
