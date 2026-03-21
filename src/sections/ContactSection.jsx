import React from 'react';
import { Mail, Linkedin, Github, MapPin, Send, ExternalLink } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

const ContactSection = () => {
    const contactMethods = [
        {
            icon: Mail, label: 'Email', value: 'karantejwani48@gmail.com',
            href: 'mailto:karantejwani48@gmail.com', color: '#00F0FF',
        },
        {
            icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/karantejwani',
            href: 'https://linkedin.com/in/karantejwani/', color: '#00F0FF',
        },
        {
            icon: Github, label: 'GitHub', value: 'github.com/KaranTejwani',
            href: 'https://github.com/KaranTejwani', color: '#00F0FF',
        },
    ];

    return (
        <section id="contact" className="relative py-28 md:py-36">
            <div className="section-container relative z-10">
                {/* CTA Header */}
                <SectionReveal className="text-center mb-16">
                    <span className="section-badge mb-4 inline-flex mx-auto">Connect</span>
                    <h2 className="text-text-primary max-w-2xl mx-auto">
                        Let's Build Something <span className="text-accent">Together</span>
                    </h2>
                    <p className="text-text-secondary max-w-lg mx-auto mt-4 text-lg">
                        I'm always open to discussing new projects, research collaborations, or opportunities in AI and software development.
                    </p>
                </SectionReveal>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
                    {/* Contact Methods */}
                    <div className="lg:col-span-5 space-y-5">
                        <SectionReveal delay={0.1}>
                            <div className="obsidian-card p-6 border hover:border-accent transition-colors">
                                <div className="flex items-center gap-4 text-text-secondary">
                                    <div className="p-3 bg-accent/10 rounded-full text-accent">
                                        <MapPin size={22} />
                                    </div>
                                    <span className="text-base font-medium">Sukkur, Pakistan</span>
                                </div>
                            </div>
                        </SectionReveal>

                        {contactMethods.map((method, index) => (
                            <SectionReveal key={method.label} delay={0.15 + index * 0.05}>
                                <a
                                    href={method.href}
                                    target={method.href.startsWith('mailto') ? undefined : '_blank'}
                                    rel="noopener noreferrer"
                                    className="block group"
                                >
                                    <div className="obsidian-card p-6 flex items-center gap-5 border hover:border-accent transition-colors">
                                        <div className="w-12 h-12 rounded-full bg-bg-surface flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors">
                                            <method.icon size={22} className="text-accent" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-xs text-text-muted uppercase tracking-widest mb-1">{method.label}</div>
                                            <div className="text-base text-text-primary font-medium truncate group-hover:text-accent transition-colors duration-300">
                                                {method.value}
                                            </div>
                                        </div>
                                        <ExternalLink size={18} className="text-text-muted group-hover:text-accent transition-colors flex-shrink-0" />
                                    </div>
                                </a>
                            </SectionReveal>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <SectionReveal delay={0.3} className="lg:col-span-7">
                        <div className="obsidian-card p-8 border hover:border-accent transition-colors h-full flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-text-primary font-display mb-8">Send a Message</h3>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary mb-2">Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/80 focus:shadow-glow transition-all duration-300"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/80 focus:shadow-glow transition-all duration-300"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                                    <textarea
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-xl bg-bg-surface border border-border text-text-primary placeholder-text-muted focus:outline-none focus:border-accent/80 focus:shadow-glow transition-all duration-300 resize-none"
                                        placeholder="How can I help you?"
                                    />
                                </div>
                                <button type="submit" className="btn-primary w-full py-4 text-sm font-bold tracking-wide uppercase">
                                    <Send size={18} className="mr-2" />
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
