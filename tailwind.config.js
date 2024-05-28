/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        ourPrimaryGreen: "#00672E",
        bgPrimary: "EFECEA"
      }
    },
    fontFamily: {
      body: ["Outfit"]
    }
  },
  plugins: [],
}