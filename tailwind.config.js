/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0A0A0F',
                panel: 'rgba(255,255,255,0.04)',
                border: 'rgba(255,255,255,0.08)',
                primary: '#FFFFFF',
                secondary: 'rgba(255,255,255,0.6)',
                accent: {
                    start: '#0077B6',
                    end: '#00A8E8',
                }
            },
            fontFamily: {
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
                'accent-gradient': 'linear-gradient(135deg, #0077B6 0%, #00A8E8 100%)',
                'accent-gradient-soft': 'linear-gradient(135deg, rgba(0,119,182,0.2) 0%, rgba(0,168,232,0.1) 100%)',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(0, 119, 182, 0.35)',
                'glow-lg': '0 0 40px rgba(0, 119, 182, 0.45)',
                'glow-xl': '0 0 60px rgba(0, 119, 182, 0.5)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-in-left': 'slideInLeft 0.5s ease-out',
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-20px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
