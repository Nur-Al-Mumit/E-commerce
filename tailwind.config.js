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
            transform: "scaleY(1)",
          },
          "100%": {
            transform: "scaleY(1.1)",
          },
        },
        navAni: {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(-0%)",
            opacity: "1",
          },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out",
        getscl: "getscl 500ms ease-in-out 200ms",
        navAni: "navAni 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
