import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
const ProgressRing = ({ level, color, size = 56 }) => {
    const strokeWidth = 3;
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
                stroke="rgba(245,245,247,0.04)"
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
        <section id="skills" className="relative py-28 md:py-36">
            <div className="absolute inset-0 pointer-events-none">
                <div className="ambient-orb ambient-orb-warm w-[300px] h-[300px] bottom-0 -left-24 animate-float opacity-15" />
            </div>

            <div className="section-container relative z-10">
                {/* Header */}
                <SectionReveal className="mb-12">
                    <span className="section-badge mb-4 inline-flex">Expertise</span>
                    <h2 className="text-text-primary">
                        Technical <span className="text-gradient-gold">Skills</span>
                    </h2>
                    <p className="text-text-secondary">Technologies and tools I work with</p>
                </SectionReveal>

                {/* Category Tabs */}
                <SectionReveal className="flex flex-wrap gap-2 mb-10" delay={0.1}>
                    {skillCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${activeCategory === cat.id
                                    ? 'bg-accent text-bg-primary font-semibold shadow-glow'
                                    : 'border border-border text-text-secondary hover:text-text-primary hover:border-accent/30'
                                }`}
                        >
                            {cat.title}
                        </button>
                    ))}
                </SectionReveal>

                {/* Skills Grid with Ring Progress */}
                <SectionReveal delay={0.15}>
                    <div className="obsidian-card p-6 md:p-8 mb-10">
                        <h3 className="text-xl font-bold text-text-primary font-display mb-6">{activeSkills.title}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {activeSkills.skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05, duration: 0.3 }}
                                    className="flex flex-col items-center gap-3 p-4 rounded-xl border border-border hover:border-accent/20 transition-all duration-300 group"
                                >
                                    <div className="relative">
                                        <ProgressRing level={skill.level} color={skill.color} />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <skill.icon size={20} style={{ color: skill.color }} className="group-hover:scale-110 transition-transform" />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-sm font-medium text-text-primary">{skill.name}</div>
                                        <div className="text-xs text-text-muted">{skill.level}%</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </SectionReveal>

                {/* All Skills Compact Grid */}
                <SectionReveal delay={0.25}>
                    <h3 className="text-base font-bold text-text-primary font-display mb-4">All Skills</h3>
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
                        {skillCategories.flatMap(cat => cat.skills).map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.02, duration: 0.3 }}
                                className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-border hover:border-accent/20 transition-all duration-300 cursor-default"
                            >
                                <skill.icon size={20} style={{ color: skill.color }} />
                                <span className="text-xs text-text-muted text-center truncate w-full">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
};

export default SkillsSection;
