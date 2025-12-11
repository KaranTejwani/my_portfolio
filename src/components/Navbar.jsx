import React from 'react';
import { Download } from 'lucide-react';

const Navbar = ({ activeSection }) => {
    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'research', label: 'Research' },
        { id: 'certifications', label: 'Certifications' },
    ];

    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80; // Offset for sticky header
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <nav className="sticky top-0 z-50 w-full mb-12">
            <div className="glass-panel mx-auto px-8 py-4 rounded-2xl flex items-center justify-between">
                {/* Logo / Name */}
                <div className="text-lg font-bold text-primary tracking-tight">
                    Karan Kumar
                </div>

                {/* Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => handleScroll(e, item.id)}
                            className="relative text-sm font-medium text-secondary hover:text-white transition-colors py-1 group"
                        >
                            {item.label}
                            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-start to-accent-end transform origin-left transition-transform duration-300 ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                        </a>
                    ))}
                </div>

                {/* CTA & Actions */}
                <div className="flex items-center gap-4">
                    <button
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black hover:bg-gray-100 transition-colors text-sm font-semibold"
                        onClick={() => window.open('/resume.pdf', '_blank')}
                    >
                        <span>Download CV</span>
                        <Download size={16} />
                    </button>
                    {/* Theme Toggle Button could go here if separate from Mobile */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
