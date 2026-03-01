import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CLIENTS = [
    "August Storm", "Banxware", "Commerzbank", "deltaDAO", "Küchenfreunde", "nature gummies", "Nutramaxx", "Market Grounds", "Messe Frankfurt", "McCANN HEALTH", "Speed Care", "Wulf Johannsen", "XING"
];

export function ClientMarquee() {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Infinite marquee animation using GSAP
        // Clone the content for seamless looping
        gsap.to(".marquee-content", {
            xPercent: -50, // Move half the width since we double the items
            ease: "none",
            duration: 20,
            repeat: -1,
        });
    }, { scope: marqueeRef });

    return (
        <section className="w-full py-16 bg-white overflow-hidden border-y border-charcoal/5">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <p className="text-primary font-mono text-sm tracking-widest uppercase font-bold">
                    Vertraut von Branchenführern
                </p>
            </div>

            <div ref={marqueeRef} className="relative w-full flex whitespace-nowrap overflow-hidden">
                <div className="marquee-content flex items-center gap-16 md:gap-32 w-max px-8">
                    {/* Render the list twice for seamless looping */}
                    {[...CLIENTS, ...CLIENTS].map((client, idx) => (
                        <div
                            key={idx}
                            className="text-2xl md:text-4xl font-heading font-black text-charcoal/20 uppercase tracking-tighter hover:text-charcoal/50 transition-colors cursor-default"
                        >
                            {client}
                        </div>
                    ))}
                </div>

                {/* Fade edges */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
            </div>
        </section>
    );
}
