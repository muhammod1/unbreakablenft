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
      screens: {
        small: "260px",
      },
      backgroundImage: {
        vector1: 'url("./assets/vector1.png")',
        ellipse1: 'url("./assets/ellipse1.png")',
        ellipse2: 'url("./assets/ellipse2.png")',
      },
      fontSize: {
        "9xl": "clamp(2.5rem, 10.5vw, 7rem);",
      },
    },
  },
  plugins: [],
};
