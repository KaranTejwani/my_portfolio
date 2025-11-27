import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaCode, FaTools } from 'react-icons/fa';

const Skills = () => {
    return (
        <section id="skills">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2>Technical Arsenal</h2>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h3><FaBrain /> AI & Deep Learning</h3>
                        <div className="skill-tags">
                            <span>Machine Learning</span>
                            <span>Deep Learning</span>
                            <span>NLP</span>
                            <span>Gen AI</span>
                            <span>LLMs</span>
                            <span>Computer Vision</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3><FaCode /> Web & Mobile</h3>
                        <div className="skill-tags">
                            <span>MERN Stack</span>
                            <span>React</span>
                            <span>MongoDB</span>
                            <span>Flutter</span>
                            <span>Dart</span>
                            <span>Firebase</span>
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3><FaTools /> Tools & Cloud</h3>
                        <div className="skill-tags">
                            <span>Git</span>
                            <span>Docker</span>
                            <span>AWS</span>
                            <span>Figma</span>
                            <span>Linux</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
