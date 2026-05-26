import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { heroData } from '../data/portfolioData';

const TYPING_SPEED = 80;
const DELETING_SPEED = 45;
const PAUSE_AFTER_TYPED = 2200;
const PAUSE_AFTER_DELETED = 500;

const HeroSection = ({ scrollToSection }) => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    const currentRole = heroData.roles[roleIndex];

    const handleTyping = useCallback(() => {
        if (!isDeleting) {
            // Typing forward
            if (displayText.length < currentRole.length) {
                return setTimeout(() => {
                    setDisplayText(currentRole.slice(0, displayText.length + 1));
                }, TYPING_SPEED);
            } else {
                // Finished typing — pause then start deleting
                return setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPED);
            }
        } else {
            // Deleting
            if (displayText.length > 0) {
                return setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, DELETING_SPEED);
            } else {
                // Finished deleting — move to next role
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % heroData.roles.length);
                return setTimeout(() => {}, PAUSE_AFTER_DELETED);
            }
        }
    }, [displayText, isDeleting, currentRole]);

    useEffect(() => {
        const timer = handleTyping();
        return () => clearTimeout(timer);
    }, [handleTyping]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
        },
    };

    const photoVariants = {
        hidden: { opacity: 0, scale: 0.8, x: 40 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 0.9, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 },
        },
    };

    return (
        <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden">
            {/* ── Floating Orbs ── */}
            <div className="orb orb-1" style={{ top: '-10%', left: '-8%' }} />
            <div className="orb orb-2" style={{ bottom: '-5%', right: '-5%' }} />
            <div className="orb orb-3" style={{ top: '40%', right: '20%' }} />

            <div className="section-container w-full relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

                    {/* ── Left: Text Content ── */}
                    <motion.div
                        className="flex-1 max-w-2xl"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Availability Badge */}
                        <motion.div variants={itemVariants} className="mb-6">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.2)] text-sm font-medium text-emerald-400">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                                </span>
                                Available for collaboration
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            variants={itemVariants}
                            className="font-display mb-4 tracking-tight"
                        >
                            <span className="text-[var(--text-primary)]">{heroData.name.split(' ')[0]}</span>{' '}
                            <span className="text-shimmer">{heroData.name.split(' ').slice(1).join(' ')}</span>
                        </motion.h1>

                        {/* Typing Role */}
                        <motion.div variants={itemVariants} className="mb-5">
                            <div className="flex items-center gap-2 text-lg md:text-xl font-medium">
                                <span className="text-[var(--accent)] font-semibold">&gt;</span>
                                <span className="typing-cursor text-[var(--text-primary)]">
                                    {displayText}
                                </span>
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-8 max-w-xl"
                        >
                            {heroData.description}
                        </motion.p>

                        {/* Stats Bar */}
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-0 mb-8"
                        >
                            {heroData.stats.map((stat, i) => (
                                <React.Fragment key={stat.label}>
                                    {i > 0 && (
                                        <div className="w-px h-10 bg-[var(--border-color)] mx-5 md:mx-7" />
                                    )}
                                    <div className="text-center">
                                        <div className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] font-display stat-animate">
                                            {stat.value}
                                        </div>
                                        <div className="text-xs md:text-sm text-[var(--text-muted)] uppercase tracking-wider mt-1 font-medium">
                                            {stat.label}
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                        </motion.div>

                        {/* Actions Row: Socials + CTA */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap items-center gap-5"
                        >
                            {/* Download CV */}
                            <a
                                href={heroData.cvLink}
                                className="btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FileText size={16} />
                                Download CV
                            </a>

                            {/* Social Icons */}
                            <div className="flex items-center gap-3">
                                {heroData.socials.map((social) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="flex items-center justify-center w-11 h-11 rounded-xl border border-[var(--border-color)] bg-[rgba(255,255,255,0.02)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[rgba(0,210,211,0.3)] hover:bg-[rgba(0,210,211,0.06)] transition-all duration-300"
                                            whileHover={{ y: -3, scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Icon size={18} />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* ── Right: Profile Photo ── */}
                    <motion.div
                        className="relative flex-shrink-0"
                        variants={photoVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Dot grid pattern behind photo */}
                        <div className="absolute -inset-10 grid-pattern rounded-full opacity-40" />

                        {/* Gradient glow behind photo */}
                        <div
                            className="absolute inset-0 rounded-full blur-3xl opacity-20"
                            style={{
                                background:
                                    'radial-gradient(circle, rgba(0,210,211,0.3) 0%, rgba(124,58,237,0.2) 50%, transparent 70%)',
                            }}
                        />

                        {/* Profile ring + image */}
                        <div className="profile-ring w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 relative z-10">
                            <img
                                src={heroData.image}
                                alt={heroData.name}
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                        </div>

                        {/* Decorative floating badge */}
                        <motion.div
                            className="absolute -bottom-3 -left-4 z-20 glass-card px-3 py-2 flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)]"
                            style={{ borderRadius: 12 }}
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <span className="text-base">🧠</span>
                            <span>AI Research</span>
                        </motion.div>

                        <motion.div
                            className="absolute -top-2 -right-3 z-20 glass-card px-3 py-2 flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)]"
                            style={{ borderRadius: 12 }}
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                        >
                            <span className="text-base">📄</span>
                            <span>2 Publications</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
