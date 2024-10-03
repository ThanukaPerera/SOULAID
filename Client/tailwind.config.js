/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#FFFFFF",
        "secondary":"#DCDCDC",
        "tertiary": "#1C1C1C",
        "quaternary":"#000000"
      },
      fontFamily: {
        // Adding custom fonts
        
        barlow: [ 'Barlow Condensed', 'sans-serif'],
        
      }

    },
    screens: {
     
      'lg': {'max': '2023px'},
      // => @media (max-width: 1023px) { ... }

      
      'sm': {'max': '1000px'},
      // => @media (max-width: 639px) { ... }
    }
    
  },
  plugins: [],
}