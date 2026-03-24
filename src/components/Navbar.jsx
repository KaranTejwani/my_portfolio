import React, { useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/portfolioData';

const Navbar = ({ activeSection, setActiveSection }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = useCallback((href) => {
        const id = href.substring(1);
        setActiveSection(id);
        setIsMobileMenuOpen(false);
    }, [setActiveSection]);

    return (
        <header className="relative w-full z-50 bg-[#12141a]/80 backdrop-blur-xl border-b border-white/[0.05]">
            <div className="section-container flex items-center justify-between py-4">
                
                {/* Logo */}
                <div
                    className="text-xl font-bold font-display text-text-primary tracking-wide cursor-pointer hover:text-accent transition-colors duration-300"
                    onClick={() => handleNavClick('#hero')}
                >
                    Portfolio<span className="text-accent">.</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((item) => {
                        const isActive = activeSection === item.href.substring(1);
                        return (
                            <button
                                key={item.href}
                                onClick={() => handleNavClick(item.href)}
                                className={`nav-item px-3.5 py-2 rounded-lg text-[0.8rem] font-medium transition-all duration-300 ${
                                    isActive
                                        ? 'active text-accent bg-accent/[0.06]'
                                        : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.03]'
                                }`}
                            >
                                {item.label}
                            </button>
                        );
                    })}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden p-2 rounded-lg text-text-primary hover:text-accent hover:bg-white/[0.04] transition-all"
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[#12141a]/95 backdrop-blur-xl border-b border-white/[0.05] absolute top-full left-0 w-full overflow-hidden z-50"
                    >
                        <nav className="flex flex-col items-center py-4 gap-1">
                            {navLinks.map((item) => {
                                const isActive = activeSection === item.href.substring(1);
                                return (
                                    <button
                                        key={item.href}
                                        onClick={() => handleNavClick(item.href)}
                                        className={`w-[90%] text-center py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                                            isActive
                                                ? 'text-accent bg-accent/[0.08] border border-accent/20'
                                                : 'text-text-secondary hover:text-accent hover:bg-white/[0.03]'
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                );
                            })}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
