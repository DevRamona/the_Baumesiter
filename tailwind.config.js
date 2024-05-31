/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        'sm-reference': '130vh',
        'md-reference': '120vh',
        'lg-reference': '1300px'
      },
      width: {
        'w-46-reference': '46vh',
        'w-reference':'400px'

      },
      colors:{
        primaryGreen: "#00672E",
        bgPrimary: "#EFECEA"
      }
    },
    fontFamily: {
      body: ["Outfit"]
    }
  },
  plugins: [],
}