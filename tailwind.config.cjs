/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        fundo: "url(/src/assets/background/sky.png)",
        line: "url(/src/assets/icons/Line.png)",
      },
      backgroundColor: {
        input: "rgba(255, 255, 255)",
      },
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
      },
      colors: {
        placeholder: "#6AA2D1",
        toggleBG: "rgba(28, 36, 40, 0.49)",
      },
      boxShadow: {
        shadowDropDown: "0px 4px 4px rgba(106, 162, 209, 0.8)",
      },
      gridTemplateColumns: {
        listWeather: "1.5fr repeat(2, auto)1.5fr auto 1.5fr",
      },
    },
  },
  plugins: [],
};
