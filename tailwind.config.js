/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {

    screens: {
      'xs': '320px',
      'sm': '479px',
      'md': '719px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    extend: {
      colors: {
        'hot': '#029FAE',
        'hot-300': '#007580',
        'dark-hot': '#272343',
        'cool': '#F0F2F3',
        'cool-300': '#d1d5db',
        'cool-500': '#636270',
        'new': '#01AD5A',
        'sales': '#F5813F',
      },
    },
    
  },
  plugins: [],
}

