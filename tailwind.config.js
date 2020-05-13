module.exports = {
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    container: {
      center: true,
      padding: '30px'
    },
    extend: {
      translate: {
        'less': '-50%'
      },
      inset: {
        half: '50%',
        0: '0',
        '-full': '-100%'
      },
      colors: {
        red: {
          'active': '#da1214',
        }
      },
      padding: {
        '55px': '3.438rem',
        '22px': '1.375rem',
        '35px': '2.1875rem'
      },
      margin: {
        '30px': '1.875rem'
      },
      fontSize: {
        'mbl-prod-title': '2.13em',
        'desk-prod-title': '2.33em'
      },
      spacing: {
        '27px': '1.719rem',
        '60px': '3.75rem',
        '155px': '9.688rem',
        '300px': '300px',
        '50%' : '50%'
      },
      borderWidth: {
        '1/2': '0.5px'
      },
      maxWidth: {
        'cart': '1090px'
      },
      inset: {
        '35px': '35px',
        '5px': '5px',
        '11px': '11px'
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    fontSize: ['responsive', 'hover'],
    color: ['responsive', 'hover']
  },
  plugins: [],
}