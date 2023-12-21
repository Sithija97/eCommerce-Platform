/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#030303",
          brighter_gray: "#1a1a1a",
          brightest_gray: "#272728",
        },
        text: {
          DEFAULT: `rgb(215, 218, 220)`,
          darker: "#818384",
        },
      },
    },
  },
  plugins: [],
};
