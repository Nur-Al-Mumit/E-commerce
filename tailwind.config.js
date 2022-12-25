/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          from: { transform: "translateY(100%)", opacity: "0" },
          to: { transform: "translateY(0%)", opacity: "1" },
        },
        getscl: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.1)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out",
        getscl: "getscl 1s ease-in-out 200ms",
      },
    },
  },
  plugins: [],
};
