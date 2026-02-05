import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';

const experiences = [
    {
        id: 1,
        title: 'National Assembly of Pakistan',
        role: 'AI Intern',
        duration: 'June 2026 - Aug 2026',
        location: 'Islamabad',
        description: 'Developed and deployed a bilingual transcribing system for internal use.',
        highlights: ['OpenAI Whisper', 'Bilingual Translation', 'Production'],
        current: true,
    },
    {
        id: 2,
        title: 'Propulsion (CS Society)',
        role: 'PRC Lead',
        duration: 'Nov 2024 - Oct 2025',
        location: 'Sukkur IBA',
        description: 'Organized coding sessions, tech events, and peer mentorship programs.',
        highlights: ['Leadership', 'Events', 'Mentorship'],
    },
    {
        id: 3,
        title: 'NEP NIC Sukkur',
        role: 'Incubatee (Simper AI)',
        duration: 'May 2024 - Aug 2024',
        location: 'Sukkur',
        description: 'Incubated Simper AI, an intelligent online examination system.',
        highlights: ['Startup', 'Product Dev', 'Mentorship'],
    },
    {
        id: 4,
        title: 'Sindh Educational Organization',
        role: 'Board of Directors',
        duration: 'Feb 2024 - Present',
        location: 'Sindh',
        description: 'Guiding strategic decisions and educational outreach initiatives.',
        highlights: ['Strategy', 'PR', 'Outreach'],
        current: true,
    },
];

const ExperiencePage = () => {
    return (
        <PageTransition>
            {/* Page Header */}
            <div className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                    My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start to-accent-end">Experience</span>
                </h1>
                <p className="text-secondary">Professional journey and key milestones</p>
            </div>

            {/* Timeline */}
            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-accent-start via-accent-end/50 to-transparent" />

                {/* Experience Items */}
                <div className="space-y-5">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.2 }}
                            className="relative pl-12 md:pl-14"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-2.5 md:left-3.5 top-5 w-3 h-3 rounded-full bg-background border-2 border-accent-start z-10">
                                {exp.current && (
                                    <span className="absolute inset-0 rounded-full bg-accent-start animate-ping opacity-40" />
                                )}
                            </div>

                            <GlassCard className="p-5" delay={0}>
                                {/* Header */}
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <h3 className="text-base font-bold text-white">
                                        {exp.title}
                                    </h3>
                                </div>

                                {/* Role & Duration */}
                                <div className="flex flex-wrap gap-4 mb-3 text-sm">
                                    <span className="text-accent-start font-medium">{exp.role}</span>
                                    <span className="flex items-center gap-1.5 text-secondary">
                                        <Calendar size={14} />
                                        {exp.duration}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-secondary">
                                        <MapPin size={14} />
                                        {exp.location}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-secondary text-sm leading-relaxed mb-4">
                                    {exp.description}
                                </p>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-1.5">
                                    {exp.highlights.map((highlight, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/70"
                                        >
                                            <ChevronRight size={10} className="text-accent-start" />
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </PageTransition>
    );
};

export default ExperiencePage;
