import React from 'react';
import { FileText, Users, Clock, Github } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';
import { publicationsData } from '../data/portfolioData';

const ResearchSection = () => {
    return (
        <section id="research" className="relative py-28 md:py-36">
            <div className="section-container">
                {/* Header */}
                <SectionReveal className="mb-14 text-center">
                    <span className="section-badge mb-4 inline-flex">Academic</span>
                    <h2 className="text-text-primary">
                        Research & <span className="text-accent">Publications</span>
                    </h2>
                </SectionReveal>

                {/* Stats Row */}
                <SectionReveal delay={0.1}>
                    <div className="grid grid-cols-2 gap-6 mb-16 max-w-lg mx-auto">
                        <div className="obsidian-card p-6 text-center border hover:border-accent transition-colors">
                            <FileText className="w-6 h-6 mx-auto mb-3 text-accent" />
                            <div className="text-3xl font-bold text-text-primary font-display mb-1">{publicationsData.length}</div>
                            <div className="text-xs text-text-muted uppercase tracking-wider">Publications</div>
                        </div>
                        <div className="obsidian-card p-6 text-center border hover:border-accent transition-colors">
                            <Users className="w-6 h-6 mx-auto mb-3 text-accent" />
                            <div className="text-3xl font-bold text-text-primary font-display mb-1">Global</div>
                            <div className="text-xs text-text-muted uppercase tracking-wider">Collaboration</div>
                        </div>
                    </div>
                </SectionReveal>

                {/* Publications List */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {publicationsData.map((pub, index) => (
                        <SectionReveal key={pub.id} delay={0.15 + index * 0.1}>
                            <div className="obsidian-card p-8 group hover:shadow-glow-cyan transition-all duration-500">
                                {/* Status Badge */}
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent/10 border border-accent/20 text-accent">
                                            <Clock size={12} />
                                            {pub.status}
                                        </span>
                                        <span className="text-sm font-medium text-text-secondary">{pub.venue}</span>
                                    </div>
                                    
                                    {pub.githubUrl !== '#' && (
                                        <a
                                            href={pub.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-text-secondary hover:text-black hover:bg-accent border border-border hover:border-accent transition-all duration-300"
                                        >
                                            <Github size={16} />
                                            <span>Code</span>
                                        </a>
                                    )}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl md:text-2xl font-bold text-text-primary font-display leading-snug mb-6 group-hover:text-accent transition-colors duration-300">
                                    {pub.title}
                                </h3>

                                {/* Authors */}
                                <div className="mb-6 bg-bg-primary rounded-xl p-4 border border-border">
                                    <h4 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-3">Authors</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {pub.authors.map((author, i) => (
                                            <span
                                                key={i}
                                                className={`text-sm ${author === 'Karan Kumar'
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
                                <div className="flex flex-wrap gap-2">
                                    {pub.topics.map((topic, i) => (
                                        <span key={i} className="px-3 py-1 text-xs bg-bg-surface border border-border rounded-md text-text-muted">{topic}</span>
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
