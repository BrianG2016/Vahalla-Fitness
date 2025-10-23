/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { display: ["Cinzel", "serif"] },
      colors: { gold: "#C6A664", stone: "#1f1e1c" }
    },
  },
  plugins: [],
}