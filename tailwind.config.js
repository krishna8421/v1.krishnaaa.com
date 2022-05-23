const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IBMPlexMono: ["IBMPlexMono", ...defaultTheme.fontFamily.mono],
        PressStart2P: ["PressStart2P", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        custom: {
          purple: "#6300E1",
          green: "#29E289",
        },
      },
      opacity: {
        99: ".99",
      },
    },
  },
  safelist: [
    {
      pattern: /bg-custom-[a-zA-Z]+/,
    },
  ],
  plugins: [require("@tailwindcss/typography")],
};
