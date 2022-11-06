/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      bg: {
        primary: '#16162A',
        secondary: '#292946',
        thriary: '#494980',
        contrast: '#EAEAFF',
      },
      basic: {
        primary: '#8E8EA3',
      },
      accent: {
        primary: '#5C7AE5',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
