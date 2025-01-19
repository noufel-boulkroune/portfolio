/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("tailwind-scrollbar")],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700",
        secondary: "#000000",
        dark: "#1A1A1A",
        light: "#F5F5F5",
      },
    },
  },
};
