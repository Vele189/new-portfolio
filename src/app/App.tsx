import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ContactCTA } from "./components/ContactCTA";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";
import { NavDock } from "./components/NavDock";

export default function App() {
  return (
    <div id="top" className="bg-white w-full min-h-screen">
      <HeroSection />
      <AboutSection />
      <ContactCTA variant="light" />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
      <NavDock />
    </div>
  );
}
