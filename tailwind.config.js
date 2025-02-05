/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    "text-[#BA1C1C]", "bg-[#BA1C1C]", "bg-[#FEF1F1]",
    "text-[#157F3C]", "bg-[#157F3C]", "bg-[#F2FDF5]",
    "text-[#A26107]", "bg-[#A26107]", "bg-[#FEFCE7]",
    "text-[#0369A0]", "bg-[#0369A0]", "bg-[#F0F9FF]"
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: "#000000",
            },
          },
        },
      },
    },
  },
  plugins: [],
};
