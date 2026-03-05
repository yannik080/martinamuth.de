import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin } from "lucide-react";
import { useCookieStore } from "../store/useCookieStore";

gsap.registerPlugin(ScrollTrigger);

export function BusinessAlltag() {
    const container = useRef<HTMLElement>(null);
    const { consent, consentMode, openSettings } = useCookieStore();
    const [isLoadedLocal, setIsLoadedLocal] = useState(false);

    const shouldLoad = consentMode === 'global-banner' ? consent === 'all' : isLoadedLocal;

    useGSAP(() => {
        gsap.fromTo(".business-header",
            { y: 30, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
            }
        );

        gsap.fromTo(".linkedin-widget-container",
            { y: 50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 60%",
                },
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
            }
        );
    }, { scope: container });

    // Load the Elfsight script dynamically
    useEffect(() => {
        if (!shouldLoad) return;

        const script = document.createElement("script");
        script.src = "https://elfsightcdn.com/platform.js";
        script.async = true;
        // Adding the script to the body evaluates it
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, [shouldLoad]);

    return (
        <section ref={container} className="w-full py-32 px-6 bg-charcoal/5 flex flex-col items-center">

            <div className="max-w-3xl text-center mb-16 business-header">
                <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <Linkedin className="w-6 h-6" />
                    </div>
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
                    Aus dem Business Alltag.
                </h2>
                <p className="text-lg text-charcoal/70 font-sans font-light leading-relaxed">
                    Der Weg von der Skizze zum fertigen Premium-Produkt ist vielseitig. Auf LinkedIn teile ich regelmäßig echte Insights aus unserem Agenturalltag, Gedanken zu Nachhaltigkeit in der Textilproduktion und aktuelle B2B-Projekte. Lassen Sie uns vernetzen!
                </p>
            </div>

            {/* 
              - overflow-hidden clips anything that falls outside this white box 
              - pt-10 ensures the top of the widget has plenty of breathing room (not cut off)
              - pb-0 ensures the bottom boundary is strict 
            */}
            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden linkedin-widget-container border border-charcoal/5 px-4 md:px-8 pt-10 pb-0 relative isolate">

                {/* 
                  - -mb-[70px] pushes the widget down, sliding the specific "Free Widget" 
                    badge right below the overflow-hidden boundary so it disappears.
                  - Carousel dots stay visible since they are higher up.
                */}
                <div className="relative w-full -mb-[65px] md:-mb-[75px] min-h-[400px] flex items-center justify-center">
                    {shouldLoad ? (
                        <div className="elfsight-app-beafe946-72db-4730-bb75-ad9e5be2ddaf"></div>
                    ) : (
                        <div className="text-center p-8 max-w-md mx-auto relative z-10 bottom-6 md:bottom-10 flex flex-col items-center">
                            <div className="w-12 h-12 bg-charcoal/5 rounded-full flex items-center justify-center mb-4 text-charcoal/40">
                                <Linkedin className="w-5 h-5" />
                            </div>
                            {consentMode === 'global-banner' ? (
                                <>
                                    <p className="text-charcoal/60 mb-6 font-sans">
                                        Bitte akzeptieren Sie alle Cookies, um den LinkedIn-Feed hier direkt sehen zu können.
                                    </p>
                                    <button
                                        onClick={openSettings}
                                        className="px-6 py-2.5 bg-white rounded-full border border-charcoal/10 shadow-sm text-sm font-medium hover:bg-charcoal/5 transition-colors"
                                    >
                                        Cookie Einstellungen öffnen
                                    </button>
                                </>
                            ) : (
                                <>
                                    <p className="text-charcoal/60 mb-6 font-sans">
                                        Mit dem Laden des LinkedIn-Feeds akzeptieren Sie die Datenschutzerklärung von Elfsight.
                                    </p>
                                    <button
                                        onClick={() => setIsLoadedLocal(true)}
                                        className="px-8 py-3 bg-primary text-white rounded-full shadow-lg shadow-primary/20 font-sans font-medium hover:scale-105 active:scale-95 transition-transform"
                                    >
                                        LinkedIn-Feed laden
                                    </button>
                                </>
                            )}
                        </div>
                    )}
                </div>

            </div>

            <div className="mt-12 business-header">
                <a
                    href="https://www.linkedin.com/in/martina-muth-b83960239"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-sans font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                >
                    <Linkedin className="w-5 h-5 fill-current" />
                    Zum LinkedIn Profil
                </a>
            </div>

        </section>
    );
}
