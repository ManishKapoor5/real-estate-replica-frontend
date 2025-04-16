
// src/store/authStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  fullName: string;
  email: string;
  contactNumber: string;
  role: 'buyer' | 'seller' | 'agent' | 'admin';
  token: string;
  userId: string;
  isVerified?: boolean;
}

interface AuthStore {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: User) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
