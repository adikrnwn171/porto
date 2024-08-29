/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Montserrat",
      secondary: "Orbitron",
    },
    extend: {
      colors: {
        primary: "#B809C3",
        secondary: "#ff014f",
        thrid: "#FEF6C7",
        fourth: "#011eff",
      },
    },
  },
  plugins: [],
};
