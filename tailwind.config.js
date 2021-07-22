module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing:{
        '224' : '224px',
        '316' : '316px'        
      },
      boxShadow:{
        'card' : '0px 4px 13px rgba(0,0,0,0.1)',
        'card02' :'0px 4px 30px -1px rgba(0,0,0, 0.07)'
      },
      textColor: {
        purple: "#585b7f",
        red:"FD4323" 
      },
      gradientColorStops:{
        'purple1' : '#585b7f',
        'purple2' : '#a29faf'
      },
      borderColor: {
        purple:'#585b7f'
      }
    },
  },
  variants: {
    extend: {
      padding: ['hover'],
    },
  },
  plugins: [],
}
