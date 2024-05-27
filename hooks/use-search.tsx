import { create } from "zustand";

type SearchStore = {
    isOpen: boolean;
    onOpen: () => void;
    onclose: () => void;
    toggle: () => void;
};

export const useSearch = create<SearchStore>((set, get) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onclose: () => set({ isOpen: false }),
    toggle: () => set({ isOpen: !get().isOpen })
}));
