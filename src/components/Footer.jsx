import React from 'react';
import { heroData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-3.5 bg-[--bg-primary]/60 border-t border-white/[0.04]">
            {/* Subtle top glow line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-[--accent]/20 to-transparent" />

            <div className="section-container">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                    {/* Brand & Copyright */}
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[--accent] to-[--accent-secondary] flex items-center justify-center text-white font-bold text-[0.65rem]">
                            K
                        </div>
                        <span className="text-xs text-[--text-muted]">
                            © {currentYear} {heroData.name}. All rights reserved.
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Social Links */}
                        <div className="flex gap-2">
                            {heroData.socials.map((social, idx) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                        rel="noopener noreferrer"
                                        className="p-1.5 rounded-lg text-[--text-muted] hover:text-[--accent] hover:bg-[--accent]/[0.06] transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <Icon size={14} />
                                    </a>
                                );
                            })}
                        </div>

                        {/* Back to top */}
                        <button
                            onClick={() => scrollToSection('hero')}
                            className="p-1.5 rounded-lg border border-white/[0.06] text-[--text-muted] hover:text-[--accent] hover:border-[--accent]/30 hover:bg-[--accent]/[0.04] transition-all duration-300"
                            aria-label="Back to top"
                        >
                            <ArrowUp size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
