import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaDocker, FaLinux, FaGitAlt } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiOpencv, SiFlutter, SiFlask, SiMongodb } from 'react-icons/si';

const Skills = () => {
    return (
        <section id="skills">
            <h2 className="mb-10">Technical Arsenal</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <SkillCategory title="AI & ML" skills={[
                    { name: 'Python', icon: <FaPython className="text-[#3776AB]" /> },
                    { name: 'TensorFlow', icon: <SiTensorflow className="text-[#FF6F00]" /> },
                    { name: 'PyTorch', icon: <SiPytorch className="text-[#EE4C2C]" /> },
                    { name: 'OpenCV', icon: <SiOpencv className="text-[#5C3EE8]" /> },
                ]} delay={0} />

                <SkillCategory title="Web" skills={[
                    { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
                    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
                    { name: 'Flask', icon: <SiFlask className="text-white" /> },
                    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
                ]} delay={0.1} />

                <SkillCategory title="Mobile" skills={[
                    { name: 'Flutter', icon: <SiFlutter className="text-[#02569B]" /> },
                ]} delay={0.2} />

                <SkillCategory title="Tools" skills={[
                    { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
                    { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" /> },
                    { name: 'Linux', icon: <FaLinux className="text-white" /> },
                ]} delay={0.3} />
            </div>
        </section>
    );
};

const SkillCategory = ({ title, skills, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="glass-panel p-6 rounded-2xl"
    >
        <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">{title}</h3>
        <div className="flex flex-col gap-3">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-accent-start/50 transition-all duration-300 hover:bg-white/10"
                >
                    <span className="text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
                    <span className="text-sm font-medium text-secondary group-hover:text-white transition-colors truncate">{skill.name}</span>
                </div>
            ))}
        </div>
    </motion.div>
);

export default Skills;
