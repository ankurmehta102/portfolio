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
        Comfortaa: ["Comfortaa", "sans-serif"],
        // Roboto: ["Roboto", "sans-serif"],
        Primary: ["Oswald", "sans-serif"],
        // Secondary: ["Quattrocento", "serif"],
        Secondary: ["Quattrocento Sans", "sans-serif"],
      },
      screens: {
        laptop: "500px",
        mobile: "325px",
        fold: "281px",
      },
      colors: {
        // white: "#F8FAFC",
        grey: "#94A3B8",
        white: "#d1d0ce",
        background: "#151517",
        backgroundSecondary: "#1e1e20",
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
    },
  },
  plugins: [],
};
