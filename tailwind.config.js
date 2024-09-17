/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "",
        secondary: "",
        danger: "",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      fontSize: {},
      borderRadius: {},
      spacing: {},
      backgroundImage: {},
    },
  },
  plugins: [],
};
