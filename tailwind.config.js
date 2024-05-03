/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'ubuntu': ['Ubuntu Sans', 'sans-serif'],
        'cutive': ["Cutive Mono", 'monospace'],
        'oswald': ["Oswald", 'sans-serif'],
      }
    },
  },
  plugins: [],
});

