import React from 'react';
import { Mail, Linkedin, Github, MapPin, Send, ExternalLink } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

const ContactSection = () => {
    const contactMethods = [
        {
            icon: Mail, label: 'Email', value: 'karantejwani48@gmail.com',
            href: 'mailto:karantejwani48@gmail.com', color: '#D4A853',
        },
        {
            icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/karantejwani',
            href: 'https://linkedin.com/in/karantejwani/', color: '#0A66C2',
        },
        {
            icon: Github, label: 'GitHub', value: 'github.com/KaranTejwani',
            href: 'https://github.com/KaranTejwani', color: '#F5F5F7',
        },
    ];

    return (
        <section id="contact" className="relative py-28 md:py-36">
            {/* Ambient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="ambient-orb ambient-orb-gold w-[400px] h-[400px] -bottom-32 right-0 animate-float opacity-15" />
            </div>

            <div className="section-container relative z-10">
                {/* CTA Header */}
                <SectionReveal className="text-center mb-16">
                    <span className="section-badge mb-4 inline-flex mx-auto">Connect</span>
                    <h2 className="text-text-primary max-w-2xl mx-auto">
                        Let's Build Something{' '}
                        <span className="text-gradient-gold">Together</span>
                    </h2>
                    <p className="text-text-secondary max-w-lg mx-auto mt-4">
                        I'm always open to discussing new projects, research collaborations, or opportunities in AI and software development.
                    </p>
                </SectionReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Contact Methods */}
                    <div className="space-y-5">
                        {/* Location */}
                        <SectionReveal delay={0.1}>
                            <div className="obsidian-card p-6">
                                <div className="flex items-center gap-3 text-text-secondary">
                                    <MapPin size={18} className="text-accent" />
                                    <span>Sukkur, Pakistan</span>
                                </div>
                            </div>
                        </SectionReveal>

                        {/* Methods */}
                        {contactMethods.map((method, index) => (
                            <SectionReveal key={method.label} delay={0.15 + index * 0.05}>
                                <a
                                    href={method.href}
                                    target={method.href.startsWith('mailto') ? undefined : '_blank'}
                                    rel="noopener noreferrer"
                                    className="block group"
                                >
                                    <div className="obsidian-card p-5 flex items-center gap-4">
                                        <div
                                            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                            style={{ backgroundColor: `${method.color}12` }}
                                        >
                                            <method.icon size={22} style={{ color: method.color }} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-xs text-text-muted uppercase tracking-widest mb-0.5">{method.label}</div>
                                            <div className="text-base text-text-primary font-medium truncate group-hover:text-accent transition-colors duration-300">
                                                {method.value}
                                            </div>
                                        </div>
                                        <ExternalLink size={16} className="text-text-muted group-hover:text-accent transition-colors flex-shrink-0" />
                                    </div>
                                </a>
                            </SectionReveal>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <SectionReveal delay={0.3}>
                        <div className="obsidian-card p-6 md:p-8">
                            <h3 className="text-lg font-bold text-text-primary font-display mb-6">Send a Message</h3>
                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/40 focus:shadow-glow transition-all duration-300"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/40 focus:shadow-glow transition-all duration-300"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                                    <textarea
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/40 focus:shadow-glow transition-all duration-300 resize-none"
                                        placeholder="Your message..."
                                    />
                                </div>
                                <button type="submit" className="btn-primary w-full justify-center">
                                    <Send size={18} />
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
