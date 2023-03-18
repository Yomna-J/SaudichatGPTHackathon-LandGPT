/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
        comfortaa: ["Comfortaa", "cursive"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        primary: "#72A693",
        darkPrimary: "#134e4a",
        secondary: "#E8FFFC",
        darkGray: "#161130",
        lightGray: "#F2F2F2",
        backgroundGray: "#F6F6F6",
      },
    },
  },
  plugins: [],
};
