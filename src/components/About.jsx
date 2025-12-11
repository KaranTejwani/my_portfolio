import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Sparkles, Zap, Bot, Code, Users, GraduationCap } from 'lucide-react';

const About = () => {
    return (
        <section id="about">
            <h2 className="mb-8">About Me</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* (A) Who I Am */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="md:col-span-2 glass-panel p-8 rounded-2xl"
                >
                    <p className="text-lg text-secondary leading-relaxed">
                        Hello! I am a Final Year Computer Science student at Sukkur IBA University with a CGPA of 3.70.
                        My academic journey sits at the intersection of <span className="text-white font-medium">Deep Learning</span>,
                        <span className="text-white font-medium"> Neuroscience</span>, and <span className="text-white font-medium">Generative AI</span>.
                        Unlike traditional developers, I am focused on building intelligent agents and BCI (Brain-Computer Interfaces)
                        that interpret human biological signals to solve real-world problems.
                    </p>
                </motion.div>

                {/* (B) Research Interests */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="glass-panel p-6 rounded-2xl flex flex-col justify-center"
                >
                    <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                        <Brain className="text-accent-start" size={20} /> Research Interests
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        <Tag label="Deep Learning" icon={<Brain size={12} />} />
                        <Tag label="Neuroscience" icon={<Zap size={12} />} />
                        <Tag label="Generative AI" icon={<Sparkles size={12} />} />
                        <Tag label="BCI" icon={<Cpu size={12} />} />
                        <Tag label="Intelligent Agents" icon={<Bot size={12} />} />
                    </div>
                </motion.div>

                {/* (C) Developer Identity */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel p-6 rounded-2xl flex flex-col justify-center"
                >
                    <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                        <Code className="text-accent-start" size={20} /> Developer Identity
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed">
                        Beyond research, I am a versatile <span className="text-white">Full-Stack Developer</span>.
                        I recently deployed <span className="text-white">Healr</span>, a fully functional healthcare platform,
                        and engineered a comprehensive e-commerce application using <span className="text-white">Flutter</span>,
                        bridging the gap between complex algorithms and user-centric experiences.
                    </p>
                </motion.div>

                {/* (D) Community Work */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="glass-panel p-6 rounded-2xl border-l-4 border-l-accent-start/50"
                >
                    <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
                        <Users className="text-accent-start" size={20} /> Community
                    </h3>
                    <ul className="space-y-3 text-sm text-secondary">
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-start mt-2 block"></span>
                            <span>Lead at <strong>Programming Resource Centre</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-start mt-2 block"></span>
                            <span>Board Member at <strong>SEO</strong></span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-start mt-2 block"></span>
                            <span>Organized <strong>50+ sessions</strong> to empower students</span>
                        </li>
                    </ul>
                </motion.div>

                {/* (E) Future Goals */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="glass-panel p-6 rounded-2xl relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-start/10 to-accent-end/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <h3 className="text-xl font-semibold mb-2 text-white flex items-center gap-2 relative z-10">
                        <GraduationCap className="text-accent-start" size={20} /> Future Goals
                    </h3>
                    <p className="text-white/90 text-lg font-medium relative z-10 italic">
                        “Preparing for Master’s & seeking fully funded research opportunities to continue my work in AI.”
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const Tag = ({ label, icon }) => (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white hover:border-accent-start transition-colors cursor-default">
        {icon}
        {label}
    </span>
);

export default About;
