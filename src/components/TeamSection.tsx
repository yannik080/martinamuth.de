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
                    Die Köpfe hinter den Konzepten.
                </h2>
                <p className="text-lg text-charcoal/70 font-sans font-light leading-relaxed">
                    Ein Team mit kompromisslosem Anspruch an Qualität, Ästhetik und Markenführung.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 max-w-5xl w-full">
                {/* Martina */}
                <div className="team-member flex flex-col items-center text-center group">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden mb-8 border-4 border-transparent transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:border-primary/20">
                        <img
                            src="/images/Martina.jpg"
                            alt="Martina Muth"
                            className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                        />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-charcoal mb-2">Martina Muth</h3>
                    <p className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-4">Gründerin & Strategie</p>
                    <p className="text-charcoal/70 font-sans leading-relaxed max-w-sm">
                        Branding ist für mich mehr als ein Logo. Seit fast drei Jahrzehnten übersetze ich Unternehmenswerte in fühlbare Produkte. Mein Fokus liegt auf strategischer Beratung und nachhaltigen Textil-Konzepten, die nicht nur gut aussehen, sondern einen echten Wert für Global Player schaffen.
                    </p>
                </div>

                {/* Lorna */}
                <div className="team-member flex flex-col items-center text-center group pt-0 md:pt-16">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] overflow-hidden mb-8 border-4 border-transparent transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:border-primary/20">
                        <img
                            src="/images/Lorna.jpeg"
                            alt="Lorna"
                            className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                        />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-charcoal mb-2">Lorna</h3>
                    <p className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-4">Sales & Kundenberatung</p>
                    <p className="text-charcoal/70 font-sans leading-relaxed max-w-sm">
                        Im Vertrieb und der Beratung geht es mir vor allem um eines: Zuhören. Ich möchte Ihre Marke wirklich verstehen, um genau das Produkt zu finden, das Ihre Werte repräsentiert. Mit Leidenschaft für Menschen und maßgeschneiderte Lösungen begleite ich Sie partnerschaftlich ans Ziel.
                    </p>
                </div>
            </div>
        </section>
    );
}
