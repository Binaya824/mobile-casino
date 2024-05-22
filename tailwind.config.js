/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kanit-light': ['Kanit Light', 'sans-serif'],
        'kanit-light-italic': ['Kanit Light Italic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}