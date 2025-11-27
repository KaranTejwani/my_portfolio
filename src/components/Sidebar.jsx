import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import karanImg from '../assets/Karan.jpg';

const Sidebar = ({ isOpen }) => {
    return (
        <aside className={`sidebar ${isOpen ? 'active' : ''}`}>
            <div className="profile-section">
                <img src={karanImg} alt="Karan Kumar" className="profile-img" />
                <h1>Karan Kumar</h1>
                <div className="badge">
                    CS Student @ Sukkur IBA<br />
                    AI Researcher
                </div>
            </div>

            <div className="stats-grid">
                <div className="stat-box">
                    <span className="stat-number">3.70</span>
                    <span className="stat-label">CGPA</span>
                </div>
                <div className="stat-box">
                    <span className="stat-number">1</span>
                    <span className="stat-label">Papers</span>
                </div>
                <div className="stat-box">
                    <span className="stat-number">8+</span>
                    <span className="stat-label">Projects</span>
                </div>
                <div className="stat-box">
                    <span className="stat-number">2026</span>
                    <span className="stat-label">Graduate</span>
                </div>
            </div>

            <div className="contact-info">
                <a href="mailto:karantejwani48@gmail.com" className="contact-item">
                    <Mail size={16} /> karantejwani48@gmail.com
                </a>
                <a href="tel:+923123269988" className="contact-item">
                    <Phone size={16} /> +92 312 3269988
                </a>
                <a href="https://linkedin.com/in/karantejwani/" className="contact-item" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={16} /> linkedin.com/in/karantejwani/
                </a>
                <a href="https://github.com/KaranTejwani" className="contact-item" target="_blank" rel="noopener noreferrer">
                    <Github size={16} /> github.com/KaranTejwani
                </a>
                <a href="#" className="contact-item">
                    <MapPin size={16} /> Sukkur, Pakistan
                </a>
            </div>
        </aside>
    );
};

export default Sidebar;
