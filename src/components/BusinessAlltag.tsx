import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function BusinessAlltag() {
    const container = useRef<HTMLElement>(null);

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
        const script = document.createElement("script");
        script.src = "https://elfsightcdn.com/platform.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount (optional but good practice)
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

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
                    Echte Einblicke in unsere Projekte, Material-Scoutings und strategischen Partnerschaften. Verfolgen Sie unsere aktuellen Themen direkt auf LinkedIn.
                </p>
            </div>

            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden linkedin-widget-container border border-charcoal/5 px-4 md:px-8 min-h-[400px] relative isolate">

                {/* Top overlay to securely block admin controls */}
                <div className="absolute top-0 left-0 w-full h-[65px] bg-white z-[9999] pointer-events-auto"></div>

                {/* The dynamic widget */}
                <div className="relative z-[10] w-full pt-4 pb-12">
                    <div className="elfsight-app-beafe946-72db-4730-bb75-ad9e5be2ddaf" data-elfsight-app-lazy></div>
                </div>

                {/* Bottom overlay to securely block free badge */}
                <div className="absolute bottom-0 left-0 w-full h-[75px] bg-white z-[9999] pointer-events-auto"></div>

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
