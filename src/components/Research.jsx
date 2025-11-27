import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaExternalLinkAlt } from 'react-icons/fa';

const ResearchCard = ({ meta, title, description, link, linkText, className = '' }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`card research-card ${className}`}>
            <div className="card-meta">{meta}</div>
            <h3>{title}</h3>
            <p className="description-text">
                {isExpanded ? description : `${description.substring(0, 130)}... `}
                <button className="read-more-btn" onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
            </p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="github-link">
                <FaExternalLinkAlt /> {linkText}
            </a>
        </div>
    );
};

export default function Research() {
    return (
        <section id="research">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2>Research & Publications</h2>

                <ResearchCard
                    meta="Under Review • IEEE EDUCON 2026 • Cairo, Egypt"
                    title="From Feedback to Insight: Leveraging Transformers and Explainable AI to Identify Helpful Student Reviews for Course Enhancement"
                    description="Collaborated with a team of researchers from Europe and SIBA to develop a novel approach for identifying helpful student reviews for course enhancement using transformers and explainable AI on a custom dataset collected from coursera with 79000+ instances. I served as the experimentalist for this research."
                    link="#"
                    linkText="Read Publication"
                />

                {/* <ResearchCard
                    meta="Under Review • CVPR 2026"
                    title="X-TRM: Cross-Modal Tiny Recursive Models for Anytime Visual Reasoning"
                    description="Proposed X-TRM, a novel cross-modal tiny recursive model for anytime visual reasoning. X-TRM achieves state-of-the-art performance on a range of visual reasoning tasks while maintaining minimal model size and computational complexity. I am leading this research."
                    link="#"
                    linkText="Read Preprint"
                    className="highlight-card"
                /> */}
            </motion.div>
        </section>
    );
}
