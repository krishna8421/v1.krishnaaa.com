const { spacing, fontFamily } = require("tailwindcss/defaultTheme");

const CUSTOM_PURPLE = "#6300E1";
const CUSTOM_GREEN = "#29E289";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IBMPlexMono: ["IBMPlexMono", ...fontFamily.mono],
        PressStart2P: ["PressStart2P", ...fontFamily.sans],
      },
      colors: {
        custom: {
          purple: CUSTOM_PURPLE,
          green: CUSTOM_GREEN,
        },
      },
      opacity: {
        99: ".99",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.200"),
            "h1,h2,h3,h4": {
              color: theme("colors.gray.100"),
              "scroll-margin-top": spacing[24],
            },
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: theme("colors.blue.600"),
              },
              code: { color: theme("colors.blue.500") },
            },
            blockquote: {
              borderLeftColor: CUSTOM_PURPLE,
              color: theme("colors.gray.300"),
            },
            hr: { borderColor: theme("colors.gray.700") },
            strong: { color: theme("colors.gray.100") },
            thead: {
              th: {
                color: theme("colors.gray.100"),
              },
              borderBottomColor: theme("colors.gray.600"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
          },
        },
      }),
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
      },
    },
  },
  safelist: [
    {
      pattern: /bg-custom-[a-zA-Z]+/,
    },
  ],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
