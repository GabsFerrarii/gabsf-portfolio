// Portfolio page
import { LanguageProvider } from "@/contexts/LanguageContext";
import StarBackground from "@/components/StarBackground";
import Header from "@/components/portfolio/Header";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";

import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <StarBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
};

export default Index;
