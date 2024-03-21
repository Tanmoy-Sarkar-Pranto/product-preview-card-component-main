/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Fraunces: ["Fraunces, 'serif"],
      },
    },
  },
  plugins: [],
}
