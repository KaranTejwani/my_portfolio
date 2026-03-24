import React, { useState, useRef } from 'react';
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
  const scrollRef = useRef(null);

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
    // Reset scroll to top when switching sections
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
    <div className="fixed inset-0 bg-[#070809] flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="fixed -bottom-1/3 -left-1/4 w-[50vw] h-[50vw] bg-[#00D2D3] rounded-full blur-[180px] opacity-[0.07] pointer-events-none" />
      <div className="fixed -top-1/3 -right-1/4 w-[45vw] h-[45vw] bg-[#00D2D3] rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-[#00A8A8] rounded-full blur-[250px] opacity-[0.03] pointer-events-none" />

      {/* Subtle noise overlay */}
      <div className="fixed inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.5\'/%3E%3C/svg%3E")' }} />

      {/* Main Elevated Card — fills viewport with padding */}
      <div className="card-container relative w-full h-full max-w-[1440px] bg-[#12141a] rounded-2xl sm:rounded-3xl border border-white/[0.06] z-10 flex flex-col overflow-hidden">
        
        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none border-glow" />

        {/* Navbar — pinned top */}
        <Navbar activeSection={activeSection} setActiveSection={handleSetActiveSection} />
        
        {/* Scrollable Content Area */}
        <main ref={scrollRef} className="flex-1 overflow-y-auto overflow-x-hidden content-scrollbar relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
              className="w-full"
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </main>
        
        {/* Footer — pinned bottom */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
