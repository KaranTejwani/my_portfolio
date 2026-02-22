import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: 'https://github.com/KaranTejwani', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com/in/karantejwani/', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:karantejwani48@gmail.com', label: 'Email' },
    ];

    return (
        <footer className="relative py-8">
            {/* Gold separator */}
            <div className="glow-line w-full mb-8" />

            <div className="section-container">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-display font-semibold text-text-primary">Karan Kumar</span>
                        <span className="text-xs text-text-muted">© {currentYear}</span>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-2">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="p-2 rounded-lg border border-border text-text-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
                            >
                                <social.icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
