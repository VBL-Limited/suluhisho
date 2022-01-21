module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      extend: {
        fontFamily: {
            body:['Montserrat']
        },

    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
