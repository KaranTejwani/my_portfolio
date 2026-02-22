import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'research', label: 'Research' },
    { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Track active section using IntersectionObserver
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        navItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    // Track scroll for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = useCallback((id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const top = element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    }, []);

    return (
        <>
            {/* Desktop Navbar */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden lg:flex items-center gap-1 px-2 py-2 rounded-2xl transition-all duration-500 ${isScrolled
                        ? 'bg-bg-primary/80 backdrop-blur-xl border border-border shadow-lg'
                        : 'bg-transparent'
                    }`}
            >
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${activeSection === item.id
                                ? 'text-accent'
                                : 'text-text-secondary hover:text-text-primary'
                            }`}
                    >
                        {item.label}
                        {activeSection === item.id && (
                            <motion.div
                                layoutId="activeIndicator"
                                className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </motion.nav>

            {/* Mobile Menu Toggle */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`fixed top-4 right-4 z-50 p-3 rounded-xl lg:hidden transition-all duration-300 ${isScrolled || isMobileMenuOpen
                        ? 'bg-bg-primary/80 backdrop-blur-xl border border-border'
                        : 'bg-transparent'
                    }`}
                aria-label="Toggle Menu"
            >
                {isMobileMenuOpen ? (
                    <X size={20} className="text-accent" />
                ) : (
                    <Menu size={20} className="text-text-primary" />
                )}
            </button>

            {/* Mobile Full-Screen Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 lg:hidden bg-bg-primary/95 backdrop-blur-2xl flex items-center justify-center"
                    >
                        <nav className="flex flex-col items-center gap-2">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ delay: index * 0.06 }}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-2xl font-display font-semibold py-3 px-8 rounded-xl transition-colors duration-200 ${activeSection === item.id
                                            ? 'text-accent'
                                            : 'text-text-secondary hover:text-text-primary'
                                        }`}
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
