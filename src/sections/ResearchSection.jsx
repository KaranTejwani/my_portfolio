import React from 'react';
import { motion } from 'framer-motion';
import { Github, FileText, Users, Clock } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';
import { publicationsData } from '../data/portfolioData';

const stats = [
    { icon: FileText, value: '2', label: 'Publications', color: 'text-accent' },
    { icon: Users, value: 'Global', label: 'Collaboration', color: 'text-purple-400' },
];

const ResearchSection = () => {
    return (
        <section id="research" className="relative py-16 md:py-20">
            {/* Ambient background glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px]" />
            </div>

            <div className="section-container relative z-10">
                {/* Header */}
                <SectionReveal className="mb-10 text-center">
                    <span className="section-badge mb-3 inline-flex">Academic</span>
                    <h2 className="text-text-primary">
                        Research & <span className="text-gradient">Publications</span>
                    </h2>
                    <p className="text-text-secondary text-sm mt-2 max-w-xl mx-auto">
                        Peer-reviewed research at the intersection of Deep Learning, Explainable AI, and Computer Vision
                    </p>
                </SectionReveal>

                {/* Stats Row */}
                <SectionReveal delay={0.1}>
                    <div className="flex justify-center gap-4 md:gap-6 mb-10">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -3 }}
                                className="glass-card px-6 py-4 flex items-center gap-3"
                            >
                                <div className={`p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] ${stat.color}`}>
                                    <stat.icon size={20} />
                                </div>
                                <div>
                                    <div className="text-lg font-bold text-text-primary font-display">{stat.value}</div>
                                    <div className="text-[0.7rem] text-text-muted uppercase tracking-wider">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </SectionReveal>

                {/* Publication Cards */}
                <div className="space-y-6 max-w-4xl mx-auto">
                    {publicationsData.map((pub, index) => (
                        <SectionReveal key={pub.id} delay={0.15 + index * 0.1}>
                            <motion.div
                                whileHover={{ y: -4 }}
                                className="glass-card p-6 md:p-7 group hover:border-accent/30 transition-all duration-300"
                            >
                                {/* Top Row: Logo + Status + Venue */}
                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    {/* Conference Logo */}
                                    <div className="flex-shrink-0 bg-white rounded-xl px-3 py-2 flex items-center justify-center">
                                        <img
                                            src={pub.logo}
                                            alt={pub.venue}
                                            className="pub-logo h-[40px] md:h-[46px] w-auto object-contain"
                                        />
                                    </div>

                                    <div className="flex flex-wrap items-center gap-2.5">
                                        {/* Status Badge */}
                                        <span className="px-2.5 py-1 rounded-full bg-accent/[0.1] border border-accent/25 text-accent text-[0.65rem] font-bold uppercase tracking-wider">
                                            {pub.status}
                                        </span>

                                        {/* Venue */}
                                        <span className="flex items-center gap-1.5 text-xs text-text-muted font-medium">
                                            <Clock size={12} className="text-accent/60" />
                                            {pub.venue}
                                        </span>
                                    </div>
                                </div>

                                {/* Paper Title */}
                                <h3 className="text-base md:text-lg font-bold text-text-primary font-display mb-3 leading-snug group-hover:text-accent transition-colors duration-300">
                                    {pub.title}
                                </h3>

                                {/* Authors */}
                                <div className="flex flex-wrap items-center gap-1 mb-4 text-xs text-text-secondary">
                                    <Users size={13} className="text-text-muted mr-1" />
                                    {pub.authors.map((author, i) => (
                                        <span key={i}>
                                            <span className={author === 'Karan Kumar' ? 'text-accent font-semibold' : ''}>
                                                {author}
                                            </span>
                                            {i < pub.authors.length - 1 && (
                                                <span className="text-text-muted">,&nbsp;</span>
                                            )}
                                        </span>
                                    ))}
                                </div>

                                {/* Topics + GitHub Link */}
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <div className="flex flex-wrap gap-1.5">
                                        {pub.topics.map((topic, i) => (
                                            <span key={i} className="tag">
                                                {topic}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={pub.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-text-secondary text-xs font-medium hover:text-accent hover:border-accent/30 transition-all duration-300"
                                    >
                                        <Github size={14} />
                                        View Code
                                    </a>
                                </div>
                            </motion.div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchSection;
