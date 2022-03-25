const plugin = require('tailwindcss/plugin')


module.exports = {
    mode: 'jit',
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        colors: {
          primary: '#edeef1',
          secondary: '#252329',
          accent: '#0067e4'
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
        }
      
    },
      
    variants: {
      extend: {},
    },
    plugins: [
      
       
    ],
    

  }