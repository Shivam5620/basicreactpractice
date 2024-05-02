module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        black: { 900: "#000000", "900_66": "#00000066" },
        gray: {
          400: "#c1c1c1",
          600: "#6d6d6d",
          900: "#202020",
          "400_02": "#b8b8b8",
          "900_01": "#272727",
          "400_01": "#bcbcbc",
        },
        blue_gray: { 50: "#ebf2f7" },
        teal: { 300: "#5bc7a0", A100: "#a2ffd2" },
        deep_orange: { 200: "#ffafaf" },
        red: { 600: "#e23d3d" },
      },
      boxShadow: {
        xs: "0px 18px 88px -4px #18274b23",
        sm: "0px 8px 24px -4px #18274b14",
        bs: "inset 0px 8px 28px -6px #18274b1e",
      },
      fontFamily: { roboto: "Roboto" },
      textShadow: { ts: "0px 18px 88px #18274b23" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
