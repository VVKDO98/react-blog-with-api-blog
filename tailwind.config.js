/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        notosans: ['Noto Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
    },
    colors: {
      'black': '#000000',
      'white': '#ffffff',
      'lightgreen': '#E8F3F3',
      'green': '#00AAA1',
      'bgcolor': '#E5E5E5',
      'bannercolor': '#F2F8F7',
      'grey': '#555555',
      'bgnews': '#DFF1F0',
      'hrcolor': '#D1E7E5',
      'insta': '#D9D9D9',
      'instaDark': '#B3B3B3',
      'form': '#94D7D3'
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
  ],
}
