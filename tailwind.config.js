/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.js", "./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        space: {
          900: "#0B1026",
          800: "#161D40",
          700: "#222B5C",
        },
        accent: "#FFB703",
        mist: "#8F9BC7",
      },
    },
  },
  plugins: [],
};
