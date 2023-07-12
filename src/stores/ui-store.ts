import { create } from 'zustand';

export interface UIStore {
  navbarIsOpen: boolean;
  openNavbar: () => void;
  closeNavbar: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  navbarIsOpen: false,
  openNavbar: () => set(() => ({ navbarIsOpen: true })),
  closeNavbar: () => set(() => ({ navbarIsOpen: false })),
}));
