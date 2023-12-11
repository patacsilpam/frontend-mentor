/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ["Barlow", "sans-serif"],
        Fraunces: ["Fraunces","serif"]
      },
      backgroundImage: {
        'hero-pattern': "url('images/desktop/image-header.jpg')",
      }
    },
  },
  plugins: [],
}
