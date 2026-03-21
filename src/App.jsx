import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
  const [activeSection, setActiveSection] = useState('hero');

  const renderSection = () => {
    switch (activeSection) {
      case 'hero': return <HeroSection />;
      case 'about': return <AboutSection />;
      case 'projects': return <ProjectsSection />;
      case 'experience': return <ExperienceSection />;
      case 'skills': return <SkillsSection />;
      case 'research': return <ResearchSection />;
      case 'contact': return <ContactSection />;
      default: return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-[#090b0e] relative py-6 px-4 sm:px-6 md:py-10 md:px-10 flex flex-col items-center">
      
      {/* Background Glows (Outside the card) */}
      <div className="fixed -bottom-1/4 -left-1/4 w-[60vh] h-[60vh] bg-[#00D2D3] rounded-[100%] blur-[150px] opacity-15 pointer-events-none" />
      <div className="fixed -bottom-1/4 -right-1/4 w-[60vh] h-[60vh] bg-[#00D2D3] rounded-[100%] blur-[150px] opacity-15 pointer-events-none" />

      {/* Main Upward Screen Container */}
      <div className="relative w-full max-w-[1400px] mx-auto bg-[#161820] rounded-[2rem] border border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.6)] z-10 flex flex-col mb-10 md:mb-0 min-h-[85vh] overflow-hidden">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main className="flex-1 relative pb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full h-full"
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </main>
        
        <Footer />
      </div>

    </div>
  );
}

export default App;
