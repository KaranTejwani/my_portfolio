import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaDocker, FaLinux, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiOpencv, SiFlutter, SiFlask, SiMongodb, SiFirebase, SiExpress, SiMysql, SiKeras, SiNumpy, SiPandas } from 'react-icons/si';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';

const skillCategories = [
    {
        id: 'ai',
        title: 'AI & ML',
        skills: [
            { name: 'Python', icon: FaPython, color: '#3776AB', level: 95 },
            { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00', level: 85 },
            { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C', level: 80 },
            { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8', level: 75 },
            { name: 'Keras', icon: SiKeras, color: '#D00000', level: 85 },
            { name: 'NumPy', icon: SiNumpy, color: '#013243', level: 90 },
            { name: 'Pandas', icon: SiPandas, color: '#150458', level: 88 },
        ],
    },
    {
        id: 'web',
        title: 'Web',
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
        id: 'mobile',
        title: 'Mobile',
        skills: [
            { name: 'Flutter', icon: SiFlutter, color: '#02569B', level: 85 },
            { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', level: 80 },
        ],
    },
    {
        id: 'tools',
        title: 'Tools',
        skills: [
            { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 90 },
            { name: 'Docker', icon: FaDocker, color: '#2496ED', level: 70 },
            { name: 'Linux', icon: FaLinux, color: '#FCC624', level: 75 },
            { name: 'Java', icon: FaJava, color: '#ED8B00', level: 65 },
        ],
    },
];

const SkillsPage = () => {
    const [activeCategory, setActiveCategory] = useState('ai');
    const activeSkills = skillCategories.find(c => c.id === activeCategory);

    return (
        <PageTransition>
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                    Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start to-accent-end">Skills</span>
                </h1>
                <p className="text-secondary">Technologies and tools I work with</p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
                {skillCategories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 ${activeCategory === cat.id
                                ? 'bg-gradient-to-r from-accent-start to-accent-end text-white'
                                : 'bg-white/5 border border-white/10 text-secondary hover:text-white hover:border-accent-start/40'
                            }`}
                    >
                        {cat.title}
                    </button>
                ))}
            </div>

            {/* Skills Display */}
            <GlassCard className="p-6 mb-10">
                <h2 className="text-xl font-bold text-white mb-5">{activeSkills.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeSkills.skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.03, duration: 0.15 }}
                            className="group"
                        >
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent-start/40 transition-all duration-150">
                                {/* Icon */}
                                <div
                                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                                    style={{ backgroundColor: `${skill.color}15` }}
                                >
                                    <skill.icon size={20} style={{ color: skill.color }} />
                                </div>

                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-1.5">
                                        <span className="text-base font-medium text-white">{skill.name}</span>
                                        <span className="text-sm text-secondary">{skill.level}%</span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ delay: 0.1 + index * 0.02, duration: 0.4 }}
                                            className="h-full rounded-full"
                                            style={{ backgroundColor: skill.color }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </GlassCard>

            {/* Quick Overview */}
            <div>
                <h3 className="text-base font-bold text-white mb-4">All Skills</h3>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                    {skillCategories.flatMap(cat => cat.skills).map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.01, duration: 0.15 }}
                            className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-accent-start/40 transition-all duration-150"
                        >
                            <skill.icon size={20} style={{ color: skill.color }} />
                            <span className="text-xs text-secondary text-center truncate w-full">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </PageTransition>
    );
};

export default SkillsPage;
