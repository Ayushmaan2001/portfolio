/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:"#39445a",
        secondary:"#48d8a4",
        third:"#f6e6e0",
        fourth:"#eeb4aa",
        fifth:"#7689d8",
        sixth:"#a1eacd",
        seventh:"#fef2d8"
      }
    },
  },
  plugins: [],
}

