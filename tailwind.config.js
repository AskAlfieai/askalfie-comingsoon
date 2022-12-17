/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundColor: {
        primary: "#FF5A5F",
        "primary-dark": "F43F5E",
      },
    },
  },
  plugins: [],
};
