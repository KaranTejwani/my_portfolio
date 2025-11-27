import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                <div className="social-links" style={{ marginBottom: '0.5rem' }}>
                    <a href="https://linkedin.com/in/karantejwani/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/KaranTejwani" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="mailto:karantejwani48@gmail.com">
                        <FaEnvelope />
                    </a>
                    <a href="tel:+923123269988">
                        <FaPhone />
                    </a>
                </div>
                <p>&copy; 2024 Karan Kumar. All rights reserved.</p>
                <p className="small" style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>
                    Last updated on : November 28, 2025
                </p>
            </div>
        </footer>
    );
};

export default Footer;
