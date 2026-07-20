import { Github, Linkedin, Mail, Brain, Zap, Sparkles, Bot, Cpu, Code, Users, GraduationCap, MapPin, Calendar, ChevronRight, FileText, Clock, Award, Laptop, Mic, BookOpen } from 'lucide-react';

// Images
import karanImg from '../assets/Karan.png';
import neuroEmotionImg from '../assets/NeuroEmotion.png';
import healrImg from '../assets/healr.jpg';
import simperImg from '../assets/Simper.png';
import transcriberImg from '../assets/transcriber.png';
import chatMateImg from '../assets/ChatMate.png';
import findItImg from '../assets/findit_2.jpg';
import digitRecImg from '../assets/handwritten_digit_recognition.png';
import gestureImg from '../assets/gestureDetector.png';
import dataAnalysisImg from '../assets/DataAnalysis.png';
import image_manipulationImg from '../assets/image_manipulation.png';

// Conference Logos
import educonLogo from '../assets/educon_logo.png';
import icometLogo from '../assets/iCoMET_logo.png';

// CV
import cvFile from '../assets/CV.pdf';

export const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Research', href: '#research' },
    { label: 'Contact', href: '#contact' },
];

export const heroData = {
    name: "Karan Kumar",
    roles: ["AI Research Engineer", "Deep Learning Engineer", "Full-Stack Developer", "Published Researcher"],
    description: "CS graduate from Sukkur IBA University, building at the intersection of Deep Learning, Explainable AI, and Neuroscience - from rigorous research to production systems.",
    cvLink: cvFile,
    image: karanImg,
    stats: [
        { label: 'Publications', value: '2' },
        { label: 'Experiences', value: '4' },
        { label: 'Projects', value: '9+' },
    ],
    socials: [
        { icon: Github, href: 'https://github.com/KaranTejwani', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com/in/karantejwani/', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:karantejwani48@gmail.com', label: 'Email' },
    ]
};

export const aboutData = {
    bio: "I'm Karan Kumar, an AI Research Engineer focused on building explainable and trustworthy AI systems - with two accepted publications at IEEE venues spanning Transformers, Computer Vision, and XAI. My final year project, NeuroEmotion, benchmarked 18 deep learning models across two officially acquired EEG datasets with multiple preprocessing pipelines for real-time emotion recognition - culminating in a deployed mobile application that classifies emotions directly from brainwave signals.",
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
    ],
    achievements: [
        {
            id: 1, icon: GraduationCap, title: 'STHP Fully Funded Scholarship',
            subtitle: 'Awarded a prestigious fully funded scholarship under the Sindh Talent Hunt Program on merit-based for four years of undergraduate studies.',
            category: 'scholarship',
        },
        {
            id: 2, icon: Laptop, title: 'Prime Minister Laptop Scheme',
            subtitle: 'Received a laptop under the PM Laptop Scheme in recognition of outstanding academic performance.',
            category: 'scholarship',
        },
        {
            id: 3, icon: BookOpen, title: 'IEEE EDUCON 2026 - Technical Reviewer',
            subtitle: 'Reviewed two research papers as an official reviewer for IEEE EDUCON 2026, a top education technology conference.',
            category: 'academic',
        },
    ],
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
        id: 4, category: 'ai', meta: 'Computer Vision', title: 'Image Manipulation Detection and Segmentation',
        description: 'Computer Vision based forensic suite detecting image tampering, forgery & manipulation using dual deep learning models for classification & segmentation.',
        tags: ['Python', 'TensorFlow', 'Computer Vision', 'Image Segmentation'], link: 'https://github.com/KaranTejwani/image-manipulation-segmentation',
        image: image_manipulationImg,
    },
    {
        id: 5, category: 'web', meta: 'Web App', title: 'Bilingual Transcription System',
        description: 'Production-grade bilingual speech-to-text system built with OpenAI Whisper - deployed at the National Assembly of Pakistan for internal use.',
        tags: ['React', 'Flask', 'OpenAI Whisper', 'Production'], link: 'https://github.com/KaranTejwani/bilingual-transcriber',
        image: transcriberImg,
    },
    {
        id: 6, category: 'other', meta: 'Desktop', title: 'ChatMate',
        description: 'Local network chat application with real-time socket programming and user authentication.',
        tags: ['Java', 'MySQL'], link: 'https://github.com/KaranTejwani/ChatMate',
        image: chatMateImg,
    },
    {
        id: 7, category: 'mobile', meta: 'Mobile', title: 'FindIt',
        description: 'Community-driven lost and found mobile application.',
        tags: ['Flutter', 'Firebase'], link: 'https://github.com/KaranTejwani/finddd',
        image: findItImg,
    },
    {
        id: 8, category: 'ai', meta: 'Computer Vision', title: 'Digit Recognition',
        description: 'Deep learning model for handwritten digit recognition using convolutional neural networks.',
        tags: ['Python', 'TensorFlow', 'CNNs'], link: 'https://github.com/KaranTejwani/Handwritten_Digit_Recognition',
        image: digitRecImg,
    },
    {
        id: 9, category: 'ai', meta: 'HCI', title: 'Gesture Detector',
        description: 'Real-time hand gesture recognition system using webcam and computer vision.',
        tags: ['OpenCV', 'Python'], link: 'https://github.com/KaranTejwani/GestureDetection',
        image: gestureImg,
    },
    {
        id: 10, category: 'other', meta: 'Data Analysis', title: 'Spotify Data Analysis',
        description: 'Exploratory data analysis and insights extracted from the Spotify 2024 dataset.',
        tags: ['Python', 'Pandas', 'Data Visualization'], link: 'https://github.com/KaranTejwani/DataAnalysis',
        image: dataAnalysisImg,
    },
];

export const publicationsData = [
    {
        id: 1, status: 'Presented', venue: 'IEEE EDUCON 2026',
        title: 'From Feedback to Insight: Leveraging Transformers and Explainable AI to Identify Helpful Student Reviews',
        authors: ['Zenun Kastrati', 'Dani Bux Shah', 'Sher Muhammad Daudpota', 'Ali Shariq Imran', 'Karan Kumar'],
        topics: ['Transformers', 'Explainable AI', 'NLP', 'EdTech'],
        githubUrl: 'https://github.com/KaranTejwani',
        publicationUrl: 'https://ieeexplore.ieee.org/document/11574470/',
        logo: educonLogo,
    },
    {
        id: 2, status: 'Presented', venue: 'IEEE iCoMET 2026',
        title: 'Analyzing the Classification-Localization Gap Between Convolutional Neural Networks and Vision Transformers for Image Manipulation Detection',
        authors: ['Karan Kumar', 'Kirti Kour'],
        topics: ['CNNs', 'Vision Transformers', 'Explainable AI', 'Computer Vision'],
        githubUrl: 'https://github.com/KaranTejwani',
        publicationUrl: 'https://ieeexplore.ieee.org/document/11592040/',
        logo: icometLogo,
    },
];
