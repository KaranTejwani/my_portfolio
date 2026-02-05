import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({
    children,
    className = '',
    hover = true,
    glow = false,
    delay = 0,
    onClick
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay * 0.5, duration: 0.25 }}
            whileHover={hover ? { y: -2, transition: { duration: 0.15 } } : {}}
            onClick={onClick}
            className={`
        relative overflow-hidden
        bg-gradient-to-br from-white/[0.06] to-white/[0.02]
        backdrop-blur-md
        border border-white/10
        rounded-xl
        transition-all duration-200
        ${hover ? 'hover:border-accent-start/40 cursor-pointer' : ''}
        ${glow ? 'shadow-glow' : ''}
        ${className}
      `}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
