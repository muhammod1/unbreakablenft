/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  // purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FFD700",
        black: {
          200: "#1E1E1E",
        },
      },
      fontFamily: {
        audio: ["Audiowide", "cursive"],
        pop: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
