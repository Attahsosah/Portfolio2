/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'bg1': "url('/Users/mac/portfolio-ts/public/img/Self.jpeg')",
     },

  },
  plugins: [
    
      // ...
      require('tailwind-scrollbar'),
  
  ],
}
