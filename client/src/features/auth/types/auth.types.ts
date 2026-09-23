import { User } from '@/types/user.types';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: 'male' | 'female';
  phoneNumber: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken?: string;
}

export interface AuthResponse {
  data: {
    accessToken: string;
    refreshToken?: string;
    user?: User;
  };
}
