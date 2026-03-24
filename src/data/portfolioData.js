import { Github, Linkedin, Mail, Brain, Zap, Sparkles, Bot, Cpu, Code, Users, GraduationCap, MapPin, Calendar, ChevronRight, FileText, Clock } from 'lucide-react';

// Images
import karanImg from '../assets/Karan.jpg';
import neuroEmotionImg from '../assets/NeuroEmotion.png';
import healrImg from '../assets/healr.jpg';
import simperImg from '../assets/Simper.png';
import transcriberImg from '../assets/transcriber.png';
import chatMateImg from '../assets/ChatMate.png';
import findItImg from '../assets/findit_2.jpg';
import digitRecImg from '../assets/handwritten_digit_recognition.png';
import gestureImg from '../assets/gestureDetector.png';
import dataAnalysisImg from '../assets/DataAnalysis.png';

export const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Research', href: '#research' },
    { label: 'Contact', href: '#contact' },
];

export const heroData = {
    greeting: "Hello, It's Me",
    name: "Karan Kumar",
    role: "And I'm an AI Research Engineer",
    description: "Final year CS student at Sukkur IBA University, building at the intersection of Deep Learning, Explainable AI, and Neuroscience - from rigorous research to production systems.",
    cvLink: "#",
    image: karanImg,
    socials: [
        { icon: Github, href: 'https://github.com/KaranTejwani' },
        { icon: Linkedin, href: 'https://linkedin.com/in/karantejwani/' },
        { icon: Mail, href: 'mailto:karantejwani48@gmail.com' },
    ]
};

export const aboutData = {
    bio: "I'm Karan Kumar, a final-year Computer Science student and AI Research Engineer focused on building explainable and trustworthy AI systems - with two accepted publications at IEEE venues spanning Transformers, Computer Vision, and XAI. My final year project, NeuroEmotion, benchmarked 18 deep learning models across two officially acquired EEG datasets with multiple preprocessing pipelines for real-time emotion recognition - culminating in a deployed mobile application that classifies emotions directly from brainwave signals.",
    identity: "I don't just research - I ship. From a production healthcare platform to a bilingual transcription system deployed at the National Assembly of Pakistan, I build systems that take ideas from experiment to the real world.",
    location: "Sukkur, Pakistan",
    interests: [
        { label: 'Deep Learning', icon: Brain },
        { label: 'Neuroscience & BCI', icon: Zap },
        { label: 'Generative AI', icon: Sparkles },
        { label: 'Large Language Models', icon: Bot },
        { label: 'XAI', icon: Cpu },
        { label: 'Intelligent Agents', icon: Bot },
    ],
    communityWork: [
        { role: 'Lead', org: 'Programming Resource Centre' },
        { role: 'Board Member', org: 'Sindh Educational Organization' },
        { role: 'Organized', org: '50+ online sessions for students' },
    ]
};

export const experiences = [
    {
        id: 1, title: 'deep-nlp.net', role: 'Research Collaborator',
        duration: 'Oct 2025 - Present', location: 'Remote',
        description: 'Collaborated on multiple research projects resulting in accepted IEEE publications, conducting experiments in Transformers, XAI, and NLP.',
        highlights: ['Research', 'Deep Learning', 'IEEE Publications'], current: true,
    },
    {
        id: 2, title: 'National Assembly of Pakistan', role: 'AI Intern',
        duration: 'June 2025 - Aug 2025', location: 'Islamabad',
        description: 'Developed and deployed a production-grade bilingual transcription system using OpenAI Whisper for internal parliamentary use.',
        highlights: ['OpenAI Whisper', 'Bilingual Translation', 'Production Deployment'], current: false,
    },
    {
        id: 3, title: 'CS Society', role: 'PRC Lead',
        duration: 'Nov 2024 - Oct 2025', location: 'Sukkur IBA',
        description: 'Led the Programming Resource Centre - organizing coding sessions, technical events, and peer mentorship programs for 200+ students.',
        highlights: ['Leadership', 'Events', 'Mentorship'], current: false,
    },
    {
        id: 4, title: 'NEP NIC Sukkur', role: 'Incubatee (Simper AI)',
        duration: 'May 2024 - Aug 2024', location: 'Sukkur',
        description: 'Incubated Simper AI - an NLP-powered intelligent examination system - through a nationally recognized startup incubation program.',
        highlights: ['Startup', 'Product Development', 'NLP'], current: false,
    },
];

