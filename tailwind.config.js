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
    height: {
      "cg-s":"50rem",
      "cg-l":"64.208rem"
    },
    maxWidth:{
      "cg-l":"94.625rem",
      "cg-s":"6.088rem",
      "cg-l-herodiv1":"14.75rem",
      "cg-s-herodiv2":"18.727rem",
      "cg-l-herodiv2":"45.375rem",
      "cg-l-herodiv3":"45.094rem",
      "cg-s-herodiv3":"18.611rem",
      "cg-l-herodiv4":"44rem",
      "cg-s-herodiv4":"16.688rem",
      "cg-l-herodiv5":"32.75rem",
      "cg-s-herodiv5":"13.517rem",
      "cg-s-herodiv6":"10.473rem",
      "cg-l-herodiv6":"25.375rem",
      "cg-md-herodiv5":"28.643rem",
      "cg-md-herodiv6":"22.193rem",
      "cg-md-herodiv4":"35.363rem",
      "cg-md-herodiv3":"39.439rem",
      "cg-md-herodiv2":"39.684rem",
      "cg-md-herodiv1":"12.9rem"
    },
    maxHeight:{
      "cg-l-herodiv1":"23.563rem",
      "cg-l-herodiv2":"54.593rem",
      "cg-s-herodiv2":"22.532rem",
      "cg-l-herodiv3":"26.125rem",
      "cg-l-herodiv4":"41.188rem",
      "cg-l-herodiv5":"33.75rem",
      "cg-s-herodiv5":"13.929rem",
      "cg-l-herodiv6":"48.531rem",
      "cg-s-herodiv6":"20.03rem",
      "cg-md-herodiv5":"29.518rem",
      "cg-md-herodiv6":"42.445rem",
      "cg-md-herodiv4":"33.111rem",
      "cg-md-herodiv3":"22.849rem",
      "cg-md-herodiv2":"47.747rem",
      "cg-md-herodiv1":"20.608rem"
    },
    minHeight:{
      "cg-s-herodiv1":"9.725rem",
      "cg-s-herodiv3":"10.783rem",
      "cg-s-herodiv4":"16rem",
    }
  },
  plugins: [],
}