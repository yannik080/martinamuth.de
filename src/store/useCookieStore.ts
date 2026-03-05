import { create } from 'zustand';

type ConsentLevel = 'all' | 'essential' | null;
type ConsentMode = 'global-banner' | 'click-to-load';

interface CookieStore {
    consent: ConsentLevel;
    consentMode: ConsentMode;
    hasDecided: boolean;
    setConsent: (consent: ConsentLevel) => void;
    openSettings: () => void;
}

// Retrieve initial consent from localStorage safely
const getInitialConsent = (): ConsentLevel => {
    if (typeof window === 'undefined') return null;
    const stored = localStorage.getItem('cookie-consent');
    if (stored === 'all' || stored === 'essential') {
        return stored as ConsentLevel;
    }
    return null;
};

export const useCookieStore = create<CookieStore>((set) => ({
    consent: getInitialConsent(),
    consentMode: 'global-banner',
    hasDecided: getInitialConsent() !== null,
    setConsent: (consent) => {
        localStorage.setItem('cookie-consent', consent || '');
        set({ consent, hasDecided: true });
    },
    openSettings: () => {
        set({ hasDecided: false });
    },
}));
