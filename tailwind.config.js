/** @type {import('tailwindcss').config} */
module.exports = {
  darkMode: false,
    content: ["./public/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          Poppins: ["Poppins"],
          EduAUVICWANTPre: [ "Edu AU VIC WA NT Pre"],
          OpenSans: ["Open Sans"],
          Lato: ["Lato"]
        },
      },
    },

    plugins: [],
  }