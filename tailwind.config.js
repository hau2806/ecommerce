/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  baseUrl: ".",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
      colors: {
        primary: {
          "01": "#4D869C",
          "02": "#7AB2B2",
          "03": "#FC6736",
        },
        secondary: {
          "01": "#ccc",
          "02": "#CDE8E5",
          "03": "#eee",
        },
      },
    },
  },
  plugins: [],
};
