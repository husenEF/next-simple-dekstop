/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      raleway: ['Raleway', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        bg: {
          primary: '#16162A',
          secondary: '#292946',
          thriary: '#494980',
          contrast: '#EAEAFF',
        },
        basic: {
          primary: '#F3F3F3',
          secondary: '#8E8EA3',
          thriary: '#818191',
          stroke: '#52526B',
        },
        accent: {
          primary: '#5C7AE5',
          secondary: '#563EEE',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
