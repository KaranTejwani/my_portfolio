import React from 'react';
import { FileText, Users, Clock, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';
import { publicationsData } from '../data/portfolioData';

const ResearchSection = () => {
    return (
        <section id="research" className="relative py-16 md:py-20">
            <div className="section-container">
                {/* Header */}
                <SectionReveal className="mb-10 text-center">
                    <span className="section-badge mb-3 inline-flex">Academic</span>
                    <h2 className="text-text-primary">
                        Research & <span className="text-accent">Publications</span>
                    </h2>
                </SectionReveal>

                {/* Stats Row */}
                <SectionReveal delay={0.1}>
                    <div className="grid grid-cols-2 gap-4 mb-12 max-w-md mx-auto">
                        <motion.div
                            whileHover={{ y: -2 }}
                            className="obsidian-card p-5 text-center hover:border-accent/25 transition-colors"
                        >
                            <FileText className="w-5 h-5 mx-auto mb-2 text-accent" />
                            <div className="text-2xl font-bold text-text-primary font-display mb-0.5">{publicationsData.length}</div>
                            <div className="text-[0.65rem] text-text-muted uppercase tracking-wider">Publications</div>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -2 }}
                            className="obsidian-card p-5 text-center hover:border-accent/25 transition-colors"
                        >
                            <Users className="w-5 h-5 mx-auto mb-2 text-accent" />
                            <div className="text-2xl font-bold text-text-primary font-display mb-0.5">Global</div>
                            <div className="text-[0.65rem] text-text-muted uppercase tracking-wider">Collaboration</div>
                        </motion.div>
                    </div>
                </SectionReveal>

                {/* Publications List */}
                <div className="max-w-3xl mx-auto space-y-6">
                    {publicationsData.map((pub, index) => (
                        <SectionReveal key={pub.id} delay={0.12 + index * 0.08}>
                            <div className="obsidian-card p-6 group hover:border-accent/25 transition-all duration-500">
                                {/* Status Badge */}
                                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                                    <div className="flex items-center gap-2.5">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[0.65rem] font-bold uppercase tracking-wider bg-accent/[0.08] border border-accent/20 text-accent">
                                            <Clock size={10} />
                                            {pub.status}
                                        </span>
                                        <span className="text-xs font-medium text-text-secondary">{pub.venue}</span>
                                    </div>
                                    
                                    {pub.githubUrl !== '#' && (
                                        <a
                                            href={pub.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-text-secondary hover:text-black hover:bg-accent border border-white/[0.06] hover:border-accent transition-all duration-300"
                                        >
                                            <Github size={14} />
                                            <span>Code</span>
                                        </a>
                                    )}
                                </div>

                                {/* Title */}
                                <h3 className="text-base md:text-lg font-bold text-text-primary font-display leading-snug mb-4 group-hover:text-accent transition-colors duration-300">
                                    {pub.title}
                                </h3>

                                {/* Authors */}
                                <div className="mb-4 bg-white/[0.02] rounded-xl p-3.5 border border-white/[0.04]">
                                    <h4 className="text-[0.6rem] font-semibold text-text-muted uppercase tracking-widest mb-2">Authors</h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {pub.authors.map((author, i) => (
                                            <span
                                                key={i}
                                                className={`text-xs ${author === 'Karan Kumar'
                                                    ? 'text-accent font-semibold'
                                                    : 'text-text-secondary'
                                                    }`}
                                            >
                                                {author}{i < pub.authors.length - 1 ? ',' : ''}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Topics */}
                                <div className="flex flex-wrap gap-1.5">
                                    {pub.topics.map((topic, i) => (
                                        <span key={i} className="px-2.5 py-0.5 text-[0.65rem] bg-white/[0.03] border border-white/[0.05] rounded-md text-text-muted">{topic}</span>
                                    ))}
                                </div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchSection;
