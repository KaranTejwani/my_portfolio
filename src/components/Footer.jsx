import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Projects', path: '/projects' },
        { label: 'Experience', path: '/experience' },
        { label: 'Skills', path: '/skills' },
        { label: 'Research', path: '/research' },
        { label: 'Contact', path: '/contact' },
    ];

    const socialLinks = [
        { icon: Github, href: 'https://github.com/KaranTejwani', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com/in/karantejwani/', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:karantejwani48@gmail.com', label: 'Email' },
    ];

    return (
        <footer className="mt-20 pt-10 border-t border-white/5">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                {/* Brand Section */}
                <div>
                    <h3 className="text-lg font-bold text-white mb-2">Karan Kumar</h3>
                    <p className="text-sm text-secondary leading-relaxed mb-4">
                        AI Researcher & Full-Stack Developer building intelligent systems at the intersection of technology and innovation.
                    </p>
                    {/* Social Links */}
                    <div className="flex gap-2">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="p-2 rounded-lg bg-white/5 border border-white/10 text-secondary hover:text-white hover:border-accent-start/50 hover:bg-accent-start/10 transition-all duration-200"
                            >
                                <social.icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigation</h4>
                    <div className="grid grid-cols-2 gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-sm text-secondary hover:text-white transition-colors duration-150"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Contact CTA */}
                <div>
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Get in Touch</h4>
                    <p className="text-sm text-secondary mb-4">
                        Open for opportunities and collaborations.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-sm text-accent-start hover:text-white transition-colors duration-150 group"
                    >
                        Let's Connect
                        <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                    </Link>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-xs text-secondary">
                    © {currentYear} Karan Kumar. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
