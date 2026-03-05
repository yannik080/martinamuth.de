import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide-react";
import { useContactStore } from "../lib/store";

import { Link, useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { openContactModal } = useContactStore();
    const navRef = useRef<HTMLElement>(null);
    const location = useLocation();

    useGSAP(
        () => {
            // Manage scroll state via React to prevent React from overwriting GSAP's toggleClass on route changes
            const st = ScrollTrigger.create({
                start: 50,
                end: 99999,
                onEnter: () => setIsScrolled(true),
                onLeaveBack: () => setIsScrolled(false),
            });

            // If the user lands on the page already scrolled, trigger it
            if (window.scrollY > 50) {
                setIsScrolled(true);
            }

            return () => {
                st.kill();
            };
        },
        { scope: navRef }
    );

    // Handle reliable scroll-to-hash after page navigations (e.g. from /journal to /#expertise)
    useEffect(() => {
        if (location.hash && location.pathname === "/") {
            setTimeout(() => {
                // Ensure the hash selector works by removing the leading slash if present
                const targetId = location.hash.replace('/', '');
                const element = document.querySelector(targetId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    }, [location]);

    // Handle click on hash links locally without page reload jump
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setIsMobileMenuOpen(false);
        if (location.pathname === "/") {
            e.preventDefault();
            const targetId = href.replace('/', ''); // Fix: '/#prozess' -> '#prozess'
            const element = document.querySelector(targetId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", targetId);
            }
        }
    };

    // If we're not on the home page with the dark hero image, default text to charcoal instead of white
    const isLightMode = location.pathname !== "/";

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
                    {["Expertise", "Prozess", "Philosophie", "Leistungen"].map((item) => {
                        const href = `/#${item.toLowerCase()}`;
                        return (
                            <Link
                                key={item}
                                to={href}
                                onClick={(e) => handleNavClick(e, href)}
                                className="text-4xl text-white font-heading font-medium tracking-wide transition-opacity duration-300 hover:opacity-70"
                            >
                                {item}
                            </Link>
                        );
                    })}
                    <Link
                        to="/journal"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-4xl text-white font-heading font-medium tracking-wide transition-opacity duration-300 hover:opacity-70"
                    >
                        Journal
                    </Link>
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
                className={`nav-base ${isScrolled ? 'nav-scrolled' : ''} ${isLightMode ? '!text-charcoal' : ''}`}
            >
                <div className="flex items-center">
                    <Link to="/">
                        <img
                            src="/images/final_logo_MartinaMuth_green.png"
                            alt="Martina Muth Corporate Brand Concepts"
                            className="h-10 md:h-12 w-auto object-contain transition-all duration-500"
                        />
                    </Link>
                </div>

                <div className="hidden lg:flex items-center gap-8">
                    {["Expertise", "Prozess", "Philosophie", "Leistungen"].map((item) => {
                        const href = `/#${item.toLowerCase()}`;
                        return (
                            <Link
                                key={item}
                                to={href}
                                onClick={(e) => handleNavClick(e, href)}
                                className="text-sm font-sans font-medium tracking-wide transition-opacity duration-300 hover:opacity-70"
                            >
                                {item}
                            </Link>
                        );
                    })}
                    <Link
                        to="/journal"
                        className="text-sm font-sans font-medium tracking-wide transition-opacity duration-300 hover:opacity-70"
                    >
                        Journal
                    </Link>
                    <button
                        onClick={openContactModal}
                        className={`px-6 py-2.5 rounded-full font-sans text-sm tracking-wide transition-all shadow-md font-medium cursor-pointer [.nav-scrolled_&]:bg-primary [.nav-scrolled_&]:text-white [.nav-scrolled_&]:hover:bg-primary/90 ${isLightMode ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white text-charcoal hover:bg-white/90'}`}
                    >
                        Kontakt
                    </button>
                </div>

                <button
                    className="lg:hidden transition-opacity duration-300 hover:opacity-70"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Menu className="w-6 h-6" />
                </button>
            </nav>
        </>
    );
}
