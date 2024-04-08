
/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');
export default {
  content: [
    "./index.html",
    "./main.js",
    "./src/**/*.js",

  ],
  theme: {
    extend: {},
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}



