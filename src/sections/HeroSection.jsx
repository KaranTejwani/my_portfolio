import React from 'react';
import { motion } from 'framer-motion';
import { heroData } from '../data/portfolioData';

const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-[85vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
            <div className="section-container relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
                
                {/* Left Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 max-w-2xl"
                >
                    <h2 className="text-2xl md:text-3xl font-semibold text-text-primary mb-2 tracking-wide font-sans">
                        {heroData.greeting}
                    </h2>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-2 font-display">
                        {heroData.name}
                    </h1>
                    <h3 className="text-xl md:text-3xl font-bold mb-6 flex items-center flex-wrap gap-2 text-text-primary font-display">
                        {heroData.role.startsWith('And I\'m a') ? (
                            <>
                                And I'm a <span className="text-accent">{heroData.role.replace("And I'm a ", "")}</span>
                            </>
                        ) : (
                            <span className="text-accent">{heroData.role}</span>
                        )}
                    </h3>
                    
                    <p className="text-text-secondary text-base lg:text-lg max-w-lg leading-relaxed mb-10">
                        {heroData.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        {heroData.socials.map((social, idx) => {
                            const Icon = social.icon;
                            return (
                                <a 
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-accent text-accent hover:bg-accent/10 hover:shadow-glow transition-all duration-300"
                                >
                                    <Icon size={20} />
                                </a>
                            );
                        })}
                    </div>

                    <a href={heroData.cvLink} className="btn-primary text-sm lg:text-base px-8 py-3 rounded-full">
                        Download CV
                    </a>
                </motion.div>

                {/* Right Content - Hexagon Profile */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 flex justify-center lg:justify-end w-full"
                >
                    <div className="hexagon-wrapper">
                        <div className="hexagon-inner">
                            <img 
                                src={heroData.image} 
                                alt={heroData.name} 
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
