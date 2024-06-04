/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#00672E",
        primaryColor: "#EFECEA",
      },
      fontSize: {
        custom: "2.875rem",
      },
    },
    fontFamily: {
      outfit: ["Outfit"],
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
