/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,ts,tsx}"],
  theme: {
    screens: {
      'xs': '320px',
      '2xs': '360px',
      'sm': '640px',
      'md': '1024px',
      'lg': '1280px',
    },
    colors:{
      'green': '#8FB44D',
      'less-green': '#DDFFA1',
      'light-green': '#d5fe86',
      'brown': '#ad8466',
      'light-brown': '#FAF6EE',
      'white': '#ffffff',
      'black': '#555555',
      'red': '#EB0E0E',
      'light-red': '#FBC9C9',
      'light-blue':'#18BFF3'
    },
    fontFamily: {
      'main': ['"Fredoka"'],
      'text': ['"Roboto"'],
    }
  },
  plugins: [],
}
