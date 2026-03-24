import React from 'react';
import { Mail, Linkedin, Github, MapPin, Send, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionReveal from '../components/SectionReveal';

const ContactSection = () => {
    const contactMethods = [
        {
            icon: Mail, label: 'Email', value: 'karantejwani48@gmail.com',
            href: 'mailto:karantejwani48@gmail.com',
        },
        {
            icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/karantejwani',
            href: 'https://linkedin.com/in/karantejwani/',
        },
        {
            icon: Github, label: 'GitHub', value: 'github.com/KaranTejwani',
            href: 'https://github.com/KaranTejwani',
        },
    ];

    return (
        <section id="contact" className="relative py-16 md:py-20">
            <div className="section-container relative z-10">
                {/* CTA Header */}
                <SectionReveal className="text-center mb-10">
                    <span className="section-badge mb-3 inline-flex mx-auto">Connect</span>
                    <h2 className="text-text-primary max-w-2xl mx-auto">
                        Let's Build Something <span className="text-accent">Together</span>
                    </h2>
                    <p className="text-text-secondary max-w-lg mx-auto mt-3 text-sm">
                        I'm always open to discussing new projects, research collaborations, or opportunities in AI and software development.
                    </p>
                </SectionReveal>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-4xl mx-auto">
                    {/* Contact Methods */}
                    <div className="lg:col-span-5 space-y-3">
                        <SectionReveal delay={0.1}>
                            <div className="obsidian-card p-4 hover:border-accent/25 transition-colors">
                                <div className="flex items-center gap-3 text-text-secondary">
                                    <div className="p-2.5 bg-accent/[0.06] rounded-xl text-accent">
                                        <MapPin size={18} />
                                    </div>
                                    <span className="text-sm font-medium">Sukkur, Pakistan</span>
                                </div>
                            </div>
                        </SectionReveal>

                        {contactMethods.map((method, index) => (
                            <SectionReveal key={method.label} delay={0.12 + index * 0.04}>
                                <a
                                    href={method.href}
                                    target={method.href.startsWith('mailto') ? undefined : '_blank'}
                                    rel="noopener noreferrer"
                                    className="block group"
                                >
                                    <motion.div
                                        whileHover={{ x: 3 }}
                                        className="obsidian-card p-4 flex items-center gap-4 hover:border-accent/25 transition-colors"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center flex-shrink-0 group-hover:bg-accent/[0.08] transition-colors">
                                            <method.icon size={18} className="text-accent" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-[0.6rem] text-text-muted uppercase tracking-widest mb-0.5">{method.label}</div>
                                            <div className="text-sm text-text-primary font-medium truncate group-hover:text-accent transition-colors duration-300">
                                                {method.value}
                                            </div>
                                        </div>
                                        <ExternalLink size={14} className="text-text-muted group-hover:text-accent transition-colors flex-shrink-0" />
                                    </motion.div>
                                </a>
                            </SectionReveal>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <SectionReveal delay={0.25} className="lg:col-span-7">
                        <div className="obsidian-card p-6 hover:border-accent/20 transition-colors h-full flex flex-col justify-center">
                            <h3 className="text-lg font-bold text-text-primary font-display mb-6">Send a Message</h3>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-medium text-text-secondary mb-1.5">Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent/50 focus:bg-accent/[0.02] transition-all duration-300"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-text-secondary mb-1.5">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent/50 focus:bg-accent/[0.02] transition-all duration-300"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-text-secondary mb-1.5">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent/50 focus:bg-accent/[0.02] transition-all duration-300 resize-none"
                                        placeholder="How can I help you?"
                                    />
                                </div>
                                <button type="submit" className="btn-primary w-full py-3 text-xs font-bold tracking-wide uppercase">
                                    <Send size={14} className="mr-1.5" />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </SectionReveal>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
