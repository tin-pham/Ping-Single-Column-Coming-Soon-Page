module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueM: {
          300: 'hsl(223, 100%, 88%)',
          400: 'hsl(223, 87%, 63%)',
          800: 'hsl(209, 33%, 12%)',
        },
        redM: 'hsl(354, 100%, 66%)',
        grayM: 'hsl(0, 0%, 59%)',
      },
      fontFamily: {
        ff: 'Libre Franklin',
      },
    },
  },
  variants: {
    extend: {
      scale: ['active'],
    },
  },
  plugins: [],
};
