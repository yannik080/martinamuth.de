import { ArrowUpRight, Linkedin } from "lucide-react";
import { useContactStore } from "../lib/store";

export function Footer() {
    return (
        <footer className="w-full bg-charcoal text-white rounded-t-[4rem] px-6 py-20 md:py-32 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">

                {/* Left Side */}
                <div className="flex flex-col gap-8">
                    {/* Status Indicator */}
                    <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full w-fit">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                        </span>
                        <span className="font-mono text-xs uppercase tracking-widest text-white/80">Status: Projektannahme offen</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-heading font-bold max-w-xl">
                        Lassen Sie uns Ihre Marke anziehend machen.
                    </h2>

                    <div className="flex items-center gap-6 mt-4">
                        <a
                            href="mailto:info@martinamuth.de"
                            className="text-primary hover:text-white transition-colors text-2xl md:text-3xl font-serif italic flex items-center gap-2"
                        >
                            info@martinamuth.de
                            <ArrowUpRight className="w-6 h-6" />
                        </a>
                        <a
                            href="https://de.linkedin.com/in/martina-muth-b83960239"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-white transition-colors flex items-center gap-2"
                        >
                            <Linkedin className="w-8 h-8" />
                        </a>
                    </div>
                </div>

                {/* Right Side Links */}
                <div className="flex gap-16 md:gap-24">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-mono text-xs text-white/40 tracking-widest uppercase mb-2">Navigation</h4>
                        {["Expertise", "Prozess", "Philosophie", "Leistungen"].map((link) => (
                            <a key={link} href={`#${link.toLowerCase()}`} className="font-sans text-sm text-white/70 hover:text-primary transition-colors">
                                {link}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-mono text-xs text-white/40 tracking-widest uppercase mb-2">Legal</h4>
                        <button onClick={() => useContactStore.getState().openLegalModal('impressum')} className="text-left font-sans text-sm text-white/70 hover:text-primary transition-colors">
                            Impressum
                        </button>
                        <button onClick={() => useContactStore.getState().openLegalModal('datenschutz')} className="text-left font-sans text-sm text-white/70 hover:text-primary transition-colors">
                            Datenschutz
                        </button>
                        <button onClick={() => useContactStore.getState().openLegalModal('agb')} className="text-left font-sans text-sm text-white/70 hover:text-primary transition-colors">
                            AGB
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <img
                    src="/images/Bildmarke.png"
                    alt="Martina Muth Logo"
                    className="h-10 object-contain"
                />
                <div className="font-mono text-xs text-white/40 text-center">
                    © {new Date().getFullYear()} MARTINA MUTH CORPORATE BRAND CONCEPTS. ALLE RECHTE VORBEHALTEN.
                </div>
            </div>
        </footer>
    );
}
