import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ArrowLeft } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';
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
        id: 1,
        category: 'ai',
        meta: 'Final Year Project',
        title: 'NeuroEmotion',
        description: 'A mobile application that interprets EEG brainwaves to analyze human emotions in real-time.',
        fullDescription: 'NeuroEmotion is a groundbreaking mobile application that bridges the gap between neuroscience and everyday technology. Using advanced deep learning models trained on EEG data, the app can interpret brainwave patterns and translate them into emotional states in real-time.',
        tags: ['Flutter', 'Python', 'TensorFlow', 'BCI'],
        link: 'https://github.com/orgs/NeuroEmotion',
        image: neuroEmotionImg,
        featured: true,
    },
    {
        id: 2,
        category: 'web',
        meta: 'Web App',
        title: 'Healr',
        description: 'A full-stack healthcare platform to search FDA-approved medicines, book lab tests, and consult doctors.',
        fullDescription: 'Healr is a comprehensive healthcare platform designed to streamline medical services with role-based dashboards for patients, doctors, and administrators.',
        tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
        link: 'https://github.com/KaranTejwani/healr',
        image: healrImg,
        featured: true,
    },
    {
        id: 3,
        category: 'ai',
        meta: 'Startup',
        title: 'Simper AI',
        description: 'AI-based EdTech startup automating exam paper creation and NLP-powered answer grading.',
        fullDescription: 'Simper AI is an innovative EdTech startup that uses NLP to automatically generate exam papers and intelligently grade student responses.',
        tags: ['React', 'Python', 'NLP', 'OpenAI'],
        link: 'https://github.com/KaranTejwani',
        image: simperImg,
        featured: true,
    },
    {
        id: 4,
        category: 'web',
        meta: 'Web App',
        title: 'Bilingual Transcription',
        description: 'Full-stack app using OpenAI Whisper for speech-to-text and Google Translate for bilingual conversion.',
        tags: ['React', 'Flask', 'OpenAI Whisper'],
        link: 'https://github.com/KaranTejwani/bilingual-transcriber',
        image: transcriberImg,
        featured: true,
    },
    {
        id: 5,
        category: 'other',
        meta: 'Desktop',
        title: 'ChatMate',
        description: 'Local network chat app with socket programming and user authentication.',
        tags: ['Java', 'MySQL'],
        link: 'https://github.com/KaranTejwani/ChatMate',
        image: chatMateImg,
    },
    {
        id: 6,
        category: 'mobile',
        meta: 'Mobile',
        title: 'FindIt',
        description: 'Lost and found application connecting communities.',
        tags: ['Flutter', 'Firebase'],
        link: 'https://github.com/KaranTejwani/finddd',
        image: findItImg,
    },
    {
        id: 7,
        category: 'ai',
        meta: 'CV',
        title: 'Digit Recognition',
        description: 'Deep Learning project for handwritten digit recognition.',
        tags: ['Python', 'TensorFlow'],
        link: 'https://github.com/KaranTejwani/Handwritten_Digit_Recognition',
        image: digitRecImg,
    },
    {
        id: 8,
        category: 'ai',
        meta: 'HCI',
        title: 'Gesture Detector',
        description: 'Real-time hand gesture recognition using webcam.',
        tags: ['OpenCV', 'Python'],
        link: 'https://github.com/KaranTejwani/GestureDetection',
        image: gestureImg,
    },
    {
        id: 9,
        category: 'other',
        meta: 'Data',
        title: 'Data Analysis',
        description: 'Insights from Spotify 2024 dataset.',
        tags: ['Python'],
        link: 'https://github.com/KaranTejwani/DataAnalysis',
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

const ProjectsPage = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <PageTransition>
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start to-accent-end">Projects</span>
                </h1>
                <p className="text-secondary">A collection of my work spanning AI, web development, and beyond</p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 ${activeCategory === cat.id
                                ? 'bg-gradient-to-r from-accent-start to-accent-end text-white'
                                : 'bg-white/5 border border-white/10 text-secondary hover:text-white hover:border-accent-start/40'
                            }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProjects.map((project, index) => (
                    <GlassCard
                        key={project.id}
                        className="overflow-hidden group h-full flex flex-col"
                        onClick={() => setSelectedProject(project)}
                        delay={index * 0.03}
                    >
                        {/* Image */}
                        <div className="h-40 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                            {project.featured && (
                                <span className="absolute top-3 right-3 z-20 px-2 py-1 rounded-lg bg-accent-start/20 border border-accent-start/40 text-accent-start text-xs font-bold">
                                    Featured
                                </span>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-1">
                            <div className="text-xs font-bold text-accent-start uppercase tracking-wider mb-1">
                                {project.meta}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-start transition-colors duration-150">
                                {project.title}
                            </h3>
                            <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {project.tags.slice(0, 3).map((tag, i) => (
                                    <TechBadge key={i} name={tag} size="sm" showIcon={false} />
                                ))}
                            </div>

                            {/* Actions */}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-2 text-sm text-white hover:text-accent-start transition-colors duration-150"
                            >
                                <Github size={16} />
                                View Code
                            </a>
                        </div>
                    </GlassCard>
                ))}
            </div>

            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-background border border-white/10 rounded-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors duration-150"
                            >
                                <X size={18} />
                            </button>

                            {/* Image */}
                            <div className="h-56 md:h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8">
                                <div className="text-sm font-bold text-accent-start uppercase tracking-wider mb-2">
                                    {selectedProject.meta}
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
                                <p className="text-secondary leading-relaxed mb-6">
                                    {selectedProject.fullDescription || selectedProject.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map((tag, i) => (
                                            <TechBadge key={i} name={tag} size="md" />
                                        ))}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent-start to-accent-end text-white font-medium hover:shadow-glow transition-all duration-150"
                                    >
                                        <Github size={18} />
                                        View Code
                                    </a>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:border-accent-start/40 transition-all duration-150"
                                    >
                                        <ArrowLeft size={18} />
                                        Back
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </PageTransition>
    );
};

export default ProjectsPage;
