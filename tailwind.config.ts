import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", sm: "1.5rem", lg: "2rem" },
      screens: { lg: "1080px" },
    },
    extend: {
      colors: {
        // Change these values to re-theme the whole site.
        canvas: "#fafaf8",
        surface: "#ffffff",
        ink: {
          DEFAULT: "#16181d",
          soft: "#454a54",
          muted: "#757b87",
        },
        line: "#e7e5df",
        accent: {
          DEFAULT: "#2f5d50",
          soft: "#e8f0ed",
          strong: "#244a40",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(22,24,29,0.04), 0 8px 24px -12px rgba(22,24,29,0.10)",
        lift: "0 2px 4px rgba(22,24,29,0.04), 0 18px 40px -16px rgba(22,24,29,0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
