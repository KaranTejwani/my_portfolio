import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        y: 8,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
            ease: 'easeOut',
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.1,
            ease: 'easeIn',
        },
    },
};

const PageTransition = ({ children, className = '' }) => {
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
