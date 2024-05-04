import { create } from "zustand";

type TeamspaceStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useTeamspaces = create<TeamspaceStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));