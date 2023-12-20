/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#030303",
          brighter_gray: "#272728",
        },
      },
    },
  },
  plugins: [],
};
