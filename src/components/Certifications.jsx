import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

import mlSpecImg from '../assets/ML_Specialization.jpg';
import pakAngelsImg from '../assets/PakAngels.jpg';
import mongoImg from '../assets/mongo.jpg';
import problemSolvingImg from '../assets/ProblemSolving.jpg';

const CertificationCard = ({ title, issuer, date, link, image }) => {
    return (
        <div className="group bg-panel border border-border rounded-xl overflow-hidden hover:border-accent-start transition-all duration-300 hover:-translate-y-1">
            <div className="h-32 overflow-hidden bg-white/5 relative">
                <img src={image} alt={title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            </div>
            <div className="p-4">
                <h3 className="text-base font-bold text-white mb-1 line-clamp-1" title={title}>{title}</h3>
                <p className="text-accent-start text-xs font-medium mb-1">{issuer}</p>
                <p className="text-secondary text-xs mb-4">Issued: {date}</p>

                <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-medium text-white hover:text-accent-start transition-colors">
                    <Award size={14} /> Verify Credential
                </a>
            </div>
        </div>
    );
};

const Certifications = () => {
    const certs = [
        {
            title: "Machine Learning Specialization",
            issuer: "DeepLearning.AI",
            date: "July 2024",
            link: "https://www.coursera.org/account/accomplishments/specialization/D19XYU0J24H0",
            image: mlSpecImg
        },
        {
            title: "Generative AI Developer",
            issuer: "PakAngels",
            date: "Oct 2024",
            link: "https://credsverse.com/credentials/e19d1971-777d-43d2-a31f-ffc90146dcce",
            image: pakAngelsImg
        },
        {
            title: "Introduction to MongoDB",
            issuer: "Coursera",
            date: "June 2025",
            link: "https://learn.mongodb.com/c/lbZGdug4Rq-e66tyOSkIQw",
            image: mongoImg
        },
        {
            title: "Problem Solving (Basic)",
            issuer: "HackerRank",
            date: "May 2024",
            link: "https://www.hackerrank.com/certificates/cf843a11183a",
            image: problemSolvingImg
        }
    ];

    return (
        <section id="certifications">
            <h2 className="mb-6 text-xl">Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {certs.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <CertificationCard {...cert} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
