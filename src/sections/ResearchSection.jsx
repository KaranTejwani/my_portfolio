import React from 'react';
import { FileText, Users, Clock, Github } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

export const publications = [
    {
        id: 1, status: 'Accepted', venue: 'IEEE EDUCON 2026',
        title: 'From Feedback to Insight: Leveraging Transformers and Explainable AI to Identify Helpful Student Reviews',
        abstract: '',
        authors: ['Zenun Kastrati', 'Dani Bux Shah', 'Sher Muhammad Daudpota', 'Ali Shariq Imnran', 'Karan Kumar'],
        topics: ['Transformers', 'Explainable AI', 'NLP', 'EdTech'],
        githubUrl: 'https://github.com/KaranTejwani',
    },
    {
        id: 2, status: 'Accepted', venue: 'IEEE ICOMER 2026',
        title: 'Analyzing the Classification-Localization Gap Between Convolutional Neural Networks and Vision Transformers for Image Manipulation Detection',
        abstract: '',
        authors: ['Karan Kumar', 'Kirti Kour'],
        topics: ['CNNs', 'ViTs', 'Explainable AI', 'Computer Vision', 'Image Manipulation Detection', 'Forensic'],
        githubUrl: 'https://github.com/KaranTejwani/CNN-vs-ViT-for-Image-Manipulation-Detection',
    },
];

const researchInterests = [
    { title: 'Generative AI', desc: 'Generative AI' },
    { title: 'Large Language Models', desc: 'Large Language Models' },
    { title: 'Explainable AI', desc: 'Transparent model decision-making' },
    { title: 'Educational Tech', desc: 'AI-powered learning systems' },
    { title: 'NLP', desc: 'Natural language understanding' },
    { title: 'Computer Vision', desc: 'Visual perception & analysis' },
];

const ResearchSection = () => {
    return (
        <section id="research" className="relative py-28 md:py-36">
            <div className="section-container">
                {/* Header */}
                <SectionReveal className="mb-14">
                    <span className="section-badge mb-4 inline-flex">Academic</span>
                    <h2 className="text-text-primary">
                        Research & <span className="text-gradient-gold">Publications</span>
                    </h2>
                    <p className="text-text-secondary">Academic contributions and ongoing research</p>
                </SectionReveal>

                {/* Stats Row */}
                <SectionReveal delay={0.1}>
                    <div className="grid grid-cols-2 gap-4 mb-12 max-w-md">
                        <div className="obsidian-card p-5 text-center">
                            <FileText className="w-5 h-5 mx-auto mb-2 text-accent" />
                            <div className="text-2xl font-bold text-text-primary font-display">{publications.length}</div>
                            <div className="text-xs text-text-muted uppercase tracking-wider">Publications</div>
                        </div>
                        <div className="obsidian-card p-5 text-center">
                            <Users className="w-5 h-5 mx-auto mb-2 text-accent" />
                            <div className="text-2xl font-bold text-text-primary font-display">International</div>
                            <div className="text-xs text-text-muted uppercase tracking-wider">Collaboration</div>
                        </div>
                    </div>
                </SectionReveal>

                {/* Publication Card */}
                {publications.map((pub) => (
                    <SectionReveal key={pub.id} delay={0.15}>
                        <div className="obsidian-card p-6 md:p-8 mb-10">
                            {/* Status Badge */}
                            <div className="flex flex-wrap items-center gap-3 mb-5">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-green-500/15 text-green-400 border border-green-500/20">
                                    <Clock size={12} />
                                    {pub.status}
                                </span>
                                <span className="text-sm text-text-muted">{pub.venue}</span>
                            </div>

                            {/* Title & Actions */}
                            <div className="flex justify-between items-start gap-4 mb-5">
                                <h3 className="text-xl md:text-2xl font-bold text-text-primary font-display leading-snug">
                                    {pub.title}
                                </h3>
                                {pub.githubUrl && (
                                    <a
                                        href={pub.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-text-secondary hover:text-accent hover:bg-accent/10 border border-border hover:border-accent/30 transition-all duration-300"
                                    >
                                        <Github size={16} />
                                        <span className="hidden sm:inline">View Code</span>
                                    </a>
                                )}
                            </div>

                            {/* Authors */}
                            <div className="mb-5">
                                <h4 className="text-xs font-semibold text-text-primary uppercase tracking-widest mb-3">Authors</h4>
                                <div className="flex flex-wrap gap-2">
                                    {pub.authors.map((author, i) => (
                                        <span
                                            key={i}
                                            className={`px-3 py-1.5 rounded-lg text-sm ${author === 'Karan Kumar'
                                                ? 'bg-accent/15 text-accent border border-accent/25 font-medium'
                                                : 'bg-bg-surface text-text-secondary border border-border'
                                                }`}
                                        >
                                            {author}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Topics */}
                            <div className="flex flex-wrap gap-2">
                                {pub.topics.map((topic, i) => (
                                    <span key={i} className="tag">{topic}</span>
                                ))}
                            </div>
                        </div>
                    </SectionReveal>
                ))}

                {/* Research Interests */}
                <SectionReveal delay={0.2}>
                    <h3 className="text-xl font-bold text-text-primary font-display mb-6">Research Interests</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {researchInterests.map((interest, index) => (
                            <div key={index} className="obsidian-card p-5 group">
                                <h4 className="text-base font-semibold text-text-primary font-display mb-1.5 group-hover:text-accent transition-colors duration-300">{interest.title}</h4>
                                <p className="text-sm text-text-secondary">{interest.desc}</p>
                            </div>
                        ))}
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
};

export default ResearchSection;
