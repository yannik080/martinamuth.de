import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../lib/utils";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
    {
        id: "01",
        title: "Strategie & Sparring Session",
        text: "Wir beginnen mit dem Kern in unserer exklusiven Beratungsphase. Welche Corporate Identity soll das Endprodukt ausstrahlen? Als strategische Boutique-Agentur formen wir den Grundstein für nachhaltige Corporate Fashion, die nicht verkleidet, sondern Ihre Werte repräsentiert.",
        bgColor: "bg-background",
        textColor: "text-charcoal",
        imgUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop" // Professional strategy/desk
    },
    {
        id: "02",
        title: "Sourcing & Veredelung",
        text: "Aus einem globalen, GOTS-zertifizierten Netzwerk wählen wir die perfekten Materialien für Ihre Zirkularwirtschaft. Stick. Direktdruck. Webung. Jedes Detail wird präzise auf Langlebigkeit (Slow Fashion) und optische Brillanz abgestimmt.",
        bgColor: "bg-charcoal",
        textColor: "text-white",
        imgUrl: "/images/tailoring_detail.png" // Fabric/tailoring detail
    },
    {
        id: "03",
        title: "Rollout & Logistik",
        text: "Pünktlich am Messestand. Einzeln verpackt für Ihre Mitarbeiter. Wir steuern die gesamte Supply Chain – von der ersten Skizze bis zur europaweiten Logistik und Übergabe an den Endträger.",
        bgColor: "bg-primary",
        textColor: "text-white",
        imgUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2670&auto=format&fit=crop" // Logistics/Boxes/Clean warehouse
    }
];

export function Methodology() {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".stacked-card");

        cards.forEach((card, index) => {
            // Scale down and fade out the card when the NEXT card scrolls over it
            if (index < cards.length - 1) {
                gsap.to(card, {
                    scale: 0.9,
                    opacity: 0.5,
                    filter: "blur(10px)",
                    ease: "none",
                    scrollTrigger: {
                        trigger: cards[index + 1],
                        start: "top 40%", // Delay the blur until the next card is much closer (40% of viewport)
                        end: "top 15%",
                        scrub: true,
                    }
                });
            }
        });
    }, { scope: container });

    return (
        <section
            ref={container}
            id="expertise"
            className="relative w-full py-40 bg-zinc-100 flex flex-col items-center pb-64"
        >
            <div className="w-full max-w-7xl px-6 mb-32 flex justify-between items-end">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-charcoal tracking-tight">
                    Die Methodik
                </h2>
                <span className="font-mono text-sm tracking-widest text-primary hidden md:block">
                    [ 3 SCHRITTE ZUR PERFEKTION ]
                </span>
            </div>

            <div className="w-full max-w-5xl px-6 flex flex-col gap-10">
                {CARDS.map((card, idx) => (
                    <div
                        key={card.id}
                        className={cn(
                            "stacked-card sticky top-24 w-full h-auto min-h-[60vh] md:h-[60vh] rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row transform-gpu will-change-transform",
                            card.bgColor
                        )}
                        style={{ zIndex: idx }}
                    >
                        {/* Image Half */}
                        <div className="w-full md:w-1/2 h-48 md:h-full relative overflow-hidden">
                            <img
                                src={card.imgUrl}
                                alt={card.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-charcoal/20" />
                        </div>

                        {/* Text Half */}
                        <div className={cn("w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center", card.textColor)}>
                            <span className="font-mono text-xs tracking-widest opacity-60 mb-6 uppercase">
                                PHASE {card.id}
                            </span>
                            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                                {card.title}
                            </h3>
                            <p className="font-sans text-lg md:text-xl opacity-80 leading-relaxed font-light">
                                {card.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
