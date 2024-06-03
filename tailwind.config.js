/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
<<<<<<< HEAD
      fontSize: {
        navSize: "0.9375rem",
        smallSize:"2rem",
        smallerSize:"0.938"
      },
      colors:{
        primaryGreen: "#00672E",
        PrimaryColor: "#EFECEA"
=======
      lineHeight: {
        'extra-loose': '3.5rem',
      },
      colors:{
        primaryGreen: "#00672E",
        bgPrimary: "#EFECEA"
      }, 
      fontSize: {
        'custom': '2.875rem',  // Add your custom font size class here
>>>>>>> 9d41d745a523c0a8eb09b4281e4e3026d3f2617a
      }
    },
    fontFamily: {
      body: ["Outfit"]
    }
  },
  plugins: [],
}
