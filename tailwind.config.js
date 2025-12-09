/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkviolet: "#1a0033",
      },
      keyframes: {
        slideToAndFro: {
          "0%": { left: "0%", width: "0%" },
          "50%": { left: "0%", width: "100%" }, // expand right
          "51%": { left: "100%", width: "0%" }, // jump to right
          "100%": { left: "0%", width: "100%" }, // expand left
        },
      },
      animation: {
        slideToAndFro: "slideToAndFro 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
