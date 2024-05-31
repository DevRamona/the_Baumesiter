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
      }, 
      fontSize: {
        'custom': '2.875rem',  // Add your custom font size class here
      }
    },
    fontFamily: {
      body: ["Outfit"]
    }
  },
  plugins: [],
}