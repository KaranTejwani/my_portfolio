import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { heroData } from '../data/portfolioData';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-8 bg-bg-elevated border-t border-border mt-12">
            <div className="section-container">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                    {/* Brand */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                        <span className="text-xl font-display font-bold text-text-primary">
                            Portfolio<span className="text-accent">.</span>
                        </span>
                        <span className="hidden sm:inline text-text-muted">|</span>
                        <span className="text-sm text-text-secondary">{heroData.name} © {currentYear}</span>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        {heroData.socials.map((social, idx) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-full bg-bg-surface border border-border text-text-secondary hover:text-accent hover:border-accent hover:shadow-glow transition-all duration-300"
                                >
                                    <Icon size={18} />
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
