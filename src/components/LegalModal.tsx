import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useContactStore } from "../lib/store";
import { legalContentMap } from "../data/legalContent";

export function LegalModal() {
    const { isLegalModalOpen, closeLegalModal, legalModalType } = useContactStore();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    // Scroll to top when tab switches
    useEffect(() => {
        if (isLegalModalOpen) {
            const container = document.getElementById('legal-scroll-container');
            if (container) {
                container.scrollTop = 0;
            }
        }
    }, [isLegalModalOpen, legalModalType]);

    if (!mounted) return null;

    const currentLegalContent = legalModalType ? legalContentMap[legalModalType] : null;
    const title = currentLegalContent?.title || "";
    const content = currentLegalContent?.content || null;

    return (
        <div
            className={`fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-8 transition-all duration-500 ${isLegalModalOpen ? 'opacity-100 pointer-events-auto backdrop-blur-md bg-charcoal/80' : 'opacity-0 pointer-events-none'}`}
            onClick={closeLegalModal}
        >
            <div
                className={`bg-white rounded-3xl w-full max-w-4xl h-[90vh] md:h-[80vh] flex flex-col shadow-2xl transition-transform duration-500 relative overflow-hidden ${isLegalModalOpen ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="bg-charcoal text-white p-6 md:p-10 shrink-0 relative flex justify-between items-center z-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <h3 className="text-3xl font-heading font-bold tracking-tight relative z-10">{title}</h3>
                    <button
                        onClick={closeLegalModal}
                        className="p-2 text-white/60 hover:text-white transition-colors rounded-full hover:bg-white/10 relative z-10"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content Area */}
                <div id="legal-scroll-container" className="p-6 md:p-12 overflow-y-auto w-full h-full relative">
                    <div className="max-w-3xl mx-auto pb-12">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    );
}
