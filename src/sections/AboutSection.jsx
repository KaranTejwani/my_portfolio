import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Sparkles, Bot, Cpu, Code, Users, GraduationCap, MapPin } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';
import GlassCard from '../components/GlassCard';
import karanImg from '../assets/Karan.jpg';

const AboutSection = () => {
    const interests = [
        { label: 'Deep Learning', icon: Brain },
        { label: 'Neuroscience', icon: Zap },
        { label: 'Generative AI', icon: Sparkles },
        { label: 'Large Language Models', icon: Bot },
        { label: 'XAI', icon: Cpu },
        { label: 'Intelligent Agents', icon: Bot },
    ];

    const communityWork = [
        { role: 'Lead', org: 'Programming Resource Centre' },
        { role: 'Board Member', org: 'Sindh Educational Organization' },
        { role: 'Organized', org: '50+ sessions to empower students' },
    ];

    return (
        <section id="about" className="relative py-28 md:py-36">
            <div className="section-container">
                {/* Section Header */}
                <SectionReveal className="mb-14">
                    <span className="section-badge mb-4 inline-flex">About</span>
                    <h2 className="text-text-primary">
                        Get to know the person{' '}
                        <span className="text-gradient-gold">behind the code</span>
                    </h2>
                </SectionReveal>

                {/* Main Content: Profile + Bio */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                    {/* Profile Card */}
                    <SectionReveal className="lg:col-span-4" delay={0.1}>
                        <div className="obsidian-card p-8 text-center h-full">
                            <div className="relative mb-6 inline-block">
                                <div className="absolute -inset-2 bg-accent/20 rounded-2xl blur-lg" />
                                <img
                                    src={karanImg}
                                    alt="Karan Kumar"
                                    className="relative w-28 h-28 rounded-2xl object-cover border-2 border-accent/20"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-text-primary font-display mb-1">Karan Kumar</h3>
                            <p className="text-accent font-medium text-sm mb-1">CS Student @ Sukkur IBA</p>
                            <p className="text-text-secondary text-sm mb-4">AI Researcher</p>
                            <div className="flex items-center justify-center gap-2 text-text-muted text-sm">
                                <MapPin size={14} className="text-accent/60" />
                                <span>Sukkur, Pakistan</span>
                            </div>
                        </div>
                    </SectionReveal>

                    {/* Bio + Developer Identity */}
                    <SectionReveal className="lg:col-span-8" delay={0.2}>
                        <div className="obsidian-card p-8 h-full flex flex-col justify-center">
                            <h3 className="text-lg font-semibold text-text-primary font-display mb-4">Who I Am</h3>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                I'm Karan Kumar, a final-year Computer Science student and AI researcher focused on building explainable and trustworthy machine learning systems, with interests in computer vision, NLP, and generative AI.
                            </p>
                            <div className="glow-line w-full mb-6" />
                            <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
                                <Code size={16} className="text-accent" />
                                Developer Identity
                            </h4>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                Beyond research, I am a versatile Full-Stack Developer. I deployed Healr, a healthcare platform, and engineered e-commerce apps using Flutter.
                            </p>
                        </div>
                    </SectionReveal>
                </div>

                {/* Interests + Community + Goals Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Research Interests */}
                    <SectionReveal delay={0.25}>
                        <div className="obsidian-card p-6 h-full">
                            <h4 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
                                <Brain size={16} className="text-accent" />
                                Research Interests
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {interests.map((interest, index) => (
                                    <span key={index} className="tag">
                                        <interest.icon size={12} className="text-accent/70" />
                                        {interest.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </SectionReveal>

                    {/* Community */}
                    <SectionReveal delay={0.3}>
                        <div className="obsidian-card p-6 h-full">
                            <h4 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
                                <Users size={16} className="text-accent" />
                                Community
                            </h4>
                            <ul className="space-y-3">
                                {communityWork.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2 text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                        <span className="text-text-secondary">
                                            <span className="text-text-primary font-medium">{item.role}</span> at {item.org}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </SectionReveal>

                    {/* Future Goals */}
                    <SectionReveal delay={0.35}>
                        <div className="obsidian-card p-6 h-full relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                            <div className="relative z-10">
                                <h4 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
                                    <GraduationCap size={16} className="text-accent" />
                                    Future Goals
                                </h4>
                                <div className="border-l-2 border-accent/30 pl-4">
                                    <p className="text-text-primary/90 font-medium italic leading-relaxed">
                                        "Preparing for Master's & seeking fully funded research opportunities to continue my work in AI."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SectionReveal>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
