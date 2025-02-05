/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    // stop tailwind purging these dynamic classes
    "text-status-warning", "bg-status-warningBg",
    "text-status-informative", "bg-status-informativeBg",
    "text-status-normal", "bg-status-normalBg",
    "text-status-abnormal", "bg-status-abnormal", "bg-status-abnormalBg",
    "text-status-issue", "bg-status-issueBg",
    "text-gray-600", "bg-gray-300",
       "text-white", 
    "bg-status-warningBg", "bg-status-warning",
    "text-status-warning", 
    "text-status-abnormal", "bg-status-abnormal", "bg-status-abnormalBg",
    "text-status-normal", "bg-status-normal", "bg-status-normalBg",
    "text-status-issue", "bg-status-issue", "bg-status-issueBg",
    "text-gray-600", "bg-gray-300", 
  ],
  theme: {
    extend: {
      colors: {
        status: {
          abnormal: "#BA1C1C",
          abnormalBg: "#FEF1F1",
          normal: "#157F3C",
          normalBg: "#F2FDF5",
          warning: "#A26107",
          warningBg: "#FEFCE7",
          issue: "#0369A0",
          issueBg: "#F0F9FF",
          informative: "#0369A0",
          informativeBg: "#F0F9FF",
        },
      },
    },
  },
  plugins: [],
};
