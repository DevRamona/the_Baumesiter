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
      0:"50rem",
      1:"64.208rem"
    },
    maxWidth:{
      1:"94.625rem",
      "s-2":"6.088rem",
      "l-2":"14.75rem",
      "s-3":"18.727rem",
      "l-3":"45.375rem",
      "l-4":"45.094rem",
      "s-4":"18.611rem",
      "l-5":"44rem",
      "s-5":"16.688rem",
      "l-6":"32.75rem",
      "s-6":"13.517rem",
      "s-7":"10.473rem",
      "l-7":"25.375rem",
      "md-6":"28.643rem",
      "md-7":"22.193rem",
      "md-5":"35.363rem",
      "md-4":"39.439rem",
      "md-3":"39.684rem",
      "md-2":"12.9rem"
    },
    maxHeight:{
      "l-2":"23.563rem",
      "l-3":"54.593rem",
      "s-3":"22.532rem",
      "l-4":"26.125rem",
      "l-5":"41.188rem",
      "l-6":"33.75rem",
      "s-6":"13.929rem",
      "l-7":"48.531rem",
      "md-6":"29.518rem",
      "md-7":"42.445rem",
      "md-5":"33.111rem",
      "md-4":"22.849rem",
      "md-3":"47.747rem",
      "md-2":"20.608rem"
    },
    minHeight:{
      "s-2":"9.725rem",
      "s-4":"10.783rem",
      "s-5":"16rem",
    }
  },
  plugins: [],
}