import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useLoginStore = create((set: any) => ({
  AccessToken: '',
  setAccessToken: (data: any) => set((state: any) => ({ AccessToken: data })),
}));

export default useLoginStore;
