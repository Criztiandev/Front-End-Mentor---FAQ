module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors : {
              primary:{

              },

              neutral:{
                
              },

              background:{
            
              },

              gradient:{
                "start":"hsl(273, 75%, 66%)",
                "end": "hsl(240, 73%, 65%)"
              },


              text:{
                "Very-dark-desaturated-blue": "hsl(238, 29%, 16%)",
                "Soft-red": "hsl(14, 88%, 65%)",
              },

              other:{
                "divider" : "hsl(240, 5%, 91%)"
              }

        },

        fontFamily:{
            primary: ['Kumbh Sans', "sans-serif"],
        },

        backgroundImage: {
          'hero-desktop': "url('./src/img/bg-pattern-desktop.svg",
          'footer-texture': "url('/img/footer-texture.png')",
        }

    },
  },
  plugins: [],
}