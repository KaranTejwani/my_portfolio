import React, { useState, useEffect } from 'react';
import { Menu, ArrowUp } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Research from './components/Research';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Scroll Spy & Scroll to Top logic
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      const sections = ['about', 'skills', 'projects', 'experience', 'research', 'certifications'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top < 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-primary font-sans selection:bg-accent-start selection:text-white">
      {/* Mobile Menu Toggle */}
      <button
        className="fixed top-4 right-4 z-50 p-2 bg-panel border border-border rounded-lg text-secondary hover:text-white lg:hidden"
        onClick={toggleSidebar}
        aria-label="Toggle Menu"
      >
        <Menu size={24} />
      </button>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="lg:ml-[280px] min-h-screen flex flex-col">
        <div className="flex-1 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <Navbar activeSection={activeSection} />

          <div className="space-y-20 md:space-y-28 mt-8">
            <section id="about" className="scroll-mt-32">
              <About />
            </section>
            <section id="skills" className="scroll-mt-32">
              <Skills />
            </section>
            <section id="projects" className="scroll-mt-32">
              <Projects />
            </section>
            <section id="experience" className="scroll-mt-32">
              <Experience />
            </section>
            <section id="research" className="scroll-mt-32">
              <Research />
            </section>

            {/* Optional: Add Certifications if needed, or merge into About/Experience */}
            <section id="certifications" className="scroll-mt-32">
              <Certifications />
            </section>
          </div>

          <Footer />
        </div>
      </main>

      {/* Scroll to Top */}
      <button
        className={`fixed bottom-8 right-8 p-3 bg-panel border border-border rounded-xl text-secondary hover:text-accent-start transition-all duration-300 z-40 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        onClick={scrollToTop}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}

export default App;
