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
    description: "Final year CS student at Sukkur IBA University, building at the intersection of Deep Learning, Explainable AI, and Generative AI - from research to production.",
    cvLink: "#",
    image: karanImg,
    socials: [
        { icon: Github, href: 'https://github.com/KaranTejwani' },
        { icon: Linkedin, href: 'https://linkedin.com/in/karantejwani/' },
        { icon: Mail, href: 'mailto:karantejwani48@gmail.com' },
    ]
};

export const aboutData = {
    bio: "I'm Karan Kumar, a final-year Computer Science student and AI Research Engineer focused on building explainable and trustworthy AI systems - with published work spanning Transformers, Computer Vision, and XAI.",
    identity: "Beyond research, I bring ideas to production. I've shipped Healr — a full-stack healthcare platform - and built cross-platform apps using Flutter, bridging the gap between research and real-world systems.",
    location: "Sukkur, Pakistan",
    interests: [
        { label: 'Deep Learning', icon: Brain },
        { label: 'Neuroscience', icon: Zap },
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
        id: 1, title: 'DeepNLP.ai', role: 'Research Collaborator',
        duration: 'Oct 2025 - Present', location: 'Remote',
        description: 'Collaborated on multiple research paper and conducted experiments and writings.',
        highlights: ['Research', 'Deep Learning', 'Publications'], current: true,
    },
    {
        id: 2, title: 'National Assembly of Pakistan', role: 'AI Intern',
        duration: 'June 2026 - Aug 2026', location: 'Islamabad',
        description: 'Developed and deployed a bilingual transcribing system for internal use.',
        highlights: ['OpenAI Whisper', 'Bilingual Translation', 'Production'], current: false,
    },
    {
        id: 3, title: 'CS Society', role: 'PRC Lead',
        duration: 'Nov 2024 - Oct 2025', location: 'Sukkur IBA',
        description: 'Organized coding sessions, tech events, and peer mentorship programs.',
        highlights: ['Leadership', 'Events', 'Mentorship'], current: false,
    },
    {
        id: 4, title: 'NEP NIC Sukkur', role: 'Incubatee (Simper AI)',
        duration: 'May 2024 - Aug 2024', location: 'Sukkur',
        description: 'Incubated Simper AI, an intelligent online examination system.',
        highlights: ['Startup', 'Product Dev', 'Mentorship'], current: false,
    },
];

export const projectsData = [
    {
        id: 1, category: 'ai', meta: 'Final Year Project', title: 'NeuroEmotion',
        description: 'A mobile application that interprets EEG brainwaves to analyze human emotions in real-time.',
        tags: ['Flutter', 'Python', 'TensorFlow', 'BCI'], link: 'https://github.com/orgs/NeuroEmotion',
        image: neuroEmotionImg, featured: true,
    },
    {
        id: 2, category: 'web', meta: 'Web App', title: 'Healr',
        description: 'A full-stack healthcare platform to search FDA-approved medicines, book lab tests, and consult doctors.',
        tags: ['React', 'Node.js', 'Express.js', 'MongoDB'], link: 'https://github.com/KaranTejwani/healr',
        image: healrImg, featured: true,
    },
    {
        id: 3, category: 'ai', meta: 'Startup', title: 'Simper AI',
        description: 'AI-based EdTech startup automating exam paper creation and NLP-powered answer grading.',
        tags: ['React', 'Python', 'NLP', 'OpenAI'], link: 'https://github.com/KaranTejwani',
        image: simperImg, featured: true,
    },
    {
        id: 4, category: 'web', meta: 'Web App', title: 'Bilingual Transcription',
        description: 'Full-stack app using OpenAI Whisper for speech-to-text.',
        tags: ['React', 'Flask', 'OpenAI'], link: 'https://github.com/KaranTejwani/bilingual-transcriber',
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

export const publicationsData = [
    {
        id: 1, status: 'Accepted', venue: 'IEEE EDUCON 2026',
        title: 'From Feedback to Insight: Leveraging Transformers and Explainable AI to Identify Helpful Student Reviews',
        authors: ['Zenun Kastrati', 'Dani Bux Shah', 'Sher Muhammad Daudpota', 'Ali Shariq Imnran', 'Karan Kumar'],
        topics: ['Transformers', 'Explainable AI', 'NLP', 'EdTech'],
        githubUrl: 'https://github.com/KaranTejwani',
    },
    {
        id: 2, status: 'Accepted', venue: 'IEEE ICOMER 2026',
        title: 'Analyzing the Classification-Localization Gap Between Convolutional Neural Networks and Vision Transformers for Image Manipulation Detection',
        authors: ['Karan Kumar', 'Kirti Kour'],
        topics: ['CNNs', 'ViTs', 'Explainable AI'],
        githubUrl: 'https://github.com/KaranTejwani',
    },
];
