import React, { useState, useRef, useEffect, useCallback } from 'react';
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
  const sectionIds = ['hero', 'about', 'experience', 'projects', 'research', 'contact'];

  // Scroll-spy: detect which section is in view
  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollTop = container.scrollTop;
    const offset = 200; // trigger offset from top

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i]);
      if (el) {
        const top = el.offsetTop - offset;
        if (scrollTop >= top) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    }
  }, [sectionIds]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId) => {
    const el = document.getElementById(sectionId);
    if (el && scrollRef.current) {
      const containerTop = scrollRef.current.getBoundingClientRect().top;
      const elTop = el.getBoundingClientRect().top;
      const offset = elTop - containerTop + scrollRef.current.scrollTop;
      scrollRef.current.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="fixed inset-0 bg-[--bg-primary] flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">

      {/* Main Container */}
      <div className="card-container relative w-full h-full max-w-[1500px] bg-[--bg-elevated] rounded-2xl sm:rounded-3xl border border-white/[0.05] z-10 flex flex-col overflow-hidden">

        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none border-glow" />

        {/* Navbar — pinned top */}
        <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

        {/* Scrollable Content Area — ALL sections rendered */}
        <main ref={scrollRef} className="flex-1 overflow-y-auto overflow-x-hidden content-scrollbar relative">
          <HeroSection scrollToSection={scrollToSection} />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <ResearchSection />
          <ContactSection />
        </main>

        {/* Footer — pinned bottom */}
        <Footer scrollToSection={scrollToSection} />
      </div>
    </div>
  );
}

export default App;
