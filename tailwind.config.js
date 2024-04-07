/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value> )",
        secondary: "rgb(var(--color-secondary) / <alpha-value> )",
        content0: "rgb(var(--color-content0) / <alpha-value> )",
        background: "rgb(var(--color-background) / <alpha-value> )",
        content1: "rgb(var(--color-content1) / <alpha-value> )",
        content2: "rgb(var(--color-content1) / <alpha-value> )",
        gradient0: "rgb(var(--color-gradient0) / <alpha-value> )",
        gradient1: "rgb(var(--color-gradient1) / <alpha-value> )",
        gradient2: "rgb(var(--color-gradient2) / <alpha-value> )",
        cstone: "rgb(var(--color-cstone) / <alpha-value> )",
        floating: "rgb(var(--color-floating) / <alpha-value> )",
      },
      animation: {
        'blob1': 'blobAnimation1 18s ease-in-out infinite',
        'blob2': 'blobAnimation2 18s ease-in-out infinite',
      },
    },
    plugins: [],
  }
}