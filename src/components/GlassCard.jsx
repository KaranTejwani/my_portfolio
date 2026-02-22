import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({
    children,
    className = '',
    hover = true,
    delay = 0,
    onClick
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay * 0.5, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            whileHover={hover ? { y: -3, transition: { duration: 0.25 } } : {}}
            onClick={onClick}
            className={`obsidian-card ${hover ? 'cursor-pointer' : ''} ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
