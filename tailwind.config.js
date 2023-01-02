/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../squareBg.svg')",
      },
    },
  },
  plugins: [],
}