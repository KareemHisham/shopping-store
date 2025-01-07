/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      color: {
        "primary": "#B88E2F",
        "dark": "#333333",
        "grey": "#666666"
      }
    },
  },
  plugins: [],
}

