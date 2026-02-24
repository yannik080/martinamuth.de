import { CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";
import { useContactStore } from "../lib/store";

const OFFERINGS = [
    {
        title: "Sparring Session",
        desc: "Ein intensiver Workshop zur Schärfung Ihrer textilen Markenstrategie.",
        features: ["Ist-Analyse", "Wettbewerbsvergleich", "Konkrete Handlungsempfehlungen"],
        highlight: false,
    },
    {
        title: "Full-Service Kollektion",
        desc: "Das Komplettpaket. Wir übernehmen alles von der Skizze bis zur Auslieferung.",
        features: ["Individuelles Design", "Nachhaltiges Sourcing", "Production Management", "Logistik & Rollout"],
        highlight: true,
    },
    {
        title: "Merchandise Line",
        desc: "Hochwertige Give-Aways und Promo-Artikel, die nicht im Müll landen.",
        features: ["Trend-Scouting", "Mustererstellung", "Qualitätskontrolle"],
        highlight: false,
    }
];

export function Offerings() {
    const { openContactModal } = useContactStore();

    return (
        <section id="leistungen" className="py-32 px-6 w-full max-w-7xl mx-auto">
            <div className="mb-20 text-center max-w-3xl mx-auto">
                <h2 className="text-charcoal text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
                    Ihre Roadmap zur textilen Identität.
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {OFFERINGS.map((offer, idx) => (
                    <div
                        key={idx}
                        className={cn(
                            "relative rounded-[2rem] p-10 flex flex-col h-full transition-transform duration-500 hover:-translate-y-2",
                            offer.highlight
                                ? "bg-primary text-white shadow-2xl scale-105 z-10 py-14"
                                : "bg-white text-charcoal border border-charcoal/5 shadow-sm"
                        )}
                    >
                        {offer.highlight && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-charcoal text-white text-xs font-mono px-4 py-1 rounded-full uppercase tracking-widest">
                                Beliebtester Weg
                            </div>
                        )}

                        <h3 className="text-2xl font-heading font-bold mb-4">{offer.title}</h3>
                        <p className={cn("font-sans leading-relaxed mb-8", offer.highlight ? "text-white/90" : "text-charcoal/70")}>
                            {offer.desc}
                        </p>

                        <ul className="flex flex-col gap-4 mb-10 flex-grow">
                            {offer.features.map((feat, fIdx) => (
                                <li key={fIdx} className="flex items-center gap-3 font-sans text-sm">
                                    <CheckCircle2 className={cn("w-4 h-4", offer.highlight ? "text-white" : "text-primary")} />
                                    {feat}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={openContactModal}
                            className={cn(
                                "w-full py-4 rounded-full font-sans font-medium flex items-center justify-center gap-2 transition-all active:scale-95 group",
                                offer.highlight
                                    ? "bg-white text-primary hover:bg-background"
                                    : "bg-charcoal text-white hover:bg-charcoal/90"
                            )}
                        >
                            Anfragen
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
