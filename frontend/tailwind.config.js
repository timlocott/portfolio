/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkSlateGrey: "#315659",
        lighterSlateGrey: "#587274",
        header: "#D4D1CE",
      },
    },
  },
  plugins: [],
}

