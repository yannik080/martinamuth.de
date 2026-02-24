import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PenTool, Scissors, Shirt, Package, CheckCircle2, Truck, Globe2, Leaf } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Animation 1: Process Flow (Replacing MaterialLayers)
function ProcessFlow() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.from(".process-icon", {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            stagger: 0.8,
            ease: "back.out(1.7)"
        })
            .to(".process-line", {
                width: "100%",
                duration: 0.8,
                stagger: 0.8,
                ease: "power2.inOut"
            }, "-=2.4")
            .to({}, { duration: 2 }); // hold
    }, { scope: container });

    const steps = [
        { icon: PenTool, label: "Design" },
        { icon: Scissors, label: "Schnitt" },
        { icon: Shirt, label: "Sample" },
        { icon: Package, label: "Batch" }
    ];

    return (
        <div ref={container} className="bg-white p-6 rounded-2xl shadow-sm border border-charcoal/5 h-64 relative flex flex-col justify-center overflow-hidden">
            <h4 className="absolute top-6 left-6 font-mono text-xs font-bold tracking-widest text-primary uppercase">Creation Flow</h4>
            <div className="flex justify-between items-center relative z-10 px-2 mt-8">
                {steps.map((step, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 relative bg-white z-20">
                        <div className="process-icon w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                            <step.icon className="w-5 h-5" />
                        </div>
                        <span className="process-icon text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal">{step.label}</span>
                    </div>
                ))}
            </div>

            <div className="absolute top-[60%] left-10 right-10 flex justify-between z-0">
                {[0, 1, 2].map((i) => (
                    <div key={i} className="w-[30%] h-[2px] bg-charcoal/5 relative">
                        <div className="process-line absolute top-0 left-0 h-full bg-primary w-0" />
                    </div>
                ))}
            </div>
        </div>
    );
}

// Animation 2: Standards Checklist (Replacing CertificationDashboard)
function StandardsChecklist() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.from(".cert-item", {
            x: -20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.6,
            ease: "power2.out"
        })
            .from(".cert-check", {
                scale: 0,
                opacity: 0,
                duration: 0.3,
                stagger: 0.6,
                ease: "back.out(2)"
            }, "-=1.5")
            .to({}, { duration: 3 }); // hold
    }, { scope: container });

    const certs = [
        { name: "Oeko-Tex Standard 100", icon: Leaf },
        { name: "GOTS Certified Organic", icon: Globe2 },
        { name: "Grüner Knopf", icon: CheckCircle2 }
    ];

    return (
        <div ref={container} className="bg-primary/5 p-6 rounded-2xl border border-primary/20 h-64 flex flex-col justify-center gap-4">
            <h4 className="font-mono text-xs font-bold tracking-widest text-primary uppercase mb-1">Compliance Check</h4>
            {certs.map((cert, idx) => (
                <div key={idx} className="cert-item bg-white p-3 rounded-xl shadow-sm flex items-center gap-4 border border-charcoal/5">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <cert.icon className="w-4 h-4" />
                    </div>
                    <span className="font-sans text-sm font-medium text-charcoal flex-grow">{cert.name}</span>
                    <CheckCircle2 className="cert-check w-5 h-5 text-primary shrink-0" />
                </div>
            ))}
        </div>
    );
}

// Animation 3: Logistics Map (Replacing LogisticsTimeline)
function LogisticsMap() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1 });

        tl.to(".truck-icon", {
            left: "100%", // Move across the container
            duration: 4,
            ease: "power1.inOut"
        })
            .to(".status-ping", {
                scale: 2,
                opacity: 0,
                duration: 0.8,
                stagger: 1.3
            }, "-=4")
            .to(".route-line", {
                width: "100%",
                duration: 4,
                ease: "power1.inOut"
            }, "-=4")
            .to({}, { duration: 1 });
    }, { scope: container });

    return (
        <div ref={container} className="bg-white p-6 rounded-2xl shadow-sm border border-charcoal/5 h-64 relative flex flex-col justify-between overflow-hidden">
            <div className="flex justify-between items-center z-10">
                <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-charcoal/40 uppercase tracking-widest">Origin</span>
                    <span className="font-sans font-bold text-charcoal">Produktion</span>
                </div>
                <div className="flex flex-col text-right">
                    <span className="font-mono text-[10px] text-primary uppercase tracking-widest">Destination</span>
                    <span className="font-sans font-bold text-primary">Ihre Zentrale</span>
                </div>
            </div>

            <div className="relative h-12 flex items-center my-6">
                {/* Background Route */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-0 border-t-2 border-dashed border-charcoal/10" />

                {/* Active Route */}
                <div className="route-line absolute top-1/2 -translate-y-1/2 left-0 w-0 h-[2px] bg-primary" />

                {/* Nodes */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary z-10 flex items-center justify-center">
                    <div className="status-ping absolute w-full h-full rounded-full bg-primary origin-center" />
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-primary z-10 flex items-center justify-center">
                    <div className="status-ping absolute w-full h-full rounded-full bg-primary origin-center" />
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary z-10 flex items-center justify-center">
                    <div className="status-ping absolute w-full h-full rounded-full bg-primary origin-center" />
                </div>

                {/* Truck */}
                <div className="truck-icon absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2 w-8 h-8 bg-white border border-charcoal/10 shadow-md rounded-full flex items-center justify-center z-20 text-charcoal">
                    <Truck className="w-4 h-4" />
                </div>
            </div>

            <div className="bg-charcoal/5 rounded-xl p-3 flex justify-between items-center">
                <div className="flex items-center gap-2 text-xs font-sans text-charcoal/70">
                    <Package className="w-4 h-4 text-charcoal" />
                    <span>Sendungstracking</span>
                </div>
                <span className="font-mono text-[10px] bg-white px-2 py-1 rounded text-primary font-bold shadow-sm">LIVE</span>
            </div>
        </div>
    );
}

export function Services() {
    const container = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".service-card", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 75%",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
        });
    }, { scope: container });

    return (
        <section ref={container} id="prozess" className="py-32 px-6 w-full max-w-7xl mx-auto">
            <div className="mb-20 text-center max-w-3xl mx-auto">
                <h2 className="text-charcoal text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
                    Wir übernehmen die Komplexität.
                </h2>
                <p className="text-charcoal/70 text-lg font-sans font-light leading-relaxed">
                    Von der ersten Skizze bis zur europaweiten Logistik – ein nahtloser Kreislauf für Ihre Corporate Fashion und Merchandise-Linien.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="service-card flex flex-col gap-6">
                    <h3 className="font-heading text-2xl font-bold">Der Aufbau</h3>
                    <ProcessFlow />
                </div>

                <div className="service-card flex flex-col gap-6">
                    <h3 className="font-heading text-2xl font-bold">Die Standards</h3>
                    <StandardsChecklist />
                </div>

                <div className="service-card flex flex-col gap-6">
                    <h3 className="font-heading text-2xl font-bold">Die Ausführung</h3>
                    <LogisticsMap />
                </div>
            </div>
        </section>
    );
}
