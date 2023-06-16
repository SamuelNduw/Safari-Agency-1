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
        'secondary-comp-1':'#3774A6',
        'secondary-comp-2':'#5C92B5',
        'secondary-ana-1':'#FFD580',
        'secondary-ana-2':'#FFB759',
        'secondary-mono-1':'#FFDFB0',
        'secondary-mono-2':'#FFE9C4',
        'accent':"#173e3a",
        'accent-comp-1':'#A62F3E',
        'accent-comp-2':'#8F3C51',
        'accent-ana-1':'#2C625E',
        'accent-ana-2':'#427D79',
        'accent-mono-light-1':'#316C66',
        'accent-mono-light-2':'#4B897F',
        'accent-mono-dark-1':'#0F2927',
        'accent-mono-dark-2':'#051918'
      }
    },
  },
  plugins: [],
}

