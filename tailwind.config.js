module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern':"url('/images/pattern-bg.svg')",
        'left-btn':"url('/images/icon-prev.svg')",
        'right-btn':"url('/images/icon-next.svg')",
        'curve-pattern':"url('/images/pattern-curve.svg')",
        'quotes-pattern':"url('/images/pattern-quotes.svg')",
      },
      colors:{
        darkBlue: 'hsl(240, 38%, 20%)',
        grayBlue: 'hsl(240, 18%, 77%)'
      },
      fontFamily:{
        inter:['Inter','Sans Serif']
      }
    },
  },
  plugins: [],
}