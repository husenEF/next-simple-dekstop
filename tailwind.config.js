/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
