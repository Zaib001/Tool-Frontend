/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {},
    colors: {
      // Configure your color palette here
      customButton: "#FF4820",
      bodycolor : "#031B34"
    }
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

