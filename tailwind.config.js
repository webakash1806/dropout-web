/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mar: ["Permanent Marker", "cursive"],
        poppins: ["Poppins", "sans-serif"]
      },

    },
  },
  plugins: [require("daisyui")],
}