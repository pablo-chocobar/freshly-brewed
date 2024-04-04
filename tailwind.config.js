/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value> )",
        secondary: "rgb(var(--color-secondary) / <alpha-value> )",
        content: "rgb(var(--color-content) / <alpha-value> )",
      },
      animation: {
        'blob1': 'blobAnimation1 6s infinite',
        'blob2': 'blobAnimation2 6s infinite',
      },
    },
    plugins: [],
  }
}