/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "*./js"],
  // dark-mode by default is set based on user-preference (user-system's theme dark/light)
  // defining {darkMode: class} means that you want to apply dark-mode based on a class

  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}

