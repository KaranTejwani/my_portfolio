import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Mail, Linkedin, Github, MapPin, X, Home, User, Briefcase, Code, Cpu, BookOpen, MessageSquare } from 'lucide-react';
import karanImg from '../assets/Karan.jpg';

const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: User },
    { path: '/projects', label: 'Projects', icon: Code },
    { path: '/experience', label: 'Experience', icon: Briefcase },
    { path: '/skills', label: 'Skills', icon: Cpu },
    { path: '/research', label: 'Research', icon: BookOpen },
    { path: '/contact', label: 'Contact', icon: MessageSquare },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const location = useLocation();

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={toggleSidebar}
                />
            )}

            <aside className={`fixed top-0 left-0 h-screen w-[260px] flex flex-col p-3 bg-background lg:bg-transparent z-50 transition-transform duration-200 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>

                {/* Mobile Close Button */}
                <button
                    onClick={toggleSidebar}
                    className="absolute top-4 right-4 p-2 text-secondary hover:text-white lg:hidden"
                >
                    <X size={20} />
                </button>

                <div className="h-full w-full lg:glass-panel rounded-2xl p-5 flex flex-col relative overflow-y-auto">
                    {/* Glow Effect (Desktop Only) */}
                    <div className="hidden lg:block absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-start to-accent-end opacity-50" />

                    {/* Profile Section */}
                    <div className="flex flex-col items-center mb-6 mt-2">
                        <div className="relative mb-3">
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent-start to-accent-end rounded-2xl blur opacity-25" />
                            <img
                                src={karanImg}
                                alt="Karan Kumar"
                                className="relative w-18 h-18 rounded-xl object-cover border-2 border-white/10"
                                style={{ width: '72px', height: '72px' }}
                            />
                        </div>

                        <h1 className="text-base font-bold text-primary text-center">Karan Kumar</h1>
                        <p className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-accent-start to-accent-end">
                            CS Student @ Sukkur IBA
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-2 mb-6">
                        <SocialIcon href="https://github.com/KaranTejwani" icon={<Github size={16} />} />
                        <SocialIcon href="https://linkedin.com/in/karantejwani/" icon={<Linkedin size={16} />} />
                        <SocialIcon href="mailto:karantejwani48@gmail.com" icon={<Mail size={16} />} />
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 space-y-1.5">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => toggleSidebar?.()}
                                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${isActive
                                            ? 'bg-gradient-to-r from-accent-start/20 to-accent-end/10 text-white border border-accent-start/30'
                                            : 'text-secondary hover:text-white hover:bg-white/5 border border-transparent'
                                        }`}
                                >
                                    <item.icon size={18} className={isActive ? 'text-accent-start' : ''} />
                                    {item.label}
                                </NavLink>
                            );
                        })}
                    </nav>

                    {/* Footer */}
                    <div className="mt-auto pt-4 border-t border-white/5 space-y-2">
                        <a href="mailto:karantejwani48@gmail.com" className="flex items-center gap-2 text-xs text-secondary hover:text-accent-start transition-colors duration-150">
                            <Mail size={14} />
                            <span className="truncate">karantejwani48@gmail.com</span>
                        </a>
                        <div className="flex items-center gap-2 text-xs text-secondary">
                            <MapPin size={14} />
                            <span>Sukkur, Pakistan</span>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

const SocialIcon = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-secondary hover:text-white hover:border-accent-start/40 transition-all duration-150"
    >
        {icon}
    </a>
);

export default Sidebar;
