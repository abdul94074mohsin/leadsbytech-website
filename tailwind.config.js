/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: '#0A0A1A',
        darkNavy: '#060612',
        electric: '#3B82F6',
        electricDark: '#2563EB',
        blueLight: '#60A5FA',
        gold: '#F59E0B',
        goldLight: '#FBBF24',
        white: '#FFFFFF',
        gray: '#9CA3AF',
        darkGray: '#1F2937',
        lightGray: '#374151',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(60px, -60px) scale(1.1)' },
          '66%': { transform: 'translate(-60px, 60px) scale(0.9)' },
        }
      }
    },
  },
  plugins: [],
}