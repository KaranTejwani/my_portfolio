import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/portfolioData';

const Navbar = ({ activeSection, setActiveSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Track scroll for navbar background
    useEffect(() => {
        const handleScroll = () => { setIsScrolled(window.scrollY > 50); };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = useCallback((href) => {
        const id = href.substring(1);
        setActiveSection(id);
        setIsMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Start section at top
    }, [setActiveSection]);

    return (
        <header className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-[#161820]/95 backdrop-blur-md shadow-lg py-4 border-border' : 'bg-transparent py-6 border-transparent'}`}>
            <div className="section-container flex items-center justify-between">
                
                {/* Logo */}
                <div className="text-2xl font-bold font-display text-text-primary tracking-wide cursor-pointer" onClick={() => handleNavClick('#hero')}>
                    Portfolio<span className="text-accent">.</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navLinks.map((item) => (
                        <button
                            key={item.href}
                            onClick={() => handleNavClick(item.href)}
                            className={`text-sm font-medium transition-colors duration-300 ${activeSection === item.href.substring(1) ? 'text-accent' : 'text-text-secondary hover:text-accent'}`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden text-text-primary hover:text-accent transition-colors"
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[#161820] border-b border-border absolute top-full left-0 w-full overflow-hidden"
                    >
                        <nav className="flex flex-col items-center py-6 gap-6">
                            {navLinks.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={() => handleNavClick(item.href)}
                                    className={`text-lg font-medium ${activeSection === item.href.substring(1) ? 'text-accent border-b border-accent pb-1' : 'text-text-secondary hover:text-accent'}`}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
