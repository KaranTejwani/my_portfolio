import React from 'react';
import { FaPython, FaReact, FaNodeJs, FaJava, FaDocker, FaLinux, FaGitAlt, FaAws, FaDatabase } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiOpencv, SiFlutter, SiFlask, SiMongodb, SiFirebase, SiExpress, SiKeras, SiOpenai, SiMysql, SiNumpy, SiPandas, SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiVite } from 'react-icons/si';

const iconMap = {
    python: { icon: FaPython, color: '#3776AB' },
    react: { icon: FaReact, color: '#61DAFB' },
    'react.js': { icon: FaReact, color: '#61DAFB' },
    'node.js': { icon: FaNodeJs, color: '#339933' },
    nodejs: { icon: FaNodeJs, color: '#339933' },
    java: { icon: FaJava, color: '#ED8B00' },
    tensorflow: { icon: SiTensorflow, color: '#FF6F00' },
    pytorch: { icon: SiPytorch, color: '#EE4C2C' },
    opencv: { icon: SiOpencv, color: '#5C3EE8' },
    flutter: { icon: SiFlutter, color: '#02569B' },
    flask: { icon: SiFlask, color: '#FFFFFF' },
    mongodb: { icon: SiMongodb, color: '#47A248' },
    firebase: { icon: SiFirebase, color: '#FFCA28' },
    'express.js': { icon: SiExpress, color: '#FFFFFF' },
    express: { icon: SiExpress, color: '#FFFFFF' },
    keras: { icon: SiKeras, color: '#D00000' },
    openai: { icon: SiOpenai, color: '#00A67E' },
    'openai whisper': { icon: SiOpenai, color: '#00A67E' },
    mysql: { icon: SiMysql, color: '#4479A1' },
    docker: { icon: FaDocker, color: '#2496ED' },
    linux: { icon: FaLinux, color: '#FCC624' },
    git: { icon: FaGitAlt, color: '#F05032' },
    aws: { icon: FaAws, color: '#FF9900' },
    numpy: { icon: SiNumpy, color: '#013243' },
    pandas: { icon: SiPandas, color: '#150458' },
    javascript: { icon: SiJavascript, color: '#F7DF1E' },
    typescript: { icon: SiTypescript, color: '#3178C6' },
    tailwindcss: { icon: SiTailwindcss, color: '#06B6D4' },
    'next.js': { icon: SiNextdotjs, color: '#FFFFFF' },
    vite: { icon: SiVite, color: '#646CFF' },
    bci: { icon: null, color: '#00D9FF' },
    nlp: { icon: null, color: '#00FFA3' },
};

const TechBadge = ({ name, size = 'sm', showIcon = true }) => {
    const key = name.toLowerCase();
    const iconData = iconMap[key];
    const IconComponent = iconData?.icon;
    const iconColor = iconData?.color || '#FFFFFF';

    const sizeClasses = {
        sm: 'px-2 py-1 text-xs gap-1.5',
        md: 'px-3 py-1.5 text-sm gap-2',
        lg: 'px-4 py-2 text-base gap-2',
    };

    const iconSizes = {
        sm: 12,
        md: 14,
        lg: 16,
    };

    return (
        <span
            className={`inline-flex items-center rounded-lg bg-white/5 border border-white/10 text-white/80 font-medium ${sizeClasses[size]}`}
        >
            {showIcon && IconComponent && (
                <IconComponent size={iconSizes[size]} style={{ color: iconColor }} />
            )}
            {name}
        </span>
    );
};

export default TechBadge;
