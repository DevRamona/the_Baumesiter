/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        navsize: "0.9375rem",
        smallSize:"2rem",
        smallerSize:"0.938"
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