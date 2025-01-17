/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFB6C1',
          DEFAULT: '#FF69B4',
          dark: '#DB7093',
        },
        secondary: {
          light: '#E6E6FA',
          DEFAULT: '#DDA0DD',
          dark: '#BA55D3',
        },
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}