import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaDocker, FaLinux, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiOpencv, SiFlutter, SiFlask, SiMongodb, SiFirebase, SiExpress, SiMysql, SiKeras, SiNumpy, SiPandas } from 'react-icons/si';
import SectionReveal from '../components/SectionReveal';

const skillCategories = [
    {
        id: 'ai', title: 'AI & ML',
        skills: [
            { name: 'Python', icon: FaPython, color: '#3776AB', level: 95 },
            { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00', level: 85 },
            { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C', level: 80 },
            { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8', level: 75 },
            { name: 'Keras', icon: SiKeras, color: '#D00000', level: 85 },
            { name: 'NumPy', icon: SiNumpy, color: '#4DABCF', level: 90 },
            { name: 'Pandas', icon: SiPandas, color: '#E70488', level: 88 },
        ],
    },
    {
        id: 'web', title: 'Web',
        skills: [
            { name: 'React', icon: FaReact, color: '#61DAFB', level: 90 },
            { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 85 },
            { name: 'Express', icon: SiExpress, color: '#FFFFFF', level: 85 },
            { name: 'Flask', icon: SiFlask, color: '#FFFFFF', level: 80 },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 75 },
            { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 70 },
        ],
    },
    {
        id: 'mobile', title: 'Mobile',
        skills: [
            { name: 'Flutter', icon: SiFlutter, color: '#02569B', level: 85 },
            { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', level: 80 },
        ],
    },
    {
        id: 'tools', title: 'Tools',
        skills: [
            { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 90 },
            { name: 'Docker', icon: FaDocker, color: '#2496ED', level: 70 },
            { name: 'Linux', icon: FaLinux, color: '#FCC624', level: 75 },
            { name: 'Java', icon: FaJava, color: '#ED8B00', level: 65 },
        ],
    },
];

// Circular progress ring component
const ProgressRing = ({ level, color, size = 52 }) => {
    const strokeWidth = 2.5;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (level / 100) * circumference;

    return (
        <svg width={size} height={size} className="transform -rotate-90">
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="rgba(255,255,255,0.04)"
                strokeWidth={strokeWidth}
            />
            <motion.circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                whileInView={{ strokeDashoffset: offset }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            />
        </svg>
    );
};

const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState('ai');
    const activeSkills = skillCategories.find(c => c.id === activeCategory);

    return (
        <section id="skills" className="relative py-16 md:py-20">
            <div className="section-container relative z-10">
                {/* Header */}
                <SectionReveal className="mb-8 text-center">
                    <span className="section-badge mb-3 inline-flex">Expertise</span>
                    <h2 className="text-text-primary">
                        Technical <span className="text-accent">Skills</span>
                    </h2>
                    <p className="text-text-secondary text-sm">Technologies and tools I work with daily</p>
                </SectionReveal>

                {/* Category Tabs */}
                <SectionReveal className="flex justify-center flex-wrap gap-2 mb-8" delay={0.1}>
                    {skillCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${activeCategory === cat.id
                                    ? 'bg-accent text-black font-semibold shadow-glow'
                                    : 'border border-white/[0.06] text-text-secondary hover:text-text-primary hover:border-accent/30 bg-white/[0.02]'
                                }`}
                        >
                            {cat.title}
                        </button>
                    ))}
                </SectionReveal>

                {/* Skills Grid with Ring Progress */}
                <SectionReveal delay={0.15}>
                    <div className="obsidian-card p-5 md:p-7 mb-8 hover:border-accent/20 transition-colors max-w-3xl mx-auto">
                        <h3 className="text-lg font-bold text-text-primary font-display mb-6 text-center">{activeSkills.title}</h3>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                            >
                                {activeSkills.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.04, duration: 0.3 }}
                                        whileHover={{ y: -3 }}
                                        className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-accent/30 hover:bg-accent/[0.03] transition-all duration-300 group cursor-default"
                                    >
                                        <div className="relative">
                                            <ProgressRing level={skill.level} color={skill.color} />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <skill.icon size={20} style={{ color: skill.color }} className="group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xs font-semibold text-text-primary group-hover:text-accent transition-colors">{skill.name}</div>
                                            <div className="text-[0.65rem] text-text-muted mt-0.5">{skill.level}%</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
};

export default SkillsSection;
