/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#030908",
        layer: "#121717",
        bgLayer: "#0B1110",
        brand: "#16A085",
        brandDark: "#2A6453",
        muted: "#64706E",
      }
    }
  },
  plugins: []
};
