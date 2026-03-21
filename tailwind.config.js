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
                    primary: '#13141C',
                    elevated: '#1a1c23',
                    surface: '#1E2029',
                },
                accent: {
                    DEFAULT: '#00D2D3',
                    dim: '#00B0B0',
                    glow: 'rgba(0, 210, 211, 0.1)',
                },
                text: {
                    primary: '#FFFFFF',
                    secondary: 'rgba(255, 255, 255, 0.70)',
                    muted: 'rgba(255, 255, 255, 0.40)',
                },
                border: 'rgba(255, 255, 255, 0.05)',
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
                'accent-gradient': 'linear-gradient(135deg, #00F0FF 0%, #00C4D1 100%)',
            },
            boxShadow: {
                'glow': '0 0 10px rgba(0, 240, 255, 0.15)',
                'glow-lg': '0 0 20px rgba(0, 240, 255, 0.2)',
                'glow-xl': '0 0 30px rgba(0, 240, 255, 0.25)',
                'glow-cyan': '0 0 20px rgba(0, 240, 255, 0.3)',
                'card': '0 4px 15px rgba(0,0,0,0.3)',
                'card-hover': '0 8px 30px rgba(0,0,0,0.4), 0 0 15px rgba(0, 240, 255, 0.1)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.7s ease-out',
                'slide-in-left': 'slideInLeft 0.6s ease-out',
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
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
