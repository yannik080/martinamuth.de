import { X, Mail, Phone } from "lucide-react";
import { useContactStore } from "../lib/store";
import { useEffect, useState } from "react";
import { InlineWidget } from "react-calendly";
import { useCookieStore } from "../store/useCookieStore";

export function ContactModal() {
    const { isContactModalOpen, closeContactModal } = useContactStore();
    const { consent, consentMode, openSettings } = useCookieStore();
    const [mounted, setMounted] = useState(false);
    const [isLoadedLocal, setIsLoadedLocal] = useState(false);

    const shouldLoad = consentMode === 'global-banner' ? consent === 'all' : isLoadedLocal;

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div
            className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-all duration-500 ${isContactModalOpen ? 'opacity-100 pointer-events-auto backdrop-blur-md bg-charcoal/80' : 'opacity-0 pointer-events-none'}`}
            onClick={closeContactModal}
        >
            <div
                className={`bg-white rounded-3xl w-full max-w-5xl max-h-[95vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row transition-transform duration-500 ${isContactModalOpen ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Left Side: Info */}
                <div className="bg-charcoal text-white p-10 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10">
                        <img src="/images/Bildmarke.png" alt="Logo" className="h-8 mb-12" />
                        <h3 className="text-3xl font-heading font-bold tracking-tight mb-4">Lassen Sie uns über Ihre Marke sprechen.</h3>
                        <p className="text-white/60 font-sans leading-relaxed mb-12">
                            Egal, ob Sie schon eine konkrete Vision haben oder Inspiration für Ihre nächste B2B-Kollektion suchen – wir freuen uns auf ein erstes unverbindliches Gespräch.
                        </p>

                        <div className="space-y-6">
                            <a
                                href="mailto:info@martinamuth.de"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeContactModal}
                                className="flex items-center gap-4 text-white hover:text-primary transition-colors"
                            >
                                <Mail className="w-5 h-5 text-primary" />
                                <span className="font-mono text-sm">info@martinamuth.de</span>
                            </a>
                            <div className="flex items-center gap-4 text-white hover:text-primary transition-colors cursor-pointer">
                                <Phone className="w-5 h-5 text-primary" />
                                <span className="font-mono text-sm">+49 (0) 174 123 4567</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Calendly */}
                <div className="bg-white md:w-3/5 relative flex flex-col min-h-[600px] md:min-h-[700px]">
                    <div className="w-full flex justify-end p-4 absolute top-0 right-0 z-10">
                        <button
                            onClick={closeContactModal}
                            className="p-2 text-charcoal/40 hover:text-charcoal hover:bg-charcoal/5 transition-colors rounded-full"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="w-full h-full pt-12 flex flex-col items-center justify-center" style={{ filter: shouldLoad ? "hue-rotate(-65deg) saturate(30%) brightness(1.1)" : "none" }}>
                        {shouldLoad ? (
                            <InlineWidget
                                url="https://calendly.com/martina-muth/meeting?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff"
                                styles={{ height: '700px', width: '100%', minWidth: '320px' }}
                            />
                        ) : (
                            <div className="text-center p-8 max-w-sm mx-auto">
                                <div className="w-16 h-16 bg-charcoal/5 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="font-heading font-bold text-2xl text-charcoal/30">C</span>
                                </div>
                                <h4 className="text-xl font-heading font-medium text-charcoal mb-3">Terminbuchung blockiert</h4>

                                {consentMode === 'global-banner' ? (
                                    <>
                                        <p className="text-charcoal/60 mb-8 font-sans leading-relaxed">
                                            Für die direkte Terminbuchung via Calendly benötigen wir Ihre Zustimmung zur Verwendung externer Dienste (Cookies).
                                        </p>
                                        <button
                                            onClick={openSettings}
                                            className="px-8 py-3.5 bg-primary text-white rounded-xl shadow-lg shadow-primary/20 font-sans font-medium hover:scale-105 active:scale-95 transition-transform w-full mb-4"
                                        >
                                            Cookie Einstellungen anpassen
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-charcoal/60 mb-8 font-sans leading-relaxed">
                                            Mit dem Laden des Formulars akzeptieren Sie die Datenschutzbestimmungen von Calendly.
                                        </p>
                                        <button
                                            onClick={() => setIsLoadedLocal(true)}
                                            className="px-8 py-3.5 bg-primary text-white rounded-xl shadow-lg shadow-primary/20 font-sans font-medium hover:scale-105 active:scale-95 transition-transform w-full mb-4"
                                        >
                                            Buchungsformular laden
                                        </button>
                                    </>
                                )}
                                <p className="text-sm text-charcoal/50">Alternativ erreichen Sie uns klassisch per E-Mail oder Telefon.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
