/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#509951",
        "primary-dark": "#368047",
        secondary: "#b88b48",
        "secondary-dark": "#a67a37",
        accent: "#1e1a30",
        green: {
          100: "#e6f0e6",
        },
      },
      // Add these new configurations
      keyframes: {
        "logo-cloud": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 4rem))" },
        },
      },
      animation: {
        "logo-cloud": "logo-cloud 30s linear infinite",
      },
    },
  },
  plugins: [],
};
