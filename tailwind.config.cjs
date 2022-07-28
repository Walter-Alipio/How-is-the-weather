/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        fundo: "url(/src/assets/background/sky.png)",
      },
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
      },
    },
  },
  plugins: [],
};
