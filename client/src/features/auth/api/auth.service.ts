import { apiClient } from '@/lib/axios';
import { LoginCredentials, RegisterPayload } from '../types/auth.types';

export const authService = {
  login: async (credentials: LoginCredentials) => {
    const response = await apiClient.post('/auth/signin', credentials);
    return response.data;
  },
  
  register: async (userData: RegisterPayload) => {
    const response = await apiClient.post('/auth/signup', userData);
    return response.data;
  }
};

export const authApi = authService;
