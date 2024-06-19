/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      colors: {
        'gray-950': '#000000',
        'gray-900': '#3d3d3d',
        'gray-800': '#454545',
        'gray-700': '#4f4f4f',
        'gray-600': '#5d5d5d',
        'gray-500': '#6d6d6d',
        'gray-400': '#888888',
        'gray-300': '#b0b0b0',
        'gray-200': '#d1d1d1',
        'gray-100': '#e7e7e7',
        'gray-50': '#f7f7f7'




      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}
