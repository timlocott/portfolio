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
        ebony: "#575C55",
        persianRed: "#BB4430",
        jasper: "#D1604D",
        bleuDeFrance: "#3083DC",
      },
    },
  },
  plugins: [],
}

