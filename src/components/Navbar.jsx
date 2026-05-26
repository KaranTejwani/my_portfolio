import React, { useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/portfolioData';

const Navbar = ({ activeSection, scrollToSection }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = useCallback((href) => {
        const id = href.substring(1);
        scrollToSection(id);
        setIsMobileMenuOpen(false);
    }, [scrollToSection]);

    return (
        <header className="relative w-full z-50 bg-[--bg-elevated]/80 backdrop-blur-2xl border-b border-white/[0.04]">
            <div className="section-container flex items-center justify-between py-3.5">

                {/* Logo */}
                <div
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={() => handleNavClick('#hero')}
                >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[--accent] to-[--accent-secondary] flex items-center justify-center text-white font-bold text-sm font-display">
                        K
                    </div>
                    <span className="text-lg font-bold font-display text-[--text-primary] tracking-wide group-hover:text-[--accent] transition-colors duration-300">
                        Karan<span className="text-[--accent]">.</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-0.5">
                    {navLinks.map((item) => {
                        const isActive = activeSection === item.href.substring(1);
                        return (
                            <button
                                key={item.href}
                                onClick={() => handleNavClick(item.href)}
                                className={`nav-item px-4 py-2 rounded-lg text-[0.8rem] font-medium transition-all duration-300 ${
                                    isActive
                                        ? 'active text-[--accent] bg-[--accent]/[0.06]'
                                        : 'text-[--text-secondary] hover:text-[--text-primary] hover:bg-white/[0.03]'
                                }`}
                            >
                                {item.label}
                            </button>
                        );
                    })}
                </nav>

                {/* CTA Button - Desktop */}
                <a
                    href="mailto:karantejwani48@gmail.com"
                    className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[--accent]/10 border border-[--accent]/20 text-[--accent] text-xs font-semibold hover:bg-[--accent]/20 hover:border-[--accent]/40 transition-all duration-300"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Let's Talk
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden p-2 rounded-lg text-[--text-primary] hover:text-[--accent] hover:bg-white/[0.04] transition-all"
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
                        className="lg:hidden bg-[--bg-elevated]/95 backdrop-blur-2xl border-b border-white/[0.04] absolute top-full left-0 w-full overflow-hidden z-50"
                    >
                        <nav className="flex flex-col items-center py-4 gap-1 px-4">
                            {navLinks.map((item) => {
                                const isActive = activeSection === item.href.substring(1);
                                return (
                                    <button
                                        key={item.href}
                                        onClick={() => handleNavClick(item.href)}
                                        className={`w-full text-center py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                                            isActive
                                                ? 'text-[--accent] bg-[--accent]/[0.08] border border-[--accent]/20'
                                                : 'text-[--text-secondary] hover:text-[--accent] hover:bg-white/[0.03]'
                                        }`}
                                    >
                                        {item.label}
                                    </button>
                                );
                            })}
                            <a
                                href="mailto:karantejwani48@gmail.com"
                                className="w-full text-center mt-2 py-3 rounded-xl text-sm font-semibold bg-[--accent]/10 border border-[--accent]/20 text-[--accent] hover:bg-[--accent]/20 transition-all duration-300"
                            >
                                Let's Talk
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
