/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        spoqa: ["'Spoqa Han Sans Neo'", 'sans-serif'],
      },
      colors: {
        primary: '#1229A4',
        blue: {
          1: '#3341C2',
          2: '#616EEE',
          3: '#7681E7',
          4: '#EAECFF',
        },
        active: '#262626',
        inactive: '#D9D9D9',
        black: '#000000',
        white: '#FFFFFF',
        gray: {
          2: '#E5E5E5',
          3: '#CCCCCC',
          4: '#B3B3B3',
          5: '#999999',
          6: '#808080',
          7: '#666666',
          8: '#4D4D4D',
          9: '#333333',
          10: '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
};
