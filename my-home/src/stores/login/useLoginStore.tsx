import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useLoginStore = create(
  persist(
    (set: any, get: any) => ({
      AccessToken: '',
      setAccessToken: (data: any) => set((state: any) => ({ AccessToken: data })),
    }),
    {
      name: 'login-storage', // 저장소에서 항목을 식별하는 이름
    },
  ),
);

export default useLoginStore;
