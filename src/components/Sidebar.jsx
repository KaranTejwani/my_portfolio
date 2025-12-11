import React from 'react';
import { Mail, Linkedin, Github, MapPin, X } from 'lucide-react';
import karanImg from '../assets/Karan.jpg';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            <aside className={`fixed top-0 left-0 h-screen w-[280px] flex flex-col p-4 bg-background lg:bg-transparent z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>

                {/* Mobile Close Button */}
                <button
                    onClick={toggleSidebar}
                    className="absolute top-4 right-4 p-2 text-secondary hover:text-white lg:hidden"
                >
                    <X size={24} />
                </button>

                <div className="h-full w-full lg:glass-panel rounded-2xl p-6 flex flex-col relative overflow-y-auto group">
                    {/* Glow Effect (Desktop Only) */}
                    <div className="hidden lg:block absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-start to-accent-end opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Profile Section */}
                    <div className="flex flex-col items-center mb-6 mt-2">
                        <div className="relative mb-3">
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent-start to-accent-end rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <img
                                src={karanImg}
                                alt="Karan Kumar"
                                className="relative w-20 h-20 rounded-xl object-cover border border-border"
                            />
                        </div>

                        <h1 className="text-xl font-bold text-primary mb-1 text-center">Karan Kumar</h1>
                        <div className="text-center space-y-1">
                            <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-accent-start to-accent-end">
                                CS Student @ Sukkur IBA
                            </p>
                            <p className="text-xs text-secondary">AI Researcher</p>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-3 mb-6">
                        <SocialIcon href="https://github.com/KaranTejwani" icon={<Github size={16} />} />
                        <SocialIcon href="https://linkedin.com/in/karantejwani/" icon={<Linkedin size={16} />} />
                        <SocialIcon href="mailto:karantejwani48@gmail.com" icon={<Mail size={16} />} />
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6 w-full">
                        <StatCard label="CGPA" value="3.70" />
                        <StatCard label="Papers" value="1" />
                        <StatCard label="Projects" value="8+" />
                        <StatCard label="Graduate" value="2026" />
                    </div>

                    {/* Footer / Contact */}
                    <div className="mt-auto pt-6 border-t border-border space-y-3">
                        <a href="mailto:karantejwani48@gmail.com" className="flex items-center gap-3 text-sm text-secondary hover:text-primary transition-colors">
                            <Mail size={14} />
                            <span className="truncate">karantejwani48@gmail.com</span>
                        </a>
                        <div className="flex items-center gap-3 text-sm text-secondary">
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
        className="p-2 rounded-lg bg-panel border border-border text-secondary hover:text-white hover:border-accent-start hover:bg-accent-start/10 transition-all duration-300"
    >
        {icon}
    </a>
);

const StatCard = ({ label, value }) => (
    <div className="p-3 rounded-xl bg-panel border border-border hover:border-accent-start/50 hover:shadow-glow transition-all duration-300">
        <div className="text-lg font-bold text-white">{value}</div>
        <div className="text-[10px] uppercase tracking-wider text-secondary font-medium">{label}</div>
    </div>
);

export default Sidebar;
