import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';
import { experiences } from '../data/portfolioData';

const ExperienceSection = () => {
    return (
        <section id="experience" className="relative py-16 md:py-20">
            <div className="section-container">
                {/* Header */}
                <SectionReveal className="mb-10 text-center">
                    <span className="section-badge mb-3 inline-flex">Career</span>
                    <h2 className="text-text-primary">
                        My <span className="text-gradient-gold">Experience</span>
                    </h2>
                </SectionReveal>

                {/* Timeline */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/15 to-transparent" />

                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <SectionReveal key={exp.id} delay={index * 0.08}>
                                <div className="relative pl-12 md:pl-16">
                                    {/* Timeline Dot */}
                                    <div className="absolute left-2.5 md:left-3.5 top-5 w-3 h-3 rounded-full border-2 border-accent bg-[#12141a] z-10">
                                        {exp.current && (
                                            <motion.span
                                                animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                                className="absolute inset-0 rounded-full bg-accent"
                                            />
                                        )}
                                    </div>

                                    <div className="obsidian-card p-5 hover:border-accent/30 transition-colors">
                                        <div className="flex flex-wrap items-center gap-2.5 mb-2">
                                            <h3 className="text-base font-bold text-text-primary font-display">{exp.title}</h3>
                                            {exp.current && (
                                                <span className="px-2 py-0.5 rounded-full bg-accent/[0.08] border border-accent/20 text-accent text-[0.65rem] font-semibold uppercase tracking-wider">
                                                    Current
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap gap-3 mb-2.5 text-xs">
                                            <span className="text-accent font-medium">{exp.role}</span>
                                            <span className="flex items-center gap-1 text-text-muted">
                                                <Calendar size={11} />
                                                {exp.duration}
                                            </span>
                                            <span className="flex items-center gap-1 text-text-muted">
                                                <MapPin size={11} />
                                                {exp.location}
                                            </span>
                                        </div>

                                        <p className="text-text-secondary text-xs leading-relaxed mb-3">{exp.description}</p>

                                        <div className="flex flex-wrap gap-1.5">
                                            {exp.highlights.map((highlight, i) => (
                                                <span key={i} className="tag">
                                                    <ChevronRight size={9} className="text-accent/60" />
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
