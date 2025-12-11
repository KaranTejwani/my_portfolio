import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { ChevronDown, ChevronUp } from 'lucide-react';

import neuroEmotionImg from '../assets/NeuroEmotion.png';
import healrImg from '../assets/healr.jpg';
import simperImg from '../assets/Simper.png';
import transcriberImg from '../assets/transcriber.png';
import chatMateImg from '../assets/ChatMate.png';
import findItImg from '../assets/findit_2.jpg';
import digitRecImg from '../assets/handwritten_digit_recognition.png';
import gestureImg from '../assets/gestureDetector.png';
import dataAnalysisImg from '../assets/DataAnalysis.png';

const ProjectCard = ({ meta, title, description, tags, link, image }) => {
    return (
        <div className="group relative rounded-2xl bg-panel border border-border overflow-hidden transition-all duration-300 hover:border-accent-start hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-start/10">
            {/* Image Banner */}
            <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="text-xs font-bold text-accent-start uppercase tracking-wider mb-2">{meta}</div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent-start transition-colors">{title}</h3>
                <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 text-[10px] uppercase font-medium rounded bg-white/5 border border-white/10 text-secondary">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-white hover:text-accent-start transition-colors">
                        <FaGithub size={16} /> <span className="underline decoration-transparent hover:decoration-accent-start transition-all">View Code</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [showMore, setShowMore] = useState(false);

    const projects = [
        {
            meta: "Final Year Project",
            title: "NeuroEmotion",
            description: "A mobile application that interprets EEG brainwaves to analyze human emotions in real-time. Built using Flutter and Python-based Deep Learning models.",
            tags: ["Flutter", "BCI", "Deep Learning", "EEG Analysis"],
            link: "https://github.com/orgs/NeuroEmotion",
            image: neuroEmotionImg
        },
        {
            meta: "Web App",
            title: "Healr",
            description: "A full-stack healthcare platform to search FDA-approved medicines, book lab tests, consult doctors, and manage health—featuring role-based dashboards for patients, doctors, and admins.",
            tags: ["React", "Node.js", "Express.js", "MongoDB"],
            link: "https://github.com/KaranTejwani/healr",
            image: healrImg
        },
        {
            meta: "Startup Founder",
            title: "Simper AI",
            description: "Founded an AI-based EdTech startup. The system automates the creation of exam papers and uses NLP to grade student answers automatically.",
            tags: ["Web Dev", "Automation", "NLP", "EdTech"],
            link: "https://github.com/KaranTejwani",
            image: simperImg
        },
        {
            meta: "Web App",
            title: "Bilingual Transcription",
            description: "A full-stack web application built with React and Flask that leverages OpenAI Whisper for accurate speech-to-text transcription and Google Translate for bilingual conversion.",
            tags: ["React", "Flask", "OpenAI Whisper", "Google Translate"],
            link: "https://github.com/KaranTejwani/bilingual-transcriber",
            image: transcriberImg
        },
        // More projects
        {
            meta: "Desktop App",
            title: "ChatMate",
            description: "Local network-based chat application built in Java. Features socket programming, user authentication, and persistent chat storage.",
            tags: ["Java", "Socket Programming", "MySQL"],
            link: "https://github.com/KaranTejwani/ChatMate",
            image: chatMateImg,
            hidden: true
        },
        {
            meta: "Mobile App",
            title: "FindIt",
            description: "A lost and found application connecting communities to recover lost items efficiently.",
            tags: ["Flutter", "Firebase", "Google Maps"],
            link: "https://github.com/KaranTejwani/finddd",
            image: findItImg,
            hidden: true
        },
        {
            meta: "Computer Vision",
            title: "Handwritten Digit Recognition",
            description: "A classic Deep Learning project implementing ANN to recognize handwritten digits with high accuracy.",
            tags: ["Python", "CNN", "TensorFlow"],
            link: "https://github.com/KaranTejwani/Handwritten_Digit_Recognition",
            image: digitRecImg,
            hidden: true
        },
        {
            meta: "HCI Project",
            title: "Gesture Detector",
            description: "Real-time hand gesture recognition system for controlling computer interfaces using webcam input.",
            tags: ["OpenCV", "MediaPipe", "Python"],
            link: "https://github.com/KaranTejwani/GestureDetection",
            image: gestureImg,
            hidden: true
        },
        {
            meta: "Data Science",
            title: "Data Analysis Suite",
            description: "Comprehensive data analysis project, focusing on extracting insights from the 'Most Streamed Spotify Songs 2024' dataset.",
            tags: ["Pandas", "Matplotlib", "Seaborn"],
            link: "https://github.com/KaranTejwani/DataAnalysis",
            image: dataAnalysisImg,
            hidden: true
        }
    ];

    const visibleProjects = showMore ? projects : projects.filter(p => !p.hidden);

    return (
        <section id="projects">
            <h2 className="mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <button
                    onClick={() => setShowMore(!showMore)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-panel border border-border text-secondary hover:text-white hover:border-accent-start transition-all duration-300"
                >
                    {showMore ? (
                        <>Show Less <ChevronUp size={16} /></>
                    ) : (
                        <>Show More Projects <ChevronDown size={16} /></>
                    )}
                </button>
            </div>
        </section>
    );
};

export default Projects;
