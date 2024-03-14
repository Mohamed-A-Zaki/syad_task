/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_color: "#2e735f",
        text_color: "#707070",
      },
    },
  },
  plugins: [],
};
