/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{css,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   plexSerif: ['IBM Plex Serif', 'serif'],
      //   montserrat: ['Montserrat', 'sans-serif'],
      // },
      colors: {
        yellow: '#ffe93e',
        red: '#f34220',
        blue: '#3681c1',
        darkGrey: '#2c291c',
      },
    },
  },
  plugins: [],
};
