import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Scroll to top logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Active section logic (simple version)
      const sections = ['about', 'skills', 'research', 'projects', 'certifications', 'experience'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < 300) {
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

  // Close sidebar when clicking outside on mobile
  const handleMainClick = () => {
    if (window.innerWidth <= 900 && isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button
        className="mobile-menu-btn"
        aria-label="Toggle Menu"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="main-content" onClick={handleMainClick}>
        <Navbar activeSection={activeSection} />

        <About />
        <Skills />
        <Research />
        <Projects />
        <Certifications />
        <Experience />
        <Footer />
      </main>

      <button
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`}
        id="scrollTop"
        onClick={scrollToTop}
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}

export default App;
