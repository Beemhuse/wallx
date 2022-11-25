/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      'main': ['Montserrat', "sans-serif"] 
      // poppins:'Mulish', sans-serif;'
    },
    extend: {
      colors: {
        primary: '#443792',
        secondary:'#FCF8FF',
        variant:'#F4EAF8',
        dark:'#201E4B',
        // facebook:'#4267B2'
      },
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}