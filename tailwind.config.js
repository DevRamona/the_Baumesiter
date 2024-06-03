/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        'sm-reference': '65rem',
        'md-reference': '120vh',
        'lg-reference': '81.25rem'
      },
      width: {
        'w-46-reference': '46vh',
        'w-reference':'25rem'

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
      outfit: ["Outfit"]
    }
  },
  plugins: [],
}