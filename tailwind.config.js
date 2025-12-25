/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#050505',
          green: '#00FF41',
          greenDark: '#00cc33',
          gray: '#1A1A1A',
          lightGray: '#2A2A2A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 20px rgba(0, 255, 65, 0.3)',
        'neon-hover': '0 0 30px rgba(0, 255, 65, 0.5)',
      }
    },
  },
  plugins: [],
}
