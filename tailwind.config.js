/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFBF7',
          100: '#F8F1E3',
          200: '#EDE2CC',
          300: '#DFCDA7',
        },
        cream: {
          50: '#FFFDF9',
          100: '#FFF9EF',
          200: '#F8ECCF',
        },
        gold: {
          light: '#E2CA91',
          warm: '#C5A15A',
          DEFAULT: '#C5A15A',
          dark: '#9B7832',
          antique: '#84662B',
          shimmer: '#F4DE9C',
        },
        burgundy: {
          light: '#8F3E3C',
          DEFAULT: '#6F2927',
          dark: '#511E1C',
        },
        olive: {
          light: '#7A805A',
          DEFAULT: '#5D6244',
          dark: '#454932',
        },
        royal: {
          brown: '#51402F',
          dark: '#42362C',
        },
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', '"Allura"', 'cursive'],
        lora: ['"Lora"', 'serif'],
        devanagari: ['"Noto Serif Devanagari"', 'serif'],
      },
      boxShadow: {
        'royal': '0 10px 40px -10px rgba(81, 64, 47, 0.15)',
        'royal-lg': '0 20px 60px -15px rgba(81, 64, 47, 0.25)',
        'gold-glow': '0 0 25px rgba(197, 161, 90, 0.35)',
      },
      animation: {
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'petal-fall': 'petalFall 12s linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-10%) rotate(0deg)', opacity: '0' },
          '20%': { opacity: '0.8' },
          '80%': { opacity: '0.8' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.9', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.2)' },
        },
      },
    },
  },
  plugins: [],
}
