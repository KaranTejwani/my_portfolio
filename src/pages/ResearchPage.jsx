import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, Clock, BookOpen } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';

const publications = [
    {
        id: 1,
        status: 'Accepted',
        venue: 'IEEE EDUCON 2026',
        title: 'From Feedback to Insight: Leveraging Transformers and Explainable AI to Identify Helpful Student Reviews',
        abstract: '',
        authors: ['Zenun Kastrati', 'Dani Bux Shah', 'Sher Muhammad Daudpota', 'Ali Shariq Imnran', 'Karan Kumar'],
        topics: ['Transformers', 'Explainable AI', 'NLP', 'EdTech'],
        pending: true,
    },
];

const ResearchPage = () => {
    return (
        <PageTransition>
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                    Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start to-accent-end">Publications</span>
                </h1>
                <p className="text-secondary">Academic contributions and ongoing research</p>
            </div>

            {/* Research Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
                <GlassCard className="p-5 text-center" delay={0}>
                    <FileText className="w-6 h-6 mx-auto mb-2 text-accent-start" />
                    <div className="text-2xl font-bold text-white">1</div>
                    <div className="text-xs text-secondary">Publication</div>
                </GlassCard>
                <GlassCard className="p-5 text-center" delay={0.05}>
                    <Users className="w-6 h-6 mx-auto mb-2 text-accent-start" />
                    <div className="text-2xl font-bold text-white">International</div>
                    <div className="text-xs text-secondary">Collaboration</div>
                </GlassCard>
            </div>

            {/* Publications */}
            {publications.map((pub, index) => (
                <GlassCard key={pub.id} className="p-6 mb-8" delay={0.15}>
                    {/* Status Badge */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase ${pub.status === 'Accepted'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                            }`}>
                            <Clock size={12} />
                            {pub.status}
                        </span>
                        <span className="text-sm text-secondary">{pub.venue}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                        {pub.title}
                    </h3>

                    {/* Abstract */}
                    <p className="text-secondary leading-relaxed mb-5">
                        {pub.abstract}
                    </p>

                    {/* Authors */}
                    <div className="mb-5">
                        <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2">Authors</h4>
                        <div className="flex flex-wrap gap-2">
                            {pub.authors.map((author, i) => (
                                <span
                                    key={i}
                                    className={`px-3 py-1.5 rounded-lg text-sm ${author === 'Karan Kumar'
                                        ? 'bg-accent-start/20 text-accent-start border border-accent-start/30 font-medium'
                                        : 'bg-white/5 text-secondary border border-white/10'
                                        }`}
                                >
                                    {author}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2">
                        {pub.topics.map((topic, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/70"
                            >
                                {topic}
                            </span>
                        ))}
                    </div>
                </GlassCard>
            ))}

            {/* Research Interests */}
            <div>
                <h2 className="text-xl font-bold text-white mb-5">Research Interests</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { title: 'Generative AI', desc: 'Generative AI' },
                        { title: 'Large Language Models', desc: 'Large Language Models' },
                        { title: 'Explainable AI', desc: 'Transparent model decision-making' },
                        { title: 'Educational Tech', desc: 'AI-powered learning systems' },
                        { title: 'NLP', desc: 'Natural language understanding' },
                        { title: 'Computer Vision', desc: 'Visual perception & analysis' },
                    ].map((interest, index) => (
                        <GlassCard key={index} className="p-5" delay={index * 0.03}>
                            <h4 className="text-base font-semibold text-white mb-1.5">{interest.title}</h4>
                            <p className="text-sm text-secondary">{interest.desc}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </PageTransition>
    );
};

export default ResearchPage;
