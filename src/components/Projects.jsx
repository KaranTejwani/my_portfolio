import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaGithub } from 'react-icons/fa';

import neuroEmotionImg from '../assets/NeuroEmotion.png';
import healrImg from '../assets/healr.jpg';
import simperImg from '../assets/Simper.png';
import transcriberImg from '../assets/transcriber.png';
import chatMateImg from '../assets/ChatMate.png';
import findItImg from '../assets/findit_2.jpg';
import digitRecImg from '../assets/handwritten_digit_recognition.png';
import gestureImg from '../assets/gestureDetector.png';
import dataAnalysisImg from '../assets/DataAnalysis.png';

const ProjectCard = ({ meta, title, description, tags, link, image, isHidden }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    if (isHidden) return null;

    return (
        <div className="card project-card">
            <div className="project-content">
                <div className="card-meta">{meta}</div>
                <h3>{title}</h3>
                <p className="description-text">
                    {isExpanded ? description : `${description.substring(0, 130)}... `}
                    <button className="read-more-btn" onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                </p>
                <div className="tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
                <a href={link} target="_blank" rel="noopener noreferrer" className="github-link">
                    <FaGithub /> View Code
                </a>
            </div>
            <div className="project-image">
                <img src={image} alt={title} />
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
            link: "https://github.com/KaranTejwani", // Placeholder from original
            image: simperImg
        },
        {
            meta: "Web App",
            title: "Bilingual Transcription and Translation System",
            description: "A full-stack web application built with React and Flask that leverages OpenAI Whisper for accurate speech-to-text transcription and Google Translate for bilingual conversion (English ↔ Urdu). The system supports multiple audio/video formats, provides export options (TXT, SRT, VTT, JSON), and enables session management for seamless transcription and translation workflows.",
            tags: ["React", "Flask", "OpenAI Whisper", "Google Translate"],
            link: "https://github.com/KaranTejwani/bilingual-transcriber",
            image: transcriberImg
        },
        // Hidden Projects
        {
            meta: "Desktop App",
            title: "ChatMate",
            description: "ChatMate is a local network-based chat application built in Java during my second semester. It allows users to chat across multiple devices connected to the same Wi-Fi using socket programming. The app features user authentication and persistent chat storage, reloading previous conversations upon revisit.",
            tags: ["Java", "Socket Programming", "Swing", "MySQL"],
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
            description: "Real-time hand gesture (ASL, ISL, BSL and custom gestures) recognition system for controlling computer interfaces using webcam input.",
            tags: ["OpenCV", "MediaPipe", "Python"],
            link: "https://github.com/KaranTejwani/GestureDetection",
            image: gestureImg,
            hidden: true
        },
        {
            meta: "Data Science",
            title: "Data Analysis Suite",
            description: "Comprehensive data analysis project, focusing on extracting insights from the 'Most Streamed Spotify Songs 2024' dataset obtained from Kaggle.",
            tags: ["Pandas", "Matplotlib", "Seaborn"],
            link: "https://github.com/KaranTejwani/DataAnalysis",
            image: dataAnalysisImg,
            hidden: true
        }
    ];

    const visibleProjects = showMore ? projects : projects.filter(p => !p.hidden);

    return (
        <section id="projects">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2>Featured Projects</h2>

                {visibleProjects.map((project, index) => (
                    <ProjectCard key={index} {...project} isHidden={false} />
                ))}

                <div className="show-more-container">
                    <button
                        id="showMoreBtn"
                        className="btn-secondary"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? 'Show Less' : 'Show More Projects'}
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
