/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#B7C3CA',
        'primary-light':'#A6A6D4', // Replace with your desired color code
      },
    },
  },
  plugins: [],
}