export const projectsData = [
    {
        id: 1, category: 'ai', meta: 'Final Year Project', title: 'NeuroEmotion',
        description: 'Benchmarked 18 deep learning models across two officially acquired EEG datasets with multiple preprocessing techniques. Trained the best-performing model and deployed a mobile application that classifies human emotions in real-time from raw brainwave signals via EEG.',
        tags: ['Flutter', 'Python', 'TensorFlow', 'EEG', 'BCI', 'Signal Processing'], link: 'https://github.com/orgs/NeuroEmotion',
        image: neuroEmotionImg, featured: true,
    },
    {
        id: 2, category: 'web', meta: 'Web App', title: 'Healr',
        description: 'A full-stack healthcare platform to search FDA-approved medicines, book lab tests, and consult doctors - built and deployed end-to-end.',
        tags: ['React', 'Node.js', 'Express.js', 'MongoDB'], link: 'https://github.com/KaranTejwani/healr',
        image: healrImg, featured: true,
    },
    {
        id: 3, category: 'ai', meta: 'Startup', title: 'Simper AI',
        description: 'AI-based EdTech startup automating exam paper generation and NLP-powered answer grading - incubated at NEP NIC Sukkur.',
        tags: ['React', 'Python', 'NLP', 'OpenAI'], link: 'https://github.com/KaranTejwani',
        image: simperImg, featured: true,
    },
    {
        id: 4, category: 'web', meta: 'Web App', title: 'Bilingual Transcription System',
        description: 'Production-grade bilingual speech-to-text system built with OpenAI Whisper - deployed at the National Assembly of Pakistan for internal use.',
        tags: ['React', 'Flask', 'OpenAI Whisper', 'Production'], link: 'https://github.com/KaranTejwani/bilingual-transcriber',
        image: transcriberImg,
    },
    {
        id: 5, category: 'other', meta: 'Desktop', title: 'ChatMate',
        description: 'Local network chat application with real-time socket programming and user authentication.',
        tags: ['Java', 'MySQL'], link: 'https://github.com/KaranTejwani/ChatMate',
        image: chatMateImg,
    },
    {
        id: 6, category: 'mobile', meta: 'Mobile', title: 'FindIt',
        description: 'Community-driven lost and found mobile application.',
        tags: ['Flutter', 'Firebase'], link: 'https://github.com/KaranTejwani/finddd',
        image: findItImg,
    },
    {
        id: 7, category: 'ai', meta: 'Computer Vision', title: 'Digit Recognition',
        description: 'Deep learning model for handwritten digit recognition using convolutional neural networks.',
        tags: ['Python', 'TensorFlow', 'CNNs'], link: 'https://github.com/KaranTejwani/Handwritten_Digit_Recognition',
        image: digitRecImg,
    },
    {
        id: 8, category: 'ai', meta: 'HCI', title: 'Gesture Detector',
        description: 'Real-time hand gesture recognition system using webcam and computer vision.',
        tags: ['OpenCV', 'Python'], link: 'https://github.com/KaranTejwani/GestureDetection',
        image: gestureImg,
    },
    {
        id: 9, category: 'other', meta: 'Data Analysis', title: 'Spotify Data Analysis',
        description: 'Exploratory data analysis and insights extracted from the Spotify 2024 dataset.',
        tags: ['Python', 'Pandas', 'Data Visualization'], link: 'https://github.com/KaranTejwani/DataAnalysis',
        image: dataAnalysisImg,
    },
];

export const publicationsData = [
    {
        id: 1, status: 'Accepted', venue: 'IEEE EDUCON 2026',
        title: 'From Feedback to Insight: Leveraging Transformers and Explainable AI to Identify Helpful Student Reviews',
        authors: ['Zenun Kastrati', 'Dani Bux Shah', 'Sher Muhammad Daudpota', 'Ali Shariq Imran', 'Karan Kumar'],
        topics: ['Transformers', 'Explainable AI', 'NLP', 'EdTech'],
        githubUrl: 'https://github.com/KaranTejwani',
    },
    {
        id: 2, status: 'Accepted', venue: 'IEEE ICOMER 2026',
        title: 'Analyzing the Classification-Localization Gap Between Convolutional Neural Networks and Vision Transformers for Image Manipulation Detection',
        authors: ['Karan Kumar', 'Kirti Kour'],
        topics: ['CNNs', 'Vision Transformers', 'Explainable AI', 'Computer Vision'],
        githubUrl: 'https://github.com/KaranTejwani',
    },
];