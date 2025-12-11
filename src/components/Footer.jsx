import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="mt-20 py-8 border-t border-white/5 text-center">
            <div className="flex justify-center gap-6 mb-8">
                <a
                    href="https://github.com/KaranTejwani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                >
                    <Github size={20} />
                </a>
                <a
                    href="https://linkedin.com/in/karantejwani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                >
                    <Linkedin size={20} />
                </a>
                <a
                    href="mailto:karantejwani48@gmail.com"
                    className="text-secondary hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                >
                    <Mail size={20} />
                </a>
            </div>

            <p className="flex items-center justify-center gap-2 text-sm text-secondary">
                Made with <Heart size={14} className="text-accent-start fill-accent-start" /> by <span className="text-white font-medium">Karan Kumar</span>
            </p>
            <p className="text-xs text-secondary/50 mt-2">
                © {new Date().getFullYear()} All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
