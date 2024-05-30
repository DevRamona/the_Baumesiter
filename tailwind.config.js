/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        'sm': '150vh',
        'md': '150vh',
        'lg': '1480px'
      },
      width: {
        'w-46': '46vh'

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