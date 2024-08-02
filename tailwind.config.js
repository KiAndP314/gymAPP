/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
        boxShadow:{
          'red-md': '0 4px 6px -1px rgba(255, 0, 0, 0.5), 0 2px 4px -1px rgba(255, 0, 0, 0.25)',
        },
        fontFamily: {
          'audiowide': ['"Audiowide"', 'sans-serif'],
        }
    },
  },
  plugins: [],
}