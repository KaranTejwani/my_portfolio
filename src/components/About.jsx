import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2>About Me</h2>
                <p>
                    Hello! I am a Final Year Computer Science student at Sukkur IBA University with a CGPA
                    of 3.70. My academic journey sits at the intersection of Deep
                    Learning,
                    Neuroscience, and Generative AI. Unlike traditional developers, I am
                    focused on building intelligent agents and BCI (Brain-Computer Interfaces) that
                    interpret human biological signals to solve real-world problems.
                </p>
                <p>
                    Beyond research, I am a versatile Full-Stack Developer. I recently deployed Healr,
                    a fully functional healthcare platform, and engineered a comprehensive e-commerce application using
                    Flutter, bridging the gap between complex algorithms and user-centric mobile and web
                    experiences.
                </p>
                <p>
                    I believe in the power of community. As the Lead at the Programming Resource Centre and
                    Board Member of the Sindh Educational Organization, I have organized over 50 sessions
                    to empower students. Currently, I am preparing for Master's studies and seeking fully funded research
                    scholarships to continue my work in AI and create meaningful social impact.
                </p>
            </motion.div>
        </section>
    );
};

export default About;
