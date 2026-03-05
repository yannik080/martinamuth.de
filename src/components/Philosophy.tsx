import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Philosophy() {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Parallax background
        gsap.to(".parallax-bg", {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: container.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            },
        });

        // Split text reveal
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".manifesto-text",
                start: "top 75%",
            }
        });

        tl.from(".manifesto-old", {
            opacity: 0,
            x: -50,
            duration: 1,
            ease: "power2.out",
        }).from(".manifesto-new", {
            opacity: 0,
            x: 50,
            duration: 1,
            ease: "power2.out",
        }, "-=0.5").from(".manifesto-desc", {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power2.out",
        }, "-=0.5");
    }, { scope: container });

    return (
        <section
            ref={container}
            id="philosophie"
            className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-charcoal"
        >
            {/* Background Parallax */}
            <div className="absolute inset-0 z-0 h-[130%] -top-[15%] w-full parallax-bg">
                <img
                    src="/images/fabric_texture.png"
                    alt="Dark textured fabric background"
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
            </div>

            <div className="relative z-10 w-full max-w-6xl px-6 py-24 manifesto-text flex flex-col items-center">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 md:mb-20">

                    <div className="manifesto-old text-left border-l-2 border-white/20 pl-8 py-4">
                        <h3 className="text-white/40 font-mono text-sm tracking-widest mb-4 uppercase">Die Norm</h3>
                        <h2 className="text-white/60 font-sans text-2xl md:text-3xl font-light leading-relaxed">
                            Andere fragen: <br />
                            <span className="italic">„Welchen Wegwerf-Artikel können wir günstig bedrucken?“</span>
                        </h2>
                    </div>

                    <div className="manifesto-new text-right border-r-2 border-primary pr-8 py-4">
                        <h3 className="text-primary font-mono text-sm tracking-widest mb-4 uppercase">Unser Anspruch</h3>
                        <h2 className="text-white font-serif text-3xl md:text-4xl italic leading-relaxed">
                            Wir fragen: <br />
                            „Welches haptische, hochwertige Produkt repräsentiert Ihre Corporate Identity am präzisesten?“
                        </h2>
                    </div>

                </div>

                <div className="manifesto-desc w-full max-w-4xl text-center">
                    <p className="text-white/80 font-sans text-xl md:text-2xl font-light leading-relaxed text-balance">
                        Die Zeiten von billigen Wegwerf-Artikeln sind vorbei. Wir denken Corporate Merchandise neu: nachhaltig, hochwertig und mit echtem Purpose. Es geht nicht um das nächste bedruckte T-Shirt, sondern um textile Botschafter, die Ihre Unternehmenskultur nach außen tragen. Erstklassige Qualität und GOTS-zertifizierte Kreislaufwirtschaft sind für uns kein Trend, sondern Standard.
                    </p>
                </div>
            </div>
        </section>
    );
}
