module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        fontFamily: {
            body:['Montserrat'],
            text:['IBM Plex Sans Thai Looped', 'sans-serif'],
           bode2: ['Montserrat', 'sans-serif;']
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
