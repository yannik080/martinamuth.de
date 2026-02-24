import { create } from 'zustand';

interface ContactStore {
    isContactModalOpen: boolean;
    openContactModal: () => void;
    closeContactModal: () => void;
    isLegalModalOpen: boolean;
    legalModalType: 'impressum' | 'datenschutz' | 'agb' | null;
    openLegalModal: (type: 'impressum' | 'datenschutz' | 'agb') => void;
    closeLegalModal: () => void;
}

export const useContactStore = create<ContactStore>((set) => ({
    isContactModalOpen: false,
    openContactModal: () => set({ isContactModalOpen: true }),
    closeContactModal: () => set({ isContactModalOpen: false }),
    isLegalModalOpen: false,
    legalModalType: null,
    openLegalModal: (type) => set({ isLegalModalOpen: true, legalModalType: type }),
    closeLegalModal: () => set({ isLegalModalOpen: false }),
}));
