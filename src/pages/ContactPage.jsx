import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Send, ExternalLink } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import GlassCard from '../components/GlassCard';

const ContactPage = () => {
    const contactMethods = [
        {
            icon: Mail,
            label: 'Email',
            value: 'karantejwani48@gmail.com',
            href: 'mailto:karantejwani48@gmail.com',
            color: '#EA4335',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'linkedin.com/in/karantejwani',
            href: 'https://linkedin.com/in/karantejwani/',
            color: '#0A66C2',
        },
        {
            icon: Github,
            label: 'GitHub',
            value: 'github.com/KaranTejwani',
            href: 'https://github.com/KaranTejwani',
            color: '#FFFFFF',
        },
    ];

    return (
        <PageTransition>
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                    Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-start to-accent-end">Touch</span>
                </h1>
                <p className="text-secondary">Let's connect and discuss opportunities</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Info */}
                <div className="space-y-5">
                    {/* Intro Card */}
                    <GlassCard className="p-6" delay={0}>
                        <h2 className="text-xl font-bold text-white mb-3">Let's Work Together</h2>
                        <p className="text-secondary leading-relaxed mb-4">
                            I'm always open to discussing new projects, research collaborations,
                            or opportunities in AI and software development.
                        </p>
                        <div className="flex items-center gap-2 text-secondary">
                            <MapPin size={16} className="text-accent-start" />
                            <span>Sukkur, Pakistan</span>
                        </div>
                    </GlassCard>

                    {/* Contact Methods */}
                    <div className="space-y-3">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={method.label}
                                href={method.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + index * 0.05, duration: 0.15 }}
                                className="group block"
                            >
                                <GlassCard className="p-5 flex items-center gap-4" delay={0}>
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${method.color}15` }}
                                    >
                                        <method.icon size={22} style={{ color: method.color }} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-xs text-secondary uppercase tracking-wider mb-0.5">{method.label}</div>
                                        <div className="text-base text-white font-medium truncate group-hover:text-accent-start transition-colors duration-150">
                                            {method.value}
                                        </div>
                                    </div>
                                    <ExternalLink size={18} className="text-secondary group-hover:text-accent-start transition-colors duration-150" />
                                </GlassCard>
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <GlassCard className="p-6 h-fit" delay={0.2}>
                    <h3 className="text-lg font-bold text-white mb-5">Send a Message</h3>
                    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm font-medium text-secondary mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-accent-start/50 transition-all duration-150"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-secondary mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-accent-start/50 transition-all duration-150"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-secondary mb-2">Message</label>
                            <textarea
                                rows={5}
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-accent-start/50 transition-all duration-150 resize-none"
                                placeholder="Your message..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-accent-start to-accent-end text-white font-medium transition-all duration-150 hover:shadow-glow hover:-translate-y-0.5"
                        >
                            <Send size={18} />
                            Send Message
                        </button>
                    </form>
                </GlassCard>
            </div>
        </PageTransition>
    );
};

export default ContactPage;
