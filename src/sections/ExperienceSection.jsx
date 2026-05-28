import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';
import { experiences } from '../data/portfolioData';

const ExperienceSection = () => {
    return (
        <section id="experience" className="relative py-16 md:py-24">
            <div className="section-container relative z-10">
                {/* Header */}
                <SectionReveal className="mb-12 text-center">
                    <span className="section-badge mb-4 inline-flex">Career</span>
                    <h2 className="text-text-primary">
                        My <span className="text-gradient">Experience</span>
                    </h2>
                    <p className="text-text-secondary text-sm max-w-lg mx-auto">
                        My professional journey - from research labs to production systems
                    </p>
                </SectionReveal>

                {/* Timeline */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Timeline Gradient Line */}
                    <div
                        className="absolute left-4 md:left-5 top-0 bottom-0 w-px"
                        style={{
                            background: 'linear-gradient(180deg, var(--accent) 0%, var(--accent-secondary) 40%, rgba(124,58,237,0.15) 80%, transparent 100%)',
                        }}
                    />

                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <SectionReveal key={exp.id} delay={index * 0.1}>
                                <div className="relative pl-12 md:pl-16">
                                    {/* Timeline Dot */}
                                    <div className="absolute left-2.5 md:left-3.5 top-6 z-10">
                                        {/* Outer ring */}
                                        <div
                                            className="w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center"
                                            style={{
                                                borderColor: exp.current ? 'var(--accent)' : 'rgba(0,210,211,0.4)',
                                                background: exp.current ? 'var(--accent)' : 'var(--bg-primary)',
                                            }}
                                        >
                                            {/* Inner dot for current */}
                                            {exp.current && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                                            )}
                                        </div>

                                        {/* Pulse animation for current role */}
                                        {exp.current && (
                                            <>
                                                <motion.span
                                                    animate={{
                                                        scale: [1, 2.2, 2.2],
                                                        opacity: [0.5, 0, 0],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: 'easeOut',
                                                    }}
                                                    className="absolute inset-0 rounded-full"
                                                    style={{ background: 'var(--accent)' }}
                                                />
                                                <motion.span
                                                    animate={{
                                                        scale: [1, 1.8, 1.8],
                                                        opacity: [0.4, 0, 0],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: 'easeOut',
                                                        delay: 0.4,
                                                    }}
                                                    className="absolute inset-0 rounded-full"
                                                    style={{ background: 'var(--accent)' }}
                                                />
                                            </>
                                        )}
                                    </div>

                                    {/* Card */}
                                    <motion.div
                                        whileHover={{ x: 4 }}
                                        transition={{ duration: 0.25 }}
                                        className="glass-card p-5 md:p-6 hover:border-[--accent]/25 transition-all duration-400"
                                    >
                                        {/* Title Row */}
                                        <div className="flex flex-wrap items-center gap-2.5 mb-2">
                                            <h3 className="text-base md:text-lg font-bold text-text-primary font-display">
                                                {exp.title}
                                            </h3>
                                            {exp.current && (
                                                <span className="px-2.5 py-0.5 rounded-full bg-[--accent]/[0.08] border border-[--accent]/20 text-[--accent] text-[0.65rem] font-semibold uppercase tracking-wider inline-flex items-center gap-1">
                                                    <span
                                                        className="w-1.5 h-1.5 rounded-full inline-block"
                                                        style={{ background: 'var(--accent)' }}
                                                    />
                                                    Current
                                                </span>
                                            )}
                                        </div>

                                        {/* Meta Row */}
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-3 text-xs">
                                            <span className="text-[--accent] font-semibold">
                                                {exp.role}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-text-muted">
                                                <Calendar size={11} className="text-text-muted/60" />
                                                {exp.duration}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-text-muted">
                                                <MapPin size={11} className="text-text-muted/60" />
                                                {exp.location}
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                            {exp.description}
                                        </p>

                                        {/* Highlight Tags */}
                                        <div className="flex flex-wrap gap-1.5">
                                            {exp.highlights.map((highlight, i) => (
                                                <span key={i} className="tag">
                                                    <ChevronRight size={9} className="text-[--accent]/60" />
                                                    {highlight}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </SectionReveal>
                        ))}
                    </div>

                    {/* Timeline End Dot */}
                    <div className="absolute left-[14px] md:left-[18px] bottom-0 w-2 h-2 rounded-full bg-white/10 border border-white/[0.08]" />
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
