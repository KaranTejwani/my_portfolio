import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';
import ResearchSection from './sections/ResearchSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <div className="noise-overlay">
      <Navbar />
      <main>
        <HeroSection />
        <div className="glow-line" />
        <AboutSection />
        <div className="glow-line" />
        <ProjectsSection />
        <div className="glow-line" />
        <ExperienceSection />
        <div className="glow-line" />
        <SkillsSection />
        <div className="glow-line" />
        <ResearchSection />
        <div className="glow-line" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
