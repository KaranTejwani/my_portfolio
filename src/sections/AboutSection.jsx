import React from 'react';
import SectionReveal from '../components/SectionReveal';
import { aboutData } from '../data/portfolioData';

const AboutSection = () => {
    return (
        <section id="about" className="relative py-28 md:py-36">
            <div className="section-container">
                {/* Section Header */}
                <SectionReveal className="mb-14 text-center">
                    <span className="section-badge mb-4 inline-flex">About Me</span>
                    <h2 className="text-text-primary">
                        Get to know the person <span className="text-gradient-gold">behind the code</span>
                    </h2>
                </SectionReveal>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Bio */}
                    <SectionReveal delay={0.1}>
                        <div className="obsidian-card p-8 h-full flex flex-col justify-center">
                            <h3 className="text-xl font-bold text-text-primary font-display mb-4">Who I Am</h3>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                {aboutData.bio}
                            </p>
                            <div className="glow-line w-full mb-6" />
                            <h4 className="text-lg font-semibold text-text-primary mb-3">
                                Developer Identity
                            </h4>
                            <p className="text-text-secondary leading-relaxed">
                                {aboutData.identity}
                            </p>
                        </div>
                    </SectionReveal>
                    
                    {/* Interests */}
                    <SectionReveal delay={0.2}>
                        <div className="obsidian-card p-8 h-full">
                            <h3 className="text-xl font-bold text-text-primary font-display mb-6">Research Interests</h3>
                            <div className="flex flex-wrap gap-4">
                                {aboutData.interests.map((interest, index) => {
                                    const Icon = interest.icon;
                                    return (
                                        <div key={index} className="flex items-center gap-2 p-3 rounded-xl border border-border bg-bg-surface hover:border-accent hover:text-accent transition-all duration-300">
                                            <Icon size={18} className="text-accent" />
                                            <span className="text-sm font-medium text-text-primary">{interest.label}</span>
                                        </div>
                                    );
                                })}
                            </div>
                            
                            <div className="glow-line w-full my-8" />
                            
                            <h3 className="text-xl font-bold text-text-primary font-display mb-6">Community</h3>
                            <ul className="space-y-4">
                                {aboutData.communityWork.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0 shadow-glow" />
                                        <span className="text-text-secondary">
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
