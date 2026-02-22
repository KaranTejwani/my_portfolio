import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ArrowLeft } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';
import TechBadge from '../components/TechBadge';

import neuroEmotionImg from '../assets/NeuroEmotion.png';
import healrImg from '../assets/healr.jpg';
import simperImg from '../assets/Simper.png';
import transcriberImg from '../assets/transcriber.png';
import chatMateImg from '../assets/ChatMate.png';
import findItImg from '../assets/findit_2.jpg';
import digitRecImg from '../assets/handwritten_digit_recognition.png';
import gestureImg from '../assets/gestureDetector.png';
import dataAnalysisImg from '../assets/DataAnalysis.png';

const projects = [
    {
        id: 1, category: 'ai', meta: 'Final Year Project', title: 'NeuroEmotion',
        description: 'A mobile application that interprets EEG brainwaves to analyze human emotions in real-time.',
        fullDescription: 'NeuroEmotion is a groundbreaking mobile application that bridges the gap between neuroscience and everyday technology. Using advanced deep learning models trained on EEG data, the app can interpret brainwave patterns and translate them into emotional states in real-time.',
        tags: ['Flutter', 'Python', 'TensorFlow', 'BCI'], link: 'https://github.com/orgs/NeuroEmotion',
        image: neuroEmotionImg, featured: true,
    },
    {
        id: 2, category: 'web', meta: 'Web App', title: 'Healr',
        description: 'A full-stack healthcare platform to search FDA-approved medicines, book lab tests, and consult doctors.',
        fullDescription: 'Healr is a comprehensive healthcare platform designed to streamline medical services with role-based dashboards for patients, doctors, and administrators.',
        tags: ['React', 'Node.js', 'Express.js', 'MongoDB'], link: 'https://github.com/KaranTejwani/healr',
        image: healrImg, featured: true,
    },
    {
        id: 3, category: 'ai', meta: 'Startup', title: 'Simper AI',
        description: 'AI-based EdTech startup automating exam paper creation and NLP-powered answer grading.',
        fullDescription: 'Simper AI is an innovative EdTech startup that uses NLP to automatically generate exam papers and intelligently grade student responses.',
        tags: ['React', 'Python', 'NLP', 'OpenAI'], link: 'https://github.com/KaranTejwani',
        image: simperImg, featured: true,
    },
    {
        id: 4, category: 'web', meta: 'Web App', title: 'Bilingual Transcription',
        description: 'Full-stack app using OpenAI Whisper for speech-to-text and Google Translate for bilingual conversion.',
        tags: ['React', 'Flask', 'OpenAI Whisper'], link: 'https://github.com/KaranTejwani/bilingual-transcriber',
        image: transcriberImg,
    },
    {
        id: 5, category: 'other', meta: 'Desktop', title: 'ChatMate',
        description: 'Local network chat app with socket programming and user authentication.',
        tags: ['Java', 'MySQL'], link: 'https://github.com/KaranTejwani/ChatMate',
        image: chatMateImg,
    },
    {
        id: 6, category: 'mobile', meta: 'Mobile', title: 'FindIt',
        description: 'Lost and found application connecting communities.',
        tags: ['Flutter', 'Firebase'], link: 'https://github.com/KaranTejwani/finddd',
        image: findItImg,
    },
    {
        id: 7, category: 'ai', meta: 'CV', title: 'Digit Recognition',
        description: 'Deep Learning project for handwritten digit recognition.',
        tags: ['Python', 'TensorFlow'], link: 'https://github.com/KaranTejwani/Handwritten_Digit_Recognition',
        image: digitRecImg,
    },
    {
        id: 8, category: 'ai', meta: 'HCI', title: 'Gesture Detector',
        description: 'Real-time hand gesture recognition using webcam.',
        tags: ['OpenCV', 'Python'], link: 'https://github.com/KaranTejwani/GestureDetection',
        image: gestureImg,
    },
    {
        id: 9, category: 'other', meta: 'Data', title: 'Data Analysis',
        description: 'Insights from Spotify 2024 dataset.',
        tags: ['Python'], link: 'https://github.com/KaranTejwani/DataAnalysis',
        image: dataAnalysisImg,
    },
];

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
        ? projects
        : projects.filter(p => p.category === activeCategory);

    const featuredProjects = filteredProjects.filter(p => p.featured);
    const otherProjects = filteredProjects.filter(p => !p.featured);

    return (
        <section id="projects" className="relative py-28 md:py-36">
            {/* Ambient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="ambient-orb ambient-orb-gold w-[350px] h-[350px] top-1/4 -right-32 animate-float-delayed opacity-20" />
            </div>

            <div className="section-container relative z-10">
                {/* Header */}
                <SectionReveal className="mb-12">
                    <span className="section-badge mb-4 inline-flex">Portfolio</span>
                    <h2 className="text-text-primary">
                        Featured <span className="text-gradient-gold">Projects</span>
                    </h2>
                    <p className="text-text-secondary max-w-lg">A collection of my work spanning AI, web development, and beyond</p>
                </SectionReveal>

                {/* Category Filter */}
                <SectionReveal className="flex flex-wrap gap-2 mb-10" delay={0.1}>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                                ? 'bg-accent text-bg-primary font-semibold shadow-glow'
                                : 'border border-border text-text-secondary hover:text-text-primary hover:border-accent/30'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </SectionReveal>

                {/* Featured Projects - Compact Cards */}
                {featuredProjects.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 max-w-4xl">
                        {featuredProjects.map((project, index) => (
                            <SectionReveal key={project.id} delay={0.1 + index * 0.06}>
                                <div
                                    className="obsidian-card overflow-hidden group cursor-pointer h-full flex flex-col"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <div className="h-32 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-transparent to-transparent z-10" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <span className="absolute top-2 right-2 z-20 px-2 py-0.5 rounded-md bg-accent/20 border border-accent/30 text-accent text-[10px] font-bold uppercase tracking-wider">
                                            Featured
                                        </span>
                                    </div>
                                    <div className="p-4 flex flex-col flex-1">
                                        <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">{project.meta}</div>
                                        <h3 className="text-base font-bold text-text-primary font-display mb-1 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                                        <p className="text-text-secondary text-xs leading-relaxed mb-3 line-clamp-2 flex-1">{project.description}</p>
                                        <div className="flex flex-wrap gap-1 mb-3">
                                            {project.tags.slice(0, 3).map((tag, i) => (
                                                <TechBadge key={i} name={tag} size="sm" showIcon={false} />
                                            ))}
                                        </div>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent transition-colors duration-200"
                                        >
                                            <Github size={14} />
                                            View Code
                                        </a>
                                    </div>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>
                )}

                {/* Other Projects - Horizontal Scroll */}
                {otherProjects.length > 0 && (
                    <SectionReveal delay={0.3}>
                        <h3 className="text-lg font-semibold text-text-primary font-display mb-5">More Projects</h3>
                        <div className="horizontal-scroll">
                            {otherProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="obsidian-card overflow-hidden group cursor-pointer w-[250px] flex-shrink-0 flex flex-col"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    <div className="h-28 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-transparent to-transparent z-10" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col flex-1">
                                        <div className="text-[10px] font-bold text-accent uppercase tracking-widest mb-1">{project.meta}</div>
                                        <h4 className="text-sm font-bold text-text-primary font-display mb-1.5 group-hover:text-accent transition-colors">{project.title}</h4>
                                        <p className="text-text-secondary text-xs leading-relaxed mb-3 line-clamp-2 flex-1">{project.description}</p>
                                        <div className="flex flex-wrap gap-1">
                                            {project.tags.slice(0, 3).map((tag, i) => (
                                                <TechBadge key={i} name={tag} size="sm" showIcon={false} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionReveal>
                )}
            </div>

            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-bg-elevated border border-border rounded-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-bg-surface text-text-secondary hover:text-accent transition-colors duration-200"
                            >
                                <X size={18} />
                            </button>

                            <div className="h-56 md:h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-transparent to-transparent" />
                                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                            </div>

                            <div className="p-6 md:p-8">
                                <div className="text-sm font-bold text-accent uppercase tracking-widest mb-3">{selectedProject.meta}</div>
                                <h2 className="text-2xl md:text-3xl font-bold text-text-primary font-display mb-4">{selectedProject.title}</h2>
                                <p className="text-text-secondary leading-relaxed mb-6">
                                    {selectedProject.fullDescription || selectedProject.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-text-primary uppercase tracking-widest mb-3">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map((tag, i) => (
                                            <TechBadge key={i} name={tag} size="md" />
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
                                        View Code
                                    </a>
                                    <button onClick={() => setSelectedProject(null)} className="btn-secondary">
                                        <ArrowLeft size={18} />
                                        Back
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProjectsSection;
