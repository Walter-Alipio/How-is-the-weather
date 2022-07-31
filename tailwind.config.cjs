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
      colors: {
        placeholder: "#6AA2D1",
        toggleBG: "rgba(28, 36, 40, 0.49)",
      },
    },
  },
  plugins: [],
};
