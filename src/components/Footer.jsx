import React from 'react';
import { heroData } from '../data/portfolioData';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-4 bg-[#0f1117] border-t border-white/[0.05]">
            {/* Subtle top glow line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            
            <div className="section-container">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-display font-bold text-text-primary">
                            Portfolio<span className="text-accent">.</span>
                        </span>
                        <span className="text-text-muted text-xs">|</span>
                        <span className="text-xs text-text-muted">{heroData.name} © {currentYear}</span>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-2.5">
                        {heroData.socials.map((social, idx) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05] text-text-muted hover:text-accent hover:border-accent/30 hover:bg-accent/[0.06] transition-all duration-300"
                                >
                                    <Icon size={14} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
