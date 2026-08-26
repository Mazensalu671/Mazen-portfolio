
import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Pacifico', 'serif'],
      },
      colors: {
        primary: '#3F7DFF',
        'primary-dark': '#2F5FDF',
      },
      animation: {
        'scroll-rtl': 'scroll-rtl 30s linear infinite',
      },
      keyframes: {
        'scroll-rtl': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
