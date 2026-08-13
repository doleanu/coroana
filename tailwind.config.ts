import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FBF8F1",
        ivory: "#F5F0E5",
        linen: "#ECE4D3",
        ink: {
          DEFAULT: "#182742",
          deep: "#101B31",
          soft: "#223354",
        },
        gold: {
          DEFAULT: "#C0A05C",
          bright: "#D8BC7E",
          dim: "#9A7F45",
        },
        charcoal: "#232323",
        stone: "#6E6858",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        regal: "0.32em",
        label: "0.22em",
      },
      maxWidth: {
        page: "76rem",
      },
    },
  },
  plugins: [],
};

export default config;
