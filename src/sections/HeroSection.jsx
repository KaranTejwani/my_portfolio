import React from 'react';
import { motion } from 'framer-motion';
import { heroData } from '../data/portfolioData';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
    return (
        <section id="hero" className="relative flex items-center justify-center overflow-hidden py-16 lg:py-20">
            {/* Subtle decorative dots */}
            <div className="absolute top-12 right-12 w-32 h-32 opacity-[0.04] pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, var(--accent) 1px, transparent 1px)',
                backgroundSize: '16px 16px',
            }} />
            <div className="absolute bottom-12 left-12 w-24 h-24 opacity-[0.04] pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, var(--accent) 1px, transparent 1px)',
                backgroundSize: '14px 14px',
            }} />

            <div className="section-container relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
                
                {/* Left Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="flex-1 max-w-xl"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/[0.06] border border-accent/[0.12] mb-5"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="text-xs font-medium text-accent tracking-wide">Available for collaboration</span>
                    </motion.div>

                    <h2 className="text-xl md:text-2xl font-semibold text-text-secondary mb-1 tracking-wide font-sans">
                        {heroData.greeting}
                    </h2>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-2 font-display">
                        {heroData.name}
                    </h1>
                    <h3 className="text-lg md:text-2xl font-bold mb-5 flex items-center flex-wrap gap-2 text-text-primary font-display">
                        {heroData.role.startsWith('And I\'m a') ? (
                            <>
                                And I'm a <span className="text-shimmer">{heroData.role.replace("And I'm a ", "")}</span>
                            </>
                        ) : (
                            <span className="text-shimmer">{heroData.role}</span>
                        )}
                    </h3>
                    
                    <p className="text-text-secondary text-sm lg:text-base max-w-lg leading-relaxed mb-8">
                        {heroData.description}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                        {heroData.socials.map((social, idx) => {
                            const Icon = social.icon;
                            return (
                                <motion.a 
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center justify-center w-11 h-11 rounded-xl border border-accent/30 text-accent hover:bg-accent/10 hover:border-accent hover:shadow-glow transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </motion.a>
                            );
                        })}
                    </div>

                    <a href={heroData.cvLink} className="btn-primary text-sm px-7 py-3 rounded-full">
                        Download CV
                    </a>
                </motion.div>

                {/* Right Content - Hexagon Profile */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="flex-1 flex justify-center lg:justify-end w-full"
                >
                    <div className="relative">
                        {/* Decorative ring */}
                        <div className="absolute -inset-4 rounded-full border border-accent/[0.06] animate-pulse" style={{ animationDuration: '4s' }} />
                        <div className="hexagon-wrapper">
                            <div className="hexagon-inner">
                                <img 
                                    src={heroData.image} 
                                    alt={heroData.name} 
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
