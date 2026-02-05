import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Menu, ArrowUp } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import SkillsPage from './pages/SkillsPage';
import ResearchPage from './pages/ResearchPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Scroll to Top logic
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-primary font-sans selection:bg-accent-start selection:text-white">
      {/* Mobile Menu Toggle */}
      <button
        className="fixed top-3 right-3 z-50 p-2.5 bg-panel/80 backdrop-blur-lg border border-border rounded-lg text-secondary hover:text-white lg:hidden transition-all duration-150"
        onClick={toggleSidebar}
        aria-label="Toggle Menu"
      >
        <Menu size={18} />
      </button>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <main className="lg:ml-[260px] min-h-screen flex flex-col">
        <div className="flex-1 w-full max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 py-6">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>

          <Footer />
        </div>
      </main>

      {/* Scroll to Top */}
      <button
        className={`fixed bottom-6 right-6 p-2.5 bg-panel/80 backdrop-blur-lg border border-border rounded-lg text-secondary hover:text-accent-start hover:border-accent-start/40 transition-all duration-150 z-40 ${showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} />
      </button>
    </div>
  );
}

export default App;
