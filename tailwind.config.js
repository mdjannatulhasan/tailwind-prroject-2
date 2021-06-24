module.exports = {
  purge: [
    './public/**/*.html',
     './public/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container:{
      center:'true',
      padding: '2rem'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1314px',
    },
    extend: {
      colors:{
        primary:'#FE4A51',
        heading: '#2D2D2D',
        body: '#888888',
        grayShed: ',rgba(0, 0, 0, 0.63)',
      },
      backgroundImage: theme => ({
        'hero-bg': "linear-gradient(to right bottom, rgba(0, 0, 0,0.63), rgba(0, 0, 0,0.63)),url('../images/hero.png')",
       })
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
