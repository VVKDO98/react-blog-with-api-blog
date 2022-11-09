/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        notosans: ['Noto Sans', 'sans-serif'],
      },
    },
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'lightgreen': '#E8F3F3',
      'green': '#00AAA1',
      'bgcolor': '#E5E5E5',
    },
  },
  plugins: [],
}
