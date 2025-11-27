import React from 'react';
import { motion } from 'framer-motion';

const ExperienceItem = ({ title, role, duration, description }) => {
    return (
        <div className="timeline-item">
            <h3>{title}</h3>
            <span className="role">{role} • {duration}</span>
            <p>{description}</p>
        </div>
    );
};

const Experience = () => {
    return (
        <section id="experience">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2>Experience</h2>

                <ExperienceItem
                    title="National Assembly of Pakistan"
                    role="Intern"
                    duration="June 2026 - Aug 2026"
                    description="As an AI intern at the Parliament House of pakistan, I developed and fully deployed a bilingual transcribing system for their internal use to transcribe and translate the proceedings and session which helped the reporting cell save time and do tasks efficiently."
                />

                <ExperienceItem
                    title="CS Society, Sukkur IBA University"
                    role="PRC Lead"
                    duration="Nov 2024 - October 2025"
                    description="I actively organize coding sessions, tech events, and peer mentorship programs to empower fellow students. Passionate about creating a collaborative ecosystem that blends innovation, learning, and real-world problem solving."
                />

                <ExperienceItem
                    title="NEP NIC Sukkur"
                    role="Incubatee"
                    duration="May 2024 - August 2024"
                    description="Incubated at NIC Sukkur (NEP NIC), where I worked on my AI-based startup Simper - an intelligent online examination system aimed at revolutionizing assessment through automation, security, and accessibility. The incubation provided mentorship, technical guidance, and entrepreneurial support to transform my vision into a scalable solution."
                />

                <div className="timeline-item">
                    <h3>Sindh Educational Organization - SEO</h3>
                    <span className="role">Member of Board of Directors • February 2025 - Present</span>
                    <p>
                        Promoted to the Board of Directors for my contributions, I now help guide SEO’s strategic decisions,
                        support organizational planning, and contribute to initiatives that enhance student learning and
                        educational outreach.
                    </p>
                    <span className="role">Public Relations Officer • February 2024 - Present</span>
                    <p>
                        As the PRO at SEO, I coordinate and host online sessions on education, scholarships, motivation,
                        career counseling, and health. I invite distinguished speakers from Pakistan and abroad, moderate
                        sessions on Zoom, and manage SEO’s public relations to strengthen outreach and impact.
                    </p>
                </div>

            </motion.div>
        </section>
    );
};

export default Experience;
