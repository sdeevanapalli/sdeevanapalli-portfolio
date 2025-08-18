/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000ff", // dark navy background
        accent: "#10b981",  // tech green highlights
      },
      fontFamily: {
        mono: ["Fira Code", "monospace"], // coding vibe
      },
    },
  },
  plugins: [],
};
