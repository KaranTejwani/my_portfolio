import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Sparkles, Zap, Bot, Code, Users, GraduationCap, MapPin } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';
import karanImg from '../assets/Karan.jpg';

const AboutPage = () => {
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
        <PageTransition>
            {/* Page Header */}
            <div className="mb-10">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start to-accent-end">Me</span>
                </h1>
                <p className="text-secondary">Get to know the person behind the code</p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {/* Profile Card */}
                <GlassCard className="md:col-span-2 lg:col-span-1 p-6" delay={0}>
                    <div className="flex flex-col items-center text-center">
                        <div className="relative mb-4">
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent-start to-accent-end rounded-xl blur opacity-25" />
                            <img
                                src={karanImg}
                                alt="Karan Kumar"
                                className="relative w-24 h-24 rounded-xl object-cover border border-white/10"
                            />
                        </div>
                        <h2 className="text-xl font-bold text-white mb-1">Karan Kumar</h2>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start to-accent-end font-medium mb-1">
                            CS Student @ Sukkur IBA
                        </p>
                        <p className="text-secondary text-sm mb-3">AI Researcher</p>
                        <div className="flex items-center gap-2 text-secondary text-sm">
                            <MapPin size={14} />
                            <span>Sukkur, Pakistan</span>
                        </div>
                    </div>
                </GlassCard>

                {/* Bio Card */}
                <GlassCard className="md:col-span-2 p-6" delay={0.1}>
                    <h3 className="text-lg font-semibold text-white mb-4">Who I Am</h3>
                    <p className="text-secondary leading-relaxed">
                        I’m Karan Kumar, a final-year Computer Science student and AI researcher focused on building explainable and trustworthy machine learning systems, with interests in computer vision, NLP, and generative AI.
                    </p>
                </GlassCard>

                {/* Research Interests */}
                <GlassCard className="p-5" delay={0.15}>
                    <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                        <Brain className="text-accent-start" size={18} />
                        Research Interests
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {interests.map((interest, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white"
                            >
                                <interest.icon size={14} className="text-accent-start" />
                                {interest.label}
                            </span>
                        ))}
                    </div>
                </GlassCard>

                {/* Developer Identity */}
                <GlassCard className="p-5" delay={0.2}>
                    <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                        <Code className="text-accent-start" size={18} />
                        Developer Identity
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed">
                        Beyond research, I am a versatile Full-Stack Developer.
                        I deployed Healr, a healthcare platform,
                        and engineered e-commerce apps using Flutter.
                    </p>
                </GlassCard>

                {/* Community Work */}
                <GlassCard className="p-5" delay={0.25}>
                    <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                        <Users className="text-accent-start" size={18} />
                        Community
                    </h3>
                    <ul className="space-y-2.5">
                        {communityWork.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-start mt-2 flex-shrink-0" />
                                <span className="text-secondary">
                                    <span className="text-white font-medium">{item.role}</span> at {item.org}
                                </span>
                            </li>
                        ))}
                    </ul>
                </GlassCard>

                {/* Future Goals */}
                <GlassCard className="md:col-span-2 lg:col-span-3 p-6 relative overflow-hidden" delay={0.3}>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-start/5 to-accent-end/5" />
                    <div className="relative z-10">
                        <h3 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
                            <GraduationCap className="text-accent-start" size={18} />
                            Future Goals
                        </h3>
                        <p className="text-lg text-white/90 font-medium italic">
                            "Preparing for Master's & seeking fully funded research opportunities to continue my work in AI."
                        </p>
                    </div>
                </GlassCard>
            </div>
        </PageTransition>
    );
};

export default AboutPage;
