import React from 'react';
import { motion } from 'framer-motion';

const ExperienceItem = ({ title, role, duration, description }) => {
    return (
        <div className="relative pl-8 pb-12 border-l border-white/10 last:pb-0 group">
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-background border-2 border-secondary group-hover:border-accent-start group-hover:bg-accent-start transition-colors duration-300 shadow-[0_0_0_4px_rgba(11,12,15,1)]"></div>

            <div className="group-hover:translate-x-1 transition-transform duration-300">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent-start transition-colors">{title}</h3>
                <div className="text-sm font-medium text-accent-start mb-3">{role} • <span className="text-secondary">{duration}</span></div>
                <p className="text-secondary text-sm leading-relaxed max-w-2xl">
                    {description}
                </p>
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <section id="experience">
            <h2 className="mb-8">Experience</h2>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="ml-2"
            >
                <ExperienceItem
                    title="National Assembly of Pakistan"
                    role="AI Intern"
                    duration="June 2026 - Aug 2026"
                    description="Developed and deployed a bilingual transcribing system for internal use to transcribe and translate proceedings, significantly improving efficiency for the reporting cell."
                />

                <ExperienceItem
                    title="Propulsion (CS Society)"
                    role="PRC Lead"
                    duration="Nov 2024 - October 2025"
                    description="Organized coding sessions, tech events, and peer mentorship programs. Fostered a collaborative ecosystem blending innovation and learning."
                />

                <ExperienceItem
                    title="NEP NIC Sukkur"
                    role="Incubatee (Simper AI)"
                    duration="May 2024 - August 2024"
                    description="Incubated Simper AI, an intelligent online examination system. Leveraged mentorship and technical guidance to refine the product for scalability."
                />

                {/* Combined SEO entry */}
                <div className="relative pl-8 pb-12 border-l border-white/10 last:pb-0 group">
                    <div className="absolute left-[-5px] top-1.5 w-[9px] h-[9px] rounded-full bg-background border-2 border-secondary group-hover:border-accent-start group-hover:bg-accent-start transition-colors duration-300 shadow-[0_0_0_4px_rgba(11,12,15,1)]"></div>
                    <div className="group-hover:translate-x-1 transition-transform duration-300">
                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent-start transition-colors">Sindh Educational Organization (SEO)</h3>

                        <div className="mb-4">
                            <div className="text-sm font-medium text-accent-start mb-1">Member of Board of Directors • <span className="text-secondary">Feb 2025 - Present</span></div>
                            <p className="text-secondary text-sm leading-relaxed max-w-2xl">
                                Guiding strategic decisions, organizational planning, and educational outreach initiatives.
                            </p>
                        </div>

                        <div>
                            <div className="text-sm font-medium text-accent-start mb-1">Public Relations Officer • <span className="text-secondary">Feb 2024 - Present</span></div>
                            <p className="text-secondary text-sm leading-relaxed max-w-2xl">
                                Coordinating online sessions on education and career counseling. Managing public relations and hosting distinguished speakers.
                            </p>
                        </div>
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default Experience;
