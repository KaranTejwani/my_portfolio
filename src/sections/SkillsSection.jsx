import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaDocker, FaLinux, FaGitAlt, FaJava } from 'react-icons/fa';
import {
    SiTensorflow, SiPytorch, SiOpencv, SiFlutter, SiFlask,
    SiMongodb, SiFirebase, SiExpress, SiMysql, SiKeras,
    SiNumpy, SiPandas
} from 'react-icons/si';
import SectionReveal from '../components/SectionReveal';

const skillCategories = [
    {
        id: 'ai',
        title: 'AI & ML',
        skills: [
            { name: 'Python', icon: FaPython, color: '#3776AB' },
            { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
            { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
            { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
            { name: 'Keras', icon: SiKeras, color: '#D00000' },
            { name: 'NumPy', icon: SiNumpy, color: '#4DABCF' },
            { name: 'Pandas', icon: SiPandas, color: '#E70488' },
        ],
    },
    {
        id: 'web',
        title: 'Web',
        skills: [
            { name: 'React', icon: FaReact, color: '#61DAFB' },
            { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
            { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
            { name: 'Flask', icon: SiFlask, color: '#FFFFFF' },
            { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
            { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        ],
    },
    {
        id: 'mobile',
        title: 'Mobile & Tools',
        skills: [
            { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
            { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
            { name: 'Git', icon: FaGitAlt, color: '#F05032' },
            { name: 'Docker', icon: FaDocker, color: '#2496ED' },
            { name: 'Linux', icon: FaLinux, color: '#FCC624' },
            { name: 'Java', icon: FaJava, color: '#ED8B00' },
        ],
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.04,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
    },
};

const SkillsSection = () => {
    return (
        <section id="skills" className="relative py-16 md:py-24">
            <div className="section-container relative z-10">
                {/* Header */}
                <SectionReveal className="mb-10 text-center">
                    <span className="section-badge mb-4 inline-flex">Expertise</span>
                    <h2 className="text-text-primary">
                        Technical <span className="text-gradient">Arsenal</span>
                    </h2>
                    <p className="text-text-secondary text-sm max-w-lg mx-auto">
                        Technologies and frameworks I use to bring ideas to life
                    </p>
                </SectionReveal>

                {/* All Categories — No Tabs */}
                <div className="space-y-6 max-w-4xl mx-auto">
                    {skillCategories.map((category, catIndex) => (
                        <SectionReveal key={category.id} delay={catIndex * 0.1}>
                            <div className="obsidian-card p-5 md:p-6 hover:border-[--accent]/20 transition-colors">
                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div
                                        className="w-1 h-5 rounded-full"
                                        style={{
                                            background: `linear-gradient(180deg, var(--accent) 0%, var(--accent-secondary) 100%)`,
                                        }}
                                    />
                                    <h3 className="text-sm font-bold text-text-primary uppercase tracking-[0.1em]">
                                        {category.title}
                                    </h3>
                                    <div className="glow-line flex-1" />
                                </div>

                                {/* Skills Grid */}
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: '-40px' }}
                                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
                                >
                                    {category.skills.map((skill) => (
                                        <motion.div
                                            key={skill.name}
                                            variants={itemVariants}
                                            whileHover={{
                                                y: -3,
                                                boxShadow: `0 0 20px ${skill.color}18, 0 4px 16px rgba(0,0,0,0.3)`,
                                            }}
                                            className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-opacity-40 transition-all duration-300 group cursor-default"
                                            style={{
                                                '--hover-color': skill.color,
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.borderColor = `${skill.color}50`;
                                                e.currentTarget.style.background = `${skill.color}08`;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                                            }}
                                        >
                                            <div
                                                className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
                                                style={{
                                                    background: `${skill.color}12`,
                                                }}
                                            >
                                                <skill.icon
                                                    size={18}
                                                    style={{ color: skill.color }}
                                                    className="group-hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                            <span className="text-xs font-semibold text-text-primary group-hover:text-white transition-colors duration-300 truncate">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </SectionReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
