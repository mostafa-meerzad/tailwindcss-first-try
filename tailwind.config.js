/** @type {import('tailwindcss').Config} */
// tailwind.config allows us to control and organize the visual styles of the website

module.exports = {
  content: ["./index.html", "*./js"],
  // dark-mode by default is set based on user-preference (user-system's theme dark/light)
  // defining {darkMode: class} means that you want to apply dark-mode based on a class

  darkMode: "class",
  theme: {
    extend: {
      chestnut:"#973f29"
    },
  },
  plugins: [],
}

