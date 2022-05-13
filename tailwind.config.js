


module.exports = {
  content: ['./**.{vue,js}'],
   
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      typography: {
        DEFAULT: {
          css: {
            'code::before': { content: '' },
            'code::after': { content: '' }
          }
        },
        colors: {
          primary: '#edeef1',
          secondary: '#252329',
          accent: '#0067e4', 
          green: '#00FF00',
          mint: '#05CE78',
          aerogreen: '#05CE78' 
        },


        screens: {
          'sm': '640px',
          // => @media (min-width: 640px) { ... }
    
          'md': '768px',
          // => @media (min-width: 768px) { ... }
    
          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
        },
        

     extend: {
       fontFamily: {
         mr: ['Work Sans', 'sans-serif'],
         
       }
     }
    },
      
    variants: {
      extend: {},
    },
    plugins: [
      
      require('@tailwindcss/typography')
    ],
    

    }}