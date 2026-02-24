import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function TeamSection() {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.fromTo(".team-member",
            { y: 50, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.3,
                ease: "power3.out",
            }
        );
    }, { scope: container });

    return (
        <section ref={container} className="w-full py-32 px-6 bg-white flex flex-col items-center">
            <div className="max-w-3xl text-center mb-20 team-member">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6">
                    Die Gesichter hinter den Konzepten.
                </h2>
                <p className="text-lg text-charcoal/70 font-sans font-light leading-relaxed">
                    Ein eingespieltes Team aus Strategie und Design. Wir kombinieren tiefes Markenverständnis mit kompromisslosem Anspruch an Qualität und Ästhetik.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 max-w-5xl w-full">
                {/* Martina */}
                <div className="team-member flex flex-col items-center text-center group">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden mb-8 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                        <img
                            src="/images/Martina.jpg"
                            alt="Martina Muth"
                            className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                        />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-charcoal mb-2">Martina Muth</h3>
                    <p className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-4">Gründerin & Strategie</p>
                    <p className="text-charcoal/70 font-sans leading-relaxed max-w-sm">
                        Seit über zwei Jahrzehnten die treibende Kraft für Corporate Branding und maßgeschneiderte Textilkonzepte für internationale Top-Marken.
                    </p>
                </div>

                {/* Loana */}
                <div className="team-member flex flex-col items-center text-center group pt-0 md:pt-16">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden mb-8 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                        <img
                            src="/images/Loana.jpeg"
                            alt="Loana"
                            className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                        />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-charcoal mb-2">Loana</h3>
                    <p className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-4">Sales & Kundenberatung</p>
                    <p className="text-charcoal/70 font-sans leading-relaxed max-w-sm">
                        Mit meiner Erfahrung im Vertrieb für unterschiedlichste Branchen erkenne ich schnell, worauf es ankommt. Meine Leidenschaft gilt Menschen, Marken und maßgeschneiderten Lösungen – für Produkte, die perfekt passen und Eindruck hinterlassen.
                    </p>
                </div>
            </div>
        </section>
    );
}
