import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide-react";
import { useContactStore } from "../lib/store";

gsap.registerPlugin(ScrollTrigger);

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { openContactModal } = useContactStore();
    const navRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            // Morphing Logic: Full width transparent -> Floating Pill
            ScrollTrigger.create({
                start: 50,
                end: 99999,
                toggleClass: {
                    targets: navRef.current,
                    className: "nav-scrolled",
                },
            });

        },
        { scope: navRef }
    );

    return (
        <>
            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-charcoal z-[100] flex flex-col items-center justify-center transition-opacity duration-500 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <button
                    className="absolute top-8 right-8 text-white hover:opacity-70 transition-opacity"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <X className="w-10 h-10" />
                </button>
                <div className="flex flex-col items-center gap-8">
                    {["Expertise", "Prozess", "Philosophie", "Leistungen"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-4xl text-white font-heading font-medium tracking-wide transition-opacity duration-300 hover:opacity-70"
                        >
                            {item}
                        </a>
                    ))}
                    <button
                        onClick={() => {
                            setIsMobileMenuOpen(false);
                            openContactModal();
                        }}
                        className="bg-primary text-white hover:bg-primary/90 px-8 py-3 rounded-full font-sans text-xl tracking-wide transition-all shadow-md font-medium mt-8"
                    >
                        Kontakt
                    </button>
                </div>
            </div>

            <nav
                ref={navRef}
                className="nav-base"
            >
                <div className="flex items-center">
                    <img
                        src="/images/final_logo_MartinaMuth_green.png"
                        alt="Martina Muth Corporate Brand Concepts"
                        className="h-10 md:h-12 w-auto object-contain transition-all duration-500"
                    />
                </div>

                <div className="hidden lg:flex items-center gap-8">
                    {["Expertise", "Prozess", "Philosophie", "Leistungen"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-sans font-medium tracking-wide transition-opacity duration-300 hover:opacity-70"
                        >
                            {item}
                        </a>
                    ))}
                    <button
                        onClick={openContactModal}
                        className="bg-white text-charcoal hover:bg-white/90 px-6 py-2.5 rounded-full font-sans text-sm tracking-wide transition-all shadow-md font-medium cursor-pointer [.nav-scrolled_&]:bg-primary [.nav-scrolled_&]:text-white [.nav-scrolled_&]:hover:bg-primary/90"
                    >
                        Kontakt
                    </button>
                </div>

                <button
                    className="lg:hidden nav-text transition-opacity duration-300 hover:opacity-70"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Menu className="w-6 h-6" />
                </button>
            </nav>
        </>
    );
}
