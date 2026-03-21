import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X, ArrowLeft } from 'lucide-react';
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
        <section id="projects" className="relative py-28 md:py-36">
            <div className="section-container relative z-10">
                {/* Header */}
                <SectionReveal className="mb-12 text-center">
                    <span className="section-badge mb-4 inline-flex">Portfolio</span>
                    <h2 className="text-text-primary">
                        Featured <span className="text-accent">Projects</span>
                    </h2>
                    <p className="text-text-secondary">A collection of my work spanning AI, web development, and beyond</p>
                </SectionReveal>

                {/* Category Filter */}
                <SectionReveal className="flex justify-center flex-wrap gap-3 mb-12" delay={0.1}>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                                ? 'bg-accent text-black font-semibold shadow-glow'
                                : 'bg-bg-surface border border-border text-text-secondary hover:text-text-primary hover:border-accent/40'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </SectionReveal>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <SectionReveal key={project.id} delay={0.1 + index * 0.05}>
                            <div
                                className="obsidian-card overflow-hidden group cursor-pointer h-full flex flex-col"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="h-48 overflow-hidden relative bg-bg-surface">
                                    <div className="absolute inset-0 bg-gradient-to-t from-bg-surface to-transparent z-10 pointer-events-none" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="block w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {project.featured && (
                                        <span className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-bg-surface border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                                            Featured
                                        </span>
                                    )}
                                </div>
                                <div className="p-6 flex flex-col flex-1 relative z-20">
                                    <div className="text-xs font-bold text-accent uppercase tracking-widest mb-2">{project.meta}</div>
                                    <h3 className="text-xl font-bold text-text-primary font-display mb-2 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1 line-clamp-3">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.slice(0, 3).map((tag, i) => (
                                            <span key={i} className="text-xs text-text-muted bg-bg-primary px-2 py-1 rounded-md border border-border">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
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
                                className="relative w-full max-w-3xl overflow-hidden bg-bg-surface border border-border rounded-2xl shadow-glow-lg"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-accent hover:text-black transition-colors"
                                >
                                    <X size={20} />
                                </button>

                                <div className="h-64 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-bg-surface to-transparent z-10" />
                                    <img src={selectedProject.image} alt={selectedProject.title} className="block w-full h-full object-cover" />
                                </div>

                                <div className="p-8">
                                    <div className="text-sm font-bold text-accent uppercase tracking-widest mb-2">{selectedProject.meta}</div>
                                    <h2 className="text-3xl font-bold text-text-primary font-display mb-4">{selectedProject.title}</h2>
                                    <p className="text-text-secondary leading-relaxed mb-6 text-lg">
                                        {selectedProject.description}
                                    </p>

                                    <div className="mb-8">
                                        <h4 className="text-sm font-semibold text-text-primary uppercase tracking-widest mb-3">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tags.map((tag, i) => (
                                                <span key={i} className="px-3 py-1.5 bg-bg-elevated border border-border rounded-lg text-sm text-text-secondary">{tag}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                        <a
                                            href={selectedProject.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary"
                                        >
                                            <Github size={18} />
                                            View Source
                                        </a>
                                        <button onClick={() => setSelectedProject(null)} className="btn-secondary text-white">
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
