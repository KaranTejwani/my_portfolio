/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0B0C0F',
                panel: 'rgba(255,255,255,0.03)',
                border: 'rgba(255,255,255,0.08)',
                primary: '#FFFFFF',
                secondary: 'rgba(255,255,255,0.65)',
                accent: {
                    start: '#00D9FF',  // Cyan
                    end: '#00FFA3',    // Mint/Teal
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            borderRadius: {
                'xl': '12px',
                '2xl': '16px',
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
            },
            backgroundImage: {
                'accent-gradient': 'linear-gradient(90deg, #00D9FF 0%, #00FFA3 100%)',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(0, 217, 255, 0.3)',
                'glow-lg': '0 0 40px rgba(0, 217, 255, 0.4)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
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
            },
        },
    },
    plugins: [],
}
