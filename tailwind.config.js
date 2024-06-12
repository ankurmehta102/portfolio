/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        card: "600px",
      },
      height: {
        card: "130px",
      },
      fontFamily: {
        Primary: ["Oswald", "sans-serif"],
        Secondary: ["Quattrocento Sans", "sans-serif"],
      },
      screens: {
        laptop: "500px",
        mobile: "325px",
        fold: "281px",
      },
      colors: {
        grey: "#94A3B8",
        white: "#d1d0ce",
        background: "#151517",
      },
      fontSize: {
        sm: "0.875rem",
        xs: "0.75rem",
        lg: "1.125rem",
      },
      lineHeight: {
        "height-1": "1rem",
        "height-2": "1.25rem",
        "height-3": "1.75rem",
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(#d1d0ce3e, transparent, transparent)",
      },
    },
  },
  plugins: [],
};
