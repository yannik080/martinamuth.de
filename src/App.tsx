
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Services } from "./components/Services";
import { Philosophy } from "./components/Philosophy";
import { Methodology } from "./components/Methodology";
import { Offerings } from "./components/Offerings";
import { Footer } from "./components/Footer";
import { ClientMarquee } from "./components/ClientMarquee";
import { BusinessAlltag } from "./components/BusinessAlltag";
import { TeamSection } from "./components/TeamSection";
import { ContactModal } from "./components/ContactModal";
import { LegalModal } from "./components/LegalModal";
import { CookieBanner } from "./components/CookieBanner";
import { Journal } from "./pages/Journal";
import { BlogPost } from "./pages/BlogPost";

function Home() {
  return (
    <main>
      <HeroSection />
      <ClientMarquee />
      <Services />
      <Philosophy />
      <Methodology />
      <Offerings />
      <BusinessAlltag />
      <TeamSection />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="w-full relative bg-background min-h-screen font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
        <ContactModal />
        <LegalModal />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App;
