import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

import mlSpecImg from '../assets/ML_Specialization.jpg';
import pakAngelsImg from '../assets/PakAngels.jpg';
import mongoImg from '../assets/mongo.jpg';
import problemSolvingImg from '../assets/ProblemSolving.jpg';

const CertificationCard = ({ title, issuer, date, link, image }) => {
    return (
        <div className="cert-card">
            <div className="cert-image">
                <img src={image} alt="Certificate" />
            </div>
            <div className="cert-content">
                <h3>{title}</h3>
                <p className="cert-issuer">{issuer}</p>
                <p className="cert-date">Issued: {date}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="verify-link">
                    <FaCertificate /> Verify Certificate
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
            date: "July 6, 2024",
            link: "https://www.coursera.org/account/accomplishments/specialization/D19XYU0J24H0",
            image: mlSpecImg
        },
        {
            title: "Generative AI Application Developer",
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
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2>Certifications</h2>
                <div className="certifications-grid">
                    {certs.map((cert, index) => (
                        <CertificationCard key={index} {...cert} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Certifications;
