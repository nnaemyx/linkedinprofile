/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Manrope",
      secondary: "Satochi",
    },
    container: {
      padding: {
        DEFAULT: "3.5rem",
        // lg: '3rem',
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: "#26619C",
        secondary: "#65AB66",
      },
      backgroundImage: {
        pattern: "url('/src/images/Vector.svg')",
      },
    },
  },
  plugins: [],
};
