import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f1f8fe',
          100: '#dbeefd',
          200: '#b9ddfb',
          300: '#86c6f8',
          400: '#4eadf3',
          500: '#2697e8',
          600: '#1578c6',
          700: '#115fa0',
          800: '#114f82',
          900: '#123f66'
        },
        accent: {
          500: '#ef476f'
        }
      }
    }
  },
  plugins: []
} satisfies Config
