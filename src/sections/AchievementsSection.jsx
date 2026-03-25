import React from 'react';
import { motion } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';
import { achievementsData } from '../data/portfolioData';

const categoryColors = {
    scholarship: { bg: 'bg-amber-500/[0.08]', border: 'border-amber-500/20', text: 'text-amber-400', label: 'Scholarship' },
    award: { bg: 'bg-emerald-500/[0.08]', border: 'border-emerald-500/20', text: 'text-emerald-400', label: 'Award' },
    academic: { bg: 'bg-accent/[0.08]', border: 'border-accent/20', text: 'text-accent', label: 'Academic' },
    competition: { bg: 'bg-violet-500/[0.08]', border: 'border-violet-500/20', text: 'text-violet-400', label: 'Competition' },
};

const AchievementsSection = () => {
    return (
        <section id="achievements" className="relative py-16 md:py-20">
            <div className="section-container">
                {/* Header */}
                <SectionReveal className="mb-10 text-center">
                    <span className="section-badge mb-3 inline-flex">Honors</span>
                    <h2 className="text-text-primary">
                        Achievements & <span className="text-gradient-gold">Honors</span>
                    </h2>
                </SectionReveal>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
                    {achievementsData.map((item, index) => {
                        const colors = categoryColors[item.category] || categoryColors.award;
                        const Icon = item.icon;
                        return (
                            <SectionReveal key={item.id} delay={index * 0.08}>
                                <motion.div
                                    whileHover={{ y: -3 }}
                                    transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                                    className="obsidian-card p-6 h-full hover:border-accent/25 transition-colors duration-500 group"
                                >
                                    <div className="flex items-start gap-4">
                                        {/* Icon */}
                                        <div className={`shrink-0 w-10 h-10 rounded-xl ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                                            <Icon size={18} className={colors.text} />
                                        </div>

                                        <div className="min-w-0">
                                            {/* Category Pill */}
                                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[0.6rem] font-bold uppercase tracking-wider ${colors.bg} ${colors.border} border ${colors.text} mb-2`}>
                                                {colors.label}
                                            </span>

                                            {/* Title */}
                                            <h3 className="text-sm font-bold text-text-primary font-display mb-1.5 group-hover:text-accent transition-colors duration-300">
                                                {item.title}
                                            </h3>

                                            {/* Subtitle */}
                                            <p className="text-xs text-text-secondary leading-relaxed">
                                                {item.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </SectionReveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
