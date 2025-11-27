import React from 'react';

const Navbar = ({ activeSection }) => {
    const navItems = [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'research', label: 'Research' },
        { id: 'projects', label: 'Projects' },
        { id: 'certifications', label: 'Certifications' },
        { id: 'experience', label: 'Experience' },
    ];

    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            {navItems.map((item) => (
                <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => handleScroll(e, item.id)}
                >
                    {item.label}
                </a>
            ))}
        </nav>
    );
};

export default Navbar;
