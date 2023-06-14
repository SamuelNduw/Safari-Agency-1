/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    screens:{
      xs:'400px',
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors: {
        'primary':'#C94D38',
        'secondary':'#FFCB77',
        'accent':"#173e3a"
      }
    },
  },
  plugins: [],
}

