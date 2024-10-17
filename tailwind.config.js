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
        Secondary: ["Quattrocento", "sans-serif"],
      },
      screens: {
        laptop: "500px",
        mobile: "325px",
        fold: "281px",
      },
      colors: {
        // grey: "#94A3B8",
        grey: "#9CA3AF",
        white: "#d1d0ce",
        // background: "#151517",
        background: "#0A0A0A",
        // "background-secondary": "#131315",
        "background-secondary": "#171717cc",
        border: "#FFFFFF1a",
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
          "radial-gradient(rgba(83, 196, 255, 0.2), transparent, transparent)",
        // "rg-background":
        //   "radial-gradient(circle at top center , rgba(19, 29, 66, 0.7) , transparent 40%)",
        "rg-background":
          "radial-gradient(circle at top center, rgba(83, 196, 255, 0.2), transparent 65vh)",
      },
    },
  },
  plugins: [],
};
