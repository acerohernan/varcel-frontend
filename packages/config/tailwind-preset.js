/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          300: "#e5e7eb",
          400: "#666666",
          500: "#FAFAFA",
        },
        border_gray: "#eaeaea",
        bg_gray: "#fafafa",
      },
      fontSize: {
        base: "0.875rem",
      },
      fontWeight: {
        base: "500",
      },
    },
  },
  plugins: [],
};
