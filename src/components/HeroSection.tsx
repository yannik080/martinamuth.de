import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function HeroSection() {
    const container = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline();
            tl.from(".hero-text", {
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
                delay: 0.2,
            });
            tl.from(".hero-img", {
                scale: 1.05,
                duration: 2,
                ease: "power2.out",
            }, "-=1.5");
        },
        { scope: container }
    );

    return (
        <section
            ref={container}
            className="relative w-full h-[100dvh] flex flex-col justify-center items-center overflow-hidden"
        >
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 w-full h-full z-0 hero-img">
                <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=90&w=2070&auto=format&fit=crop"
                    alt="Clothing rack fashion background"
                    className="w-full h-full object-cover"
                />
                {/* Adjusting gradient overlay to ensure text pops against the lighter image */}
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal/80 mix-blend-multiply" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center text-center mt-20">
                <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-4 tracking-tighter hero-text">
                    Marken-Essenz. <br />
                    Greifbar gemacht.
                </h1>

                <p className="text-primary text-4xl md:text-5xl font-serif italic mb-8 hero-text max-w-4xl text-balance">
                    Corporate Identity übersetzt in Premium Textilien und B2B Merchandise.
                </p>

                <p className="text-white/80 max-w-2xl text-lg md:text-xl font-sans font-light leading-relaxed hero-text text-balance">
                    Für Marken, die bleiben – und Agenturen, die Perfektion suchen.
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hero-text">
                <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-pulse" />
                </div>
            </div>
        </section>
    );
}
