
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Services } from "./components/Services";
import { Philosophy } from "./components/Philosophy";
import { Methodology } from "./components/Methodology";
import { Offerings } from "./components/Offerings";
import { Footer } from "./components/Footer";
import { ClientMarquee } from "./components/ClientMarquee";
import { TeamSection } from "./components/TeamSection";
import { ContactModal } from "./components/ContactModal";
import { LegalModal } from "./components/LegalModal";

function App() {
  return (
    <div className="w-full relative bg-background min-h-screen font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <ClientMarquee />
        <Services />
        <Philosophy />
        <Methodology />
        <Offerings />
      </main>
      <TeamSection />
      <Footer />
      <ContactModal />
      <LegalModal />
    </div>
  );
}

export default App;
