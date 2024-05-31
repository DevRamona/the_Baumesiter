/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '3.5rem',
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
    },
    padding:{
      "p-footer":"2.125rem"
    }
  },
  plugins: [],
}