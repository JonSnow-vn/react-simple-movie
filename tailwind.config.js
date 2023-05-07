/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM San", "san serif"]
      },
      colors: {
        primary: "#F118C0"
      }
    }
  },
  plugins: [],
}