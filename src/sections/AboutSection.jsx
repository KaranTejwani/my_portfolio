import React from 'react';
import { motion } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';
import { aboutData } from '../data/portfolioData';

const AboutSection = () => {
    return (
        <section id="about" className="relative py-16 md:py-20">
            <div className="section-container">
                {/* Section Header */}
                <SectionReveal className="mb-10 text-center">
                    <span className="section-badge mb-3 inline-flex">About Me</span>
                    <h2 className="text-text-primary">
                        Get to know the person <span className="text-gradient-gold">behind the code</span>
                    </h2>
                </SectionReveal>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                    {/* Bio */}
                    <SectionReveal delay={0.1}>
                        <div className="obsidian-card p-7 h-full flex flex-col justify-center">
                            <h3 className="text-lg font-bold text-text-primary font-display mb-3">Who I Am</h3>
                            <p className="text-text-secondary text-sm leading-relaxed mb-5">
                                {aboutData.bio}
                            </p>
                            <div className="glow-line w-full mb-5" />
                            <h4 className="text-base font-semibold text-text-primary mb-2">
                                Developer Identity
                            </h4>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                {aboutData.identity}
                            </p>
                        </div>
                    </SectionReveal>
                    
                    {/* Interests */}
                    <SectionReveal delay={0.2}>
                        <div className="obsidian-card p-7 h-full">
                            <h3 className="text-lg font-bold text-text-primary font-display mb-5">Research Interests</h3>
                            <div className="flex flex-wrap gap-3">
                                {aboutData.interests.map((interest, index) => {
                                    const Icon = interest.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            whileHover={{ scale: 1.03, y: -1 }}
                                            className="flex items-center gap-2 p-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-accent/30 hover:bg-accent/[0.04] transition-all duration-300 cursor-default"
                                        >
                                            <Icon size={16} className="text-accent" />
                                            <span className="text-xs font-medium text-text-primary">{interest.label}</span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                            
                            <div className="glow-line w-full my-6" />
                            
                            <h3 className="text-lg font-bold text-text-primary font-display mb-4">Community</h3>
                            <ul className="space-y-3">
                                {aboutData.communityWork.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0 shadow-glow" />
                                        <span className="text-text-secondary text-sm">
                                            <strong className="text-text-primary font-semibold">{item.role}</strong> at {item.org}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </SectionReveal>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
