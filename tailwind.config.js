/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary :"#FDFBEE",
      secondary:"#57B4BA",
      accent :"#205781"
      }
    },
  },
  plugins: [],
}

