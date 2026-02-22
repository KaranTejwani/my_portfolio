/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: {
                    primary: '#060608',
                    elevated: '#0D0D12',
                    surface: '#14141B',
                },
                accent: {
                    DEFAULT: '#D4A853',
                    dim: '#B8912E',
                    glow: 'rgba(212,168,83,0.15)',
                },
                text: {
                    primary: '#F5F5F7',
                    secondary: 'rgba(245,245,247,0.55)',
                    muted: 'rgba(245,245,247,0.35)',
                },
                border: 'rgba(245,245,247,0.06)',
            },
            fontFamily: {
                display: ['Outfit', 'system-ui', 'sans-serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                'xl': '12px',
                '2xl': '16px',
                '3xl': '24px',
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
            },
            backgroundImage: {
                'accent-gradient': 'linear-gradient(135deg, #D4A853 0%, #F0D78C 100%)',
                'accent-gradient-soft': 'linear-gradient(135deg, rgba(212,168,83,0.2) 0%, rgba(240,215,140,0.1) 100%)',
                'obsidian-gradient': 'linear-gradient(180deg, #060608 0%, #0D0D12 50%, #060608 100%)',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(212,168,83,0.25)',
                'glow-lg': '0 0 40px rgba(212,168,83,0.35)',
                'glow-xl': '0 0 60px rgba(212,168,83,0.4)',
                'card': '0 4px 24px rgba(0,0,0,0.4)',
                'card-hover': '0 8px 40px rgba(0,0,0,0.6), 0 0 20px rgba(212,168,83,0.1)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.7s ease-out',
                'slide-in-left': 'slideInLeft 0.6s ease-out',
                'float': 'float 8s ease-in-out infinite',
                'float-delayed': 'float 8s ease-in-out 2s infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shimmer': 'shimmer 3s ease-in-out infinite',
                'glow-pulse': 'glowPulse 3s ease-in-out infinite',
                'scroll-hint': 'scrollHint 2s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0) scale(1)' },
                    '50%': { transform: 'translateY(-20px) scale(1.05)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
                glowPulse: {
                    '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.1)' },
                },
                scrollHint: {
                    '0%': { transform: 'translateY(0)', opacity: '1' },
                    '50%': { transform: 'translateY(8px)', opacity: '0.5' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
