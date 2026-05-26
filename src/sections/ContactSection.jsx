import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, ArrowUpRight } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

const contactMethods = [
    {
        icon: Mail,
        label: 'Email',
        value: 'karantejwani48@gmail.com',
        href: 'mailto:karantejwani48@gmail.com',
        color: 'text-accent',
        bgColor: 'bg-accent/[0.08]',
        borderColor: 'border-accent/20',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'linkedin.com/in/karantejwani',
        href: 'https://linkedin.com/in/karantejwani',
        color: 'text-blue-400',
        bgColor: 'bg-blue-400/[0.08]',
        borderColor: 'border-blue-400/20',
    },
    {
        icon: Github,
        label: 'GitHub',
        value: 'github.com/KaranTejwani',
        href: 'https://github.com/KaranTejwani',
        color: 'text-purple-400',
        bgColor: 'bg-purple-400/[0.08]',
        borderColor: 'border-purple-400/20',
    },
];

const ContactSection = () => {
    return (
        <section id="contact" className="relative py-16 md:py-24">
            {/* Ambient gradient background glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/[0.03] rounded-full blur-[130px]" />
            </div>

            <div className="section-container relative z-10">
                {/* Header */}
                <SectionReveal className="text-center mb-10">
                    <span className="section-badge mb-3 inline-flex">Connect</span>
                    <h2 className="text-text-primary">
                        Let's Build Something <span className="text-gradient">Together</span>
                    </h2>
                    <p className="text-text-secondary text-sm mt-3 max-w-lg mx-auto leading-relaxed">
                        I'm always open to discussing research collaborations, AI projects, freelance opportunities, or just connecting over shared interests.
                    </p>
                </SectionReveal>

                {/* Contact Method Cards */}
                <SectionReveal delay={0.1}>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={index}
                                href={method.href}
                                target={method.label !== 'Email' ? '_blank' : undefined}
                                rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                                whileHover={{ x: 4, y: -2 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                className="glass-card p-5 flex flex-col items-center text-center gap-3 group hover:border-accent/30 transition-colors duration-300 cursor-pointer no-underline"
                            >
                                <div className={`p-3 rounded-xl ${method.bgColor} border ${method.borderColor} ${method.color} transition-transform duration-300 group-hover:scale-110`}>
                                    <method.icon size={22} />
                                </div>
                                <div>
                                    <div className="text-[0.65rem] font-bold text-text-muted uppercase tracking-widest mb-1">
                                        {method.label}
                                    </div>
                                    <div className="text-xs text-text-secondary group-hover:text-text-primary transition-colors duration-300 flex items-center justify-center gap-1">
                                        {method.value}
                                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent" />
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </SectionReveal>

                {/* Location + CTA */}
                <SectionReveal delay={0.2}>
                    <div className="flex flex-col items-center gap-5">
                        {/* Location Indicator */}
                        <div className="flex items-center gap-2 text-text-muted text-xs">
                            <MapPin size={14} className="text-accent/70" />
                            <span>Sukkur, Pakistan</span>
                        </div>

                        {/* CTA Button */}
                        <motion.a
                            href="mailto:karantejwani48@gmail.com"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="btn-primary text-sm"
                        >
                            <Mail size={16} />
                            Get in Touch
                        </motion.a>
                    </div>
                </SectionReveal>
            </div>
        </section>
    );
};

export default ContactSection;
