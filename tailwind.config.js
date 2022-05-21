const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IBMPlexMono: ["IBMPlexMono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        custom: {
          purple: "#6300E1",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
