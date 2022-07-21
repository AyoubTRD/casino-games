const { fontFamily, colors } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        ...fontFamily,
        heading: ['Chivo', ...fontFamily.sans],
      },

      colors: {
        ...colors,
        secondary: '#373737',
        primary: {
          DEFAULT: '#8dc63f',
          50: '#f1f8e8',
          100: '#ddeec5',
          200: '#c6e39f',
          300: '#afd779',
          400: '#9ecf5c',
          500: '#8dc63f',
          600: '#85c039',
          700: '#7ab931',
          800: '#70b129',
          900: '#5da41b',
        },
      },
    },
  },
  plugins: [],
};
