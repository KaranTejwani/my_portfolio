import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Brain, Code, Rocket, ChevronDown } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

const HeroSection = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = "AI Researcher & Full-Stack Developer";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 45);
        return () => clearInterval(timer);
    }, []);

    const stats = [
        { label: 'Publications', value: '1', icon: Brain },
        { label: 'Projects', value: '8+', icon: Code },
        { label: 'Focus Area', value: 'AI', icon: Sparkles },
        { label: 'Graduate', value: '2026', icon: Rocket },
    ];

    const scrollToAbout = () => {
        const el = document.getElementById('about');
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="ambient-orb ambient-orb-gold w-[500px] h-[500px] -top-48 -right-48 animate-float" />
                <div className="ambient-orb ambient-orb-warm w-[400px] h-[400px] -bottom-32 -left-32 animate-float-delayed" />
                <div className="absolute inset-0 dot-pattern opacity-30" />
            </div>

            <div className="section-container relative z-10 py-20">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mb-8"
                    >
                        <span className="section-badge">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            Available for Opportunities
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.7 }}
                        className="mb-4"
                    >
                        <span className="text-text-primary">Hi, I'm </span>
                        <span className="text-gradient-gold">Karan Kumar</span>
                    </motion.h1>

                    {/* Typewriter Subtitle */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="text-xl md:text-2xl lg:text-3xl text-text-secondary font-light mb-8 h-10 font-display"
                    >
                        {displayText}
                        <span className="animate-pulse text-accent">|</span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="text-lg text-text-secondary max-w-xl leading-relaxed mb-10"
                    >
                        Final year CS student at Sukkur IBA University, passionate about building intelligent systems
                        at the intersection of Deep Learning, BCI and Generative AI.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="flex flex-wrap gap-4 mb-12"
                    >
                        <a href="#projects" className="btn-primary">
                            View Projects
                            <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn-secondary">
                            Get In Touch
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.6 }}
                        className="flex gap-3"
                    >
                        {[
                            { href: 'https://github.com/KaranTejwani', icon: Github },
                            { href: 'https://linkedin.com/in/karantejwani/', icon: Linkedin },
                            { href: 'mailto:karantejwani48@gmail.com', icon: Mail },
                        ].map((social) => (
                            <a
                                key={social.href}
                                href={social.href}
                                target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl border border-border text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-300 hover:shadow-glow"
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </motion.div>
                </div>

                {/* Stats Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.8 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="obsidian-card p-5 text-center group"
                        >
                            <stat.icon className="w-5 h-5 mx-auto mb-2 text-accent opacity-60 group-hover:opacity-100 transition-opacity" />
                            <div className="text-2xl font-bold text-text-primary font-display mb-1">{stat.value}</div>
                            <div className="text-xs uppercase tracking-widest text-text-muted">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                onClick={scrollToAbout}
            >
                <span className="text-xs text-text-muted uppercase tracking-widest">Scroll</span>
                <ChevronDown size={16} className="text-accent animate-scroll-hint" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
