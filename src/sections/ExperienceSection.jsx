import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';
import { experiences } from '../data/portfolioData';

const ExperienceSection = () => {
    return (
        <section id="experience" className="relative py-28 md:py-36">
            <div className="section-container">
                {/* Header */}
                <SectionReveal className="mb-14 text-center">
                    <span className="section-badge mb-4 inline-flex">Career</span>
                    <h2 className="text-text-primary">
                        My <span className="text-gradient-gold">Experience</span>
                    </h2>
                </SectionReveal>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <SectionReveal key={exp.id} delay={index * 0.1}>
                                <div className="relative pl-14 md:pl-18">
                                    {/* Timeline Dot */}
                                    <div className="absolute left-2.5 md:left-4.5 top-6 w-3 h-3 rounded-full border-2 border-accent bg-bg-primary z-10">
                                        {exp.current && (
                                            <span className="absolute inset-0 rounded-full bg-accent animate-pulse opacity-50" />
                                        )}
                                    </div>

                                    <div className="obsidian-card p-6 border hover:border-accent/50 transition-colors">
                                        <div className="flex flex-wrap items-center gap-3 mb-2">
                                            <h3 className="text-lg font-bold text-text-primary font-display">{exp.title}</h3>
                                            {exp.current && (
                                                <span className="px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider">
                                                    Current
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap gap-4 mb-3 text-sm">
                                            <span className="text-accent font-medium">{exp.role}</span>
                                            <span className="flex items-center gap-1.5 text-text-muted">
                                                <Calendar size={13} />
                                                {exp.duration}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-text-muted">
                                                <MapPin size={13} />
                                                {exp.location}
                                            </span>
                                        </div>

                                        <p className="text-text-secondary text-sm leading-relaxed mb-4">{exp.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.highlights.map((highlight, i) => (
                                                <span key={i} className="tag">
                                                    <ChevronRight size={10} className="text-accent/70" />
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
