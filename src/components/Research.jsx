import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const ResearchCard = ({ meta, title, description, link, linkText }) => {
    return (
        <div className="glass-panel p-6 rounded-2xl hover:border-accent-start transition-colors duration-300 group">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <div className="inline-block px-2 py-1 mb-3 rounded bg-accent-start/10 text-accent-start text-xs font-bold uppercase tracking-wide">
                        {meta}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-accent-start transition-colors">{title}</h3>
                    <p className="text-secondary text-sm leading-relaxed mb-4 max-w-3xl">
                        {description}
                    </p>
                    <a href={link} className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-accent-start transition-colors">
                        <FileText size={16} />
                        <span className="underline decoration-transparent hover:decoration-accent-start transition-all">{linkText}</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default function Research() {
    return (
        <section id="research">
            <h2 className="mb-8">Research</h2>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <ResearchCard
                    meta="Under Review • IEEE EDUCON 2026"
                    title="From Feedback to Insight: Leveraging Transformers and Explainable AI to Identify Helpful Student Reviews"
                    description="Collaborated with a team of researchers from Europe and SIBA to develop a novel approach using transformers and explainable AI on a custom dataset of 79,000+ Coursera reviews to identify helpful feedback for course enhancement."
                    link="#"
                    linkText="Publication Pending"
                />
            </motion.div>
        </section>
    );
}
