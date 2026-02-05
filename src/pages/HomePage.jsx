import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Brain, Code, Rocket } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';

const HomePage = () => {
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
        }, 40);
        return () => clearInterval(timer);
    }, []);

    const stats = [
        { label: 'Publications', value: '1', icon: Brain },
        { label: 'Projects', value: '8+', icon: Code },
        { label: 'Focus Area', value: 'AI', icon: Sparkles },
        { label: 'Graduate', value: '2026', icon: Rocket },
    ];


    return (
        <PageTransition className="min-h-[calc(100vh-120px)] flex flex-col justify-center">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 -left-48 w-80 h-80 bg-accent-start/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -right-48 w-80 h-80 bg-accent-end/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10">
                {/* Main Hero Content */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-12"
                >
                    <div className="inline-block px-4 py-2 mb-6 rounded-full bg-accent-start/10 border border-accent-start/20">
                        <span className="text-accent-start text-sm font-medium">👋 Welcome to my portfolio</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                        <span className="text-white">Hi, I'm </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start to-accent-end">
                            Karan Kumar
                        </span>
                    </h1>

                    <div className="text-xl md:text-2xl text-secondary font-light mb-6 h-8">
                        {displayText}
                        <span className="animate-pulse text-accent-start">|</span>
                    </div>

                    <p className="text-base md:text-lg text-secondary max-w-xl leading-relaxed mb-8">
                        Final year CS student at Sukkur IBA University, passionate about building intelligent systems
                        at the intersection of Deep Learning, BCI and Generative AI.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 mb-10">
                        <Link
                            to="/projects"
                            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-start to-accent-end text-white font-medium transition-all duration-200 hover:shadow-glow hover:-translate-y-0.5"
                        >
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform duration-150" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:border-accent-start/40 hover:bg-white/8 transition-all duration-200"
                        >
                            Get In Touch
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3">
                        <a
                            href="https://github.com/KaranTejwani"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-white/5 border border-white/10 text-secondary hover:text-white hover:border-accent-start/40 transition-all duration-200"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/karantejwani/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl bg-white/5 border border-white/10 text-secondary hover:text-white hover:border-accent-start/40 transition-all duration-200"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:karantejwani48@gmail.com"
                            className="p-3 rounded-xl bg-white/5 border border-white/10 text-secondary hover:text-white hover:border-accent-start/40 transition-all duration-200"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <GlassCard key={index} className="p-5 text-center group" delay={index * 0.05}>
                            <stat.icon className="w-5 h-5 mx-auto mb-2 text-accent-start opacity-70" />
                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-xs uppercase tracking-wider text-secondary">{stat.label}</div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </PageTransition>
    );
};

export default HomePage;
