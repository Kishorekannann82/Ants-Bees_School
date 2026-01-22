/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Nunito Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          gold: '#C9A24D',
          cream: '#FAF7F2',
          sand: '#F1E8D8',
          brown: '#4A3728',
          taupe: '#6B5A4C',
          muted: '#9C8A7A',
          divider: '#E6DCCB',
          teal: '#2F6B5F',
          forest: '#1F4F46',
        },
      },
      boxShadow: {
        glow: '0 24px 48px -20px rgba(201, 162, 77, 0.42)',
      },
    },
  },
  plugins: [],
}

