import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Heart, Users } from 'lucide-react';
import { aboutData } from '../data/portfolioData';
import SectionReveal from '../components/SectionReveal';

const AboutSection = () => {
    const categoryColors = {
        scholarship: {
            bg: 'rgba(245, 158, 11, 0.1)',
            border: 'rgba(245, 158, 11, 0.25)',
            text: '#F59E0B',
        },
        academic: {
            bg: 'rgba(0, 210, 211, 0.1)',
            border: 'rgba(0, 210, 211, 0.25)',
            text: 'var(--accent)',
        },
    };

    return (
        <section id="about" className="py-20 md:py-28 relative">
            <div className="section-container">
                {/* ── Section Header ── */}
                <SectionReveal className="text-center mb-14">
                    <span className="section-badge mb-4 inline-flex">
                        <Heart size={14} />
                        About Me
                    </span>
                    <h2>
                        Get to know the person{' '}
                        <span className="text-gradient">behind the code</span>
                    </h2>
                </SectionReveal>

                {/* ── Bento Grid ── */}
                <div className="bento-grid">

                    {/* Card 1 — Bio Narrative (col-span-7) */}
                    <SectionReveal
                        className="col-span-12 md:col-span-7"
                        delay={0.1}
                    >
                        <motion.div
                            className="glass-card p-7 h-full flex flex-col"
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div
                                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                                    style={{
                                        background: 'rgba(0, 210, 211, 0.1)',
                                        border: '1px solid rgba(0, 210, 211, 0.2)',
                                    }}
                                >
                                    <span className="text-base">💡</span>
                                </div>
                                <h3 className="text-[var(--text-primary)]">Who I Am</h3>
                            </div>

                            <p className="text-[var(--text-secondary)] leading-relaxed text-[0.95rem] mb-5 flex-1">
                                {aboutData.bio}
                            </p>

                            <div className="glow-line my-4" />

                            <div>
                                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-2 block">
                                    Developer Identity
                                </span>
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed italic">
                                    "{aboutData.identity}"
                                </p>
                            </div>
                        </motion.div>
                    </SectionReveal>

                    {/* Card 2 — Research Interests (col-span-5) */}
                    <SectionReveal
                        className="col-span-12 md:col-span-5"
                        delay={0.2}
                    >
                        <motion.div
                            className="glass-card p-7 h-full"
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div
                                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                                    style={{
                                        background: 'rgba(124, 58, 237, 0.1)',
                                        border: '1px solid rgba(124, 58, 237, 0.2)',
                                    }}
                                >
                                    <span className="text-base">🔬</span>
                                </div>
                                <h3 className="text-[var(--text-primary)]">Research Interests</h3>
                            </div>

                            <div className="flex flex-wrap gap-2.5">
                                {aboutData.interests.map((interest) => {
                                    const Icon = interest.icon;
                                    return (
                                        <motion.div
                                            key={interest.label}
                                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border cursor-default"
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.03)',
                                                borderColor: 'var(--border-color)',
                                            }}
                                            whileHover={{
                                                borderColor: 'rgba(0, 210, 211, 0.35)',
                                                background: 'rgba(0, 210, 211, 0.06)',
                                                scale: 1.04,
                                            }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <Icon
                                                size={15}
                                                className="text-[var(--accent)]"
                                            />
                                            <span className="text-sm font-medium text-[var(--text-secondary)]">
                                                {interest.label}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </SectionReveal>

                    {/* Card 3 — Achievements & Honors (col-span-5) */}
                    <SectionReveal
                        className="col-span-12 md:col-span-5"
                        delay={0.3}
                    >
                        <motion.div
                            className="glass-card p-7 h-full"
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div
                                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                                    style={{
                                        background: 'rgba(245, 158, 11, 0.1)',
                                        border: '1px solid rgba(245, 158, 11, 0.2)',
                                    }}
                                >
                                    <span className="text-base">🏆</span>
                                </div>
                                <h3 className="text-[var(--text-primary)]">Achievements &amp; Honors</h3>
                            </div>

                            <div className="space-y-4">
                                {aboutData.achievements.map((item) => {
                                    const Icon = item.icon;
                                    const colors = categoryColors[item.category] || categoryColors.academic;
                                    return (
                                        <motion.div
                                            key={item.id}
                                            className="flex gap-3.5 items-start group"
                                            whileHover={{ x: 4 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <div
                                                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300"
                                                style={{
                                                    background: colors.bg,
                                                    border: `1px solid ${colors.border}`,
                                                }}
                                            >
                                                <Icon size={17} style={{ color: colors.text }} />
                                            </div>
                                            <div className="min-w-0">
                                                <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-0.5 leading-snug">
                                                    {item.title}
                                                </h4>
                                                <p className="text-xs text-[var(--text-muted)] leading-relaxed line-clamp-2">
                                                    {item.subtitle}
                                                </p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </SectionReveal>

                    {/* Card 4 — Community & Location (col-span-7) */}
                    <SectionReveal
                        className="col-span-12 md:col-span-7"
                        delay={0.4}
                    >
                        <motion.div
                            className="glass-card p-7 h-full"
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div
                                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                                    style={{
                                        background: 'rgba(236, 72, 153, 0.1)',
                                        border: '1px solid rgba(236, 72, 153, 0.2)',
                                    }}
                                >
                                    <Users size={16} className="text-pink-400" />
                                </div>
                                <h3 className="text-[var(--text-primary)]">Community &amp; Impact</h3>
                            </div>

                            {/* Community Work */}
                            <div className="space-y-3 mb-6">
                                {aboutData.communityWork.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors duration-300"
                                        style={{
                                            background: 'rgba(255, 255, 255, 0.02)',
                                            border: '1px solid var(--border-color)',
                                        }}
                                        whileHover={{
                                            borderColor: 'rgba(236, 72, 153, 0.25)',
                                            background: 'rgba(236, 72, 153, 0.04)',
                                        }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0" />
                                        <div className="min-w-0">
                                            <span className="text-sm font-semibold text-[var(--text-primary)]">
                                                {item.role}
                                            </span>
                                            <span className="text-sm text-[var(--text-muted)]">
                                                {' - '}
                                                {item.org}
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="glow-line mb-5" />

                            {/* Location */}
                            <div className="flex items-center gap-2.5">
                                <div
                                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                                    style={{
                                        background: 'rgba(0, 210, 211, 0.08)',
                                        border: '1px solid rgba(0, 210, 211, 0.15)',
                                    }}
                                >
                                    <MapPin size={14} className="text-[var(--accent)]" />
                                </div>
                                <div>
                                    <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-medium block">
                                        Based in
                                    </span>
                                    <span className="text-sm font-semibold text-[var(--text-primary)]">
                                        {aboutData.location}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </SectionReveal>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
