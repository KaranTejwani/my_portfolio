import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X } from 'lucide-react';
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

    return (
        <section id="projects" className="relative py-16 md:py-20">
            <div className="section-container relative z-10">
                {/* Header */}
                <SectionReveal className="mb-8 text-center">
                    <span className="section-badge mb-3 inline-flex">Portfolio</span>
                    <h2 className="text-text-primary">
                        Featured <span className="text-accent">Projects</span>
                    </h2>
                    <p className="text-text-secondary text-sm">A collection of my work spanning AI, web development, and beyond</p>
                </SectionReveal>

                {/* Category Filter */}
                <SectionReveal className="flex justify-center flex-wrap gap-2 mb-8" delay={0.1}>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${activeCategory === cat.id
                                ? 'bg-accent text-black font-semibold shadow-glow'
                                : 'bg-white/[0.03] border border-white/[0.06] text-text-secondary hover:text-text-primary hover:border-accent/30'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </SectionReveal>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredProjects.map((project, index) => (
                        <SectionReveal key={project.id} delay={0.08 + index * 0.04}>
                            <motion.div
                                whileHover={{ y: -4 }}
                                className="obsidian-card overflow-hidden group cursor-pointer h-full flex flex-col"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="h-40 overflow-hidden relative bg-bg-surface">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c24] via-transparent to-transparent z-10 pointer-events-none" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="block w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {project.featured && (
                                        <span className="absolute top-3 right-3 z-20 px-2.5 py-0.5 rounded-full bg-black/50 border border-accent/30 text-accent text-[0.65rem] font-bold uppercase tracking-wider backdrop-blur-md">
                                            Featured
                                        </span>
                                    )}
                                </div>
                                <div className="p-5 flex flex-col flex-1 relative z-20">
                                    <div className="text-[0.65rem] font-bold text-accent uppercase tracking-widest mb-1.5">{project.meta}</div>
                                    <h3 className="text-base font-bold text-text-primary font-display mb-1.5 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                                    <p className="text-text-secondary text-xs leading-relaxed mb-3 flex-1 line-clamp-2">{project.description}</p>

                                    <div className="flex flex-wrap gap-1.5 mt-auto">
                                        {project.tags.slice(0, 3).map((tag, i) => (
                                            <span key={i} className="text-[0.65rem] text-text-muted bg-white/[0.03] px-2 py-0.5 rounded-md border border-white/[0.06]">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </SectionReveal>
                    ))}
                </div>

                {/* Project Detail Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="relative w-full max-w-2xl overflow-hidden bg-[#12141a] border border-white/[0.08] rounded-2xl shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-accent hover:text-black transition-colors"
                                >
                                    <X size={18} />
                                </button>

                                <div className="h-52 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] to-transparent z-10" />
                                    <img src={selectedProject.image} alt={selectedProject.title} className="block w-full h-full object-cover" />
                                </div>

                                <div className="p-6">
                                    <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">{selectedProject.meta}</div>
                                    <h2 className="text-2xl font-bold text-text-primary font-display mb-3">{selectedProject.title}</h2>
                                    <p className="text-text-secondary leading-relaxed mb-5 text-sm">
                                        {selectedProject.description}
                                    </p>

                                    <div className="mb-6">
                                        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-2">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tags.map((tag, i) => (
                                                <span key={i} className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.06] rounded-lg text-xs text-text-secondary">{tag}</span>
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
                                        <button onClick={() => setSelectedProject(null)} className="btn-secondary">
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
