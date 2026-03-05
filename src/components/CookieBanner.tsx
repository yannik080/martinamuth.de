import { Cookie, ShieldCheck } from 'lucide-react';
import { useCookieStore } from '../store/useCookieStore';

export function CookieBanner() {
    const { hasDecided, setConsent, openSettings } = useCookieStore();

    if (hasDecided) {
        return (
            <button
                onClick={openSettings}
                className="fixed bottom-4 left-4 z-50 p-3 bg-white/80 backdrop-blur-md border border-charcoal/10 shadow-lg rounded-full text-charcoal/60 hover:text-primary hover:scale-105 active:scale-95 transition-all duration-300 group"
                aria-label="Cookie Einstellungen"
            >
                <Cookie className="w-5 h-5" />
                <span className="absolute left-full ml-3 px-3 py-1.5 bg-charcoal text-white text-xs rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Cookie Einstellungen
                </span>
            </button>
        );
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none flex justify-center items-end">
            <div className="w-full max-w-4xl bg-charcoal/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl md:rounded-3xl p-6 md:p-8 pointer-events-auto transform transition-all translate-y-0 opacity-100 flex flex-col md:flex-row gap-8 items-center md:items-start text-white">

                <div className="flex-1 flex flex-col gap-3">
                    <div className="flex items-center gap-3 mb-1">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-heading font-medium">Ihre Privatsphäre</h3>
                    </div>
                    <p className="text-sm md:text-base text-white/70 font-sans leading-relaxed">
                        Wir verwenden Cookies und externe Dienste (wie LinkedIn-Feeds und Calendly-Terminbuchungen), um Ihnen das beste Website-Erlebnis zu bieten. Einige sind essenziell, während andere uns helfen, diese Website zu verbessern und externe Inhalte anzuzeigen.
                    </p>
                    <div className="mt-2 text-xs md:text-sm text-white/50 hover:text-white/80 transition-colors">
                        <a href="#datenschutz" onClick={(e) => {
                            e.preventDefault();
                            // We dispatch a custom event to open the legal modal to the privacy policy
                            window.dispatchEvent(new CustomEvent('open-legal-modal', { detail: 'privacy' }));
                        }} className="underline underline-offset-4 decoration-white/20 hover:decoration-white/50">
                            Datenschutzerklärung
                        </a>
                        <span className="mx-2">•</span>
                        <a href="#impressum" onClick={(e) => {
                            e.preventDefault();
                            window.dispatchEvent(new CustomEvent('open-legal-modal', { detail: 'imprint' }));
                        }} className="underline underline-offset-4 decoration-white/20 hover:decoration-white/50">
                            Impressum
                        </a>
                    </div>
                </div>

                <div className="w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                    <button
                        onClick={() => setConsent('all')}
                        className="px-8 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-sans font-medium transition-all active:scale-[0.98] shadow-lg shadow-primary/20 whitespace-nowrap"
                    >
                        Alle akzeptieren
                    </button>
                    <button
                        onClick={() => setConsent('essential')}
                        className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-sans font-medium transition-all active:scale-[0.98] whitespace-nowrap"
                    >
                        Nur essenzielle
                    </button>
                </div>
            </div>
        </div>
    );
}
