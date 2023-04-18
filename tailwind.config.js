/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/views/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
};
