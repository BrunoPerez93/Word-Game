/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'c-white': '#F2F5F9',
      'c-dark': '#030616',
      'c-light-gray': '#97A3B6',
      'c-gray': '#4A5567',
      'c-dark-violet': '#672171',
      'c-pink': '#C951E7',
      'c-violet': '#7429C6',
    },
    extend: {},
  },
  plugins: [],
}

