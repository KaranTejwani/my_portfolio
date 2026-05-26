import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X, ExternalLink } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';
import TechBadge from '../components/TechBadge';
import { projectsData } from '../data/portfolioData';

const categories = [
    { id: 'all', label: 'All' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'other', label: 'Other' },
];

const ProjectsSection = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = activeCategory === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === activeCategory);

    const featuredProjects = filteredProjects.filter(p => p.featured);
    const otherProjects = filteredProjects.filter(p => !p.featured);

    return (
        <section id="projects" className="relative py-16 md:py-24">
            <div className="section-container relative z-10">
                {/* Header */}
                <SectionReveal className="mb-10 text-center">
                    <span className="section-badge mb-4 inline-flex">Portfolio</span>
                    <h2 className="text-text-primary">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-text-secondary text-sm max-w-xl mx-auto">
                        A collection of my work spanning AI research, web platforms, mobile apps, and beyond
                    </p>
                </SectionReveal>

                {/* Category Filter */}
                <SectionReveal className="flex justify-center flex-wrap gap-2 mb-10" delay={0.1}>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${activeCategory === cat.id
                                ? 'bg-[--accent] text-black font-semibold shadow-[0_0_20px_rgba(0,210,211,0.3)]'
                                : 'bg-transparent border border-white/[0.08] text-text-secondary hover:text-text-primary hover:border-[--accent]/40'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </SectionReveal>

                {/* Featured Projects — Large Cards */}
                {featuredProjects.length > 0 && (
                    <div className="space-y-6 mb-10">
                        {featuredProjects.map((project, index) => (
                            <SectionReveal key={project.id} delay={0.08 + index * 0.06}>
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.3 }}
                                    className="glass-card overflow-hidden group cursor-pointer"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <div className="flex flex-col md:flex-row">
                                        {/* Image */}
                                        <div className="md:w-[45%] h-56 md:h-auto relative overflow-hidden bg-bg-surface flex-shrink-0">
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(19,21,28,0.7)] z-10 pointer-events-none hidden md:block" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(19,21,28,0.7)] to-transparent z-10 pointer-events-none md:hidden" />
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="block w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <span className="absolute top-3 left-3 z-20 px-2.5 py-0.5 rounded-full bg-[--accent]/10 border border-[--accent]/30 text-[--accent] text-[0.65rem] font-bold uppercase tracking-wider backdrop-blur-md">
                                                ★ Featured
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="md:w-[55%] p-6 md:p-8 flex flex-col justify-center relative z-20">
                                            <div className="text-[0.65rem] font-bold text-[--accent] uppercase tracking-[0.15em] mb-2">
                                                {project.meta}
                                            </div>
                                            <h3 className="text-xl md:text-2xl font-bold text-text-primary font-display mb-3 group-hover:text-[--accent] transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-text-secondary text-sm leading-relaxed mb-5">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-1.5 mb-5">
                                                {project.tags.map((tag, i) => (
                                                    <TechBadge key={i} name={tag} size="sm" />
                                                ))}
                                            </div>

                                            <div>
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-text-secondary text-xs font-medium hover:border-[--accent]/40 hover:text-[--accent] hover:bg-[--accent]/[0.04] transition-all duration-300"
                                                >
                                                    <Github size={14} />
                                                    View on GitHub
                                                    <ExternalLink size={11} className="opacity-50" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </SectionReveal>
                        ))}
                    </div>
                )}

                {/* Other Projects — Compact 3-Column Grid */}
                {otherProjects.length > 0 && (
                    <>
                        {featuredProjects.length > 0 && (
                            <SectionReveal delay={0.1}>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="glow-line flex-1" />
                                    <span className="text-[0.7rem] font-semibold text-text-muted uppercase tracking-[0.15em]">
                                        More Projects
                                    </span>
                                    <div className="glow-line flex-1" />
                                </div>
                            </SectionReveal>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {otherProjects.map((project, index) => (
                                <SectionReveal key={project.id} delay={0.08 + index * 0.04}>
                                    <motion.div
                                        whileHover={{ y: -4 }}
                                        className="obsidian-card overflow-hidden group cursor-pointer h-full flex flex-col"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        <div className="h-40 overflow-hidden relative bg-bg-surface">
                                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-elevated)] via-transparent to-transparent z-10 pointer-events-none" />
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="block w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="p-5 flex flex-col flex-1 relative z-20">
                                            <div className="text-[0.65rem] font-bold text-[--accent] uppercase tracking-widest mb-1.5">
                                                {project.meta}
                                            </div>
                                            <h3 className="text-base font-bold text-text-primary font-display mb-1.5 group-hover:text-[--accent] transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-text-secondary text-xs leading-relaxed mb-3 flex-1 line-clamp-2">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-1.5 mt-auto">
                                                {project.tags.slice(0, 3).map((tag, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-[0.65rem] text-text-muted bg-white/[0.03] px-2 py-0.5 rounded-md border border-white/[0.06]"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                                {project.tags.length > 3 && (
                                                    <span className="text-[0.65rem] text-text-muted/60 px-1 py-0.5">
                                                        +{project.tags.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                </SectionReveal>
                            ))}
                        </div>
                    </>
                )}

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <SectionReveal>
                        <div className="text-center py-16">
                            <p className="text-text-muted text-sm">No projects found in this category.</p>
                        </div>
                    </SectionReveal>
                )}

                {/* Project Detail Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.92, y: 30 }}
                                transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                                className="relative w-full max-w-2xl overflow-hidden bg-[#12141a] border border-white/[0.08] rounded-2xl shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-[--accent] hover:text-black transition-colors cursor-pointer"
                                >
                                    <X size={18} />
                                </button>

                                <div className="h-52 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] to-transparent z-10" />
                                    <img
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="block w-full h-full object-cover"
                                    />
                                    {selectedProject.featured && (
                                        <span className="absolute top-3 left-3 z-20 px-2.5 py-0.5 rounded-full bg-[--accent]/10 border border-[--accent]/30 text-[--accent] text-[0.65rem] font-bold uppercase tracking-wider backdrop-blur-md">
                                            ★ Featured
                                        </span>
                                    )}
                                </div>

                                <div className="p-6">
                                    <div className="text-xs font-bold text-[--accent] uppercase tracking-widest mb-2">
                                        {selectedProject.meta}
                                    </div>
                                    <h2 className="text-2xl font-bold text-text-primary font-display mb-3">
                                        {selectedProject.title}
                                    </h2>
                                    <p className="text-text-secondary leading-relaxed mb-5 text-sm">
                                        {selectedProject.description}
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-2">
                                            Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tags.map((tag, i) => (
                                                <TechBadge key={i} name={tag} size="sm" />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        <a
                                            href={selectedProject.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary"
                                        >
                                            <Github size={16} />
                                            View Source
                                        </a>
                                        <button
                                            onClick={() => setSelectedProject(null)}
                                            className="btn-secondary cursor-pointer"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ProjectsSection;
